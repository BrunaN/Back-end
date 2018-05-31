let Usuario = require('../models/usuario.js');
let Post = require('../models/post.js');

module.exports.listaUsuarios = function(req, res){
    let promise = Usuario.find();
    promise.then(
        function(usuarios){
            res.status(200).json(usuarios);
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}

module.exports.obterUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id);
    promise.then(
        function(usuario){
            res.status(200).json(usuario);
        }
    ).catch(
        function(erro){
            res.status(404).send(erro);
        }
    )
};

module.exports.inserirUsuario = function(req, res){
    let promise = Usuario.create(req.body);
    promise.then(
        function(usuario){
            res.status(201).json(usuario);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.updateUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findByIdAndUpdate(id, {
        'nome': req.body.nome
    });
    promise.then(
        function(usuario){
            res.status(200).json(usuario);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.deleteUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.remove({'_id':id});
    promise.then(
        function(usuario){
            res.status(200).send("Usuário removido");
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.obterPostsDoUsuario = function(req, res){
    let id = req.params.id;
    let promise = Post.find({'usuario': id});
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