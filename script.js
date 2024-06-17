document.querySelector('.push').onclick = function(){
    if(document.querySelector('.newtrack input').value.length == 0){
        alert("Plese enter an item")
    }else {
        document.querySelector('.newitems').innerHTML
        += `
        <div class="newtask">
            <span id="taskname">
                ${document.querySelector('.newtrack input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `;
    const currentTraget = document.querySelectorAll(".delete")
    for(i=0; i<currentTraget.length; i++){
        currentTraget[i].onclick=function(){
            this.parentNode.remove();
        }
    };
    const complete = document.querySelectorAll(".newtask")
    for(i=0; i<complete.length; i++){
        complete[i].onclick = function(){
            this.classList.add("completed")
        }
    };
    document.querySelector('.newtrack input').value ="";
    }
}