import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa';
import valueData from '../data/values.json';

type AdvancedSearchProps = {
  searchComponent: string;
  setSearchComponent: React.Dispatch<React.SetStateAction<string>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

const valueDictionary: { [key: string]: string[] } = valueData;

export const AdvancedSearch = (props: AdvancedSearchProps) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#ddd',
    border: 'none',
    color: 'black',
    padding: '5px 10px',
    textAlign: 'center',
    margin: '2px 1px',
    borderRadius: '16px',
  };

  const toggleButton = (val: string) => {
    const state = props.advancedFilterValues.includes(val);
    let result = props.advancedFilterValues;
    if (state) {
      result = result.filter((v) => v !== val);
    } else result = result.concat(val);
    props.setAdvancedFilterValues(result);
  };

  return (
    <>
      <div className='mx-2'>
        <Button
          variant='light'
          onClick={() => props.setSearchComponent('basic')}
        >
          <FaAngleLeft />
          Back to Quick Filter
        </Button>
      </div>
      {Object.entries(valueDictionary).map((entry, catID) => {
        return (
          <div key={catID} className='mx-4 mb-2'>
            <h1>{entry[0]}</h1>
            <ToggleButtonGroup type='checkbox' style={{ flexWrap: 'wrap' }}>
              {entry[1].map((value, valID) => {
                const state = props.advancedFilterValues.includes(value);
                return (
                  <ToggleButton
                    key={valID}
                    className='mx-1'
                    style={{
                      ...buttonStyle,
                      backgroundColor: state ? 'black' : '#ddd',
                      color: state ? 'white' : 'black',
                    }}
                    value={value}
                    onClick={() => {
                      toggleButton(value);
                    }}
                  >
                    {value}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </div>
        );
      })}
    </>
  );
};

export default AdvancedSearch;
