import {
  PredicateTree,
  PredicateTreeFactory,
  VisitorNodeType,
  PredicateTreeError,
} from "./Predicates";
import {
  PredicateFormulaEditorFactory,
  PredicateFormulaEditor,
} from "./PredicateFormulaEditor";
import type { PredicateFormulaEditorJson } from "./PredicateFormulaEditor";

import { CONSTS } from "./common";
import { EXAMPLE_JSON_BLUE_SKIES } from "./external-files";
import {
  PredicateSubjectDictionary,
  PredicateSubjectDictionaryFactory,
} from "./PredicateSubjects";
import type { TSerializedPredicateTree, IVisitorPredicateTree } from "./Predicates";

import type { IPredicateTree } from "./Predicates/PredicateTree";
import { Validators } from "./validators";

import type {
  TOperatorOptions,
  TPredicateJunctionOperator,
  TPredicateOperator,
  TPredicateSubjectAsColumnDefinition,
  IPredicateSubjectDictionary,
  TPredicateSubjectDictionaryJson,
  TPredicateSubjectOptionsList,
  TPredicateSubjectProperties,
  TPredicateSubjectPropertiesJson,
  TPredicateSubjectWithId,
  TValidOperatorList,
} from "./PredicateSubjects/index";

import type {
  TPredicateJunctionPropsWithChildIds,
  TPredicateProperties,
  TPredicatePropertiesArrayValue,
  TPredicatePropertiesJunction,
  TPredicateNode,
  TPredicateNodeJson,
  TValueLabelList,
} from "./common/type";

export {
  CONSTS,
  EXAMPLE_JSON_BLUE_SKIES,
  PredicateFormulaEditor,
  PredicateFormulaEditorFactory,
  PredicateTree,
  PredicateTreeError,
  PredicateTreeFactory,
  PredicateSubjectDictionary,
  PredicateSubjectDictionaryFactory,
  Validators,
};

export type {
  IPredicateSubjectDictionary,
  IPredicateTree, // to be used instead of PredicateTree
  IVisitorPredicateTree,
  TOperatorOptions,
  PredicateFormulaEditorJson,
  TPredicateJunctionPropsWithChildIds,
  TPredicateNode, // this is an alias for any of the three predicate
  TPredicateNodeJson, // json version of TPredicateNode - all properties optional and types mixed
  TPredicateProperties, // types TPredicateProperties Array/Junction
  TPredicatePropertiesArrayValue,
  TPredicatePropertiesJunction,
  TPredicateOperator, // type to force operator in '$eq', '$lt'...valid operators
  TPredicateJunctionOperator, // $and|$or
  TPredicateSubjectAsColumnDefinition,
  TPredicateSubjectWithId, // used for importing flat objects  - maybe should be called json
  TPredicateSubjectDictionaryJson, // file structure to import SubjectDictionary
  TSerializedPredicateTree, // poorly named should be TPredicateTreeJson - legacy used 'serial'
  // when probably json would have been better word choice.

  TPredicateSubjectProperties, // Potential predicate subject (template-ish, not actual predicate)
  TPredicateSubjectPropertiesJson, // json equivalent, all props optional (importing data)
  TPredicateSubjectOptionsList, // some predicate operators have list values, aka one of options
  TValidOperatorList, // to motivate compiler to enforce 'one of valid operator' logic
  TValueLabelList, // require for validate de-serialization
  VisitorNodeType,
};
