import type {
  TPredicateProperties,
  TSupportedDatatype,
  TValueLabelList,
  TPredicateNode,
} from "./type";
import * as CONSTS from "./consts";
import type { IExportToJson } from "./IExportToJson";
import type { IImportFromJson } from "./IImportFromJson";

Object.freeze(CONSTS);
export { CONSTS };

export type {
  TPredicateNode,
  TPredicateProperties,
  TSupportedDatatype,
  TValueLabelList,
  IExportToJson,
  IImportFromJson,
};
