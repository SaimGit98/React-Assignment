import { useEffect } from "react";
import "./header.css"

import { Link } from "react-router-dom";

function Header() {
    const routes = [{
        path: "/about",
        pageName: "About"
    }
        ,
    {
        path: "/recipes",
        pageName: "Recipes"
    }
    ]


    return (

        <>

            <div>
                <nav>
                    <h2 className="logo">MasterChef</h2>
                    <ul >
                        {routes.map(({ pageName, path }, index) => {
                            return (
                                <Link to={path }  key={index}><li >{pageName}</li></Link>
                            )



                        })
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header;