module.exports = (app) => {
  const sourceTree = [{
    type: "folder",
    name: "src",
    parentId: '0',
    id: '0', 
    children: [
      {
        type: "folder",
        name: "Components",
        parentId: '0',
        id: '01',
        children: [
          { type: "file", name: "Modal.js" },
          { type: "file", name: "Modal.css" },
        ]
      },
      { type: "file", name: "index.js" },
      { type: "file", name: "index.html" },
      {
        type: "folder",
        name: "Images",
        parentId: '0',
        id: '02',
        children: [
          { type: "file", name: "picture.png" },
        ]
      }
    ]},
    { type: "file", name: "package.json" },
    { type: "file", name: "some.html" },
    { type: "file", name: "some.pdf" },
    {
      type: "folder",
      name: "Downloads",
      parentId: '4',
      id: '4',
      children: [
        {
          type: "folder",
          name: "Components 2",
          id: '41',
          parentId: '4',
          children: [
            { type: "file", name: "Modal 22.js" },
            { type: "file", name: "Modal 33.css" },
            {
              type: 'folder',
              name: "Last_Folder",
              id: '412',
              parentId: '4',
              children: [ { type: "file", name: "Final.pdf" } ]
            }
          ]
        },
        { type: "file", name: "index_2.js" },
        { type: "file", name: "index_2.html" }
      ]
    }
  ];

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