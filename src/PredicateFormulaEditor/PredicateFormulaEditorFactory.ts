import { PredicateFormulaEditor } from "./PredicateFormulaEditor";
import type { PredicateFormulaEditorJson } from "./types";
import type { TPredicateSubjectDictionaryJson } from "../PredicateSubjects";
import type { TPredicateTreeFactoryOptions } from "../Predicates";

export const PredicateFormulaEditorFactory = {
  fromEmpty: (
    subjectDictionaryJson: TPredicateSubjectDictionaryJson,
    options?: TPredicateTreeFactoryOptions
  ): PredicateFormulaEditor => {
    return PredicateFormulaEditor.fromEmpty(subjectDictionaryJson, options);
  },

  fromJson: (
    json: PredicateFormulaEditorJson,
    options?: TPredicateTreeFactoryOptions
  ): PredicateFormulaEditor => {
    return PredicateFormulaEditor.fromJson(json, options);
  },

  toJson: (
    predicateFormulaEditor: PredicateFormulaEditor
  ): PredicateFormulaEditorJson => {
    return predicateFormulaEditor.toJson();
  },
};
