let add = document.querySelector("button");
let input = document.querySelector("input");
let tskList = document.getElementById("taskList")
let tableTaches = [];
let i = 0;

add.addEventListener("click", () => {
    inputvalue = input.value;
    tableTaches.push(inputvalue);
    console.log(tableTaches);

    tskList.innerHTML += 
            `<div>
                <p>${tskList[i]}</p>
                <div>
                    <button>Suprimir</button>
                    <button>Adicionar</button>
                </div>
            </div>`;

    i++

});

