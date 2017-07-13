import { expect } from 'chai';
import mergeSort from '../scripts/merge_sort';
import { randomNumbers, randomLetters } from '../scripts/array_generator';

describe('mergeSort', () => {

  it('should be a function', () => {
    expect(mergeSort).to.be.function;
  })

  it('should sort an array of numbers', () => {
    const array = [4, 2, 5, 1, 3];

    expect(mergeSort(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort a large array of numbers', () => {
    const array = randomNumbers(1415, 0, 100);

    expect(mergeSort(array)).to.deep.equal(array.sort((a, b) => a - b))
  })

  it('should sort an array conatining negative numbers', () => {
    const array = [-3, -5, -1, -2, -4];

    expect(mergeSort(array)).to.deep.equal([-5, -4, -3, -2, -1])
  })

  it('should sort a large array of negative numbers', () => {
    const array = randomNumbers(100, -100, 100);

    expect(mergeSort(array)).to.deep.equal(array.sort((a, b) => a - b))
  })

  it('should sort an array of strings alphabetically', () => {
    const array = ['c', 'd', 'a', 'e', 'b'];

    expect(mergeSort(array)).to.deep.equal(['a', 'b', 'c', 'd', 'e'])
  })

  it('should sort an array of many strings alphabetically', () => {
    const array =  randomLetters(1415);
    
    expect(mergeSort(array)).to.deep.equal(array.sort())
  })
})
