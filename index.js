let body = document.getElementById("main");


let month_offset = 0

function dayInMonth(month, year){
    return new Date(year,month,0).getDate()
}
function Month_to_st(month, year){
    return new Date(year,month,0).toLocaleString('default', {month: 'long'})
}

function setMonth(month_offset){
    let date = new Date();
    let nextDate = new Date(date.setMonth(date.getMonth()+month_offset))
    let month = nextDate.getMonth();
    let year =  nextDate.getFullYear();
    let number_of_day = dayInMonth(month,year)
    let name_of_mnth = Month_to_st(month,year) + " - " + year
    let mnth = document.getElementById("mnth")
    mnth.innerText = name_of_mnth
    let index_w = 7
    let index_h = Math.floor((number_of_day/index_w)+0.9)
    draw_mnth(index_w,index_h,number_of_day);
}



function draw_mnth(index_w,index_h,number_of_day) {
    let tableau = document.createElement("table");
    tableau.id = "calendar";
    for (let i = 0; i < index_h; i++) {
        let line = document.createElement("tr");
        tableau.appendChild(line);
        for (let j = 0; j < index_w; j++) {
            if (i * index_w + j < number_of_day) {
                let col = document.createElement("td");
                col.textContent = i * index_w + j + 1;
                col.id = i * index_w + j + 1;
                line.appendChild(col);
            }
        }
    }
    body.appendChild(tableau)
}

function add_date(){
    let cal = document.getElementById("calendar")
    cal.remove()
    month_offset += 1
    setMonth(month_offset)
}

function minus_date(){
    let cal = document.getElementById("calendar")
    cal.remove()
    month_offset -= 1
    setMonth(month_offset)
}

setMonth(month_offset)