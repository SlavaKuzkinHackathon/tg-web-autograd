import React from 'react';
import Button from "../Button/Button";
import './OtdelItem.css';

const OtdelItem = ({ product, className, onAdd }) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'} />
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'telegram'}>{product.telegram}</div>
            <a className={'telega'} href="https://t.me/`${product.telegram}`"> {product.telegram}</a>
            <Button className={'add-btn'} onClick={onAddHandler}>
                позвонить {`+${product.phone}`}
            </Button>
            
        </div>
    );
};

export default OtdelItem;