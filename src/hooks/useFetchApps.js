import axios from "axios";
import { useEffect, useState } from "react";

const useFetchApps = () => {
    const [apps, setApps] = useState([])


    useEffect(() => {
        axios('../appsData.json')
            .then(res => setApps(res.data))
    }, [])


    return {apps}
};

export default useFetchApps;