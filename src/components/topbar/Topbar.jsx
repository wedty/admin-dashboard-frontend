import React from 'react'
import { NotificationsNone,Language,Settings } from '@material-ui/icons'
import "./topbar.css"
export const Topbar = () => {
  return (
    <>
        <div className="topbar">
            <div className="topbarHeader">
                <div className="topLeft">
                    <span className="heading">Admin Panel</span>

                </div>

                <div className="topRight">
                    <div className="topbarIcon">
                        <NotificationsNone/>
                        <span className="iconBadge">1</span>

                    </div>
                    <div className="topbarIcon">
                        <Language />
                        <span className="iconBadge">1</span>
                    </div>
                    <div className="topbarIcon">
                        <Settings />
                    </div>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className='avatar'/>

                </div>
            </div>
        </div>
    </>
  )
}
