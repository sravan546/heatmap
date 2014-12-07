heatmap
=======

This the heatmap algorithm to be used for Howie project .This has bee developed using node.js

Usage.
Object model for inpit data is 

{ label: "Firefox",  hearts:0,heartbreaks:1 ,weight: 29670528, children:
[{ label: "Firefox/xul.dll",  hearts:300,heartbreaks:5000 ,weight: 11996120 }, 
  { label: "Firefox/xpcom.dll",  hearts:0,heartbreaks:100 ,weight: 17880
  }, 
  { label: "Firefox/updater.ini",  hearts:0,heartbreaks:50 ,weight: 707
  }, 
  { label: "Firefox/updater.exe",  hearts:0,heartbreaks:250 ,weight: 243160
  }, 
  { label: "Firefox/update.locale",  hearts:0,heartbreaks:120 ,weight: 43020
  },
  { label: "Firefox/update.locale",  hearts:0,heartbreaks:1 ,weight: 6
  },
   ]}



1)import using require statement like below

    var heatmapModule = require('./heatmapalgorithm.js');

2)Initialize heatmap like below

    var heatMap = new heatmapModule.TreeMap();

3)set json data using treemodel like below

    var treeModel = new treemodel.JSONTreeModel(new Function("return "+data)()); //where data is the json data conforming to above model
    
    heatMap.setTreeModel(treeModel);
    
4)Then call compute.getRoot() on heatmap object like below to get the output

    heatMap.compute().getRoot();

