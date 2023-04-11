import React, { useState, useContext } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import GlobalContext from "../routing/Context"

export default () => {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('')

    const { addProduct } = useContext(GlobalContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    if( item === "" || price === "" || weight === "" || category === "" || subcategory === "" || description === "" || image === ""){
        setMessage(<Alert variant="danger">"You have to fill all fields."</Alert>)
    }
    else{ addProduct(item, price, weight, category, subcategory, description, image)
        setMessage(<Alert variant="success">"Product added"</Alert>)
    }
}

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Item</FormLabel>
        <FormControl type="text" value={item} onChange={(event) => setItem(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Price</FormLabel>
        <FormControl type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Weight</FormLabel>
        <FormControl type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Category</FormLabel>
        <FormControl type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Subcategory</FormLabel>
        <FormControl type="text" value={subcategory} onChange={(event) => setSubcategory(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Description</FormLabel>
        <FormControl as="textarea" rows={3} value={description} onChange={(event) => setDescription(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Image</FormLabel>
        <FormControl type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </FormGroup>

      <Button type="submit">Submit</Button>
      { message }
    </Form>
  );
}

