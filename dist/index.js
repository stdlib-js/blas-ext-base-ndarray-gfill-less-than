"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var f=c(function(E,q){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),l=require('@stdlib/ndarray-base-clip-index/dist'),g=require('@stdlib/ndarray-base-stride/dist'),m=require('@stdlib/ndarray-base-offset/dist'),p=require('@stdlib/ndarray-base-data-buffer/dist'),v=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/blas-ext-base-gfill-less-than/dist').ndarray;function h(e){var r,i,s,d,t,n,u,a;return a=e[0],r=v(e[1]),d=v(e[2]),u=o(a,0),t=l(v(e[3]),u),n=l(v(e[4]),u),t>=n||(i=g(a,0),s=m(a)+i*t,x(n-t,r,d,p(a),i,s)),a}q.exports=h
});var D=f();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
