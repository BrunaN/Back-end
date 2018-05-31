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
    let promise = Post.create(req.body);
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
    let promise = Post.findByIdAndUpdate(id, {
        'texto': req.body.texto
    });
    promise.then(
        function(post){
            res.status(200).json(post);
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}

module.exports.deletePost = function(req, res){
    let id = req.params.id;
    let promise = Post.remove({'_id': id});
    promise.then(
        function(post){
            res.status(200).send("O post foi removido");
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}

module.exports.usuarioPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).populate('usuario');
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