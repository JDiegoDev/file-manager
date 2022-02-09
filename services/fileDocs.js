module.exports = (app) => {
  const structure = [{
    type: "folder",
    name: "src",
    childrens: [
      {
        type: "folder",
        name: "Components",
        childrens: [
          { type: "file", name: "Modal.js" },
          { type: "file", name: "Modal.css" }
        ]
      },
      { type: "file", name: "index.js" },
      { type: "file", name: "index.html" }
    ]},
    { type: "file", name: "package.json" }
  ];


  app.get("/api/folder_manager", (req, res) => {
    res.json(structure);
  });
};