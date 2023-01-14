import React from 'react';
import Button from "../Button/Button";
import './OtdelItem.css';


const OtdelItem = ({ product, className, onAdd }) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    const telegaAdres = 'href="https://t.me/`${koreamarket_nsk}`"'
    return (
        <div className={'product ' + className}>
            <div className={'img'} />
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <a className={'telega'} href={`https://t.me/${product.telegram}`} target="_blank">{product.telegram}</a>
            <Button className={'add-btn'} onClick={onAddHandler} href={`tel:${product.phone}`}>
                позвонить {product.phone_number}
            </Button>   
            <a className={'phone'} href={`https://t.me/:${product.phone_number}`} parse_mode="HTML">
                {product.phone_number}
            </a>
            <a className={'phone'} parse_mode="HTML" phone_number={+79137009150}>
                {product.phone_number}
            </a>
        </div>
    );
};

export default OtdelItem;
