class makeBingo{
    makeUser(){
        let makeBoard = "";
        let ArrNum = new Array();
        let ArrNum2 = new Array();
        let ArrNum3 = [];
        let written = "";
        for(var i = 0; i<25;i++){
            if(i%5==0){  //5번째마다 아래로 내려준다.
                makeBoard += "<br>";
            }
            makeBoard += "<input type='text' class='num'>"; // output에 원하는 요소를 담는다.
            
        }
        makeBoard += "<br>";
        makeBoard += "<button id='start'>게임시작</button>";
        makeBoard += "<br>";
        makeBoard += "<input type='text' placeholder='숫자를 입력하세요' id='numVal' >";
        makeBoard += "<button id='checkNum'>등록</button>";
        document.body.innerHTML = makeBoard;
        const num = document.getElementsByClassName("num");
        const start = document.getElementById("start");

        //게임시작 버튼 클릭
        start.addEventListener('click',function(){
            //배열값
            for(let i = 0; i<num.length; i++){
                 ArrNum.push(num[i].value);
            }
            for(var i = 0; i<ArrNum.length;i++){
                if(i%5==0){  //5배수로 한칸 띄워줌
                    makeBoard += "<br>";
                }
                makeBoard += "<div class='num2'>"+ArrNum[i]+"</div>"; // output에 원하는 요소를 담는다.
                document.body.innerHTML = makeBoard;
            }//for
            const numVal = document.getElementById("numVal");
            const checkNum = document.getElementById("checkNum");
            ArrNum2 = document.getElementsByClassName("num2");

            //등록버튼 클릭
            checkNum.addEventListener('click',function(){
                for(let i = 0; i<ArrNum2.length; i++){
                    if(numVal.value === ArrNum2[i].innerHTML){
                        ArrNum2[i].style.backgroundColor = "red";
                        numVal.focus();
                        numVal.value = "";
                        ArrNum3=ArrNum2[i];
                    }//if
                }//for

            });//checkNum
        });//start
    }// makes()
    // comBingo(){
    //     let outputt = "";
    //     let start = document.getElementById("start");
    //     start.addEventListener('click',function(){
    //             outputt += "<input type='text' class='num'>"; // output에 원하는 요소를 담는다.
    //             document.body.innerHTML = outputt;
            
    //     });
    // }
        
        //console.log(asdf);
        //console.log(numVal);
                // let input = document.createElement("input");
                // input.setAttribute("class", "numVal");
                // let delNum = document.createElement("button");
                // delNum.setAttribute("id","delNum");
        // let numVal = document.getElementsByClassName("checkNuma");
        // let asdf = document.getElementsByClassName("asdf");
        // console.log(numVal.value);
        // console.log(asdf);
           
        // document.body.innerHTML = output; 
        // let numVal = document.getElementsByClassName("numVal");
        // let checkNuma = document.getElementById("checkNuma");
        // console.log(checkNuma);
        // checkNuma.addEventListener('click',function(){
        //     console.log(numVal.value);
        // });
        //checkNuma.addEventListener('click',function(){
           // var element = document.getElementById(id); // 객체를 바로 받아서 하려했으나 잘되지 않아 아이디로 받아 가져왔다.
         //  console.log(ArrNum);
            // ArrNum[id] = 0; // 2차원 배열로 비교할 것이므로 굳이 0으로 바꿀 필요가 없다.
           // ArrNum2[parseInt(id/5)][id%5] = 0; // 2차원 배열에서 고른 값을 0으로 바꾸어줌 자바스크립트는 int변환해주어야함.
           // element.style.color = "white"; // 검정으로 바꾸고
            //element.innerHTML = "　"; // 숫자를 사라지게함
            //called += ArrNum[id]+'; ';
           // document.getElementById('called').innerHTML = called;
           // checkBingo(); // 클릭시 마다 빙고갯수를 체크하는 함수를 호출
       // });
       makeCom(){

       }
}//class makeBingo()


    



