import React from "react"

//destructuring in the line below allows you to use "zoos"
//in lieu of "props.zoos"

export default function ZooCards({ zoos }) {
return (
    <>
      {zoos.map(zoo => (
        <div id="zoo-card" key={zoo.id}>
          <h1 id="zoo-name"> {zoo.name}</h1>
          <img id="zoo-pic" src={zoo.image_url} alt="" />
          <h3 id="address">{zoo.location.display_address[0]}</h3>
          <h3 id="address">{zoo.location.display_address[1]}</h3>
        </div>
      ))}
      </>
  )
}