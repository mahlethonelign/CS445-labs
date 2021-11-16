
window.onload = function () {
   
    document.getElementById("get-emp-btn").onclick = loadEmployees;
}
async function loadEmployees() {
    let {from} = rxjs;
    document.getElementById("list").innerHTML = "";
    let result = await fetch("https://randomuser.me/api/?results=" + document.getElementById("emp-num").value);
    
    let employees = (await result.json()).results;
    from(employees)
    .subscribe(emp => {
        let info = document.createElement('div');
        info.className = "row";
        info.innerHTML = `<hr> 
        <div class="col-6">
            <p>${emp.name.first + " " + emp.name.last}<br> </p>
        </div>
        <div class="col-6 text-end-left">
            <p> 
                <b>Location</b><br>
                ${emp.location.street.number} ${emp.location.street.name}<br>
                ${emp.location.city} ${emp.location.state} ${emp.location.country} ${emp.location.postcode}
            </p>
                           
        </div>`
        document.getElementById("list").appendChild(info);
  

    })
    
   
}







