const mongoose = require('../database/index');

const JogoSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },

    descricao: {
        type: String,
        required: true,
        lowercase: true,
    },

    jogador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogadores',
        required: false,
    },

    fase: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fases',
    }],
});

const Jogo = mongoose.model('Jogos', JogoSchema);

module.exports = Jogo;