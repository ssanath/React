import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
function App() {
  const initialProducts = [
    {
      name: "IPhone 14",
      price: 99999,
      quantity: 0,
    },
    {
      name: "Redmi",
      price: 9999,
      quantity: 0,
    }
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount; 
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }
  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);  
    setProductList(newProductList);
  }
  const resetQuantity = () => {
    const newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
