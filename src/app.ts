import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';

export class App {

  configureRouter(config: RouterConfiguration, _router: Router) {
    config.title = 'Barrebot';
    config.options.root = '/';
    config.options.pushState = true;
    config.map([
      { route: ':id?', name: 'barrebot', moduleId: PLATFORM.moduleName('barrebot') },
    ]);
  }
}

