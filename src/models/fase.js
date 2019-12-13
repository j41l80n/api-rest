const mongoose = require('../database/index');

const FaseSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },

    descricao: {
        type: String,
        required: false,
        lowercase: true,
    },

    jogo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogos',
        required: false,
    },

    score: {
        type: Number,
        required: true,
    },

    tempoDeJogo: {
        type: Date,
    },

    jogador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogadores',
        required: false,
    },
    
    faseStatus: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const Fase = mongoose.model('Fases', FaseSchema);

module.exports = Fase;