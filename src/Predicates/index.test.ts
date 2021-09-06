import * as exportNonTypes from "./index";
describe("PredicateTreeContext.index - export non-type", () => {
  it('Should export only "PredicateTree" non type thing', () => {
    expect(Object.keys(exportNonTypes).length).toBe(3);
    expect("PredicateTree" in exportNonTypes).toBeTruthy();
    expect("PredicateTreeFactory" in exportNonTypes).toBeTruthy();
    expect("PredicateTreeError" in exportNonTypes).toBeTruthy();
  });
});
