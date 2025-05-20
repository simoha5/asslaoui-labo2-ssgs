# Labo-String: CLI per Utilità su Stringhe

Labo-String è una semplice interfaccia a riga di comando (CLI) realizzata con Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

* Inversione di una stringa
* Verifica se una stringa è palindroma
* Troncamento di una stringa a una lunghezza massima specificata
* Conteggio delle occorrenze di ciascun carattere in una stringa

## Esempi di Utilizzo

```bash
# 1. Inversione
node index.js 1 "ciao"
# Output: "oaic"

# 2. Verifica palindromo
node index.js 2 "anna"
# Output: true

# 3. Troncamento
node index.js 3 "ciao mondo" 4
# Output: "ciao"

# 4. Conteggio caratteri
node index.js 4 "ciao"
# Output: { c: 1, i: 1, a: 1, o: 1 }
```

## Requisiti

- [Node.js](https://nodejs.org/) **versione 22** o superiore

## Installazione

Clona il repository ed entra nella cartella del progetto:

```bash
git clone https://github.com/simoha5/asslaoui-labo2-ssgs
cd asslaoui-labo2-ssgs
```

Installa le dipendenze:

```bash
npm install
```

## Utilizzo

Esegui il codice tramite:

```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

Dove:
- `<numero_funzione>`: il numero della funzione da eseguire (1-4)
- `<stringa_input>`: la stringa su cui operare
- `[parametro_aggiuntivo]`: parametro opzionale richiesto solo per alcune funzioni (es. lunghezza massima per il troncamento)

## Licenza

MIT

##  Eseguire i Test
Assicurarsi che Jest sia installato come dipendenza di sviluppo:
```bash
npm install --save-dev jest
```
Per lanciare i test automatici scritti con Jest,e la code coverage (obiettivo 100%), usa:
```bash
npm test
```






