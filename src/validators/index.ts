import { NoSingleChildRule } from "./NoSingleChildRule";
import { ValidateAllPredicatesAgainstOperator } from "./ValidateAllPredicatesAgainstOperator";
import { ValidatePredicateAgainstOperator } from "./ValidatePredicateAgainstOperator";
import { ValidateSubjectDictionary } from "./ValidateSubjectDictionary";
import type { TValidatorResponse } from "./types";
import type { IValidatePredicateAgainstOperator } from "./ValidatePredicateAgainstOperator";

export const Validators = {
  ValidateAllPredicatesAgainstOperator,
  NoSingleChildRule,
  ValidatePredicateAgainstOperator,
  ValidateSubjectDictionary,
};

export type { TValidatorResponse, IValidatePredicateAgainstOperator };
