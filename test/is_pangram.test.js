const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    isPangram(text);
    // Assert
    expect(isPangram()).toEqual(true)
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    isPangram(text);
    // Assert
    expect(isPangram()).toEqual(true)
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz';
    // Act
    isPangram(text);
    // Assert
    expect(isPangram()).toEqual(true)
  });

  test('empty sentence', () => {
    // Arrange
    const text = '';
    // Act
    isPangram(text);
    // Assert
    expect(isPangram()).toEqual(true)
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps over_the_lazy_dog';
    // Act
    isPangram(text);
    // Assert
    expect(isPangram()).toEqual(true)
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = '01 the quick brown fox 77 jumps over the lazy dog 23';
   // Act
   isPangram(text);
   // Assert
   expect(isPangram()).toEqual(true)
  });

  // Write your own test case

  test('panagram with nonnumeric characters', () => {
    // Arrange
    const text = '%$ the quick brown fox ^@ jumps over the lazy dog *#';
    // Act
    isPangram(text);
    // Assert
    expect(isPangram()).toEqual(true)
  });
});
