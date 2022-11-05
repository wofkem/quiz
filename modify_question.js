let arr = new Array();
function addData(){
    let Qvalue = document.getElementById("inQ").value
    let Avalue = document.getElementById("inA").value
    if(!Qvalue || !Avalue)
        alert("값을 입력해주세요.");
    else{
    getData();
    arr.push({
        inQ:document.getElementById("inQ").value,
        inA:document.getElementById("inA").value,
    });

    localStorage.setItem("localData",JSON.stringify(arr));
    showData();
    document.getElementById("inQ").value = '';
    document.getElementById("inA").value = '';
}
}

function getData(){
    let str = localStorage.getItem("localData");
    if(str != null)
        arr = JSON.parse(str);
}
function deleteData(){
    localStorage.clear()
}

function showData(){
    getData();
    let tbl = document.getElementById("listBody");
    let x = tbl.rows.length;
    while(--x){
        tbl.deleteRow(x);
    }

    let QACount = 1;
    for (i=0;i<arr.length;i++){
        let r = tbl.insertRow();
        let cell1 = r.insertCell();
        let cell2 = r.insertCell();
        let cell3 = r.insertCell();
        let check = document.createElement('input'); //체크박스 생성
        check.setAttribute('type','checkbox');
        check.setAttribute('class',"check");
        check.setAttribute('name','chk');

        cell1.innerHTML = arr[i].inQ;
        cell2.innerHTML = arr[i].inA;
        cell3.appendChild(check);

        cell1.setAttribute('class',"QandA"+QACount); //추가된 체크박스의 클래스,아이디 값 할당
        cell1.setAttribute('id',"Q"+QACount);
        cell2.setAttribute('class',"QandA"+QACount); //추가된 문제의 클래스,아이디 값 할당
        cell2.setAttribute('id',"A"+QACount);
        cell3.setAttribute('class',"QandA"+QACount); //추가된 답의 클래스, 아이디 값 할당
        cell3.setAttribute('id',"C"+QACount);
        QACount++;
    }
    
}

function delRow(){ //문제 삭제
    let body = document.getElementById('listBody'); //삭제할 행이 있는 테이블 가져오기
	let chkbox = document.querySelectorAll('#listBody .check'); //클래스가 체크박스인 객체 가져오기
	if (confirm("삭제 하시겠습니까?")) {
        for(let i in chkbox) { //체크박스 개수만큼 반복
		    if(chkbox[i].nodeType == 1 && chkbox[i].checked == true) { //체크 되어있는지 확인
                body.removeChild(chkbox[i].parentNode.parentNode); //테이블 행 삭제
                var table = document.getElementById('listBody'); //로컬스토리지 값 삭제
                var rowList = table.rows;
                let new_arr = new Array();
                for (i=1; i<rowList.length; i++) {
                    var row = rowList[i]; 
                    var tdsNum = row.childElementCount;  

                    for (var j=0; j<tdsNum-1; j+=2) {
                        new_arr.push({
                            inQ:row.cells[j].innerHTML,
                            inA:row.cells[j+1].innerHTML})
                    }
                };
                Storage = JSON.stringify(new_arr);
                localStorage.clear();
                localStorage.setItem("localData",JSON.stringify(new_arr));
                location.reload()
            }
        };

    }
			
}
function allselect(bool){ //체크박스 전체선택
    let chks = document.getElementsByName("chk"); //name이 chk인 체크박스 가져오기
		for(let i = 0; i < chks.length; i++){
			chks[i].checked = bool; 
		}
}
