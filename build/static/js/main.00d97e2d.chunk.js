(this.webpackJsonpproblems=this.webpackJsonpproblems||[]).push([[0],{17:function(A,i,e){"use strict";e.r(i),i.default=e.p+"static/media/s.8e4446bc.png"},30:function(A,i,e){},31:function(A,i,e){},32:function(A,i,e){},34:function(A,i,e){},35:function(A,i,e){},36:function(A,i,e){},55:function(A,i,e){"use strict";e.r(i);var t=e(0),o=e(23),V=e.n(o),n=(e(30),e(8)),r=e(9),c=e(11),g=e(10),a=e(24),d=e(2),s=(e(31),e(32),e(1)),I=function(A){var i=A.history;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{className:"home_title",children:[Object(s.jsx)("span",{className:"complete",children:"Complete "})," My"," ",Object(s.jsx)("span",{className:"computer",children:" Computer!"})]}),Object(s.jsx)("h3",{children:"\ucef4\ud4e8\ud130 \ubd80\ud488 \ubaa8\uc73c\uae30"}),Object(s.jsx)("p",{className:"des",children:"(\ubaa8\ub4e0 \ub2f5\uc740 \uc601\uc5b4\ub85c \uc801\uc5b4\uc57c \ud569\ub2c8\ub2e4)"}),Object(s.jsx)("img",{src:e(17).default,alt:"solve",className:"homeimg",onClick:function(){i.push("/2021_Midterm_WEB/problems")}})]})},u=e(13),S=(e(34),e(35),function(A){Object(c.a)(e,A);var i=Object(g.a)(e);function e(){return Object(n.a)(this,e),i.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return Object(s.jsx)("header",{className:"prob_head",children:Object(s.jsxs)("h2",{children:["\ubb38\uc81c \ubc88\ud638: ",Object(s.jsx)("span",{children:this.props.name})," / 7"]})})}}]),e}(t.Component)),p=e.p+"static/media/1.dbf9aa58.png",Q=e.p+"static/media/3.dda3b8b6.png",k=e.p+"static/media/4.742b9426.png",E=e.p+"static/media/5.2a0354d0.png",O=e.p+"static/media/6.9e426833.png",R=[{id:1,pb:"GET \ubc29\uc2dd\ubcf4\ub2e4 POST \ubc29\uc2dd\uc774 \ub354 \uc548\uc804\ud558\ub2e4 (T or F)",answer:"t",reward:"Monitor"},{id:2,pb:"(      )\ub294 \ub192\uc740 \uc2e0\ub8b0\uc131\uc744 \ubcf4\uc7a5\ud558\uace0, Congestion Control \ubc0f Flow Control\uc744 \uc218\ud589\ud55c\ub2e4",answer:"tcp",reward:"Main body"},{id:3,pb:"Node.js is a (      )-threaded application.",answer:"single",reward:"Router"},{id:4,pb:"\uc6f9\uc0ac\uc774\ud2b8\ub97c \uad6c\uc131\ud558\ub294 3\uac00\uc9c0 \uc694\uc18c\ub294 HTML, CSS, (      )",answer:"javascript",reward:"Mouse"},{id:5,pb:"React\uc5d0\uc11c Component\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 (      )\ud615, class\ud615 \ub450 \uac00\uc9c0\uac00 \uc788\ub2e4",answer:"function",reward:"Speaker"},{id:6,pb:"\ud568\uc218\ub97c \uc120\uc5b8\ud560 \ub54c \uc0ac\uc6a9\ub41c \ubcc0\uc218\ub294 \ubb34\uc5c7\uc778\uac00 ?",answer:"parameter",reward:"HDD"},{id:7,pb:"\ub2e4\ub978 \ud568\uc218\uc5d0 argument\ub85c \uc804\ub2ec\ub418\ub294 \ud568\uc218\ub294 \ubb34\uc5c7\uc778\uac00 ?",answer:"callback",reward:"Keyboard"},{id:8,pb:"<\ucd94\uac00 \ubb38\uc81c> \uace0\uae09 \uc6f9 \ud504\ub85c\uadf8\ub798\ubc0d \uac15\uc758\ub97c \uc9c4\ud589\ud558\ub294 \uac15\uc758\uc2e4\uc740 106\ud638\uc774\ub2e4 (T or F)",answer:"t",reward:"Additional Part"}],h=function(A){Object(c.a)(e,A);var i=Object(g.a)(e);function e(A){var t;return Object(n.a)(this,e),(t=i.call(this,A)).probcnt=0,t.correctcnt=0,t.state={input:""},t.inputChange=t.inputChange.bind(Object(u.a)(t)),t.inputSubmit=t.inputSubmit.bind(Object(u.a)(t)),t}return Object(r.a)(e,[{key:"inputChange",value:function(A){this.setState({input:A.target.value}),console.log(this.state.input,this.probcnt)}},{key:"inputSubmit",value:function(A){A.preventDefault(),this.state.input.toLowerCase()===R[this.probcnt].answer?(this.correctcnt=this.correctcnt+1,this.probcnt=this.probcnt+1,alert(R[this.probcnt-1].reward+" GET!")):(this.probcnt=this.probcnt+1,alert("Wrong ! Answer is "+R[this.probcnt-1].answer)),this.correctcnt>=7&&this.probcnt>=7?this.props.history.push("/2021_Midterm_WEB/endpage/?success=1&correct="+this.correctcnt):this.correctcnt<=5&&7===this.probcnt&&this.props.history.push("/2021_Midterm_WEB/endpage/?success=0&correct="+this.correctcnt),this.inputChange(A)}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(S,{name:this.probcnt+1}),Object(s.jsx)("p",{className:"pb_text",children:R[this.probcnt].pb}),Object(s.jsxs)("form",{onSubmit:this.inputChange,children:[Object(s.jsx)("input",{type:"text",className:"clear",placeholder:"Your answer",value:this.state.value,onChange:this.inputChange}),Object(s.jsx)("button",{type:"reset",className:"btn_submit",value:this.state.value,onClick:this.inputSubmit,children:"\uc81c\ucd9c"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"reward_area",children:[Object(s.jsx)("p",{className:"reward_text",children:"REWARD"}),Object(s.jsx)("img",{src:0===this.probcnt?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAMAAAB6fSTWAAAArlBMVEUAAAANDQ1tbW2koqRtbW2Li4uMjIyMjIwNDQ0NDQ0NDQ2CgoINDQ2MjIyMjIx2dnaMjIxtbW1ycnJtbW0NDQ0NDQ1tbW0NDQ1tbW2MjIwNDQ0NDQ0NDQ2MjIwNDQ2MjIxtbW1tbW1tbW2MjIz///8NDQ2koqSMjIxtbW1cW1yLi4tPT092dnaFhYWAf4B9fX0YGBibmZqJiIlxcXEiIiKRkZErKytkZGRTUVI6OjrrLUrpAAAAJHRSTlMAQEBAv4C/QM+fvRAQz1Iwj48g799ggHzfpI8wIO/v38+naHDn2U08AAANFUlEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWHH3m0bhoIoCq4z8kGhBQIW4cibWP33JyhgD8LemR4O9gMAAAAAAAAf73bf19aQZlv7/VYhzr0h135WguO3IdpR8xnnsMbv7zqH7q1mOxro/qnJHg28fdVgq4G3VXOdDYwf6S50uOw1ls0dLt81VgOXGquBy6OmamD+N64BoUMQoUMAoUMAoUMAoUMAoUMAoUMAoUMAoUMAoUMAoUMAoUMAoUOAyNCffzDPv9CFznxCFzoBhC50Aghd6AQQutAJIHShE0DoQieA0IVOAKELnQBCFzoBhC50Aghd6AQQutAJIHShE0DoQieA0IVOAKELnQBCFzoBhC50Aghd6AQQutAJIHShE0DoQieA0IVOAKELnQBCf7FPBwIAAAAAgvytB7kcEp0B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0UVnQHTRGRBddAZEF50B0WOfDgQAAAAABPlbD3I5JDoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDoovOgOiiMyC66AyILjoDosc+HQgAAAAACPK3HuRySHQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRBedAdFFZ0B00RkQXXQGRI99OhAAAAAAEORvPcjlkOgMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiC46A6KLzoDoojMguugMiB77dCAAAAAAIMjfepDLIdEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZEF10BkQXnQHRRWdAdNEZED326UAAAAAAQJC/9SCXQ6IzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzILroDIguOgOii86A6KIzIHrs00ENACEQADFy54UE/wZ5YWKn9VDRCRBddAJEF50A0UUnQHTRCRBddAJEF50A0SFOdAgQHQJEhwDRIUB0CBAdAkSHANEhQHQIEB0CRIcA0SFAdAgQHQJEhwDRIUB0CBAdAkSHANEhQHQIEB0CRIcA0SFAdAgQHQLmRj/A862pNvD8a6oNiA4hokOA6BAgOgSIDgGiQ4DoECA6BIgOAaJDgOgQIDoEiA4BokOA6BAgOgSIDgGiQ4DoECA6BIgOAaJDgOgQIDoEiH7Zt5ecNqIgDKPlAWAIJChyJkRKBlF1YymybGRs2P/G4sckC+hBq+qcPXxq3fvfhgaEDg0IHRoQOjQgdGhA6NCA0KEBoUMDQocGhA4NCB0aEDo0IHRoQOjQgNChAaFDA0KHBoQODQgdGhA6NCB0aEDo0IDQoQGhQwNChwYWUdX7AJQPfTMAV5u6oa8H4OpYN/TDAFx91g09HdLharctHPpxAM5es3Do+wE4O1QOPV8HYBg2mVHWMre7ARj2+SvKesn8GIB15kOUtcjMvwN095aZP6KuVeb2bYDedtvMVRS2SKXT3u5Q/IMeca90uns/ZOkT+tnj8ly6czp9bbaZuXyM2i6l54eVjabWebL8GdU93ufJ3ssZOnrd58lD9e/5xWJ1Sf3oDxd62V0zX9W+h/vP4mWZJ4f1Ruz0sNusP/NkeV/3iTtTeBpn5yaAaY3zcxvApL6M8/MUwKTuxhkKYFJfxxn6HsCUbsYZugtgSs/jDP0JYEq34wzZ1yCi+IxuX4OT6jP6OP4OoPiMbl+DiPoz+jh+C6D4jG5fg4jyM7prd4j6M/o4PgdQfEa3r0FE+RndvsY/du5YNY4YjMKoMEpliEkWzKYIJGl+FTte8L7/u2UhvSblaO4573CR0AeinT+j62vQAjK6vgYBGV1fg4CMrq9BQEav+tGAk2d0fQ0CMnrVzwacPKPra5CQ0T27Q0BGr/ragJNndH0NAjK6vgYBGV1fg4CMrq9BQEbX1yAho+trEJDR9TUIyOj6GgRkdH0NAjK6vgYBGd2zOwRk9KfXBpw8o+tr8N/eXmaOnNGrvrzM+CYW/nl9v46pOrT7mLq8u9tDa2/XMfeoQ9vGjotTHb5fxo5bHdo2LB329LH40Gvs+tUg28vYda9je4xdfxpE+zZ2fdSx3cau3w2i9bFrq2O7j13XBtEyhj4aROvjaeWMXrUZOuwPfe2MbuiQUNeqDB0Chv4wdJjry2f0qpuhw1xfPqNX3Q0d5vrydc3QIWLom6HDXF8+o1d9GjrM9eUz+pOhw1xfv65V3QwdDN3QSdfXz+hVd0OHqb5+Rq/6MHSY6uvXtarN0OH8Q/80dJjq62f0J0OHqX6CjF51M3SYDz1Cg2iGDgEMHQIYOgQwdAhg6BDA0CGAoUMAQ4cAhg4BDB3+sl/HNgjAAAwEU6SjSpCogSr7T4hYI3+3w8tygNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BDQCH0OSPuegjUgbZ+CPaDtde5n0OFzbvd+DMi7fdPtOfztNZ/nUnP55wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWFPTgQAAAAAADyf20EVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVpDw5IAAAAAAT9f92OQAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgK0Is+7ahOnHwAAAABJRU5ErkJggg==":1===this.probcnt?p:2===this.probcnt?"data:image/png;base64,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":3===this.probcnt?Q:4===this.probcnt?k:5===this.probcnt?E:(this.probcnt,O),alt:"reward_img",className:"reward_img",style:this.probcnt<7?{visibility:"visible"}:{visibility:"hidden"}})]})]})}}]),e}(t.Component),C=(e(36),e(18)),D=e.n(C),B=e(17),F=e.p+"static/media/f.4af980f2.png",j=function(A){var i=A.location,e=A.history,t=D.a.parse(i.search).success,o=D.a.parse(i.search).correct;console.log(typeof t,t,typeof o,o);var V={content:""};return Number(t)>=1&&Number(o)>=7?V.content=V.content+"Congraduation !!!":V.content=V.content+"# of your parts is "+o+" ...",Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"1"===t?"result_s":"result_f",children:V.content}),Object(s.jsx)("img",{src:"1"===t?B.default:F,className:"result_img",alt:"result"}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"homebtn",onClick:function(){e.push("/2021_Midterm_WEB/")},children:"Go Home"})}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"againbtn",onClick:function(){e.push("/2021_Midterm_WEB/problems")},children:"Complete My Computer Again!"})]})},l=function(A){Object(c.a)(e,A);var i=Object(g.a)(e);function e(){return Object(n.a)(this,e),i.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(a.a,{children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/2021_Midterm_WEB/",component:I}),Object(s.jsx)(d.a,{exact:!0,path:"/2021_Midterm_WEB/problems",component:h}),Object(s.jsx)(d.a,{path:"/2021_Midterm_WEB/endpage/",component:j})]})})})}}]),e}(t.Component),m=function(A){A&&A instanceof Function&&e.e(3).then(e.bind(null,56)).then((function(i){var e=i.getCLS,t=i.getFID,o=i.getFCP,V=i.getLCP,n=i.getTTFB;e(A),t(A),o(A),V(A),n(A)}))};V.a.render(Object(s.jsx)(l,{}),document.getElementById("root")),m()}},[[55,1,2]]]);
//# sourceMappingURL=main.00d97e2d.chunk.js.map