import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import {}
import "./user.css";
import { PermIdentity,CalendarToday,PhoneAndroid, MailOutline,LocationSearching} from '@material-ui/icons';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const User = () => {
  const {userId} = useParams();
  return (
    <>
    <div className="user">
        <div className="userTitleDiv">
          <h1 className="userTitle">Edit User</h1>
          <NavLink to="/newUser">
            <button className="userAddBtn">Create</button>
          </NavLink>
        </div>

        <div className="userDiv">
        {/* left */}
          <div className="userDetail">
            <div className="userTop">
              <img src="https://media.gettyimages.com/id/1331335241/vector/female-avatar-icon.jpg?s=1024x1024&w=gi&k=20&c=f5cDRTXP8cDqBaZFQIH9MVEctDupqQV4YaVYsmRZSl8=" alt="" className="userImg" />

              <div className="userTopTitle">
                <span className="userUserName">
                  Christina Ricci
                </span>
                <span className="userDesig">Software Engineer</span>

              </div>

            </div>
            <div className="userBottom">
              <span className="userAccount">
                Account Details
              </span>
              <div className="userInfo">
                <PermIdentity className="userIcon" />
                <span className="userShowInfoTitle">christieRick99</span>
              </div>
              <div className="userInfo">
                <CalendarToday className="userIcon" />
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userContact">
                Contact Details
              </span>
              <div className="userInfo">
                <PhoneAndroid className="userIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userInfo">
                <MailOutline className="userIcon" />
                <span className="userShowInfoTitle">christieRick99@gmail.com</span>
              </div>
              <div className="userInfo">
                <LocationSearching className="userIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form  className="userUpdateForm">

              <div className="userUpdateLeft">

                <div className="userUpdateDiv">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="userUpdateInput"
                />
                </div>

                <div className="userUpdateDiv">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="userUpdateInput"
                />
                </div>

                <div className="userUpdateDiv">
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="userUpdateInput"
                />
                </div>

                <div className="userUpdateDiv">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="userUpdateInput"
                />
                </div>
              </div>

              {/* RIght side */}
              <div className="userUpdateRight">
                <div className="userUpload">
                  <img className="userUploadImg" src='https://i.pinimg.com/236x/75/e7/7c/75e77c84bd0faf6c29338df65a38df74.jpg' alt=''/>

                  <label htmlFor="file">
                    <FileUploadIcon className="userUploadIcon"/>
                  </label>

                  <input type="file"  id="file" style={{display:"none"}}/>
                </div>

                <button className="userUpdateBtn">Update</button>
              </div>

            </form>
          </div>
        </div>
    </div>
    </>
  )
}
