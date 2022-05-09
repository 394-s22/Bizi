import { Form, Stack } from 'react-bootstrap';

type SearchBarProps = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchText }) => {
  return (
    <Form>
      <Stack style={{ width: '80%', margin: 'auto' }} direction='horizontal'>
        <Form.Control
          className='me-auto'
          placeholder='Search Keywords'
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          style={{ backgroundColor: 'lightgrey' }}
        />
      </Stack>
    </Form>
  );
};
