//crie cargos desses cores e depois coloque o id deles no codigo
var cores = {
    "dourado" : "id",
    "azul-claro" : "id",
    "azul-escuro" : "id",
    "amarelo" : "id",
    "vermelho" : "id",
    "vermelho-escuro" : "id",
    "verde-claro" : "id",
    "verde-escuro" : "id",
    "rosa-claro" : "id",
    "rosa-escuro" : "id"
}

var selection = joinArguments(" ");

if (cores[selection] != null) {
    var cor = getGuild().getRoleById(cores[selection])
    if (author().hasRole(cor)) {
        author().removeRole(cor)
        reply(" cor removida!");
    } else {
      author().addRole(cor)
      reply("cor adicionada!");
    }
}

var lista = "";
for (var key in cores) {
    if (cores.hasOwnProperty(key)) {
        if (lista == "") {
            lista = key
        } else {
            lista += ", " + key
        }
    }
}

reply("Cores disponíveis: " + lista);
