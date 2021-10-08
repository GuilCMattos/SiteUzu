let tamanho = document.getElementById("tamanho")

let tam = tamanho.dataset.num
let cont = ""

for(let i = 1; i <= tam; i++) { 
    cont += `<option value=${i}> ${i} </option>`
   
}

tamanho.innerHTML = cont

