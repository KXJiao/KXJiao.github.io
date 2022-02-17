(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{456:function(e,n,i){"use strict";i.d(n,{Ee:function(){return h}});var r=i(2090),t=i(4592),s=i(7294),a=i(8698);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}var c=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],u=s.forwardRef((function(e,n){var i=e.htmlWidth,r=e.htmlHeight,t=e.alt,a=o(e,c);return s.createElement("img",l({width:i,height:r,ref:n,alt:t},a))})),h=(0,r.Gp)((function(e,n){var i=e.fallbackSrc,c=e.fallback,h=e.src,g=e.srcSet,f=e.align,x=e.fit,m=e.loading,p=e.ignoreFallback,j=e.crossOrigin,b=o(e,d),k=null!=m||p||void 0===i&&void 0===c,_=function(e){var n=e.loading,i=e.src,r=e.srcSet,t=e.onLoad,l=e.onError,o=e.crossOrigin,c=e.sizes,d=e.ignoreFallback,u=(0,s.useState)("pending"),h=u[0],g=u[1];(0,s.useEffect)((function(){g(i?"loading":"pending")}),[i]);var f=(0,s.useRef)(),x=(0,s.useCallback)((function(){if(i){m();var e=new Image;e.src=i,o&&(e.crossOrigin=o),r&&(e.srcset=r),c&&(e.sizes=c),n&&(e.loading=n),e.onload=function(e){m(),g("loaded"),null==t||t(e)},e.onerror=function(e){m(),g("failed"),null==l||l(e)},f.current=e}}),[i,o,r,c,t,l,n]),m=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,a.a)((function(){if(!d)return"loading"===h&&x(),function(){m()}}),[h,x,d]),d?"loaded":h}(l({},e,{ignoreFallback:k})),v=l({ref:n,objectFit:x,objectPosition:f},k?b:(0,t.CE)(b,["onError","onLoad"]));return"loaded"!==_?c||s.createElement(r.m$.img,l({as:u,className:"chakra-image__placeholder",src:i},v)):s.createElement(r.m$.img,l({as:u,src:h,srcSet:g,crossOrigin:j,loading:m,className:"chakra-image"},v))}));t.Ts&&(h.displayName="Image")},8208:function(e,n,i){"use strict";i.d(n,{Z:function(){return _}});var r=i(9008),t=i(8527),s=i(7375),a=i(949),l=i(8921),o=i(3668),c=i(9876),d=i(1664),u=i(5893),h=function(e){var n=e.link;return(0,u.jsx)(d.default,{href:"/".concat(n.toLowerCase(),"/"),children:(0,u.jsx)(t.rU,{px:2,py:1,rounded:"md",_hover:{textDecoration:"none",bg:(0,a.ff)("gray.200","gray.700")},children:n})})},g=["About","Projects","Misc"],f=function(){var e=(0,s.qY)(),n=e.isOpen,i=e.onOpen,r=e.onClose;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(t.xu,{bg:(0,a.ff)("gray.100","gray.900"),px:4,children:[(0,u.jsxs)(t.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,u.jsx)(l.hU,{size:"md",icon:n?(0,u.jsx)(c.Tw,{}):(0,u.jsx)(c.Uq,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:n?r:i}),(0,u.jsx)(t.Ug,{spacing:8,alignItems:"center",children:(0,u.jsx)(t.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:g.map((function(e){return(0,u.jsx)(h,{link:e},e)}))})}),(0,u.jsx)(t.kC,{alignItems:"center",children:(0,u.jsxs)(o.v2,{children:[(0,u.jsx)(o.j2,{as:l.zx,rounded:"full",variant:"link",cursor:"pointer",minW:0}),(0,u.jsxs)(o.qy,{children:[(0,u.jsx)(o.sN,{children:"Link 1"}),(0,u.jsx)(o.sN,{children:"Link 2"}),(0,u.jsx)(o.R,{}),(0,u.jsx)(o.sN,{children:"Link 3"})]})]})})]}),n?(0,u.jsx)(t.xu,{pb:4,display:{md:"none"},children:(0,u.jsx)(t.Kq,{as:"nav",spacing:4,children:g.map((function(e){return(0,u.jsx)(h,{link:e},e)}))})}):null]})})},x=i(2090),m=i(1358),p=i(9583),j=i(886),b=function(e){var n=e.children,i=e.label,r=e.href;return(0,u.jsxs)(x.m$.button,{bg:(0,a.ff)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:r,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:(0,a.ff)("blackAlpha.200","whiteAlpha.200")},children:[(0,u.jsx)(m.TX,{children:i}),n]})},k=function(){return(0,u.jsx)(t.xu,{bg:(0,a.ff)("gray.50","gray.900"),color:(0,a.ff)("gray.700","gray.200"),children:(0,u.jsxs)(t.W2,{as:t.Kq,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[(0,u.jsx)(t.xv,{children:"Made using Next.js and Chakra UI"}),(0,u.jsxs)(t.Kq,{direction:"row",spacing:6,children:[(0,u.jsx)(b,{label:"Github",href:j.Z.socialLinks.github,children:(0,u.jsx)(p.hJX,{})}),(0,u.jsx)(b,{label:"LinkedIn",href:j.Z.socialLinks.linkedin,children:(0,u.jsx)(p.ltd,{})})]})]})})},_=function(e){var n=e.children;e.home;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.default,{children:[(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,u.jsx)("meta",{name:"description",content:"Kevin Jiao's Personal Site"}),(0,u.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(j.Z.siteTitle),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,u.jsx)("meta",{name:"og:title",content:j.Z.siteTitle}),(0,u.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,u.jsxs)(t.kC,{minH:"100vh",direction:"column",children:[(0,u.jsx)(f,{}),(0,u.jsx)(t.kC,{flex:1,direction:"column",as:"main",children:n}),(0,u.jsx)(k,{})]})]})}},886:function(e,n){"use strict";n.Z={name:"Kevin Jiao",siteTitle:"Kevin Jiao",projects:[{imageURL:"/images/Change1.PNG",title:"Computer Animation Projects",description:"Projects made in Computer Animation class",githubLink:"",deployLink:"/projects/animations/",tags:["Autodesk Maya"]}],animations:[{imageURL:"/images/Change2.PNG",title:"Project 1: Solar System",description:"First Project",githubLink:"",deployLink:"/projects/animations/project1",tags:[]}],socialLinks:{linkedin:"https://linkedin.com/in/kxjiao",github:"https://github.com/KXJiao"}}},2562:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return g}});var r=i(9008),t=i(8208),s=i(367),a=i.n(s),l=i(8527),o=i(456),c=i(8921),d=i(9583),u=i(886),h=i(5893),g=!0;n.default=function(e){e.allPostsData;return(0,h.jsxs)(t.Z,{home:!0,children:[(0,h.jsx)(r.default,{children:(0,h.jsx)("title",{children:u.Z.siteTitle})}),(0,h.jsxs)(l.kC,{p:8,flex:1,align:"center",gap:10,direction:{base:"column",lg:"row"},mx:"auto",children:[(0,h.jsx)(o.Ee,{src:i(4779),className:a().borderCircle,height:144,width:144,alt:u.Z.name}),(0,h.jsxs)(l.Kq,{spacing:6,w:"full",maxW:"lg",children:[(0,h.jsxs)(l.X6,{fontSize:{base:"3xl",md:"4xl",lg:"5xl"},children:[(0,h.jsx)(l.xv,{as:"span",position:"relative",children:"Hi! I'm"}),(0,h.jsx)("br",{})," ",(0,h.jsx)(l.xv,{color:"blue.400",as:"span",children:"Kevin Jiao"})," "]}),(0,h.jsx)(l.xv,{fontSize:{base:"md",lg:"lg"},color:"gray.500",children:"This will be my future portfolio site! Currently work in progress..."}),(0,h.jsxs)(l.Kq,{isInline:!0,spacing:4,children:[(0,h.jsx)(l.rU,{href:u.Z.socialLinks.github,isExternal:!0,children:(0,h.jsx)(c.zx,{leftIcon:(0,h.jsx)(d.hJX,{color:"#4299E1"}),position:"static",color:"black",children:"Github"})}),(0,h.jsx)(l.rU,{href:u.Z.socialLinks.linkedin,isExternal:!0,children:(0,h.jsx)(c.zx,{leftIcon:(0,h.jsx)(d.ltd,{color:"#4299E1"}),position:"static",color:"black",children:"LinkedIn"})})]})]})]})]})}},5301:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2562)}])},367:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},4779:function(e){e.exports="/_next/static/images/profile-2db37f249af47faf85816faf81a45b86.jpg"}},function(e){e.O(0,[445,763,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);