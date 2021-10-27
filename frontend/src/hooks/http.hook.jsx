import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCalback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            await axios
            .post(`http://localhost:8000/user/createNewUser`, {
              login,
              password,
            })
        } catch (e) {

        } 
    }, [])

    return { loading, request, error }
}