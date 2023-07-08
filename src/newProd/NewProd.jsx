import React from 'react'
import "./newProd.css";

export const NewProd = () => {
  return (
    <>
        <div className="newProd">
        <h1 className="newProdTitle">
            New Product
        </h1>

        <form  className="newProdForm">

            <div className="newProdDiv">
                <label>Image</label>
                <input type="file" id="file" />
           </div>

            <div className="newProdDiv">
                <label>Name</label>
                <input type="text" placeholder="Apple Airpods" />
            </div>

            <div className="newProdDiv">
                <label>Stock</label>
                <input type="text" placeholder="123" />
            </div>

            
            <div className="newProdDiv">
                <label>Active</label>

                <select name="active" id="active" className="prodActiveSelect">

                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

            </div>

            <button className="newProdAddBtn">Add New Product</button>



        </form>
        </div>
    </>
  )
}
