const menuBtn = document.querySelector('.hamburger_menu');


/* ------------------------------------------------------------
    ロードしたらロゴの文字を一文字づつフェイドアウト
------------------------------------------------------------ */
window.addEventListener('DOMContentLoaded', () => {
    const splashLogo = document.getElementById('splash-logo');
    const text = splashLogo.textContent;
    const splash1 = document.querySelector('.splashbg01');
    const splash2 = document.querySelector('.splashbg02');

    splashLogo.textContent = ''; // テキストをクリア

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('fade-out');
        splashLogo.appendChild(span);

        setTimeout(() => {
            span.classList.add('hidden'); // 1秒ごとに文字を消す
        }, (index * 50) + 600); // 0.05秒ごとに次の文字を消し、0.6秒遅れて発火
    });   
});


/* ------------------------------------------------------------
    文字のフェイドアウト後にローディングエリアをフェイドアウト（カーテン開くみたいに）
------------------------------------------------------------ */
// フェードアウト効果を実現する関数
function fadeOut(element, duration, callback) {
    // 要素の不透明度を1に設定
    element.style.opacity = 1;
    
    var start = null;
    function step(timestamp) {
        // 開始時間が未設定の場合、現在のタイムスタンプを設定
        if (!start) start = timestamp;
        // 経過時間を計算
        var progress = timestamp - start;
        // 指定の時間(duration)まで繰り返す
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            // フェードアウト後の表示
            element.style.opacity = 0;
            // コールバック関数が指定されている場合は実行
            if (callback) callback();
        }
    }
    // アニメーションフレームをリクエスト
    window.requestAnimationFrame(step);
}

// ページロード時の処理
window.addEventListener('DOMContentLoaded', function() {
    const splash = document.getElementById('splash');

    // ローディングエリア（splashエリア）を1.5秒でフェードアウト
    setTimeout(() => {
        fadeOut(splash, 1000, () => {
            // フェードアウト後bodyにappearクラス付与
            document.body.classList.add('appear');
        });
    }, 1200);
    
});

/* ------------------------------------------------------------
    テキストがほのかに光りながら出現（フェードイン）
------------------------------------------------------------ */
const menuTitle = document.querySelector('#splash-logo-sp');
function GlowAnimeControl() {
    const glowElement1 = document.querySelector('.glow_anime1');
    const glowElement2 = document.querySelector('.glow_anime2');

    function animateText(element) {
        const text = element.textContent;
        element.textContent = '';
        
        const spans = text.split('').map(char => {
            const span = document.createElement('span');
            span.textContent = char;
            element.appendChild(span);
            return span;
        });
        
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('visible');
            }, 100 * index); // 100ミリ秒ごとに次の文字を表示
        });
    }
    if (menuTitle) animateText(menuTitle);
    if (glowElement1) animateText(glowElement1);
    if (glowElement2) setTimeout(() => animateText(glowElement2)); // 1秒後に2行目のアニメーションを開始
}


// 初回ロード時にもGlowAnimeControlを呼び出す
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(GlowAnimeControl, 2400);
});

// ハンバーガーメニューをクリックしたらGlowAnimeControlを呼び出す
menuBtn.addEventListener('click', () => {
    setTimeout(GlowAnimeControl);
})

/* ------------------------------------------------------------
    ハンバーガーメニューを開閉
------------------------------------------------------------ */
// クリックしたらsp_menuクラスのdisplay:blockにする
const spMenu = document.querySelector('.sp_menu');

const toggleDisplay = () => {
    // クラスを変えてdisplay:noneからblockにする
    spMenu.classList.toggle('sp_menu_visible');
    menuBtn.classList.toggle('open');
};
menuBtn.addEventListener("click",toggleDisplay);


/* ------------------------------------------------------------
    ハンバーガーメニューを開けたら文字を一文字ずつ表示しキラキラさせる    
------------------------------------------------------------ */
// ハンバーガーメニューを開けたら文字を一文字ずつ表示
// クリックしたらsp_menuクラスのdisplay:blockからnoneにする
const menuItems = document.querySelectorAll('.sp_menu li a');

const toggleText = (duration = 2000) => {  // durationは（デフォルトは2000ミリ秒、つまり2秒）。
    const itemCount = menuItems.length;
    const stepDelay = duration / itemCount; // 各項目が表示されるまでの時間間隔を計算します

    menuItems.forEach((item, index) => {
        item.classList.remove('text_visible');  // 各項目から'text_visible'というクラスを取り除きます。これで一旦すべての項目を非表示にします。

        setTimeout(() => { // 時間をずらして実行する処理を設定します。
            item.classList.add('text_visible');
        }, index * stepDelay); // 「順番に少しずつ遅れて表示する」ための計算。例えば、メニュー項目が4つあるとします。アニメーション全体を2秒（2000ミリ秒）で行うとします。すると、stepDelay（各項目の間隔）は、2000 ÷ 4 = 500ミリ秒になります。
    });

    // Update CSS variables for animation control
    document.documentElement.style.setProperty('--fade-duration', `${stepDelay / 2}ms`); //JavaScriptで --fade-duration の値を変更すると、それに連動してCSSのアニメーション速度が変わります。フェードインの時間を設定します。もし stepDelay が 500ms だった場合${stepDelay / 2}ms は 250ms になります
    document.documentElement.style.setProperty('--total-duration', `${duration}ms`); //アニメーション全体の時間を設定します。
}

menuBtn.addEventListener('click', () => toggleText(2000));  // メニューボタンがクリックされたときに、toggleText関数を2秒間のアニメーションで実行するように設定します。



/* ------------------------------------------------------------
    スクロールしたらヘッダーの画面を大きくする
------------------------------------------------------------ */
// スクロールしたらヘッダーの画面を大きくする
function handleScroll() {
    const scrollY = window.scrollY;
    updateHeaderImage(scrollY);
}

// 画像がスクロールに応じて拡大する
function updateHeaderImage(scrollY) {
    const headerImg = document.getElementById('header-img');
    if (headerImg) {
        const scale = 1 + scrollY * 0.0005;
        headerImg.style.transform = `scale(${scale})`;
    }
}
// scrollYは、ページがどれだけ垂直方向にスクロールされたかを表す値です。これはピクセル単位で測定されます。
// 0.0005は、スクロール効果の強さを調整する係数です。この小さな値によって、スクロールに対する画像の拡大が緩やかになります。
// scrollY * 0.0005で、スクロール量に基づいた小さな増分値を計算します。
// 最後に、1 +を加えることで、スケールの初期値が1（元のサイズ）になり、そこからスクロールに応じて少しずつ大きくなるようにしています。

// 初期化関数
function initParallax() {
    const headerImg = document.getElementById('header-img');
    if (headerImg) {
        window.addEventListener('scroll', handleScroll);
    }
}

// DOMContentLoadedイベントでスクリプトを初期化
document.addEventListener('DOMContentLoaded', initParallax);




/* ------------------------------------------------------------
    セクションタイトルを一文字ずつフェードイン
------------------------------------------------------------ */
// すべてのtitleクラスを取得
const titles = document.querySelectorAll('.title');

// InterSection Observerのコールバック関数
// この関数は、観察対象の要素が表示領域に入ったときに呼び出されます。
// animateTitleOnIntersection 関数は、監視員さんの仕事を詳しく説明しているものです。
// 監視員さんが「タイトルが見えた！」と気づいたときに呼び出されます。
const animateTitleOnIntersection = (entries, observer) => {
    entries.forEach(entry => { // 観察対象の各要素（entry）に対して処理を行います。 監視員さんが見つけた全てのタイトルについて、一つずつ確認する作業です。
        if (entry.isIntersecting) { // 要素が表示領域に入ったかどうかをチェックします。isIntersectingとはtrueなら見えている
            const title = entry.target; // 現在の観察対象要素をtitle変数に格納します。見つけたタイトルを title という名前で覚えておきます。 これは、後でアニメーションをするために必要な情報です。
            animateTitle(title); // タイトルのアニメーション関数を呼び出します。実際にタイトルのアニメーションを開始
            observer.unobserve(title); // アニメーションが開始されたら、その要素の観察を停止します。アニメーションを始めたら、そのタイトルの監視をやめます
        }
    });
};

// Intersection Observerの設定オプションを定義します。Intersectionとは、「交差」や「重なり」を意味。Observer（オブザーバー）とは、「観察者」や「監視員」のようなものです
const options = {
    root: null, // 親要素の指定 ビューポートをルートとして使用　監視員がどこから見ているかを決める。nullは特に指定しないという意味でブラウザ全体から見ることになる　例えると監視員さんが部屋の入口に立って部屋全体を見渡しているイメージ
    rootMargin: '0px', // マージンなし　例えると監視員さんが部屋の入口ぴったりのところに立っているイメージ
    threshold: 1 // 10%が見えたらコールバックを実行　要素がどれくらい見えたら反応するかを決めています。監視員さんが「あ、タイトルが少し見えた！」と気づく基準です。　1.0に設定すると、タイトル全体が見えるまで待ちます。0.5なら半分見えたら反応します。
}

// 設定したオプションとコールバック関数を使って、Intersection Observerのインスタンスを作成します。
// Intersection Observer APIとは：ウェブページ上の要素の可視性（ビューポートとの交差）を非同期で監視するためのJavaScript APIです
// 監視員の仕事を決めるイメージ
const observer = new IntersectionObserver(animateTitleOnIntersection, options);

// const observer =
// これは、新しく作った監視員さんに「observer」という名前をつけているところです。

// new IntersectionObserver(...)
// newは、新しいものを作るときに使う言葉です。
// IntersectionObserverは、特別な種類の監視員さんです。この監視員さんは、物事が画面に入ってきたり出て行ったりするのを見張ります。

// (animateTitleOnIntersection, options)
// これは、監視員さんに仕事の内容と方法を教えているところです。
// animateTitleOnIntersectionは、「何か見つけたらこれをやってね」という指示書みたいなものです。
// optionsは、「こんな風に見張ってね」というルールブックのようなものです。


// 各タイトル要素を観察対象として登録します。
// titleを監視対象にするイメージ
titles.forEach(title => {
    observer.observe(title);
})
// observer
// これは、さっき作った監視員さんの名前です。

// .observe(
// これは「見張る」という命令です。
// 監視員さんに「これを見張ってね」と伝えています。

// title
// これは、見張る対象（タイトル）です。
// 「このタイトルを見張ってね」という意味になります。
// タイトルのアニメーション処理を行う関数を定義します。


// アニメーションの準備をするイメージ
function animateTitle(title) {
    const spanTexts = title.textContent.split(''); // タイトルのテキストを一文字ずつ配列に分割します
    title.textContent = ''; // titleの中身を一旦空にする
    
    // 分割したテキストの各文字に対して処理を行います
    // 文字を一文字ずつ表示するイメージ
    spanTexts.forEach((spanText, index) => {
        const span = document.createElement('span');  // span要素を取得
        span.textContent = spanText; // M e n u B l o g // span要素に文字を追加
        title.appendChild(span); // span要素をtitleの中に追加
        
        // 各文字を200ミリ秒間隔で表示するように遅延を設定します。
        setTimeout(() => {
            span.classList.add('text_visible'); // span要素に'text_visible'クラスを追加し、文字を表示します。
        }, 200 * index); // 200ミリ秒ごとに次の文字を表示
    });
    // 
}






/* ------------------------------------------------------------
    文字をふわっと出現
------------------------------------------------------------ */
// フェードイン要素を取得
const fadeElements = document.querySelectorAll('.fadeIn');

// スクロール時の処理
function checkFade() {
  const triggerBottom = window.innerHeight / 5 * 4;

  fadeElements.forEach(fadeElement => {
    const elementTop = fadeElement.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      fadeElement.classList.add('fade-in');
    } else {
      fadeElement.classList.remove('fade-in');
    }
  });
}

// スクロールイベントリスナーを追加
window.addEventListener('scroll', checkFade);

// 初期表示時にも実行
checkFade();
/* ------------------------------------------------------------
    文字をふわっと出現 フッター
------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => { // DOMの読み込みが完了したら実行
    const footerFlex = document.querySelector('.footer_flex'); // footer_flexクラスを持つ要素を取得

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', () => { // スクロールイベントが発生したときに実行
        const scrollPosition = window.scrollY + window.innerHeight; // 現在のスクロール位置（ページの上からの距離 + ビューポートの高さ）
        const footerPosition = footerFlex.getBoundingClientRect().top + window.scrollY; // フッターの位置（ビューポート内の位置 + ページの上からの距離）

        // フッターが表示される位置に達したら
        if (scrollPosition >= footerPosition) { // 現在のスクロール位置がフッターの位置以上であれば
            footerFlex.classList.add('fade-in'); // fade-inクラスを追加してフッターを表示
        }
    });
});

/* ------------------------------------------------------------
    ブログを順番にふわっと出現
------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fadeInTrigger');
    const windowHeight = window.innerHeight;

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', () => {
        fadeInElements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY; // 要素の位置

            // 要素が表示される位置に達したら
            if (window.scrollY + windowHeight >= elementPosition) {
                // 遅延を持たせてクラスを追加
                setTimeout(() => {
                    element.classList.add('visible'); // visibleクラスを追加
                }, index * 300); // 300msの遅延を持たせる
            }
        });
    });
});

/* ------------------------------------------------------------
    スライダー
------------------------------------------------------------ */
function carousel() {
    // スライドの総数を取得
    let slideLength = document.querySelectorAll('.carousel__list').length;
    // すべてのスライド要素を取得
    const slideList = document.querySelectorAll('.carousel__list');
    // スライド間の余白を5pxに設定
    let slideInterval = 5;
    // 一度に表示するスライドの数を4に設定
    let slidesToShow = 4;
    // 一度にスクロールするスライドの数を1に設定
    let slidesToScroll = 4;
    // 各スライドの幅を計算（全体幅をslidesToShowで割り、余白を引く）
    // 1. document.querySelector('.carousel') - カルーセル全体を囲む要素を選択
    // 2. .clientWidth - 選択した要素の内部幅（ボーダーとパディングを除く）を取得
    // 3. / slidesToShow - カルーセル全体の幅を、同時に表示するスライド数で割る
    // 4. - slideInterval - スライド間の余白を引く
    //
    // この計算により、以下のことが実現される：
    // - 各スライドが、カルーセルの表示領域内に適切に収まる幅を持つ
    // - slidesToShow 枚のスライドが同時に表示される
    // - スライド間に適切な余白が確保される
    //
    // 注意点：
    // - この計算は、カルーセルがレスポンシブであることを前提としている
    // - ウィンドウサイズが変更された場合、この値の再計算が必要になる場合がある
    let slideWidth = (document.querySelector('.carousel').clientWidth / slidesToShow) - slideInterval;
    // スライドを含むコンテナ要素を取得
    const slideArea = document.querySelector('.carousel__area');

    // 「前へ」ボタン要素を取得
    const slideBackBtn = document.querySelector('.js__btn-back');
    // 「次へ」ボタン要素を取得
    const slideNextBtn = document.querySelector('.js__btn-next');

    // 現在のスライドインデックスを初期化
    let slideCurrentIndex = 0;

    // スライドを複製して無限ループを作成する関数
    function cloneSlides() {
        // スライドを複製する数を計算します
        // slidesToShow * 2：現在表示されているスライドの2倍以上を確保
        // Math.ceil(...) を使って、必ず整数になるよう切り上げます
        // 最後に slideLength をかけて、元のスライド数の倍数にします
        const slidesToClone = Math.ceil(slidesToShow * 2 / slideLength) * slideLength;
        
        // 計算した数だけスライドを複製するループ
        for (let i = 0; i < slidesToClone; i++) {
            // i % slideLength で、元のスライド数を超えたら0に戻ります
            // 例：slideLength が5の場合、0,1,2,3,4,0,1,2,... となります
            // cloneNode(true) で、スライドとその中身を完全にコピーします
            const clone = slideList[i % slideLength].cloneNode(true);
            
            // 作成したクローンを、スライドエリアの最後に追加します
            slideArea.appendChild(clone);
        }
        
        // スライドを追加したので、スライドエリア全体の幅を更新します
        // この関数は別で定義されており、新しい幅を計算して適用します
        updateSlideAreaWidth();
    }

   // スライドエリアの幅を更新する関数
    function updateSlideAreaWidth() {
        // 複製後の総スライド数を取得
        // slideArea.children は、スライドエリア内の全てのスライド要素を含む
        // .length でその要素数（つまり総スライド数）を取得する
        const totalSlides = slideArea.children.length;

        // 新しいスライドエリアの幅を計算
        // slideWidth: 1枚のスライドの幅
        // slideInterval: スライド間の余白
        // totalSlides: 総スライド数（元のスライド + 複製したスライド）
        // 最後に "px" を追加してCSSで使用可能な値にする
        let slideAreaWidth = (slideWidth + slideInterval) * totalSlides + "px";

        // 計算したスライドエリアの幅を実際に適用
        // style.width でスライドエリアの幅を直接設定
        slideArea.style.width = slideAreaWidth;
    }

    // スライドの複製を実行
    // この関数呼び出しで、以下の処理が行われる：
    // 1. 必要な数のスライドが複製される
    // 2. 複製完了後、updateSlideAreaWidth() が呼ばれる
    // 3. スライドエリアの幅が新しいスライド数に合わせて調整される
    cloneSlides();


    // スライドを変更する関数
    function changeSlide() {
        // 現在のインデックスに基づいてスライドの移動距離を計算
        let slideMove = slideCurrentIndex * (slideWidth + slideInterval);
        // トランジション効果を設定
        slideArea.style.transition = 'transform 0.5s';
        // スライドを移動
        slideArea.style.transform = `translateX(-${slideMove}px)`;

        // トランジション完了後の処理
        setTimeout(() => {
            // 最後のスライドを超えた場合
            if (slideCurrentIndex >= slideLength) {
                // トランジションを無効にして瞬時に移動
                slideArea.style.transition = 'none';
                // インデックスを最初に戻す
                slideCurrentIndex = 0;
                // 移動距離を再計算
                slideMove = slideCurrentIndex * (slideWidth + slideInterval);
                // スライドを瞬時に移動
                slideArea.style.transform = `translateX(-${slideMove}px)`;
            // 最初のスライドより前に戻った場合
            } else if (slideCurrentIndex < 0) {
                // トランジションを無効にして瞬時に移動
                slideArea.style.transition = 'none';
                // インデックスを最後に設定
                slideCurrentIndex = slideLength - 1;
                // 移動距離を再計算
                slideMove = slideCurrentIndex * (slideWidth + slideInterval);
                // スライドを瞬時に移動
                slideArea.style.transform = `translateX(-${slideMove}px)`;
            }
        }, 500); // トランジション時間と同じ500ミリ秒後に実行
    }

    // タイマーの変数を宣言
    let Timer;
    // 自動スライド用のタイマーを開始する関数
    function startTimer() {
        Timer = setInterval(function () {
            // 次のスライドに移動
            slideCurrentIndex += slidesToScroll;
            // スライドを変更
            changeSlide();
        }, 3000); // 3秒ごとに実行
    }

    // タイマーを停止する関数
    function stopTimer() {
        // clearInterval() を使用して、設定されていたタイマーを解除する
        // Timer は、以前に setInterval() で設定されたタイマーのID
        clearInterval(Timer);
    }

    // 詳細な説明：
    // 1. この関数の目的は、自動的にスライドを切り替えるタイマーを停止すること
    // 2. clearInterval() は JavaScript の組み込み関数で、繰り返し実行されるタイマーを停止する
    // 3. Timer 変数には、以前に setInterval() で設定されたタイマーの識別子が格納されている
    // 4. この関数を呼び出すと、自動スライド切り替えが即座に停止する
    //
    // 使用例：
    // - ユーザーが手動でスライドを操作したとき
    // - カルーセルにマウスが乗ったとき（ホバー時に自動切り替えを停止する場合）
    // - カルーセルが非表示になったときなど
    //
    // 注意点：
    // - この関数を呼び出した後、再度自動切り替えを開始したい場合は、
    //   別途 startTimer() のような関数を用意して呼び出す必要がある

    // 自動スライドを開始
    startTimer();

    // 「次へ」ボタンのクリックイベントリスナー
    slideNextBtn.addEventListener('click', function () {
        stopTimer(); // 既存のタイマーを停止
        slideCurrentIndex += slidesToScroll; // 次のスライドに移動
        changeSlide(); // スライドを変更
        startTimer(); // タイマーを再開
    });

    // 「前へ」ボタンのクリックイベントリスナー
    slideBackBtn.addEventListener('click', function () {
        stopTimer(); // 既存のタイマーを停止
        slideCurrentIndex -= slidesToScroll; // 前のスライドに移動
        changeSlide(); // スライドを変更
        startTimer(); // タイマーを再開
    });

}
// 初期化関数を呼び出す
document.addEventListener('DOMContentLoaded', carousel);



