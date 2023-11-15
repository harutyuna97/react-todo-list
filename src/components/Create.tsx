import {Button, DatePicker} from "antd";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/stateHook";
import {addTodo} from "../reducers/TodoReducer";
import {useNavigate} from "react-router-dom";
import {Formik} from "formik";
import {ICreateFormModel} from "../models";
import {createScheme} from "../schemas/create";

function Create() {

    const todos = useAppSelector((state) => state.todos)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='col-12 col-sm-8 shadow mobile-100 border text-black p-5'>
                <Formik<ICreateFormModel>
                    initialValues={{
                        title: '',
                        description: '',
                        deadline: ''
                    }}
                    onSubmit={(values) => {
                        dispatch(addTodo({
                            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
                            title: values.title,
                            description: values.description,
                            deadline: values.deadline,
                            status: 'PENDING'
                        }));
                        navigate('/')
                    }}
                    validationSchema={createScheme}
                >
                    { ({handleSubmit, values, errors, handleChange, setFieldValue}) => (
                        <form onSubmit={handleSubmit}>
                            <h2>Add new todo</h2>
                            <div>
                                <label
                                    htmlFor="title"
                                >Title*:
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="title"
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
                                    name="description"
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
                                    name="deadline"
                                    className="form-control"
                                    onChange={(date, dateString) =>
                                        setFieldValue("deadline", dateString)
                                    }
                                />
                            </div>
                            <div className='mt-3'>
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                >Create
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Create