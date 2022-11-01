import { NGramContainer, Tweet } from 'barrebot-model';
import { generateNGrams } from 'barrebot-model';
import { ComponentCreated, View } from 'aurelia-templating';

export class Playground implements ComponentCreated {
  public beginnings: string[] = [];
  public ngrams: Record<string, NGramContainer> | undefined;
  public tweets: Tweet[] = [];

  created(_owningView: View, _myView: View): void {
    this.tweets = [
      'Hola como andas',
      'Hola como estas',
      'Hola que tal'
    ].map(x => ({ id: '', texto: x }))

    const [beginnings, ngrams] = generateNGrams(this.tweets, 2);
    this.beginnings = beginnings;
    this.ngrams = ngrams;
  }
}
