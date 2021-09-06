import { TPredicateSubjectDictionaryJson } from "../PredicateSubjects";
import { IValidator } from "./types";
import { ValidatePredicateSubject } from "./ValidatePredicateSubject";

//const x:  TPredicateSubjectDictionaryJson
export const ValidateSubjectDictionary: IValidator = (
  subjects: TPredicateSubjectDictionaryJson
) => {
  const allErrors: string[] = [];
  if (Object.keys(subjects || {}).length === 0) {
    allErrors.push("Subject Dictionary has no subjects");
  }

  Object.entries(subjects).forEach(([subjectId, subjectProperties]) => {
    const { errorMessages } = ValidatePredicateSubject(subjectId, subjectProperties);
    allErrors.push(...errorMessages);
  });

  return {
    hasError: allErrors.length > 0,
    errorMessages: allErrors,
  };
};
