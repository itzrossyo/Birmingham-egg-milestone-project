//js for opening menu and clicking anywhere out of div
$(document).ready(function () {
  const toggleBtn = $(".toggle_btn");
  const dropDownMenu = $(".dropdown-menu");

  toggleBtn.on("click", function (e) {
    e.stopPropagation();
    dropDownMenu.toggleClass("open");
  });

  $(document).on("click", function (e) {
    if (!toggleBtn.is(e.target) && !dropDownMenu.is(e.target) && dropDownMenu.has(e.target).length === 0) {
      dropDownMenu.removeClass("open");
    }
  });
});

//product navbar search menu
var val = $.trim(this.val);
if (val === "") $("img").show();
else {
  $("img").hide();
  $("img[alt*=" + val + "]").show();
}
$(document).ready(function () {
  $("#articleSearchInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#card *").filter(function () {
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

      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//end of poduct navbar search menu

//drop menu search menu start

$(document).ready(function () {
  $("#SearchInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#card *").filter(function () {
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

      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
