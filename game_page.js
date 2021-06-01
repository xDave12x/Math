player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
function send(){
    word1=document.getElementById("number1").value;
    word2=document.getElementById("number2").value;
    answer1=word1*word2;
question="<h4 id='word_display'>Q."+word1+"<span>X</span>"+word2+"</h4>";
input="<br>answer:<input type='text' id='input_check_box'>";
check1="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question+input+check1;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    answer=document.getElementById("input_check_box").value;
    if(answer==answer1){
        if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    } else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question turn-"+player2_name;
} else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question turn-"+player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
} else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer turn-"+player1_name;
}
document.getElementById("output").innerHTML="";
}