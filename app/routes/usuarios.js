let controller = require("../controllers/usuarios");

module.exports = function(app){
    app.get('/api/usuarios', controller.listaUsuarios);
    app.get('/api/usuarios/:id', controller.obterUsuario);
    app.post('/api/usuarios', controller.inserirUsuario);
    app.put('/api/usuarios/:id', controller.updateUsuario);
    app.delete('/api/usuarios/:id', controller.deleteUsuario);
    app.get('/api/usuarios/:id/posts', controller.obterPostsDoUsuario);
}