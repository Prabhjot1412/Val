// Mind

const Think = async (message) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/mind/think`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "message": message
            })
        })
        let response_json = await response.json()
        return response_json
    } catch (e) {
        console.error(e)
    }
}

export default Think