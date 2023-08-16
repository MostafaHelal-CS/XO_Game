let turn="X";
let title=document.getElementsByClassName("title")[0];
console.log(title);
let squares=[];
function Reload (n1, n2, n3) {
    title.innerHTML=`${squares[n1].innerHTML} Winner`;
    document.getElementById(`iteam`+n1).style.background="#007FFF";
    document.getElementById(`iteam`+n2).style.background="#007FFF";
    document.getElementById(`iteam`+n3).style.background="#007FFF";
    title.style.color="#007FFF";
    setInterval(function () {
        title.innerHTML+=".";
    }, 1000);
    setTimeout(function () {
        location.reload();
    }, 4000);
}
function winner () {
    for(let i=1; i<10; i++) {
        squares[i]=document.getElementById(`iteam${i}`);
    }
    if(squares[1].innerHTML==squares[2].innerHTML&&squares[2].innerHTML==squares[3].innerHTML&&squares[1].innerHTML!="") {
        Reload(1, 2, 3);
    }
    if(squares[4].innerHTML==squares[5].innerHTML&&squares[5].innerHTML==squares[6].innerHTML&&squares[4].innerHTML!="") {
        Reload(4, 5, 6);
    }
    if(squares[7].innerHTML==squares[8].innerHTML&&squares[8].innerHTML==squares[9].innerHTML&&squares[7].innerHTML!="") {
        Reload(7, 8, 9);
    }
    if(squares[1].innerHTML==squares[5].innerHTML&&squares[5].innerHTML==squares[9].innerHTML&&squares[5].innerHTML!="") {
        Reload(1, 5, 9);
    }
    if(squares[3].innerHTML==squares[5].innerHTML&&squares[5].innerHTML==squares[7].innerHTML&&squares[5].innerHTML!="") {
        Reload(3, 5, 7);
    }
    if(squares[1].innerHTML==squares[4].innerHTML&&squares[4].innerHTML==squares[7].innerHTML&&squares[4].innerHTML!="") {
        Reload(1, 4, 7);
    }
    if(squares[2].innerHTML==squares[5].innerHTML&&squares[5].innerHTML==squares[8].innerHTML&&squares[5].innerHTML!="") {
        Reload(2, 5, 8);
    }
    if(squares[3].innerHTML==squares[6].innerHTML&&squares[6].innerHTML==squares[9].innerHTML&&squares[9].innerHTML!="") {
        Reload(3, 6, 9);
    }
}
function game (id) {
    let element=document.getElementById(id);
    if(turn==="X"&&element.innerHTML=="") {
        element.innerHTML="X";
        turn="O";
        title.innerHTML="O";
    } else if(turn==="O"&&element.innerHTML=="") {
        element.innerHTML="O";
        turn="X";
        title.innerHTML="X";
    }
    winner();
}
