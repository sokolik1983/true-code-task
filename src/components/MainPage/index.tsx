import React, {useEffect, useState} from "react";
import { Spin } from 'antd';
import { Select } from "antd";
import { fetchData, getRandomColor, getTwoFirstLetters, generateUniqueId } from "./helpers";
import { IExchanges } from "./types";

import "./styles.scss";

const optionsData = [
    {
        id: 1,
        value: 'По алфавиту: от A до Z'
    },
    {
        id: 2,
        value: 'По алфавиту: от Z до A'
    },
    {
        id: 3,
        value: 'По цене от меньшей к большей'
    },
    {
        id: 4,
        value: 'По цене от большей к меньшей'
    },
    {
        id: 5,
        value: 'По изменению цены от меньшей к большей'
    },
    {
        id: 6,
        value: 'По изменению цены от большей к меньшей'
    },
]

export const MainPage = () => {
    const [exchanges, setExchanges] = useState<IExchanges[]>([]);
    // const [selectValue, setSelectValue] = useState<string>(optionsData[0].value);
    const [isLoad, setIsLoad] = useState<boolean>(true);





    // const fetchData1 = async (symbol: string) => {
    //     try {
    //         // console.log('1111111111111111')
    //         const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=FTpDDg9vsIYNf2Ben0i3M0gulIBzRFgS`);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok ' + response.statusText);
    //         }
    //         return await response.json();
    //     } catch (error) {
    //         console.error('There has been a problem with your fetch operation:', error);
    //     }
    // }
    //
    //
    //
    // const getFullInformation  = async (list: IExchanges[]) => {
    //     console.log('list', list);
    //     const fullInfoList = Promise.all(list.map(async item => {
    //         const newDataItem =  await fetchData1(item.symbol);
    //
    //         console.log('newDataItem', newDataItem)
    //         return { ...item, ...newDataItem }
    //     }));
    //
    //     console.log('fullInfoList', fullInfoList)
    // }


    const fetchData1 = async (symbol: string) => {
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

    const getFullInformation = async (list: IExchanges[]) => {
        const fullInfoList = await Promise.all(list.map(async item => {
            const newDataItem = await fetchData1(item.symbol);
            if(newDataItem) {
                const descriptor = Object.getOwnPropertyDescriptor(newDataItem, "0");
                const valueAtZeroKey = descriptor?.value;
                return { ...item, ...valueAtZeroKey };
            }
        }));

        setExchanges(fullInfoList);
    };

    const getExchanges = () => {
        return fetchData().then(response => {
            if (response) {
                getFullInformation(response);
                setIsLoad(false)
            };
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
        }, 300000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('exchanges', exchanges);
    }, [exchanges]);

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
                <button onClick={getExchanges}>Обновить данные:</button>
            </div>
            <div className="sortCont">
                <p>Сортировка: </p>
                <Select
                    style={{ width: '400px'}}
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
                : exchanges?.length &&
                exchanges.map(item => (
                    <div className="itemCont" key={generateUniqueId()}>
                        <div className="leftCont">
                            <div
                                className="logo"
                            >
                                <img src={item.image} alt="logo"/>
                                {/*<p>{getTwoFirstLetters(item.name)}</p>*/}
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

