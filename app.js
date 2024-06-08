const  add = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTodo = (todo)=>{
 todos.innerHTML += ` <li class="list-group-item text-light d-flex justify-content-between align-items-center">
 <span>${todo}</span>
 <i class="far fa-trash-alt delete"></i>
</li>`;

}

add.addEventListener('submit',function(e){
    e.preventDefault();
    const todo = this.add.value.trim();
   
    if(todo.length){
        generateTodo(todo)
        this.reset();
    }else{
        
    }
})
todos.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
     }
})

const filterTodos = (val)=>{
 const li =    Array.from(todos.children);
    li.filter((todo)=>{
        return !todo.textContent.toLowerCase().includes(val);
    }).forEach((to)=>{
        to.classList.add('hide');
    })

    li.filter((todo)=>{
        return todo.textContent.toLowerCase().includes(val);
    }).forEach((to)=>{
        to.classList.remove('hide');
    })
}

search.addEventListener('keyup',()=>{
   const val = search.value.trim().toLowerCase();
   filterTodos(val)
})
