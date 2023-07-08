import React ,{useState} from 'react'
import { productRows } from "../userData.js";
import { DataGrid } from '@mui/x-data-grid';

import "./products.css";
import { NavLink } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';

export const Products = () => {
    const [prodData,setProdData]= useState(productRows);

    const handleDelete=(prodId)=>{
        setProdData(prodData.filter((item)=>{
            return item.id!==prodId;
        }));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        
        { field: 'product', headerName: 'Product', width: 180, renderCell: (params) => {
            return (
              <div className="prodItem">
                <img className="prodItemImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
     },
    
        { field: 'stock', headerName: 'Stock', width: 200 },
    
        {
          field: 'status',
          headerName: 'Status',
          type: 'string',
          width: 120,
        },
    
        {
          field: 'price',
          headerName: 'Price',
          type: 'string',
          width: 140,
        },
        {
          field: 'action',
          headerName: 'Action',
          type: 'string',
          renderCell:(params)=>{
            return <>
            
            <NavLink to={"/products/"+params.row.id}>
            <button className="productsEditBtn" >  Edit</button>
            </NavLink>
                <DeleteOutline className="productsDelIcon" onClick={()=> handleDelete(params.row.id)}/>
            
            </>
          },
          width: 160,
        },
       
    ];
      
    

  return (
 <>
    <div className="products">
        <DataGrid
        rows={prodData}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
 </>
  )
}
