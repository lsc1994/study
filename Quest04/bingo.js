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
}//class makeBingo()


    



