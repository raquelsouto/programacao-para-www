const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabela = require('./infraestrutura/tabela')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        Tabela.init(conexao)
        
        const app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

    }
})
