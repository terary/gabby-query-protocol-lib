import { TPredicateProperties } from "gabby-query-protocol-lib";
import { simplePredicateToJsExpression, functionBodyWrapper } from "./matching-functions";

describe("matcher-functions", () => {
  describe("Simple operators", () => {
    describe("$eq", () => {
      it("Should return snippet appropriate for logic comparison (string) ", () => {
        const predicate = {
          operator: "$eq",
          value: "3",
          subjectId: "parameter",
        } as TPredicateProperties;
        const expression = simplePredicateToJsExpression(predicate, "string") || "";
        const matcher = expressionToFunction(expression, predicate.subjectId);
        expect(matcher({ parameter: "3" })).toBe(true);
        expect(matcher({ parameter: 3 })).toBe(false);
        expect(matcher({ parameter: "2" })).toBe(false);
      });
      it("Should return snippet appropriate for logic comparison (integer) ", () => {
        const predicate = {
          operator: "$eq",
          value: 3,
          subjectId: "parameter",
        } as TPredicateProperties;
        const expression = simplePredicateToJsExpression(predicate, "integer") || "";
        const matcher = expressionToFunction(expression, "parameter");
        expect(matcher("3")).toBe(false);
        expect(matcher(3)).toBe(true);
        expect(matcher("2")).toBe(false);
      });
    }); // $eq
  }); //describe('Simple operators'
}); // describe('matcher-functions

const expressionToFunction = (logicTest: string, ...parameters: string[]) => {
  const fnBody = functionBodyWrapper(logicTest, ...parameters);

  return new Function("record", fnBody);
};
