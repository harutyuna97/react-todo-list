import {WindowsOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

function Header() {

    const headerStyles = {
        height: "80px",
    };

    const iconStyles = {
        height: "70px",
        fontSize: "50px",
        marginLeft: "10px",
        cursor: "pointer"
    };

    const linkStyles = {
        color: 'snow'
    };

    return (
        <div style={headerStyles} className='w-100 bg-primary d-flex align-items-center'>
            <Link to='/' style={linkStyles}>
                <WindowsOutlined style={iconStyles}/>
            </Link>
        </div>
    )
}

export default Header