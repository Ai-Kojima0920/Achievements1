// ハンバーガーメニュー
jQuery(function ($) {

    // mvスライド
    $('.slider').slick({
      fade: true, //切り替えをフェードで行う。初期値はfalse。
      autoplay: true, //自動的に動き出すか。初期値はfalse。
      autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
      speed: 1000, //スライドの動きのスピード。初期値は300。
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      slidesToShow: 1, //スライドを画面に3枚見せる
      slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    navigator: false,
    arrows: false,
    });
    
    // タブメニュー
    $(function () {
    $('.tab-list-item').on('click', function () {
        let index = $('.tab-list-item').index(this);
        $('.tab-list-item').removeClass('is-btn-active');
        $(this).addClass('is-btn-active');
        $('.tab-contents').removeClass('is-contents-active');
        $('.tab-contents').eq(index).addClass('is-contents-active');
    });
    });
    
    // lookセクションスライド
    $('.rose__slider').slick({
      autoplay: true, //自動的に動き出すか。初期値はfalse。
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      speed: 500, //スライドのスピード。初期値は300。
      slidesToShow: 3, //スライドを画面に3枚見せる
      slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
      prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
    });
    
      // q&aセクションアコーディオン
    $(function () {
      // .js-accordion-titleをクリックすると次の処理
    $('.js-accordion-title').on('click', function () {
      // .js-accordion-titleの次の要素を0.3秒でスライド表示、非表示させる
    $(this).next().slideToggle(300);
      // .js-accordion-titleにopenの付け外しを行う
    $(this).next().toggleClass('open', 300);
    });
    });

    $('.js-hamburger').on('click', function () {
        if ($(this).hasClass('open')) {
            //ドロワーメニューが開いているときの処理
            $('.js-drawer').fadeOut();
            $(this).removeClass('open');
            //ドロワーメニューが開いているときはスクロールできない
            $('html').removeClass('fixed');
        } else {
            //ドロワーメニューが閉じているの処理
            $('.js-drawer').fadeIn();
            $(this).addClass('open');
            //ドロワーメニューが閉じているときはスクロールできる
            $('html').addClass('fixed');
        }
        });
    });

