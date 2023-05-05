let input=document.getElementById('input')
let add=document.getElementById('add')
let todolist=document.getElementById('lists')

let todoArr=[];

function addtodo(event){
    event.preventDefault();
    if(input.value==undefined){
        return;
    }

    //list 생성
    const todoitem=document.createElement('div');
    todoitem.id='listitem';
    //체크박스
    const checkBox=document.createElement('input');
    checkBox.type="checkbox";
    checkBox.id='cb';
    //체크박스 꾸미기 위한 라벨
    const checkBoxLabel=document.createElement('LABEL');
    checkBoxLabel.htmlFor='cb';
    //텍스트
    const text=document.createElement('span');
    //삭제버튼
    const deleteButton = document.createElement('button')
    deleteButton.id='del';
    deleteButton.textContent="delete"
    //텍스트 입력
    text.innerText=input.value;

    //리스트 추가
    todoitem.appendChild(checkBox);
    todoitem.appendChild(checkBoxLabel);
    todoitem.appendChild(text);
    todoitem.appendChild(deleteButton);
    todolist.appendChild(todoitem);

    //localStorage 저장
    localStorage.setItem(text, input.value);

    deleteButton.addEventListener('click', (event) => {
        todolist.removeChild(event.currentTarget.parentNode);
        localStorage.removeItem(text);
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
    input.value="";
}

add.addEventListener("click", addtodo);