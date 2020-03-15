import { useState, useEffect } from "react"

export default function useStatistics(url) {
    const [statistics, setStatistics] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await fetch(url).then(response =>
                response.json()
            ).catch(err => {
                setError(err);
            });
            setStatistics(data);
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return {
        statistics,
        loading,
        error,
    }
}