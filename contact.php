<?php
    session_start();
    // セッションとはサーバーにデータを保存する(ブラウザごとに) セッションスタートの関数
    // 処理の先頭にセッションの宣言をする
    $errmessage = array();
    // エラーメッセージの初期化
    $mode ='input';
    if( isset($_POST['back']) && $_POST['back']){ // 戻るボタン押した時
       
        // 何もしない 
        // backがあり、backの中身がある時
    } else if( isset($_POST['confirm']) && $_POST['confirm'] ){ // 確認ボタンクリックの時

        if(!$_POST['fullname']){ // 名前欄がからだった時
            $errmessage[] = "名前を入力してください";
        } else if (mb_strlen($_POST['fullname']) > 100 ){ // 文字数が100文字以上のときは
            $errmessage[] = "名前は100文字以内にしてください";
        }
        $_SESSION['fullname'] = htmlspecialchars($_POST['fullname'], ENT_QUOTES); //セッションに保存している htmlspecialchars関数でプログラムコードを無害化（サニタイズ）する処理



        if(!$_POST['email']){ // メールアドレス欄がからだった時
            $errmessage[] = "メールアドレスを入力してください";
        } else if (mb_strlen($_POST['email']) > 200 ){ // 文字数が200文字以上のときは
            $errmessage[] = "メールアドレスは200文字以内にしてください";
        } else if (!filter_var($_POST['email'])) { // Eメール形式ではないときに
            $errmessage[] = "メールアドレスが不正です";
        }
        $_SESSION['email']    = htmlspecialchars($_POST['email'], ENT_QUOTES); //セッションに保存している

        if(!$_POST['message']){ // お問い合わせ欄がからだった時
            $errmessage[] = "お問い合わせ内容を入力してください";
        } else if (mb_strlen($_POST['message']) > 500 ){ // 文字数が500文字以上のときは
            $errmessage[] = "お問い合わせは500文字以内にしてください";
        } 
        $_SESSION['message']  = htmlspecialchars($_POST['message'], ENT_QUOTES); //セッションに保存している
        // modeの前に書くことで3つの値のセッションが保存している

        if($errmessage) {
            $mode = 'input';
        } else {
            $mode ='confirm';
        }
        
    } else if ( isset($_POST['send']) && $_POST['send']){ // 送信ボタン押した時
        $message =  "お問い合わせを受けつけました。\r\n"
                    ."名前:".$_SESSION['fullname']."\r\n"
                    ."email:".$_SESSION['email']."\r\n"
                    ."お問い合わせ内容：\r\n"
                    .preg_replace("/\r\n|\r|\n/","\r\n",$_SESSION['message']);
                    // \r\nと\rと\n/を\r\nに変換する関数(preg_replace)
                    // ピリオドで文字列を結合

        mb_language("ja");
        mb_internal_encoding("UTF-8");
        mb_send_mail($_SESSION['email'],'お問い合わせありがとうございます',$message);
        // 記入者へ確認メール
        mb_send_mail('info@happy-smile.design','ホームページからお問い合わせいただきました',$message);
        // 管理者宛にメール

        $_SESSION = array();
        // セッションを初期化
        $mode = 'send';
        
    } else { // GETできた時
        $_SESSION['fullname'] = "";
        $_SESSION['email']    = "";
        $_SESSION['message']  = "";
        // から文字の方が親切
        // もしくは
        // $_SESSION = array();
        // セッションを空にする（クリア＝初期化にする）  
    }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせフォーム - カラっとサワやか</title>
    <meta name="description" content="ポートフォリオサイト。Web制作・WordPress制作をしています。">
    <meta name="keywords" content=”ポートフォリオ,Web制作,WordPress”>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Yomogi&family=Zen+Kaku+Gothic+New&family=Zen+Maru+Gothic&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="./assets/css/common.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="shortcut icon" type="image/x-icon" href="./assets/images/logo.webp" />
</head>
<body>
    <header class="header">
        <a href="./index.html" class="logo_box">
            <img class="logo" src="./assets/images/logo.webp" alt="ロゴのイラスト">
        </a>
         <!-- ハンバーガーメニュー部分 -->
      <div class="nav">
    
        <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
        <input id="drawer_input" class="drawer_hidden" type="checkbox">
    
        <!-- ハンバーガーアイコン -->
        <label for="drawer_input" class="drawer_open"><span></span></label>
    
        <!-- メニュー -->
        <nav class="nav_content">
          <ul class="nav_list">
            <li class="nav_item"><a href="./index.html">HOME</a></li>
            <li class="nav_item"><a href="./about.html">ABOUT</a></li>
            <li class="nav_item"><a href="./works.html">WORKS</a></li>
            <li class="nav_item"><a href="./contact.php">CONTACT</a></li>
          </ul>
          <ul class="sns_box">
              <li><a href="https://www.figma.com/design/JSQ4Nq4zP5Is8ugrbrzh61/2024%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA?node-id=0-1&t=YRbKGX6xXvLd5fJF-1"><img src="./assets/images/sns_figma.webp" alt="figma"></a></li>
              <li><a href="https://github.com/makikooo/portfolio2024"><img src="./assets/images/sns_github.webp" alt="GitHub"></a></li>
              <li><a href="https://note.com/karattosawayaka"><img src="./assets/images/sns_note.webp" alt="note"></a></li>
              <li><a href="https://x.com/MakikoWeb"><img src="./assets/images/sns_x.webp" alt="x"></a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="main" id="contact">
        <section class="sec01_about">
            <div class="container">
                <p id="circular-text11">Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact </p>
            </div>
            <div class="section_title_box">
                <h2 class="section_title">CONTACT</h2>
            </div>
            <div class="section_subtitle_box">
                <h3 class="section_subtitle">連絡先</h3>
            </div>
        </section>
        <?php if( $mode == 'input') { ?>
            <!-- 入力画面  POSTではない（GETということ）　-->
        <section class="sec02_cannot">
            <p class="contact_text">ご依頼・ご相談や、ポートフォリオの感想など<br>
                お気軽にお問い合わせくださいませ。<br>
                <span class="red">※</span>は必須項目です。</p>
        </section>
        <section class="sec03_contact">
            <?php
                if( $errmessage ){
                    echo '<div style="color:red;">';
                    echo implode('<br>', $errmessage );
                    echo '</div>';
                }
            ?>
            <form action="./contact.php" method="post">  <!-- actionは次のファイル名　methodは情報が入っているのでpost -->
                <table class="contact_table">
                    <tr class="contact_tr">
                        <th class="contact_th"><label for="name">お名前<span class="red">※</span></label></th>
                        <td class="contact_td"><input type="text" id="name" required="required" name="fullname" value="<?php echo $_SESSION['fullname'] ?>"></td> <!-- type,name,valueは必ず入れる valueはインプットタグの中の文字を入れる -->
                    </tr>
                    <!-- <tr class="contact_tr">
                        <th class="contact_th"><label for="furigana">ふりがな</label></th>
                        <td class="contact_td"><input type="text" id="furigana"></td>
                    </tr> -->
                    <tr class="contact_tr">
                        <th class="contact_th"><label for="email">メールアドレス<span class="red">※</span></label></th>
                        <td class="contact_td"><input type="email" id="email" required="required" name="email" value="<?php echo $_SESSION['email'] ?>"></td>  <!-- typeにemailにするとブラウザがemail方式以外をいう -->
                    </tr>
                    <!-- <tr class="contact_tr">
                        <th class="contact_th"><label for="tel">電話番号</label></th>
                        <td class="contact_td"><input type="text" id="tel"></td>
                    </tr> -->
                    <tr class="contact_tr">
                        <th class="contact_th"><label for="text">お問い合わせ内容<span class="red">※</span></label></th>
                        <td class="contact_td"><textarea id="text" cols="30" rows="10" name="message"><?php echo $_SESSION['message'] ?></textarea></td> <!-- cols横幅　rows行数 textareaの閉じタグがいる -->
                    </tr>
                </table>
                <!-- <div class="checkbox_box">
                    <input type="checkbox" id="check"><label for="check"><a href="privacy.html">個人情報保護方針</a>に同意する</label>
                </div> -->
                <input type="submit" name="confirm" value="送信する" class="to_about_me_button to_contact_button button"> <!-- typeはsubmitにする -->
                
                
                <div class="send_text">
                    お問い合わせのご返信は2日以内(土日祝日以外)を心がけております。お客様のご利用環境、また迷惑メール対策等の設定により、お返事が届かない場合があります。「@happy-smile.design」からのメール受信が可能な設定にしていただきますようお願いいたします。5日経過しても返信のない場合、大変お手数をおかけしますが再度お送りいただくよう、お願い申し上げます。
                </div> 
            </form>    
        
            <?php } else if ( $mode == 'confirm') { ?>
            <!-- 確認画面 -->
                
                <form action="./contact.php" method="post" class="confirm_form">
                    <h3 class="confirm_title">
                        入力の確認の上、送信を押してください。
                    </h3>
                    <table class="confirm_table">
                        <tr>
                            <th>名前  </th>
                            <td><?php echo $_SESSION['fullname'] ?></td>
                        </tr>
                        <tr>
                            <th>Eメール </th>
                            <td><?php echo $_SESSION['email'] ?></td>
                        </tr>
                        <tr>
                            <th cols="2">お問い合わせ内容</th>
                        </tr>
                        <tr>
                            <td colspan="2"><?php echo nl2br($_SESSION['message']) ?></td> <!-- nl2brは改行が入っているので改行マークに変換するための関数 -->
                        </tr>
                    </table>
                    <div class="button_wrapper">
                        <input type="submit" name="back" class="back to_about_me_button" value="戻る" />
                        <input type="submit" name="send" class="send to_about_me_button" value="送信" />
                        <!-- 戻る、送信、どっちもPOSTにする -->
                    </div>               
                </form>

                <?php } else { ?>  <!-- 完了画面 -->
                    <h3 class="completion_title">
                    送信しました。ありがとうございました。
                    </h3>
                    <p class="completion_text">
                        お問い合わせのご返信は2日以内を心がけております。(土日祝日以外)お客様のご利用環境、また迷惑メール対策等の設定により、お返事が届かない場合があります。「info@happy-smile.design」からのメール受信が可能な設定にしていただきますようお願いいたします。5日経過しても返信のない場合、大変お手数をおかけしますが再度お送りいただくよう、お願い申し上げます。
                    </p>
                    <a href="./index.html" class="to_top to_about_me_button">TOPへ戻る</a>
                <?php } ?>
        </section>

        <section class=sec04_sns>
            <div class="sns_wrapper">
            <a class="figma_wrapper" href="https://www.figma.com/design/JSQ4Nq4zP5Is8ugrbrzh61/2024%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA?node-id=23-22&t=tXJ14ZHdibpvzJTV-1">
                    <p id="circular-text5">このホームページのデザインはこちら このホームページのデザインはこちら</p>
                    <img class="figma_icon" src="./assets/images/sns_figma_big.webp" alt="figmaのアイコン">
                    <p class="to_design">デザインを見る</p>
                    <span class="dli-arrow-right"></span>
                </a>
                <a class="github_wrapper" href="https://github.com/makikooo/portfolio2024">
                    <p id="circular-text6">このホームページのコードはこちら このホームページのコードはこちら</p>
                    <img class="figma_icon" src="./assets/images/sns_github_big.webp" alt="GitHubのアイコン">
                    <p class="to_design">コードを見る</p>
                    <span class="dli-arrow-right"></span>
                </a>
                <a class="figma_wrapper" href="https://note.com/karattosawayaka/">
                    <p id="circular-text7">使い方につまづいた所を書いています 使い方につまづいた所を書いています</p>
                    <img class="figma_icon" src="./assets/images/sns_note_big.webp" alt="noteのアイコン">
                    <p class="to_design">Noteを見る</p>
                    <span class="dli-arrow-right"></span>
                </a>
                <a class="figma_wrapper" href="https://twitter.com/MakikoWeb">
                    <p id="circular-text8">有意義なことはつぶやいていませんが勉強したことをたまにつぶやいています</p>
                    <img class="figma_icon" src="./assets/images/sns_x_big.webp" alt="xのアイコン">
                    <p class="to_design">Xを見る</p>
                    <span class="dli-arrow-right"></span>
                </a>
            </div>
        </section>
    </main>
   
    <footer class="footer">
        <a class="go_to_top" href="./index.html">
            <p>TOPへ戻る</p>
            <span class="dli-arrow-up"></span>
        </a>
        <small>©2024  PORTFOLIO Of  Makiko Karasawa</small>
    </footer>
    <script src="./assets/js/main.js"></script>

    <!-- 住所自動入力のライブラリ「YubinBango」
    <script src="https://yubinbango.github.io/yubinbango/yubinbango.js" charset="UTF-8"></script> -->
   
</body>
</html>

