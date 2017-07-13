import { expect } from 'chai';
import insertionSort from '../scripts/insertion_sort';
import { randomNumbers, randomLetters } from '../scripts/array_generator';

describe('insertionSort', () => {

  it('should be a function', () => {
    expect(insertionSort).to.be.function;
  })

  it('should sort an array of numbers', () => {
    const array = [4, 2, 5, 1, 3];

    expect(insertionSort(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort a large array of numbers', () => {
    const array = randomNumbers(18000, 0, 100);

    expect(insertionSort(array)).to.equal(array.sort((a, b) => a - b))
  })

  it('should sort an array conatining negative numbers', () => {
    const array = [-3, -5, -1, -2, -4, -6];

    expect(insertionSort(array)).to.deep.equal([-6, -5, -4, -3, -2, -1])
  })

  it('should sort a large array of negative numbers', () => {
    const array = randomNumbers(100, -100, 100);

    expect(insertionSort(array)).to.equal(array.sort((a, b) => a - b))
  })

  it('should sort an array of strings alphabetically', () => {
    const array = ['c', 'd', 'a', 'e', 'b'];

    expect(insertionSort(array)).to.deep.equal(['a', 'b', 'c', 'd', 'e'])
  })

  it('should sort an array of many strings alphabetically', () => {
    const array =  randomLetters(100);

    expect(insertionSort(array)).to.equal(array.sort())
  })
})
