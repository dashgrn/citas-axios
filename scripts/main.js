import getData from "./getData.js";
import post from "./post.js";
const DATA_URL = 'http://localhost:4001/data'

const form = document.getElementById('form')

let dataReturnObj = {}
form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    dataReturnObj = getData()
    post(DATA_URL, dataReturnObj)
})