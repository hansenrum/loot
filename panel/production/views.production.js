(function(window) {
  can.view.preload('views_rules_ejs', can.EJS(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push(can.view.txt(0,'',0,this,function(){var ___v1ew = []; $.each( rules, function( i, rule ) { ___v1ew.push("\n  <fieldset>\n    <legend>\n      <input class=\"siteEnabled\" type=\"checkbox\" placeholder=\"Enabled\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){var ___v1ew = []; if(rule.attr('enabled')) { ___v1ew.push(" checked=\"checked\""); } ;return ___v1ew.join('')}));
___v1ew.push(" ",can.view.pending(),"/>");___v1ew.push("\n      <div class=\"input-prepend\">\n        <span class=\"add-on\"><i class=\"icon-globe\"></i></span>\n        <input class=\"domainURL span6\" type=\"text\" placeholder=\"domain URL\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return  rule.attr('domainURL') }));___v1ew.push("\" ",can.view.pending(),"/>");___v1ew.push("\n      </div>\n      <a class=\"btn btn-add\"><i class=\"icon-plus-sign\"></i></a>\n    </legend>\n    \n    <ul class=\"list-resources\">\n      ");___v1ew.push(can.view.txt(0,'ul',0,this,function(){var ___v1ew = []; if(rule.resources) { ___v1ew.push("\n        ");___v1ew.push(can.view.txt(0,'ul',0,this,function(){ return  can.view.render('//../views/rule-resources.ejs', {'resources': rule.resources}) }));___v1ew.push("\n      "); } ;return ___v1ew.join('')}));
___v1ew.push("\n    </ul>\n    <div class=\"clear\"></div>\n  </fieldset>\n  \n"); }); ;return ___v1ew.join('')}));
; return ___v1ew.join('')}} }));
  can.view.preload('views_rule-resources_ejs', can.EJS(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push(can.view.txt(0,'ul',0,this,function(){var ___v1ew = []; $.each( resources, function( i, resource ) { ___v1ew.push("\n  <li>\n    <input class=\"resourceEnabled\" type=\"checkbox\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){var ___v1ew = []; if(resource.attr('enabled')) { ___v1ew.push(" checked=\"checked\""); } ;return ___v1ew.join('')}));
___v1ew.push(" ",can.view.pending(),"/>");___v1ew.push("\n    <input class=\"resourceURL span5\" type=\"text\" placeholder=\"Resource URL\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return  resource.attr('resourceURL') }));___v1ew.push("\" ",can.view.pending(),"/>");___v1ew.push("\n    <span class=\"icon-chevron-right\"></span>\n    <input class=\"resourceRedirectURL span5\" type=\"text\" placeholder=\"Resource Redirect URL\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return  resource.attr('resourceRedirectURL') }));___v1ew.push("\" ",can.view.pending(),"/>");___v1ew.push("\n    <a class=\"btn btn-delete\"><i class=\"icon-minus-sign\"></i></a>\n  </li>\n"); }); ;return ___v1ew.join('')}));
; return ___v1ew.join('')}} }));
})(this);