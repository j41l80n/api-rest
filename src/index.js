const express = require('express');
const bodyPArser = require('body-parser');

const app = express();

app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send({rota : "inicio"});
});

require('./controller/fase.controller')(app);
require('./controller/jogo.controller')(app);
require('./controller/jogador.controller')(app);

app.listen(3000);