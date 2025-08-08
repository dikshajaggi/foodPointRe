import { useEffect, useState } from "react"

const useFetch = (api, payload) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
        setLoading(true);
        try {
            const res = await api(payload);
            if (isMounted) {
            setData(res);
            setError(null);
            }
        } catch (err) {
            if (isMounted) {
            setError(err);
            setData(null);
            }
        } finally {
            if (isMounted) setLoading(false);
        }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [api, payload]);

   return { data, loading, error };
}

export default useFetch

// const { data, loading, error } = useFetch(getRestaurantsApi, { location: "Delhi" });
