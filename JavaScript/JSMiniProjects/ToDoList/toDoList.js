window.onload = function() {
    const savedTodoList = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodoList != "") { // 데이터가 있는지 체크
        for (let i = 0; i < savedTodoList.length; i++) { // JS식 for each문은 쓰지 않는걸 권장한다고 한다 (비효율적이라고 함)
            console.log(savedTodoList[i]);
            addTodoList(savedTodoList[i]); // 전달인자로 전달
        }
     } 
    const todoInput = document.querySelector("#todoInput"); // CSS 선택자로 id값이 todoInput 요소 노드를 선택, todoInput 상수에 넣기
    const addBtn = document.querySelector("#addBtn"); // id = "addBtn" 요소 노드를 선택, addBtn 상수에 넣기
    addBtn.addEventListener("click", function() { // addBtn에서 클릭 이벤트 발생시 다음의 익명 함수를 실행 
        if (todoInput.value != "") addTodoList(); // 만약 todoInput 상수의 값이 ""이 아닐경우 addTodoList 함수 실행
    });
}

window.onkeydown = function(todoInput) { // 윈도우에서 '키 다운'(키를 눌렀을시) todoInput을 매개상수로 지정한 함수 실행
    if (todoInput.key == "Enter") { // Enter 키를 눌렀을시
        if (todoInput.value != "") { // todoInput에 담긴 데이터가 비었는지 확인 후
            addTodoList(); // addTodoList 함수 실행
        }
    }
}

function saveItems() { // 로컬 저장소에 데이터 저장하기

	const saveItems = []; // 빈 배열 할당
    const listArea = document.querySelector(".listArea") // 클래스 값이 ".listArea"인 CSS 노드를 선택,값을 listArea에 넣음  
	for (let node of listArea.children) { // for each 형식으로 listArea 클래스의 자식 노드가 가진 값으로 하나씩 node 변수에 넣어 넣을 요소가 없을 때까지 반복  
        textNode = node.querySelector('span'); // textNode (Java script는 동적 타입 언어로 변수명을 명시안해도 들어오는 값에 따라 적합한 타입으로 자동 결정된다),node 노드에서 span 요소 전부 선택   
	    const todoObj = { // todoObj 상수타입 객체 생성, 키와 값을 담아둠.
	        todo: textNode.textContent, // todo 키에 textNode의 요소값을 담아둠
	        check: node.classList.contains('check') // 노드 클래스리스트 요소를 탐색하여 check 키에 '체크' 문자가 있는지 확인
	    };
	    saveItems.push(todoObj); // saveItems 배열에 todoObj 객체를 넣어두기 
	}
	console.log(JSON.stringify(saveItems)); // saveItems 배열에 JSON객체를 불러와서 string으로 형변환하여 콘솔에 표시
	
	localStorage.setItem('todolist', JSON.stringify(saveItems)); // 로컬 저장소에 JSON객체를 불러와서
 }

function addTodoList(savedTodo) { // savedTodo를 매개변수로 지정한 함수

    const listArea = document.querySelector(".listArea"); // CSS 파일 내의 listArea id를 가진 노드를 선택

    const liNode = document.createElement("li"); //노드 만들기
    const checkBtn = document.createElement("button"); // 버튼 생성
    const todoText = document.createElement("span");  // span 태그요소 생성
    const delBtn = document.createElement("button"); // 삭제 버튼

    liNode.appendChild(checkBtn); // 기존 노드에 자식 노드를 연결 (liNode에 checkBtn 연결)
    liNode.appendChild(todoText); // 위와 동일
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode); // listArea 노드에 자식 노드 liNode를 연결

    if (savedTodo) { // savedTodo가 true일 경우
        todoText.innerText = savedTodo.todo; // savedTodo객체에 todo를 연결한 값을 todoText가 선택되어 있는 영역에 텍스트로 표시
        if (savedTodo.check) //savedTodo객체로 check실행, check표시가 있을 경우
            todoText.classList.add("check"); // 체크 텍스트 넣기
            checkBtn.innerHTML = "✔"; // 체크 버튼 웹에 표시
    } else {
        todoText.innerText = todoInput.value; // todoInput의 값을 text로 표시
        todoInput.value = ""; // todoInput 객체의 값을 ""로 설정
    }

    todoInput.value = ""; // 위 명령어가 끝난 뒤에 todoInput의 값을 ""로 설정
    delBtn.innerText = "X"; //  지우는 버튼 "X"를 텍스트로 표시

    

    checkBtn.classList.add("checkBtn"); // checkBtn 노드 -> classList 노드에 체크버튼 요소 추가
    todoText.classList.add("todoText"); // 텍스트 요소 추가
    delBtn.classList.add("delBtn"); // 삭제 버튼 요소 추가
    saveItems(); // 세이브 함수 실행

    checkBtn.addEventListener("click", function() { // checkBtn 노드에 클릭 이벤트 발생시 함수 실행
        if (checkBtn.innerHTML == "") { // checkBtn요소에 담긴 값이 ""일시
            checkBtn.innerHTML = "✔"; // 체크 표시
        }
        else {
            checkBtn.innerHTML = ""; // 아닐시 "" 표사 (클릭할 때에만) 
        }
        todoText.classList.toggle("check"); //체크 표시 활성화
        saveItems(); // 세이브 함수 실행
    })

    delBtn.addEventListener("click", function() { // delBtn 노드에 클릭 이벤트 발생시 함수 실행
        liNode.remove(); // 리스트에 담긴 텍스트 지우기
        saveItems(); // 변경사항 저장
    })

    console.log(listArea.lastChild); // listArea의 마지막 자식 노드를 콘솔에 표시
}