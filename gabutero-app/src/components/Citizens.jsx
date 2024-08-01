import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";
import "../App.css";

const citizensData = [
  {
    name: "Jane",
    age: 41,
    address: "F. Cabahug St, Cebu City",
    status: "Active",
  },
  {
    name: "John",
    age: 32,
    address: "Sanciangko St, Cebu City",
    status: "Active",
  },
  {
    name: "Jane",
    age: 28,
    address: "A.S. Fortuna St, Mandaue City",
    status: "Active",
  },
  {
    name: "Mike",
    age: 29,
    address: "Mango Ave, Cebu City",
    status: "Inactive",
  },
  {
    name: "Jane",
    age: 34,
    address: "Osmeña Blvd, Cebu City",
    status: "Active",
  },
  {
    name: "Lisa",
    age: 22,
    address: "Gorordo Ave, Cebu City",
    status: "Inactive",
  },
  {
    name: "Lisa",
    age: 53,
    address: "V. Rama Ave, Cebu City",
    status: "Inactive",
  },
  { name: "John", age: 45, address: "Colon St, Cebu City", status: "Active" },
  { name: "John", age: 60, address: "Ramos St, Cebu City", status: "Active" },
  {
    name: "Mike",
    age: 40,
    address: "M.J. Cuenco Ave, Cebu City",
    status: "Inactive",
  },
  {
    name: "Anna",
    age: 35,
    address: "Moalboal, Cebu Province",
    status: "Active",
  },
  {
    name: "Carlos",
    age: 50,
    address: "Oslob, Cebu Province",
    status: "Inactive",
  },
  { name: "Diana", age: 42, address: "Danao, Cebu Province", status: "Active" },
  {
    name: "Edward",
    age: 38,
    address: "Bogo, Cebu Province",
    status: "Inactive",
  },
];

const Citizens = () => {
  const [citizens, setCitizens] = useState(citizensData);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    const updatedCitizens = [...citizens];
    updatedCitizens[index].status =
      updatedCitizens[index].status === "Active" ? "Inactive" : "Active";
    setCitizens(updatedCitizens);
  };

  const filteredCitizens = citizens.filter(
    (citizen) =>
      citizen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      citizen.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Citizens List</h2>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul>
        <div className="header">
          <span>No.</span>
          <span>Name</span>
          <span>Age</span>
          <span>Address</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={index}
            index={index}
            citizen={citizen}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default Citizens;
