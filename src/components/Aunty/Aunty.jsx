import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <sec className="flex">
                <Cousin name={'Maoshi'}></Cousin>
                <Cousin name={'Jessi'}></Cousin>
            </sec>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 100tk</button>
        </div>
    );
};

export default Aunty;