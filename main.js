let input=document.getElementById('input')
let add=document.getElementById('add')
let todolist=document.getElementById('lists')

function addtodo(event){
    event.preventDefault();
    if(input.value!=""){
        const list=document.createElement('div');
        const checkBox=document.createElement('input');
        checkBox.type="checkbox";
        checkBox.id='cb';
        const checkBoxLabel=document.createElement('LABEL');
        checkBoxLabel.htmlFor='cb';
        const text=document.createElement('span');

        text.innerText=input.value;
        list.appendChild(checkBox);
        list.appendChild(checkBoxLabel);
        list.appendChild(text);
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

    }
    else{
        
    }
    input.value="";
}

add.addEventListener("click", addtodo);
