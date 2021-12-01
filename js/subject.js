const addinput = document.querySelector(".addinput");
const addbtn = document.querySelector(".addbtn");
const tbody = document.querySelector(".tbody");


addbtn.addEventListener("click", (e) => {
    tbody.innerHTML += ` <tr>
        <th scope="row">#</th>
        <td>${addinput.value}</td>
    </tr>`
    console.log(addinput.value);


})