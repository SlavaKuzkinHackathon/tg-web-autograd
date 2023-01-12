import React, { useState } from 'react';
import './OtdelList.css';
import OtdelItem from "../OtdelItem/OtdelItem";
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";
                                                                              /*   https://t.me/koreamarket_nsk */
const products = [
    { id: '1', title: 'Корея-Маркет', phone: 79139029363, description: 'Автозапчасти для корейских авто', telegram: 'https://t.me/koreamarket_nsk' },
    { id: '2', title: 'АвтоЕвропа', phone: 79137005382, description: 'Все запчасти для европейских брендов' },
    { id: '3', title: 'Скиф', phone: 79833081822, description: 'Автозапчасти, аккумуляторы, автохимия' },
    { id: '4', title: 'АвтоградШина', phone: 79137009150, description: 'Шины, диски' },
    { id: '5', title: 'ProfiMarket', phone: 79039004417, description: 'Subaru' },
    { id: '6', title: 'Павильон 1-8', phone: 79833081815, description: 'Автозапчасти на иномарки' },
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