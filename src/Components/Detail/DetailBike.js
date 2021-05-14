import React, { useState } from 'react';
import './Detail.css';
const DetailCar = () => {
    const [user, setUser] = useState({
        form: '',
        to: ''
    })
    const handleChange = (e) => {
        console.log(e.target.value);
        const location = { ...user }
        location[e.target.name] = e.target.value
        setUser(location)
        const result = document.getElementById("result").classList.add('d-none')
    }
    const handleClick = () => {
        const result = document.getElementById("result").classList.remove('d-none')
        const inp = document.getElementById("inp").classList.add('d-none')
    }
    return (
        <div className="text-center container">
            <div id="inp div">
                <div>
                <input name="form" onChange={handleChange} type="text" required placeholder="From"/>
                    <br />
                    <input name="to" onChange={handleChange} type="text" required placeholder="To"/>
                    <br />
                    <input type="submit" onClick={handleClick} value="Submit"/>
                </div>
            </div>
            <div className="result d-none" id="result">
                <div className="formTo">
                    <h5>{user.form}</h5><h5 style={{color:'#ffffff'}}>to</h5><h5>{user.to}</h5></div>

                <div className="result" >
                    <h5>🏍 Bike 🙋🏻‍♂️ 1  💲55</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 2  💲65</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 1  💲23</h5>
                    <h5>🏍 Bike 🙋🏻‍♂ 2  💲65</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 2  💲23</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 1  💲28</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 2  💲25</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 2  💲285</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 1  💲52</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 2  💲98</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 2  💲52</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 1  💲17</h5>
                    <h5>🏍 Bike 🙋🏻‍♂️ 2  💲98</h5>
                </div>
            </div>
        </div>
    );
};

export default DetailCar;