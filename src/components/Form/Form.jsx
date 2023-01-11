import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [carBrand, setСarBrand] = useState('');
    const [vin, setVin] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            carBrand,
            vin,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [carBrand, vin, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!vin || !carBrand) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [carBrand, vin])

    const onChangeCarBrand = (e) => {
        setСarBrand(e.target.value)
    }

    const onChangeVin = (e) => {
        setVin(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите данные для поиска автозапчастей</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Введите наименование авто'}
                value={carBrand}
                onChange={onChangeCarBrand}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Введите VIN или номер кузова авто'}
                value={vin}
                onChange={onChangeVin}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Моторное масло</option>
                <option value={'legal'}>Передний амортизатор</option>
            </select>
        </div>
    );
};

export default Form;