
/*
$('.find_pwd').click(function () {
  $('#bg_2').show();
});
$('#pop_up2 button').click(function () {
  $('#bg_2').hide();
});
let winH = $(window).height();
$('.login_container , .dimm').height(winH - 56);

$('.id').focusout(() => {
    let inp_id = $('.id').val();

    if(inp_id == ""){
      $('.msg').html("필수입력");
    }
    else{
      $(".msg").html("");
    }
});

$(".pw").focusout(() => {
  let inp_pw = $('.pw').val();

  if(inp_pw == ""){
    $('.msg_2').html("필수입력");

  }
  else{ 
    $(".msg_2").html("");

  }
});

/*
//reset btn
$("").on("click", () => {
  $("").html("");
});
*/

// $('.pwd_wrap i').on('click',function(){
//   $('input').toggleClass('active');
//   if($('input').hasClass('active')){
//       $(this).attr('class',"fa fa-eye-slash fa-lg")
//       .prev('input').attr('type',"text");
//   }else{
//       $(this).attr('class',"fa fa-eye fa-lg")
//       .prev('input').attr('type','password');
//   }
// });
/*
function visual() {
  $('.pw').toggleClass('active');
  if($('.pw').hasClass('active')){
      $(".pw").attr('type',"text");
  }else{
      $(".pw").attr('type','password');
  }
}*/

const idInput = document.getElementById('userID');
const pwInput = document.getElementById('userPW');
const loginBtn = document.getElementById('btn_login');
const linkToMain = document.getElementsByTagName('a')[0];

idInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        loginBtn.disabled = true;
        linkToMain.href = "#none";
    }
})

pwInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        loginBtn.disabled = true;
        linkToMain.href = "#none";
    }
})

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn_login").click();
    }
})
/*
var windowH = $(window).height();
$('.img > img').height(windowH - 0);*/


$('.img > img:gt(1)').hide();

setInterval(function(){
    $('.img > img:nth-child(2)')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('.img');
},3000);