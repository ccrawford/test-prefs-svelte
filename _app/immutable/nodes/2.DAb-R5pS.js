import{s as ut,e as h,b as C,t as X,d as g,f as S,O as y,j as T,i as p,h as $,v as c,G as Qe,k as x,l as r,P as Se,Q as j,R as U,S as _t,T as Re,m as ft,n as B,U as ue,A as vt,V as bt,p as Xe,W as $e,r as Lt}from"../chunks/scheduler.BKjQQbRm.js";import{S as dt,i as ht,t as gt,a as mt,b as Ct,d as Tt,m as St,e as Et}from"../chunks/index.CK1WQEui.js";function Y(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}let Ue="";function kt(l){Ue=l}async function Nt(){const l=await fetch(`${Ue}/api/preferences`);if(!l.ok)throw new Error("Failed to fetch preferences");return l.json()}async function pt(l){const e=await fetch(`${Ue}/api/preferences`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!e.ok)throw new Error("Failed to update preferences");return e.json()}const Pt=[{description:"Eastern",value:"EST5EDT,M3.2.0,M11.1.0"},{description:"Central",value:"CST6CDT,M3.2.0,M11.1.0"},{description:"Mountain",value:"MST7MDT,M3.2.0,M11.1.0"},{description:"Pacific",value:"PST8PDT,M3.2.0,M11.1.0"}],At=[{id:110,name:"Baltimore Orioles",league:"American League"},{id:111,name:"Boston Red Sox",league:"American League"},{id:145,name:"Chicago White Sox",league:"American League"},{id:114,name:"Cleveland Guardians",league:"American League"},{id:116,name:"Detroit Tigers",league:"American League"},{id:117,name:"Houston Astros",league:"American League"},{id:118,name:"Kansas City Royals",league:"American League"},{id:108,name:"Los Angeles Angels",league:"American League"},{id:142,name:"Minnesota Twins",league:"American League"},{id:147,name:"New York Yankees",league:"American League"},{id:133,name:"Oakland Athletics",league:"American League"},{id:136,name:"Seattle Mariners",league:"American League"},{id:139,name:"Tampa Bay Rays",league:"American League"},{id:140,name:"Texas Rangers",league:"American League"},{id:141,name:"Toronto Blue Jays",league:"American League"},{id:109,name:"Arizona D-backs",league:"National League"},{id:144,name:"Atlanta Braves",league:"National League"},{id:112,name:"Chicago Cubs",league:"National League"},{id:113,name:"Cincinnati Reds",league:"National League"},{id:115,name:"Colorado Rockies",league:"National League"},{id:119,name:"Los Angeles Dodgers",league:"National League"},{id:146,name:"Miami Marlins",league:"National League"},{id:158,name:"Milwaukee Brewers",league:"National League"},{id:121,name:"New York Mets",league:"National League"},{id:143,name:"Philadelphia Phillies",league:"National League"},{id:134,name:"Pittsburgh Pirates",league:"National League"},{id:135,name:"San Diego Padres",league:"National League"},{id:137,name:"San Francisco Giants",league:"National League"},{id:138,name:"St. Louis Cardinals",league:"National League"},{id:120,name:"Washington Nationals",league:"National League"}],ce=At.reduce((l,e)=>(l[e.league]||(l[e.league]=[]),l[e.league].push(e),l),{});Object.values(ce).forEach(l=>{l.sort((e,a)=>{const t=e.name.split(" ").slice(-1)[0],n=a.name.split(" ").slice(-1)[0];return t.localeCompare(n)})});function It(l,e,a){const t=l.slice();return t[14]=e[a],t}function et(l,e,a){const t=l.slice();return t[17]=e[a][0],t[18]=e[a][1],t}function tt(l,e,a){const t=l.slice();return t[21]=e[a],t}function lt(l,e,a){const t=l.slice();return t[17]=e[a][0],t[18]=e[a][1],t}function at(l,e,a){const t=l.slice();return t[21]=e[a],t}function nt(l){let e,a=l[21].name+"",t;return{c(){e=h("option"),t=X(a),this.h()},l(n){e=g(n,"OPTION",{});var i=S(e);t=$(i,a),i.forEach(p),this.h()},h(){e.__value=l[21].id,j(e,e.__value)},m(n,i){x(n,e,i),r(e,t)},p:B,d(n){n&&p(e)}}}function st(l){let e,a=Y(l[18]),t=[];for(let n=0;n<a.length;n+=1)t[n]=nt(at(l,a,n));return{c(){e=h("optgroup");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=g(n,"OPTGROUP",{label:!0});var i=S(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(p),this.h()},h(){c(e,"label",l[17])},m(n,i){x(n,e,i);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(n,i){if(i&0){a=Y(n[18]);let s;for(s=0;s<a.length;s+=1){const m=at(n,a,s);t[s]?t[s].p(m,i):(t[s]=nt(m),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},d(n){n&&p(e),ue(t,n)}}}function rt(l){let e,a,t,n,i=l[21].name+"",s,m,f,b;function _(){return l[6](l[21])}return{c(){e=h("label"),a=h("input"),n=C(),s=X(i),m=C(),this.h()},l(L){e=g(L,"LABEL",{class:!0});var v=S(e);a=g(v,"INPUT",{type:!0,class:!0}),n=T(v),s=$(v,i),m=T(v),v.forEach(p),this.h()},h(){c(a,"type","checkbox"),a.checked=t=l[0].followedTeamIds.includes(l[21].id),c(a,"class","svelte-105xse1"),c(e,"class","checkbox-label svelte-105xse1")},m(L,v){x(L,e,v),r(e,a),r(e,n),r(e,s),r(e,m),f||(b=U(a,"change",_),f=!0)},p(L,v){l=L,v&1&&t!==(t=l[0].followedTeamIds.includes(l[21].id))&&(a.checked=t)},d(L){L&&p(e),f=!1,b()}}}function it(l){let e,a=l[17]+"",t,n,i,s=Y(l[18]),m=[];for(let f=0;f<s.length;f+=1)m[f]=rt(tt(l,s,f));return{c(){e=h("div"),t=X(a),n=C();for(let f=0;f<m.length;f+=1)m[f].c();i=Xe(),this.h()},l(f){e=g(f,"DIV",{class:!0});var b=S(e);t=$(b,a),b.forEach(p),n=T(f);for(let _=0;_<m.length;_+=1)m[_].l(f);i=Xe(),this.h()},h(){c(e,"class","league-header svelte-105xse1")},m(f,b){x(f,e,b),r(e,t),x(f,n,b);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(f,b);x(f,i,b)},p(f,b){if(b&17){s=Y(f[18]);let _;for(_=0;_<s.length;_+=1){const L=tt(f,s,_);m[_]?m[_].p(L,b):(m[_]=rt(L),m[_].c(),m[_].m(i.parentNode,i))}for(;_<m.length;_+=1)m[_].d(1);m.length=s.length}},d(f){f&&(p(e),p(n),p(i)),ue(m,f)}}}function xt(l){let e,a=l[14].description+"",t;return{c(){e=h("option"),t=X(a),this.h()},l(n){e=g(n,"OPTION",{});var i=S(e);t=$(i,a),i.forEach(p),this.h()},h(){e.__value=l[14].value,j(e,e.__value)},m(n,i){x(n,e,i),r(e,t)},p:B,d(n){n&&p(e)}}}function ot(l){let e,a="Preferences saved successfully!";return{c(){e=h("div"),e.textContent=a,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-13slxbz"&&(e.textContent=a),this.h()},h(){c(e,"class","status-message success svelte-105xse1")},m(t,n){x(t,e,n)},d(t){t&&p(e)}}}function ct(l){let e,a,t;return{c(){e=h("div"),a=X("Error saving preferences: "),t=X(l[2]),this.h()},l(n){e=g(n,"DIV",{class:!0});var i=S(e);a=$(i,"Error saving preferences: "),t=$(i,l[2]),i.forEach(p),this.h()},h(){c(e,"class","status-message error svelte-105xse1")},m(n,i){x(n,e,i),r(e,a),r(e,t)},p(n,i){i&4&&ft(t,n[2])},d(n){n&&p(e)}}}function wt(l){let e,a,t,n="Favorite Team",i,s,m,f,b,_="Followed Teams",L,v,ie,D,O,de="Timezone",N,I,ke,ee,q,je="Brightness:",Ne,w,Pe,te,H,Fe="Update Server Name:",Ae,z,Ie,le,J,Ge="ZIP Code:",xe,R,we,ae,Z,We="Screen Rotate Seconds:",Me,V,ye,ne,K,Ye="Spoiler Mode:",Be,F,De,G,oe=l[1]==="saving"?"Saving...":"Save Preferences",he,ge,Oe,me,ze,qe,se=Y(Object.entries(ce)),E=[];for(let o=0;o<se.length;o+=1)E[o]=st(lt(l,se,o));let re=Y(Object.entries(ce)),k=[];for(let o=0;o<re.length;o+=1)k[o]=it(et(l,re,o));let He=Y(Pt),W=[];for(let o=0;o<He.length;o+=1)W[o]=xt(It(l,He,o));let A=l[1]==="success"&&ot(),P=l[1]==="error"&&ct(l);return{c(){e=h("form"),a=h("div"),t=h("label"),t.textContent=n,i=C(),s=h("select");for(let o=0;o<E.length;o+=1)E[o].c();m=C(),f=h("div"),b=h("label"),b.textContent=_,L=C(),v=h("div");for(let o=0;o<k.length;o+=1)k[o].c();ie=C(),D=h("div"),O=h("label"),O.textContent=de,N=C(),I=h("select");for(let o=0;o<W.length;o+=1)W[o].c();ke=C(),ee=h("div"),q=h("label"),q.textContent=je,Ne=C(),w=h("input"),Pe=C(),te=h("div"),H=h("label"),H.textContent=Fe,Ae=C(),z=h("input"),Ie=C(),le=h("div"),J=h("label"),J.textContent=Ge,xe=C(),R=h("input"),we=C(),ae=h("div"),Z=h("label"),Z.textContent=We,Me=C(),V=h("input"),ye=C(),ne=h("div"),K=h("label"),K.textContent=Ye,Be=C(),F=h("input"),De=C(),G=h("button"),he=X(oe),Oe=C(),A&&A.c(),me=C(),P&&P.c(),this.h()},l(o){e=g(o,"FORM",{class:!0});var d=S(e);a=g(d,"DIV",{class:!0});var u=S(a);t=g(u,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1y8w26s"&&(t.textContent=n),i=T(u),s=g(u,"SELECT",{name:!0,id:!0,class:!0});var Q=S(s);for(let M=0;M<E.length;M+=1)E[M].l(Q);Q.forEach(p),u.forEach(p),m=T(d),f=g(d,"DIV",{class:!0});var pe=S(f);b=g(pe,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(b)!=="svelte-k2gv27"&&(b.textContent=_),L=T(pe),v=g(pe,"DIV",{class:!0});var Je=S(v);for(let M=0;M<k.length;M+=1)k[M].l(Je);Je.forEach(p),pe.forEach(p),ie=T(d),D=g(d,"DIV",{class:!0});var _e=S(D);O=g(_e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(O)!=="svelte-132gdca"&&(O.textContent=de),N=T(_e),I=g(_e,"SELECT",{id:!0,class:!0});var Ze=S(I);for(let M=0;M<W.length;M+=1)W[M].l(Ze);Ze.forEach(p),_e.forEach(p),ke=T(d),ee=g(d,"DIV",{});var ve=S(ee);q=g(ve,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(q)!=="svelte-1sssdso"&&(q.textContent=je),Ne=T(ve),w=g(ve,"INPUT",{type:!0,id:!0,min:!0,max:!0}),ve.forEach(p),Pe=T(d),te=g(d,"DIV",{});var be=S(te);H=g(be,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(H)!=="svelte-1gmi1yu"&&(H.textContent=Fe),Ae=T(be),z=g(be,"INPUT",{type:!0,id:!0,class:!0}),be.forEach(p),Ie=T(d),le=g(d,"DIV",{});var Le=S(le);J=g(Le,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(J)!=="svelte-1kqpl8y"&&(J.textContent=Ge),xe=T(Le),R=g(Le,"INPUT",{type:!0,id:!0,class:!0}),Le.forEach(p),we=T(d),ae=g(d,"DIV",{});var Ce=S(ae);Z=g(Ce,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(Z)!=="svelte-1ll3jsi"&&(Z.textContent=We),Me=T(Ce),V=g(Ce,"INPUT",{type:!0,id:!0,class:!0}),Ce.forEach(p),ye=T(d),ne=g(d,"DIV",{});var Te=S(ne);K=g(Te,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(K)!=="svelte-12mtjhk"&&(K.textContent=Ye),Be=T(Te),F=g(Te,"INPUT",{type:!0,id:!0,class:!0}),Te.forEach(p),De=T(d),G=g(d,"BUTTON",{type:!0,class:!0});var Ke=S(G);he=$(Ke,oe),Ke.forEach(p),Oe=T(d),A&&A.l(d),me=T(d),P&&P.l(d),d.forEach(p),this.h()},h(){c(t,"for","favTeamId"),c(t,"class","svelte-105xse1"),c(s,"name","favTeamId"),c(s,"id","favTeamId"),c(s,"class","svelte-105xse1"),l[0].favTeamId===void 0&&Qe(()=>l[5].call(s)),c(a,"class","form-group svelte-105xse1"),c(b,"for","followedTeamIds"),c(b,"class","svelte-105xse1"),c(v,"class","checkbox-group svelte-105xse1"),c(f,"class","form-group svelte-105xse1"),c(O,"for","tzString"),c(O,"class","svelte-105xse1"),c(I,"id","tzString"),c(I,"class","svelte-105xse1"),l[0].tzString===void 0&&Qe(()=>l[7].call(I)),c(D,"class","form-group svelte-105xse1"),c(q,"for","brightness"),c(q,"class","svelte-105xse1"),c(w,"type","range"),c(w,"id","brightness"),c(w,"min","0"),c(w,"max","100"),c(H,"for","updateServerName"),c(H,"class","svelte-105xse1"),c(z,"type","text"),c(z,"id","updateServerName"),c(z,"class","svelte-105xse1"),c(J,"for","zipCode"),c(J,"class","svelte-105xse1"),c(R,"type","text"),c(R,"id","zipCode"),c(R,"class","svelte-105xse1"),c(Z,"for","screenRotateSeconds"),c(Z,"class","svelte-105xse1"),c(V,"type","number"),c(V,"id","screenRotateSeconds"),c(V,"class","svelte-105xse1"),c(K,"for","spoilerMode"),c(K,"class","svelte-105xse1"),c(F,"type","checkbox"),c(F,"id","spoilerMode"),c(F,"class","svelte-105xse1"),c(G,"type","submit"),G.disabled=ge=l[1]==="saving",c(G,"class","svelte-105xse1"),c(e,"class","svelte-105xse1")},m(o,d){x(o,e,d),r(e,a),r(a,t),r(a,i),r(a,s);for(let u=0;u<E.length;u+=1)E[u]&&E[u].m(s,null);Se(s,l[0].favTeamId,!0),r(e,m),r(e,f),r(f,b),r(f,L),r(f,v);for(let u=0;u<k.length;u+=1)k[u]&&k[u].m(v,null);r(e,ie),r(e,D),r(D,O),r(D,N),r(D,I);for(let u=0;u<W.length;u+=1)W[u]&&W[u].m(I,null);Se(I,l[0].tzString,!0),r(e,ke),r(e,ee),r(ee,q),r(ee,Ne),r(ee,w),j(w,l[0].brightness),r(e,Pe),r(e,te),r(te,H),r(te,Ae),r(te,z),j(z,l[0].updateServerName),r(e,Ie),r(e,le),r(le,J),r(le,xe),r(le,R),j(R,l[0].zipCode),r(e,we),r(e,ae),r(ae,Z),r(ae,Me),r(ae,V),j(V,l[0].screenRotateSeconds),r(e,ye),r(e,ne),r(ne,K),r(ne,Be),r(ne,F),F.checked=l[0].spoilerMode,r(e,De),r(e,G),r(G,he),r(e,Oe),A&&A.m(e,null),r(e,me),P&&P.m(e,null),ze||(qe=[U(s,"change",l[5]),U(I,"change",l[7]),U(w,"change",l[8]),U(w,"input",l[8]),U(z,"input",l[9]),U(R,"input",l[10]),U(V,"input",l[11]),U(F,"change",l[12]),U(e,"submit",_t(l[3]))],ze=!0)},p(o,[d]){if(d&0){se=Y(Object.entries(ce));let u;for(u=0;u<se.length;u+=1){const Q=lt(o,se,u);E[u]?E[u].p(Q,d):(E[u]=st(Q),E[u].c(),E[u].m(s,null))}for(;u<E.length;u+=1)E[u].d(1);E.length=se.length}if(d&1&&Se(s,o[0].favTeamId),d&17){re=Y(Object.entries(ce));let u;for(u=0;u<re.length;u+=1){const Q=et(o,re,u);k[u]?k[u].p(Q,d):(k[u]=it(Q),k[u].c(),k[u].m(v,null))}for(;u<k.length;u+=1)k[u].d(1);k.length=re.length}d&1&&Se(I,o[0].tzString),d&1&&j(w,o[0].brightness),d&1&&z.value!==o[0].updateServerName&&j(z,o[0].updateServerName),d&1&&R.value!==o[0].zipCode&&j(R,o[0].zipCode),d&1&&Re(V.value)!==o[0].screenRotateSeconds&&j(V,o[0].screenRotateSeconds),d&1&&(F.checked=o[0].spoilerMode),d&2&&oe!==(oe=o[1]==="saving"?"Saving...":"Save Preferences")&&ft(he,oe),d&2&&ge!==(ge=o[1]==="saving")&&(G.disabled=ge),o[1]==="success"?A||(A=ot(),A.c(),A.m(e,me)):A&&(A.d(1),A=null),o[1]==="error"?P?P.p(o,d):(P=ct(o),P.c(),P.m(e,null)):P&&(P.d(1),P=null)},i:B,o:B,d(o){o&&p(e),ue(E,o),ue(k,o),ue(W,o),A&&A.d(),P&&P.d(),ze=!1,vt(qe)}}}function Mt(l,e,a){let{preferences:t}=e;const n=bt();let i="idle",s="";async function m(){a(1,i="saving");try{const N=await pt(t);a(0,t=N),a(1,i="success"),n("submit",t),setTimeout(()=>{a(1,i="idle")},3e3)}catch(N){a(1,i="error"),a(2,s=N.message),setTimeout(()=>{a(1,i="idle"),a(2,s="")},5e3)}}function f(N){t.followedTeamIds.includes(N)?a(0,t.followedTeamIds=t.followedTeamIds.filter(I=>I!==N),t):a(0,t.followedTeamIds=[...t.followedTeamIds,N],t)}function b(){t.favTeamId=$e(this),a(0,t)}const _=N=>f(N.id);function L(){t.tzString=$e(this),a(0,t)}function v(){t.brightness=Re(this.value),a(0,t)}function ie(){t.updateServerName=this.value,a(0,t)}function D(){t.zipCode=this.value,a(0,t)}function O(){t.screenRotateSeconds=Re(this.value),a(0,t)}function de(){t.spoilerMode=this.checked,a(0,t)}return l.$$set=N=>{"preferences"in N&&a(0,t=N.preferences)},[t,i,s,m,f,b,_,L,v,ie,D,O,de]}class yt extends dt{constructor(e){super(),ht(this,e,Mt,wt,ut,{preferences:0})}}function Bt(l){let e,a;return e=new yt({props:{preferences:Ee}}),e.$on("submit",Rt),{c(){Ct(e.$$.fragment)},l(t){Tt(e.$$.fragment,t)},m(t,n){St(e,t,n),a=!0},p:B,i(t){a||(gt(e.$$.fragment,t),a=!0)},o(t){mt(e.$$.fragment,t),a=!1},d(t){Et(e,t)}}}function Dt(l){let e,a;return{c(){e=h("p"),a=X(fe),this.h()},l(t){e=g(t,"P",{class:!0});var n=S(e);a=$(n,fe),n.forEach(p),this.h()},h(){c(e,"class","error svelte-1nrfupz")},m(t,n){x(t,e,n),r(e,a)},p:B,i:B,o:B,d(t){t&&p(e)}}}function Ot(l){let e,a="Loading preferences...";return{c(){e=h("p"),e.textContent=a},l(t){e=g(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-13zaa54"&&(e.textContent=a)},m(t,n){x(t,e,n)},p:B,i:B,o:B,d(t){t&&p(e)}}}function zt(l){let e,a,t="Preference Manager",n,i,s,m;const f=[Ot,Dt,Bt],b=[];function _(L,v){return Ve?0:fe?1:Ee?2:-1}return~(i=_())&&(s=b[i]=f[i](l)),{c(){e=h("main"),a=h("h1"),a.textContent=t,n=C(),s&&s.c(),this.h()},l(L){e=g(L,"MAIN",{class:!0});var v=S(e);a=g(v,"H1",{"data-svelte-h":!0}),y(a)!=="svelte-16x0lam"&&(a.textContent=t),n=T(v),s&&s.l(v),v.forEach(p),this.h()},h(){c(e,"class","svelte-1nrfupz")},m(L,v){x(L,e,v),r(e,a),r(e,n),~i&&b[i].m(e,null),m=!0},p(L,[v]){s&&s.p(L,v)},i(L){m||(gt(s),m=!0)},o(L){mt(s),m=!1},d(L){L&&p(e),~i&&b[i].d()}}}let Ee=null,Ve=!0,fe=null;Lt(async()=>{try{const e=new URLSearchParams(window.location.search).get("host")||window.location.origin;kt(e),Ee=await Nt(),Ve=!1}catch(l){fe=l instanceof Error?l.message:"Failed to load preferences",Ve=!1}});async function Rt(l){try{Ee=await pt(l.detail)}catch(e){fe=e instanceof Error?e.message:"Failed to update preferences"}}class jt extends dt{constructor(e){super(),ht(this,e,null,zt,ut,{})}}export{jt as component};
