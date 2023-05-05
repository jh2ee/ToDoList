
let input = document.getElementById('input')
let add = document.getElementById('add')
let todolist = document.getElementById('lists')

window.onload = function() {
    for (let i = localStorage.length-1; i >= 0; i--) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const todoitem = document.createElement('div');
        todoitem.id = 'listitem';

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.id = 'cb';

        const checkBoxLabel = document.createElement('LABEL');
        checkBoxLabel.htmlFor = 'cb';

        const text = document.createElement('span');
        text.innerText = value;

        const deleteButton = document.createElement('button');
        deleteButton.id = 'del';
        deleteButton.textContent = "delete";

        todoitem.appendChild(checkBox);
        todoitem.appendChild(checkBoxLabel);
        todoitem.appendChild(text);
        todoitem.appendChild(deleteButton);
        todolist.appendChild(todoitem);

        deleteButton.addEventListener('click', (event) => {
            todolist.removeChild(event.currentTarget.parentNode);
            localStorage.removeItem(key);
        })

        checkBox.addEventListener('click', (event) =>{ 
            if (event.currentTarget.checked)
            {
                text.style.textDecoration='line-through'
            }
            else {
                text.style.textDecoration='none'
            }
        })
    }
}

function addtodo(event){
    event.preventDefault();
    if(input.value == undefined){
        return;
    }

    //key, value 생성
    const key = Date.now().toString(); //입력 날짜로 고유키 생성
    const value = input.value;

    //list 생성
    const todoitem = document.createElement('div');
    todoitem.id = 'listitem';

    //체크박스
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.id = 'cb-' + key;
    //체크박스 꾸미기 위한 라벨
    const checkBoxLabel = document.createElement('LABEL');
    checkBoxLabel.htmlFor = checkBox.id;

    //텍스트
    const text = document.createElement('span');
    text.innerText = input.value;

    //삭제버튼
    const deleteButton = document.createElement('button')
    deleteButton.id = 'del';
    deleteButton.textContent = "delete"

    //리스트 추가
    todoitem.appendChild(checkBox);
    todoitem.appendChild(checkBoxLabel);
    todoitem.appendChild(text);
    todoitem.appendChild(deleteButton);
    todolist.appendChild(todoitem);

    //localStorage 저장
    localStorage.setItem(key, value);

    deleteButton.addEventListener('click', (event) => { 
        todolist.removeChild(event.currentTarget.parentNode);
        localStorage.removeItem(key);
    })

    //체크박스 이벤트
    checkBox.addEventListener('click', (event) =>{ 
        if (event.currentTarget.checked)
        {
            text.style.textDecoration='line-through'
        }
        else {
            text.style.textDecoration='none'
        }
    })
    input.value = "";
}

add.addEventListener("click", addtodo);