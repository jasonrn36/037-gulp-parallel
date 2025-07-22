const gulp = require('gulp'); 

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log("\n\x1b[33mEssa é a primeira tarefa função padrão\x1b[37m \n");
        callback();

    }, 991);
}

function digaOi(callback) {
        setTimeout(function(){
    console.log("\n\x1b[0m\x1b[33mEssa é a segunda tarefa Dizendo Oi\x1b[37m");
    digaTchau();
    callback();
    }, 3992);

}
function digaTchau(){
    console.log("\x1b[0m\x1b[33m Essa é a terceira tarefa Dizendo tchau!\x1b[37m \n");
}

exports.default = gulp.parallel(funcaoPadrao,digaOi);