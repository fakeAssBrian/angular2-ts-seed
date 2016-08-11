import { Injectable, NgModuleFactoryLoader, NgModuleFactory, Compiler } from '@angular/core';

@Injectable()
export class WebpackNgModuleLoader implements NgModuleFactoryLoader {

  constructor(private _compiler: Compiler) {
  }

  load(path: any): any {
    console.log('#load', arguments);
    const offlineMode = this._compiler instanceof Compiler;
    return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
  }

  private loadAndCompile(module: any): any {
    console.log('#loadAndCompile', arguments);

    // return (<any>global)
    //   .System.import(module)
    //   .then((module: any) => module[exportName])
    //   .then((type: any) => checkNotEmpty(type, module, exportName))

    // NEED THIS
    //   .then((type: any) => this._compiler.compileModuleAsync(type));

    return module(this._compiler);
  }

  private loadFactory(path: string): any {
    console.log('#loadFactory', arguments);
  }

}
