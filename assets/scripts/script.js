const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};

var val = $.trim(this.value);
if (val === "")
  $('img').show();
else {
  $('img').hide();
  $("img[alt*=" + val + "]").show();
}

$(document).ready(function() {
  $("#articleSearchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#card *").filter(function() {

      if (value == "beef") {
        $("img").show();
      }
      if (value == "chi" || "chick") {
        $("img").show();
      }
      if (value == "por" || "pork ") {
        $("img").show();
      }
      if (value == "lam" || "lamb") {
        $("img").show();
      }
      if (value == "tur" || "turkey") {
        $("img").show();
      }
      if (value == "che" || "cheese") {
        $("img").show();
      }
      if (value == "bac" || "bacon") {
        $("img").show();
      }
      if (value == "sau" || "sausage") {
        $("img").show();
      }
      
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});




$(document).ready(function() {
  $("#SearchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#card *").filter(function() {

      if (value == "beef") {
        $("img").show();
      }
      if (value == "chi" || "chick") {
        $("img").show();
      }
      if (value == "por" || "pork ") {
        $("img").show();
      }
      if (value == "lam" || "lamb") {
        $("img").show();
      }
      if (value == "tur" || "turkey") {
        $("img").show();
      }
      if (value == "che" || "cheese") {
        $("img").show();
      }
      if (value == "bac" || "bacon") {
        $("img").show();
      }
      if (value == "sau" || "sausage") {
        $("img").show();
      }
      
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});