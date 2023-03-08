jQuery(document).ready(function ($) {
  $(".scroll_move").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });

  $(document).ready(function () {
    $(".return-top").hide();

    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          // 스크롤 내릴 표시
          $(".return-top").fadeIn();
        } else {
          $(".return-top").fadeOut();
        }
      });
      $(".return-top").click(function () {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          800
        ); // 탑 이동 스크롤 속도
        return false;
      });
    });
  });

  $(document).ready(function () {
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          // 스크롤 내릴 표시
          $(".scroll-link").fadeOut();
        } else {
          $(".scroll-link").fadeIn();
        }
      });
    });
  });

  var scrollHeight = 0; // 전역변수로 초기화

  //팝업열기버튼 클릭

  $(".popup-open-btn").click(function () {
    scrollHeight = $("html").scrollTop(); // 열렸을떄 scrollTop 체크 (var 쓰지않기. 팝업오픈했을때만사용하기위한 변수)
    // alert(scrollHeight);
    $("body").addClass("layer-open"); //overflow:hidden 추가

    $("html").css({
      position: "fixed", //최상위 div 고정

      top: -scrollHeight, // 최상위 div에 현재 스크롤된값 = 보이는화면만큼 top값 추가
    });

    $(".dim-layer, .popup").show(); //팝업 띄우기
  });

  //팝업 닫기버튼 클릭

  $(".pop-close-btn").click(function () {
    $("html").removeClass("layer-open"); //overflow-hidden 해제(스크롤 해제)

    $("html").css({
      position: "relative", //최상위 div 고정해제

      top: "0", //top값 해제
    });

    $("html").scrollTop(scrollHeight); //현재 스크롤된값=보이는화면

    $(".dim-layer, .popup").hide(); //팝업 숨김
  });
});

$(function () {
  $(".swiper-wrapper").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,

    pauseOnHover: true, // 이걸 true로 해두면 마우스 호버 시에 슬라이드가 안 움직인다.
  });
});
