
console.log("loot loaded.");
var loot_url = chrome.extension.getURL("loot/loot.html"),
    lootData = [],
    dest_host,
    dest_ip;

var MARKER_PATH = "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
    MARKER_CORRECTION = ",translate(-5,-5),scale(0.2)";

$(function() {
	$('body').append('<div id="loot_overlay"><div id="branding"></div><div id="hostname"></div><div id="metadata"><ul></ul></div><div id="map"></div></div>');
	  
	setTimeout(function() {$("#loot_overlay").css("opacity","1")}, 100);

  function update_metadata(data) {
    var hosts = "";
    _.each(lootData, function(r) { hosts += ("<li>" + r.dest_host + "</li>") })
    $("#metadata ul").html("<li>"+dest_host+"</li>"+hosts);
  }

  function transform_route_to_path(route, options) {
      // options {omit_self_loops: true}
      var path = [], 
	  last_hop = null;
      _.each(route["hops"], function(h) {
	      if (h["geo"] && h["geo"]["location"]) {
		  if (! options || ! options.omit_self_loops || ! last_hop || last_hop["ip"] != h["ip"]) {  
		      path.push(h["ip"]);
		  }
		  last_hop = h;
	      }
	  });
      return path;
  }

  function routes_to_topojson(routes) {

      var points = [],
	  seen = {};
      
      _.each(routes, function(r) {
	      _.each(r["hops"], function(h) {
		      if (! seen[h["ip"]]) {
			  if (h["geo"] && h["geo"]["location"]) {
			      var topo_location = [ h["geo"]["location"][1], h["geo"]["location"][0] ]; // we have to swap them!
			      points.push( {"type":"Point","id":h["ip"],"coordinates":topo_location} );
			      seen[h["ip"]] = true;
			  }
		      }
		  });
	  });
      var topo = {"type":"Topology",
		  "objects":{"airports":{"type":"GeometryCollection", "geometries":points}},
		  "arcs":[],"transform":{"scale":[1.0,1.0],"translate":[0.0,0.0]}};
      
      return topo;
  }

  // var OD_PAIRS = transform_routes_to_edges(all_routes);

  //var OD_PAIRS = [
  //  ["ATL", "PEK"],
  //  ["PEK", "LHR"]
  //];

  var currentWidth = $('#map').width();
  var width = 938;
  var height = 620;

  var projection = d3.geo
                     .mercator()
                     .scale(150)
                     .translate([width / 2, height / 1.41]);

  var path = d3.geo
               .path()
               .pointRadius(2)
               .projection(projection);
  
  var svg = d3.select("#map")
              .append("svg")
              .attr("preserveAspectRatio", "xMidYMid")
              .attr("viewBox", "0 0 " + width + " " + height)
              .attr("width", currentWidth)
              .attr("height", currentWidth * height / width);


  function transition(path, marker) {
      marker.transition()
	  .duration(7500)
	  .attrTween("transform", translateAlong(path.node()));
	  // .each("end", transition);// infinite loop
  }

  function translateAlong(path) {
    var l = path.getTotalLength();
    return function(i) {
      return function(t) {
       var p = path.getPointAtLength(t * l);
       return "translate(" + p.x + "," + p.y + ")"+MARKER_CORRECTION;  //Move marker
      }
    }
  }


  function loaded(error, countries) { // , airports) {
    svg.append("g")
       .attr("class", "countries")
       .selectAll("path")
       .data(topojson.feature(countries, countries.objects.countries).features)
       .enter()
       .append("path")
       .attr("d", path);

    // static demo
    // update_airports_from_routes(all_routes);
  }

  function update_airports_from_routes(routes) {

      var airports = routes_to_topojson(routes),
	  airportMap = {};
    // var od_pairs = transform_routes_to_edges(routes);

    svg.append("g")
       .attr("class", "airports")
       .selectAll("path")
	.data(topojson.feature(airports, airports.objects.airports).features)
       .enter()
       .append("path")
       .attr("id", function(d) {return d.id;})
       .attr("d", path);

    var geos = topojson.feature(airports, airports.objects.airports).features;
    for (var i in geos) {
      airportMap[geos[i].id] = geos[i].geometry.coordinates;
    }

    _.each(routes, function(route) {
	    var airports = transform_route_to_path(route, {omit_self_loops: true}),
		airports_back = airports.slice(0,-1).reverse(),
		airports_roundtrip = airports.concat(airports_back);

	    // route as lines

	    var coords = _.map(airports_roundtrip, function(a) { return airportMap[a]; }),
		p;
	    p = svg.append("path")
		.datum({type: "LineString", coordinates: coords })
		.attr("class", "traceroute "+"desthost-"+route.dest_host+(route.is_main ? " main-page" : ""))
		.attr("d", path);


	    // animate data packet 

	    startPoint = airportMap[airports_roundtrip[0]];
	    // var marker = svg.append("circle").attr("class", "packet");
	    var marker = svg.append("path")
		.attr("class", "packet"+(route.is_main ? " main-page" : ""))
		.attr("d", MARKER_PATH)
		.attr("r", 5).attr("transform", "translate(" + startPoint + ")"+MARKER_CORRECTION);
	    transition(p, marker);

    });


    //  var i = 0;
    //setInterval(function() {
    // if (i > od_pairs.length - 1) {
    //    i = 0;
    //  }
    //  var od = od_pairs[i];
    //  fly(od[0], od[1], airportMap);
    //  i++;
    //	}, 15);  // 150


  }

  queue().defer(d3.json, chrome.extension.getURL("flight/json/countries2.topo.json"))
         .await(loaded);

  var last_lootData = null;
  setInterval(function() {
  	
  	if (lootData.length>0 && last_lootData != lootData) {
	    console.log(lootData);

	    update_airports_from_routes(lootData)
   	    last_lootData = lootData;

	    //test	  update_airports_from_routes(all_routes);

      update_metadata(lootData);

  	}
  }, 2000);

  $(window).resize(function() {
    currentWidth = $("#map").width();
    svg.attr("width", currentWidth);
    svg.attr("height", currentWidth * height / width);
  });


});



/* loot */


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  	// Append API resp
  	if (request.data) {
  		console.log(request.data);
  		if (request.data.routes && request.data.routes.len!=0) {

			lootData = lootData.concat(request.data.routes);
      dest_host = request.data.main_host;
      dest_ip = request.data.dest_ip;

			console.log(lootData);
        	// chrome.runtime.sendMessage({ data: data });
  		}
  		
  	};

    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    if (request.greeting == "hello")
      sendResponse({ack: "goodbye"});

  });