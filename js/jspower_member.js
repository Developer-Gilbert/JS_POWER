const info = document.getElementsByClassName("member-inputInfo");
// const info = document.querySelectorAll(".member-inputInfo");
// console.log(info);
// for(let i of info){
//   console.log(i);
// }
const formBox = document.querySelector(".member-formBox");
// console.log(formBox);

//포커스 이벤트시 테두리 변경
function focus() {
  for (let focus of info) {
    focus.addEventListener("focus", () => {
      if (focus.classList.contains("member-phone")) {
        formBox.style.border = "2px solid blue";
      } else {
        focus.style.border = "2px solid blue";
      }
    });
  }
}

focus();

//블러 이벤트시 테두리변경, 하단 메세지 생성
let noticeMsg = document.querySelectorAll(".member-notice");
// console.log(noticeMsg);
// console.log(info);

function blur() {
  for (let i = 0; i < info.length; i++) {
    const blur = info[i]; // 현재 input 요소

    blur.addEventListener("blur", () => {
      if (!blur.value.length > 0) {
        noticeMsg[i].style.display = "block"; // 각 input에 맞는 noticeMsg 표시
        if (blur.classList.contains("member-phone")) { //html디자인 때문에 태그이슈로 따로설정
          formBox.style.border = "2px solid red";
        } else {
          blur.style.border = "2px solid red"; //위 태그 외 나머지 인풋박스 모두 해당
          // if (blur.classList.contains("member-gender")) { //성별은 필수가 아님
          //   blur.style.border = "1px solid gray"; // 아래 개별처리로 수정
          // }
        }
      } else {
        noticeMsg[i].style.display = "none"; // 입력이 있는 경우 메시지 숨기기
      }
    });
  }
}

blur();

//필수입력이 아닌 창 blur이벤트 개별처리
$(".member-gender").on('blur', () => {
  $(".member-gender").css('border','1px solid gray');
})

//입력창에 값이 생기면 blur로 발생한 빨간테두리 원상복구 
function checkValue() {
  for (let value of info) {
    value.addEventListener("blur", () => {
      if (value.value.length > 0) {
        value.style.border = "";
        formBox.style.border = "";
      }
    });
  }
}

checkValue();

//비밀번호창 눈 이미지 클릭시 변경,인풋창 타입 변경
document.addEventListener("DOMContentLoaded", () => {
  let pwImgs = document.getElementsByClassName("member-img");
  let changeInputs = document.getElementsByClassName("member-pw");

  //getElement ~ 로 받아온 객체는 HTMLCollection을 반환하는데
  //바로 이벤트리스너를 추가할 수 없다
  //반복문을 통해 개별적으로 이벤트 리스너를 추가해야 한다
  //두개의 HTMLCollection을 받아왔기 때문에 index로 각각 접근할 수 있게
  //일반 for문 사용
  for (let i = 0; i < pwImgs.length; i++) {
    pwImgs[i].addEventListener("click", () => {
      if (pwImgs[i].src.includes("m_close.png")) {
        pwImgs[i].src = "../img/m_open.png";
        changeInputs[i].type = "text";
      } else if (pwImgs[i].src.includes("m_open.png")) {
        pwImgs[i].src = "../img/m_close.png";
        changeInputs[i].type = "password";
      }
    });
  }
});

//체크박스 전체선택
$(".member-all").on('click', (e) => {
  $(".member-check").prop("checked", e.target.checked);
});

$(".member-check").on("click", () => {
  $(".member-all").prop("checked", $(".member-check").filter(":checked").length === 3);
});

//나이제한 호버
$(".member-age").on("mouseenter", () => {
  $(".member-ageMent").css('display', 'block');
})
$(".member-age").on("mouseleave", () => {
  $(".member-ageMent").css('display', 'none');
})

//모달창구현
const $modal = $('#member-modal'); //모달창
const $open = $('#member-openModal'); //열기버튼(클릭시 모달창 display : block)
const $close = $('.member-modal-close'); //닫기버튼(클릭시 모달창 display : none)
const $shadow = $('#member-shadow'); //모달 오픈시 어둡게
const $submit = $('.member-submit-button'); //가입 완료버튼
const $complete = $('.member-complete'); //가입 완료모달
// console.log($modal);
// console.log($open);
// console.log($close);
// console.log($body);

// 모달 열기
$open.on('click', () => {
  $modal.addClass('show'); // 모달을 열 때 'show' 클래스를 추가하여 애니메이션 시작
  $shadow.css('display', 'block');
});

//모달 닫기
$close.on('click', () => {
  $modal.removeClass('show'); // 모달을 닫을 때 'show' 클래스를 제거하여 애니메이션 시작
  $shadow.css('display', 'none');
});

//모달창 밖 클릭시 모달 닫기
$shadow.on('click', () => {
  $modal.removeClass('show');
  $shadow.css('display', 'none');
  $complete.css('display', 'none')
})

//이메일 주소 확인 버튼 클릭시 안내모달
$submit.on('click', () => {
  $complete.css('display', 'flex');
  $shadow.css('display', 'block');
})
