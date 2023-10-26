import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_POSTS, REMOVE_POST, UPDATE_POST } from '../../api';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.scss';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

const TodoList = () => {
    const [updateText, setUpdateText] = useState('');
    const [todoId, setTodoId] = useState('');
    const { loading: loadingQuery, error: errorQuery, data: dataQuery } = useQuery(GET_POSTS);
    const [removeTodo, { loading: loadingRemove, error: errorRemove, data: dataRemove }] = useMutation(REMOVE_POST, {
        update(cache, { data: { removePost } }) {
            cache.modify({
                fields: {
                    allPosts(existingPosts = []) {
                        const newPosts = existingPosts.filter(postRef => {
                            return postRef.__ref !== `Post:${removePost.id}`;
                        });
                        return newPosts;
                    }
                }
            });
        }
    });
    const [updateTodo, { loading: loadingUpdate, error: errorUpdate, data: dataUpdate }] = useMutation(UPDATE_POST);

    if (loadingQuery || loadingRemove) {
        return <div>Loading...</div>;
    }
    if (errorQuery || errorRemove) {
        return <div>{errorQuery ? errorQuery.message : errorRemove ? errorRemove.message : errorUpdate ? errorUpdate.message : null}</div>;
    }
    return (
        <div className={styles.container}>
            <div>
                <AddTodo />
            </div>
            <div className={styles.todos}>
                {dataQuery?.allPosts.map((todo, index) => {
                    return (
                        <Todo title={todo.title} id={todo.id} key={todo.id} removeTodo={removeTodo} setTodoId={setTodoId} />
                    );
                })}
            </div>
            <div>
                <UpdateTodo updateText={updateText} setUpdateText={setUpdateText} updateTodo={updateTodo} todoId={todoId} setTodoId={setTodoId} />
            </div>
        </div>

    );
};

export default TodoList;