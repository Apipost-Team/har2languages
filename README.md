har2languages 是一个har 对象 到 其他语言 代码 的转换器。

# 🎉 特性

**支持语言：**

```         语言:方式（数组）
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
```
# 安装

```shell
npm i har2languages
```

# 基础使用
需引入：

```js
import har2languages from 'har2languages';
const converter = new har2languages();
const convertResult= converter.convert(har,language,type);
```

# 开源协议

har2languages 遵循 [MIT 协议](https://github.com/Apipost-Team/har2languages)。
