import { compose } from '@ngrx/core/compose';
import { combineReducers, provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { storeFreeze } from 'ngrx-store-freeze';
import { reducers } from './app.reducers';
// TODO(tsm): dummy effects
import { DummyEffects } from './features/auth/effects';


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our root reducer, and then
 * wrapping that in storeFreeze. Remember that compose applies
 * the result from right to left.
 */
const metaReducers = IS_DEV
  ? [storeFreeze, combineReducers]
  : [combineReducers];

const store = compose(...metaReducers)(reducers);

export const STORE_PROVIDERS = [

  /**
   * provideStore is run once at application bootstrap, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   */
  provideStore(store),

  /**
   * runEffects configures all providers for @ngrx/effects. Observables decorated
   * as an @Effect() within the supplied services will ultimately be merged,
   * with output of relevant (registered as effects) actions being
   * dispatched into your application store. Any side-effects in
   * your application should be registered as effects.
   *
   * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
   */
  runEffects([DummyEffects])

];

if (IS_DEV) STORE_PROVIDERS.push(

  /**
   * instrumentStore() sets up the @ngrx/store-devtools providers.
   */
  instrumentStore({
    monitor: useLogMonitor({
      position: 'right',
      visible: false
    })
  })

);
