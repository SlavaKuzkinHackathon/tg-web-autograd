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
            <Button className={'add-btn'} onClick={onAddHandler} href={`tel:+${product.phone}`}>
                позвонить {`+${product.phone}`}
            </Button>
            <a className={'phone'} href={`tel:+9${product.phone}`} target="_blank">
                 {`${product.phone}`}
            </a>
        </div>
    );
};

export default OtdelItem;