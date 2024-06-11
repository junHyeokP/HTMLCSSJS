window.onload = function () { // 윈도우 창이 로드될시 바로 실행되는 함수
    const btnNode = document.querySelector("button"); // btnNode 상수에 button이라는 태그가 있는 Form요소 하나를 CSS선택자로 선택
    btnNode.addEventListener("click", function() { // 선택했던 노드에 '클릭' 이벤트 발생시 다음 익명 함수 실행 :

        const danNum = document.querySelector("#danInput").value; // danInput이라는 id가 담긴 폼요소에서 value값을 받아와서 상수에 넣기
        console.log(danNum); // 콘솔에 danNum데이터 표시
    
        document.querySelector("#danNumber").innerHTML = `${danNum}단`; // id = danNumber, danNum의 수치를 innerHTML명령어를 이용하여 표시
        
        const resultNode = document.querySelector("#result"); // result id가 담긴 폼요소를 CSS 선택자로 선택하여 resultNode 상수에다 넣기 
        let result = ""; // 변수 초기화 (초기에 string으로 선언)
        for (let i = 1; i <= 9; i++) { // 구구단 계산을 위한 for문, result에 danNum상수 x i번째 수를 곱한 결과까지 넣음
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`;
        }
        
        resultNode.innerHTML = result; // 결과를 innerHTML로 한꺼번에 표시
        document.querySelector(".displayArea").style.display = "block"; //CSS 선택자로 displayArea 클래스를 선택하여 block 형식으로 나타내기
    });
}
