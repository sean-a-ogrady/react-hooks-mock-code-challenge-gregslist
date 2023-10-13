import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {
  function toggleFavorite(id) {
    setListings(listings.map(listing => listing.id === id ? {...listing, favorite: !listing.favorite} : listing))
  }
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => 
        <ListingCard 
        key={listing.id} 
        id={listing.id}
        description={listing.description} 
        image={listing.image}
        location={listing.location}
        favorite={listing.favorite}
        toggleFavorite={toggleFavorite}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
