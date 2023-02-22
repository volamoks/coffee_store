import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { openModal } from '../coffeListItem/coffeeSlice';

import './modalWindow.scss';

const ModalWindow = () => {
    const isOpen = useSelector(state => state.filter.modalOpen);

    const dispatch = useDispatch();
    // const setInputData = () => {};

    const [inputName, setInputName] = useState('');
    const [inputNumber, setInputNumber] = useState('');

    const closeModal = () => {
        dispatch(openModal());
    };
    // const setInputData = e => (name, num) => {
    //     e.preventDefault;
    //     dispatch(setData(name, num));
    // };

    const setName = name => {
        setInputName(name);
    };

    const setNumber = num => {
        setInputNumber(num);
    };

    return (
        isOpen === true && (
            <div className="modal">
                <div className="modal__window ">
                    <div className="modal__h1">
                        <button
                            onClick={closeModal}
                            className="btn__close"
                        >
                            Close
                        </button>
                        <h1>We will call you soon</h1>
                    </div>

                    <input
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        placeholder="Your name"
                        className="modal__window__input"
                        type="text"
                    />
                    <input
                        onChange={e => {
                            setNumber(e.target.value);
                        }}
                        placeholder="Your number"
                        className="modal__window__input"
                        type="text"
                    />
                </div>
            </div>
        )
    );
};

export default ModalWindow;
