var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1)*parseInt(number2);


    Question_number = "<h4>" + number1  + "X" + number2 + "</h4>";
    Input_box = "<br> Answer:<input type='text' id='input_check_box'>";
    Check_button = "<br> <br> <button class='btn btn-info'  onclick='check()'>CHECK</button>";
    Row = Question_number + Input_box + Check_button;
    document.getElementById("output").innerHTML = Row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check(){
    answer = document.getElementById("input_check_box").value;
    get_answer = parseInt(answer);
    if (get_answer == actual_answer)
    {
       if (answer_turn = "player1")
       {
           update_player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML = update_player1_score;
       }
       else
       {
        update_player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
       }

       if (question_turn = "player1"){
        question_turn ="player2";
        document.getElementById("player_question").innerHTML = "question_turn - " + player2_name;

    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question_turn - " + player1_name;

    }
    if (answer_turn = "player1"){
        answer_turn ="player2";
        document.getElementById("player_answer").innerHTML = "answer_turn - " + player2_name;

    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer_turn - " + player1_name;

    }
    }


}