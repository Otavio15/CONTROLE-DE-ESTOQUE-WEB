const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    prateleira: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    },
    categoria: {
        type: String,
        required: false
    }
});

mongoose.model('Product', productShema);