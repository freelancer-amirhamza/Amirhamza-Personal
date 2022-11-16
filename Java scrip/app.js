var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl){
return new bootstrap.Toast(toastEl,  {
    animation:true,
    autohide:true,
    delay:5000
})
});

const liveToastBtn = document.querySelector('#liveToastBtn')
const toast = document.querySelector('#liveToastBtn')
var myToast = bootstrap.Toast.getInstance(toast)

liveToastBtn.addEventListener('click', function () {
    myToast.show()
})
("click", function(){
    myToast.show()
})








