import React,{ useState } from "react";
function Api(){
  const [data2,setData2]=useState(0);
  const [data1,setData1]=useState(0);
  function getFact(){
  try {
    fetch('https://catfact.ninja/fact').then(
      response=>response.json()).then(
        (fact)=>{setData2(fact);}
      )
  } catch (error) {
    console.log(error);
  }

  console.log(data2);
}
function getImage(){
  try {
    fetch('https://cataas.com/cat?json=true').then(
      response=>response.json().then(
        (cat)=>{setData1(cat);}
      )
    )
  } catch (error) {
    console.log(error);
  }
  console.log(data1);
  
}
var s='https://cataas.com'+data1.url;
alert(s);
  return(
    <header>
    <div className="div">
    <h1 className="a1">WEEK 2 ASSIGNMENT</h1>
    <h2 className="a2">Facts About Cats</h2>
    <button onClick={getFact} id="btn">Get a Fact</button>
    <h3 className="a3">{data2.fact}</h3>
    <button onClick={getImage} id="btn">Get a Image</button>
    <img src={s} alt="unavailable" height="300px" width="300px" id="hello"></img>
    </div>
    </header>
  );
  
};

export default Api;




