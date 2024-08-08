import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { deleteProduct } from '../features/productSlice';
import { getProducts } from '../features/productSlice';
import TextField from '@mui/material/TextField';

import ModalComp from "./Modal"
import { Search } from '@mui/icons-material';

const ProductTable = () => {
  // const products = useSelector((state) => state.products.products);
  const [open, setOpen] = React.useState(false);
  const [viewproduct, setViewproduct] = useState({})
  const [search, setSearch] =useState('')
  const [record, setRecord] = React.useState([]);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data =>
      dispatch(getProducts(data))
    )
  },[])

  const handleOpen = (item) =>{ setOpen(true)
    setViewproduct(item)
  
  }
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    console.log(id,"idddddddddd")
    dispatch(deleteProduct({ id }));
    alert('Product deleted');
  };
console.log(record,"viewproductviewproduct")
  const SearchHandler =(e)=>{
    setSearch(e.target.value)
    console.log(search ,"wwwwwwwww")
    if (e.target.value.length == 0) {
      setRecord(products);
    } else {
      setRecord(
        products.filter(
          (f) => f.title.toLowerCase().includes(e.target.value)
        )
      );
  }
}

  return (
    <>
     {/* <TextField id="outlined-search" value={search} label="Search field" onChange={(e)=>SearchHandler(e)} type="search" /> */}
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product,i) => (
            <TableRow key={i}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
              <Button onClick={()=>handleOpen(product )}>View</Button>
                <Button onClick={() => alert('Update Product')}>Update</Button>
                <Button onClick={() => handleDelete(product.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <ModalComp  viewproduct={viewproduct} openmodal={open} handleClose={handleClose}/>
    </>
  );
};

export default ProductTable;
