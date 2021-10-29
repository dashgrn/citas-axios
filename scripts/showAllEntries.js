const showAllEntries = async (url) => {
    const appointmentField = document.getElementById('listarCita')

    let res = await axios.get(url)
    let { data } = res
    console.log(data)
    
    //inserting data in html
    data.forEach(appointmentData => {
        let { nameInput, dateInput, hrInput, syntomInput, id } = appointmentData
        appointmentField.innerHTML += `
            <td>${nameInput}</td>
            <td>${dateInput}</td>
            <td>${hrInput}</td>
            <td>${syntomInput}</td>
            <td><button id="${id}">Borrar</button></td>
        `
    });
}

export default showAllEntries;