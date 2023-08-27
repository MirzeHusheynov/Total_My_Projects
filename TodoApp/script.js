let textInput = document.querySelector("#textInput"),
addText = document.querySelector("#addText"),
clearAll = document.querySelector("#clearAll"),
addParagraph = document.querySelector("#addParagraph");
addText.addEventListener('click',function(){
    let paragraf = document.createElement("p")
    addParagraph.appendChild(paragraf);
    paragraf.innerHTML = textInput.value;
    textInput.value = ""
    paragraf.classList.add("paragraf")
    paragraf.addEventListener('click',function(){
        paragraf.style.textDecoration = "line-through"
        paragraf.style.color = "blue"
    })
    clearAll.addEventListener('click',function(){
        paragraf.remove()
    })
    paragraf.addEventListener('dblclick',function(){
        addParagraph.removeChild(paragraf)
    })
    textInput.addEventListener('keydown',)
})