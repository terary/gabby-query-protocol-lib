import { PredicateFormulaEditorFactory, TPredicateProperties } from "../src";
import { EXAMPLE_JSON_BLUE_SKIES } from "../src";

const { predicateTreeJson } = EXAMPLE_JSON_BLUE_SKIES;
const { predicateSubjectsDictionaryJson: subjectDictionaryJson } =
  EXAMPLE_JSON_BLUE_SKIES;

export const predicateFormula = PredicateFormulaEditorFactory.fromJson({
  predicateTreeJson: predicateTreeJson,
  subjectDictionaryJson: subjectDictionaryJson,
});

import type { IVisitorPredicateTree, TPredicateNode, VisitorNodeType } from "../src";

class BranchIdVisitor implements IVisitorPredicateTree {
  private _startBrachId: string;
  private _branchIds: string[] = [];

  constructor(startBranchId: string) {
    this._startBrachId = startBranchId;
  }

  get startNodeId() {
    return this._startBrachId;
  }
  visit(parentId: string, nodeId: string, payload: TPredicateNode) {
    this._branchIds.push(nodeId);
  }

  get nodeType(): VisitorNodeType {
    return "branch";
  }

  get branchIds() {
    return this._branchIds;
  }
}

const branchVisitor = new BranchIdVisitor(predicateFormula.rootNodeId);

predicateFormula.predicatesAcceptVisitor(branchVisitor);
// predicateFormula.predicateTree.acceptVisitor(branchSwitcher);

console.log(branchVisitor.branchIds);
