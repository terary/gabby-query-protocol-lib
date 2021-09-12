import { IValidator } from "./types";
import type { IPredicateSubjectDictionary } from "../index";
import { TSerializedPredicateTree } from "../Predicates";
import { isValidJunctionPredicate } from "./isFunctions";
import { ValidatePredicateAgainstOperator } from "./ValidatePredicateAgainstOperator";

export const ValidateAllPredicatesAgainstOperator: IValidator = (
  predicateTreeJson: TSerializedPredicateTree,
  subjectDictionary: IPredicateSubjectDictionary
) => {
  const allErrorMessages: string[] = [];

  Object.entries(predicateTreeJson).forEach(([nodeId, predicateNode]) => {
    if (!isValidJunctionPredicate(predicateNode.payload)) {
      const { errorMessages } = ValidatePredicateAgainstOperator(
        predicateNode.payload,
        subjectDictionary
      );
      allErrorMessages.push(...errorMessages);
    }
  });

  return { hasError: allErrorMessages.length > 0, errorMessages: allErrorMessages };
};
