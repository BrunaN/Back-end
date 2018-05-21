let posts = [
    {_id: "1", texto: "olá Mundo", likes: 15, usuarioId: "a231"},
    {_id: "2", texto: "olá Mundo", likes: 15, usuarioId: "a231333"}
]

module.exports.listaPosts = function(req, res){
    res.json(posts);
}

module.exports.obterPost = function(req, res){
    let id = req.params.id;
    let post = posts.find((e)=>(e._id==id));
    if(post){
        res.json(post)
    }else{
        res.status(404).send('post not found');
    }
};

module.exports.inserirPost = function(req, res){
    posts.push(req.body);
    res.status(200).send(req.body);
}

module.exports.updatePost = function(req, res){
    res.send('Got a PUT request at /user');
}

module.exports.deletePost = function(req, res){
    res.send('Got a delete request at /user');
}

module.exports.usuarioPost = function(req, res){
    let id = req.params.id;
    let post = posts.find((e)=>(e._id==id));
    if(post){
        res.json(post.usuarioId);
    }else{
        res.status(404).send('post not found');
    }
}