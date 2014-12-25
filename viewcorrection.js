var treemodel = require("./treeModel.js");

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
//boundry conditions

//************remaining tasks **************
//create new json file in case of less than 6
//keep leftover nodes in new json 
//check if leftover json has any node if so append it to new json 


module.exports.ViewCorrecter= function(){

	this.correctViews = function(treemodel){
		var currentNode=treemodel.getRoot();
		var maxViewsCount = treemodel.getViews(currentNode);
		var idealMinViewCount = maxViewsCount * .12;
		var idealMaxViewCount  = maxViewsCount * .42;
		//console.log('max views '+maxViews);
		var nodes = treemodel.getChildren(currentNode);
		//console.log("nodes length" + nodes.length);
		var i=0;
		var collectiveViewCount =0;
		var output =[];
		var length=nodes.length-1;
		while(i<=length)
		{
			var n = nodes[i];
			output[i]=n;
			var viewCount = n.views;
			if(viewCount < idealMinViewCount)
			{
				n.views=idealMinViewCount;
				collectiveViewCount+=idealMinViewCount;
			}
			else if(viewCount > idealMaxViewCount){
				n.views=idealMaxViewCount;
				collectiveViewCount+=idealMaxViewCount;
			}
			else
			{	
				collectiveViewCount+=viewCount;
			}
			if(collectiveViewCount>maxViewsCount)
			{	
				maxViewsCount=collectiveViewCount;
			//	if(i==5){
					currentNode.views=maxViewsCount;
					if(i<6){
						length=5;
					} 
					
			//	} 
			}
			//console.log("view counts" + viewCount);
			i++;
		}
		treemodel.getRoot().children=output;
		console.log(treemodel.getRoot());		
	};

};