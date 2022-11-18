function openPop() {
    document.getElementById("popup_layer").style.display = "block";

}

//팝업 닫기
function closePop() {
    document.getElementById("popup_layer").style.display = "none";
}

window.onload = function(){
let arr = new Array();
try{
    const que_mul = localStorage.getItem("localData_mul")
    let que_list_mul = new Array();
    que_list_mul = JSON.parse(que_mul)

    OBJECT_SIZE_MUL = Object.keys(que_list_mul).length//주관식 문제 개수

} catch{
    localStorage.setItem("localData_mul",JSON.stringify(arr));
}
try{
    const que_sub = localStorage.getItem("localData_sub")
    let que_list_sub = new Array();
    que_list_sub = JSON.parse(que_sub)

    OBJECT_SIZE_SUB = Object.keys(que_list_sub).length//주관식 문제 개수
} catch{
    localStorage.setItem("localData_sub",JSON.stringify(arr));
}
}
