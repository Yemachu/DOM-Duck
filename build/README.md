# [DOM Duck.js](../) / build
[Require.js](https://github.com/requirejs/requirejs) provides a minimizer ([r.js](https://github.com/requirejs/r.js)) which can combine all linked files into one file. This repository makes usage of said minimizer, which is assumed to be installed by anyone who would want to build a version of this repository.

It is bundled with the node version of Require.js, which can be installed via npm using the following command.
```shell
npm install -g requirejs
```
When installed, the following command can be used to run the minimizer. 
```
r.js -o config.js
```

Look at [the documentation](requirejs.org/docs/optimization.html) for more information.
