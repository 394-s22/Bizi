import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

type NavBarProps = {
  setSearchComponent: React.Dispatch<React.SetStateAction<string>>;
};

export const NavBar: React.FC<NavBarProps> = ({ setSearchComponent }) => {
  let navigate = useNavigate();
  return (
    <Navbar
      style={{
        position: "fixed",
        overflow: "auto",
        bottom: "0",
        width: "100%",
      }}
      bg="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Button
        onClick={() => {
          setSearchComponent("basic");
          navigate("/");
        }}
        style={{ margin: "auto" }}
        active
      >
        Home
      </Button>
    </Navbar>
  );
};
