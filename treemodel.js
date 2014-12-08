
/*
 * tree model, basing on a JSON "tree" representation (nested list)
 * the model also provides weights and labels for each node
 *
 * e.g. { "label": "root", "weight": 4, "children": [{ "label": "only-child", "weight": 4, "children": [] }] }
 */
module.exports.JSONTreeModel = function (treeRep) {

  /** private members **/
  var root = treeRep;

  /** privileged methods **/
  
  /*
   * returns the root node
   */
  this.getRoot = function() {
    return root;
  };

  /*
   * returns the children of the given node
   */ 
  this.getChildren = function(node) {  
    if (node.children && node.children.length) {
      return node.children;
    } else {
      return [];
    }
  };
  
  /*
   * indicates if the given node has children or not
   */ 
  this.hasChildren = function(node) {
    if (node.children && node.children.length && node.children.length>0) {
      return true;
    } else {
      return false;
    }
  };
  
  /*
   * returns the parent node for the given node
   */
  this.getParent = function(node) {
    return node._parent;  // public members access; ugly
  };

  /*
   * returns the weight of the given node
   */  
  this.getViews = function(node) {
    if (node.views) {
      return node.views;
    } else {
      return 0;
    }
  };
  
  /*
   * returns the label of the given node
   */  
  this.getLabel = function(node) {
    if (node.label) {
      return node.label;
    } else {
      return "";
    }
  };
  
  /** private methods */
  
  // recursively builds the parent/child relationships
  function _build(_lst, _parent) {
    for (var i = 0; i < _lst.length; i++) {
      var node = _lst[i];
      node._parent = _parent;  // public assign of parent; ugly 
      if (node.children) {
        _build(node.children, node);
      }
    }
  }

  // initialization
  if (treeRep.children) {
    _build(treeRep.children, treeRep);
  }
  
}

