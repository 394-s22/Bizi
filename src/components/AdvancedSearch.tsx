import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

type AdvancedSearchProps = {
  searchComponent: string;
  setSearchComponent: React.Dispatch<React.SetStateAction<string>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const AdvancedSearch = (props: AdvancedSearchProps) => {
  return (
    <>
      <Button variant="light" onClick={() => props.setSearchComponent("basic")}>
        <FaAngleLeft />
        Back to Quick Filter
      </Button>
      <br />
      <ul>
        <h3>Diversity</h3>
        <ToggleButtonGroup
          type="checkbox"
          size="sm"
          className="mb-2"
          style={{ flexWrap: "wrap", width: "90%" }}
          onChange={(vals: string[]) =>
            props.setAdvancedFilterValues(
              props.advancedFilterValues.concat(vals)
            )
          }
        >
          <ToggleButton
            id="family_owned"
            active={props.advancedFilterValues.includes("Family Owned")}
            variant="outline-secondary"
            value={"Family Owned"}
          >
            Family Owned
          </ToggleButton>
          <ToggleButton
            id="female_owned"
            active={props.advancedFilterValues.includes("Female Owned")}
            variant="outline-secondary"
            value={"Female Owned"}
          >
            Female Owned
          </ToggleButton>
          <ToggleButton
            id="minority_owned"
            active={props.advancedFilterValues.includes("Minority Owned")}
            variant="outline-secondary"
            value={"Minority Owned"}
          >
            Minority Owned
          </ToggleButton>
          <ToggleButton
            id="lgbtq_owned"
            active={props.advancedFilterValues.includes("LGBTQ Owned")}
            variant="outline-secondary"
            value={"LGBTQ Owned"}
          >
            LGBTQ Owned
          </ToggleButton>
          <ToggleButton
            id="black_owned"
            active={props.advancedFilterValues.includes("Black Owned")}
            variant="outline-secondary"
            value={"Black Owned"}
          >
            Black Owned
          </ToggleButton>
          <ToggleButton
            id="wheelchair_friendly"
            active={props.advancedFilterValues.includes("Wheelchair Friendly")}
            variant="outline-secondary"
            value={"Wheelchair Friendly"}
          >
            Wheelchair Friendly
          </ToggleButton>
        </ToggleButtonGroup>

        <h3>Community</h3>
        <ToggleButtonGroup
          type="checkbox"
          size="sm"
          className="mb-2"
          style={{ flexWrap: "wrap", width: "90%" }}
          onChange={(vals: string[]) =>
            props.setAdvancedFilterValues(
              props.advancedFilterValues.concat(vals)
            )
          }
        >
          <ToggleButton
            id="charitable_donations"
            active={props.advancedFilterValues.includes("Charitable Donations")}
            variant="outline-secondary"
            value={"Charitable Donations"}
          >
            Charitable Donations
          </ToggleButton>
          <ToggleButton
            id="community_engagement"
            active={props.advancedFilterValues.includes("Community Engagement")}
            variant="outline-secondary"
            value={"Community Engagement"}
          >
            Community Engagement
          </ToggleButton>
          <ToggleButton
            id="volunteer_efforts"
            active={props.advancedFilterValues.includes("Volunteer Efforts")}
            variant="outline-secondary"
            value={"Volunteer Efforts"}
          >
            Volunteer Efforts
          </ToggleButton>
        </ToggleButtonGroup>

        <h3>Sustainability</h3>
        <ToggleButtonGroup
          type="checkbox"
          size="sm"
          className="mb-2"
          style={{ flexWrap: "wrap", width: "90%" }}
          onChange={(vals: string[]) =>
            props.setAdvancedFilterValues(
              props.advancedFilterValues.concat(vals)
            )
          }
        >
          <ToggleButton
            id="recycling"
            active={props.advancedFilterValues.includes("Recycling")}
            variant="outline-secondary"
            value={"Recycling"}
          >
            Recycling
          </ToggleButton>
          <ToggleButton
            id="waste_reduction"
            active={props.advancedFilterValues.includes("Waste Reduction")}
            variant="outline-secondary"
            value={"Waste Reduction"}
          >
            Waste Reduction
          </ToggleButton>
          <ToggleButton
            id="renewable_energy_sources"
            active={props.advancedFilterValues.includes(
              "Renewable Energy Sources"
            )}
            variant="outline-secondary"
            value={"Renewable Energy Sources"}
          >
            Renewable Energy Sources
          </ToggleButton>
          <ToggleButton
            id="LEED_certified"
            active={props.advancedFilterValues.includes("LEED Certified")}
            variant="outline-secondary"
            value={"LEED Certified"}
          >
            LEED Certified
          </ToggleButton>
          <ToggleButton
            id="sustainable_products"
            active={props.advancedFilterValues.includes("Sustainable Products")}
            variant="outline-secondary"
            value={"Sustainable Products"}
          >
            Sustainable Products
          </ToggleButton>
          <ToggleButton
            id="vegan_friendly"
            active={props.advancedFilterValues.includes("Vegan Friendly")}
            variant="outline-secondary"
            value={"Vegan Friendly"}
          >
            Vegan Friendly
          </ToggleButton>
          <ToggleButton
            id="vegetarian_friendly"
            active={props.advancedFilterValues.includes("Vegetarian Friendly")}
            variant="outline-secondary"
            value={"Vegetarian Friendly"}
          >
            Vegetarian Friendly
          </ToggleButton>
          <ToggleButton
            id="vegan_products"
            active={props.advancedFilterValues.includes("Vegan Products")}
            variant="outline-secondary"
            value={"Vegan Products"}
          >
            Vegan Products
          </ToggleButton>
          <ToggleButton
            id="vintage"
            active={props.advancedFilterValues.includes("Vintage")}
            variant="outline-secondary"
            value={"Vintage"}
          >
            Vintage
          </ToggleButton>
        </ToggleButtonGroup>

        <h3>Ethical</h3>
        <ToggleButtonGroup
          type="checkbox"
          size="sm"
          className="mb-2"
          style={{ flexWrap: "wrap", width: "90%" }}
          onChange={(vals: string[]) =>
            props.setAdvancedFilterValues(
              props.advancedFilterValues.concat(vals)
            )
          }
        >
          <ToggleButton
            id="ethical_supply_chain"
            active={props.advancedFilterValues.includes("Ethical Supply Chain")}
            variant="outline-secondary"
            value={"Ethical Supply Chain"}
          >
            Ethical Supply Chain
          </ToggleButton>
          <ToggleButton
            id="handmade"
            active={props.advancedFilterValues.includes("Handmade")}
            variant="outline-secondary"
            value={"Handmade"}
          >
            Handmade
          </ToggleButton>
          <ToggleButton
            id="animal_cruelty_free"
            active={props.advancedFilterValues.includes("Animal Cruelty Free")}
            variant="outline-secondary"
            value={"Animal Cruelty Free"}
          >
            Animal Cruelty Free
          </ToggleButton>
          <ToggleButton
            id="locally_sourced"
            active={props.advancedFilterValues.includes("Locally Sourced")}
            variant="outline-secondary"
            value={"Locally Sourced"}
          >
            Locally Sourced
          </ToggleButton>
        </ToggleButtonGroup>
      </ul>
    </>
  );
};

export default AdvancedSearch;
