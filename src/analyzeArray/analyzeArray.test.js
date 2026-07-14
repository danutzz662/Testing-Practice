import { analyzeArray } from './analyzeArray';
test(' array [1,8,3,4,2,6] returns average: 4,min: 1,max: 8,length: 6 ', () => {
  const array = [1, 8, 3, 4, 2, 6];

  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

