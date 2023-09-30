import React from "react";
import Card from "./card";

const cardData = [
  {
    id: 1,
    image: "https://i.ibb.co/n6JmkyS/20230914-125437.jpg",
    title: "Wooden Laser Engraved Token",
    slug: "wooden-laser-engraved-token",
    description: "Made from 100% reycled wood.",
    price: 19,
    stock: 3,
    tag: "wood",
    isAvailable: true,
    isOnSale: true,
    isNew: true,
  },
];

export default function CardList() {
  return (
    <div>
      <div className='pb-8'>
        <h1 className='text-xl font-bold'>Products</h1>
        <p className='text-sm opacity-75 '>
          Our latest products fresh outta Engravedom oven.
        </p>
      </div>
      <section className='grid grid-cols-1 gap-5 grid-rows-auto md:grid-cols-3 md:grid-rows-1'>
        <Card key={cardData.id} cardData={cardData} />
        <Card key={cardData.id} cardData={cardData} />
        <Card key={cardData.id} cardData={cardData} />
        <Card key={cardData.id} cardData={cardData} />
      </section>
    </div>
  );
}
