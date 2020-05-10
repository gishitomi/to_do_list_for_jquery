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
    // removeButtonElement();
    trashBox();
    checkBox();
});


// 要素を削除する関数
// var oneDelete = document.getElementsByClassName('oneDelete');
// var allDelete = document.getElementsByClassName('allDelete');

// oneDelete[0].addEventListener('click', function() {
//     var li = document.getElementsByTagName('li');
//     var lists = document.getElementById('todo');

//     lists.removeChild(li[li.length - 1]);
// });

// allDelete[0].addEventListener('click', function() {
//     var li = document.getElementsByTagName('li');
//     // var lists = document.getElementById('todo');
//     for (var i = 0; i < li.length; i++) {
//         // lists.removeChild(li[i].firstChild);
//         li[i].textContent = null;
//     }

// });


// 要素をtodoに追加する関数
function addElement() {
    var listText = document.getElementById('add-area');
    var text = document.createTextNode(listText.value);
    var li = document.createElement('li');
    li.appendChild(text);


    // li要素にボタンを追加
    var trash = document.createElement('span');
    trash.classList.add('trashPosition');
    trash.classList.add('btn');
    trash.classList.add('trash');
    trash.innerHTML = '削除　<i class="fas fa-trash-alt"></i>'
    li.appendChild(trash);

    var check = document.createElement('span');
    check.classList.add('checkPosition');
    check.classList.add('btn');
    check.classList.add('check');
    check.innerHTML = '完了　<i class="far fa-check-square"></i>'
    li.appendChild(check);


    var lists = document.getElementById('todo')
    lists.appendChild(li);
};

// 要素を削除ボタンを表示する関数
// function removeButtonElement() {
//     var oneDelete = document.getElementsByClassName('oneDelete');
//     var allDelete = document.getElementsByClassName('allDelete');

//     oneDelete[0].classList.add('up1');
//     allDelete[0].classList.add('up2');

// };

// todoリスト内の削除ボタン
function trashBox() {
    var trash = document.getElementsByClassName('trash');
    // クリックしたliタグの配列数を取得
    // どちらのfor文でも良い


    // for (var i = li.length - 1; i >= 0; i--) {
    //     li[i].addEventListener('click', function() {
    //         // thisはli[i]にあたる
    //         this.remove();
    //         // console.log(i);
    //     });
    // };
    for (var i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', function() {
            // thisはtrash[i]にあたる
            var li = this.parentNode;
            li.remove();
            // console.log(i);
        });
    };

};

function checkBox() {
    var check = document.getElementsByClassName('check');
    var done = document.getElementById('done');
    for (var i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function() {
            var li = this.parentNode;
            done.appendChild(li);
            this.remove();
        });
    };
};