var conexao = require('./conexao');

var ProdutoSchema = new conexao.Schema({
    nome:{
        type:String
    },
    codigo:{
        type:String
    },
    preco:{
        type:String
    }
});

module.exports = conexao.model('Produto', ProdutoSchema);