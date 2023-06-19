{/* <div class="vezife-item">
    <li class="vezife-tanitim">Idmana get</li>
    <button class="vezife-btn vezife-btn-tamamlandi"><i class="fa fa-check" aria-hidden="true"></i></button>
    <button class="vezife-btn vezife-btn-sil"><i class="fa fa-trash" aria-hidden="true"></i></button>

</div> */}

const todoInputu = document.querySelector(".input-vezife")
const todoBtn = document.querySelector(".btn-vezife-elaveet")
const todoUl = document.querySelector("ul")


todoBtn.addEventListener("click", function() {
    const todoDivi = document.createElement("div")    
    todoDivi.className = "vezife-item"

    const todoLisi = document.createElement("li")
    todoLisi.className = "vezife-tanitim"
    todoLisi.innerHTML = todoInputu.value
    todoInputu.value = " "
    todoDivi.appendChild(todoLisi)
  

    const trueBtn = document.createElement('button')
    trueBtn.className = "vezife-btn vezife-btn-tamamlandi"
    todoDivi.appendChild(trueBtn)
    trueBtn.innerHTML = `<i class="fa fa-check"></i>`

    const falseBtn = document.createElement('button')
    falseBtn.className = "vezife-btn vezife-btn-sil"
    falseBtn.innerHTML = `<i class="fa fa-trash"></i>`
    todoDivi.appendChild(falseBtn)
   

    console.log(todoDivi)

    todoUl.appendChild(todoDivi)


})


todoUl.addEventListener('click', deleteOrEdit)


function deleteOrEdit(e) {
    if(e.target.classList.contains('vezife-btn-sil')) {
       e.target.parentElement.classList.add('delete')
    }

    if(e.target.classList.contains("vezife-btn-tamamlandi")) {
        e.target.parentElement.classList.add('vezife-tamamlandi')
    }
}