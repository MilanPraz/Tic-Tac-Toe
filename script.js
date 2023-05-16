
let playerturn= new Audio("move.mp3")
let winaudio = new Audio("win_sound.mp3");
let turn='X';
let myturn=document.getElementsByClassName("turninfo");
let gameover=false;
let reset=document.querySelector(".btn")




//function to change turn
function changeturn(){
    let t=turn==="X"?"0":"X";
  

    return t;
}


//function to check for a win
function checkWin(){
    let boxtexts= document.getElementsByClassName('boxtext');
        let wins=[ //we give or provide only index here so boxtexts[e[0]] i.e boxtexts[0].innerhtml and boxtexts[e[1]] is boxtexts[1].innerhtml 
                    //likewise for boxtexts[e[0]] it indicate 0 place value and boxtexts[e[3]] indicate 2nd row 1st column element that is 4th element

            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]
        // console.log(boxtexts[0])
        wins.forEach(e=>{

            if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText=== boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!== "")){
                // here e[0] is talking about 1st element inside 1st array coz in 2nd array there is [3,4,5] so e[0] indicates 3, e[1]=>4 and e[2]=>5
                console.log("you won"+boxtexts[e[0]].innerText);
                document.querySelector(".whowon").innerText=`${boxtexts[e[0]].innerText} WON!!`
                gameover=true;
                document.querySelector(".turninfo").innerHTML=``;
                let myvdo=document.querySelector(".iimg");
                
                    myvdo.style.width="250px";
                    myvdo.play();
              
               
                
                
            //   repeataudio();  
            // setInterval(function(){
            //     winaudio.play();
            // },100);

            setTimeout(()=>{
                myvdo.style.width="0px"
                // winaudio.currentTime=0;
        
            },5000)
              
            
            }
        })
}


//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    
    let turntext=element.querySelector(".boxtext")
    element.addEventListener("click",()=>{
        if(turntext.innerText===""){
        
            turntext.innerText=turn;
            turn=changeturn();
            playerturn.play();
            checkWin();
            if(!gameover){
            document.querySelector(".turninfo").innerHTML=`Turn for ${turn}`
            }
        }

    })

  });


reset.addEventListener("click",()=>{

    let boxtexts=document.querySelectorAll(".boxtext");

    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    document.querySelector(".turninfo").innerHTML=`Turn for ${turn}`

    document.querySelector(".whowon").innerText=""
    document.querySelector(".iimg").style.width="0px"
    
    

}) 











