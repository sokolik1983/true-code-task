import React, { useEffect, useState } from "react";
import { Spin, Select } from 'antd';
import { fetchData, getRandomColor, getTwoFirstLetters, generateUniqueId } from "./helpers";
import { IExchanges } from "../types";
import { optionsData } from "../sortFormat";

import "./styles.scss";

export const MainPage = () => {
    const [exchanges, setExchanges] = useState<IExchanges[]>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);

    /**
     * Выполняет запрос к API FinancialModelingPrep для получения полной информации
     * о компании по ее символу (ticker).
     *
     * @param {string} symbol - Символ компании (например, "AAPL", "MSFT").
     * @returns {Promise<any>} - Возвращает промис, который разрешается с
     *  объектом JSON, содержащим полную информацию о компании, или отклоняется
     *  с ошибкой, если запрос не удался.
     */
    const fetchFullData = async (symbol: string) => {
        try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=FTpDDg9vsIYNf2Ben0i3M0gulIBzRFgS`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    /**
     * Получает полную информацию о каждом обмене (exchange) из массива `list`
     * с помощью функции `fetchFullData()` и обновляет состояние компонента.
     *
     * @param {IExchanges[]} list - Массив объектов `IExchanges`,
     *  представляющих exchanges, для которых нужно получить полную информацию.
     * @returns {Promise<void>} - Возвращает промис, который разрешается после
     *  завершения получения полной информации и обновления состояния.
     */
    const getFullInformation = async (list: IExchanges[]) => {
        const fullInfoList = await Promise.all(list.map(async item => {
            const newDataItem = await fetchFullData(item.symbol);
            if (newDataItem) {
                const descriptor = Object.getOwnPropertyDescriptor(newDataItem, "0");
                const valueAtZeroKey = descriptor?.value;
                return {...item, ...valueAtZeroKey};
            }
        }));

        setExchanges(fullInfoList);
    };

    /**
     * Получает данные об exchanges с помощью функции `fetchData()`,
     * обрабатывает их и обновляет состояние компонента.
     *
     * @returns {Promise<void>} - Возвращает промис, который разрешается после
     *  завершения запроса данных и обновления состояния.
     */
    const getExchanges = () => {
        return fetchData().then(response => {
            if (response) {
                getFullInformation(response);
                setIsLoad(false)
            }
            ;
        });
    }
    
    useEffect(() => {
        getExchanges();
        const interval = setInterval(async () => {
            const res = await fetchData();
            if (res) {
                setExchanges(res);
                setIsLoad(false);
            }
        }, 30000);
        return () => clearInterval(interval);
    }, []);


    /**
     * Обработчик изменения значения, который сортирует массив объектов `exchanges`
     * по выбранному критерию.
     *
     * @param {string} value - Выбранное значение для сортировки. Допустимые значения:
     *  - "По алфавиту: от A до Z"
     *  - "По алфавиту: от Z до A"
     *  - "По цене от меньшей к большей"
     *  - "По цене от большей к меньшей"
     *  - "По изменению цены от меньшей к большей"
     *  - "По изменению цены от большей к меньшей"
     * @returns {void}
     */
    const handleChange = (value: string): void => {
        switch (value) {
            case "По алфавиту: от A до Z":
                setExchanges(exchanges.slice().sort((a, b) => a.symbol.localeCompare(b.symbol)));
                break;
            case "По алфавиту: от Z до A":
                setExchanges(exchanges.slice().sort((a, b) => b.symbol.localeCompare(a.symbol)));
                break;
            case "По цене от меньшей к большей":
                setExchanges(exchanges.slice().sort((a, b) => a.price - b.price));
                break;
            case "По цене от большей к меньшей":
                setExchanges(exchanges.slice().sort((a, b) => b.price - a.price));
                break;
            case "По изменению цены от меньшей к большей":
                setExchanges(exchanges.slice().sort((a, b) => a.changes - b.changes));
                break;
            case "По изменению цены от большей к меньшей":
                setExchanges(exchanges.slice().sort((a, b) => b.changes - a.changes));
                break;
            default:
                break;
        }
    }

    return (
        <div className="container">
            <div className="tittleCont">
                <h1>Список акций на бирже:</h1>
                <button onClick={() => getExchanges()}>Обновить данные:</button>
            </div>
            <div className="sortCont">
                <p>Сортировка: </p>
                <Select
                    className="select"
                    defaultValue={optionsData[0].value}
                    onChange={handleChange}
                    options={optionsData}
                >
                </Select>
            </div>
            {isLoad
                ? <div className="spinCont">
                    <Spin/>
                </div>
                : exchanges
                && exchanges.length
                && exchanges.map(item => (
                    <div className="itemCont" key={generateUniqueId()}>
                        <div className="leftCont">
                            <div
                                className="logo"
                                style={item.image ? {background: 'transparent'} : {background: getRandomColor()}}
                            >
                                {
                                    item.image
                                        ? <img src={item.image} alt="logo"/>
                                        : <p>{getTwoFirstLetters(item.name)}</p>
                                }
                            </div>
                            <div className="name">
                                <p>{item.name} {`(${item.symbol})`}</p>
                                <p>Биржа: {item.stockExchange + ` (${item.exchangeShortName})`} </p>
                            </div>
                        </div>
                        <div className="rightCont">
                            <p>Цена: {item.price}</p>
                            <p>Изменение цены: {item.changes}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

