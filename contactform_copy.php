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
        } else if (mb_strlen($_POST['fullname']) > 10 ){ // 文字数が100文字以上のときは
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
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/common.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/logo.webp" />
</head>
<body>
    
    <?php if( $mode == 'input') { ?>
            <!-- 入力画面  POSTではない（GETということ）　-->
            <?php
                if( $errmessage ){
                    echo '<div style="color:red;">';
                    echo implode('<br>', $errmessage );
                    echo '</div>';
                }
            ?>
            <form action="./contactform_copy.php" method="post">  <!-- actionは次のファイル名　methodは情報が入っているのでpost -->
            名前<input type="text" name="fullname" value="<?php echo $_SESSION['fullname'] ?>"><br>  <!-- type,name,valueは必ず入れる valueはインプットタグの中の文字を入れる -->
            Eメール<input type="email" name="email" value="<?php echo $_SESSION['email'] ?>"><br>  <!-- typeにemailにするとブラウザがemail方式以外をいう -->
            お問い合わせ内容<br>
            <textarea cols="40" rows="8" name="message"><?php echo $_SESSION['message'] ?></textarea><br> <!-- cols横幅　rows行数 textareaの閉じタグがいる -->
            <input type="submit" name="confirm" value="確認" /> <!-- typeはsubmitにする -->
        </form>

    <?php } else if ( $mode == 'confirm') { ?>

        <!-- 確認画面 -->
        <form action="./contactform_copy.php" method="post">
            名前  <?php echo $_SESSION['fullname'] ?><br>
            Eメール <?php echo $_SESSION['email'] ?><br>
            お問い合わせ内容<br>
            <?php echo nl2br($_SESSION['message']) ?><br>
            <!-- nl2brは改行が入っているので改行マークに変換するための関数 -->
            <input type="submit" name="back" value="戻る" />
            <input type="submit" name="send" value="送信" />
            <!-- 戻る、送信、どっちもPOSTにする -->
        </form>

    <?php } else { ?>
        送信しました。ありがとうございました。
        <!-- 完了画面 -->
    <?php } ?>
    

    <script src="assets/js/main.js"></script>

    <!-- 住所自動入力のライブラリ「YubinBango」 -->
    <script src="https://yubinbango.github.io/yubinbango/yubinbango.js" charset="UTF-8"></script>
</body>
</html>