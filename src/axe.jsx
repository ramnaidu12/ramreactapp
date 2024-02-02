

import React from "react";
import { connect } from 'react-redux'
import Addcart from "./addcart";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
function Axi(props) {
    console.log("ddf", props)

    return (<><div className="containerd-flex m-3">

        <h1 className="text-center m-3">Fake Online Kart</h1>
        <input placeholder="search items" className="w-50  text-center" type="text"></input>

        <button>Search Items</button>

        <span className="ab" > <Link to="addcart" >< i class="bi bi-cart-plus-fill"></i></Link></span>

        <b className="ba">{props.axi.obj.length}</b>
    </div>
        <div className=" d-flex  flex-wrap">

            {
                props.axi.products.map((pro) => {

                    return (<div className="w-25 border m-5 border d-flex justify-content-between cc p-2" >

                        <div >
                            <img className="m-2" width="100%" height="250px" src={pro.image} />
                            <b className="text-info "><b>Item:</b>{pro.title}</b>
                            <h6 className="flex text-success ">Rating:{pro.rating.rate}</h6>
                            <p className="flex">Description:{pro.description.slice(0,120)}</p>
                            <h6 className="flex ">Price:${pro.price}</h6>
                            <button className="abc btn btn-secondary " onClick={() => { props.dispatch({ type: "add", payload: { pro } }) }}>Add to Cart</button>
                        </div>

                    </div>)
                })

            }
            <Outlet />
        </div>
    </>)
}

export default connect((store) => store)(Axi)