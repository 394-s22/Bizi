import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import valueData from '../data/values.json';
import communityLogo from '../logos/community.png';
import diversityLogo from '../logos/diversity.png';
import ethicalLogo from '../logos/ethical.png';
import sustainabilityLogo from '../logos/sustainability.png';

type BasicFilterProps = {
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  searchComponent: string;
  setSearchComponent: React.Dispatch<React.SetStateAction<string>>;
};

const dictionary: { [key: string]: string[] } = valueData;

export const BasicFilter = (props: BasicFilterProps) => {
  const getAdvancedFilters = (filterValues: string[]) => {
    const result = filterValues.map((val) => dictionary[val]).flat();
    return result;
  };

  return (
    <>
      <ul>
        <p>Select Your Values</p>
      </ul>
      <div className='text-center'>
        <ToggleButtonGroup
          type='checkbox'
          defaultValue={[]}
          className='mb-2'
          onChange={(val) => {
            props.setAdvancedFilterValues(getAdvancedFilters(val));
          }}
        >
          <ToggleButton
            id='diversity-btn'
            variant='outline-primary'
            value={'Diversity'}
            size='sm'
          >
            <img src={diversityLogo} width='50' height='50' />
            <br></br>
            Diversity
          </ToggleButton>

          <ToggleButton
            id='community-btn'
            variant='outline-primary'
            value={'Community'}
            size='sm'
          >
            <img src={communityLogo} width='50' height='50' />
            <br></br>
            Community
          </ToggleButton>

          <ToggleButton
            id='sustainability-btn'
            variant='outline-primary'
            value={'Sustainability'}
            size='sm'
          >
            <img src={ethicalLogo} width='50' height='50' />
            <br></br>
            Sustainability
          </ToggleButton>

          <ToggleButton
            id='ethical-btn'
            variant='outline-primary'
            value={'Ethical'}
            size='sm'
          >
            <img src={sustainabilityLogo} width='50' height='50' />
            <br></br>
            Ethical
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <ul>
        <Button
          variant='light'
          onClick={() => props.setSearchComponent('advanced')}
        >
          Advanced Filter +
        </Button>
      </ul>
    </>
  );
};

export default BasicFilter;
