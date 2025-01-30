import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import {  db } from "./firebase.js"




const form = document.querySelector("#form")
const title = document.querySelector("#title")
const desc = document.querySelector("#desc")

const allTodos = []

form.addEventListener("submit",async (event)=>{


  allTodos.length = 0
    event.preventDefault()
    console.log(title.value)
    console.log(desc.value)
    try {
        const docRef = await addDoc(collection(db, "Todos"), {
          title: title.value,
          desc: desc.value,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      const querySnapshot = await getDocs(collection(db, "Todos"));
  querySnapshot.forEach((doc) => {
    allTodos.push(doc.data())
  console.log(`${doc.id} => ${doc.data()}`);
    });

console.log(allTodos);
renderTodo()
})

const todoDiv = document.querySelector("#todoDiv")
const renderTodo = ()=>{
  todoDiv.innerHTML = ''
    allTodos.map((item)=>{
      console.log(item);
      todoDiv.innerHTML += `
          <div id="todoDiv">
       <p>${item.title}</p>
       <p>${item.desc}</p>
    </div>
      
      `
    })
      title.value = ''
desc.value = ''

}




