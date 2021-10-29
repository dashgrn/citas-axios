const getData = () => {
    let nameInput = document.getElementById('nameInput').value
    let dateInput = document.getElementById('dateInput').value
    let hrInput = document.getElementById('hrInput').value
    let syntomInput = document.getElementById('syntomInput').value
    let dataObj = {
        nameInput,
        dateInput,
        hrInput,
        syntomInput
    }
    console.log(dataObj)
    return dataObj
}

export default getData;