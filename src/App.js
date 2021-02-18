import React from "react";

function Food({name,picture}) {
  return <div>
    <h1>I like {name}</h1>
    <img src = {picture}/>
  </div>
}

const foodIList = [
  {
    name: "Kimchi",
    image:
    "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465_1280.jpg"

  },
  {
    name: "Samgyopsal",
    image:
    "https://cdn.pixabay.com/photo/2015/11/20/08/17/meat-1052571_1280.jpg"

  },
  {
    name: "Bibimbap",
    image:
    "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863_1280.jpg"

  },
  {
    name: "Doncasu",
    image:
    "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg"

  },
  {
    name: "Kimbap",
    image:
    "https://cdn.pixabay.com/photo/2016/03/15/08/02/food-1257054_1280.jpg"

  }
];

function App() {
  return <div>
    {foodIList.map(dish =>(<Food name = {dish.name} picture = {dish.image}/>))}
    { }
    </div>
}

export default App;
 