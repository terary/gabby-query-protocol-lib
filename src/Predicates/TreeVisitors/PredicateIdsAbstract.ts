/**
 * Silly visitor mostly for testing purposes.
 *
 */
import type { TPredicateNode } from "../../index";

import type { VisitorNodeType, IVisitor } from "../index";

export abstract class PredicateIdsAbstract implements IVisitor<TPredicateNode> {
  protected _predicateIds: string[] = [];
  protected _nodeType: VisitorNodeType;
  constructor() {
    this._nodeType = "all";
  }
  visit(parentId: string, nodeId: string, payload: TPredicateNode) {
    this._predicateIds.push(nodeId);
  }

  get nodeType(): VisitorNodeType {
    return this._nodeType;
  }

  get predicateIds() {
    return this._predicateIds.sort();
  }
}
