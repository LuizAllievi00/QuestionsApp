var actual = 0
var points = 0
var questions =
    {
        "theme_1" : [
            {
                "question" : "labaklba",
                "answers" : [
                    "answer 1",
                    "asnwer 2",
                    "asnwer 3",
                    "answer 4",
                ],
                "correct_aswer": 3
            },
            
            {
                
                "question" : "asdfsd",
                "anwers" : [
                    "answer 1",
                    "asnwer 2",
                    "asnwer 3",
                    "answer 4",
                ],
                "correct_aswer": 2
            },
            
        ],
 
        "theme_2" : [
            {
                
                "question" : "asdfsd",
                "answers" : [
                    "answer 1",
                    "asnwer 2",
                    "asnwer 3",
                    "answer 4",
                ],
                "correct_aswer": 2
            },
            
        ]
            
    }

function get_question(question, questions, theme) {
    var template = "<div data-role='header'>" +
            "<h1>Nome do app</h1>" +
            "</div>" +
		"<div data-role='content'>" +

            "<div style='height: 200px;'></div>" +
            "<h1 value=" + question + ">" + "Questão" + questions[theme][question]["question"] + "</h1>"+
            "<div style='height: 50px;'></div>" +
            "<button id='0' class='ui-input-btn ui-btn ui-btn-d'>" + questions[theme][question]["answers"][0] + "</button>" +
            "<button id='1' class='ui-input-btn ui-btn ui-btn-d'>" + questions[theme][question]["answers"][1] + "</button>" +
            "<button id='2' class='ui-input-btn ui-btn ui-btn-d'>" + questions[theme][question]["answers"][2] + "</button>" +
            "<button id='3' class='ui-input-btn ui-btn ui-btn-d'>" + questions[theme][question]["answers"][3] + "</button>" +
			"<div style='height: 200px;'></div>" +
		"</div>" +
		"<div data-role='footer'>" +
            "<h3>Camon Development</h3>" +
        "</div>"

    return template
}

$( document ).ready(
    function () {

        $("a").click(
            function (event) {
                if (event.target.id.slice(0,5) == "theme") {
                    $("div#question_page").attr("theme", event.target.id);
                }
            }
        );
        
         $("#question_page").on("pagebeforecreate", function(){
            $("#question_page").html(get_question(actual, questions, $("#question_page").attr("theme")));
        });

        $("button").click(

            function (){
                alert(1);
                actual += 1;
                $("#question_page").html(get_question(actual, questions, $("#question_page").attr("theme")));
            }
        )
    })


    

    


