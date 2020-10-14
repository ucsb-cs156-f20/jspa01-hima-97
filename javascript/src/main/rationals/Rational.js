import { gcd, lcm } from "./Helpers";

export default class Rational {
  constructor(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error(
        `Incorrect types passed to Rational constructor; got ${typeof numerator} and ${typeof denominator}`
      );
    }

    this.numerator = Math.trunc(numerator);
    this.denominator = Math.trunc(denominator);
    if(this.denominator === 0) {
	throw new Error("Denominator is zero");
    } 
    if (this.numerator !== 0) {
      const greatestCommonDivisor = gcd(this.numerator, this.denominator);
      this.numerator /= greatestCommonDivisor;
      this.denominator /= greatestCommonDivisor;
    }
	if (this.denominator < 0)
	  {
		  this.numerator *=  -1;
		  this.denominator *=  -1;
	  }
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
  plus(other) {
    Rational.verifyIsRational(other);
    if (this.numerator === 0)
      return new Rational(other.numerator, other.denominator);
    if (other.numerator === 0)
      return new Rational(this.numerator, this.denominator);

    const numGCD = gcd(this.numerator, other.numerator);
    const denomGCD = gcd(this.denominator, other.denominator);

    const numerator =
      (this.numerator / numGCD) * (other.denominator / denomGCD) +
      (other.numerator / numGCD) * (this.denominator / denomGCD);
    const denominator = lcm(this.denominator, other.denominator);

    return new Rational(numerator, denominator);
  }

  static sum(first, second) {
    Rational.verifyIsRational(first);
    Rational.verifyIsRational(second);

    return first.plus(second);
  }

  times(other) {
    const myNumerator =  this.numerator * other.numerator;
    const myDenominator = this.denominator * other.denominator;
    const myRational = new Rational(myNumerator, myDenominator);
    return myRational;
  }

  static multiply(first, second) {
    return first.times(second);
  }

  minus(other) {
    const myRational = this.plus(other.times(new Rational(-1,1)));
	  return myRational;
  }

  static subtract(first, second) {
    return first.minus(second);
  }

  reciprocal() {
    if(this.denominator === 0)
	  {
		  throw new Error("Denominator is going to be zero");
	  }
	  return new Rational(this.denominator, this.numerator); 
  }

  dividedBy(other) {
    return this.times(other.reciprocal()); 
  }

  static quotient(first, second) {
    return first.dividedBy(second);
  }

  static verifyIsRational(object) {
    if (!(object instanceof Rational)) {
      throw new Error(`Not a Rational object; instead was ${object.__proto__}`);
    }
    return true;
  }
}
