const post = async (url, obj) => {
    await axios.post(url, obj)
}

export default post;