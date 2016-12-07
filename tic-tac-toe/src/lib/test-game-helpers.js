getColNumber(0)
1
getColNumber(1)
2
getColNumber(2)
3
getColNumber(3)
1
getColNumber(4)
2
getColNumber(5)
3
getColNumber(6)
1
getColNumber(7)
2
getColNumber(8)
3


getRowNumber(0)
1
getRowNumber(1)
1
getRowNumber(2)
1
getRowNumber(3)
2
getRowNumber(4)
2
getRowNumber(5)
2
getRowNumber(6)
3
getRowNumber(7)
3
getRowNumber(8)
3


isIndexInMainHypo(0)
true
isIndexInMainHypo(1)
false
isIndexInMainHypo(2)
false
isIndexInMainHypo(3)
false
isIndexInMainHypo(4)
true
isIndexInMainHypo(5)
false
isIndexInMainHypo(6)
false
isIndexInMainHypo(7)
false
isIndexInMainHypo(8)
true

Array.from({length: 9}, (v, k) => k).map(i => isIndexInSubHypo(i))
[false, false, true, false, true, false, true, false, false]

convertToOneDimensionZeroBased(1,1)
0
convertToOneDimensionZeroBased(1,2)
3
convertToOneDimensionZeroBased(2,1)
1
convertToOneDimensionZeroBased(1,2)
3
convertToOneDimensionZeroBased(2,2)
4
convertToOneDimensionZeroBased(3,2)
5
convertToOneDimensionZeroBased(1,3)
6
convertToOneDimensionZeroBased(2,3)
7
convertToOneDimensionZeroBased(3,3)
8