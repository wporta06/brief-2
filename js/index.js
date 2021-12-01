const addinput = document.querySelector(".addinput");
// const addbtn = document.querySelector(".addbtn");
const tbody = document.querySelector(".tbody");


// JSON server

// show
const renderPosts = async() => {
    console.log();
    let uri = 'http://localhost:3000/specialitys';

    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);

    let template = '';
    posts.forEach(post => {
        template += `<tr>
        <th scope="row">${post.id}</th>
        <td>${post.name}</td>
        <td><button value="${post.id}" class="detbtn btn btn-danger">DELETE</button></td>
    </tr>
        `
    })
    tbody.innerHTML = template;


}
window.addEventListener('DOMContentLoaded', () => renderPosts());

// create
const form = document.querySelector("form");
const createPost = async(e) => {
    e.preventDefault();

    const doc = {
        name: form.namee.value,
    }

    await fetch('http://localhost:3000/specialitys', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    })
    window.location.replace('file:///C:/Users/walid/Desktop/b2/index.html')
}
form.addEventListener('submit', createPost)

// delete

setTimeout(function() {
    const detbtn = document.querySelectorAll(".detbtn");
    console.log(detbtn);

    detbtn.forEach(item => {

        console.log(item);
        item.addEventListener('click', async(e) => {
            console.log("object");
            console.log(item.value);
            const res = await fetch('http://localhost:3000/specialitys/' + item.value, {
                method: 'DELETE'
            })
            window.location.replace('file:///C:/Users/walid/Desktop/b2/index.html')
        })
    })
}, 300)