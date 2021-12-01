const addinput = document.querySelector(".addinput");
const addbtn = document.querySelector(".addbtn");
const tbody = document.querySelector(".tbody");

const typeselect = document.querySelector(".typeselect");
const childselect = document.querySelector(".childselect");
const parentselect = document.querySelector(".parentselect");

typeselect.addEventListener("click", (eo) => {
    if (typeselect.value == "parent") {
        console.log("is parent");
        childselect.style.display = "block";
        parentselect.style.display = "none";
    }
    if (typeselect.value == "child") {
        console.log("is child");
        childselect.style.display = "none";
        parentselect.style.display = "block";
    }
})




// addbtn.addEventListener("click", (e) => {
//     tbody.innerHTML += ` <tr>
//         <th scope="row">#</th>
//         <td>${addinput.value}</td>
//     </tr>`
//     console.log(addinput.value);


// })