document.getElementById('saveBtn').addEventListener('click', saveTerm);
document.getElementById('searchBtn').addEventListener('click', searchTerm);

// 저장
function saveTerm() {
    const term = document.getElementById('term').value.trim(); // trim() = 앞 뒤 공백 제거
    const definition = document.getElementById('definition').value.trim();

    if (term && definition) {
        localStorage.setItem(term, definition);
        alert('저장되었습니다!');
        document.getElementById('term').value = '';
        document.getElementById('definition').value = '';
    } else {
        alert('모든 필드를 입력하세요.');
    }
}

// 검색
function searchTerm() {
    const term = document.getElementById('term').value.trim();
    const definition = localStorage.getItem(term);

    const output = document.getElementById('output');
    output.innerHTML = '';

    if (definition) {
        output.innerHTML = `<strong>${term}:</strong> ${definition}`;
    } else {
        output.innerHTML = '용어를 찾을 수 없습니다.';
    }
}

//삭제 

function deleteTerm() {
    const term = document.getElementById('term').value.trim();

}
