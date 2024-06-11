
window.onload = function () {
    const startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", function () {
        const numberInput = document.querySelector("#numberInput");
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        }
        else {
            size = numberInput.value;
        }
        console.log(size);

        const tableArea = document.querySelector(".tableArea");
        const cellHTML = '<table>\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>';
        tableArea.innerHTML = cellHTML;

        const tds = document.querySelectorAll("td");
         
        let curLoc = Math.floor(Math.random() * size * size); // 현재위치
        tds[curLoc].style.backgroundColor = "violet";
        console.log(curLoc);

        window.onkeydown = function (event) {
            if (event.keyCode < 37 || event.keycode > 40) return;
            tds[curLoc].style.backgroundColor = "white";
            let row = Math.floor(curLoc / size); 
            let col = curLoc % size; // 나머지를 가지고 와서 컬럼으로 지정

            switch (event.key) { // 키입력을 위한 스위치 명령어, 방향키의 유형별 케이스. 
                case 'ArrowLeft':
                    curLoc += (col > 0 ? -1 : size-1); // 셀 이동, 셀의 끝에서 똑같은 입력을 눌렀을 시 반대 방향으로 이동하도록 변경
                    break;
                case 'ArrowRight':
                    curLoc += (col < size-1) ? 1 : -(size-1); // 삼항 연산자는 문제가 생길 가능성이 있으므로 가능하면 if문으로 적어도 됨
                    break;
                case 'ArrowUp':
                    curLoc += (row > 0 ? -size : (size-1) * size);
                    break;
                case 'ArrowDown':
                    curLoc += Number((row < size-1) ? size : -(size-1)*size);
                    break;
                
            }
            console.log(curLoc);

            tds[curLoc].style.backgroundColor = "violet";
        }

    });
}
