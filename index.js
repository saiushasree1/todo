function fun(){
    document.querySelector('input').value='';
}
document.querySelector('#add').onclick = function() {
    let todoinput = document.querySelector("input").value;
    if (todoinput.length == 0) {
        alert("Enter Any New Task and press the add button");
    } else {
        // document.querySelector("#col").innerHTML += `<li class="take"><p>${todoinput}</p><button class ="del">X</button></li>`
        var list = document.querySelector("#col");
        var todocontent = document.createElement("li");
        var deleteicon = document.createElement("button");

        todocontent.className = "take";
        todocontent.innerHTML = '<li>' + todoinput + '</li>';

        deleteicon.className = "del";
        deleteicon.innerHTML = '<button>' + "X" + '</button>';

        deleteicon.addEventListener("click", function() {
            todocontent.remove();
        })

        todocontent.addEventListener("click",function() {
            todocontent.classList.toggle("completed");
        })

        todocontent.appendChild(deleteicon);
        list.appendChild(todocontent);
        setTimeout(fun,0);
    }
}