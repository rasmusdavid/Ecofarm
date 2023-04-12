import  UserCart  from '../components/UserCart'
import Button from 'react-bootstrap/esm/Button';



export default () => {
    return <>
       
      <UserCart/>

      {/* <Button variant="secondary" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} >Send order</Button> */}
    </>

}

/*


        <Table className="table">
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
                    <td>
                    Total
                    </td>
                    <td></td>
                    <td>TotalPrice</td>
                </tr>
            </tbody>
        </Table>

*/