const R = require("ramda");
const expect = require("expect");

const quiz = require("../../lib/quiz");

describe("Course 1 - Ramda Basics :: Lesson 1 - Intro", () => {
  describe("1. Ramda is... ?", () => {
    const statements = {
      a: "an eastern cuisine",
      b: "a framework to make websites",
      c: "a library, consisting of many pure functions that operate on common JS data structures",
      d: "the pinnacle of functional programming",
    };
    const yourAnswer = "_"; // a, b, c, or d
    const answer = quiz.selectAnswer(statements, yourAnswer);

    if (yourAnswer === "_") {
      it("Select an answer", () => {
        expect(yourAnswer).toMatch("a|b|c|d");
      });
    }

    it(answer, () => {
      expect(yourAnswer + ": " + answer).toBe(quiz.expectChoice(
        statements,
        63,
      ));
    });
  });

  describe("2. Ramda is designed to operate on which data types?", () => {
    const answers = [
      "arr___",
      "___ects",
      "str____",
      "num____",
      "____tions",
    ];

    if (R.any(R.contains("_"), answers)) {
      it("List data types", () => {
        throw new Error("Fill in the blanks");
      });
    }

    ["arrays", "objects", "strings", "numbers", "functions"]
      .forEach(typestr => it(typestr, () => {
        expect(answers).toContain(typestr);
      }));
  });

  describe("3. Ramda functions are immutable", () => {
    it("it does not mutate, or change data, but instead creates new data", () => {
      const plainInput = { a: 0, b: 1, c: 2 };
      const plainOutput = Object.assign(plainInput, { d: 3 });
      const ramdaInput = { a: 0, b: 1, c: 2 };
      const ramdaOutput = R.assoc("d", 3, ramdaInput);

      // given...
      expect(plainInput).toEqual(plainOutput);

      // comment out the test that's wrong
      expect(ramdaOutput).toEqual(ramdaInput);
      expect(ramdaOutput).not.toEqual(ramdaInput);
    });
  });

  describe("4. The common building blocks and likely most commonly used functions are", () => {
    const yourAnswers = [
      "red___",
      "fil___",
      "_ap",
      "i___tity",
      "_ipe",
      "com___e",
    ];

    if (R.any(R.contains("_"), yourAnswers)) {
      it("Fill in the blanks", () => {
        throw new Error("Please fill in the blanks");
      });
    }

    ["reduce", "filter", "map", "identity", "pipe", "compose"]
      .forEach(fnName => it(fnName, () => {
        expect(yourAnswers).toContain(fnName);
      }));
  });

  describe("5. map", () => {
    describe("5.1 Map is a higher-order-function meaning it...", () => {
      const statements = {
        a: "requires an interface very specific to ramda",
        b: "takes a function as arguments or returns a function",
        c: "renders a verdict in a court of its peers",
        d: "sorts arguments by type",
      };
      const yourAnswer = "_"; // a, b, c, or d
      const answer = quiz.selectAnswer(statements, yourAnswer);

      if (yourAnswer === "_") {
        it("Select an answer", () => {
          throw new Error("No answer selected");
        });
      }

      it(answer, () => {
        expect(answer).toContain("function");
      });
    });

    describe("5.2 Takes a function and an array and returns an array", () => {
      // fix the broken program...
      it("Should multiply each item by 2", () => {
        const numbers = [1, 2, 3, 4];
        const solution = R.map(multiplyBy2, numbers);

        function multiplyBy2 (x) {
          throw new Error("This function is incomplete");
        }
        expect(solution).toEqual([
          2,
          4,
          6,
          8,
        ]);
      });
    });
  });
});
