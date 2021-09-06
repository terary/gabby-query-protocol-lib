import { PredicateFormulaEditorFactory } from "./PredicateFormulaEditorFactory";
import { PredicateFormulaEditor } from "./PredicateFormulaEditor";
import type { PredicateFormulaEditorJson } from "./types";
import { blueSkiesJson } from "../test-case-files/harden-cases";
import { TPredicateSubjectDictionaryJson } from "../PredicateSubjects";

describe("PredicateFormulaEditor", () => {
  it("Should call fromJson", () => {
    const fromJsonSpy = jest.spyOn(PredicateFormulaEditor, "fromJson");
    const willThrow = () => {
      PredicateFormulaEditorFactory.fromJson({} as PredicateFormulaEditorJson);
    };
    expect(willThrow).toThrow("Cannot convert undefined or null to object");
    expect(fromJsonSpy).toBeCalled();
  });
  it("Should call fromEmpty", () => {
    const fromJsonSpy = jest.spyOn(PredicateFormulaEditor, "fromEmpty");
    PredicateFormulaEditorFactory.fromEmpty(
      blueSkiesJson.subjectDictionaryJson as TPredicateSubjectDictionaryJson
    );
    expect(fromJsonSpy).toBeCalled();
  });

  it("Should call toJson", () => {
    const PredicateFormulaEditor = PredicateFormulaEditorFactory.fromJson(
      blueSkiesJson as PredicateFormulaEditorJson
    );

    const fromJsonSpy = jest.spyOn(PredicateFormulaEditor, "toJson");
    PredicateFormulaEditorFactory.toJson(PredicateFormulaEditor);

    expect(fromJsonSpy).toBeCalled();
  });
});
