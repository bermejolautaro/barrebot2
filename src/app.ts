import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';

export class App {

  configureRouter(config: RouterConfiguration, _router: Router) {
    config.title = 'Barrebot';
    config.options.root = '/barrebot2';
    config.options.pushState = true;
    config.map([
      { route: '', name: 'barrebot', moduleId: PLATFORM.moduleName('barrebot')},
    ]);
  }
}

