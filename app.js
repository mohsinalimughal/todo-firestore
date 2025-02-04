import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import {  db } from "./firebase.js"




const form = document.querySelector("#form")
const title = document.querySelector("#title")
const desc = document.querySelector("#desc")

const allTodos = []
const error1 = document.querySelector("#error")

form.addEventListener("submit",async (event)=>{
  allTodos.length = 0
    event.preventDefault()
    if (!title.value || !desc.value) {
      error1.innerHTML = `Value can't be empty`;
      return; 
  } else {
      error1.innerHTML = ''; 
  }
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


renderTodo()
})

const todoDiv = document.querySelector("#todoDiv")
const renderTodo = ()=>{
  todoDiv.innerHTML = ''
    allTodos.map((item)=>{
      todoDiv.innerHTML +=  ` <div class="todo-item">
      <div class="todo-content">
          <p><strong>${item.title}</strong></p>
          <p>${item.desc}</p>
      </div>
      <div class="todo-actions">
          <button class="edit-btn" onclick="editTodo('${item.id}')">Edit</button>
          <button class="delete-btn" onclick="deleteTodo('${item.id}')">Delete</button>
      </div>
  </div>`
    })
      title.value = ''
      desc.value = ''

}




