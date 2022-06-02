import { useEffect, useState } from "react";
import {
  Accordion,
  Form,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import valueData from "../data/values.json";
import communityLogo from "../logos/community.png";
import diversityLogo from "../logos/diversity.png";
import ethicalLogo from "../logos/ethical.png";
import sustainabilityLogo from "../logos/sustainability.png";
import { getActiveColor } from "../utilities/values";

type AdvancedSearchProps = {
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

const valueDictionary: { [key: string]: string[] } = valueData;

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#ddd",
  border: "none",
  color: "black",
  padding: "5px 10px",
  textAlign: "center",
  margin: "2px 1px",
  borderRadius: "16px",
};

export const AdvancedSearch = (props: AdvancedSearchProps) => {
  const [filterValues, setFilterValues] = useState<string[]>([] as string[]);
  useEffect(() => {
    let basicFilters: string[] = [];
    for (const [basic, group_elements] of Object.entries(valueDictionary)) {
      const basicFilter = changeBasicFilter(group_elements, basic);
      if (basicFilter) basicFilters.push(basic); // also update checkbox here?
    }
    setFilterValues(basicFilters);
  }, [props.advancedFilterValues]);

  const changeBasicFilter = (group_elements: string[], basic: string) => {
    return group_elements.some((e) => props.advancedFilterValues.includes(e));
  };

  const toggleButton = (val: string) => {
    const state = props.advancedFilterValues.includes(val);
    let result = props.advancedFilterValues;
    if (state) {
      result = result.filter((v) => v !== val);
    } else result = result.concat(val);
    props.setAdvancedFilterValues(result);
  };

  const setSingleCheckbox = (filter: string, advFilters: string[]) => {
    // getting state
    const status = filterValues.includes(filter);

    // setting advanced filters
    if (!status)
      props.setAdvancedFilterValues(
        props.advancedFilterValues.concat(advFilters)
      );
    else
      props.setAdvancedFilterValues(
        props.advancedFilterValues.filter((value) => {
          return !advFilters.includes(value);
        })
      );
  };

  const logos = [diversityLogo, communityLogo, sustainabilityLogo, ethicalLogo];

  return (
    <>
      {
        <Accordion alwaysOpen={true} >
          {Object.entries(valueDictionary).map((entry, catID) => {
            return (
              <div key={catID} className="mx-4 mb-2">
                <Accordion.Item eventKey={catID.toString()}>
                  <Accordion.Header>
                    <Form.Check
                      checked={filterValues.includes(entry[0])}
                      className="mx-1"
                      onClick={(
                        e: React.MouseEvent<HTMLInputElement, MouseEvent>
                      ) => {
                        e.stopPropagation();
                        props.setAdvancedFilterValues(entry[1]);
                      }}
                      onChange={() => setSingleCheckbox(entry[0], entry[1])}
                    />
                    {
                      <img
                        src={logos[catID]}
                        width="50"
                        height="50"
                        alt={`${entry[0]} logo`}
                      />
                    }
                    {entry[0]}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ToggleButtonGroup
                      type="checkbox"
                      style={{ flexWrap: "wrap" }}
                    >
                      {entry[1].map((value, valID) => {
                        const state =
                          props.advancedFilterValues.includes(value);
                        const activeColor = getActiveColor(entry[0]);
                        return (
                          <ToggleButton
                            key={valID}
                            className="mx-1"
                            style={{
                              ...buttonStyle,
                              backgroundColor: state ? activeColor : "#ddd",
                              color: state ? "white" : "black",
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
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            );
          })}
        </Accordion>
      }
    </>
  );
};

export default AdvancedSearch;
