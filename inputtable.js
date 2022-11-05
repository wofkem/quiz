let QACount = 1;
function addRow(){
    const Qvalue = document.getElementById('inQ').value;
    const Avalue = document.getElementById('inA').value;

    let check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.setAttribute('class',"check");
    check.setAttribute('name','chk');

    const table = document.getElementById("contents");
    const newRow = table.insertRow();

    let newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    const newCell3 = newRow.insertCell(2);

    newCell2.setAttribute('class',"QandA"+QACount);
    newCell2.setAttribute('id',"Q"+QACount);
    newCell3.setAttribute('class',"QandA"+QACount);
    newCell3.setAttribute('id',"A"+QACount);
    
    newCell1.appendChild(check);
    newCell2.innerText = Qvalue;
    newCell3.innerText = Avalue;   

    QACount++;
}
function delRow(){
    let body = document.getElementById('listBody');
	let chkbox = document.querySelectorAll('#listBody .check');
	for(let i in chkbox) {
		if(chkbox[i].nodeType == 1 && chkbox[i].checked == true) {
            if (!confirm("삭제 하시겠습니까?")) {
                
            } else {
                body.removeChild(chkbox[i].parentNode.parentNode);
            }
			
		}
	}
}

function allselect(bool){
    let chks = document.getElementsByName("chk");
		for(let i = 0; i < chks.length; i++){
			chks[i].checked = bool;
		}
}