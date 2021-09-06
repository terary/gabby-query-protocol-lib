[Gabby Query Protocol Project site](https://terary.github.io/gabby-query-protocol-www/)

[This Repo's docs](https://terary.github.io/gabby-query-protocol-lib/)

# gabby-query-protocol-lib

## TODO

**Remove unnecessary types**
This has contextType - which it should not

**Rename Type**

Shouldn't 'TPredicateJunctionOperator' be 'TPredicateJunctionOperator  
type TPredicateJunctionOperator = "$and" | "$or";

type TPredicateOperator = '$eg' | '$lt' ...

**Add Junction**
$betweeni, $betweenx, $nbetweeni, $nbetweenx

- This can be done in any client - maybe better not be
  part of the lib
- should be part of the protocol?

**Add operator(s)**
$ne, $isnull

### npm run

**gabby:build**  
Transpile to js includes source map
and types, target directory './dist'

**gabby:pack**  
Create npm friendly tgz package

**gabby:ship**  
All the above and cp file to
publicly available website
