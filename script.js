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
///getting data:
// db.collection("cafes").where(btn.city, btn.arr, btn.value).get().then((snapshot) => {
// db.collection("cafes").orderBy("city").get().then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//         renderDoc(doc)
//     })
// })
db.collection("cafes").onSnapshot((snapshot) => {
    let change = snapshot.docChanges();
    change.forEach((chng) => {
        if (chng.type === "added") {
            renderDoc(chng.doc)
        } else if (chng.type === "removed") {
            let li = cafeList.querySelector("[data-id=" + chng.doc.id + "]")
            cafeList.removeChild(li)
        }
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