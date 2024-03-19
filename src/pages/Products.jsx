import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card';

const Products = () => {

    const image1 =
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/042576/1.jpg?2247";
  const image2 =
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/432869/1.jpg?6409";
  const image3 =
    "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/8082552/1.jpg?0658";
  const image4 =
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/9033601/1.jpg?1693";
  const image5 =
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/8097752/1.jpg?3184";
    const image6 =
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/1326212/1.jpg?8191"
    const image7 =
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/5351072/1.jpg?5281"
    const image8 = 
    "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/9630242/1.jpg?4059"
    const image9 =
    "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/227177/1.jpg?4224"
    const image10 =
    "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/2949982/1.jpg?7263"

  return (
    <>
     <Navbar />
      <h2>This is a products page</h2>

      <div className="d-flex flex-wrap gap-4">
        <Card
          image={image1}
          name="Brown ankle length footwear"
          description="Good for everyday use"
          price={30}
        />
        <Card
          image={image2}
          name="multicolor running footwear"
          description="Good for both indoor and outdoor run"
          price={100}
        />
        <Card
          image={image5}
          name="Crocs"
          description="A very comfortable and durable multipurpose footwear"
          price={15}
        />
        <Card
          image={image4}
          name="White and black sneakers"
          description="A very comfortable and durable multipurpose footwear"
          price={70}
        />
        <Card
          image={image3}
          name="Fashion footwear"
          description="Good for everyday use Good for everyday use"
          price={150}
        />
        <Card
          image={image6}
          name="Fashion footwear"
          description="Good for everyday use Good for everyday use"
          price={80}
        />
        <Card
          image={image7}
          name="Fashion footwear"
          description="Good for everyday use Good for everyday use"
          price={150}
        />
        <Card
          image={image8}
          name="Fashion footwear"
          description="Good for everyday use Good for everyday use"
          price={150}
        />
        <Card
          image={image9}
          name="Fashion footwear"
          description="Good for everyday use Good for everyday use"
          price={150}
        />
        <Card
          image={image10}
          name="Fashion footwear"
          description="Good for everyday use Good for everyday use"
          price={150}
        />
      </div>
    </>
  );
};


export default Products;