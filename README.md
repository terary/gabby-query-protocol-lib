[This Repo's docs](https://terary.github.io/gabby-query-protocol-lib/)

# gabby-query-protocol-lib

This package is the base library for Gabby Query Protocol.
It mostly focuses on the predicate formula aspects of GQP.

### Terminology

_Predicate_ - a simple expression that evaluates to to true or false.
Properties: operator, subjectId, value.
Example: `{subjectId: "firstname", operator: "$eq", value: "barney"}`.

_Predicate Junction_ - an disjunction or conjunction expression.
Properties: operator
Example: `{operator: "$and"}`.

_Predicate Formula_ - coherent collection of predicate statements.

_Predicate Tree_ - The shape (coherent part) of the predicate statements.
Externally this is json representation of a _Directed Tree Graph_.
(I had better luck googling 'directed tree'). Each node has 1 and only 1 parent, except root.
Any node will have 2 or more children (this is differs from traditional directed trees).

### npm run

**gabby:build**  
Transpile to js includes source map
and types, target directory './dist'

**gabby:pack**  
Create npm friendly tgz package
