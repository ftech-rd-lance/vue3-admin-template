import{P as t}from"./index-9181a926.js";const u=()=>{var r;const e=t.currentRoute;if((r=e.value)!=null&&r.query.params)return JSON.parse(e.value.query.params)},o=(e,r)=>{let a={};r?a={params:JSON.stringify(r)}:a={},t.push({name:e,query:a})},n=()=>{t.go(-1)};export{n as a,u as g,o as r};