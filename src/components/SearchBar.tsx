import { Form } from "react-bootstrap"
import { useState } from 'react'

type SearchBarProps = {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = (props: SearchBarProps) => {
    return (
        < Form.Control
            className="me-auto"
            placeholder="Search Keywords"
            onChange={(e) => props.setSearchText(e.target.value)}
            style={{ backgroundColor: "lightgrey" }}
        />
    )
}
