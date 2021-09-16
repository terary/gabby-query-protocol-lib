import { PredicateFormulaEditorFactory } from "./PredicateFormulaEditorFactory";
import { PredicateFormulaEditor } from "./PredicateFormulaEditor";
import type { PredicateFormulaEditorJson } from "./types";
import { blueSkiesJson } from "../test-case-files/harden-cases";
import { TPredicateSubjectDictionaryJson } from "../PredicateSubjects";
import { predicateFormula } from "../../examples";
import { TPredicateProperties } from "../common";
import { PredicateTreeError } from "../Predicates";

describe("PredicateFormulaEditor", () => {
  it("Should call fromJson", () => {
    const fromJsonSpy = jest.spyOn(PredicateFormulaEditor, "fromJson");
    const willThrow = () => {
      PredicateFormulaEditorFactory.fromJson({} as PredicateFormulaEditorJson);
    };

    expect(willThrow).toThrow(PredicateTreeError);
    expect(willThrow).toThrow(
      "Can not build tree from undefined subjection dictionary json."
    );
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

  it("Should allow undefined predicate tree", () => {
    const PredicateFormulaEditor = PredicateFormulaEditorFactory.fromJson({
      subjectDictionaryJson:
        blueSkiesJson.subjectDictionaryJson as TPredicateSubjectDictionaryJson,
    });

    const predicateTree = PredicateFormulaEditor.predicateTree;
    const rootNodeId = PredicateFormulaEditor.rootNodeId;
    const childrenIds = predicateTree.getChildrenIds(rootNodeId);
    const rootNode = predicateTree.getPredicateById(rootNodeId) as TPredicateProperties;

    expect(childrenIds).toStrictEqual([]);
    expect(rootNode.operator).toBeDefined();
    expect(rootNode.subjectId).toBeDefined();
    expect(rootNode.value).toBeDefined();

    const fromJsonSpy = jest.spyOn(PredicateFormulaEditor, "toJson");
    PredicateFormulaEditorFactory.toJson(PredicateFormulaEditor);
  });
});
