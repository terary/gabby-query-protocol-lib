import type {
  IPredicateSubjectDictionary,
  IPredicateTree,
  TPredicateSubjectAsColumnDefinition,
  TPredicateSubjectOptionsList,
  TPredicateSubjectWithId,
  IVisitor,
  TPredicateJunctionPropsWithChildIds,
  TPredicateProperties,
  TPredicatePropertiesArrayValue,
  TPredicateNode,
  TSerializedPredicateTree,
} from "../index";
import { IExportToJson } from "../common";
import type { PredicateFormulaEditorJson } from "./types";
import { Validators } from "../validators";
import type { TPredicateSubjectDictionaryJson } from "../PredicateSubjects";
import {
  PredicateTree,
  PredicateSubjectDictionary,
  PredicateSubjectDictionaryFactory,
  PredicateTreeFactory,
} from "../index";
import { PredicateTreeError } from "../Predicates/PredicateTree/PredicateTreeError";
import type { TPredicateTreeFactoryOptions } from "../Predicates";

/**
 * Example usage:
 * [[include:ExamplePredicateFormulaEditor.html]]
 */
export class PredicateFormulaEditor
  implements IExportToJson<PredicateFormulaEditor, PredicateFormulaEditorJson>
{
  private _predicateTree: IPredicateTree;
  private _predicateSubjectDictionary: IPredicateSubjectDictionary;

  private constructor(rootId = "root") {
    this._predicateTree = new PredicateTree(rootId);
    this._predicateSubjectDictionary = new PredicateSubjectDictionary();
  }

  get rootNodeId() {
    return this._predicateTree.rootNodeId;
  }
  get predicateTree(): IPredicateTree {
    // cloning would add a level of projection
    return this._predicateTree;
  }
  get subjectDictionary(): IPredicateSubjectDictionary {
    // cloning would add a level of projection
    return this._predicateSubjectDictionary;
  }

  predicatesAcceptVisitor(visitor: IVisitor<TPredicateNode>): void {
    this._predicateTree.acceptVisitor(visitor);
  }

  predicatesAppend(
    parentId: string,
    predicate: TPredicateProperties | TPredicatePropertiesArrayValue
  ): string {
    // predicatesAppend(parentId: string, predicate: TPredicateNode): string {
    // what happens if client code does: formulaEditor('parentId', {operator: '$and'})
    const { hasError, errorMessages } = Validators.ValidatePredicateAgainstOperator(
      predicate,
      this._predicateSubjectDictionary
    );
    if (hasError) {
      throw new PredicateTreeError(
        "appendPredicate, predicate failed validation",
        errorMessages
      );
    }
    return this._predicateTree.appendPredicate(parentId, predicate);
  }

  predicatesGetById(predicateId: string): TPredicateNode | null {
    return this._predicateTree.getPredicateById(predicateId);
  }

  predicatesGetChildrenIds(predicateId: string): string[] {
    return this._predicateTree.getChildrenIds(predicateId);
  }

  predicatesGetJunctionById(predicateId: string): TPredicateJunctionPropsWithChildIds {
    return this._predicateTree.getPredicateJunctionPropsByIdOrThrow(predicateId);
  }

  predicatesGetPropertiesById(predicateId: string): TPredicateProperties {
    return this._predicateTree.getPredicatePropsByIdOrThrow(predicateId);
  }

  // should be renamed to 'isPredicateBranch'
  predicatesIsBranch(predicateId: string): boolean {
    return this._predicateTree.isBranch(predicateId);
  }

  predicatesRemove(predicateId: string): void {
    // should this check/throw?
    this._predicateTree.removePredicate(predicateId);
  }

  predicatesReplace(predicateId: string, predicate: TPredicateNode): void {
    this._predicateTree.replacePredicate(predicateId, predicate);
  }

  /**
   * Purpose - snapshot of current tree.  Useful for UI state management and/or cloning
   *
   * @returns TSerializedPredicateTree - json representation of the internal tree
   */
  predicatesToJsonTree(): TSerializedPredicateTree {
    return this._predicateTree.toJson();
  }

  // subjects
  subjectsGetDefault(): TPredicateSubjectWithId {
    // I *think* the purpose is for UI, building predicates will
    // need to start with something..
    return this._predicateSubjectDictionary.getDefaultSubject();
  }

  subjectsGetOptionsList(subjectId: string): TPredicateSubjectOptionsList {
    return this._predicateSubjectDictionary.getOptionsList(subjectId);
  }

  subjectsGetAllIds(): string[] {
    return this._predicateSubjectDictionary.getSubjectIds();
  }

  subjectsGetById(subjectId: string): TPredicateSubjectWithId {
    return this._predicateSubjectDictionary.getSubject(subjectId);
  }
  subjectGetColumns(): TPredicateSubjectAsColumnDefinition[] {
    return this._predicateSubjectDictionary.getColumns();
  }

  makeEmptyPredicate(): TPredicateProperties {
    return this.subjectDictionary.makeEmptyPredicate();
  }

  toJson(): PredicateFormulaEditorJson {
    return {
      predicateTreeJson: this._predicateTree.toJson(),
      subjectDictionaryJson: this._predicateSubjectDictionary.toJson(),
    };
  }

  static fromJson(
    json: PredicateFormulaEditorJson,
    options?: TPredicateTreeFactoryOptions
  ): PredicateFormulaEditor {
    const hpm = new PredicateFormulaEditor();
    hpm._predicateSubjectDictionary = PredicateSubjectDictionaryFactory.fromJson(
      json.subjectDictionaryJson
    );

    hpm._predicateTree = PredicateTreeFactory.fromJson(
      json.predicateTreeJson,
      hpm._predicateSubjectDictionary,
      options
    );
    return hpm;
  }

  static fromEmpty(
    subjectDictionaryJson: TPredicateSubjectDictionaryJson,
    options?: TPredicateTreeFactoryOptions
  ): PredicateFormulaEditor {
    const hpm = new PredicateFormulaEditor();
    hpm._predicateSubjectDictionary =
      PredicateSubjectDictionaryFactory.fromJson(subjectDictionaryJson);

    hpm._predicateTree = PredicateTreeFactory.fromEmpty(
      hpm._predicateSubjectDictionary,
      options
    );
    return hpm;
  }
}
