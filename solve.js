function shuffle(array) { //배열 섞는 함수
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

const que_sub = localStorage.getItem("localData_sub") //로컬스토리지의 주관식 객체 가져오기

let que_list = new Array(); //객체를 배열로 저장하기위한 새 배열 생성
que_list = JSON.parse(que_sub) 
OBJECT_SIZE = Object.keys(que_list).length; //문제의 수

let num = new Array();
for(i=0; i<OBJECT_SIZE; i++){
    num[i] = i;
}

shuffle(num) //문제 순서 셔플
let A = num[0]; 
window.onload = function(){
    document.getElementById("Q1").innerHTML = que_list[A].inQ;
}
