const sourceTree = require('../utils/sourceTree');
module.exports = (app) => {
  const removeChildNodes = children => {
    return children.map(node => {
      if (node.children && node.children.length) {
        return { ...node, children: [] };
      } else {
        return node;
      }
    });
  }

  let children = [];
  const getDesiredChildren = (leafNode, selectedNode) => {
    leafNode && leafNode.map(node => {
      if (node.id === selectedNode.id) {
        children = [...node.children];
      } else {
        getDesiredChildren(node.children, selectedNode);
      }
    });

    return removeChildNodes(children);
  } 

  const getDesiredLeaf = (selectedNode, source) => {
    const children = [];

    sourceTree.forEach(node => {
      if (node.parentId === selectedNode.parentId) {
        children.push(node);
      }
    });

    return getDesiredChildren(children, selectedNode);
  }

  const handleFiles = (node, tree) => {
      if (!node) {
        return removeChildNodes(sourceTree);
      } else {
        return getDesiredLeaf(node);
      }
  };

  app.post("/api/folder_manager", (req, res) => {
    const { node, tree } = req.body;
    const payload = handleFiles(node, tree);

    const trees = {
      oldData: tree ? tree : null,
      newData: payload
    };

    res.json(trees);
  });
};