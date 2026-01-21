const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return arr1.filter(num => set2.has(num));
}