import Rational from "main/rationals/Rational";

const parseRationalsFromUserInput = (userInput) => {
    const rationals = userInput.map((value) => {
    const numerator = parseInt(value.numerator);
    const denominator = parseInt(value.denominator);

	    if(isNaN(numerator) || isNaN(denominator))
	    {
		    throw new Error("not a number");
	    }
    return new Rational(numerator, denominator);
  });

  return rationals;
};

const addRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.sum(firstRational, secondRational);

  return result;
};

const subtractRationalsFromUserInput = (userInput) => {
  return 42;
};

const multiplyRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(userInput);
	return Rational.multiply(firstRational, secondRational);
};

const divideRationalsFromUserInput = (userInput) => {
  return 42;
};

export {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
  parseRationalsFromUserInput,
};
