"use strict";
// =================================================================
//
// infiniteslidev2.js 無限スクロール設定
//
// 【使い方】
// https://shu-naka-blog.com/website/infiniteslidev2/
// https://wood-roots.com/sample/infiniteslidev2/
//
// =================================================================

$(function () {
    $(".infinite_scroll").infiniteslide({
        speed: 23, //スライド速度です。値が大きいほど速くなります。
        direction: "left", //スライドする方向を指定します。
        pauseonhover: false, //マウスオーバーでスクロールを停止させるかどうかを選択します。
        responsive: false, //trueの場合、ウインドウリサイズ時に幅や高さを再取得します。子要素の幅や高さを%で指定している場合はtrueにして下さい
        clone: 1, //標準は1に設定します。infiniteslide.js v2は無限のスクロールにするために子要素を複製して追加しますが、子要素の幅・高さが少ない場合は無限ループにならず途切れることがあります。その場合子要素の複製回数をcloneオプションで2以上増やすことができます。
    });
});

// =================================================================
//
// slick.js スライダー設定
//
// 【使い方】
// https://junpei-sugiyama.com/slick
// https://junpei-sugiyama.com/slick-responsive/
// https://junpei-sugiyama.com/slick-option/
// https://b-risk.jp/blog/2020/01/slick-customize/
// =================================================================
$(function () {
    $(".slick_slide").slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 3,
        pauseOnFocus: false, //フォーカスで一時停止
        pauseOnHover: false, //マウスホバーで一時停止
        responsive: [
            {
                breakpoint: 1000, // 1000px以下のサイズに適用
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700, // 600px以下のサイズに適用
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

// =================================================================
//
// インスタグラムの画像のレスポンシブル用コード（動作せず）
//
// =================================================================

// ビューポートの幅をチェックし、条件に応じてスタイルを適用する関数
function adjustInstagramStyle() {
    // #instagram要素内の.media-grid要素を取得
    const mediaGrid = document.querySelector("#instagram .media-grid");
    const instagram_iframe = document.querySelector("#instagram iframe");

    // ビューポートの幅が600px未満かどうかをチェック
    if (window.innerWidth < 600) {
        // 条件を満たす場合、gridレイアウトを適用して一列に配置
        mediaGrid.style.display = "grid";
        mediaGrid.style.gridTemplateColumns = "1fr"; // 1列のみ
        instagram_iframe.style.height = "1100px"; // 縦幅の変更
    } else {
        // 600px以上の場合、適用したスタイルをクリアするなどの処理を追加
        mediaGrid.style.display = ""; // デフォルトの表示スタイルに戻す
        mediaGrid.style.gridTemplateColumns = ""; // グリッドの定義をクリア
        instagram_iframe.style.height = ""; // 縦幅のスタイルを戻す
    }
}

window.onload = function () {
    // ページ全体が読み込まれた後にスタイル調整関数を実行
    adjustInstagramStyle();

    // ビューポートのリサイズイベントに応じてスタイルを再適用
    window.addEventListener("resize", adjustInstagramStyle);
};
