$(window).on('load', function(){
    let welcomeObj = $('.welcome');
    let time = 100;
    let timeLag = 0;

    // welcome要素の分割
    welcomeObj.each(function(){
        let welcome = $(this).html();
        let welcomeSpell = "";

        //取得したHTML要素を引数spellとしてで分割
        welcome.split('').forEach(function(spell){
            welcomeSpell += '<span>' + spell + '</span>';
        });
        //生成されたwelcomeSpellで元のhtmlを置換
        $(this).html(welcomeSpell);

        //.welcome(div class)内の要素数の取得
        let welcomeObj_child = $(this).children();
        //fadeIn
        welcomeObj_child.each(function(i){
            $(this).delay(i * time).fadeIn(time);
            timeLag = time * i;//文字数分タイムラグを発生
        });

        //発生したタイムラグを使用し、すべてが表示されたあとfadeOut
        $(this).delay(timeLag).fadeOut(time * 10);
        timeLag += time * 10;//次への切替余暇
    });

    //.centerのfadeIn
    $('.center').delay(timeLag).fadeIn(time * 5);
    timeLag += time * 5;

    let finish = 0;//文字表示速度測定
    let fade1Obj = $('.fade1');
    fade1Obj.each(function(){
        let fade1 = $(this).html();
        let fade1Sell = "";

        fade1.split('').forEach(function(spell){
            fade1Sell += '<span>' + spell + '</span>';
        });
        $(this).html(fade1Sell);

        let fade1Obj_child = $(this).children();
        fade1Obj_child.each(function(i){
            $(this).delay(time * i + timeLag).fadeIn(time);
        });
        finish = fade1Obj_child.length * time;
    });
    timeLag += finish + time * 5;

    $('.fade2').delay(timeLag).fadeIn(time * 5);

    slideShow(0);
})

function slideShow(Index){
    $(document).ready(function() {
        // .fade2 内のすべての .divide_LR 要素を取得
        const produstList = $(".fade2").children(".divide_LR");
        let currentIndex = Index;
      
        function showing() {
          // 現在表示の active クラスを削除
          produstList.eq(currentIndex).removeClass("active");
      
          // 次のクラスのactive要素付与
          currentIndex = (currentIndex + 1) % produstList.length;
          produstList.eq(currentIndex).addClass("active");
        }
        produstList.eq(currentIndex).addClass("active");
      
        // 3秒ごとに切り替え
        setInterval(showing, 5000);

        $(".slide-button").on("click", function () {
            const clickedIndex = $(this).index(); // クリックされたボタンのインデックスを取得
            produstList.eq(currentIndex).removeClass("active"); // 現在表示のactiveクラス削除
            currentIndex = clickedIndex; // クリックされたボタンのインデックスをセット
            produstList.eq(currentIndex).addClass("active"); // クリックされたクラスにactiveクラスを付与
        });
      });
}