export interface NGramContainer {
  ngrams: string[];
  sourceText: string;
  sourceId: string;
  index: number;
}

export interface MarkovItResult {
  sentence: string;
  sources: Tweet[];
  randomNumbersUsed: number[]
}

export interface Tweet {
  texto: string;
  id: string;
}

export class MarkovGenerator {
  constructor(public readonly order: number, private tweets: ReadonlyArray<Tweet>) { }

  generateSentence() {

  }
}

export function generateNGrams(tweets: Tweet[], order: number): [string[], Record<string, NGramContainer>] {
  const ngrams: Record<string, NGramContainer> = {};
  const beginnings: string[] = [];

  for (let i = 0; i < tweets.length; i++) {
    beginnings.push(tweets[i].texto.substring(0, order));

    for (let j = 0; j < tweets[i].texto.length - order + 1; j++) {
      const text = tweets[i].texto;
      const gram = text.substring(j, j + order);

      if (gram.length < order) {
        break;
      }

      if (!ngrams[gram]) {
        ngrams[gram] = {
          ngrams: [text.charAt(j + order)],
          sourceText: tweets[i].texto,
          sourceId: tweets[i].id,
          index: j
        };
      } else {
        ngrams[gram].ngrams.push(text.charAt(j + order));
        ngrams[gram].sourceText = tweets[i].texto;
        ngrams[gram].sourceId = tweets[i].id;
        ngrams[gram].index = j;
      }
    }
  }
  return [beginnings, ngrams];
}

export function markovIt(
  beginnings: ReadonlyArray<string>,
  ngramsContainer: Record<string, NGramContainer>,
  randomNumbers: ReadonlyArray<number>,
  order: number): MarkovItResult {

  let currentGram: string = beginnings[clamp(randomNumbers[0], 0, beginnings.length - 1)];
  let result: MarkovItResult = { sentence: currentGram, sources: [], randomNumbersUsed: randomNumbers as number[] };
  let lastGram: string = "";

  for (let i = 0; i < randomNumbers.length - 1; i++) {
    const possibilities: ReadonlyArray<string> = ngramsContainer[currentGram].ngrams;

    if (!possibilities) {
      break;
    }

    const next = possibilities[clamp(randomNumbers[i + 1], 0, possibilities.length - 1)];
    result.sentence += next;
    currentGram = result.sentence.substring(result.sentence.length - order, result.sentence.length);

    if(!result.sources.map(x => x.texto).includes(ngramsContainer[currentGram].sourceText)) {
      const asd = ngramsContainer[currentGram];  
      result.sources.push({ id: asd.sourceId, texto: asd.sourceText });
    }

    if (lastGram === currentGram) {
      break;
    }

    lastGram = currentGram;
  }

  return result;
}

function clamp(input: number, min: number, max: number) {
  return Math.max(Math.min(input, max), min);
}

export function markovIt2(
  beginnings: ReadonlyArray<string>,
  ngramsContainer: Record<string, NGramContainer>,
  generateRandomNumber: (max: number) => number,
  maxIterations: number,
  order: number): MarkovItResult {
  const beginningRandomNumber = generateRandomNumber(beginnings.length - 1);
  let currentGram: string = beginnings[beginningRandomNumber];
  let result: MarkovItResult = { sentence: currentGram, sources: [], randomNumbersUsed: [beginningRandomNumber] };
  let lastGram: string = "";

  for (let i = 0; i < maxIterations - 1; i++) {
    const possibilities: ReadonlyArray<string> = ngramsContainer[currentGram].ngrams;

    if (!possibilities) {
      break;
    }

    const randomNumber = generateRandomNumber(possibilities.length - 1);
    const next = possibilities[randomNumber];
    result.sentence += next;
    result.randomNumbersUsed.push(randomNumber);
    currentGram = result.sentence.substring(result.sentence.length - order, result.sentence.length);

    if(!result.sources.map(x => x.texto).includes(ngramsContainer[currentGram].sourceText)) {
      const asd = ngramsContainer[currentGram];
      result.sources.push({ id: asd.sourceId, texto: asd.sourceText });
    }

    if (lastGram === currentGram) {
      break;
    }

    lastGram = currentGram;
  }

  return result;
}
