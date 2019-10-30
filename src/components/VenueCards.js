import React from "react"

//destructuring in the line below allows you to use "venues"
//in leiu of "props.venues"

export default function VenueCards({ venues }) {
return (
    <>
      {venues.map(venue => (
        <div id="venue-card" key={venue.id}>
          <h1 id="venue-name"> {venue.name}</h1>
          <img id="venue-pic" src={venue.image_url} alt="" />
          <h3 id="address">{venue.location.display_address[0]}</h3>
          <h3 id="address">{venue.location.display_address[1]}</h3>
        </div>
      ))}
      </>
  )
}