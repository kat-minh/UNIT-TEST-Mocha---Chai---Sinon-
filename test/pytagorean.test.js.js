const chai = require("chai");
const expect = chai.expect;
const isPythagoreanTriple = require("../../src/isPythagoreanTriple"); // Đường dẫn đến file chứa hàm

// Data-driven test cases
const testCases = [
  { a: 3, b: 4, c: 5, expected: true }, // 3² + 4² = 9 + 16 = 25 = 5²
  { a: 5, b: 12, c: 13, expected: true }, // 5² + 12² = 25 + 144 = 169 = 13²
  { a: 8, b: 15, c: 17, expected: true }, // 8² + 15² = 64 + 225 = 289 = 17²
  { a: 7, b: 24, c: 25, expected: true }, // 7² + 24² = 49 + 576 = 625 = 25²
  { a: 1, b: 1, c: 2, expected: false }, // 1² + 1² ≠ 2² (not a Pythagorean triple)
];

describe("Pythagorean Theorem Unit Tests (DDT)", function () {
  testCases.forEach(({ a, b, c, expected }) => {
    it(`should return ${expected} for a=${a}, b=${b}, c=${c}`, function () {
      const result = isPythagoreanTriple(a, b, c);
      expect(result).to.equal(expected);
    });
  });
});
