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