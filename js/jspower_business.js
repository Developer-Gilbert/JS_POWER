document.addEventListener('DOMContentLoaded', function() {
  const Nameinput = document.getElementById('b-Name');
  const Numberinput = document.getElementById('b-Number');
  const Addrinput = document.getElementById('b-Addr');
  const Segmentinput = document.getElementById('b-Segment-select');
  const Lastinput = document.getElementById('b-Last');
  const Firstinput = document.getElementById('b-First');
  const Emailinput  = document.getElementById('b-Email');
  const Passwordinput = document.getElementById('b-Password');
  
  const BNameInput = document.getElementById('b-Name');
  const BAddrInput = document.getElementById('b-Addr');
  const BLastInput = document.getElementById('b-Last');
  const BFirstInput = document.getElementById('b-First');
  const BEmailInput = document.getElementById('b-Email');
  const BPasswordInput = document.getElementById('b-Password');

  // 마우스 커서 올릴 때 입력칸 테두리 파란색으로 변경
  // 마우스 커서가 벗어날 때 원래 상태로
  //회사명
  Nameinput.addEventListener('mouseenter', function() {
    Nameinput.classList.add('hovered');
  });

  Nameinput.addEventListener('mouseleave', function() {
    Nameinput.classList.remove('hovered');
  });

    //주소
    Addrinput.addEventListener('mouseenter', function() {
      Addrinput.classList.add('hovered');
    });
  
    Addrinput.addEventListener('mouseleave', function() {
      Addrinput.classList.remove('hovered');
    });

  //사업번호
  Numberinput.addEventListener('mouseenter', function() {
    Numberinput.classList.add('hovered');
  });

  Numberinput.addEventListener('mouseleave', function() {
    Numberinput.classList.remove('hovered');
  });

  //선택
  Segmentinput.addEventListener('mouseenter', function() {
    Segmentinput.classList.add('hovered');
  });

  Segmentinput.addEventListener('mouseleave', function() {
    Segmentinput.classList.remove('hovered');
  });

  //성
  Lastinput.addEventListener('mouseenter', function() {
    Lastinput.classList.add('hovered');
  });

  Lastinput.addEventListener('mouseleave', function() {
    Lastinput.classList.remove('hovered');
  });

  //이름
  Firstinput.addEventListener('mouseenter', function() {
    Firstinput.classList.add('hovered');
  });

  Firstinput.addEventListener('mouseleave', function() {
    Firstinput.classList.remove('hovered');
  });

  //이메일
  Emailinput.addEventListener('mouseenter', function() {
    Emailinput.classList.add('hovered');
  });

  Emailinput.addEventListener('mouseleave', function() {
    Emailinput.classList.remove('hovered');
  });

  //비밀번호
  Passwordinput.addEventListener('mouseenter', function() {
    Passwordinput.classList.add('hovered');
  });

  Passwordinput.addEventListener('mouseleave', function() {
    Passwordinput.classList.remove('hovered');
  });


  // 필수입력창 에러 메세지
  let isBNameValid = false;
  let isBAddrValid = false;
  let isBLastValid = false;
  let isBFirstValid = false;
  let isBEmailValid = false;
  let isBPasswordValid = false;

  // 에러 메시지 표시
  function showError(input, errorID) {
    //오류메시지 선택
    const errorElement = document.getElementById(errorID);
    //block 으로 지정해서 동적콘텐츠 표시
    errorElement.style.display = 'block';
    //빨강 테두리
    input.style.border = '1px solid #f74747';
 }

 //에러 메시지 숨기기
 function hideError(input, errorID) {
    const errorElement = document.getElementById(errorID);
    errorElement.style.display = 'none';
    input.style.border = '1px solid gray';
 }

 //회사명
 function checkBNameValid() {
    const bnameValue = BNameInput.value.trim();

    isBNameValid = false;
    hideError(BNameInput, 'NameEmptyError');

    if (!bnameValue) {
       showError(BNameInput, "NameEmptyError");
    } else {
      isBNameValid = true;
    }
    submitButtonState();
 }

 if (BNameInput) {
  BNameInput.addEventListener("focusout", checkBNameValid);
  }

    //주소
    function checkBAddrValid() {
      const baddrValue = BAddrInput.value.trim();
  
      isBAddrValid = false;
      hideError(BAddrInput, 'AddrEmptyError');
  
      if (!baddrValue) {
        showError(BAddrInput, "AddrEmptyError");
      } else {
        isBAddrValid = true;
      }
      submitButtonState();
    }
  
    if (BAddrInput) {
      BAddrInput.addEventListener("focusout", checkBAddrValid);
    }

 //성
 function checkBLastValid() {
    const blastValue = BLastInput.value.trim();

    isBLastValid = false;
    hideError(BLastInput, 'LastEmptyError');

    if (!blastValue) {
      showError(BLastInput, "LastEmptyError");
    } else {
      isBLastValid = true;
    }
    submitButtonState();
  }

  if (BLastInput) {
    BLastInput.addEventListener("focusout", checkBLastValid);
  }

  //이름
  function checkBFirstValid() {
    const bfirstValue = BFirstInput.value.trim();

    isBFirstValid = false;
    hideError(BFirstInput, 'FirstEmptyError');

    if (!bfirstValue) {
      showError(BFirstInput, "FirstEmptyError");
    } else {
      isBFirstValid = true;
    }
    submitButtonState();
  }

  if (BFirstInput) {
    BFirstInput.addEventListener("focusout", checkBFirstValid);
  }

  //이메일
  function checkBEmailValid() {
    const bemailValue = BEmailInput.value.trim();

    isBEmailValid = false;
    hideError(BEmailInput, 'EmailEmptyError');

    if (!bemailValue) {
      showError(BEmailInput, "EmailEmptyError");
    } else {
      isBEmailValid = true;
    }
    submitButtonState();
  }

  if (BEmailInput) {
    BEmailInput.addEventListener("focusout", checkBEmailValid);
  }

  //비밀번호
  function checkBPasswordValid() {
    const bpasswordValue = BPasswordInput.value.trim();

    isBPasswordValid = false;
    hideError(BPasswordInput, 'PasswordEmptyError');

    if (!bpasswordValue) {
      showError(BPasswordInput, "PasswordEmptyError");
    } else {
      isBPasswordValid = true;
    }
    submitButtonState();
  }

  if (BPasswordInput) {
    BPasswordInput.addEventListener("focusout", checkBPasswordValid);
  }

  const mark = document.querySelector('div.mark');
  mark.addEventListener("click", (e) => {

    var input = document.querySelector("input[name=password]");
    const isText = input.type === "text";

    input.setAttribute('type', isText?'password':'text');
    
    e.target.style.backgroundImage = `url('${isText ? './../img/b_close.png' : './../img/b_open.png'}')`;

  })
});

// 모달창 열기 닫기
function openModal() {
  document.getElementById('modal').classList.add('show');
  document.getElementById('overlay').classList.add('show');
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

function bopenModal() {
  document.getElementById('b-modal').classList.add('show');
  document.getElementById('b-overlay').classList.add('show');
}

function bcloseModal() {
  document.getElementById('b-modal').classList.remove('show');
  document.getElementById('b-overlay').classList.remove('show');
}
