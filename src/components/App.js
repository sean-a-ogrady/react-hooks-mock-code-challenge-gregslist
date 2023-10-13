import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const url = "http://localhost:6001/listings/"

  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");
  const [newListing, setNewListing] = useState({description: "", image: "", location: ""});

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(setListings);
  }, [])

  const filteredListings = listings;

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={filteredListings} />
    </div>
  );
}

export default App;
