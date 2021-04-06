import { db } from "./firebase.js"

let cafeList = document.querySelector("#cafe-list");
let form = document.querySelector("#add-cafe-form")

const renderDoc = doc => {
    let li = document.createElement("li");

    let name = document.createElement("span")
    let city = document.createElement("city")
    let cross = document.createElement("div")
    li.setAttribute("data-id", doc.id)

    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = "X"

    li.appendChild(name)
    li.appendChild(city)

    cafeList.appendChild(li)
    li.appendChild(cross)
    cross.addEventListener("click", (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id")
        db.collection("cafes").doc(id).delete()
    })


}
db.collection("cafes").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        renderDoc(doc)
    })


})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    db.collection("cafes").add({
        name: form.name.value,
        city: form.city.value
    })
    form.name.value = ""
    form.city.value = ""
})