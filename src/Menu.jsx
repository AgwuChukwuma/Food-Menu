import { useState } from "react";

function Counter(){
    const[count, setCount] = useState({
        jollofRice: 0,
        friedRice: 0,
        stew: 0,
        egusiSoup: 0,
        eba: 0,
        spaghetti: 0
    });
    
  

    const increment = (item) => {
        setCount(prevCounts => ({
            ...prevCounts,
            [item]: prevCounts[item] + 1
        }));
    }

    const decrement = (item) => {
        setCount(prevCounts => ({
            ...prevCounts,
            [item]: Math.max(prevCounts[item] - 1, 0)
        }));
    }
    const reset = () => {
        setCount({
            jollofRice: 0,
            friedRice: 0,
            stew: 0,
            egusiSoup: 0,
            eba: 0,
            spaghetti: 0
        });
    }
    const getTotal = () => {
        return (
            count.jollofRice * 300 +
            count.friedRice * 300 +
            count.stew * 100 +
            count.egusiSoup * 100 +
            count.eba * 300 +
            count.spaghetti * 300
        );
    };


    return(
        <div className="counter-container">
            <div className="menu-grid">
                    <div className="menu">
                    <p className="menu-title">Menu</p>
                 <div className="item">
                    <span>Jollof Rice  -  ₦300</span>
                    <div className="container">
                    <button className="btn" onClick={() => decrement("jollofRice")}>-</button>
                    <button className="btn" onClick={() => increment("jollofRice")}>+</button>
                    </div>
                </div>
                <div className="item">
                    <span>Fried Rice  -  ₦300</span>
                    <div className="container">
                    <button className="btn" onClick={() => decrement("friedRice")}>-</button>
                    <button className="btn" onClick={() => increment("friedRice")}>+</button>
                    </div>
                </div>
                <div className="item">
                    <span>Stew -  ₦100</span>
                    <div className="container">
                    <button className="btn" onClick={() => decrement("stew")}>-</button>
                    <button className="btn" onClick={() => increment("stew")}>+</button>
                    </div>
                </div>
                <div className="item">
                    <span>Egusi Soup  -  ₦100</span>
                    <div className="container">
                    <button className="btn" onClick={() => decrement("egusiSoup")}>-</button>
                    <button className="btn" onClick={() => increment("egusiSoup")}>+</button>

                    </div>
                </div>
                <div className="item">
                    <span>Eba  -  ₦300</span>
                    <div className="container">
                    <button className="btn" onClick={() => decrement("eba")}>-</button>
                    <button className="btn" onClick={() => increment("eba")}>+</button>
                    </div>
                </div>
                <div className="item">
                    <span>Spaghetti  -  ₦300</span>
                    <div className="container">
                    <button className="btn" onClick={() => decrement("spaghetti")}>-</button>
                    <button className="btn" onClick={() => increment("spaghetti")}>+</button>
                    </div>
                </div>

                    </div>

             <div className="cart">
                <p className="cart-title">Cart</p>
                {count.jollofRice > 0 &&(
                    <p>Jollof Rice: {count.jollofRice}</p>
                )}
                {count.friedRice > 0 &&(
                    <p>Fried Rice: {count.friedRice}</p>
                )}
                {count.stew > 0 &&(
                    <p>Stew: {count.stew}</p>
                )}
                {count.egusiSoup > 0 &&(
                    <p>Egusi Soup: {count.egusiSoup}</p>
                )}
                {count.eba > 0 && (
                    <p>Eba: {count.eba}</p>
                )}
                {count.spaghetti > 0 &&(
                    <p>Spaghetti: {count.spaghetti}</p>
                )}
                
                <p>Total: ₦{getTotal()}</p>
                <button className="reset-btn" onClick={reset}>Reset</button>
            </div>
            </div>
        </div>
    );
}
export default Counter