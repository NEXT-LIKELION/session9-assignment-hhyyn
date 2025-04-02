 // 실제 viewport 높이를 계산하여 CSS 변수로 설정
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 초기 로드 시 실행
window.addEventListener('load', setVH);

// 화면 크기 변경 시 재계산
window.addEventListener('resize', setVH);


// 현재 시간을 업데이트하는 함수
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // 24시간 형식을 12시간 형식으로 변환
    const ampm = hours >= 12 ? '' : '';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시는 12시로 표시
    
    // 분이 한 자리수일 경우 앞에 0 추가
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    // 시간 문자열 생성
    const timeString = hours + ':' + minutes;
    
    // 시간 요소 업데이트
    document.querySelector('.time').textContent = timeString;
}

// 페이지 로드 시 시간 업데이트
window.onload = function() {
    updateTime();
    // 1분마다 시간 업데이트
    setInterval(updateTime, 60000);
};