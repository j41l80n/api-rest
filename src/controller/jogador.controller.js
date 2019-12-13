const express = require('express');

const Jogador = require('../models/jogador');
const Jogo = require('../models/jogo');
const Fase = require('../models/fase');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({rota : "jogador"});
});

router.post('/criar', async(req, res) => {

    const { email } = req.body;

    try {

        if(await Jogador.findOne({ email })) {
            return res.status(400).send({ error: 'jogador já existe' });
        }

        const jogador = await Jogador.create(req.body);
        
        jogador.senha = undefined;

        return res.send(jogador);
    }
    catch(e) { 
        console.log(e);
        return res.status(400).send({error: e});
    }
});

router.get('/:jogadorID', async (req, res) => {
    try {
        const jogador = await Jogador.findById(req.params.jogadorID).populate('jogador');
        return res.send({ jogador })
    } catch (e) { 
        console.log(e);
        return res.status(400).send({ error: e });
    }
});

router.put('/:jogadorID', async (req, res) => {
    try {
        await Jogador.updateOne(req.params.jogadorID, req.params);
        return res.send()
    } catch (e) { 
        console.log(e);
        return res.status(400).send({ error: e });
    }
});

router.delete('/:jogadorID', async (req, res) => {
    try {
        await Jogador.findByIdAndDelete(req.params.jogadorID);
        return res.send();
    } catch (e) { 
        console.log(e);
        return res.status(400).send({ error: e });
    }
});

module.exports = app => app.use('/jogador', router);