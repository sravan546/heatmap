var heatmapModule = require('./heatmapalgorithm.js');
var fs = require("fs");
var treemodel = require("./treeModel.js");


var fileName = "smallData.js";

var fs = require("fs");
var data = fs.readFileSync("./smallData.js", "utf8");



var heatMap = new heatmapModule.TreeMap();

heatMap.setColorProvider({
  getColor: function(node) {

 	var hearts 		 = node.hearts;
  	var heartBreaks = node.heartbreaks;


  	var colorWeight= hearts/(hearts+heartBreaks);
     var result = "#FCB617";

      if (colorWeight<=1 && colorWeight>=.85714284 ) {
        result = "#009345";
      } else if (colorWeight>=.7142857 && colorWeight<=.85714284) {
        result = "#8BC53F";
      } else if (colorWeight>=.57142856 && colorWeight<=.7142857) {
        result = "#FCB617";
      } else if (colorWeight>=.42857142 && colorWeight<=.57142856) {
        result = "#DB801C";
      } else if (colorWeight>=.28571428 && colorWeight<=.42857142) {
        result = "#B94718";
      } else if (colorWeight>=.14285714 && colorWeight<=.28571428) {
        result = "#921E1E";
      }
      else if (colorWeight>=0 && colorWeight<=.14285714) {
        result = "#921E1E";
      }
    
    return result;
  }
});


 var treeModel = new treemodel.JSONTreeModel(new Function("return "+data)());
      heatMap.setTreeModel(treeModel);
     console.log(heatMap.compute().getRoot(0)); 



//console.log(heatMap.compute());

//console.log(heatmapModule.Treemap.squarify([0,0,900,300],[.25,.04716253184550722,.11885651163331237,.21906028099441757]	));

//console.log(heatmapModule.skewVals([400,500,100,4,5,6,7]));