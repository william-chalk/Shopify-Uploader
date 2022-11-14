function showToast({ message }) {
    var toastBody = document.querySelector('.toast-body');
    toastBody.textContent = message;
    var toast = document.querySelector('#liveToast');
    var myToast = new bootstrap.Toast(toast, { autohide: true });
    myToast.show();
  }

  var checkList = document.getElementById('tagList');
  checkList.getElementsByClassName('anchor')[0].onclick = function(evt){
    if(checkList.classList.contains('visible')){
      checkList.classList.remove('visible');
    }
    else{
      checkList.classList.add('visible');
    }
  }



function submitInfo(event){
  event.preventDefault();

  const templateName = document.querySelector("#template-name").value;
  const templateDescripton = document.querySelector("#template-description").value;
  const templateWeight = document.querySelector("#weight").value;
  const templateCost = document.querySelector("#cost").value;
  const templateTags = document.querySelector(".tags").value;
  const checkedTags = [];
    for(let i =0;i<templateTags.length;i++){
      if(templateTags[i].checked){
        checkedTags.push(templateTags[i].value);
      }
    }

  const templateStyle = document.querySelector("#style").value;
  const templateStatus = document.querySelector("input[name='status']:checked").value;
  const templatePublish = document.querySelector("input[name=publish]").value;

  const test = templateName + templateDescripton + templateWeight + templateCost + templateTags + templateStyle + templateStatus + templatePublish;

  console.log(test);

}

document.querySelector("#submit-btn").addEventListener("click",submitInfo);