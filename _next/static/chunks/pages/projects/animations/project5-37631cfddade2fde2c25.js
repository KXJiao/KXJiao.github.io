(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[631],{456:function(e,i,n){"use strict";n.d(i,{Ee:function(){return h}});var t=n(2090),s=n(9199),r=n(7294),a=n(8698);function o(){return(o=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,i){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(s[n]=e[n]);return s}var l=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],u=r.forwardRef((function(e,i){var n=e.htmlWidth,t=e.htmlHeight,s=e.alt,a=c(e,l);return r.createElement("img",o({width:n,height:t,ref:i,alt:s},a))})),h=(0,t.Gp)((function(e,i){var n=e.fallbackSrc,l=e.fallback,h=e.src,g=e.srcSet,m=e.align,j=e.fit,f=e.loading,x=e.ignoreFallback,p=e.crossOrigin,k=c(e,d),b=null!=f||x||void 0===n&&void 0===l,v=function(e){var i=e.loading,n=e.src,t=e.srcSet,s=e.onLoad,o=e.onError,c=e.crossOrigin,l=e.sizes,d=e.ignoreFallback,u=(0,r.useState)("pending"),h=u[0],g=u[1];(0,r.useEffect)((function(){g(n?"loading":"pending")}),[n]);var m=(0,r.useRef)(),j=(0,r.useCallback)((function(){if(n){f();var e=new Image;e.src=n,c&&(e.crossOrigin=c),t&&(e.srcset=t),l&&(e.sizes=l),i&&(e.loading=i),e.onload=function(e){f(),g("loaded"),null==s||s(e)},e.onerror=function(e){f(),g("failed"),null==o||o(e)},m.current=e}}),[n,c,t,l,s,o,i]),f=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,a.a)((function(){if(!d)return"loading"===h&&j(),function(){f()}}),[h,j,d]),d?"loaded":h}(o({},e,{ignoreFallback:b})),y=o({ref:i,objectFit:j,objectPosition:m},b?k:(0,s.CE)(k,["onError","onLoad"]));return"loaded"!==v?l||r.createElement(t.m$.img,o({as:u,className:"chakra-image__placeholder",src:n},y)):r.createElement(t.m$.img,o({as:u,src:h,srcSet:g,crossOrigin:p,loading:f,className:"chakra-image"},y))}));s.Ts&&(h.displayName="Image")},6543:function(e,i,n){"use strict";var t=n(8527),s=n(6571),r=n(5893);i.Z=function(e){var i=e.title,n=e.date,a=e.children;return(0,r.jsxs)(t.gC,{as:"article",spacing:5,justifyContent:"center",px:["5vw","10vw"],my:["2","2","5","5"],children:[(0,r.jsx)(t.X6,{children:i}),(0,r.jsx)(t.xv,{color:"gray.500",children:(0,r.jsx)(s.Z,{dateString:n})}),a]})}},2032:function(e,i,n){"use strict";var t=n(8527),s=n(5893);i.Z=function(e){var i=e.src,n=e.size;return(0,s.jsx)(t.oM,{minW:n,ratio:16/9,children:(0,s.jsx)("iframe",{src:i,allow:"fullscreen"})})}},6571:function(e,i,n){"use strict";var t=n(2902),s=n(327),r=n(5893);i.Z=function(e){var i=e.dateString,n=(0,t.Z)(i);return(0,r.jsx)("time",{dateTime:i,children:(0,s.Z)(n,"LLLL d, yyyy")})}},9493:function(e,i,n){"use strict";n.d(i,{Z:function(){return v}});var t=n(8527),s=n(9008),r=n(886),a=n(2090),o=n(949),c=n(1358),l=n(9583),d=n(5893),u=function(e){var i=e.children,n=e.label,t=e.href;return(0,d.jsxs)(a.m$.button,{bg:(0,o.ff)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:t,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:(0,o.ff)("blackAlpha.200","whiteAlpha.200")},children:[(0,d.jsx)(c.TX,{children:n}),i]})},h=function(){return(0,d.jsx)(t.xu,{bg:(0,o.ff)("gray.50","gray.900"),color:(0,o.ff)("gray.700","gray.200"),children:(0,d.jsxs)(t.W2,{as:t.Kq,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[(0,d.jsx)(t.xv,{children:"Made using Next.js and Chakra UI"}),(0,d.jsxs)(t.Kq,{direction:"row",spacing:6,children:[(0,d.jsx)(u,{label:"Github",href:r.Z.socialLinks.github,children:(0,d.jsx)(l.hJX,{})}),(0,d.jsx)(u,{label:"LinkedIn",href:r.Z.socialLinks.linkedin,children:(0,d.jsx)(l.ltd,{})})]})]})})},g=n(9876),m=n(7375),j=n(8921),f=n(1664),x=n(894),p=function(){return(0,d.jsxs)(x.JO,{boxSize:30,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[(0,d.jsx)("path",{fill:"#E1E8ED",d:"M20.143 32.215a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0z"}),(0,d.jsx)("path",{fill:"#E1E8ED",d:"M27.643 15.643C27.643 10.317 23.324 6 18 6a9.643 9.643 0 0 0-9.643 9.643c0 5.357-1.071 16.572-1.071 16.572a2.143 2.143 0 0 0 4.286 0 2.144 2.144 0 0 0 4.285 0h4.286a2.144 2.144 0 0 0 4.287 0 2.143 2.143 0 0 0 4.286 0c-.002 0-1.073-11.215-1.073-16.572z"}),(0,d.jsx)("path",{fill:"#DD2E44",d:"M20 3c0 2.209-1.447 6-2 6-.552 0-2-3.791-2-6s1.448-3 2-3c.553 0 2 .791 2 3zm-4.365 30c0-2.612 1.711-8 2.365-8 .653 0 2.365 5.388 2.365 8S18.652 36 18 36c-.654 0-2.365-.388-2.365-3z"}),(0,d.jsx)("ellipse",{fill:"#F4900C",cx:"18",cy:"22.5",rx:"7",ry:"4.5"}),(0,d.jsx)("path",{fill:"#FFAC33",d:"M25 22.5c0 1.5-14 1.5-14 0s4.791-4.5 7-4.5 7 3 7 4.5z"}),(0,d.jsx)("circle",{fill:"#292F33",cx:"11.5",cy:"18.5",r:"1.5"}),(0,d.jsx)("circle",{fill:"#292F33",cx:"24.5",cy:"18.5",r:"1.5"})]})},k=function(e){var i=e.link;return(0,d.jsx)(f.default,{href:"/".concat(i.toLowerCase(),"/"),passHref:!0,children:(0,d.jsx)(t.rU,{px:2,py:1,rounded:"md",_hover:{textDecoration:"none",bg:(0,o.ff)("gray.200","gray.700")},children:i})})},b=function(){var e=(0,m.qY)(),i=e.isOpen,n=e.onOpen,s=e.onClose,l=(0,o.If)(),u=l.colorMode,h=l.toggleColorMode;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(t.xu,{bg:(0,o.ff)("gray.100","gray.900"),px:4,children:[(0,d.jsxs)(t.kC,{alignItems:"center",justifyContent:"space-between",mx:"auto",children:[i?null:(0,d.jsxs)(t.kC,{children:[(0,d.jsx)(f.default,{href:"/",passHref:!0,children:(0,d.jsxs)(t.rU,{title:"Home Page",display:"flex",alignItems:"center",children:[(0,d.jsx)(p,{}),(0,d.jsx)(c.TX,{children:"KJ"})]})}),(0,d.jsx)(a.m$.h1,{fontSize:"xl",fontWeight:"medium",ml:"2",children:"Kevin Jiao"})]}),(0,d.jsxs)(t.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,d.jsx)(j.hU,{size:"md",icon:i?(0,d.jsx)(g.Tw,{}):(0,d.jsx)(g.Uq,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:i?s:n}),(0,d.jsx)(t.Ug,{spacing:8,alignItems:"center",children:(0,d.jsxs)(t.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[r.Z.siteLinks.map((function(e){return(0,d.jsx)(k,{link:e},e)})),(0,d.jsx)(j.hU,{mt:4,"aria-label":"Toggle Mode",onClick:h,children:"light"===u?(0,d.jsx)(g.kL,{}):(0,d.jsx)(g.NW,{})})]})})]})]}),i?(0,d.jsx)(t.xu,{pb:4,display:{md:"none"},children:(0,d.jsxs)(t.Kq,{as:"nav",spacing:4,children:[r.Z.siteLinks.map((function(e){return(0,d.jsx)(k,{link:e},e)})),(0,d.jsx)(j.hU,{mt:4,"aria-label":"Toggle Mode",onClick:h,children:"light"===u?(0,d.jsx)(g.kL,{}):(0,d.jsx)(g.NW,{})})]})}):null]})})},v=function(e){var i=e.children;e.home;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.default,{children:[(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,d.jsx)("meta",{name:"description",content:"Kevin Jiao Personal Site"}),(0,d.jsx)("meta",{property:"og:image",content:r.Z.metaPic}),(0,d.jsx)("meta",{name:"og:title",content:r.Z.siteTitle}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,d.jsxs)(t.kC,{minH:"100vh",direction:"column",children:[(0,d.jsx)(b,{}),(0,d.jsx)(t.kC,{flex:1,direction:"column",as:"main",children:i}),(0,d.jsx)(h,{})]})]})}},886:function(e,i){"use strict";i.Z={name:"Kevin Jiao",siteTitle:"Kevin Jiao",metaPic:"https://og-image.vercel.app/**Kevin%20Jiao**.png?theme=dark&md=1&fontSize=225px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Ftwitter%2Ftwemoji%2Fba9c621af05213b19107d27a4b60afed888033dc%2Fsvg%2F1f414.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Fgooglefonts%2Fnoto-emoji%2F9a5261d871451f9b5183c93483cbd68ed916b1e9%2Fsvg%2Femoji_u1f99c.svg&widths=350&widths=350&widths=350&heights=350&heights=350&heights=350",siteLinks:["About","Projects","Misc"],projects:[{imageURL:"/images/animations/project1/Change1.PNG",title:"Computer Animation Projects",description:"Projects made in Computer Animation class",githubLink:"",deployLink:"/projects/animations",tags:["Autodesk Maya"],external:!1},{imageURL:"/images/site.PNG",title:"KXJiao.github.io",description:"My personal site, currently work in progress",githubLink:"https://github.com/KXJiao/KXJiao.github.io",deployLink:"/",tags:["Next.js","Typescript"],external:!1}],animations:[{imageURL:"/images/animations/project1/Change2.PNG",title:"Project 1: Planet Animation",description:"First Project: Solar System animation",githubLink:"",deployLink:"/projects/animations/project1",tags:[],external:!1},{imageURL:"/images/animations/project2/Smooth2.PNG",title:"Project 2: Treasure Chest",description:"Second Project: Treasure chest modeling",githubLink:"",deployLink:"/projects/animations/project2",tags:[],external:!1},{imageURL:"/images/animations/project3/icon.png",title:"Project 3: Bouncy Ball",description:"Third Project: 12 Principles of Animation",githubLink:"",deployLink:"/projects/animations/project3",tags:[],external:!1},{imageURL:"/images/animations/project4/icon.png",title:"Project 4: Rube Goldberg",description:"Fourth Project: Maya FX",githubLink:"",deployLink:"/projects/animations/project4",tags:[],external:!1},{imageURL:"/images/animations/project5/icon.png",title:"Project 5: Python Scripting",description:"Fifth Project: Mash + Python",githubLink:"",deployLink:"/projects/animations/project5",tags:[],external:!1}],socialLinks:{linkedin:"https://linkedin.com/in/kxjiao",github:"https://github.com/KXJiao"}}},2711:function(e,i,n){"use strict";n.r(i);var t=n(8527),s=n(456),r=n(9008),a=n(6543),o=n(2032),c=n(9493),l=n(886),d=n(5893);i.default=function(){return(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(r.default,{children:(0,d.jsxs)("title",{children:[l.Z.siteTitle," - Animations: Project 5"]})}),(0,d.jsxs)(a.Z,{title:"Project 5: Python Scripting",date:"2022-04-28",children:[(0,d.jsx)(t.X6,{size:"md",children:"Final Animation:"}),(0,d.jsx)(o.Z,{size:"80vw",src:"https://www.youtube.com/embed/jxse_iZ4uW0"}),(0,d.jsx)(t.LZ,{}),(0,d.jsx)(t.X6,{size:"md",children:"Images"}),(0,d.jsx)(t.X6,{size:"sm",children:"Dominos Image"}),(0,d.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,d.jsx)(s.Ee,{h:64,src:"/images/animations/project5/Duke.png",alt:"Java Duke t-posed on blue screen"}),(0,d.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"The image used on the dominos. Did you know that Java has a mascot, named Duke? The developers even 3d modeled him in various capacities."})]}),(0,d.jsx)(t.X6,{size:"sm",children:"Dominos"}),(0,d.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,d.jsx)(s.Ee,{h:64,src:"/images/animations/project5/icon.png",alt:"Dominos before falling"}),(0,d.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"3 Billion Devices Run Log4j"})]}),(0,d.jsx)(t.X6,{size:"sm",children:"Background Image"}),(0,d.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,d.jsx)(s.Ee,{h:64,src:"/images/animations/project5/windows.png",alt:"Bliss background 4k"}),(0,d.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"Windows XP"})]}),(0,d.jsx)(t.LZ,{}),(0,d.jsx)(t.X6,{size:"md",children:"Notes"}),(0,d.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"If someone could let me know why there exists a 3d Model of Duke driving a car, that would be great"}),(0,d.jsx)(t.LZ,{}),(0,d.jsx)(t.X6,{size:"md",children:"Credits"}),(0,d.jsx)(t.rU,{href:"http://cr.openjdk.java.net/~jeff/Duke/3d-preview/Duke.png",isExternal:!0,children:"Duke from OpenJDK Duke Project"}),(0,d.jsx)(t.rU,{href:"https://github.com/openjdk/duke/tree/master/3D",isExternal:!0,children:"Duke Car Bottom Text from openjdk's Github"})]})]})}},2284:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/animations/project5",function(){return n(2711)}])}},function(e){e.O(0,[445,237,503,774,888,179],(function(){return i=2284,e(e.s=i);var i}));var i=e.O();_N_E=i}]);