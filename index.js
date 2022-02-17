const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
	extended: true
  }));
  
app.use(bodyParser.json());

require("./services/fileDocs")(app);

/*
*	Route Handler
*/
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

