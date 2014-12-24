var heatmapModule = require('./heatmapalgorithm.js');
var fs = require("fs");
var treemodel = require("./treeModel.js");
var viewcorrector=require("./viewcorrection.js");


var fileName = "smallData.js";

var fs = require("fs");
var data = fs.readFileSync("./smallData.js", "utf8");



var heatMap = new heatmapModule.TreeMap();


 var treeModel = new treemodel.JSONTreeModel(new Function("return "+data)());

	var corrector=new viewcorrector.ViewCorrecter();
	corrector.correctViews(treeModel);

     heatMap.setTreeModel(treeModel);
     //console.log(heatMap.compute(300,700).getRoot()); 

