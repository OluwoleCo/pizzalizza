var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let pizza = [
        {
        id: 1,
        image: '',
        name: 'Peperoni',
        alt: ''
      },
      {
        id: 2,
        image: '',
        name:'Cheese Pizza',
        alt: ''
      },
      {
        id: 3,
        image: '',
        name: 'Suya Pizza',
        alt: ''
      },
      {
        id: 4,
        image: '',
        name: 'Peperoni',
        alt: ''
      },
      {
        id: 5,
        image: '',
        name:'Cheese Pizza',
        alt: ''
      },
      {
        id: 6,
        image: '',
        name: 'Suya Pizza',
        alt: ''
      }
]

app.get('/pizza', function(req, res) {
    res.send(pizza);
})


app.listen(8888, function () {
  console.log('listening on port 8888!')
})
