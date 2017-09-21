var nestedVisitor = {
  JSXAttribute: function(node) {
    if (node.node.name.name !== 'testID' && node.node.name.name.match(/^test/)) {
      node.node.name.name = 'data-' + node.node.name.name.toLowerCase()
    }
  }
};

module.exports = function() {
  return {
    visitor: {
      JSXElement: function(path, file) {
        path.traverse(nestedVisitor);
      }
    }
  };
};
