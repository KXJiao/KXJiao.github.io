"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{456:function(e,n,r){r.d(n,{Ee:function(){return g}});var i=r(2090),t=r(4592),a=r(7294),s=r(8698);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}var o=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],u=a.forwardRef((function(e,n){var r=e.htmlWidth,i=e.htmlHeight,t=e.alt,s=c(e,o);return a.createElement("img",l({width:r,height:i,ref:n,alt:t},s))})),g=(0,i.Gp)((function(e,n){var r=e.fallbackSrc,o=e.fallback,g=e.src,h=e.srcSet,f=e.align,m=e.fit,p=e.loading,x=e.ignoreFallback,j=e.crossOrigin,b=c(e,d),v=null!=p||x||void 0===r&&void 0===o,k=function(e){var n=e.loading,r=e.src,i=e.srcSet,t=e.onLoad,l=e.onError,c=e.crossOrigin,o=e.sizes,d=e.ignoreFallback,u=(0,a.useState)("pending"),g=u[0],h=u[1];(0,a.useEffect)((function(){h(r?"loading":"pending")}),[r]);var f=(0,a.useRef)(),m=(0,a.useCallback)((function(){if(r){p();var e=new Image;e.src=r,c&&(e.crossOrigin=c),i&&(e.srcset=i),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){p(),h("loaded"),null==t||t(e)},e.onerror=function(e){p(),h("failed"),null==l||l(e)},f.current=e}}),[r,c,i,o,t,l,n]),p=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,s.a)((function(){if(!d)return"loading"===g&&m(),function(){p()}}),[g,m,d]),d?"loaded":g}(l({},e,{ignoreFallback:v})),y=l({ref:n,objectFit:m,objectPosition:f},v?b:(0,t.CE)(b,["onError","onLoad"]));return"loaded"!==k?o||a.createElement(i.m$.img,l({as:u,className:"chakra-image__placeholder",src:r},y)):a.createElement(i.m$.img,l({as:u,src:g,srcSet:h,crossOrigin:j,loading:p,className:"chakra-image"},y))}));t.Ts&&(g.displayName="Image")},2815:function(e,n,r){r.d(n,{Z:function(){return b}});var i=r(894),t=r(2090),a=r(4592),s=r(7294);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var c=(0,t.Gp)((function(e,n){var r=(0,t.jC)("Tag",e),i=(0,t.Lr)(e),a=l({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},r.container);return s.createElement(t.Fo,{value:r},s.createElement(t.m$.span,l({ref:n},i,{__css:a})))}));a.Ts&&(c.displayName="Tag");var o=(0,t.Gp)((function(e,n){var r=(0,t.yK)();return s.createElement(t.m$.span,l({ref:n,isTruncated:!0},e,{__css:r.label}))}));a.Ts&&(o.displayName="TagLabel");var d=(0,t.Gp)((function(e,n){return s.createElement(i.JO,l({ref:n,verticalAlign:"top",marginEnd:"0.5rem"},e))}));a.Ts&&(d.displayName="TagLeftIcon");var u=(0,t.Gp)((function(e,n){return s.createElement(i.JO,l({ref:n,verticalAlign:"top",marginStart:"0.5rem"},e))}));a.Ts&&(u.displayName="TagRightIcon");var g=function(e){return s.createElement(i.JO,l({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),s.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};a.Ts&&(g.displayName="TagCloseIcon");a.Ts;var h=r(8527),f=r(949),m=r(456),p=r(9583),x=r(7735),j=r(5893),b=function(e){var n=e.imageURL,r=e.title,i=e.description,a=e.githubLink,s=e.deployLink,l=e.tags,u=function(e){var n=["",p.tvD];return"React"==e?(n[0]="blue",n[1]=p.huN):"Python"==e?(n[0]="orange",n[1]=p.osz):"Javascript"==e?(n[0]="yellow",n[1]=p.zPb):"Sass"==e?(n[0]="pink",n[1]=p.hBm):"Flask"==e?(n[0]="green",n[1]=p.XVs):"SQL"==e?(n[0]="blue",n[1]=p.i1q):"Next.js"==e?(n[0]="gray",n[1]=x.Xou):(n[0]="gray",n[1]=p.tvD),n},g=l.map((function(e){return(0,j.jsxs)(c,{colorScheme:u(e)[0],size:"md",children:[(0,j.jsx)(d,{as:u(e)[1]}),(0,j.jsx)(o,{children:e})]},e)}));return(0,j.jsxs)(h.xu,{mx:"auto",rounded:"lg",shadow:"md",bg:(0,f.ff)("white","gray.800"),maxW:"3xl",children:[(0,j.jsx)(m.Ee,{roundedTop:"lg",w:"full",h:64,fit:"cover",src:n,alt:"Project image"}),(0,j.jsxs)(h.xu,{p:6,children:[(0,j.jsxs)(h.xu,{children:[(0,j.jsx)(h.rU,{display:"block",color:(0,f.ff)("gray.800","white"),fontWeight:"bold",fontSize:"2xl",mt:2,href:s,_hover:{color:"gray.600",textDecor:"underline"},children:r}),(0,j.jsx)(h.Kq,{isInline:!0,children:g}),(0,j.jsx)(t.m$.p,{mt:2,fontSize:"sm",color:(0,f.ff)("gray.600","gray.400"),children:i})]}),(0,j.jsxs)(h.Kq,{isInline:!0,justifyContent:"flex-end",alignItems:"center",spacing:4,children:[a&&(0,j.jsx)(h.rU,{href:a,color:"black",isExternal:!0,children:(0,j.jsx)(p.hJX,{"aria-label":"github",size:23})}),s&&(0,j.jsx)(h.rU,{href:s,color:"black",isExternal:!0,children:(0,j.jsx)(p.CkN,{"aria-label":"project link",size:20})})]})]})]})}},8208:function(e,n,r){r.d(n,{Z:function(){return k}});var i=r(9008),t=r(8527),a=r(7375),s=r(949),l=r(8921),c=r(3668),o=r(9876),d=r(1664),u=r(5893),g=function(e){var n=e.link;return(0,u.jsx)(d.default,{href:"/".concat(n.toLowerCase(),"/"),children:(0,u.jsx)(t.rU,{px:2,py:1,rounded:"md",_hover:{textDecoration:"none",bg:(0,s.ff)("gray.200","gray.700")},children:n})})},h=["About","Projects","Misc"],f=function(){var e=(0,a.qY)(),n=e.isOpen,r=e.onOpen,i=e.onClose;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(t.xu,{bg:(0,s.ff)("gray.100","gray.900"),px:4,children:[(0,u.jsxs)(t.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,u.jsx)(l.hU,{size:"md",icon:n?(0,u.jsx)(o.Tw,{}):(0,u.jsx)(o.Uq,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:n?i:r}),(0,u.jsx)(t.Ug,{spacing:8,alignItems:"center",children:(0,u.jsx)(t.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:h.map((function(e){return(0,u.jsx)(g,{link:e},e)}))})}),(0,u.jsx)(t.kC,{alignItems:"center",children:(0,u.jsxs)(c.v2,{children:[(0,u.jsx)(c.j2,{as:l.zx,rounded:"full",variant:"link",cursor:"pointer",minW:0}),(0,u.jsxs)(c.qy,{children:[(0,u.jsx)(c.sN,{children:"Link 1"}),(0,u.jsx)(c.sN,{children:"Link 2"}),(0,u.jsx)(c.R,{}),(0,u.jsx)(c.sN,{children:"Link 3"})]})]})})]}),n?(0,u.jsx)(t.xu,{pb:4,display:{md:"none"},children:(0,u.jsx)(t.Kq,{as:"nav",spacing:4,children:h.map((function(e){return(0,u.jsx)(g,{link:e},e)}))})}):null]})})},m=r(2090),p=r(1358),x=r(9583),j=r(886),b=function(e){var n=e.children,r=e.label,i=e.href;return(0,u.jsxs)(m.m$.button,{bg:(0,s.ff)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:i,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:(0,s.ff)("blackAlpha.200","whiteAlpha.200")},children:[(0,u.jsx)(p.TX,{children:r}),n]})},v=function(){return(0,u.jsx)(t.xu,{bg:(0,s.ff)("gray.50","gray.900"),color:(0,s.ff)("gray.700","gray.200"),children:(0,u.jsxs)(t.W2,{as:t.Kq,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[(0,u.jsx)(t.xv,{children:"Made using Next.js and Chakra UI"}),(0,u.jsxs)(t.Kq,{direction:"row",spacing:6,children:[(0,u.jsx)(b,{label:"Github",href:j.Z.socialLinks.github,children:(0,u.jsx)(x.hJX,{})}),(0,u.jsx)(b,{label:"LinkedIn",href:j.Z.socialLinks.linkedin,children:(0,u.jsx)(x.ltd,{})})]})]})})},k=function(e){var n=e.children;e.home;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i.default,{children:[(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,u.jsx)("meta",{name:"description",content:"Kevin Jiao's Personal Site"}),(0,u.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(j.Z.siteTitle),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,u.jsx)("meta",{name:"og:title",content:j.Z.siteTitle}),(0,u.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,u.jsxs)(t.kC,{minH:"100vh",direction:"column",children:[(0,u.jsx)(f,{}),(0,u.jsx)(t.kC,{flex:1,direction:"column",as:"main",children:n}),(0,u.jsx)(v,{})]})]})}},886:function(e,n){n.Z={name:"Kevin Jiao",siteTitle:"Kevin Jiao",projects:[{imageURL:"/images/Change1.PNG",title:"Computer Animation Projects",description:"Projects made in Computer Animation class",githubLink:"",deployLink:"/projects/animations",tags:["Autodesk Maya"]}],animations:[{imageURL:"/images/Change2.PNG",title:"Project 1: Planet Animation",description:"First Project: Solar System animation",githubLink:"",deployLink:"/projects/animations/project1",tags:[]}],socialLinks:{linkedin:"https://linkedin.com/in/kxjiao",github:"https://github.com/KXJiao"}}}}]);