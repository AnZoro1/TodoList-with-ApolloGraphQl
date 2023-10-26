import React, { useEffect, useState } from 'react';
import styles from './Todo.module.scss';
import Close from '../../../public/Close.svg';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../api';

const Todo = ({ title, id, removeTodo, setTodoId }) => {
    const [checked, setChecked] = useState(false);

    const { loading, error, data } = useQuery(GET_POSTS);

    useEffect(() => {
        setChecked(false);
    }, [data]); // отслеживаем кеш, если происходит мутация(например обновили задачу), сбрасываем локальное состояние 

    const handleRemove = (id) => {
        removeTodo({ variables: { id: id } });
    };
    const handleChecked = (e) => {
        setChecked(e.target.checked);
        setTodoId(id);
    };
    return (
        <div>
            <div className={`${styles.todo} ${checked ? styles.selectTodo : ''}`}>
                <div onClick={() => handleRemove(id)}><img src={Close} alt="" /></div>
                <div>{title}</div>
                <div><input type="checkbox" checked={checked} onChange={(e) => handleChecked(e)} /></div>
            </div>
        </div>
    );
};

export default Todo;