// ToDoアプリを作る手順
// addボタンを押した時に実行する関数を作成
// 以下その関数
// テキストボックスの値を取得し、書いたテキストを取得、valueで反映させる
// ulタグをまず取得する
// ulタグ内に新しくliタグを作成
// liタグに先ほどのテキストボックス内の文字を取得した値を代入
// liタグをul内に代入


// addボタンを押した際に、削除ボタンを表示させる
// 削除する項目がなくなったら、2つのボタンは消えるようにする


var e = document.getElementsByClassName('add-btn');
// console.log(e[0]);

e[0].addEventListener('click', function() {
    addElement();
    removeButtonElement();
});


// 要素を削除する関数
var oneDelete = document.getElementsByClassName('oneDelete');
var allDelete = document.getElementsByClassName('allDelete');

oneDelete[0].addEventListener('click', function() {
    var li = document.getElementsByTagName('li');
    var lists = document.getElementById('todo');

    lists.removeChild(li[li.length - 1]);
});

allDelete[0].addEventListener('click', function() {
    var li = document.getElementsByTagName('li');
    var lists = document.getElementById('todo');
    for (var i = 0; i < li.length; i++) {
        lists.removeChild(li[i]);
    };
});


// 要素をtodoに追加する関数
function addElement() {
    var listText = document.getElementById('add-area');
    var text = document.createTextNode(listText.value);
    var li = document.createElement('li');
    li.appendChild(text);
    var lists = document.getElementById('todo')
    lists.appendChild(li);
};

// 要素を削除ボタンを表示する関数
function removeButtonElement() {
    var oneDelete = document.getElementsByClassName('oneDelete');
    var allDelete = document.getElementsByClassName('allDelete');
    var li = document.getElementsByTagName('li');
    // 動くか確認
    // console.log(li.length);

    oneDelete[0].classList.add('up1');
    allDelete[0].classList.add('up2');

};