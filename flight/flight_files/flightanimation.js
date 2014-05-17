$(function() {

	var all_routes = [
			  {"hops": [{"ip": "217.9.109.116", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "217.9.109.113", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "62.214.35.17", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.106.45", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.106.41", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "195.66.224.142", "geo": {"country": "GB", "subdivisions": ["ENG"], "location": [51.5142, -0.0931], "continent": "EU", "timezone": "Europe/London"}}, {"ip": "82.99.29.53", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "62.109.44.126", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "62.109.44.181", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "62.109.44.154", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "62.109.44.178", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "62.109.44.81", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "82.99.22.186", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "134.25.0.28", "geo": {"country": "SE", "subdivisions": ["AB"], "location": [59.3333, 18.05], "continent": "EU", "timezone": "Europe/Stockholm"}}, {"ip": "134.25.4.140", "geo": {"country": "SE", "subdivisions": [], "location": [62.0, 15.0], "continent": "EU", "timezone": "Europe/Stockholm"}}], "dest_host": "sverigesradio.se", "dest_ip": "134.25.4.140"}, 

			  {"hops": [{"ip": "217.9.109.116", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "217.9.109.113", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "62.214.35.17", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.110.46", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.106.102", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.110.190", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "80.81.193.70", "geo": {"country": "DE", "subdivisions": ["HE"], "location": [50.1167, 8.6833], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "72.52.48.35", "geo": {"country": "US", "subdivisions": ["FL"], "location": [26.0222, -80.1496], "continent": "NA", "timezone": "America/New_York"}}, {"ip": "72.52.9.240", "geo": {"country": "US", "subdivisions": ["FL"], "location": [26.0222, -80.1496], "continent": "NA", "timezone": "America/New_York"}}], "dest_host": "www.spiegel.de", "dest_ip": "72.52.9.240"}, 

			   {"hops": [{"ip": "217.9.109.116", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "217.9.109.113", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "62.214.35.17", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.110.186", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "149.6.170.65", "geo": {"country": "US", "subdivisions": [], "location": [38.0, -97.0], "continent": "NA", "timezone": "None"}}, {"ip": "154.54.61.10", "geo": {"country": "US", "subdivisions": [], "location": [38.0, -97.0], "continent": "NA", "timezone": "None"}}, {"ip": "154.54.74.121", "geo": {"country": "US", "subdivisions": [], "location": [38.0, -97.0], "continent": "NA", "timezone": "None"}}, {"ip": "130.117.51.253", "geo": {"country": null, "subdivisions": [], "location": [47.0, 8.0], "continent": "EU", "timezone": "Europe/Vaduz"}}, {"ip": "154.54.73.114", "geo": {"country": "US", "subdivisions": [], "location": [38.0, -97.0], "continent": "NA", "timezone": "None"}}, {"ip": "130.117.14.206", "geo": {"country": null, "subdivisions": [], "location": [47.0, 8.0], "continent": "EU", "timezone": "Europe/Vaduz"}}, {"ip": "213.140.38.221", "geo": {"country": "ES", "subdivisions": [], "location": [40.0, -4.0], "continent": "EU", "timezone": "None"}}, {"ip": "213.140.49.229", "geo": {"country": "ES", "subdivisions": [], "location": [40.0, -4.0], "continent": "EU", "timezone": "None"}}, {"ip": "213.140.36.21", "geo": {"country": "ES", "subdivisions": [], "location": [40.0, -4.0], "continent": "EU", "timezone": "None"}}, {"ip": "5.53.0.134", "geo": {"country": "ES", "subdivisions": [], "location": [40.0, -4.0], "continent": "EU", "timezone": "None"}}, {"ip": "200.0.16.85", "geo": {"country": "CU", "subdivisions": [], "location": [21.5, -80.0], "continent": "NA", "timezone": "America/Havana"}}, {"ip": "200.0.16.113", "geo": {"country": "CU", "subdivisions": [], "location": [21.5, -80.0], "continent": "NA", "timezone": "America/Havana"}}, {"ip": "200.0.16.141", "geo": {"country": "CU", "subdivisions": [], "location": [21.5, -80.0], "continent": "NA", "timezone": "America/Havana"}}], "dest_host": "www.trabajadores.cubaweb.cu", "dest_ip": "200.55.128.16"}, 

			  {"hops": [{"ip": "217.9.109.116", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "217.9.109.113", "geo": {"country": "DE", "subdivisions": ["BE"], "location": [52.5167, 13.4], "continent": "EU", "timezone": "Europe/Berlin"}}, {"ip": "94.135.127.37", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.35.17", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.106.50", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.106.58", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "62.214.110.50", "geo": {"country": "DE", "subdivisions": [], "location": [51.0, 9.0], "continent": "EU", "timezone": "None"}}, {"ip": "213.248.89.109", "geo": {"country": null, "subdivisions": [], "location": [47.0, 8.0], "continent": "EU", "timezone": "Europe/Vaduz"}}, {"ip": "80.91.251.53", "geo": {"country": null, "subdivisions": [], "location": [47.0, 8.0], "continent": "EU", "timezone": "Europe/Vaduz"}}, {"ip": "80.91.251.144", "geo": {"country": null, "subdivisions": [], "location": [47.0, 8.0], "continent": "EU", "timezone": "Europe/Vaduz"}}, {"ip": "80.91.246.239", "geo": {"country": null, "subdivisions": [], "location": [47.0, 8.0], "continent": "EU", "timezone": "Europe/Vaduz"}}, {"ip": "213.248.78.82", "geo": {"country": null, "subdivisions": [], "location": [47.0, 8.0], "continent": "EU", "timezone": "Europe/Vaduz"}}, {"ip": "217.151.130.30", "geo": {"country": "RU", "subdivisions": [], "location": [60.0, 100.0], "continent": "EU", "timezone": "None"}}, {"ip": "217.151.130.37", "geo": {"country": "RU", "subdivisions": [], "location": [60.0, 100.0], "continent": "EU", "timezone": "None"}}], "dest_host": "gazprom.ru", "dest_ip": "217.151.130.37"}
];

  function transform_routes_to_edges(routes) {

      // just add all routes into one list of edges  (we cannot tell apart route afterwards!)
      var edges = [];
      _.each(routes, function(r) {
	      var last_hop = null;
	      _.each(r["hops"], function(h) {
		      if (h["geo"]) {
			  if (last_hop) {
			      var edge = [last_hop["ip"], h["ip"]];
			      // edge.reverse();  // responses float from dest to source
			      edges.push(edge);
			  }
		      }
		      last_hop = h;
		  });
	  });
      return edges;
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

  var airportMap = {};

  function transition(plane, route) {
    var l = route.node().getTotalLength();
    plane.transition()
        .duration(l * 50)
        .attrTween("transform", delta(plane, route.node()))
        .each("end", function() { route.remove(); })
        .remove();
  }
  
  function delta(plane, path) {
    var l = path.getTotalLength();
    var plane = plane;
    return function(i) {
      return function(t) {
        var p = path.getPointAtLength(t * l);

        var t2 = Math.min(t + 0.05, 1);
        var p2 = path.getPointAtLength(t2 * l);

        var x = p2.x - p.x;
        var y = p2.y - p.y;
        var r = 90 - Math.atan2(-y, x) * 180 / Math.PI;

        var s = Math.min(Math.sin(Math.PI * t) * 0.7, 0.3);

        return "translate(" + p.x + "," + p.y + ") scale(" + s + ") rotate(" + r + ")";
      }
    }
  }

  function fly(origin, destination) {
    var route = svg.append("path")
                   .datum({type: "LineString", coordinates: [airportMap[origin], airportMap[destination]]})
                   .attr("class", "route")
                   .attr("d", path);

    var plane = svg.append("path")
                   .attr("class", "plane")
                   .attr("transform", "translate(-100, -100)")
                   .attr("d", "m25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055,0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263,4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143,2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032,0.52703 -5.1609,1.56679 -5.85232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53,-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574,0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496,-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198,-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147,-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655,-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658,-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0z");

    transition(plane, route);
  }

  function draw_route(points) {
	    coords=[];
	    zurueck=[]
		_.each(points, function(p) {
			coords.push(airportMap[p]);
			zurueck.push(airportMap[p]);
		});
		zurueck.reverse();
		_.each(zurueck,function(p) {
			 coords.push(p);
		})
		
		route=svg.append("path")
			  .datum({type: "LineString", coordinates: coords })
              .attr("class", "traceroute")
              .attr("d", path);
  }


  function loaded(error, countries) { // , airports) {
    svg.append("g")
       .attr("class", "countries")
       .selectAll("path")
       .data(topojson.feature(countries, countries.objects.countries).features)
       .enter()
       .append("path")
       .attr("d", path);


      update_airports_from_routes(all_routes);
  }

  function update_airports_from_routes(routes) {

    var airports = routes_to_topojson(routes);
    var od_pairs = transform_routes_to_edges(routes);

    svg.append("g")
       .attr("class", "airports")
       .selectAll("path")
	.data(topojson.feature(airports, airports.objects.airports).features)
       .enter()
       .append("path")
       .attr("id", function(d) {return d.id;})
       .attr("d", path);

    var geos = topojson.feature(airports, airports.objects.airports).features;
    for (i in geos) {
      airportMap[geos[i].id] = geos[i].geometry.coordinates;
    }

    draw_route(_.flatten(od_pairs));

    //  var i = 0;
    //setInterval(function() {
    // if (i > od_pairs.length - 1) {
    //    i = 0;
    //  }
    //  var od = od_pairs[i];
    //  fly(od[0], od[1]);
    //  i++;
    //	}, 15);  // 150


  }

  queue().defer(d3.json, "json/countries2.topo.json")
      // .defer(d3.json, "json/airports-direct.json")
         .await(loaded);

  $(window).resize(function() {
    currentWidth = $("#map").width();
    svg.attr("width", currentWidth);
    svg.attr("height", currentWidth * height / width);
  });
});