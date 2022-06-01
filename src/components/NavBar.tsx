import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";

export const NavBar: React.FC = () => {
  let navigate = useNavigate();
  return (
    <Navbar
      style={{
        position: "fixed",
        overflow: "auto",
        bottom: "0",
        width: "100%",
        zIndex: 3,
        borderTop: "solid 1px lightgrey",
      }}
      bg="light"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Button
        onClick={() => {
          navigate("/");
        }}
        style={{
          margin: "auto",
          background: "transparent",
          border: "none",
          color: "grey",
        }}
      >
        <FaSearch />
      </Button>
    </Navbar>
  );
};
