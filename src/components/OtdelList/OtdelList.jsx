import React, { useState } from 'react';
import './OtdelList.css';
import OtdelItem from "../OtdelItem/OtdelItem";
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";
                                                                              /*   https://t.me/koreamarket_nsk */
const products = [
    { id: '1', title: 'Корея-Маркет', phone_number: '+79139029363', description: 'Автозапчасти для корейских авто', telegram: 'koreamarket_nsk' },
    { id: '2', title: 'АвтоЕвропа', phone_number: '+79137005382', description: 'Все запчасти для европейских брендов' },
    { id: '3', title: 'Скиф', phone_number: '+79833081822', description: 'Автозапчасти, аккумуляторы, автохимия' },
    { id: '4', title: 'АвтоградШина', phone_number: '+79137009150', description: 'Шины, диски', telegram: 'js_sky' },
    { id: '5', title: 'ProfiMarket', phone_number: '+79039004417', description: 'Subaru' },
    { id: '6', title: 'Павильон 1-8', phone_number: '+79833081815', description: 'Автозапчасти на иномарки' },
    { id: '7', title: 'Павильон 1-44', phone_number: '+79618767111', description: 'Автозапчасти на иномарки' },
]


const OtdelList = () => {
    const [addedItems, setAddedItems] = useState([])
    const { tg, queryId } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            queryId,
        }
        fetch('213.232.228.2:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = () => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <OtdelItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default OtdelList;