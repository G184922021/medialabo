

/////////////////// 課題3-2 はここから書き始めよう
  /*let pro = data.list.g1[0].service.name;
  let s = document.querySelector('span#pro');
s.textContent = pro;
  let pra = data.list.g1[0].title;
  let d = document.querySelector('span#pra');
d.textContent = pra;*/
let bangumi;
let b = document.querySelector('#print');
b.addEventListener('click', kensaku);

function kensaku(){
  //URLを設定

  //ジャンル選び
  let i = document.querySelectorAll('input[name="janru"]');
  let o = document.querySelector('input[name="janru"]');
  let janru = o.value;
  //番組選び
  let p = document.querySelectorAll('input[name="bangumi"]');

  //if (typeof data.service.name === 'string') {
    //let chan = JSON.parse(data.service.name);
//}
  //let bangumi;
  for(let r of p){
    if(r.checked){
      bangumi = r.value;
    }
  }
  let url ='https://www.nishita-lab.org/web-contents/jsons/nhk/'+ bangumi +'-'+janru+'-'+'j.json';

  axios.get(url)
  .then(showResult)   // 通信成功
  .catch(showError)   // 通信失敗
  .then(finish);  

  console.log(janru);
  console.log(bangumi);
}

function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;
  
  //let i = document.querySelectorAll(data.list);
  //console.log(i.length);

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
   
//if(typeof bangumi === "string"){
    //  bangumi = JSON.parse(bangumi);
//}

  // data をコンソールに出力
  console.log(data);
  
  if(bangumi === "e1"||bangumi === "g1"){
 for(let j = 0; j < 5; j++){
  if(bangumi === "e1"){
    //let pro = document.querySelector("data.list.e1["+ j +"].service.name");
    let pro = data.list.e1[j].service.name;
    console.log(pro);
  let s = document.querySelector('span#pro');
s.textContent = pro;
  let pra = data.list.e1[j].title;
  let d = document.querySelector('span#pra');
d.textContent = pra;
}else {
  let pro = data.list.g1[j].service.name;
  let s = document.querySelector('span#pro');
s.textContent = pro;
  let pra = data.list.g1[j].title;
  let d = document.querySelector('span#pra');
d.textContent = pra;
}
    }
  }

  // data.x を出力
  //console.log(data.x);
}

function showError(err){
  console.log(err);
}

function finish(){
  console.log('Ajax通信が終わりました');
}
