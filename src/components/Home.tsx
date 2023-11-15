import {Button, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {ITodo} from "../models";
import {useAppDispatch, useAppSelector} from "../hooks/stateHook";
import {Link} from "react-router-dom";
import {changeStatus, deleteTodo} from "../reducers/TodoReducer";
import {addDeletedTodo} from "../reducers/DeletedTodoReducer";
import {DeleteOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import {Dispatch} from "@reduxjs/toolkit";

function Home() {

    const actionsStyles = {
        width: "fit-content",
    };

    const dispatch: Dispatch = useAppDispatch();

    const todoList: ITodo[] = useAppSelector((state: {todos: ITodo[], deletedTodos: ITodo[]}) => state.todos)

    useEffect(() => {
        todoList.forEach((todo: ITodo) => {
            if (todo.deadline && Date.parse(todo.deadline) < new Date().getTime() && todo.status !== 'OVERDUE') {
                dispatch(changeStatus({todo, status: 'OVERDUE'}))
            }
        })
    })

    const handleDelete = (todo: ITodo) => {
        dispatch(addDeletedTodo(todo))
        dispatch(deleteTodo({id: todo.id}))
    }

    const handleMarkAsComplete = (todo: ITodo) => {
        if (todo.deadline && Date.parse(todo.deadline) < new Date().getTime() && todo.status !== 'OVERDUE') {
            dispatch(changeStatus({todo, status: 'OVERDUE'}))
        } else {
            dispatch(changeStatus({todo, status: 'COMPLETED'}))
        }
    }

    const columns: ColumnsType<ITodo> = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Deadline',
            dataIndex: 'deadline',
            key: 'deadline',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record: ITodo) => {
                return (
                    <div>
                        <div style={actionsStyles} className='d-flex justify-content-between gap-2'>
                            <Link to={`/edit/${record.id}`}>
                                <Button type='primary'>Edit</Button>
                            </Link>
                            <Button onClick={() => handleDelete(record)} type='primary' danger>Delete</Button>
                            {record.status !== 'COMPLETED' && record.status !== 'OVERDUE' && <Button onClick={() => handleMarkAsComplete(record)} type='default'>Mark as Complete</Button>}
                        </div>
                    </div>
                )
            },
        },
    ]

    return (
        <div className='container mt-5'>
            <h2 className='my-3'>Todo application</h2>
            <Link to='/create'>
                <Button type='primary' className='my-2'>
                    Create +
                </Button>
            </Link>
            <Table pagination={false} scroll={{ x: 400 }} columns={columns} dataSource={todoList} rowKey='id'></Table>
            <Link to='/trash'>
                <Button
                    className='mt-3'
                    type='primary'
                    danger
                    icon={<DeleteOutlined />}
                >Trash
                </Button>
            </Link>
        </div>
    )
}

export default Home