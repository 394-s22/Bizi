import { Form, Stack } from "react-bootstrap";

type SearchBarProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <Stack style={{ width: "80%", margin: "auto" }} direction="horizontal">
      <Form.Control
        className="me-auto"
        placeholder="Search Keywords"
        value={searchText}
        onChange={(e :React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.target.value);
        }}
        style={{ backgroundColor: "lightgrey" }}
      />
    </Stack>
  );
};
