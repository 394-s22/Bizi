import { Form, Stack } from "react-bootstrap";
import React, { useState } from "react";

type SearchBarProps = {
  text?: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  text, // to make Let's Go work
  setText,
  searchText,
  setSearchText,
}) => {
  const [text2, setText2] = useState(""); // because Results doesn't need the onChange string
  return (
    <Stack style={{ width: "80%", margin: "auto" }} direction="horizontal">
      <Form.Control
        className="me-auto"
        placeholder="Search Keywords"
        value={text ? text : text2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          // setText may be undefined, use backup setText2
          setText ? setText(e.target.value) : setText2(e.target.value);
        }}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key === "Enter"
            ? setSearchText((e.target as HTMLTextAreaElement).value)
            : null
        }
        style={{ backgroundColor: "lightgrey", borderColor: "gray", borderRadius: "10px" }}
      />
    </Stack>
  );
};
