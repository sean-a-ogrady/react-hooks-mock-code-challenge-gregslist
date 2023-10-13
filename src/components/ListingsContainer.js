import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => 
        <ListingCard 
        key={listing.id} 
        description={listing.description} 
        image={listing.image}
        location={listing.location}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
