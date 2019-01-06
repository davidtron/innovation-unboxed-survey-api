# Innovation Unboxed Audit API

API to allow user registration using AWS cognito and a CRUD API for saving and retrieving audits.
The API has a front end written using react to parse the audit JSON data.


This was built using the [Serverless framework](https://serverless.com) after walking through the [Serverless Stack](http://serverless-stack.com) guide.

#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone https://github.com/AnomalyInnovations/serverless-stack-demo-api
$ npm install
```

Run a single API on local.

``` bash
$ serverless invoke local --function list --path event.json
```

Where, `event.json` contains the request event info and looks something like this.

``` json
{
  "requestContext": {
    "authorizer": {
      "claims": {
        "sub": "USER-SUB-1234"
      }
    }
  }
}
```

Finally, run this to deploy to your AWS account.

``` bash
$ serverless deploy
```

#### Maintainers

[Email]: mailto:info@spiraltechnology.co.uk
