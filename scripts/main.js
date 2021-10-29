import readForm from "./readForm.js";
import listData from "./listData.js";
import post from "./post.js";
import showAllEntries from "./showAllEntries.js";
import deleteData from "./delete.js";

const DATA_URL = 'http://localhost:4001/data/'

const form = document.getElementById('form')


let formObject = {}

//saving form inputs
form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    formObject = readForm()
    post(DATA_URL, formObject)
})

//showing all inputs when document loads
document.addEventListener('DOMContentLoaded', showAllEntries(DATA_URL))

//listening for delete btn
const appointmentField = document.getElementById('listarCita')
appointmentField.addEventListener('click', (evt) => {
    let idToDelete = evt.target.id
    if(idToDelete != '' && evt.target.tagName === "BUTTON") {
        deleteData(DATA_URL, idToDelete)
    }
})