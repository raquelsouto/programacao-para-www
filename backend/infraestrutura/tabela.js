class Tabela {
    init(conexao) {
        this.conexao = conexao
        this.criarPostagem()
    }

    criarPostagem() {
        const sql = 'CREATE TABLE IF NOT EXISTS Postagem (id int NOT NULL AUTO_INCREMENT, titulo varchar(100) NOT NULL, textoDoPost text NOT NULL, data datetime NOT NULL, PRIMARY KEY (id))'

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela de Postagem criada com sucesso')
            }
        })
    }

}

module.exports = new Tabela()