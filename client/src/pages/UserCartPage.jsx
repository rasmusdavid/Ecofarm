

export default () => {
    return <>
        <h1 className="text-center g-4">Cart</h1>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product</td>
                    <td>Amount</td>
                    <td>Price</td>
                </tr>
                <tr>
                    <td>Product</td>
                    <td>Amount</td>
                    <td>Price</td>
                </tr>
                <tr>
                    <td>Product</td>
                    <td>Amount</td>
                    <td>Price</td>
                </tr>
                <tr>
                    <td>
                    Total
                    </td>
                    <td></td>
                    <td>TotalPrice</td>
                </tr>
            </tbody>
        </table>

        <button className="btn btn-light btn-lg mx-auto col-8 p-4 btn-outline-secondary">Send order</button>
    </>

}