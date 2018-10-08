(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var results = ['大吉', '中吉', '凶', '末吉'];
    var n = Math.floor(Math.random() * results.length);
    this.textContent = results[n];

    /*
    switch (n) {
      case 0:
        this.textContent = '大吉';
        break;
      case 1:
        this.textContent = '中吉';
        break;
      default:
        this.textContent = '小吉';
        break;
    }
    */

  });
  
  // マウスが押されている時だけボタンが押されているようなデザインにする
  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  
  // ずっと className が pushed だとデザインが元に戻らないので
  // マウスがボタンから離れたら元のデザインに戻す
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();
