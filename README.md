# Project Title

Cloud Runtime Tutorial

## Description

Demo code for simple FaaS examples (json parsing)


## Getting Started

### Dependencies

* Install node.js from http://nodejs.org
* Install serverless from https://serverless.com/framework/docs/getting-started/

### Installing


### Executing program

* How to run the program
* Step-by-step bullets
```
$ cat handler.js // modify body to ‘Hello Cloud Runtime’

exports.empty = function empty(event, context, callback) {
  callback(null, { statusCode: 200, body: '' });
}

$ sls invoke local –function empty
{
  statusCode: 200,
  body: 'Hello Cloud Runtime' 
}

$ cat empty.js
const func = require('./handler.js');

func.empty(null, null, function(a, b) { console.log(b);})

$ node empty.js
{ statusCode: 200, body: 'Hello Cloud Runtime’}

```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info
Suresh Srinivas


## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License. License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
https://github.com/lemire/simdjson/
1.json originally adopted from this repo: https://github.com/kostya/benchmarks/tree/master/json 

