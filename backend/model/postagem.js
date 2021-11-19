const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Postagem {
    adicionar(postagem, res) {
        const data = moment(postagem.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const atendimentoDatado = { ...postagem, data }

        const sql = 'INSERT INTO Postagem SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(postagem)
                }
            })
        }

    listar(res) {
        const sql = 'SELECT * FROM Postagem'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscarPorId(id, res) {
        const sql = `SELECT * FROM Postagem WHERE Id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const retornaUmPost = resultados[0]

            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(retornaUmPost)
            }
        })
    }

    alterar(id, valores, res) {
        const sql = 'UPDATE Postagem SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deletar(id, res) {
        const sql = 'DELETE FROM Postagem WHERE id = ?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Postagem