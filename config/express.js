let express = require('express');

let postsRouter = require('../app/route/posts');
let usuariosRouter = require('../app/route/usuarios');

let bodyParser = require('body-parser');

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    postsRouter(app);
    usuariosRouter(app);
    return app;
}