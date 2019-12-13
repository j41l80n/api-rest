const express = require('express');

const Jogador = require('../models/jogador');
const Jogo = require('../models/jogo');
const Fase = require('../models/fase');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({rota : "jogo"});
});

router.post('/registrar', async(req, res) => {

    const { email } = req.body;

    try {

        if(await Jogador.findOne({ email })) {
            return res.status(400).send({ error: 'jogador já existe' });
        }

        const jogador = await Jogador.create(req.body);
        
        jogador.senha = undefined;

        return res.send(jogador);
    }
    catch(e){ 
        console.log(e);
        return res.status(400).send({error: e});
    }
});

router.get('/:jogadorID', async (req, res) => {
    res.send({jogador : req.id});
});

router.put('/:jogadorID', async (req, res) => {
    res.send({jogador : req.id});
});

router.delete('/:jogadorID', async (req, res) => {
    res.send({jogador : req.id});
});

module.exports = app => app.use('/jogo', router);