import {Button, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {ITodo} from "../models";
import {useAppDispatch, useAppSelector} from "../hooks/stateHook";
import {Link} from "react-router-dom";
import {deleteTodo} from "../reducers/TodoReducer";
import {addDeletedTodo} from "../reducers/DeletedTodoReducer";
import {DeleteOutlined} from "@ant-design/icons";

function Home() {

    const dispatch = useAppDispatch();

    const actionsStyles = {
        width: "140px",
    };

    const todoList = useAppSelector((state) => state.todos)

    const handleDelete = (todo: ITodo) => {
        dispatch(addDeletedTodo(todo))
        dispatch(deleteTodo({id: todo.id}))
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
            render: (text, record) => {
                return (
                    <div>
                        <div style={actionsStyles} className='d-flex justify-content-between'>
                            <Link to={`/edit/${record.id}`}>
                                <Button type='primary'>Edit</Button>
                            </Link>
                            <Button onClick={() => handleDelete(record)} type='primary' danger>Delete</Button>
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
            <Table columns={columns} dataSource={todoList} rowKey='id'></Table>
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