document.addEventListener('DOMContentLoaded', () => {
  // 사용자 이름 입력 필드 및 관련 요소 가져오기
  const usernameInput = document.getElementById('username');
  const usernameBorder = document.querySelector('#username + .fw-input-border');
  const usernameErrorMessage = document.getElementById('error-message');

  function validateInput(input, border, errorMessage, errorText) {
    if (input.value.trim() === '') {
      // 입력 값이 비어있는 경우
      input.parentElement.classList.add('input-field--error'); // 에러 클래스 추가
      input.parentElement.classList.remove('input-field--valid'); // 올바른 클래스 제거
      border.style.borderColor = 'rgb(var(--colour-semantic-negative, 224, 7, 81))'; // 빨간색 테두리
      errorMessage.textContent = errorText; // 에러 메시지 표시
      errorMessage.style.display = 'block'; // 에러 메시지 보이기
    } else {
      // 입력 값이 있는 경우
      input.parentElement.classList.remove('input-field--error'); // 에러 클래스 제거
      input.parentElement.classList.add('input-field--valid'); // 올바른 클래스 추가
      border.style.borderColor = 'purple'; // 보라색 테두리
      errorMessage.textContent = ''; // 에러 메시지 숨기기
      errorMessage.style.display = 'none'; // 에러 메시지 숨기기
    }
  }

  // 사용자 이름 입력 필드의 'blur' 이벤트에 유효성 검사 
  usernameInput.addEventListener('blur', () => {
    validateInput(usernameInput, usernameBorder, usernameErrorMessage, '이메일 또는 전화번호를 입력해주세요');
  });

  // 폼 제출 시 유효성 검사 추가
  document.querySelector('form').addEventListener('submit', function (event) {
    let valid = true;

    if (usernameInput.value.trim() === '') {
      validateInput(usernameInput, usernameBorder, usernameErrorMessage, '이메일 또는 전화번호를 입력해주세요');
      valid = false; 
    }

    if (!valid) {
      event.preventDefault(); 
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.fw-btn');
  loginButton.addEventListener('click', () => {
    window.location.href = 'jspower_login.html';
  });
});


