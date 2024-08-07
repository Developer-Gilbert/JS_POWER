document.addEventListener('DOMContentLoaded',  () => {
  // 사용자 이름 입력 필드 및 비밀번호 입력 필드 요소 가져오기
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const usernameBorder = document.querySelector('#username ~ .login-input-border');
  const passwordBorder = document.querySelector('#password ~ .login-input-border');
  const usernameErrorMessage = document.getElementById('error-message');
  const passwordErrorMessage = document.getElementById('error-message-pw'); 

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

  // 사용자 이름 입력 필드의 'blur' 이벤트에 유효성 검사 함수 연결
  usernameInput.addEventListener('blur',  () => {
    validateInput(usernameInput, usernameBorder, usernameErrorMessage, '이메일 또는 휴대폰 번호를 입력해주세요');
  });

  // 비밀번호 입력 필드의 'blur' 이벤트에 유효성 검사 함수 연결
  passwordInput.addEventListener('blur',  () => {
    validateInput(passwordInput, passwordBorder, passwordErrorMessage, '비밀번호를 입력해주세요');
  });

  // 폼 제출 시 유효성 검사 추가
  document.querySelector('form').addEventListener('submit', function (event) {
    let valid = true;

    if (usernameInput.value.trim() === '') {
      validateInput(usernameInput, usernameBorder, usernameErrorMessage, '이메일 또는 휴대폰 번호를 입력해주세요');
      valid = false; 
    }

    if (passwordInput.value.trim() === '') {
      validateInput(passwordInput, passwordBorder, passwordErrorMessage, '비밀번호를 입력해주세요');
      valid = false; 
    }

    if (!valid) {
      event.preventDefault(); 
    }
  });
});

document.addEventListener('DOMContentLoaded',  () => {
  const checkboxSymbol = document.querySelector('.login-checkbox-symbol');
  const checkbox = document.getElementById('remember-me');

  // 체크박스 심볼 클릭 시 체크박스 상태 토글
  if (checkboxSymbol && checkbox) {
    checkboxSymbol.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked; // 체크박스 상태를 반전
    });
  }
});


// 개인회원가입 버튼 클릭시 회원가입 페이지로 이동
document.addEventListener('DOMContentLoaded', () => {
  const signButton = document.getElementById('signup'); 
  signButton.addEventListener('click', () => {
    window.location.href = 'jspower_member.html';
  });
});




// 비지니스 회원가입 버튼 클릭시 페이지이동
document.addEventListener('DOMContentLoaded', () => {
  const businButton = document.getElementById('businessSignup');
  businButton.addEventListener('click', () => {
    window.location.href = 'jspower_business.html';
  })
})



// 버튼에 마우스 올리면 검정색 테두리 생기게하는 js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.border = '2px solid black'; 
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.border = '2px solid transparent'; 
    });
  });
});


// 비밀번호 input에 눈모양 클릭하면 비밀번호 보이게하고 숨겨주는 js
document.addEventListener('DOMContentLoaded', function() {
  const mark = document.querySelector('div.mark');
  
  mark.addEventListener("click", (e) => {
    const input = document.querySelector("input#password"); 
    const isText = input.type === "text";
  
    input.setAttribute('type', isText ? 'password' : 'text');
  
    e.target.style.backgroundImage = `url('${isText ? './../img/loginclose.png' : './../img/loginopen.png'}')`;
  });
});


// 모달창 부분 js
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('#myModal');
  const modalContent = modal.querySelector('.modal-content');
  const modalMessage = modalContent.querySelector('p');
  const loginBtn = document.querySelector('.login-btn');
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const errorMessageUsername = document.querySelector('#error-message');
  const errorMessagePassword = document.querySelector('#error-message-pw');

  function showModal(message, isLoading = false) {
    modalMessage.textContent = message;
    modal.style.display = 'flex';
    modalContent.style.animation = 'popUp 0.5s';
    if (isLoading) {
      modalContent.classList.add('loading');
    }
  }

  function closeModal(callback) {
    modalContent.style.animation = 'popDown 0.5s';
    modalContent.addEventListener('animationend', function handleAnimationEnd() {
      modalContent.removeEventListener('animationend', handleAnimationEnd);
      modal.style.display = 'none';
      modalContent.classList.remove('loading');
      if (callback) callback();
    }, { once: true });
  }

  modal.addEventListener('click', function(event) {
    if (event.target === modal) closeModal();
  });

  modal.querySelector('.close').addEventListener('click', closeModal);

  // 정규표현식 사용해서 지정된 값이 들어오지 않았을 경우 에러모달 출력
  function validateInput(input) {
    // 이메일 유효성을 검사하기 위한 코드
//  /^ : 문자열의 시작, [a-zA-Z0-9._%+-]+ : 이메일 주소의 파트, 하나 이상의 영문자 대소문자 숫자 점 밑줄 퍼센트 더하기 빼기 문자포함가능
// @ 반드시 포함되어야함, [a-zA-Z0-9.-]+ : 도메인의 첫번째 부분 하나 이상의 영문자 대소문자, 숫자, 점, 빼기 문자를 포함가능
// \. : 도메인의 첫 번째 부분과 최상위 도메인을 구분하는 점이 있어야함 [a-zA-Z]{2,} : 최상위 도메인을 나타냄 두 글자 이상의 영문자 대소문자를 포함해야함
   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 휴대전화 유효성을 검사하기 위한 코드
// /^ : 문자열 시작하는 부분 01[016789] : 01 > 0부터시작해서 16789 다 가능하게 만듬 예) 010, 011, 016, 017, 018, 019
// -? : 하이픈 사용할수도있고 안할수도있다 \d{3,4}: 3자리 또는 4자리가 와야함 -? : 하이픈 사용할수도있고 안할수도있다
// \d{4} : 4자리 숫자가 와야함 $/ : 문자열의 마지막부분
    const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;
    
    if (emailRegex.test(input)) {
      return { isValid: true, type: 'email' };
    } else if (phoneRegex.test(input)) {
      return { isValid: true, type: 'phone' };
    } else {
      return { isValid: false, type: null };
    }
  }

  loginBtn.addEventListener('click', function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    errorMessageUsername.textContent = '';
    errorMessagePassword.textContent = '';

    let isValid = true;

    if (!username) {
      errorMessageUsername.textContent = '이메일 또는 휴대폰 번호를 입력해주세요.';
      isValid = false;
    } else {
      const usernameValidation = validateInput(username);
      if (!usernameValidation.isValid) {
        errorMessageUsername.textContent = '유효한 이메일 주소나 휴대폰 번호를 입력해주세요.';
        isValid = false;
      }
    }

    if (!password) {
      errorMessagePassword.textContent = '비밀번호를 입력해주세요.';
      isValid = false;
    } 

    // console.log('Is Valid:', isValid);
    if (!isValid) {
      showModal('입력한 정보를 다시 확인해주세요.');
    } else {
      showModal('로그인 되었습니다', true);

      setTimeout(() => {
        closeModal(() => {
          window.location.href = 'jspower.html';
        });
      }, 1000);
    }
  });
});


