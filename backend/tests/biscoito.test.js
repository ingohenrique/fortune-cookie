const { sortearItem, frases } = require("../biscoito");

describe("Biscoito da Sorte", () => {
  describe("sortearItem", () => {
    test("deve retornar um item do array", () => {
      const testArray = ["item1", "item2", "item3"];
      const result = sortearItem(testArray);

      expect(testArray).toContain(result);
    });

    test("deve retornar diferentes itens em chamadas múltiplas", () => {
      const testArray = ["a", "b", "c", "d", "e"];
      const results = new Set();

      // Executa 50 vezes para ter boa chance de variação
      for (let i = 0; i < 50; i++) {
        results.add(sortearItem(testArray));
      }

      // Deve ter pelo menos 2 valores diferentes
      expect(results.size).toBeGreaterThan(1);
    });

    test("deve funcionar com array de um item", () => {
      const testArray = ["único"];
      const result = sortearItem(testArray);

      expect(result).toBe("único");
    });
  });

  describe("frases", () => {
    test("deve ter frases definidas", () => {
      expect(frases).toBeDefined();
      expect(Array.isArray(frases)).toBe(true);
      expect(frases.length).toBeGreaterThan(0);
    });

    test("todas as frases devem ser strings não vazias", () => {
      frases.forEach((frase) => {
        expect(typeof frase).toBe("string");
        expect(frase.length).toBeGreaterThan(0);
        expect(frase.trim()).toBe(frase); // Não deve ter espaços nas pontas
      });
    });

    test("deve ter pelo menos 50 frases", () => {
      expect(frases.length).toBeGreaterThanOrEqual(50);
    });

    test("sortearItem deve funcionar com o array de frases", () => {
      const frase = sortearItem(frases);

      expect(typeof frase).toBe("string");
      expect(frases).toContain(frase);
      expect(frase.length).toBeGreaterThan(0);
    });
  });
});
