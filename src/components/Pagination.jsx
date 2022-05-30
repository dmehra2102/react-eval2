import React, { useEffect, useState } from "react";
import { Button,Select, ButtonGroup } from '@chakra-ui/react'

const Pagination = ({paginationcontrol,pagecontrol}) => {
  const [page, setPage] = useState(1)
  const [data,setData] = useState([]);
  const [item,setItem] = useState(3);

  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then((res)=> res.json())
    .then((data)=> setData(data));
  },[])

  const handleitems = (e)=> {
    setItem(e.target.value);
    paginationcontrol(e.target.value);
    console.log(e.target.value)
  }

  const handlechange = (num,e)=> {
    const number = Math.ceil(data.length/item);
    if(page>=1 && page<=number){
      setPage(page+num);
      pagecontrol(page);
      console.log(page);
    }
    else if(page>number && e.target.id==="prev"){
      setPage(page+num);
    }
  };
  useEffect(()=>{
    console.log(page)
  },[page])
  // const handlenext = ()=>{
  //   const num = Math.ceil(data.length/item);
  //   if(page<num){
  //     setPage(page+1);
  //     pagecontrol(page);
  //     console.log(page);
  //   }
    // console.log(length.length)
  // }

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" variant='outline' id="first" onClick={()=> pagecontrol(1)}>First</Button>
      <Button data-cy="pagination-previous-button" variant='outline'id="prev" onClick={(e)=> handlechange(-1,e)}>Previous</Button>
      <Select onChange={handleitems} data-cy="pagination-limit-select" defaultValue={3} variant='outline'>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" variant='ghost' id="next" onClick={()=> handlechange(1)}>Next</Button>
      <Button data-cy="pagination-last-button" variant='outline' id="last" >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
