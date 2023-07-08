import { Info } from '../components/info/Info';
import React from 'react'
import "./home.css";
import { Chart } from '../components/charts/Chart';

import {userData} from "../userData.js";
import { Small } from '../components/smallWidg/Small';
import { Large } from '../components/largetWidg/Large';
const Home = () => {
  return (
    <>
        <div className="home">
            <Info/>
            <Chart data={userData} title="User Analytics" grid dataKey="User"/>
            <div className="widgets">
                <Small/>
                <Large/>
            </div>
        </div>
    </>
  )
}

export default Home;