import React from "react";
// 1
import { divideRationalsFromUserInput } from "main/utils/RationalHelpers";
import Calculator from "main/components/Calculator";

const Divide = () => {
  const props = {
    // 3
    calculateFromUserInput: divideRationalsFromUserInput,
    title: "Divide",
    subtitle:
      "Fill in the numerator and denominator of two rational numbers (fractions) below, then click the Calculate button to see the result.",
    sign: "/",
  };
  // 4
  return <Calculator {...props} />;
};

export default Divide;
