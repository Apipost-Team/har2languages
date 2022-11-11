import Atools from 'apipost-tools';
const HTTPSnippet = require('httpsnippet');
class har2languages {
    languages: any;
    constructor() {
        this.languages = {
            shell: ['curl', 'httpie', 'wget'],
            c: ['libcurl'],
            clojure: ['clj_http'],
            csharp: ['httpclient', 'restsharp'],
            go: ['native'],
            http: ['1.1'],
            java: ['asynchttp', 'nethttp', 'okhttp', 'unirest'],
            javascript: ['axios', 'fetch', 'jquery', 'xhr'],
            kotlin: ['okhttp'],
            node: ['axios', 'fetch', 'native', 'request', 'unirest'],
            objc: ['nsurlsession'],
            ocaml: ['cohttp'],
            php: ['curl', 'http1', 'http2'],
            powershell: ['webrequest', 'restmethod'],
            python: ['python3', 'requests'],
            r: ['httr'],
            ruby: ['native'],
            swift: ['nsurlsession']
        }
    }
    convert(har: any, language: String, type: String = '') {
        try {
            if(har.hasOwnProperty('url')){
                har.url = har.url.replace(/ /g, "%20");
            }
            const snippet = new HTTPSnippet(har);
            const result = snippet.convert(language, type);
            return Atools.successResult(result)
        } catch (error) {
            return Atools.errorResult(String(error))
        }

    }
}

export default har2languages