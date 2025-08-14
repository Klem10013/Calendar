let body = document.getElementById("main");

let tableau = document.createElement("table");
tableau.id = "calendar";

function dayInMonth(month, year){
    return new Date(year,month,0).getDate()
}

let number_of_day = dayInMonth(4,2025)
console.log(number_of_day)
let index_w = 7
let index_h = Math.floor((number_of_day/index_w)+0.9)


for (let i = 0; i < index_h; i++){
    let line = document.createElement("tr");
    tableau.appendChild(line);
    for (let j = 0; j < index_w; j++){
        if (i*index_w+j < number_of_day) {
            let col = document.createElement("td");
            col.textContent = i * index_w + j + 1;
            line.appendChild(col);
        }
    }
}


body.appendChild(tableau)