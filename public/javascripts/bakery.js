function reserve() {
    // const username = document.getElementsByClassName("username").value;
    const username = $(".username").val();
    const phone = $(".phone").val();
    const datetime = $(".datetime").val();


    if(username && phone && datetime) {
        $(".p_btn").click(function(){
            $("#popup_body").show();
        });
        $(".popup_username").html(username);
        $(".popup_phone").html(phone);
        $(".popup_datetime").html(datetime);
    }
    else {
        alert("입력정보를 확인하세요.");
       
    }
}


$(document).ready(function(){
    $(".ok_btn").click(function(){
        $("#popup_body").hide();
    });
  });

  function checkNumber(event) {
    if(event.key === '.' 
       || event.key === '-'
       || event.key >= 0 && event.key <= 9) {
      return true;
    }
    
    return false;
  }

  function checktext(event) {
      if(event.key >= 0 && event.key <= 9) {
          return false;
      }
      return true;
  }
  