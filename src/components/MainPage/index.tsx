import React, { useEffect, useState } from "react";
import { fetchData, generateUniqueId, getRandomColor, getTwoFirstLetters } from "./helpers";
import { IExchanges } from "./types";

import "./styles.scss";
export const MainPage = () => {
    const [exchanges, setExchanges] = useState<IExchanges[]>([]);
    const [isLoad, setIsLoad] = useState<boolean>(false);

    const getExchanges = () => {
        return fetchData().then(response => response && setExchanges(response));
    }

    useEffect( () => {
        setIsLoad(true);
        getExchanges();
        if(exchanges.length) setIsLoad(false);

        const interval = setInterval(async () => {
            const res = await fetchData();
            if(res) {
                setExchanges(res);
                setIsLoad(false);
            }
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="tittleCont">
                <h1>Список акций на бирже:</h1>
                <button onClick={getExchanges}>Обновить данные</button>
            </div>
            {
                exchanges?.length &&
                exchanges.map(item => (
                    <div className="itemCont" key={generateUniqueId()}>
                        <div
                            className="logoCont"
                            style={{background: getRandomColor()}}
                        >
                            <p>{getTwoFirstLetters(item.name)}</p>
                        </div>
                        <div  className="content">
                            <p>{item.name} {`(${item.symbol})`}</p>
                            <p>Биржа: {item.stockExchange + ` (${item.exchangeShortName})`} </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

