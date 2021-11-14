/* eslint-disable import/prefer-default-export */
import { PredicateSubjectDictionary } from "./PredicateSubjectDictionary";
import { PredicateSubjectDictionaryFactory } from "./PredicateSubjectDictionaryFactory";
import type {
  TOperatorOptions,
  TPredicateJunctionOperator,
  TPredicateSubjectAsColumnDefinition,
  TPredicateSubjectWithId,
  TPredicateSubjectDictionary,
  TPredicateSubjectDictionaryJson,
  TPredicateSubjectOptionsList,
  TPredicateOperator,
  TPredicateSubjectProperties,
  TPredicateSubjectPropertiesJson,
  TValidOperatorList,
} from "./type";
import type { IPredicateSubjectDictionary } from "./IPredicateSubjectDictionary";

// PredicateSubjectDictionary is class, so does that make it a type?
// also should it be an Interface instead?
export { PredicateSubjectDictionary, PredicateSubjectDictionaryFactory };
export type {
  IPredicateSubjectDictionary,
  TOperatorOptions,
  TPredicateJunctionOperator,
  TPredicateSubjectAsColumnDefinition,
  TPredicateSubjectWithId,
  TPredicateSubjectDictionaryJson,
  TPredicateSubjectOptionsList,
  TPredicateOperator,
  TPredicateSubjectProperties,
  TPredicateSubjectPropertiesJson,
  TValidOperatorList,
};
