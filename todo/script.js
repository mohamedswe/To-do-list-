let items=[]


function addItems(){
    let item= document.getElementById("input")
    let itemValue= item.value;
    let newItem= {
        name:itemValue,
        done: false
    };
    items.push(newItem);
    console.log(items)
    item.value="";
}


  function displayItem() {
    const myDiv = document.getElementById("displayer");
    items.forEach(item => {
      const newLine = document.createElement("p");
      newLine.textContent = item.name;
      items.pop()
      newLine.addEventListener("click", () => {
        const indexToRemove = items.indexOf(item);
        items.splice(indexToRemove, 1);
        newLine.classList.add("fade-out");
        setTimeout(() => {
          myDiv.removeChild(newLine);
        }, 10);
      });
      myDiv.appendChild(newLine);
    });
  }
  