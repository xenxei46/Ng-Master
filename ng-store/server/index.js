const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Universe\n');
});

server.listen(port, hostname, () => {
  console.log(`
  Server running at http://${hostname}:${port}/`);
}
);

/********/

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// // const port = process.env.PORT || 4000;
// const port = 5000;
// const hostname = '127.0.0.1';
// const fruits = require('./fruits'); 

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extend: false }));
// app.use((req, res, next) =>  {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, x-Requested-with, Content-Type, Accept'
//   );
//   next();
// });

// app.get('/fruits', (req, res) => {
//   res.json(fruits);
// });

// app.listen(port, () => {
//   console.log(`server started at http://${hostname}:${port}/`);
// });

// const express = require('express');
// const app = express();

//     const ingredients = [
//     {
//         "id": "1",
//         "item": "Bacon"
//     },
//     {
//         "id": "2",
//         "item": "Eggs"
//     },
//     {
//         "id": "3",
//         "item": "Milk"
//     },
//     {
//         "id": "4",
//         "item": "Butter"
//     }
// ];

// app.get('/ingredients', (req, res) =>{
//     res.send(ingredients);
// });
// app.listen(6069);

// const express = require("express")
// const app = express()
// const port = 4000
// const cors = require("cors")

// app.use(express.urlencoded({ extended: true}))
// app.use(express.json())
// app.use(cors())

// app.get("/", cors(), async (req, res) => {
//     res.send("this is working")
// })

// app.listen(port, () => {
//     console.log(`listening at http://localhost:${post}`)
// })
