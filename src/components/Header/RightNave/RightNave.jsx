import React from "react";
import MyButton from "../MyButton/MyButton";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    flex-flow: column nowrap;
    background: radial-gradient(
      circle,
      rgba(15, 2, 8, 1) -20%,
      rgba(148, 187, 233, 1) 90%
    );
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;
  }
`;

function RightNave({ open }) {
  return (
    <Nav open={open}>
      <MyButton link="/" name="Home" />
      <MyButton link="/tests" name="Tests" />
      <MyButton link="/rules" name="Rules" />
      <MyButton link="/result" name="Results" />
      <MyButton link="/info" name="General Info" />
    </Nav>
  );
}

export default RightNave;
