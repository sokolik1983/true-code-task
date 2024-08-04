import React, { useEffect, useState } from "react";
import { fetchData } from "./helpers";
import { IExchanges } from "./types";

import "./styles.scss";

export const MainPage = () => {
    const [exchanges, setExchanges] = useState<IExchanges[]>([]);

    useEffect( () => {
        fetchData().then(response => setExchanges(response));

        const interval = setInterval(async () => {
            const res = await fetchData();
            setExchanges(res)
        }, 30000);
        return () => clearInterval(interval);
    }, []);


    useEffect( () => {

        console.log('items', exchanges);

    }, [exchanges]);

    return (
        <p className="par">111111111111111111111111</p>
    )
}

