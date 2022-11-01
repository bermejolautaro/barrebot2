import { Router, RouterConfiguration, ConfiguresRouter } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';

export class App implements ConfiguresRouter {

  configureRouter(config: RouterConfiguration, _router: Router) {
    config.title = 'Barrebot';
    config.options.root = '/';
    config.options.pushState = true;
    config.map([
      { route: '', name: 'barrebot', moduleId: PLATFORM.moduleName('barrebot') },
      { route: 'playground', name: 'playground', moduleId: PLATFORM.moduleName('playground') }
    ]);
  }
}

