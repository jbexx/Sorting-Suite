import { expect } from 'chai';
import insertion from '../scripts/insertion_sort';
import { randomNumbers, randomLetters } from '../scripts/array_generator';

describe('insertion', () => {

  it('should be a function', () => {
    expect(insertion).to.be.function;
  })

  it('should sort an array of numbers', () => {
    const array = [4, 2, 5, 1, 3]
    expect(insertion(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort a large array of numbers', () => {
    const array = randomNumbers(190, 0, 100)
    expect(insertion(array)).to.equal(array.sort((a, b) => a - b))
  })

  it('should sort an array conatining negative numbers', () => {
    const array = [-3, -5, -1, -2, -4]
    expect(insertion(array)).to.deep.equal([-5, -4, -3, -2, -1])
  })

  it('should sort a large array of negative numbers', () => {
    const array = randomNumbers(100, -100, 100)
    expect(insertion(array)).to.equal(array.sort((a, b) => a - b))
  })

  it('should sort an array of strings alphabetically', () => {
    const array = ['c', 'd', 'a', 'e', 'b']
    expect(insertion(array)).to.deep.equal(['a', 'b', 'c', 'd', 'e'])
  })

  it('should sort an array of many strings alphabetically', () => {
    const array =  randomLetters(100);
    expect(insertion(array)).to.equal(array.sort())
  })
})
