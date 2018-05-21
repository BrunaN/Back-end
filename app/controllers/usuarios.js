let usuarios = [{_id: "1", nome: "Bruna", email: "brubsnev@gmail.com", senha: "a231hbuj"}]

module.exports.listaUsuarios = function(req, res){
    res.json(usuarios);
}

module.exports.obterUsuario = function(req, res){
    let id = req.params.id;
    let usuario = usuarios.find((e)=>(e._id==id));
    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).send('user not found');
    }
};

module.exports.inserirUsuario = function(req, res){
    usuarios.push(req.body);
    res.status(200).send(req.body);
}

module.exports.updateUsuario = function(req, res){
    res.send('');
}

module.exports.deleteUsuario = function(req, res){
    res.send('');
}
