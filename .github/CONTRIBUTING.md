## Submitting Pull Requests

**Please follow these basic steps to simplify pull request reviews - if you don't you'll probably just be asked to anyway.**

* Please rebase your branch against the current master
* Run `npm run clean && npm i` to make sure your development dependencies are up-to-date
* Please ensure that the test suite passes **and** that code is lint free before submitting a PR by running:
  * `npm run js-lint`
  * `npm test`
  * [check how to run e2e test][1]
* If you've added new functionality, **please** include tests which validate its behaviour
* Make reference to possible [issues][2] on PR comment

## Submitting bug reports

* Please detail the affected browser(s) and operating system(s)
* Please be sure to state which version of node **and** npm you're using

[1]: https://github.com/codewareio/angular2-es-seed#2-end-to-end-tests-aka-e2e-integration
[2]: https://github.com/codewareio/angular2-es-seed/issues