var actual = 0
var points = 0
var questions =
    {
        "theme_1" : [
            {
                "question" : "Quais dos filmes abaixo NÃO é baseado em fatos reais?",
                "answers" : [
                    "O exorcismo de Emily Rose",
                    "Terror em Hamityville (1979)",
                    "Pânico (saga)",
                    "O exorcista",
                ],
                "correct_answer": 2
            },

            {

                "question" : "No filme Poltergeist - O fenômeno, durante e depois das gravações ocorreram mortes chocantes de atores e diretores. Quantos deles morreram?",
                "answers" : [
                    "dois",
                    "seis",
                    "quatro",
                    "três",
                ],
                "correct_answer": 2
            },
 	    {

                "question" : "Atualmente, qual filme de terror abaixo ainda não têm remake?",
                "answers" : [
                    "A morte do demônio",
                    "O exorcista",
                    "Carrie, a estranha",
                    "A profecia",
                ],
                "correct_answer": 1
            },

	     {

                "question" : "Qual o nome correto do segundo filme da saga de crepusculo?",
                "answers" : [
                    "Lua cheia",
                    "Lua minguante",
                    "Lua nova",
                    "Sem lua",
                ],
                "correct_answer": 2
            },

	     {

                "question" : "Quantos flmes tem a saga Resident Evil",
                "answers" : [
                    "4",
                    "5",
                    "6",
                    "7",
                ],
                "correct_answer": 2
            },

 	   {

                "question" : "Hannibal Lecter é o vilão de qual desses filmes?",
                "answers" : [
                    "O silêncio dos inocentes",
                    "Crepúsculo",
                    "O dia depois de amanhã",
                    "A teia",
                ],
                "correct_answer": 0
       },

	   {

                "question" : "Qual desses personagens de filmes de terror tem a capacidade de invadir o sonho das pessoas?",
                "answers" : [
                    "Jason",
                    "Freddie Krueger",
                    "Hannibal Lecter",
                    "It",
                ],
                "correct_answer": 1
            },



	    {

                "question" : "Em qual filme John Travolta interpretou um terrorista?",
                "answers" : [
                    "Fenômeno",
                    "Motoqueiros selvagens",
                    "A senha - Swordfish",
                    "O justiceiro",
                ],
                "correct_answer": 2
            },



 	    {

                "question" : "Qual o nome do personagem interpretado por Vin diesel em Velozes e Furiosos",
                "answers" : [
                    "Luke Hobbs",
                    "Bian O'Conner",
                    "Roman Pearce",
                    "Dominic Toretto",
                ],
                "correct_answer": 3
            },



 	   {

                "question" : "Em qual desses filmes Christian Bale interpreta um psicopata?",
                "answers" : [
                    "O grnade Truque",
                    "Psicopata americano",
                    "Batman - O cavaleiro das trevas",
                    "Império do sol",
                ],
                "correct_answer": 2
            },



        ],
              


        "theme_2" : [
            {
                "question" : "No rugby, ou futebol americano, qual é o formato da bola usada durante o jogo?",
                "answers" : [
                    "Quadrada",
                    "Redonda",
                    "Oval",
                    "Triangular",
                ],
                "correct_answer": 2
            },



	 {
                "question" : "No vôlei, o que acontece quando a bola que um jogador tocou bate na rede?",
                "answers" : [
                    "É ponto para o time do jogador",
                    "O time do jogador perde 1 ponto",
                    "O time do jogador é eliminado e o jogo acaba",
                    "É ponto para o time adversário",
                ],
                "correct_answer": 3
            },




	 {
                "question" : "Qual é a cor da faixa mais alta, que pode, muito dificilmente, ser adquirida no judô?",
                "answers" : [
                    "preta",
                    "azul",
                    "amarela",
                    "vermelha",
                ],
                "correct_answer": 0
            },




	 {
                "question" : "Como se deve mover a bola no basquete?",
                "answers" : [
                    "Chutando-a",
                    "Quicando-a no chão",
                    "Jogando-a",
                    "Dando tapas",
                ],
                "correct_answer": 1
            },





 	{
                "question" : "No futebol, quantos cartões, e de que cores respectivamente, é preciso que um jogador receba e seja expulso de uma partida?",
                "answers" : [
                    "Somente 3 amarelos",
                    "3 amarelos e 1 vermelho",
                    "Somente 1 vermelho",
                    "4 amarelos e 1 vermelho",
                ],
                "correct_answer": 2
            },

	 {
                "question" : "Qual seleção foi a campeã mundial de 2006?",
                "answers" : [
                    "Alemanha",
                    "França",
                    "Itália",
                    "Brasil",
                ],
                "correct_answer": 2
            },

	 {
                "question" : "Qual seleção venceu o Campeonato Mundial de Volêi Masculino de 2014?",
                "answers" : [
                    "Brasil",
                    "Itália",
                    "Alemanha",
                    "Polônia",
                ],
                "correct_answer": 2
            },

        ],

}

function get_question(question, questions, theme) {
    $("button#question_number").html("Questão " + (question + 1));
    $("h1#h1_question").html(questions[theme][question]["question"]);
    $("button#0").html(questions[theme][question]["answers"][0]);
    $("button#1").html(questions[theme][question]["answers"][1]);
    $("button#2").html(questions[theme][question]["answers"][2]);
    $("button#3").html(questions[theme][question]["answers"][3]);

}

function show_points(points) {
    $("h1#h1_question").html(" ");
    $("button#question_number").html("Fim de Jogo");
    var template = "<h1>" + "Você fez " + points + " pontos" + "</h1>" +
        "<div style='height: 100px;'></div>"   +
        "<a class='ui-btn ui-shadow' href='#main_page'>Voltar ao Início</a>";
    return template

}
$( document ).ready(
    function () {
        $("a").click(
            function (event) {
                if (event.target.id.slice(0,5) == "theme") {
                    actual = 0;
                    points = 0;
                    $("div#question_page").attr("theme", event.target.id);
                    get_question(actual, questions, $("#question_page").attr("theme"))
                }
            }
        );
        


        $("button").click(
            function (event){
                var theme = $("#question_page").attr("theme");
                if (parseInt(event.target.id) == questions[theme][actual]["correct_answer"]){points += 1;}
                if (actual == 9){
                    
                    $.mobile.pageContainer.pagecontainer('change', '#end_page', {
                        transition: 'flow',
                        reload    : true
                    });
                    points = 0;
                    actual = 0;
                    return 0
                }
                else {
                    actual += 1;
                    get_question(actual, questions, theme)
                    $("#questions_div").slideDown();
                    return 0
                }
            }
        );


    })


    

    


