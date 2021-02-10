$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
      $('.headerFirst').addClass('fixed_header');
  } else {
      $('.headerFirst').removeClass('fixed_header');
  }
});

$(document).on('click','.firstCon ul.Ribbons li button',function(){
$('.firstCon ul.Ribbons li button').removeClass('active');
$(this).addClass('active');
});
$(document).on('click','.firstCon ul.Price li button',function(){
  $('.firstCon ul.Price li button').removeClass('active');
  $(this).addClass('active');
  });
  $(document).on('click','.firstCon ul.Brands li button',function(){
    $('.firstCon ul.Brands li button').removeClass('active');
    $(this).addClass('active');
    });

    $(document).on('click','.fillterBtns .btns',function(){
      $('.fillterBtns .btns').removeClass('active');
      $(this).addClass('active');
    });
    $(document).on('click','.filterAl a',function(){
      $('.filterDetails').slideDown();
    });
    $(document).on('click','.filterHead span',function(){
      $('.filterDetails').slideUp();
    });

    $(document).on('click','.productImgss ul li',function(){
      var x = $(this).children('img').attr('src');
    $('.productFirst img').attr('src',x);
    });

    $(document).on('click','.btnes .btnAll a',function(){
      $('.btnes .btnAll a').removeClass('active');
      $(this).addClass('active');
    });
    //add to cart code start
$(document).on('click','.addProduct .productAdd',function(){
	$(this).siblings('.addProduct .minus_btn,.plus_btn').show();
});
$(".plus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    $n.val(Number($n.val()) + 1);
});

$(".minus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
});
//add to cart code end

$(document).on('click','.remove', function(){
  var x = 0;
  $(this).siblings('.vaulebox').find('input').attr('value',x);
})

$(document).on('click','.addressBtn ul li a',function(){
  $('.addressBtn ul li a').removeClass('active');
  $(this).addClass('active');
});
$(document).on('click','.AddShow',function(){
  $('.addPrdoctAll.addPrdoctAlladdShow').show();
  $(this).hide();
});
jQuery("#carousel").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText: ["<img src='imgs/arrowl.svg'>","<img src='imgs/arrowr.svg'>"],
  dots:true,
  responsive: {
    0: {
      items: 1
    }
  }
});