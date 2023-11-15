import {useAppSelector} from "../hooks/stateHook";
import {ColumnsType} from "antd/es/table";
import {ITodo} from "../models";
import {Table} from "antd";

function Trash() {

    const deletedTodos = useAppSelector((state) => state.deletedTodos)

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
        }
    ]

    return (
        <div className='container mt-5'>
            <h2 className='my-3'>Removed todos</h2>
            <Table columns={columns} dataSource={deletedTodos} rowKey='id'></Table>
        </div>
    )
}

export default Trash