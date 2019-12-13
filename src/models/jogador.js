const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const JogadorSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    senha: {
        type: String,
        required: true,
        select: false,
    },

    dataCriacao: {
        type: Date,
        default: Date.now,
    }
});

JogadorSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const Jogador = mongoose.model('Jogadores', JogadorSchema);

module.exports = Jogador;