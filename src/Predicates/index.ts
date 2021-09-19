import { PredicateTree, PredicateTreeFactory } from "./PredicateTree";
import { PredicateTreeError } from "./PredicateTree/PredicateTreeError";
import { TPredicateNode } from "../common/type";
import { TreeVisitors } from "./TreeVisitors";
import type { SerializedTree, VisitorNodeType, IVisitor } from "./DirectedTreeGraph";
import type { TPredicateTreeFactoryOptions } from "./PredicateTree";
import type { IVisitorPredicateTree } from "./PredicateTree";

export { PredicateTree, PredicateTreeFactory, PredicateTreeError, TreeVisitors };

// moving away from 'serialized[something]' toward '[something]Json'
type TSerializedPredicateTree = SerializedTree<TPredicateNode>;

export type {
  IVisitor,
  IVisitorPredicateTree,
  SerializedTree as TSerializedTree,
  TPredicateTreeFactoryOptions,
  TSerializedPredicateTree,
  VisitorNodeType,
};
