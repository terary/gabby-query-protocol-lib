export type TValidatorResponse = { hasError: boolean; errorMessages: string[] };

export interface IValidator {
  (...args: any[]): TValidatorResponse;
}

// TODO  - *tmc* - change each IValidator to
//          so code completion will detect arg names.. now it only detects (args...) which isn't best
// interface Props {
//   (
//     properties: TProjectionPropertiesJson,
//     projectableSubjects: ProjectableSubjectDictionary
//   ): TValidatorResponse;
// }
// export const ValidateProjectionProperties: Props = (
//   properties,
//   projectableSubjects
// ): TValidatorResponse => {
