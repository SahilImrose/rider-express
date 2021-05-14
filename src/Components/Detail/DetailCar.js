import React, { useState } from 'react';
import './Detail.css';
const DetailTarin = () => {
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

                <div >
                    <h5>🚗 Car 🙋🏻‍♂️ 8  💲55</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 5  💲65</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 9  💲23</h5>
                    <h5>🚗 Car 🙋🏻‍♂ 9  💲65</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 3  💲23</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 2  💲28</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 2  💲25</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 7  💲285</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 6  💲52</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 9  💲98</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 3  💲52</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 1  💲17</h5>
                    <h5>🚗 Car 🙋🏻‍♂️ 9  💲98</h5>
                </div>
            </div>
        </div>
    );
};

export default DetailTarin;