function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

const que_load = localStorage.getItem("localData_sub")

let que_list = new Array();
que_list = JSON.parse(que_load)
OBJECT_SIZE = Object.keys(que_list).length;

let num = new Array();
for(i=0; i<OBJECT_SIZE; i++){
    num[i] = i;
}

shuffle(num)
let A = num[0];
window.onload = function(){
    document.getElementById("Q1").innerHTML = que_list[A].inQ;
}