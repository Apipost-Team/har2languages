const HTTPSnippet=require('httpsnippet');

class har2languages{
    languages : any;
    constructor(){
        this.languages={
            c:['libcurl'],
            clojure:['clj_http'],
            csharp:['httpclient','restsharp'],
            go:['native'],
            http:['1.1'],
            java:['asynchttp','nethttp','okhttp','unirest'],
            javascript:['axios','fetch','jquery','xhr'],
            kotlin:['okhttp'],
            node:['axios','fetch','native','request','unirest'],
            objc:['nsurlsession'],
            ocaml:['cohttp'],
            php:['curl','http1','http2'],
            powershell:['webrequest','restmethod'],
            python:['python3','requests'],
            r:['httr'],
            ruby:['native'],
            shell:['curl','httpie','wget'],
            swift:['nsurlsession']
        }
    }
    convert(har : Object,language : String,type : String = ''){
        const snippet = new HTTPSnippet(har);
        return snippet.convert(language,type);
    }
}

export default har2languages