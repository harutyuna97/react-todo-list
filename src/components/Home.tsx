import {Button, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {ITodo} from "../models";
import {useAppSelector} from "../hooks/stateHook";

function Home() {

    const todoList = useAppSelector((state) => state.todos)

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
        }
    ]

    return (
        <div className='container'>
            <h2>Todo application</h2>
            <Button type='primary'>Create +</Button>
            <Table columns={columns} dataSource={todoList} rowKey='id'></Table>
        </div>
    )
}

export default Home