const addinput = document.querySelector(".addinput");
const addbtn = document.querySelector(".addbtn");
const tbody = document.querySelector(".tbody");
const formselect = document.querySelector(".form-select");

// console.log("dddd")

addbtn.addEventListener("click", (e) => {
    tbody.innerHTML += ` <tr>
        <th scope="row">#</th>
        <td>${addinput.value}</td>
    </tr>`
    console.log(addinput.value);


})

// JSON server

// show Speciality in input
const renderPosts = async() => {
    let uri = 'http://localhost:3000/specialitys';
    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);
    let template = '';
    posts.forEach(post => {
        template += `
        <option value="${post.id}">${post.name}</option>
        `
    })
    formselect.innerHTML += template;
}
window.addEventListener('DOMContentLoaded', () => renderPosts());

// show in table
const renderTeachers = async() => {
    let uri = 'http://localhost:3000/teachers';
    let uri2 = 'http://localhost:3000/specialitys';
    const res2 = await fetch(uri2);
    const posts2 = await res2.json();
    console.log(posts2[0].name);

    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);
    let template = '';
    posts.forEach(post => {
        posts2.forEach(post2 => {
            if (post.id_s == post2.id) {
                template += `<tr>
        <th scope="row">${post.id}</th>
        <td>${post.name}</td>
        <td>${post2.name }  </td>
        <td><button value="${post.id}" class="detbtn btn btn-danger">DELETE</button></td>
    </tr>
        `
            }
        })
    })
    tbody.innerHTML = template;


}
window.addEventListener('DOMContentLoaded', () => renderTeachers());

// create
const form = document.querySelector("form");
console.log(form);
console.log(formselect.value);
const createPost = async(e) => {
    e.preventDefault();
    // console.log(formselect.value);

    const doc = {
        name: form.namee.value,
        id_s: formselect.value,
    }

    await fetch('http://localhost:3000/specialitys', {
            method: 'POST',
            body: JSON.stringify(doc),
            headers: { 'Content-Type': 'application/json' }
        })
        // window.location.replace('teacher.html')
}
form.addEventListener('submit', createPost)

// delete

setTimeout(function() {
        const detbtn = document.querySelectorAll(".detbtn");
        console.log(detbtn);

        detbtn.forEach(item => {

            console.log(item);
            item.addEventListener('click', async(e) => {
                console.log(item.value);
                const res = await fetch('http://localhost:3000/specialitys/' + item.value, {
                    method: 'DELETE'
                })
                window.location.replace('file:///C:/Users/walid/Desktop/b2/index.html')
            })
        })
    }, 200)
    // ===================================