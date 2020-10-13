// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * constante que prepara la instanccia paa realizar pruebas unitarias
 */
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

/**
 * inicializando en ambiete de pruebas de angular
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

/**
 * busca todos os test
 */
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
