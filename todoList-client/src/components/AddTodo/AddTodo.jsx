import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_POST } from '../../api';
import styles from './AddTodo.module.scss';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [id, setId] = useState(10);
    const [AddTodo, { loading, error, data }] = useMutation(ADD_POST, {
        update(cache, { data: { createPost } }) {
            cache.modify({
                fields: {
                    allPosts(existingTodos = []) {
                        const newTodoRef = cache.writeFragment({
                            data: createPost,
                            fragment: gql`
                            fragment NewPost on Post{
                                id
                                title
                                views
                                user_id
                            }
                            `
                        });
                        return [...existingTodos, newTodoRef];
                    }
                }
            });
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        AddTodo({
            variables: {
                user_id: id,
                views: 22,
                title: title
            }
        });
        setId(prev => prev + 1);
        setTitle('');

    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder='Введите текст' onChange={(e) => setTitle(e.target.value)} />
                <button type='submit' style={{ display: 'none' }}>отправить</button>
            </form>
        </div>
    );
};

export default AddTodo;