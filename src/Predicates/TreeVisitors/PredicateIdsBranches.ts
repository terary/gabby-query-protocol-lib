import type { TPredicateNode } from "../../index";
import type { VisitorNodeType, IVisitor } from "../index";
import { PredicateIdsAbstract } from "./PredicateIdsAbstract";

export class PredicateIdsBranches extends PredicateIdsAbstract {
  constructor() {
    super();
    this._nodeType = "branch";
  }
}
