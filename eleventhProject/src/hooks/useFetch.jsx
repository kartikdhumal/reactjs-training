import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch data from an API.
 * @param {string} url - The API endpoint.
 * @param {string} method - HTTP method (GET, POST, etc.).
 * @param {object} [body] - Request body for POST/PUT requests.
 * @returns {object} { data, loading, error } - Response data, loading state, and error state.
 */
function useFetch(url, method, body = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios({
                    method,
                    url,
                    data: body,
                });
                setData(response.data);
            } catch (err) {
                setError(err.message);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);
    return { data, loading, error };
}

export default useFetch;
