"use strict";var precacheConfig=[["/index.html","5c579655aa3405e01aa1ae7c3ec45173"],["/static/css/main.a656b44e.css","d9ac2fd0504dcded7e8f28e5cbfe00bd"],["/static/js/main.5865d8af.js","07aa7c78d4e49ad19f37f946321b0e5c"],["/static/media/3d.b3042929.png","b3042929a06043ff4ac50a3074c30d6b"],["/static/media/IMG_0130.0b9453aa.jpg","0b9453aa3f00b9ccfc53c8cb8f4edcc3"],["/static/media/IMG_0130.463e8d05.jpg","463e8d05933d7b2af46bb9286ba7a72c"],["/static/media/IMG_0131.f22162d6.jpg","f22162d6c61b3c67c11b30212f081649"],["/static/media/IMG_0132.2bc2fe76.jpg","2bc2fe76da5277adf653c20972151bf1"],["/static/media/IMG_0132.75229bfe.jpg","75229bfe491731621aec52f4ff226b2e"],["/static/media/IMG_0138.3abde135.jpg","3abde135069e1fb537975496ff574a48"],["/static/media/IMG_0138.64b57cb4.jpg","64b57cb46d16a7632d2c743e275bed6a"],["/static/media/IMG_0139.1fb13fb4.jpg","1fb13fb45921a528cf5f9a59d6918ac0"],["/static/media/IMG_0139.cf56b590.jpg","cf56b590bdfd9dec7841d894360796bb"],["/static/media/IMG_0140.14cef929.jpg","14cef929ef7ed634ab313c79820a23b4"],["/static/media/IMG_0140.f00c265f.jpg","f00c265f4f9ff78a8e0281eb128d6bb2"],["/static/media/IMG_0141.e5e3a9d5.jpg","e5e3a9d57488e989ba68fa57dc388419"],["/static/media/IMG_0141.f653333b.jpg","f653333bb90db6918995b3fcae049f3c"],["/static/media/IMG_0142.53c89064.jpg","53c89064061785c7f21225b66dd8029c"],["/static/media/IMG_0142.964f4634.jpg","964f4634bcdf95bddc02a1305128ac20"],["/static/media/IMG_0143.11f0999e.jpg","11f0999e80b7e26c94178537951f2ed9"],["/static/media/IMG_0143.f53f7e39.jpg","f53f7e39e8ba76dcb6399300066ca905"],["/static/media/IMG_0144.bc18acd0.jpg","bc18acd012dbcf826727a01e8c47699a"],["/static/media/IMG_0144.f9a7aa08.jpg","f9a7aa0802e193784e2c1e95abab8b77"],["/static/media/IMG_0145.17c94919.jpg","17c94919fc56919cf71aec8d2b132a93"],["/static/media/IMG_0145.4a6f2e71.jpg","4a6f2e7112b189b0762dd7a140a4638c"],["/static/media/IMG_0146.952597bc.jpg","952597bc3eae5e06e25f41dc514be20d"],["/static/media/IMG_0146.d1c31e1f.jpg","d1c31e1ffa5ef83b55900128d0d4d4b7"],["/static/media/Transport Medium.b2e3ebd1.ttf","b2e3ebd130cdcc86962e9912967a4260"],["/static/media/_56B6011.2b308d21.jpg","2b308d2181a52f7fbdd2b598eb8dd328"],["/static/media/_56B6011.937439e6.jpg","937439e68ac18f9bd258f4975d109667"],["/static/media/_56B6012.0921abcf.jpg","0921abcf5c253c30dbfd76fb90ed216e"],["/static/media/_56B6012.8f6c43a9.jpg","8f6c43a9fda50d884c59359298fd5a76"],["/static/media/_56B6041.5a163632.jpg","5a163632e13b9c146b55486b32d181fa"],["/static/media/_56B6041.e5af0e10.jpg","e5af0e104d51844d7609e9f2ed61b1f4"],["/static/media/_56B6044.83da06ae.jpg","83da06ae216c659a12085fd0b6624c5d"],["/static/media/_56B6044.a91a29f5.jpg","a91a29f551b5e322048d2e7d0be299c0"],["/static/media/_56B6046.273a9874.jpg","273a9874e4d1e6990e08a98a97addc8c"],["/static/media/_56B6046.d83cdeb1.jpg","d83cdeb1aa028d33ed2e249379ac0fd8"],["/static/media/_56B6143.6e8e6941.jpg","6e8e6941be8bd6a6f7b45a5d51d11907"],["/static/media/_56B6143.f02cc8d4.jpg","f02cc8d4c070b3ed2a72bcdfb2f73d18"],["/static/media/_56B6144.4dbb9690.jpg","4dbb9690a2f21f7ceac00aceb695bada"],["/static/media/_56B6144.5a01d1d3.jpg","5a01d1d3499a232c919b0a9259f81557"],["/static/media/_MG_0011.1a60de63.jpg","1a60de63b0b0a4e6bb146c4eae6f9686"],["/static/media/_MG_0011.45ccb814.jpg","45ccb81402782fd0540ec6fc0146a2d6"],["/static/media/card-action.c2b64a37.svg","c2b64a379261f84f41446fb1b2f96bb4"],["/static/media/card-alliance.6b3c7a57.svg","6b3c7a57594eee9a5191526dfc1b9247"],["/static/media/card-may.590d8e82.svg","590d8e826a104f1f48624aa3564347e0"],["/static/media/card-may.bc5d06c5.png","bc5d06c5bdf40179eea75f54e424aea1"],["/static/media/card-merkel.9951ea15.png","9951ea153e8add4a95b9a52aa8015ae1"],["/static/media/card-money.874c8b27.svg","874c8b279b9553b59a6978994c36fc5c"],["/static/media/card-paolo.a6f23372.png","a6f233721f653be715b89bb09cec7962"],["/static/media/card-player.acc995fc.svg","acc995fc37c459f49a4315953da3ad57"],["/static/media/card-trudeau.f1461b8c.png","f1461b8c57b7e4eb35a0433a942a232d"],["/static/media/card-trump.97eab4fb.png","97eab4fb515c9d68becd96bac44810e7"],["/static/media/card-trump.c318afff.svg","c318afff75e0c36e0abd5f50327cb14e"],["/static/media/card-warning.1f3f797d.svg","1f3f797d1b077a7e192fcdffd21c65bf"],["/static/media/card-yield.4c61a7ee.svg","4c61a7ee40aef61f7aaa9655f0283d73"],["/static/media/front-placeholder.7f5bb3ab.jpg","7f5bb3abb55a42868f0c302733c0a184"],["/static/media/front.b52cb763.jpg","b52cb763172331da2e8f02183b484340"],["/static/media/ipad-outline.b3df5643.gif","b3df56435338f893546fe4268d93b972"],["/static/media/ipad.aeb42885.gif","aeb42885a57db9a9671ed10d6b83b9e6"],["/static/media/lettering-black.c2a9e735.svg","c2a9e7354ed51f2436cbe805b2e7fb71"],["/static/media/lettering-white.fedd7512.svg","fedd751239384d0165002508bd35b14d"],["/static/media/logo-black.35f50f49.png","35f50f496461f0f421aac66432a00383"],["/static/media/logo-black.ffa75bec.svg","ffa75beccaf7d1583a35a7336f28274f"],["/static/media/logo.794b6ee4.svg","794b6ee49fbda19260f98d4d25a42d13"],["/static/media/logo.cd65ec78.png","cd65ec7897a22711933c5e635b9e4cd1"],["/static/media/poster.19bcabca.png","19bcabca96ae49638830c0aae0cf951f"],["/static/media/poster.260ea0e3.jpg","260ea0e3a035d7bfd4c6b55c163927d5"],["/static/media/poster.9f9a44ea.svg","9f9a44ea487eb048bf3e3272ae31ddb1"],["/static/media/projection-inverse.26e5ee20.gif","26e5ee207c173e7198da4867a34fa020"],["/static/media/projection.6f481435.gif","6f48143516e508793f1a5fa4706ecaa7"],["/static/media/thumb copy.e0c9ae65.png","e0c9ae65786fae9352a024d35f06f27b"],["/static/media/thumb-1.f144932d.png","f144932dff83e3a35572cd02541a307e"],["/static/media/thumb.3dabb190.png","3dabb1904b7c81e0656c3ba8e7d9bf66"],["/static/media/thumb.e2ad0dff.png","e2ad0dffb3f6414298bd0ebd930aba05"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var d="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(d,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});