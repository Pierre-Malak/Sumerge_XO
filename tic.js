
 
flag=1;
function mywrite(a)
{
    if (flag == 1) {
        document.getElementById(a).value = "X";
        document.getElementById(a).disabled = true;
        document.getElementById('print').innerHTML = "Player O Turn";
        
        
        flag = 0;
    }
    else {
        document.getElementById(a).value = "O";
        document.getElementById(a).disabled = true;
        document.getElementById('print').innerHTML = "Player X Turn";
        
        flag = 1;
    }

}


function Reset(){
    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
 
}


// Function called whenever user tab on any box
function check() {
 
    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    //Rows Win & Col Left
    if((b1==b2) && (b1==b3)&&(b1!='')&&(b3!='')&&(b2!='') || (b1==b4)&& (b1==b7)&&(b1!='')&&(b7!='')&&(b4!=''))
    {document.getElementById('print').innerHTML = "Player " + b1 +" Win";
    window.alert("Player " + b1 +" Win");

    }
    else if((b4==b5) && (b4==b6)&&(b4!='')&&(b6!='')&&(b5!=''))
    {document.getElementById('print').innerHTML = "Player " + b4 +" Win";
    window.alert("Player " + b4 +" Win");

    }

    else if((b7==b8) && (b7==b9)&&(b7!='')&&(b9!='')&&(b8!=''))
    {document.getElementById('print').innerHTML = "Player " + b7 +" Win";
    window.alert("Player " + b7 +" Win");

    }

    //Diagonal Win & Col Center

    else if((b5==b1) && (b5==b9)&&(b5!='')&&(b9!='')&&(b1!='') || (b5==b2)&&(b5==b8)&&(b5!='')&&(b8!='')&&(b2!='') )
    {document.getElementById('print').innerHTML = "Player " + b5 +" Win";
    window.alert("Player " + b5 +" Win");

    }

    else if((b5==b3) && (b5==b7)&&(b5!='')&&(b7!='')&&(b3!=''))
    {document.getElementById('print').innerHTML = "Player " + b5 +" Win";
    window.alert("Player " + b5 +" Win");

    }

    // Col Right Win

    else if((b3==b6) && (b3==b9)&&(b3!='')&&(b6!='')&&(b9!=''))
    {document.getElementById('print').innerHTML = "Player " + b3 +" Win";
    window.alert("Player " + b3 +" Win");

}






}