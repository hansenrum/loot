var compiler = require('can-compile');
var fs = require('fs');

compileFile('../panel/views/rules.ejs');
compileFile('../panel/views/rule-resources.ejs');


  function compileFile(file) {
    var fileCompiledName = file.replace('.ejs', '-compiled.ejs');
  	compiler.compile(file, function(error, output) {
  	  console.log(output);
  	  //Remove old file,
  	  fs.unlink(fileCompiledName, function (err) {
  	    if (err) { console.log(fileCompiledName+' did not exist'); }
  	    else { console.log('successfully deleted '+fileCompiledName); }

  	    //create and write file,
  	    fs.writeFile(fileCompiledName, output, function (err) {
  	      if (err) throw err;
  	      console.log(fileCompiledName+' is saved!');
  	    });
  	  });
    });
  }