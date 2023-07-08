import React from 'react'
import "./product.css"
import {productData} from "../userData.js";
import { NavLink } from 'react-router-dom';
import { Chart } from '../components/charts/Chart'; 
import FileUploadIcon from '@mui/icons-material/FileUpload';


export const Product = () => {
  return (
    <div className="product">
        <div className="prodTitleDiv">
            <h1 className="prodTitle">Product</h1>
            <NavLink to="/newProd" >
                <button className="addProdBtn">Create</button>
            </NavLink>
        </div>

        <div className="prodTop">
            <div className="prodChart">
            <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>

            <div className="prodDetails">
                <div className="prodinfoTop">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='productTopImg' />
                    <span className="prodTopName">Apple Airpods</span>

                </div>

                <div className="prodInfoBottom">
                    <div className="prodInfoItem">
                      <span className="prodItemKey">id:</span>
                      <span className="prodItemValue">123</span>
                    </div>
                    <div className="prodInfoItem">
                      <span className="prodItemKey">sales:</span>
                      <span className="prodItemValue">5123</span>
                    </div>
                    <div className="prodInfoItem">
                      <span className="prodItemKey">active:</span>
                      <span className="prodItemValue">yes</span>
                    </div>
                    <div className="prodInfoItem">
                      <span className="prodItemKey">in stock:</span>
                      <span className="prodItemValue">no</span>
                    </div>
                </div>

            </div>


        </div>

    <div className="prodBottom">

        <form  className="prodForm">

            <div className="prodFormLeft">
                <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
            </div>

            <div className="prodFormRight">
                <div className="prodUpload">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="prodUplodImg" />
                    <label for="file">
                    <FileUploadIcon className="prodUploadIcon"/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="prodUpdateBtn">Update</button>
            </div>

        </form>
    </div>

    </div>
  )
}
