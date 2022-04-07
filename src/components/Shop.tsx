import './shop.scss';
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Cards from "./Cards";
// import {ReactComponent as } from "react";
// import {ReactComponent as List} from "img/list-button-svgrepo-com.svg";

library.add(faBars);

const Shop = () => {

    return (<>
            <div className='shop'>
                <div className='logo'>
                    <h1>Shop</h1>
                    {/*<List/>*/}
                    <FontAwesomeIcon icon="bars" className='bars'/>
                </div>
                <div className='search'>
                    <div className='searching'>
                        <input type={"text"} placeholder={'Search'}/>
                        <button>search</button>
                    </div>
                    <button>R</button>
                </div>
                <Cards/>
            </div>
        </>
    )
}

export default Shop;