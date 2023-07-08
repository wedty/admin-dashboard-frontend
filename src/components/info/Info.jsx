import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react';
import "./info.css";


export const Info = () => {
  return (
    <>
        <div className="info">

            {/* item 1 */}
            <div className="infoItem">
                <span className="infoTitle">
                    Revenue
                </span>
                <div className="infoMoneyCont">
                <span className="infoMoney">$2,415</span>
                <span className="infoMoneyRate">
                    -11.4 <ArrowDownward  className="infoIcon negative"/>
                </span>
                </div>
                <span className="infoSub">Compared to last month</span>
            </div>

            {/* item2 */}
            <div className="infoItem">
                <span className="infoTitle">
                    Sales
                </span>
                <div className="infoMoneyCont">
                <span className="infoMoney">$4,415</span>
                <span className="infoMoneyRate">
                    -1.4 <ArrowDownward  className="infoIcon negative"/>
                </span>
                </div>
                <span className="infoSub">Compared to last month</span>
            </div>

            {/* item3 */}

            <div className="infoItem">
                <span className="infoTitle">
                    Cost
                </span>
                <div className="infoMoneyCont">
                <span className="infoMoney">$2,225</span>
                <span className="infoMoneyRate">
                    +2.4 <ArrowUpward  className="infoIcon"/>
                </span>
                </div>
                <span className="infoSub">Compared to last month</span>
            </div>
        </div>
    </>
  )
}
