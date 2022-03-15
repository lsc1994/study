
/*   v 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
    v 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
    v 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 
    열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
    v 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
    여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
    v Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요*/

// 변수 선언
let i_num = Number(prompt("생성할 아이콘의 수를 입력하세요"));
let f_num = Number(prompt("생성할 폴더의 수를 입력하세요"));


let div = document.createElement("div");
let br = document.createElement("br");


// 클래스 선언
class Desktop {

  mouse() {
    var container = document.querySelector(".desktop");
    var activeItem = null;

    var active = false;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {

      if (e.target !== e.currentTarget) {
        active = true;

        // this is the item we are interacting with
        activeItem = e.target;

        if (activeItem !== null) {
          if (!activeItem.xOffset) {
            activeItem.xOffset = 0;
          }

          if (!activeItem.yOffset) {
            activeItem.yOffset = 0;
          }

          if (e.type === "touchstart") {
            activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;

            activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
          } else {
            console.log("doing something!");
            activeItem.initialX = e.clientX - activeItem.xOffset;
            activeItem.initialY = e.clientY - activeItem.yOffset;
          }
        }
      }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
      }

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        if (e.type === "touchmove") {
          e.preventDefault();

          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
  }


}//class desktop
class Icon {
  constructor(num, name) {
    this.num = num;
    this.name = name;
  }
  sth() {
    let desktop = document.getElementsByClassName("desktop")[0];
    for (let i = 0; i < this.num; i++) {
      let div = document.createElement("div");
      let br = document.createElement("br");
      div.setAttribute("class", "item one");
      div.innerHTML = this.name + (i + 1);
      desktop.appendChild(div);
      desktop.appendChild(br);
    }
  }
}//class Icon

// class Folder extends Icon {
//   constructor(num, name) {
//     super(num, name);
//   }//constructor
//     dbc(){
//       let dbc = document.querySelector('.item one');
//       console.log(dbc);
//       dbc.addEventListener('dblclick', function() {
//          let div = document.createElement("div");
//          div.setAttribute("class", "item two");
//          div.innerHTML = this.name + (i + 1);
//          desktop.appendChild(div);
//         console.log('더블클릭');
//       });
//     }//dbc()
//   }//class Folder
class Folder {
  constructor(num, name) {
    this.num = num;
    this.name = name;
  }
  sth() {
    let desktop = document.getElementsByClassName("desktop")[0];
    for (let i = 0; i < this.num; i++) {
      let div = document.createElement("div");
      let br = document.createElement("br");
      div.setAttribute("class", "item two");
      div.innerHTML = this.name + (i + 1);
      desktop.appendChild(div);
      desktop.appendChild(br);
    }
  }//sth

  dbc() {
    let dbc = document.getElementsByClassName('item two');
    let a = 1;
    for (var i = 0; i < dbc.length; i++) {
      dbc[i].addEventListener('dblclick', function () {
        let desktop = document.getElementsByClassName("desktop")[0];
        let div = document.createElement("div");
        let br = document.createElement("br");
        div.setAttribute("class", "item three");
        div.innerHTML = '<button onclick="close()" id = "close_f">닫기</button><br>폴더열림'+a;
       // div.innerHTML = '폴더열림' + a + '';
        desktop.appendChild(div);
        desktop.appendChild(br);
        a++;
      });
    }//for
  }//dbc()
  closeF(){
    $(document).ready(function() { 
      $("#close_f").click(function() { 
        console.log("클릭");
        window.open('about:blank', '_self').close();
       }); 
      });
  }//close()
}//class Folder

// 새 바탕화면
function news() {
  window.open("/Quest04/desktop.html", "news", "width=500,height=600","_blank");
}