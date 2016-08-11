import { Injectable, NgModuleFactoryLoader, NgModuleFactory, Compiler } from '@angular/core';

const _SEPARATOR = '#';
const FACTORY_MODULE_SUFFIX = '.ngfactory';
const FACTORY_CLASS_SUFFIX = 'NgFactory';

/**
 * NgModuleFactoryLoader that passes _compiler to load NgModuleFactory with reverse control
 * @experimental
 */
@Injectable()
export class WebpackNgModuleLoader implements NgModuleFactoryLoader {

  constructor(private _compiler: Compiler) {
  }

  load(path: any): Promise<NgModuleFactory<any>> {
    const offlineMode = this._compiler instanceof Compiler;
    return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
  }

  // Route interface modified at `./node_modules/@angular/router/src/config.d.ts`
  private loadAndCompile(module: any): Promise<NgModuleFactory<any>> {
    return module(this._compiler);
  }

  private loadFactory(path: any): Promise<NgModuleFactory<any>> {
    console.log('TODO: #loadFactory');
    let [module, exportName] = path.split(_SEPARATOR);
    if (exportName === undefined) exportName = 'default';

    return (<any>global)
      .System.import(module + FACTORY_MODULE_SUFFIX)
      .then((module: any) => module[exportName + FACTORY_CLASS_SUFFIX])
      .then((factory: any) => checkNotEmpty(factory, module, exportName));
  }

}

function checkNotEmpty(value: any, modulePath: string, exportName: string): any {
  if (!value) {
    throw new Error(`Cannot find '${exportName}' in '${modulePath}'`);
  }
  return value;
}
