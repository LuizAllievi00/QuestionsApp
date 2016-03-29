jQuery.extend({
    stringify  : function stringify(obj) {         
        if ("JSON" in window) {
            return JSON.stringify(obj);
        }

        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string") obj = '"' + obj + '"';

            return String(obj);
        } else {
            // recurse array or object
            var n, v, json = [], arr = (obj && obj.constructor == Array);

            for (n in obj) {
                v = obj[n];
                t = typeof(v);
                if (obj.hasOwnProperty(n)) {
                    if (t == "string") {
                        v = '"' + v + '"';
                    } else if (t == "object" && v !== null){
                        v = jQuery.stringify(v);
                    }

                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }

            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    }
});


var jObject = {
    livros : [

        {
            titulo : "A menina que roubava livros",
            autor : "Markus Zusak",
            pagina : "32",
        },

        {
            titulo : "O pequeno príncipe",
            autor : "Antoine de Saint-exupéry",
            pagina : "10",
        },
        {
            titulo : "O trono do sol",
            autor : "S. L. Farrel",
            pagina : "13",
        },
        {
            titulo : "Percy Jackson e Os Olimpianos - Vol. 1 - o Ladrão de Raios",
            autor : "Rick Riordan",
            pagina : "121",
        },
        {
            titulo : "Dom Casmurro",
            autor : "Machado de Assis",
            pagina : "01",
        },

    ]
};

var app = {
    controle1 : 0,
    db: jObject,
    swipeRight: 2,
    swipeLeft: 1,
}

$(document).ready(function(){

    
    $("#code-json").append(JSON.stringify(jObject, null, 4));
	$("#processar").click(function(){
    var livros = $.getJSON("http://developers.agenciaideias.com.br/loterias/timemania/json", function(data){
        console.log(data);
    });
    	
        // $.each(jObject.livros, function(i, livro){
        //     modelo = getModelo(livro.titulo, livro.autor, livro.pagina);
        //     divLivros.append(modelo);
        //     console.log(modelo);
        // });
        //$("#code-json").append($.stringify(jObject));
        mudarLivro(app.db.livros);

	});

    $("#proximo").click(function(){
        mudarLivro(app.db.livros);

    });

    $("#div-livros").on("swipeleft", function(){
        console.log("para esquerda");
        mudarLivro(app.db.livros, app.swipeLeft);
    });

    $("#div-livros").on("swiperight", function(){
        console.log("para direita");
        mudarLivro(app.db.livros, app.swipeRight);
    });
});


function mudarLivro(livros ,dir) {
        var divLivros = $("#div-livros");
        var livroIndex = parseInt(divLivros.attr("livroIndex"));
        modelo = getModelo(livros[livroIndex].titulo, livros[livroIndex].autor, livros[livroIndex].pagina);
        divLivros.empty();
        divLivros.append(modelo);

        if(dir == app.swipeLeft) {
            // será executado se o swipe for para esquerda
            if(livros.length == (livroIndex + 1)) {
                livroIndex = 0;
            } else {
                livroIndex += 1;
            }
        } else {
            // será executado se o swipe for para direita
            if(livroIndex == 0) {
                livroIndex = livros.length -1;
            } else {
                livroIndex -= 1;
            }
        }
        

        divLivros.attr("livroIndex", livroIndex);
}



function getModelo(titulo, autor, pagina) {
	var template = "<div class='ui-corner-all'>" +
    "<div class='ui-bar ui-bar-a'>" +
	"<h3>" + titulo +"</h3>" +
    "</div>" +
    "<div class='ui-body ui-body-a'>" +
	"<p><b>Autor:</b> " + autor +"</p>" +
	"<p><b>Página:</b> " + pagina +"</p>" +
	"</div></div>";

	return template;
}