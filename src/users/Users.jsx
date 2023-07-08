import "./users.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../userData.js"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {userRows as data} from "../userData.js";

export const  Users=()=> {
    const [ users,setData] = useState(data);
    const handleDelete=(userId)=>{
        setData(users.filter((val)=>{
            return val.id !==userId;
        }))
    }
    
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    
    { field: 'username', headerName: 'User', width: 180, renderCell: (params) => {
        return (
          <div className="usersName">
            <img className="usersImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
 },

    { field: 'email', headerName: 'Email', width: 200 },

    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      width: 120,
    },

    {
      field: 'transaction',
      headerName: 'Transaction',
      type: 'string',
      width: 140,
    },
    {
      field: 'action',
      headerName: 'Action',
      type: 'string',
      renderCell:(params)=>{
        return <>
        
        <NavLink to={"/users/"+params.row.id}>
        <button className="usersEditBtn" >  Edit</button>
        </NavLink>
            <DeleteOutline className="usersDelIcon" onClick={()=> handleDelete(params.row.id)}/>
        
        </>
      },
      width: 160,
    },
   
  ];
  


  return (
    <div className="userList" style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        // disableSelectionOnClick
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}