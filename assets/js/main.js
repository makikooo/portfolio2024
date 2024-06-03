document.addEventListener("DOMContentLoaded", function () {
    // スクール紹介のナビゲーションバーの要素を取得します。
    const school = document.querySelector(".nav_school");
    // スクール紹介のサブメニューの要素を取得します。
    const menu = document.querySelector(".sub_menu_li");
    // もう一つのサブメニューの要素を取得します。
    const menu2 = document.querySelector(".sub_menu");

    // スクール紹介のナビゲーションバーにマウスを乗せた時の処理を設定します。
    school.addEventListener("mouseenter", function () {
        // サブメニューを表示状態にします。
        menu.classList.remove("disappear");
        menu2.classList.remove("disappear");
    });

    // サブメニューにマウスを乗せた時にも、サブメニューを表示状態に保つ処理を設定します。
    menu.addEventListener("mouseenter", function () {
        menu.classList.remove("disappear");
        menu2.classList.remove("disappear");
    });
    menu2.addEventListener("mouseenter", function () {
        menu.classList.remove("disappear");
        menu2.classList.remove("disappear");
    });

    // スクール紹介のナビゲーションバーからマウスが離れた時の処理を設定します。
    school.addEventListener("mouseleave", function (e) {
        // マウスが移動した先がサブメニュー内でなければ、サブメニューを非表示にします。
        if (
            !menu.contains(e.relatedTarget) &&
            !menu2.contains(e.relatedTarget)
        ) {
            menu.classList.add("disappear");
            menu2.classList.add("disappear");
        }
    });

    // 以下同様にサブメニューからマウスが離れた時に、サブメニューを非表示にする処理を設定します。
    menu.addEventListener("mouseleave", function (e) {
        if (
            !school.contains(e.relatedTarget) &&
            !menu2.contains(e.relatedTarget)
        ) {
            menu.classList.add("disappear");
            menu2.classList.add("disappear");
        }
    });
    menu2.addEventListener("mouseleave", function (e) {
        if (
            !school.contains(e.relatedTarget) &&
            !menu.contains(e.relatedTarget)
        ) {
            menu.classList.add("disappear");
            menu2.classList.add("disappear");
        }
    });
});




// ハンバーガー
const hamburger = document.querySelector('.hamburger');
const sp_nav = document.querySelector('.sp_nav');

hamburger.addEventListener('click', function(){
    this.classList.toggle('menu-open');
    sp_nav.classList.toggle('appear');
});


$(function () {
    // ハンバーガーボタンクリックで実行
    // $(".hamburger").click(function () {
    //  $(this).toggleClass("menu-open");
    //  $(".sp_nav").toggleClass("appear");
    // });
  
    $(".sp_nav a").click(function () {
      $(".hamburger").removeClass("menu-open");
      $(".sp_nav").removeClass("appear");
    });
  });


// ページ上部へスクロールするボタン
$("#scroll_top").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
});