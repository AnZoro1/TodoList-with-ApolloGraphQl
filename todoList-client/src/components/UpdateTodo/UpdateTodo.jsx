import React, { useState } from 'react';
import styles from './UpdateTodo.module.scss';

const UpdateTodo = ({ updateText, setUpdateText, updateTodo, todoId, setTodoId }) => {
    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo({
            variables: {
                id: todoId,
                title: updateText
            }
        });
        setUpdateText('');
        setTodoId('');

    };

    return (
        <div>
            <form action="" onSubmit={handleUpdate}>
                <input type="text" className={styles.updateInput} placeholder=' Для обновления задачи, нажмите на чекбокс задачи, введите новый текст и нажмите enter' value={updateText} onChange={(e) => setUpdateText(e.target.value)} />
                <button type='submit' style={{ display: 'none' }}>отправить</button>
            </form>
        </div>
    );
};

export default UpdateTodo; 