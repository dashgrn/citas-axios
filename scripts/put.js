const put = async (url, obj) => {
    await axios.put(url, obj)
}

export default put;