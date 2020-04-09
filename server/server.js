require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/Usuarios', function (req, res) {
  res.json('Get Usuario.');
});

app.post('/Usuarios', function (req, res) {

  let body = req.body;
  if(body.Nombre === undefined){
        res.status(400).json({
          ok: false,
          mensaje: 'El Nombre Es Nesario'
        })
  }else{

    res.json({
      persona: body
    });
  }

  
});

app.put('/Usuarios/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/Usuarios', function (req, res) {
  res.json('Delete Usuario.');
});

app.listen(process.env.PORT, function () {
  console.log('Escuchando Puerto - online');
});


