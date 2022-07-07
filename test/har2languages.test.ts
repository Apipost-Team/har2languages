import har2languages from '../src/har2languages'
let path = require('path')
let fs = require('fs')

describe('works', () => {
  let har = {
    "method": "GET",
    "url": "http://www.example.com/path/?param=value",
    "httpVersion": "HTTP/1.1",
    "cookies": [],
    "headers": [{
      "name": "Accept-Encoding",
      "value": "gzip,deflate",
      "comment": ""
    },
    {
      "name": "Accept-Language",
      "value": "en-us,en;q=0.5",
      "comment": ""
    }],
    "queryString": [{
      "name": "param1",
      "value": "value1",
      "comment": ""
    },
    {
      "name": "param1",
      "value": "value1",
      "comment": ""
    }],
    "postData": {},
    "headersSize": 150,
    "bodySize": 0,
    "comment": ""
  }
  let Har2languages = new har2languages();
  // Object.keys(Har2languages.languages).forEach(key=>{
  //   for (const type of Har2languages.languages[key]) {
  //       console.log(`${key}:${type}`,Har2languages.convert(har,key,type));
  //   }
  // })
  let nodeRequest = `const request = require('request');
    
  const options = {method: 'GET', url: 'http://www.example.com/path/', qs: {param: 'value'}};
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });`
  it('curl2har test', () => {
    expect(!!Har2languages.convert(har, 'php', 'curl')).toEqual(true);
  });
});

