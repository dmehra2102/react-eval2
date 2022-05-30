import { Button, Input, Modal, ModalBody, Radio, RadioGroup, Select } from "@chakra-ui/react";
import React, { useState } from "react";

const AddProduct = () => {
  const [click,setClick] = useState(false);
  const [posting,setPosting] = useState({
    title : "",
    category:"",
    gender : "",
    price : ""
  });
  const handleinput = (e)=>{
    const {id,value} = e.target
      setPosting({
        ...posting,
        [id] : value
      })   
  }
  const handlesubmit= ()=>{
    console.log(posting)
    const payload = posting;
    fetch("http://localhost:8080/products",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(payload)
    })
  }

  return (
    <>
    <div className="add-pro-div">
      <Button my={4} data-cy="add-product-button" onClick={()=> setClick(!click)}>Add New Product</Button>
      <Modal isOpen={click} isCentered={true} initialFocusRef={true} finalFocusRef={true}>
        <ModalBody pb={6} >
          <Input data-cy="add-product-title" id="title" onChange={handleinput}/>
          <Select data-cy="add-product-category" id="category" onChange={handleinput}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup defaultValue={"male"} data-cy="add-product-gender" id="gender" onChange={handleinput}>
            <Radio data-cy="add-product-gender-male" >Male</Radio>
            <Radio data-cy="add-product-gender-female" >Female</Radio>
            <Radio data-cy="add-product-gender-unisex" >Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" id="price" onChange={handleinput}/>
          <Button data-cy="add-product-submit-button" onClick={handlesubmit}>Submit</Button>
        </ModalBody>
      </Modal>
      </div>
    </>
  );
};

// const Button = 

export default AddProduct;
