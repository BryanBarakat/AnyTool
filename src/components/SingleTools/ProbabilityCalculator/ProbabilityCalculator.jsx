import React, { useState } from "react";
import {
  DefaultTool,
  DefaultButton,
  DefaultInput,
  DefaultTable,
  Footer,
  ErrorMessage,
  DefaultCheckBox,
} from "../../../utils/Imports/Imports";
import "./ProbabilityCalculator.css";

export const ProbabilityCalculator = () => {
  const [possibleOutcomes, setPossibleOutcomes] = useState("");
  const [eventsOccurred, setEventsOccurred] = useState("");
  const [probabilityEventOccurs, setProbabilityEventOccurs] = useState("");
  const [probabilityEventNotOccurs, setProbabilityEventNotOccurs] =
    useState("");

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleCalculate = () => {
    if (possibleOutcomes !== "" && eventsOccurred !== "") {
      const possibleOutcomesValue = parseFloat(possibleOutcomes);
      const eventsOccurredValue = parseFloat(eventsOccurred);

      const probabilityEventOccursValue =
        eventsOccurredValue / possibleOutcomesValue;
      const probabilityEventNotOccursValue = 1 - probabilityEventOccursValue;

      setProbabilityEventOccurs(probabilityEventOccursValue.toFixed(2));
      setProbabilityEventNotOccurs(probabilityEventNotOccursValue.toFixed(2));
    } else {
      setWarning(true);
      setWarningMessage("Fill in the input fields");
    }
  };

  const handleReset = () => {
    setPossibleOutcomes("");
    setEventsOccurred("");
    setProbabilityEventOccurs("");
    setProbabilityEventNotOccurs("");
  };

  return (
    <div>
      <DefaultTool
        title="Probability Calculator"
        description="Calculate the probability of events that occur and events that don't occur"
      ></DefaultTool>
      <div className="container-probability-calculator">
        <DefaultInput
          label="Number of possible outcomes"
          width="70vw"
          height="3vh"
          type="number"
          value={possibleOutcomes}
          onChange={(e) => setPossibleOutcomes(e.target.value)}
        ></DefaultInput>
        <DefaultInput
          label="Number of events occurred"
          width="70vw"
          height="3vh"
          type="number"
          value={eventsOccurred}
          onChange={(e) => setEventsOccurred(e.target.value)}
        ></DefaultInput>
        <div className="buttons-probability-calculator">
          <DefaultButton title="Calculate" onClick={handleCalculate} />
          <DefaultButton title="Reset" onClick={handleReset} />
        </div>
      </div>
      {probabilityEventOccurs && probabilityEventNotOccurs && (
        <div className="results-probability-calculator">
          <DefaultTable
            rows={[
              ["Probability of event that occurs:", probabilityEventOccurs],
              [
                "Probability of event that does not occur:",
                probabilityEventNotOccurs,
              ],
            ]}
          ></DefaultTable>
        </div>
      )}
      {warning && (
        <ErrorMessage
          removeError={() => setWarning(false)}
          message={warningMessage}
        ></ErrorMessage>
      )}
      <Footer></Footer>
    </div>
  );
};

export default ProbabilityCalculator;
