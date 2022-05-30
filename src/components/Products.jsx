import { Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import "../App.css"


const Products = () => {
 
  const [list,setList] = useState([]);
  const [value, setValue] = useState(3);
  const [page,setPage] = useState(1);
  useEffect(()=>{
    fetch(`http://localhost:8080/products?_page=${page}&_limit=${value}`)
    .then((res)=> res.json())
    .then((data)=> setList(data));
  },[value,page])
  const paginationcontrol = (values)=> {
    setValue(values);
    console.log(value);
    console.log("hello")
  }

  const pagecontrol = (num)=> {
    setPage(num);
  }
  return (
    <Flex direction={"column"} gap="20px" align={"center"}>
      {/*  AddProduct */}
      <AddProduct />
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>{/* List of Products */}
      {
        list.map((el)=> {
          return <Product item={el}/>
        })
      }

      </Grid>
      {/* Pagination */}
      <Pagination paginationcontrol={paginationcontrol} pagecontrol={pagecontrol} length={list}/>
    </Flex>
  );
};

export default Products;
