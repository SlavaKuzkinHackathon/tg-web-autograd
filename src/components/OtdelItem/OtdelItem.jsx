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
                позвонить +{product.phone_number}
            </Button>
            <a className={'phone'} href={`tel:${product.phone_number}`} target="_blank">
                {product.phone_number}
            </a>
            <a className={'phone'} href={`https://tel:${product.phone_number}`} target="_blank">
                {product.phone_number}
            </a>
            <a className={'phone'} href={"https://t.me/+79133971373"} target="_blank">
                +79133971373
            </a>
            <a className={'phone'} href={"tg://+79137009150"} target="_blank">
                +79137009150
            </a>
            <a className={'phone'} href={"https://tg/+79133971373"} target="_blank">
                +79133971373
            </a>
            <a className={'phone'} href={"https://t.me/+989137009150"} target="_blank">
                +989137009150
            </a>
            <a className={'phone'} href={"https://t.me/+979137009150"} target="_blank">
                +979137009150
            </a>
            <a className={'phone'} href={"https://t.me/979137009150"} target="_blank">
                979137009150
            </a>
        </div>
    );
};

export default OtdelItem;
