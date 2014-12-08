var heatmapModule = require('./heatmapalgorithm.js');
var fs = require("fs");
var treemodel = require("./treeModel.js");


var fileName = "smallData.js";

var fs = require("fs");
var data = fs.readFileSync("./smallData.js", "utf8");



var heatMap = new heatmapModule.TreeMap();


 var treeModel = new treemodel.JSONTreeModel(new Function("return "+data)());
      heatMap.setTreeModel(treeModel);
     console.log(heatMap.compute(300,700).getRoot()); 



//console.log(heatMap.compute());

//console.log(heatmapModule.Treemap.squarify([0,0,900,300],[.25,.04716253184550722,.11885651163331237,.21906028099441757]	));

//console.log(heatmapModule.skewVals([400,500,100,4,5,6,7]));