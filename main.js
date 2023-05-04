let input=document.getElementById('input')
let add=document.getElementById('add')
let todolist=document.getElementById('lists')

function addtodo(event){
    event.preventDefault();
    if(input.value!=""){
        const list=document.createElement('div');
        list.id='listitem';
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
        list.appendChild(checkBox);
        list.appendChild(checkBoxLabel);
        list.appendChild(text);
        list.appendChild(deleteButton);
        todolist.appendChild(list);

        checkBox.addEventListener('change', (event) =>{ 
            if (event.currentTarget.checked)
            {
                text.style.textDecoration='line-through'
            }
            else {
                text.style.textDecoration='none'
            }
        })

        deleteButton.addEventListener('click', (event) => {
            todolist.removeChild(event.currentTarget.parentNode)
        })

    }
    else{
        
    }
    input.value="";
}


add.addEventListener("click", addtodo);
