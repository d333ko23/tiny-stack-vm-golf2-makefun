import{mkdirSync as A,readdirSync as R,readFileSync as F,writeFileSync as W}from"fs"
const K='"CF*jr\x92\x9a!!!!!!!!RRRRRRRJRRRJRRR!RRR!!!!!!!!!!!!!$,,$"!!!!!!!!!!!J2!!!!!!!!!!!!!!**B*',B=[(x,y)=>x+y,(x,y)=>y-x,Math.imul,(x,y)=>y/x,(x,y)=>y%x,(x,y)=>(y>>>0)/(x>>>0),(x,y)=>(y>>>0)%(x>>>0),(x)=>-x,(x,y)=>x&y,(x,y)=>x|y,(x,y)=>x^y,(x)=>~x,(x,y)=>y<<x,(x,y)=>y>>x,(x,y)=>y>>>x,0,(x,y)=>y==x,(x,y)=>y<x,(x,y)=>(y>>>0)<(x>>>0)]
function run(p,q){
const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=D.slice(),U=new Uint8Array(65536)
let s=0,c=0,l=0,i=0,j=0,k=0,v=0,z=0
const e=x=>[U.slice(0,l),x]
for(;k++<1e6;){
if(j>>>0>=n)return e(9)
const y=p[j],t=K.charCodeAt(y)+94
if(!(t>=128))return e(5)
const g=t>>3&3
if((j+=1+(t&7))>n)return e(9)
if(s<g||s-g+(t>>5&3)>256)return e(s<g?2:3)
switch(y){
case 0:return e(0)
case 1:case 2:D[s++]=y<2?p[j-1]<<24>>24:p.readInt32LE(j-4);break
case 3:s--;break
case 4:case 6:D[s++]=D[s-2-(y>5)];break
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break
case 7:v=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=v;break
case 48:case 49:case 50:if(y<49||(D[--s]==0)^y>49)j+=p.readInt16LE(j-2);break
case 51:if(c==64)return e(7);C[c++]=j;j=p[j-2]|p[j-1]<<8;break
case 52:if(!c)return e(8);j=C[--c];break
case 64:case 65:if((v=D[s-1])>>>0>255)return e(6);y<65?D[s-1]=M[v]:(s-=2,M[v]=D[s]);break
case 80:case 81:v=y<81?D[--s]+"":String.fromCharCode(D[--s]);if(l+v.length>65536)return e(11);for(z=0;v[z];)U[l++]=v.charCodeAt(z++);break
case 82:D[s++]=q[i++]??-1;break
case 83:return e(D[--s]&255)
default:if(y>18&&y<23&&!D[s-1])return e(4);D[s-g]=B[y-16](D[s-1],D[s-2]),s-=g-1;break
}}
return e(10)
}
const E=process.env,I=E.MAKEFUN_INPUT_DIR??"/input",O=E.MAKEFUN_OUTPUT_DIR??"/output"
R(I).forEach(d=>{
const f=I+"/"+d,g=O+"/"+d
let o=["",0]
try{o=run(F(f+"/program.bin"),F(f+"/input.bin"))}catch{}
A(g,{recursive:!0})
W(g+"/stdout.bin",o[0])
W(g+"/exit.txt",o[1]+"\n")
})