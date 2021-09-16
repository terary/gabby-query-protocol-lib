import { PredicateTree, PredicateTreeFactory } from "./PredicateTree";
import { PredicateTreeError } from "./PredicateTree/PredicateTreeError";
import { TPredicateNode } from "../common/type";
import type { SerializedTree, VisitorNodeType } from "./DirectedTreeGraph";
import type { TPredicateTreeFactoryOptions } from "./PredicateTree";
import type { IVisitorPredicateTree } from "./PredicateTree";
export { PredicateTree, PredicateTreeFactory, PredicateTreeError };

// moving away from 'serialized[something]' toward '[something]Json'
type TSerializedPredicateTree = SerializedTree<TPredicateNode>;

export type {
  IVisitorPredicateTree,
  SerializedTree as TSerializedTree,
  TPredicateTreeFactoryOptions,
  TSerializedPredicateTree,
  VisitorNodeType,
};
