import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, editItem, deleteItem } from '../Reducers/ShoppingReducer';
import ShoppingItem from './ShoppingItem';

interface ShoppingItem {
    id: number;
    caption: string;
    amount: number;
}

const ShoppingList = () => {
    const shoppingList = useSelector((state: { shopping: { shoppingList: ShoppingItem[] } }) => state.shopping.shoppingList);
    const dispatch = useDispatch();
    const [caption, setCaption] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const lettersOnlyValue = inputValue.replace(/\d/g, '');
        setCaption(lettersOnlyValue);
    };

    const handleAddItem = () => {
        const numericAmount = parseInt(amount, 10);
        if (caption && !isNaN(numericAmount) && numericAmount >= 0) {
            dispatch(addItem({ caption, amount: numericAmount }));
            setCaption('');
            setAmount('');
            setError('');
        } else {
            setError('Некорректная название или количество товара');
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if ((/^[0-9]*$/.test(inputValue) || inputValue === '') && parseInt(inputValue) <= 1000) {
            setAmount(inputValue);
        }
    };

    const handleEditItem = (id: number, caption: string, amount: number) => {
        dispatch(editItem({ id, caption, amount }));
    };

    const handleDeleteItem = (id: number) => {
        dispatch(deleteItem({ id }));
    };

    return (
        <div>
            <div className="input-container">
                <input
                    type="text"
                    value={caption}
                    onChange={handleCaptionChange}
                    placeholder="Название товара"
                    autoComplete="off"
                />

                <div className='input-container-team'>
                    <input
                        type="text"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Количество"
                    />
                    <p className="info">(макс. 1000 ед.)</p>
                </div>

                <button onClick={handleAddItem}>Добавить</button>
                {error && <p className="error-message">{error}</p>}
            </div>
            <div>
                {shoppingList.map((item: { id: number; caption: string; amount: number }, index: number) => (
                    <ShoppingItem
                        key={item.id}
                        item={item}
                        onEdit={handleEditItem}
                        onDelete={handleDeleteItem}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShoppingList;


