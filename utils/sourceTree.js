module.exports = [{
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