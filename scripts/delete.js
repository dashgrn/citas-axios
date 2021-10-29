const deleteData = async (url, id) => {
    await axios.delete(url+id)
    console.log(`la entry con id ${id} ha sido borrada`)
}

export default deleteData;