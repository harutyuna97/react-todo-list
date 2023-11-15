import {Button, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {ITodo} from "../models";
import {useAppSelector} from "../hooks/stateHook";
import {Link} from "react-router-dom";

function Home() {

    const actionsStyles = {
        width: "140px",
    };

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
            render: () => {
                return (
                    <div>
                        <div style={actionsStyles} className='d-flex justify-content-between'>
                            <Button type='primary'>Edit</Button>
                            <Button type='primary' danger>Delete</Button>
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
                <Button type='primary'>
                    Create +
                </Button>
            </Link>
            <Table columns={columns} dataSource={todoList} rowKey='id'></Table>
        </div>
    )
}

export default Home