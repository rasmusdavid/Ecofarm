import {useStates} from "react-easier";

export default () => {

    const cart = useStates('cart');

    const emptyCart = () => {
        cart.items = []
        cart.total = 0
    }

    return <aside id="cart" className="corners padding transp">
        <h3>Varukorg</h3>
        <ul>
        {cart.items.map(item => <li>{item.name}<span>{item.price}</span></li>)}
        <li className="total">Total <span>{cart.total}</span></li>
        </ul>
        <button onClick={emptyCart}>Töm varukorgen</button>        
    </aside>

}
