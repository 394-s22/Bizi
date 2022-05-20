import { useEffect } from "react";
import {
  Accordion,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import valueData from "../data/values.json";

type AdvancedSearchProps = {
  filterValues: string[];
  setFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  searchComponent: string;
  setSearchComponent: React.Dispatch<React.SetStateAction<string>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

const valueDictionary: { [key: string]: string[] } = valueData;

export const AdvancedSearch = (props: AdvancedSearchProps) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#ddd",
    border: "none",
    color: "black",
    padding: "5px 10px",
    textAlign: "center",
    margin: "2px 1px",
    borderRadius: "16px",
  };

  useEffect(() => {
    let basicFilters: string[] = [];
    for (const [basic, group_elements] of Object.entries(valueDictionary)) {
      const basicFilter = changeBasicFilter(group_elements, basic);
      if (basicFilter) basicFilters.push(basic);
    }
    props.setFilterValues(basicFilters);
  }, [props.advancedFilterValues]);

  const changeBasicFilter = (group_elements: string[], basic: string) => {
    return group_elements.every((e) => props.advancedFilterValues.includes(e));
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
      <div className="mx-2">
        <Button
          variant="light"
          onClick={() => props.setSearchComponent("basic")}
        >
          <FaAngleLeft />
          Back to Quick Filter
        </Button>
      </div>
      {
        <Accordion alwaysOpen={true}>
          {Object.entries(valueDictionary).map((entry, catID) => {
            console.log("catID", catID);
            console.log("entry", entry);
            return (
              <div key={catID} className="mx-4 mb-2">
                <Accordion.Item eventKey={catID.toString()}>
                  <Accordion.Header>{entry[0]}</Accordion.Header>
                  <Accordion.Body>
                    <ToggleButtonGroup
                      type="checkbox"
                      style={{ flexWrap: "wrap" }}
                    >
                      {entry[1].map((value, valID) => {
                        const state =
                          props.advancedFilterValues.includes(value);
                        return (
                          <ToggleButton
                            key={valID}
                            className="mx-1"
                            style={{
                              ...buttonStyle,
                              backgroundColor: state ? "black" : "#ddd",
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
      {/* {Object.entries(valueDictionary).map((entry, catID) => {
        return (
          <div key={catID} className="mx-4 mb-2">
            <h1>{entry[0]}</h1>
            <ToggleButtonGroup type="checkbox" style={{ flexWrap: "wrap" }}>
              {entry[1].map((value, valID) => {
                const state = props.advancedFilterValues.includes(value);
                return (
                  <ToggleButton
                    key={valID}
                    className="mx-1"
                    style={{
                      ...buttonStyle,
                      backgroundColor: state ? "black" : "#ddd",
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
          </div>
        );
      })} */}
    </>
  );
};

export default AdvancedSearch;
