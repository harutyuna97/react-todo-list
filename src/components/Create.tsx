import {Button, DatePicker} from "antd";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/stateHook";
import {addTodo} from "../reducers/TodoReducer";
import {useNavigate} from "react-router-dom";

function Create() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('')

    const todos = useAppSelector((state) => state.todos)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addTodo({id: todos.length ? todos[todos.length - 1].id + 1 : 1, title, description, deadline, status: 'INACTIVE'}));
        navigate('/')
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='col-12 col-sm-8 shadow mobile-100 border text-black p-5'>
                <form onSubmit={handleSubmit}>
                    <h2>Add new todo</h2>
                    <div>
                        <label
                            htmlFor="title"
                        >Title*:
                        </label>
                        <input
                            onChange={(event) => setTitle(event.target.value)}
                            type="text"
                            name="title"
                            className="form-control"
                        />
                    </div>
                    <div className='mt-2'>
                        <label
                            htmlFor="description"
                        >Description:
                        </label>
                        <input
                            onChange={(event) => setDescription(event.target.value)}
                            type="text"
                            name="description"
                            className="form-control"
                        />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="deadline"
                        >Deadline:
                        </label>
                        <DatePicker
                            onChange={(date) => date && setDeadline(date.toDate().toString())}
                            disabledDate={(current) => current && current.valueOf() < Date.now()}
                            name="deadline"
                            className="form-control"
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
            </div>
        </div>
    )
}

export default Create