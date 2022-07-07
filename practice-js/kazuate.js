// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
let yosou;

// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//hantei();
//hantei();
//hantei();
//hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu = kaisu+1;
    let i = document.querySelector('input[name="yoso"]');
	yosou = i.value;


    console.log(kaisu+"回目の予想： "+yosou);      // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    
    if(kaisu<=3&&parseInt(yosou)===kotae){
            let answer = "正解です．おめでとう!";
            let a = document.querySelector('span#answer');
a.textContent = answer;
         }
    if(parseInt(yosou)!==kotae&&kaisu<3&&parseInt(yosou)<kotae){
        let answer = "まちがい．答えはもっと大きいですよ";
        let a = document.querySelector('span#answer');
a.textContent = answer;
            }else if(parseInt(yosou)>kotae&&kaisu<3){
                let answer = "まちがい．答えはもっと小さいですよ";
                let a = document.querySelector('span#answer');
a.textContent = answer;
            } 
            if(kaisu===3&&parseInt(yosou)!==kotae){
                let answer = "まちがい．残念でした答えは "+kotae+" です．";
                let a = document.querySelector('span#answer');
a.textContent = answer;
    }
    if(kaisu>3){
        let answer = "答えは"+kotae+"でした．すでにゲームは終わっています";
        let a = document.querySelector('span#answer');
a.textContent = answer;
    }

        
         
     
let s = document.querySelector('span#kaisu');
s.textContent = kaisu;
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
let d = document.querySelector('span#yosou');
d.textContent = yosou;
}




//let a = document.querySelector('span#answer');
//a.textContent = answer;