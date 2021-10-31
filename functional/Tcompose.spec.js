const {Tcompose} = require("./Tcompose");
const doubleTheValue = (v) =>  v * 2 ;
const addOneToTheValue = (v) => v + 1;

describe('file T compose', () => {
    it('return value', () => {
        expect.hasAssertions();
        // Arrange (всякие моки)

        // Act

        // Assert
        expect(Tcompose("Hello, world")).toBe("Hello, world");
    });

    it('проганяем через функцию', () => {
        expect.hasAssertions();
        // Arrange (всякие моки)
        const random = Math.floor(Math.random() * 1000);
        // Act

        // Assert
        const result = Tcompose(random, doubleTheValue)
        expect(result).toBe(random*2);
    });

    it('проганяем через две функции', () => {
        expect.hasAssertions();
        // Arrange (всякие моки)
        const random = Math.floor(Math.random() * 1000);
        // Act

        // Assert
        const result = Tcompose(random, doubleTheValue, doubleTheValue)
        expect(result).toBe(random*4);
    });

    it('проганяем через три функции', () => {
        expect.hasAssertions();
        // Arrange (всякие моки)
        const random = Math.floor(Math.random() * 1000);
        // Act

        // Assert
        const result = Tcompose(random, doubleTheValue, doubleTheValue ,addOneToTheValue)

        expect(result).toBe(random*4 + 1);
    });
});