// import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Links = [
  { Key: 1, name: "SALE" },
  { Key: 2, name: "NEW RELEASES" },
  { Key: 3, name: "MEN" },
  { Key: 4, name: "WOMEN" },
  { Key: 5, name: "KIDS" },
  { Key: 6, name: "COLLECTIONS" },
];
export default function NavLinks() {
  return (
    <Link>
      {Links.map((link) => {
        return <LinkText key={link.Key}>{link.name}</LinkText>;
      })}
    </Link>
  );
}

const Link = styled(Box)`
  display: flex;
`;

const LinkText = styled.h3`
  margin-left: 2em;
`;
