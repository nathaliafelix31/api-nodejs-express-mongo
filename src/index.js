const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //para entender quando enviar uma aquisição em json
app.use(bodyParser.urlencoded({extended: false})) //para entender paramentos passados na url para decodá-los

/*app.get('/', (req, res)=>{ //req = dados da requisição res= objeto utilizafo para enviar pro usuario quando utilizar a rota
    res.send('OK');
});*/
require('./controllers/authController')(app);
app.listen(3000); //porta que quero ouvir