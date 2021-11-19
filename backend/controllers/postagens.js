const Post = require('../model/postagem')

module.exports = app => {
    app.get('/posts', (req, res) => {
        
        Post.listar(res)
    })

    app.get('/posts/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Post.buscarPorId(id, res)
    })

    app.post('/posts', (req, res) => { 
        const postagem = req.body

        Post.adicionar(postagem, res)
    })

    app.put('/posts/:id', (req, res) => { 
        const id = parseInt(req.params.id)
        const valores = req.body

        Post.alterar(id, valores, res)
    })

    app.delete('/posts/:id', (req, res) => { 
        const id = parseInt(req.params.id)

        Post.deletar(id, res)
    })
}