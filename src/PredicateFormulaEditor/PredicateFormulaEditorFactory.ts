import { PredicateFormulaEditor } from "./PredicateFormulaEditor";
import type { PredicateFormulaEditorJson } from "./types";
import type { TPredicateSubjectDictionaryJson } from "../PredicateSubjects";
import type { TPredicateTreeFactoryOptions } from "../Predicates";
export namespace PredicateFormulaEditorFactory {
  // TODO - *tmc* - probably more sensible to have
  // fromJson({x:TSubjectDictionary, y?:predicateTree})
  // and determine which to call, fromEmpty or fromJson
  //
  // TODO - *tmc* - do away with namespace.
  //  try something like const x: {fromJson:IImporter<jsonType,outType = ()=>{....}}
  //  *maybe* you can implement the import/export interfaces and create static class type thing
  //
  export function fromEmpty(
    subjectDictionaryJson: TPredicateSubjectDictionaryJson,
    options?: TPredicateTreeFactoryOptions
  ): PredicateFormulaEditor {
    return PredicateFormulaEditor.fromEmpty(subjectDictionaryJson, options);
  }

  export function fromJson(
    json: PredicateFormulaEditorJson,
    options?: TPredicateTreeFactoryOptions
  ): PredicateFormulaEditor {
    return PredicateFormulaEditor.fromJson(json, options);
  }

  export function toJson(
    predicateFormulaEditor: PredicateFormulaEditor
  ): PredicateFormulaEditorJson {
    return predicateFormulaEditor.toJson();
  }
}
