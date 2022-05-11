import { useEffect, useState } from 'react';
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa';

type AdvancedSearchProps = {
  searchComponent: string;
  setSearchComponent: React.Dispatch<React.SetStateAction<string>>;
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
};

// type ValueEntry = {
//   Title: string;
//   Values: string[];
// };

export const AdvancedSearch = (props: AdvancedSearchProps) => {
  const [diversityVals, setDiversityVals] = useState<string[]>([]);
  const [sustainabilityVals, setSustainabilityVals] = useState<string[]>([]);
  const [communityVals, setCommunityVals] = useState<string[]>([]);
  const [ethicalVals, setEthicalVals] = useState<string[]>([]);
  //const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    props.setValues(
      diversityVals
        .concat(sustainabilityVals)
        .concat(communityVals)
        .concat(ethicalVals)
    );
  }, [diversityVals, sustainabilityVals, communityVals, ethicalVals]);

  /* const formatButtons = (values : ValueEntry[]) => {
        return (
                values.map(
                    (category) => {
                        return (
                            <>
                                <h3>{category.Title}</h3>
                                <ToggleButtonGroup key={category.Title} type="checkbox" style={{flexWrap: "wrap"}}>
                                {category.Values.map( (value : string) =>
                                    {
                                        return (
                                            <>
                                                <ToggleButton id={"id"+value.toString()} variant="outline-secondary" value={value}>
                                                    {value}
                                                </ToggleButton>
                                            </>
                                        )
                                    })}
                                </ToggleButtonGroup>
                                <br/>
                            </>
                        )
                    })
        )
    } */

  return (
    <>
      <Button variant='light' onClick={() => props.setSearchComponent('basic')}>
        <FaAngleLeft />
        Back to Quick Filter
      </Button>
      <br />
      {/* {formatButtons(valueData)} */}
      <ul>
        <h3>Diversity</h3>
        <ToggleButtonGroup
          type='checkbox'
          size='sm'
          className='mb-2'
          style={{ flexWrap: 'wrap', width: '90%' }}
          onChange={(vals) => setDiversityVals(vals)}
        >
          <ToggleButton
            id='family_owned'
            variant='outline-secondary'
            value={'Family Owned'}
          >
            Family Owned
          </ToggleButton>
          <ToggleButton
            id='female_owned'
            variant='outline-secondary'
            value={'Female Owned'}
          >
            Female Owned
          </ToggleButton>
          <ToggleButton
            id='minority_owned'
            variant='outline-secondary'
            value={'Minority Owned'}
          >
            Minority Owned
          </ToggleButton>
          <ToggleButton
            id='lgbtq_owned'
            variant='outline-secondary'
            value={'LGBTQ Owned'}
          >
            LGBTQ Owned
          </ToggleButton>
          <ToggleButton
            id='black_owned'
            variant='outline-secondary'
            value={'Black Owned'}
          >
            Black Owned
          </ToggleButton>
          <ToggleButton
            id='wheelchair_friendly'
            variant='outline-secondary'
            value={'Wheelchair Friendly'}
          >
            Wheelchair Friendly
          </ToggleButton>
        </ToggleButtonGroup>

        <h3>Community</h3>
        <ToggleButtonGroup
          type='checkbox'
          size='sm'
          className='mb-2'
          style={{ flexWrap: 'wrap', width: '90%' }}
          onChange={(vals) => setCommunityVals(vals)}
        >
          <ToggleButton
            id='charitable_donations'
            variant='outline-secondary'
            value={'Charitable Donations'}
          >
            Charitable Donations
          </ToggleButton>
          <ToggleButton
            id='community_engagement'
            variant='outline-secondary'
            value={'Community Engagement'}
          >
            Community Engagement
          </ToggleButton>
          <ToggleButton
            id='volunteer_efforts'
            variant='outline-secondary'
            value={'Volunteer Efforts'}
          >
            Volunteer Efforts
          </ToggleButton>
        </ToggleButtonGroup>

        <h3>Sustainability</h3>
        <ToggleButtonGroup
          type='checkbox'
          size='sm'
          className='mb-2'
          style={{ flexWrap: 'wrap', width: '90%' }}
          onChange={(vals) => setSustainabilityVals(vals)}
        >
          <ToggleButton
            id='recycling'
            variant='outline-secondary'
            value={'Recycling'}
          >
            Recycling
          </ToggleButton>
          <ToggleButton
            id='waste_reduction'
            variant='outline-secondary'
            value={'Waste Reduction'}
          >
            Waste Reduction
          </ToggleButton>
          <ToggleButton
            id='renewable_energy_sources'
            variant='outline-secondary'
            value={'Renewable Energy Sources'}
          >
            Renewable Energy Sources
          </ToggleButton>
          <ToggleButton
            id='LEED_certified'
            variant='outline-secondary'
            value={'LEED Certified'}
          >
            LEED Certified
          </ToggleButton>
          <ToggleButton
            id='sustainable_products'
            variant='outline-secondary'
            value={'Sustainable Products'}
          >
            Sustainable Products
          </ToggleButton>
          <ToggleButton
            id='vegan_friendly'
            variant='outline-secondary'
            value={'Vegan Friendly'}
          >
            Vegan Friendly
          </ToggleButton>
          <ToggleButton
            id='vegetarian_friendly'
            variant='outline-secondary'
            value={'Vegetarian Friendly'}
          >
            Vegetarian Friendly
          </ToggleButton>
          <ToggleButton
            id='vegan_products'
            variant='outline-secondary'
            value={'Vegan Products'}
          >
            Vegan Products
          </ToggleButton>
          <ToggleButton
            id='vintage'
            variant='outline-secondary'
            value={'Vintage'}
          >
            Vintage
          </ToggleButton>
        </ToggleButtonGroup>

        <h3>Ethical</h3>
        <ToggleButtonGroup
          type='checkbox'
          size='sm'
          className='mb-2'
          style={{ flexWrap: 'wrap', width: '90%' }}
          onChange={(vals) => setEthicalVals(vals)}
        >
          <ToggleButton
            id='ethical_supply_chain'
            variant='outline-secondary'
            value={'Ethical Supply Chain'}
          >
            Ethical Supply Chain
          </ToggleButton>
          <ToggleButton
            id='handmade'
            variant='outline-secondary'
            value={'Handmade'}
          >
            Handmade
          </ToggleButton>
          <ToggleButton
            id='animal_cruelty_free'
            variant='outline-secondary'
            value={'Animal Cruelty Free'}
          >
            Animal Cruelty Free
          </ToggleButton>
          <ToggleButton
            id='locally_sourced'
            variant='outline-secondary'
            value={'Locally Sourced'}
          >
            Locally Sourced
          </ToggleButton>
        </ToggleButtonGroup>
      </ul>
    </>
  );
};

export default AdvancedSearch;
