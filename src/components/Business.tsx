import { Card } from 'react-bootstrap';
import '../App.css';
import valueData from '../data/values.json';
import { BusinessEntry } from '../types/BusinessTypes';
import { getActiveColor } from './AdvancedSearch';

const buttonStyle: React.CSSProperties = {
  border: 'none',
  borderRadius: '16px',
  backgroundColor: '#ddd',
  color: 'black',
  paddingLeft: '7px',
  paddingRight: '7px',
  paddingTop: '3px',
  paddingBottom: '3px',
  marginLeft: '5px',
  textAlign: 'center',
  fontSize: 'small',
};

const dictionary: { [key: string]: string[] } = valueData;

const getCoreValue = (subvalue: string) => {
  return Object.keys(dictionary).find((key) =>
    dictionary[key].includes(subvalue)
  ) as string;
};

const getFormattedInitiative = (val: string, idx: number) => {
  const coreValue = getCoreValue(val);
  const buttonColor = getActiveColor(coreValue);
  return (
    <span style={{ ...buttonStyle, backgroundColor: buttonColor }} key={idx}>
      {val}
    </span>
  );
};

type BusinessProps = {
  business: BusinessEntry;
};

export const Business: React.FC<BusinessProps> = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.business.Title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.business.Subheading}
        </Card.Subtitle>
        <Card.Subtitle
          style={{ alignItems: 'center', display: 'flex' }}
          className='mb-2 text-muted'
        >
          Values:
          <div
            className='invisible-scrollbar'
            style={{
              alignItems: 'center',
              display: 'flex',
              whiteSpace: 'nowrap',
              overflow: 'scroll',
            }}
          >
            {props.business.Initiatives?.map((val, idx) =>
              getFormattedInitiative(val, idx)
            )}
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
