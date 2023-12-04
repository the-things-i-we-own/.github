'use strict'

function counter() {
    const footer = document.querySelector("footer")
    const clickCount = document.createElement("p")
    clickCount.id = "click"
    clickCount.innerHTML = `
    <u>Click</u>
    <b>0</b>
    `
    footer.appendChild(clickCount)

    let count = 0;
    document.addEventListener('click', () => {
        count++;
        let click = document.querySelector("#click b")
        click.innerText = count;
    })

    const sessionTime = document.createElement("p")
    sessionTime.id = "timer"
    sessionTime.innerHTML = `
    <u>Session Time</u>
    <time>00:00:00</time>
    `
    footer.appendChild(sessionTime)
}

// 初期化
// body onLoad="timer()"
let start = new Date();
let hour = 0;
let min = 0;
let sec = 0;
let now = 0;
let datet = 0;

function timer() {
    now = new Date();
    datet = parseInt((now.getTime() - start.getTime()) / 1000);
    hour = parseInt(datet / 3600);
    min = parseInt((datet / 60) % 60);
    sec = datet % 60;

    // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
    if (hour < 10) { hour = "0" + hour; }
    if (min < 10) { min = "0" + min; }
    if (sec < 10) { sec = "0" + sec; }

    // フォーマットを指定（不要な行を削除する）
    let timer = hour + ':' + min + ':' + sec;
    document.querySelector("#timer time").innerText = timer;
    setTimeout("timer()", 1000);
}
