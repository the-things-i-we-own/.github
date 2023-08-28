'use strict'

const storage = localStorage;
let here = storage.getItem('count');

//データの値を判定
if (here === null) {
  //データが何もない場合「1」を代入
  here = 1;
} else {
  //データがある場合「1」をプラス
  here++;
}

//setItemメソッドでlocalStorageにデータを保存
storage.setItem('count', here);

// HTML に データの値を出力
document.querySelector("#visit span").innerText = here
