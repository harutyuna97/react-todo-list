import Header from "./Header";
import React, {PropsWithChildren} from "react";

function Layout(props: PropsWithChildren) {
    return(
        <div>
            <Header />
            { props.children }
        </div>
    );
}

export default Layout