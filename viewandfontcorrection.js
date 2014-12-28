//var treemodel = require("./treeModel.js");

//**********test cases**********
//6 posts
//more than 6 posts
//all max cases
//all min cases
//all mid size cases
//mid and 2max
//mid and min's
//3 max cases
//4 max cases
//5 max cases
//6 max cases
//3,4,5,6 near max case
//try all above in different order
//boundry conditions

//************remaining tasks **************
//create new json file in case of less than 6
//keep leftover nodes in new json 
//check if leftover json has any node if so append it to new json 
//introduce another object call actualviews


//module.exports.ViewCorrecter= function(){
ViewCorrecter= function(){
	this.correctViews = function(treemodel){
		var currentNode=treemodel.getRoot();
		var maxViewsCount = treemodel.getViews(currentNode);
		var idealMinViewCount = maxViewsCount * .18;
		var idealMaxViewCount  = maxViewsCount * .32;
		var nodes = treemodel.getChildren(currentNode);
		var comparator = new _WeightComparator(treemodel);
		nodes = nodes.reverse(comparator.sortFunction);
		var i=0;
		var collectiveViewCount =0;
		var output =[];
		var length=nodes.length-1;

		while(i<=length)
		{
			var node = nodes.pop();
			output[i]=node;
			var viewCount = node.views;
			if(viewCount < idealMinViewCount)
			{
				node.views=idealMinViewCount;
				collectiveViewCount+=idealMinViewCount;
			}
			else if(viewCount > idealMaxViewCount){
				node.views=idealMaxViewCount;
				collectiveViewCount+=idealMaxViewCount;
			}
			else{	
				collectiveViewCount+=viewCount;
			}
			if(collectiveViewCount>maxViewsCount){	
				maxViewsCount=collectiveViewCount;
				currentNode.views=maxViewsCount;
				if(i<=5){  
					length=5;
				} 
			}

			fixfont(node,maxViewsCount);

			i++;
		}
		currentNode.leftOverChildren=nodes;
		currentNode.children=output;

		console.log(treemodel.getRoot());		
	};

	function fixfont(node,maxViewsCount){
	//	lines[]  = breakSentence()
	}

};