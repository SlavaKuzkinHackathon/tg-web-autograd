import React from 'react';
import Button from "../Button/Button";
import './OtdelItem.css';
//import logo from '/img/лого_отделов_корея.png'


const OtdelItem = ({ product, className, onAdd }) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    const telegaAdres = 'href="https://t.me/`${koreamarket_nsk}`"'
    return (
        <div className={'product ' + className}>
            <div className={'img'}>
                <img src={product.image} className={'image_logo'} />
            </div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <a className={'telega'} href={`https://t.me/${product.telegram}`} target="_blank">{product.telegram}</a>
            <Button className={'add-btn'} onClick={onAddHandler} href={`tel:${product.phone_number}`}>
                позвонить {product.phone_number}
            </Button>
        </div>
    );
};

export default OtdelItem;
