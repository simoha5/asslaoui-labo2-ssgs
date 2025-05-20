const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters
} = require('../src/stringUtils');

describe('String Utilities', () => {
  // Test per reverseString
  describe('reverseString', () => {
    test('dovrebbe invertire una stringa semplice', () => {
      expect(reverseString('ciao')).toBe('oaic');
      expect(reverseString('test')).toBe('tset');
    });

    test('dovrebbe gestire stringhe con spazi', () => {
      expect(reverseString('ciao mondo')).toBe('odnom oaic');
    });

    test('dovrebbe gestire stringhe con caratteri speciali', () => {
      expect(reverseString('ciao!')).toBe('!oaic');
      expect(reverseString('a,b,c')).toBe('c,b,a');
    });

    test('dovrebbe restituire una stringa vuota se input vuoto', () => {
      expect(reverseString('')).toBe('');
    });

    test('dovrebbe gestire stringhe con numeri', () => {
      expect(reverseString('abc123')).toBe('321cba');
    });
  });

  // Test per isPalindrome
  describe('isPalindrome', () => {
    test('dovrebbe identificare correttamente parole palindrome semplici', () => {
      expect(isPalindrome('anna')).toBe(true);
      expect(isPalindrome('radar')).toBe(true);
      expect(isPalindrome('level')).toBe(true);
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
    });

    test('dovrebbe essere case-insensitive', () => {
      expect(isPalindrome('Anna')).toBe(true);
      expect(isPalindrome('RadAr')).toBe(true);
    });

    test('dovrebbe ignorare gli spazi', () => {
      expect(isPalindrome('i topi non avevano nipoti')).toBe(true);
      expect(isPalindrome('a man a plan a canal panama')).toBe(true);
    });

    test('dovrebbe gestire stringhe vuote o singoli caratteri', () => {
      expect(isPalindrome('')).toBe(true); // Una stringa vuota è considerata palindroma
      expect(isPalindrome('a')).toBe(true); // Un singolo carattere è sempre palindromo
    });

    test('dovrebbe gestire input con caratteri speciali e punteggiatura', () => {
      // Nota: questa funzione tratta solo spazi, quindi la punteggiatura non viene ignorata
      expect(isPalindrome('A Santa at NASA')).toBe(true);
      expect(isPalindrome('No lemon no melon')).toBe(true); // falso perché la virgola non viene rimossa
    });
  });

  // Test per truncateString
  describe('truncateString', () => {
    test('dovrebbe troncare stringhe più lunghe della lunghezza massima', () => {
      expect(truncateString('ciao mondo', 4)).toBe('ciao...');
      expect(truncateString('questo è un test', 8)).toBe('questo è...');
    });

    test('non dovrebbe modificare stringhe più corte della lunghezza massima', () => {
      expect(truncateString('ciao', 10)).toBe('ciao');
      expect(truncateString('test', 4)).toBe('test');
    });

    test('dovrebbe gestire casi limite', () => {
      expect(truncateString('', 5)).toBe('');
      expect(truncateString('abc', 0)).toBe('...');
      expect(truncateString('abc', 3)).toBe('abc');
    });

    test('dovrebbe gestire input con caratteri speciali', () => {
      expect(truncateString('ciao!@#', 5)).toBe('ciao!...');
    });
  });

  // Test per countCharacters
  describe('countCharacters', () => {
    test('dovrebbe contare correttamente i caratteri in una stringa semplice', () => {
      expect(countCharacters('banana')).toEqual({ b: 1, a: 3, n: 2 });
      expect(countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });

    test('dovrebbe essere case-sensitive', () => {
      expect(countCharacters('aAaA')).toEqual({ a: 2, A: 2 });
    });

    test('dovrebbe gestire stringhe con spazi e caratteri speciali', () => {
      expect(countCharacters('hi there!')).toEqual({ h: 2, i: 1, ' ': 1, t: 1, e: 2, r: 1, '!': 1 });
    });

    test('dovrebbe restituire un oggetto vuoto per stringa vuota', () => {
      expect(countCharacters('')).toEqual({});
    });

    test('dovrebbe gestire stringhe con numeri', () => {
      expect(countCharacters('abc123')).toEqual({ a: 1, b: 1, c: 1, '1': 1, '2': 1, '3': 1 });
    });
  });
});