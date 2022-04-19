import { Router } from 'aurelia-router';
import { markovIt, markovIt2, MarkovItResult } from './barrebot-model';
import { View, autoinject } from 'aurelia-framework';
import { generateNGrams, NGramContainer } from 'barrebot-model';
import Hashids from 'hashids';
import { tweets } from 'tweets';

@autoinject()
export class Barrebot {
  public message: MarkovItResult = { sentence: 'Default Text', sources: [], randomNumbersUsed: [] };
  private beginnings: string[] = [];
  private ngrams: Record<string, NGramContainer> | undefined;
  private sentenceId: string | undefined;
  private readonly maxIterations: number = 1000;
  private readonly order: number = 8;
  private readonly hashids = new Hashids('barrebot');
  private readonly router: Router;

  public constructor(router: Router) {
    this.router = router;
  }

  public activate({ id }: { id: string }): void {
    this.sentenceId = id;
  }

  public created(_owningView: View, _myView: View): void {
    const [beginnings, ngrams] = generateNGrams(tweets, this.order);
    this.beginnings = beginnings;
    this.ngrams = ngrams;

    if (this.sentenceId) {
      const numbers = this.hashids.decode(this.sentenceId).map(x => +x.toString());
      this.generateSentence(numbers);
    } else {
      this.generateSentence();
    }
  }

  public generateSentence(seed?: ReadonlyArray<number>): void {
    if (!this.ngrams) {
      throw Error('Ngrams is undefined');
    }

    if (seed) {
      this.message = markovIt(this.beginnings, this.ngrams, seed, this.order);
    } else {
      this.message = markovIt2(this.beginnings, this.ngrams, (max) => Math.floor(Math.random() * max), this.maxIterations, this.order)
    }

    const id = this.hashids.encode(this.message.randomNumbersUsed);
    this.router.navigateToRoute('barrebot', { id });
  }

  private generateSeed(): number[] {
    return [...Array(this.maxIterations)].map(_ => Math.floor(Math.random() * 100));
  }
}
