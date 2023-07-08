import React from 'react'
import "./large.css";

export const Large = () => {

    const Button=({btnType})=>{
        return (<button className={`lgBtn ${btnType} `}>{btnType}</button>)
    }
  return (
    <>
        <div className="largeWidg">
            <h3 className="lgTitle">Latest Transactions</h3>

            <table className="lgTable">
            <thead>
                <tr className="lgTr">
                    <th className="lgTh">Customer</th>
                    <th className="lgTh">Date</th>
                    <th className="lgTh">Amount</th>
                    <th className="lgTh">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className="lgTr">
                    <td className="lgCust">
                        <img src="https://media.gettyimages.com/id/1331335241/vector/female-avatar-icon.jpg?s=1024x1024&w=gi&k=20&c=f5cDRTXP8cDqBaZFQIH9MVEctDupqQV4YaVYsmRZSl8=" alt="" className="lgImg" />
                        <span className="lgUserName">Carol Denvers</span>

                    </td>
                    <td className="lgDate">20 Nov 2022</td>
                    <td className="lgAmt">$150.00</td>
                    <td className="lgStatus">
                    {/* <button className="lgBtn Declined ">Declined</button> */}
                        <Button btnType="Declined"/>
                    </td>
                </tr>
                <tr className="lgTr">
                    <td className="lgCust">
                        <img src="https://media.gettyimages.com/id/1331335241/vector/female-avatar-icon.jpg?s=1024x1024&w=gi&k=20&c=f5cDRTXP8cDqBaZFQIH9MVEctDupqQV4YaVYsmRZSl8=" alt="" className="lgImg" />
                        <span className="lgUserName">Carol Denvers</span>

                    </td>
                    <td className="lgDate">20 Nov 2022</td>
                    <td className="lgAmt">$150.00</td>
                    <td className="lgStatus">
                        <Button btnType="Approved"/>
                    </td>
                </tr>
                <tr className="lgTr">
                    <td className="lgCust">
                        <img src="https://media.gettyimages.com/id/1331335241/vector/female-avatar-icon.jpg?s=1024x1024&w=gi&k=20&c=f5cDRTXP8cDqBaZFQIH9MVEctDupqQV4YaVYsmRZSl8=" alt="" className="lgImg" />
                        <span className="lgUserName">Carol Denvers</span>

                    </td>
                    <td className="lgDate">20 Nov 2022</td>
                    <td className="lgAmt">$150.00</td>
                    <td className="lgStatus">
                        <Button btnType="Approved"/>
                    </td>
                </tr>
                <tr className="lgTr">
                    <td className="lgCust">
                        <img src="https://media.gettyimages.com/id/1331335241/vector/female-avatar-icon.jpg?s=1024x1024&w=gi&k=20&c=f5cDRTXP8cDqBaZFQIH9MVEctDupqQV4YaVYsmRZSl8=" alt="" className="lgImg" />
                        <span className="lgUserName">Carol Denvers</span>

                    </td>
                    <td className="lgDate">20 Nov 2022</td>
                    <td className="lgAmt">$150.00</td>
                    <td className="lgStatus">
                        <Button btnType="Pending"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}
