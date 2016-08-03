import { AsyncComponentResolverService } from './async-component-resolver.service';
import { ConfigService } from './config.service';
import { TodoService } from './todo.service';
// $1

export {
  AsyncComponentResolverService,
  ConfigService,
  TodoService
// $2
};

export const SERVICE_PROVIDERS = [
  ConfigService,
  TodoService
// $3
];

