import React from 'react'
import "./newUser.css";

export const NewUser = () => {
  return (
<>
    <div className="newUser">
        <h1 className="newUserTitle">
            New User
        </h1>

        <form  className="newUserForm">

            <div className="newUserDiv">
                <label>Username</label>
                <input type="text" placeholder="Harry" />
            </div>

            <div className="newUserDiv">
                <label>FullName</label>
                <input type="text" placeholder="Harry Styles" />
            </div>

            <div className="newUserDiv">
                <label>Email</label>
                <input type="email" placeholder="Harry@anytimesex.com" />
            </div>

            <div className="newUserDiv">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>

            <div className="newUserDiv">
                <label>Phone</label>
                <input type="number" placeholder="+91 885XXXXXXX" />

            </div>

            <div className="newUserDiv">
                <label>Address</label>
                <input type="text" placeholder="Delhi | India" />
                
            </div>

            <div className="newUserDiv">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label htmlFor="male" >Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label htmlFor="female" >Female</label>
                    <input type="radio" name="gender" id="others" value="others"/>
                    <label htmlFor="others" >Others</label>
                </div>
            </div>

            
            <div className="newUserDiv">
                <label>Active</label>

                <select name="active" id="active" className="userActiveSelect">

                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

            </div>

            <button className="newUserAddBtn">Create New User</button>



        </form>
    </div>
</>
  )
}
