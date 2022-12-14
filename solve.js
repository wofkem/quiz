function shuffle(array) { //배열 섞는 함수
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}

//객관식 문제
const que_mul = localStorage.getItem("localData_mul") //로컬스토리지의 객관식 객체배열 가져오기
let que_list_mul = new Array(); //객관식 문제 리스트를 배열로 저장하기위한 새 배열 생성
que_list_mul = JSON.parse(que_mul)

OBJECT_SIZE_MUL = Object.keys(que_list_mul).length//객관식 문제 개수

shuffle(que_list_mul) //객관식 문제 순서 셔플

//주관식 문제
const que_sub = localStorage.getItem("localData_sub") //로컬스토리지의 주관식 객체배열 가져오기
let que_list_sub = new Array(); //주관식 문제 리스트를 배열로 저장하기위한 새 배열 생성
que_list_sub = JSON.parse(que_sub)

OBJECT_SIZE_SUB = Object.keys(que_list_sub).length//주관식 문제 개수

shuffle(que_list_sub) //주관식 문제 순서 셔플



window.onload = function(){

  if (OBJECT_SIZE_MUL+OBJECT_SIZE_SUB == 0){
    alert("입력된 문제가 없습니다. \n문제를 입력해주세요.")
  }
//객관식
for(let i=1;i<=OBJECT_SIZE_MUL;i++){
  let container = document.getElementById("q_list") 
  let newForm = document.createElement('form');
  newForm.name = 'newForm';
  newForm.setAttribute("class","mul")
  newForm.setAttribute("id","mul"+i)
  newForm.setAttribute("onsubmit","return false;")
  newQ = document.createElement("div");
  newQ.setAttribute("style","font-weight:bold");
  newQ.setAttribute("class","mul")
  newQ.setAttribute("id","mul"+i)
  newQ.innerHTML = "문제 : "+JSON.parse(JSON.stringify(que_list_mul[i-1].inQ))
  newForm.appendChild(newQ);
  
  let E1 = document.createElement('input');
  let E1_L = document.createElement('label');
  let E2 = document.createElement('input');
  let E2_L = document.createElement('label');
  let E3 = document.createElement('input');
  let E3_L = document.createElement('label');
  let E4 = document.createElement('input');
  let E4_L = document.createElement('label');

  let mul_list = new Array(); 
  mul_list[0] = JSON.parse(JSON.stringify(que_list_mul[i-1].inA))
  mul_list[1] = JSON.parse(JSON.stringify(que_list_mul[i-1].inE1))
  mul_list[2] = JSON.parse(JSON.stringify(que_list_mul[i-1].inE2))
  mul_list[3] = JSON.parse(JSON.stringify(que_list_mul[i-1].inE3))
  shuffle(mul_list) //보기 순서 셔플
  
  E1.setAttribute("type", "radio");
  E1.setAttribute("name", "mul_e"+i);
  E1.setAttribute("class", "mul_a");
  E1.setAttribute("id", "mul_a1_"+i);
  E1_L.setAttribute("for", "mul_a1_"+i);
  E1_L.innerHTML = mul_list[0]+"　"

  E2.setAttribute("type", "radio");
  E2.setAttribute("name", "mul_e"+i);
  E2.setAttribute("class", "mul_a");
  E2.setAttribute("id", "mul_a2_"+i);
  E2_L.setAttribute("for", "mul_a2_"+i);
  E2_L.innerHTML = mul_list[1]+"　"

  E3.setAttribute("type", "radio");
  E3.setAttribute("name", "mul_e"+i);
  E3.setAttribute("class", "mul_a");
  E3.setAttribute("id", "mul_a3_"+i);
  E3_L.setAttribute("for", "mul_a3_"+i);
  E3_L.innerHTML = mul_list[2]+"　"

  E4.setAttribute("type", "radio");
  E4.setAttribute("name", "mul_e"+i);
  E4.setAttribute("class", "mul_a");
  E4.setAttribute("id", "mul_a4_"+i);
  E4_L.setAttribute("for", "mul_a4_"+i);
  E4_L.innerHTML = mul_list[3]+"　"

  newForm.appendChild(E1);
  newForm.appendChild(E1_L);
  newForm.appendChild(E2);
  newForm.appendChild(E2_L);
  newForm.appendChild(E3);
  newForm.appendChild(E3_L);
  newForm.appendChild(E4);
  newForm.appendChild(E4_L);

  container.appendChild(newForm)
}

//주관식
for(let i=1;i<=OBJECT_SIZE_SUB;i++){
  let container = document.getElementById("q_list") 
  let newForm = document.createElement('form');
  newForm.name = 'newForm';
  newForm.setAttribute("class","sub")
  newForm.setAttribute("id","sub"+i)
  newForm.setAttribute("onsubmit","return false;")
  
  newQ = document.createElement("div");
  newQ.setAttribute("class","sub")
  newQ.setAttribute("id","sub_q"+i)
  newQ.setAttribute("style","font-weight:bold");
  newQ.innerHTML = "문제 : "+JSON.parse(JSON.stringify(que_list_sub[i-1].inQ))
  newForm.appendChild(newQ);
  
  let input1 = document.createElement('input');
  let input2 = document.createElement('input');
  let cfm_ans = document.createElement('div');
  
  input1.setAttribute("type", "text");
  input1.setAttribute("name", "sub_a"+i);
  input1.setAttribute("id", "sub_a"+i);
  input1.setAttribute("class", "sub_a");
  input1.setAttribute("placeholder", "답 입력 후 확인!");
  
  
  input2.setAttribute("type", "button");
  input2.setAttribute("name", "sub_btn"+i);
  input2.setAttribute("id", "sub_btn"+i);
  input2.setAttribute("style","cursor:pointer")
  input2.setAttribute("value", "확인");
  input2.setAttribute("class", "sub_btn");
  input2.setAttribute("onclick", "confirm(this)");
  cfm_ans.setAttribute("class","cfm_ans_sub");
  cfm_ans.setAttribute("id","cfm_ans_sub"+i);
  cfm_ans.innerHTML = "<a>입력한 답 : </a><a></a>"
  
  newForm.appendChild(input1);
  newForm.appendChild(input2);
  newForm.appendChild(cfm_ans);

  container.appendChild(newForm)
}
}

function confirm(tagid){//확인 버튼 누르면 입력한 정답 추가
  let child_id = tagid.id;
  let child = document.getElementById(child_id);
  let form_con = child.parentNode;
  let textbox = form_con.childNodes[1]
  let ans = form_con.childNodes[3]
  
  ans.innerHTML = "<a>입력한 답 : </a>";
  ans.innerHTML = ans.innerHTML+"<a>"+textbox.value+"</a>";
}

function checkAnswer(btnid){ //정답확인 버튼 클릭 시 실행
  window.scrollTo(0, 0);
  document.getElementById("EA").style.display = "block";
  let btn_cnt = 0;
  for(let i = 1; i<=OBJECT_SIZE_MUL;i++){ //객관식 답 선택했는지 확인
    if (OBJECT_SIZE_MUL!=0){
      let chk_radio = document.getElementsByName('mul_e'+i);
      let cnt=0;
      for(let j=0; j<=3;j++)
      if(chk_radio[j].checked == false){
        cnt++;
      }
      if (cnt==4){
        alert("답을 입력해주세요.")
        return;
      }
    }
  }

  for(let i = 1; i<=OBJECT_SIZE_SUB;i++){ //주관식 답 입력했는지 확인
    if (OBJECT_SIZE_SUB!=0){
      let sub_div = document.getElementById("cfm_ans_sub"+i)
      let cfm_ans = sub_div.childNodes[1]
      if (cfm_ans.innerHTML==""){
        alert("답을 입력해주세요.")
        return;
      }
    }
  }

  //정답 확인
  let inputid = btnid.id;
  let input = document.getElementById(inputid);
  let body = input.parentNode;

  let q_list = body.childNodes[3];
  if (q_list.innerHTML == ""){ //입력된 문제가 없을 때
    alert("입력된 문제가 없습니다. \n문제를 입력해주세요.")
    return}
  
  let EA_cnt = 0;

  //객관식 답체크
  for(let i = 1; i<=OBJECT_SIZE_MUL; i++){ 
    let answer = que_list_mul[i-1].inA+"　" //실제 객관식 정답
    let cfm_ans_mul;

     //체크한 답 가져오기
        let chk_radio = document.getElementsByName('mul_e'+i);
        let cnt=0;
        for(let j=0; j<=3;j++)
        if(chk_radio[j].checked == true){ //체크된 라디오의 아이디값 가져오기
          cfm_ans_mul = chk_radio[j]
        }
  
    let mul_id = cfm_ans_mul.id;
    let label = document.querySelector('label[for='+mul_id+']')
    
    if (label.innerHTML == answer){
      let form = q_list.childNodes[i-1] //form 노드
      let check = document.createElement('div'); //정답 알려주는 노드 추가
      check.setAttribute("style","font-weight:bold");
      check.setAttribute("id","check_ans_mul"+i);
      check.setAttribute("class","check_mul");
      form.appendChild(check);
      check.innerHTML="정답 : "+answer+"<a style='color:blue;'>정답입니다.<a/>"

      EA_cnt++
    }
    else{
      let form = q_list.childNodes[i-1] //form 노드
      let check = document.createElement('div'); //정답 알려주는 노드 추가
      check.setAttribute("style","font-weight:bold");
      check.setAttribute("id","check_ans_mul"+i);
      check.setAttribute("class","check_mul");
      form.appendChild(check);
      check.innerHTML="정답 : "+answer+"<a style='color:red;'>오답입니다.<a/>"
    }
  }

  //주관식 답체크
  for(let i = 1 + OBJECT_SIZE_MUL; i <= OBJECT_SIZE_SUB + OBJECT_SIZE_MUL; i++){
    let j = i-OBJECT_SIZE_MUL 
    let cfm_ans = q_list.childNodes[i-1].childNodes[3].childNodes[1]; //입력한 주관식 답 노드
    let answer = que_list_sub[j-1].inA //실제 주관식 정답

    if (cfm_ans.innerHTML == answer){
      let form = q_list.childNodes[i-1] //form 노드
      let check = document.createElement('div'); //정답 알려주는 노드 추가
      check.setAttribute("style","font-weight:bold");
      check.setAttribute("id","check_ans"+j);
      check.setAttribute("class","check");
      form.appendChild(check);
      check.innerHTML="정답 : "+answer+"<a style='color:blue;'> 정답입니다.<a/>"
      
      EA_cnt++;
    }
    else{
      let form = q_list.childNodes[i-1] //form 노드
      let check = document.createElement('div'); //정답 알려주는 노드 추가
      check.setAttribute("style","font-weight:bold");
      check.setAttribute("id","check_ans"+j);
      check.setAttribute("class","check");
      form.appendChild(check);
      check.innerHTML="정답 : "+answer+"<a style='color:red;'> 오답입니다.<a/>"
    }
  }

  //맞은 개수 알려주기
  let all = OBJECT_SIZE_MUL + OBJECT_SIZE_SUB
  let EA = document.getElementById("EA")
  EA.innerHTML = "맞은 문제 수 : "+EA_cnt+"　　총 문제 수 : "+all

  btn_cnt++
  let btn = document.getElementById("cfm_btn")
  if (btn_cnt == 1){
    btn.setAttribute("onclick","")
    btn.style.display = "none";}
}
