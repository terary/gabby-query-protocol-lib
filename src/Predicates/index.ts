import { PredicateTree, PredicateTreeFactory } from "./PredicateTree";
import { PredicateTreeError } from "./PredicateTree/PredicateTreeError";
import { TPredicateNode } from "../common/type";
import type { IVisitor, SerializedTree, VisitorNodeType } from "./DirectedTreeGraph";
import type { TPredicateTreeFactoryOptions } from "./PredicateTree";

export { PredicateTree, PredicateTreeFactory, PredicateTreeError };

// moving away from 'serialized[something]' toward '[something]Json'
type TSerializedPredicateTree = SerializedTree<TPredicateNode>;

export type {
  IVisitor,
  SerializedTree as TSerializedTree,
  TPredicateTreeFactoryOptions,
  TSerializedPredicateTree,
  VisitorNodeType,
};
