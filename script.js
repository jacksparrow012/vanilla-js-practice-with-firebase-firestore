import { db } from "./firebase.js"

let cafeList = document.querySelector("#cafe-list");
const renderDoc = doc => {
    let li = document.createElement("li");
    let name = document.createElement("span")
    let city = document.createElement("city")
    li.setAttribute("data-id", doc.id)
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    li.appendChild(name)
    li.appendChild(city)
    cafeList.appendChild(li)
}
db.collection("cafes").get().then((snapshot) => {
    snapshot.forEach((doc) => {
        renderDoc(doc)
    })
})