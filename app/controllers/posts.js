let jwt = require('jsonwebtoken');

let Post = require('../models/post.js');

module.exports.listaPosts = function(req, res){
    let promise = Post.find();
    promise.then(
        function(posts){
            res.status(200).json(posts);
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}

module.exports.obterPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id);
    promise.then(
        function(post){
            res.status(200).json(post);
        }
    ).catch(
        function(erro){
            res.status(404).send('Post não encontrado');
        }
    )
};

module.exports.inserirPost = function(req, res){
    let payload = jwt.decode(req.query.token);

    let post = new Post({
        texto: req.body.texto,
        likes: req.body.likes,
        usuario: payload.id
    });

    let promise = Post.create(post);
    promise.then(
        function(post){
            res.status(201).json(post);
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}

module.exports.updatePost = function(req, res){
    let id = req.params.id;

    let post = new Post({
        _id: req._id,
        texto: req.body.texto,
        likes: req.body.likes,
        usuario: req.body.usuario
    });

    let payload = jwt.decode(req.query.token);

    let promise = Post.findByIdAndUpdate(id, post);
    promise.then(
        function(post){
            if(req.body.usuario == payload.id){
                res.status(200).json(post);
            }else{
                res.status(500).send("Usuário inválido");
            }
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}

module.exports.deletePost = function(req, res){
    let id = req.params.id;

    let payload = jwt.decode(req.query.token);

    let promise = Post.remove({'_id': id});
    promise.then(
        function(post){
            if(req.body.usuario == payload.id){
                res.status(200).json("O post foi removido");
            }else{
                res.status(500).send("Usuário inválido");
            }
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}

module.exports.usuarioPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).populate('usuario', 'senha');
    promise.then(
        function(post){
            res.json(post.usuario);
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}