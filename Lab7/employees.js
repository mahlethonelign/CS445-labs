window.onload = function () {
    loadEmployees();
    document.getElementById("refresh").onclick = loadEmployees;
}
async function loadEmployees() {
    document.getElementById("list").innerHTML = "";
    let result = await fetch("https://randomuser.me/api/?results=5");
    let employees = (await result.json()).results;
    for (let i = 0; i < employees.length; i++) {
        let emp = employees[i];
        let info = document.createElement('div');
        info.className = "row";
        info.innerHTML = `<div class="col-4">
                            <img src=${emp.picture.medium}>
                        </div>
                        <div class="col-8 text-end">
                            <p><b>${emp.name.first + " " + emp.name.last}</b><br>
                                ${emp.phone}<br>
                                ${emp.email}
                            </p>
                        </div> <hr> `
        document.getElementById("list").appendChild(info);
    }
}
