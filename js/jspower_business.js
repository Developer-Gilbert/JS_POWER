document.addEventListener('DOMContentLoaded', () => {
  const businessidInput = document.getElementById('business-id');
  const businesslastnameInput = document.getElementById('business-lastname');
  const businessfirstnameInput = document.getElementById('business-firstname');
  const businessemailInput = document.getElementById('business-email');
  const businesspasswordInput = document.getElementById('business-password');

  let isBusinessIdValid = false;
  let isBusinessLastnameValid = false;
  let isBusinessFirstnameValid = false;
  let isBusinessEmailValid = false;
  let isBusinessPasswordValid = false;

  // 에러 메시지 표시
  function showError(input, errorID) {
     //오류메시지 선택
     const errorElement = document.getElementById(errorID);
     //block 으로 지정해서 동적콘텐츠 표시
     errorElement.style.display = 'block';
     //빨강 테두리
     input.style.border = '1px solid red';
  }

  //에러 메시지 숨기기
  function hideError(input, errorID) {
     const errorElement = document.getElementById(errorID);
     errorElement.style.display = 'none';
  }

  //회사명 필수 필드
  function checkBusinessIdValid() {
    const businessidValue = businessidInput.value.trim();

    isBusinessIdValid = false;
    hideError(businessidInput, "EmptyError");

    if (!businessidValue) {
       showError(businessidInput, "EmptyError");
    } else {
      isBusinessIdValid = true;
    }
    submitButtonState();
  }

  
  //성 필수 필드
  function checkBusinessLastnameValid() {
    const businessLastnameValue = businesslastnameInput.value.trim();
  
    isBusinessLastnameValid = false;
    hideError(businesslastnameInput, "EmptyError");
  
    if (!businessLastnameValue) {
        showError(businesslastnameInput, "EmptyError");
    } else {
      isBusinessLastnameValid = true;
    }
      submitButtonState();
  }

  //이름 필수 필드
  function checkBusinessFirstnameValid() {
    const businessFirstnameValue = businessfirstnameInput.value.trim();

    isBusinessFirstnameValid = false;
    hideError(businessfirstnameInput, "EmptyError");

    if (!businessFirstnameValue) {
       showError(businessfirstnameInput, "EmptyError");
    } else {
      isBusinessFirstnameValid = true;
    }
    submitButtonState();
  }

    //이메일 필수 필드
    function checkBusinessEmailValid() {
      const businessemailValue = businessemailInput.value.trim();
  
      isBusinessEmailValid = false;
      hideError(businessemailInput, "EmptyError");
  
      if (!businessemailValue) {
         showError(businessemailInput, "EmptyError");
      } else {
        isBusinessEmailValid = true;
      }
      submitButtonState();
    }
  
    

  // 이벤트리스너 추가
  if (businessidInput) {
    businessidInput.addEventListener("focusout", checkBusinessIdValid);
  }

  if (businesslastnameInput) {
    businesslastnameInput.addEventListener("focusout", checkBusinessLastnameValid);
  }

  if (businessfirstnameInput) {
    businessfirstnameInput.addEventListener("focusout", checkBusinessFirstnameValid);
  }
  if (businessemailInput) {
    businessemailInput.addEventListener("focusout", checkBusinessEmailValid);
  }



  // 산업 분야 (선택사항)
  function doSelected(segment) { 
    var select = document.getElementById("business-select"); 
    select.value = segment; 
  } 

});
