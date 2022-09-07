const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //para entender quando enviar uma aquisição em json
app.use(bodyParser.urlencoded({extended: false})) //para entender paramentos passados na url para decodá-los


require('./controllers/authController')(app);
require('./controllers/projectController')(app);
app.listen(3000); 