(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{456:function(e,i,n){"use strict";n.d(i,{Ee:function(){return g}});var t=n(2090),s=n(9199),a=n(7294),r=n(8698);function l(){return(l=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,i){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||(s[n]=e[n]);return s}var c=["htmlWidth","htmlHeight","alt"],h=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,i){var n=e.htmlWidth,t=e.htmlHeight,s=e.alt,r=o(e,c);return a.createElement("img",l({width:n,height:t,ref:i,alt:s},r))})),g=(0,t.Gp)((function(e,i){var n=e.fallbackSrc,c=e.fallback,g=e.src,m=e.srcSet,u=e.align,f=e.fit,j=e.loading,x=e.ignoreFallback,p=e.crossOrigin,b=o(e,h),y=null!=j||x||void 0===n&&void 0===c,k=function(e){var i=e.loading,n=e.src,t=e.srcSet,s=e.onLoad,l=e.onError,o=e.crossOrigin,c=e.sizes,h=e.ignoreFallback,d=(0,a.useState)("pending"),g=d[0],m=d[1];(0,a.useEffect)((function(){m(n?"loading":"pending")}),[n]);var u=(0,a.useRef)(),f=(0,a.useCallback)((function(){if(n){j();var e=new Image;e.src=n,o&&(e.crossOrigin=o),t&&(e.srcset=t),c&&(e.sizes=c),i&&(e.loading=i),e.onload=function(e){j(),m("loaded"),null==s||s(e)},e.onerror=function(e){j(),m("failed"),null==l||l(e)},u.current=e}}),[n,o,t,c,s,l,i]),j=function(){u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,r.a)((function(){if(!h)return"loading"===g&&f(),function(){j()}}),[g,f,h]),h?"loaded":g}(l({},e,{ignoreFallback:y})),v=l({ref:i,objectFit:f,objectPosition:u},y?b:(0,s.CE)(b,["onError","onLoad"]));return"loaded"!==k?c||a.createElement(t.m$.img,l({as:d,className:"chakra-image__placeholder",src:n},v)):a.createElement(t.m$.img,l({as:d,src:g,srcSet:m,crossOrigin:p,loading:j,className:"chakra-image"},v))}));s.Ts&&(g.displayName="Image")},6543:function(e,i,n){"use strict";var t=n(8527),s=n(6571),a=n(5893);i.Z=function(e){var i=e.title,n=e.date,r=e.children;return(0,a.jsxs)(t.gC,{as:"article",spacing:5,justifyContent:"center",px:["5vw","10vw"],my:["2","2","5","5"],children:[(0,a.jsx)(t.X6,{children:i}),(0,a.jsx)(t.xv,{color:"gray.500",children:(0,a.jsx)(s.Z,{dateString:n})}),r]})}},2032:function(e,i,n){"use strict";var t=n(8527),s=n(5893);i.Z=function(e){var i=e.src,n=e.size;return(0,s.jsx)(t.oM,{minW:n,ratio:16/9,children:(0,s.jsx)("iframe",{src:i,allow:"fullscreen"})})}},6571:function(e,i,n){"use strict";var t=n(2902),s=n(327),a=n(5893);i.Z=function(e){var i=e.dateString,n=(0,t.Z)(i);return(0,a.jsx)("time",{dateTime:i,children:(0,s.Z)(n,"LLLL d, yyyy")})}},1447:function(e,i,n){"use strict";n.d(i,{Z:function(){return k}});var t=n(8527),s=n(9008),a=n(886),r=n(2090),l=n(949),o=n(1358),c=n(9583),h=n(5893),d=function(e){var i=e.children,n=e.label,t=e.href;return(0,h.jsxs)(r.m$.button,{bg:(0,l.ff)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:t,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:(0,l.ff)("blackAlpha.200","whiteAlpha.200")},children:[(0,h.jsx)(o.TX,{children:n}),i]})},g=function(){return(0,h.jsx)(t.xu,{bg:(0,l.ff)("gray.50","gray.900"),color:(0,l.ff)("gray.700","gray.200"),children:(0,h.jsxs)(t.W2,{as:t.Kq,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[(0,h.jsx)(t.xv,{children:"Made using Next.js and Chakra UI"}),(0,h.jsxs)(t.Kq,{direction:"row",spacing:6,children:[(0,h.jsx)(d,{label:"Github",href:a.Z.socialLinks.github,children:(0,h.jsx)(c.hJX,{})}),(0,h.jsx)(d,{label:"LinkedIn",href:a.Z.socialLinks.linkedin,children:(0,h.jsx)(c.ltd,{})})]})]})})},m=n(9876),u=n(7375),f=n(8921),j=n(1664),x=n(894),p=function(){return(0,h.jsxs)(x.JO,{boxSize:30,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[(0,h.jsx)("path",{fill:"#E1E8ED",d:"M20.143 32.215a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0z"}),(0,h.jsx)("path",{fill:"#E1E8ED",d:"M27.643 15.643C27.643 10.317 23.324 6 18 6a9.643 9.643 0 0 0-9.643 9.643c0 5.357-1.071 16.572-1.071 16.572a2.143 2.143 0 0 0 4.286 0 2.144 2.144 0 0 0 4.285 0h4.286a2.144 2.144 0 0 0 4.287 0 2.143 2.143 0 0 0 4.286 0c-.002 0-1.073-11.215-1.073-16.572z"}),(0,h.jsx)("path",{fill:"#DD2E44",d:"M20 3c0 2.209-1.447 6-2 6-.552 0-2-3.791-2-6s1.448-3 2-3c.553 0 2 .791 2 3zm-4.365 30c0-2.612 1.711-8 2.365-8 .653 0 2.365 5.388 2.365 8S18.652 36 18 36c-.654 0-2.365-.388-2.365-3z"}),(0,h.jsx)("ellipse",{fill:"#F4900C",cx:"18",cy:"22.5",rx:"7",ry:"4.5"}),(0,h.jsx)("path",{fill:"#FFAC33",d:"M25 22.5c0 1.5-14 1.5-14 0s4.791-4.5 7-4.5 7 3 7 4.5z"}),(0,h.jsx)("circle",{fill:"#292F33",cx:"11.5",cy:"18.5",r:"1.5"}),(0,h.jsx)("circle",{fill:"#292F33",cx:"24.5",cy:"18.5",r:"1.5"})]})},b=function(e){var i=e.link;return(0,h.jsx)(j.default,{href:"/".concat(i.toLowerCase(),"/"),passHref:!0,children:(0,h.jsx)(t.rU,{px:2,py:1,rounded:"md",_hover:{textDecoration:"none",bg:(0,l.ff)("gray.200","gray.700")},children:i})})},y=function(){var e=(0,u.qY)(),i=e.isOpen,n=e.onOpen,s=e.onClose,c=(0,l.If)(),d=c.colorMode,g=c.toggleColorMode;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(t.xu,{bg:(0,l.ff)("gray.100","gray.900"),px:4,children:[(0,h.jsxs)(t.kC,{alignItems:"center",justifyContent:"space-between",mx:"auto",children:[i?null:(0,h.jsxs)(t.kC,{children:[(0,h.jsx)(j.default,{href:"/",passHref:!0,children:(0,h.jsxs)(t.rU,{title:"Home Page",display:"flex",alignItems:"center",children:[(0,h.jsx)(p,{}),(0,h.jsx)(o.TX,{children:"KJ"})]})}),(0,h.jsx)(r.m$.h1,{fontSize:"xl",fontWeight:"medium",ml:"2",children:"Kevin Jiao"})]}),(0,h.jsxs)(t.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,h.jsx)(f.hU,{size:"md",icon:i?(0,h.jsx)(m.Tw,{}):(0,h.jsx)(m.Uq,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:i?s:n}),(0,h.jsx)(t.Ug,{spacing:8,alignItems:"center",children:(0,h.jsxs)(t.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[a.Z.siteLinks.map((function(e){return(0,h.jsx)(b,{link:e},e)})),(0,h.jsx)(f.hU,{mt:4,"aria-label":"Toggle Mode",onClick:g,children:"light"===d?(0,h.jsx)(m.kL,{}):(0,h.jsx)(m.NW,{})})]})})]})]}),i?(0,h.jsx)(t.xu,{pb:4,display:{md:"none"},children:(0,h.jsxs)(t.Kq,{as:"nav",spacing:4,children:[a.Z.siteLinks.map((function(e){return(0,h.jsx)(b,{link:e},e)})),(0,h.jsx)(f.hU,{mt:4,"aria-label":"Toggle Mode",onClick:g,children:"light"===d?(0,h.jsx)(m.kL,{}):(0,h.jsx)(m.NW,{})})]})}):null]})})},k=function(e){var i=e.children;e.home;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(s.default,{children:[(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,h.jsx)("meta",{name:"description",content:"Kevin Jiao Personal Site"}),(0,h.jsx)("meta",{property:"og:image",content:a.Z.metaPic}),(0,h.jsx)("meta",{name:"og:title",content:a.Z.siteTitle}),(0,h.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,h.jsxs)(t.kC,{minH:"100vh",direction:"column",children:[(0,h.jsx)(y,{}),(0,h.jsx)(t.kC,{flex:1,direction:"column",as:"main",children:i}),(0,h.jsx)(g,{})]})]})}},886:function(e,i){"use strict";i.Z={name:"Kevin Jiao",siteTitle:"Kevin Jiao",metaPic:"https://og-image.vercel.app/**Kevin%20Jiao**.png?theme=dark&md=1&fontSize=225px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Ftwitter%2Ftwemoji%2Fba9c621af05213b19107d27a4b60afed888033dc%2Fsvg%2F1f414.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Fgooglefonts%2Fnoto-emoji%2F9a5261d871451f9b5183c93483cbd68ed916b1e9%2Fsvg%2Femoji_u1f99c.svg&widths=350&widths=350&widths=350&heights=350&heights=350&heights=350",siteLinks:["About","Projects","Misc"],projects:[{imageURL:"/images/animations/project1/Change1.PNG",title:"Computer Animation Projects",description:"Projects made in Computer Animation class",githubLink:"",deployLink:"/projects/animations",tags:["Autodesk Maya"],external:!1},{imageURL:"/images/site.PNG",title:"KXJiao.github.io",description:"My personal site, currently work in progress",githubLink:"https://github.com/KXJiao/KXJiao.github.io",deployLink:"/",tags:["Next.js","Typescript"],external:!1}],animations:[{imageURL:"/images/animations/project1/Change2.PNG",title:"Project 1: Planet Animation",description:"First Project: Solar System animation",githubLink:"",deployLink:"/projects/animations/project1",tags:[],external:!1},{imageURL:"/images/animations/project2/Smooth2.PNG",title:"Project 2: Treasure Chest",description:"Second Project: Treasure chest modeling",githubLink:"",deployLink:"/projects/animations/project2",tags:[],external:!1},{imageURL:"/images/animations/project3/icon.png",title:"Project 3: Bouncy Ball",description:"Third Project: 12 Principles of Animation",githubLink:"",deployLink:"/projects/animations/project3",tags:[],external:!1},{imageURL:"/images/animations/project4/icon.png",title:"Project 4: Rube Goldberg Machine",description:"Fourth Project: Maya FX",githubLink:"",deployLink:"/projects/animations/project4",tags:[],external:!1}],socialLinks:{linkedin:"https://linkedin.com/in/kxjiao",github:"https://github.com/KXJiao"}}},9511:function(e,i,n){"use strict";n.r(i);var t=n(8527),s=n(456),a=n(9008),r=n(6543),l=n(2032),o=n(1447),c=n(886),h=n(5893);i.default=function(){return(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(a.default,{children:(0,h.jsxs)("title",{children:[c.Z.siteTitle," - Animations: Project 4"]})}),(0,h.jsxs)(r.Z,{title:"Project 4: Rube Goldberg Machine",date:"2022-04-07",children:[(0,h.jsx)(t.X6,{size:"md",children:"Final Animation:"}),(0,h.jsx)(l.Z,{size:"80vw",src:"https://www.youtube.com/embed/YROofZCpC1w"}),(0,h.jsx)(t.LZ,{}),(0,h.jsx)(t.X6,{size:"md",children:"Storyboard"}),(0,h.jsx)(s.Ee,{h:800,src:"/images/animations/project4/storyboard.png",alt:"Rube Goldberg animation storyboard"}),(0,h.jsx)(t.LZ,{}),(0,h.jsx)(t.X6,{size:"md",children:"Objects"}),(0,h.jsx)(t.X6,{size:"sm",children:"Ceiling Fan"}),(0,h.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project4/fan.png",alt:"Ceiling Fan"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:'A ceiling fan begins spinning, setting the "machine" in motion'})]}),(0,h.jsx)(t.X6,{size:"sm",children:"Yellow Ball"}),(0,h.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project4/yball.png",alt:"Yellow Ball"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"A yellow ball spins a few times on the fan, then falls into a bowl."})]}),(0,h.jsx)(t.X6,{size:"sm",children:"Bowl"}),(0,h.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project4/bowl.png",alt:"Bowl"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"A bowl is catches the ball and redirects the ball's bounce to the vases."})]}),(0,h.jsx)(t.X6,{size:"sm",children:"Vases"}),(0,h.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project4/vases.png",alt:"Vases"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"The ball strikes the vases, which fall down one by one in a domino effect."})]}),(0,h.jsx)(t.X6,{size:"sm",children:"Bowling Ball"}),(0,h.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project4/bball.png",alt:"Bowling Ball"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"The last vase hits a bowling ball, which falls off the shelf."})]}),(0,h.jsx)(t.X6,{size:"sm",children:"Plank"}),(0,h.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project4/plank.png",alt:"Plank"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"The bowling ball strikes a plank attached to a hinge. (Note: an issue with collision between the bowling ball and the plank will be fixed.)"})]}),(0,h.jsx)(t.X6,{size:"sm",children:"Cake Box"}),(0,h.jsxs)(t.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project4/box.png",alt:"Cake Box"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"The plank knocks over the cake box, revealing a cake under the box."})]}),(0,h.jsx)(t.LZ,{}),(0,h.jsx)(t.X6,{size:"md",children:"Notes"}),(0,h.jsx)(t.xv,{justifySelf:"start",fontSize:"lg",children:"I was inspired by a Rube Goldberg machine from the game Ghost Trick: Phantom Detective. I had to take some creative liberties because the 2D physics was difficult to translate to Maya FX. Regretablly, I had to cut the animation short because some items were not playing nicely with each other, but I will be releasing a complete version soon, and hopefully rendered with Arnold if my laptop can handle it (which history says it may not...)."}),(0,h.jsx)(t.LZ,{}),(0,h.jsx)(t.X6,{size:"md",children:"Credits"}),(0,h.jsx)(t.rU,{href:"https://sketchfab.com/3d-models/ceiling-fan-ec2c6087d4824211abc827f2a4c2b578",isExternal:!0,children:"Ceiling Fan from Sketchfab, by MozillaHubs"}),(0,h.jsx)(t.rU,{href:"https://sketchfab.com/3d-models/3december-2020-frosted-chocolate-cake-18a7bc41962748aab88ace9c70b90c31",isExternal:!0,children:"Chocolate Cake from Sketchfab, by Jack Kelly"}),(0,h.jsx)(t.rU,{href:"https://apps.apple.com/us/app/ghost-trick-phantom-detective/id489113377",isExternal:!0,children:"Song is 4 Minutes Before Death, from GHOST TRICK: Phantom Detective by CAPCOM"})]})]})}},6755:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/animations/project4",function(){return n(9511)}])}},function(e){e.O(0,[445,237,503,774,888,179],(function(){return i=6755,e(e.s=i);var i}));var i=e.O();_N_E=i}]);