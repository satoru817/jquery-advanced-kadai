// //button-moreのanimation
// アニメーションを適用する対象：.button-moreというclassを設定した2つの「もっとみる」ボタン
// アニメーションを再生するタイミング：mouseover（マウスオーバー時）
// アニメーションの内容
// marginLeft（左側の余白）：20pxを指定し、対象を20px右側に移動させる
// opacity（不透明度）：0.5を指定し、半透明にする（不透明度は0～1の間で指定する。0で完全な透明になり、1で完全な不透明になる）
// アニメーションの再生スピード：100を指定し、0.1秒間で再生する（再生スピードは1000分の1秒単位で設定する。1秒＝1000）

$(function(){
  $('.button-more').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    },100);
  });
  $('.button-more').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0
    },100);
  });

  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  //eventにはそうしん
  $('#submit').on('click',function(event){
    //formタグによる直接の送信を拒否
    event.preventDefault();

    //入力チェックをした結果をresultに格納
    let result = inputCheck();

    //エラー判定とメッセージを取得
    let error = result.error;//エラーがあればtrue
    let message = result.message;//エラーがどこかにあれば空でない文章が格納されている

    if(error == false){
      //エラーなし
      alert('お問い合わせを送信しました。');
    }else{
      //エラーあり
      alert(message);
    }
  });

  $('#name').blur(function(){
    inputCheck();
  });

  $('#furigana').blur(function(){
    inputCheck();
  });

  $('#email').blur(function(){
    inputCheck();
  });


  $('#tel').blur(function(){
    inputCheck();
  });

  $('#message').blur(function(){
    inputCheck();
  });

  $('#agree').click(function(){
    inputCheck();
  });

  //お問い合わせフォームの入力チェック
  function inputCheck(){
    
    //エラーのチェック結果
    let result;

    //エラーメッセージのテキスト
    let message = '';

    //エラーがなければfalse, あればtrue
    let error = false;

    //お名前チェック
    if($('#name').val() == ''){
      //エラーあり
      $('#name').css('background-color','#f79999');
      error = true;
      message +='お名前を入力してください\n';
    }else{
      //エラーなし
      $('#name').css('background-color','#fafafa');
    }

    //フリガナチェック
    if($('#furigana').val() == ''){
      $('#furigana').css('background-color','#f79999');
      error = true;
      message +='フリガナを入力してください\n';
    }else{
      $('#furigana').css('background-color','#fafafa');
    }

    //お問い合わせ内容チェック
    if($('#message').val() == ''){
      $('#message').css('background-color','#f79999');
      error = true;
      message +='お問い合わせ内容を入力してください\n';
    }else{
      $('#message').css('background-color','#fafafa');
    }
    //メールアドレスチェック
    if($('#email').val() == ''||$('#email').val().indexOf('@')== -1|| $('#email').val().indexOf('.')==-1){
      //エラーあり
      $('#email').css('background-color','#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    }else{
      //エラーなし
      $('#email').css('background-color','#fafafa');
    }

    //電話番号チェック
    if($('#tel').val() != ''&& $('#tel').val().indexOf('-')==-1){
      //エラーあり
      $('#tel').css('background-color','#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    }else{
      //エラーなし
      $('#tel').css('background-color','#fafafa');
    }

    //個人情報のチェックボックスのチェック

    if($('#agree').prop('checked') == false){
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックをしてください\n';
    }

    //エラーの有無で送信ボタンを切り替え
    if(error == true){
      $('#submit').attr('src','images/button-submit.png').change();
    }else{
      $('#submit').attr('src','images/button-submit-blue.png').change();
    }

    result = {
      error: error,
      message: message
    }

    return result;
  }
});