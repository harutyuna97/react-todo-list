import {Button, DatePicker} from "antd";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/stateHook";
import {addTodo, editTodo} from "../reducers/TodoReducer";
import {Link, NavigateFunction, useNavigate, useParams} from "react-router-dom";
import {Formik} from "formik";
import {ICreateFormModel, ITodo} from "../models";
import {createScheme} from "../schemas/create";
import dayjs from "dayjs";
import {Dispatch} from "@reduxjs/toolkit";

type createProps = {
    editing: boolean;
}

function Create({editing}: createProps) {

    const todos: ITodo[] = useAppSelector((state: {todos: ITodo[], deletedTodos: ITodo[]}) => state.todos)

    const dispatch: Dispatch = useAppDispatch();
    const navigate:NavigateFunction = useNavigate();
    const {id} = useParams();
    let selectedTodo: ITodo | undefined = undefined;

    if (editing) {
        const selectedTodoIndex: number = todos.findIndex((todo: ITodo): boolean => todo.id.toString() === id);
        selectedTodo = todos[selectedTodoIndex];
    }

    useEffect(() => {
        if (editing && !selectedTodo) {
            navigate('/')
        }
    })


    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='col-12 col-sm-8 shadow mobile-100 border text-black p-5'>
                <Formik<ICreateFormModel>
                    initialValues={{
                        title: selectedTodo ? selectedTodo.title : '',
                        description: selectedTodo ? selectedTodo.description : '',
                        deadline: selectedTodo ? selectedTodo.deadline : ''
                    }}
                    onSubmit={(values) => {
                        if (editing && selectedTodo) {
                            dispatch(editTodo({
                                id: selectedTodo.id,
                                title: values.title,
                                description: values.description,
                                deadline: values.deadline,
                                status: selectedTodo.status
                            }));
                        } else {
                            dispatch(addTodo({
                                id: todos.length ? todos[todos.length - 1].id + 1 : 1,
                                title: values.title,
                                description: values.description,
                                deadline: values.deadline,
                                status: 'PENDING'
                            }));
                        }
                        navigate('/')
                    }}
                    validationSchema={createScheme}
                >
                    { ({handleSubmit, values, errors, handleChange, setFieldValue}) => (
                        <form onSubmit={handleSubmit}>
                            <h2>{editing ? 'Edit todo' : 'Add new todo'}</h2>
                            <div>
                                <label
                                    htmlFor="title"
                                >Title*:
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    id="title"
                                    className={errors.title ? 'is-invalid form-control' : 'form-control'}
                                    value={values.title}
                                />
                                {errors.title && <small className='text-danger'>{errors.title}</small>}
                            </div>
                            <div className='mt-2'>
                                <label
                                    htmlFor="description"
                                >Description:
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    id="description"
                                    className="form-control"
                                    value={values.description}
                                />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="deadline"
                                >Deadline:
                                </label>
                                <DatePicker
                                    disabledDate={(current) => current && current.valueOf() < Date.now()}
                                    id="deadline"
                                    showTime
                                    className="form-control"
                                    value={values.deadline ? dayjs(values.deadline) : undefined}
                                    onChange={(date, dateString) =>
                                        setFieldValue("deadline", dateString)
                                    }
                                />
                            </div>
                            <div className='mt-3 d-flex gap-1'>
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                >{editing ? 'Edit' : 'Create'}
                                </Button>
                                <Link to='/'>
                                    <Button
                                        htmlType="button"
                                        type="default"
                                    >Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Create