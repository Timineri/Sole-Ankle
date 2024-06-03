// import React from 'react'

import NavLinks from "./NavLinks";

const Links = [
  { Key: 1, name: "SALE" },
  { Key: 2, name: "NEW RELEASES" },
  { Key: 3, name: "MEN" },
  { Key: 4, name: "WOMEN" },
  { Key: 5, name: "KIDS" },
  { Key: 6, name: "COLLECTIONS" },
];

export default function Header() {
  return (
    <div>
      {Links.map((link) => {
        return <h2 key={link.key}>{link.name}</h2>;
      })}
      <NavLinks />
    </div>
  );
}
