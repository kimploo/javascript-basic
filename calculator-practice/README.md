요구 사항
HTML 파일을 생성하고 기본 구조를 작성하세요.
CSS의 flexbox 속성을 이용해 계산기 레이아웃을 구성하세요.
계산기의 기본 구성 요소를 추가하세요 (디스플레이, 숫자 버튼, 연산자 버튼 등).
레이아웃 예시
구현 단계
index.html
body 요소 내부에 계산기 컨테이너를 만듭니다.
힌트
<div class="calculator-container"></div>
컨테이너 내부를 2개의 영역으로 구분합니다. (display, buttons)
buttons 내부에 계산기에 필요한 버튼을 추가합니다.
모든 버튼은 button class를 가지고 있어야 합니다.
숫자 버튼에는 number class를 추가합니다.
연산기호 버튼(+, -, *, /)에는 operator class를 추가합니다.
기능 버튼(C, ±, %)에는 function class를 추가합니다.
숫자 0은 다른 버튼에 비해 두 배의 영역을 가지고 있으므로, zero class를 추가합니다.
style.css
body 요소를 중앙 정렬하고, 기본적인 스타일을 설정합니다.
calculator-container를 flexbox로 설정하고, 세로 방향으로 정렬합니다.
display 영역을 스타일링합니다.
buttons 영역과 버튼들을 flexbox를 사용하여 정렬합니다.