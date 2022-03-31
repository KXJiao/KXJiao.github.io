(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{456:function(e,t,i){"use strict";i.d(t,{Ee:function(){return f}});var n=i(2090),s=i(9199),r=i(7294),a=i(8698);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var i,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}var l=["htmlWidth","htmlHeight","alt"],h=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=r.forwardRef((function(e,t){var i=e.htmlWidth,n=e.htmlHeight,s=e.alt,a=c(e,l);return r.createElement("img",o({width:i,height:n,ref:t,alt:s},a))})),f=(0,n.Gp)((function(e,t){var i=e.fallbackSrc,l=e.fallback,f=e.src,u=e.srcSet,m=e.align,g=e.fit,x=e.loading,p=e.ignoreFallback,b=e.crossOrigin,j=c(e,h),w=null!=x||p||void 0===i&&void 0===l,y=function(e){var t=e.loading,i=e.src,n=e.srcSet,s=e.onLoad,o=e.onError,c=e.crossOrigin,l=e.sizes,h=e.ignoreFallback,d=(0,r.useState)("pending"),f=d[0],u=d[1];(0,r.useEffect)((function(){u(i?"loading":"pending")}),[i]);var m=(0,r.useRef)(),g=(0,r.useCallback)((function(){if(i){x();var e=new Image;e.src=i,c&&(e.crossOrigin=c),n&&(e.srcset=n),l&&(e.sizes=l),t&&(e.loading=t),e.onload=function(e){x(),u("loaded"),null==s||s(e)},e.onerror=function(e){x(),u("failed"),null==o||o(e)},m.current=e}}),[i,c,n,l,s,o,t]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,a.a)((function(){if(!h)return"loading"===f&&g(),function(){x()}}),[f,g,h]),h?"loaded":f}(o({},e,{ignoreFallback:w})),k=o({ref:t,objectFit:g,objectPosition:m},w?j:(0,s.CE)(j,["onError","onLoad"]));return"loaded"!==y?l||r.createElement(n.m$.img,o({as:d,className:"chakra-image__placeholder",src:i},k)):r.createElement(n.m$.img,o({as:d,src:f,srcSet:u,crossOrigin:b,loading:x,className:"chakra-image"},k))}));s.Ts&&(f.displayName="Image")},6543:function(e,t,i){"use strict";var n=i(8527),s=i(6571),r=i(5893);t.Z=function(e){var t=e.title,i=e.date,a=e.children;return(0,r.jsxs)(n.gC,{as:"article",spacing:5,justifyContent:"center",px:["5vw","10vw"],my:["2","2","5","5"],children:[(0,r.jsx)(n.X6,{children:t}),(0,r.jsx)(n.xv,{color:"gray.500",children:(0,r.jsx)(s.Z,{dateString:i})}),a]})}},2032:function(e,t,i){"use strict";var n=i(8527),s=i(5893);t.Z=function(e){var t=e.src,i=e.size;return(0,s.jsx)(n.oM,{minW:i,ratio:16/9,children:(0,s.jsx)("iframe",{src:t})})}},6571:function(e,t,i){"use strict";var n=i(2902),s=i(327),r=i(5893);t.Z=function(e){var t=e.dateString,i=(0,n.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,s.Z)(i,"LLLL d, yyyy")})}},1447:function(e,t,i){"use strict";i.d(t,{Z:function(){return y}});var n=i(8527),s=i(9008),r=i(886),a=i(2090),o=i(949),c=i(1358),l=i(9583),h=i(5893),d=function(e){var t=e.children,i=e.label,n=e.href;return(0,h.jsxs)(a.m$.button,{bg:(0,o.ff)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:n,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:(0,o.ff)("blackAlpha.200","whiteAlpha.200")},children:[(0,h.jsx)(c.TX,{children:i}),t]})},f=function(){return(0,h.jsx)(n.xu,{bg:(0,o.ff)("gray.50","gray.900"),color:(0,o.ff)("gray.700","gray.200"),children:(0,h.jsxs)(n.W2,{as:n.Kq,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[(0,h.jsx)(n.xv,{children:"Made using Next.js and Chakra UI"}),(0,h.jsxs)(n.Kq,{direction:"row",spacing:6,children:[(0,h.jsx)(d,{label:"Github",href:r.Z.socialLinks.github,children:(0,h.jsx)(l.hJX,{})}),(0,h.jsx)(d,{label:"LinkedIn",href:r.Z.socialLinks.linkedin,children:(0,h.jsx)(l.ltd,{})})]})]})})},u=i(9876),m=i(7375),g=i(8921),x=i(1664),p=i(894),b=function(){return(0,h.jsxs)(p.JO,{boxSize:30,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[(0,h.jsx)("path",{fill:"#E1E8ED",d:"M20.143 32.215a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0z"}),(0,h.jsx)("path",{fill:"#E1E8ED",d:"M27.643 15.643C27.643 10.317 23.324 6 18 6a9.643 9.643 0 0 0-9.643 9.643c0 5.357-1.071 16.572-1.071 16.572a2.143 2.143 0 0 0 4.286 0 2.144 2.144 0 0 0 4.285 0h4.286a2.144 2.144 0 0 0 4.287 0 2.143 2.143 0 0 0 4.286 0c-.002 0-1.073-11.215-1.073-16.572z"}),(0,h.jsx)("path",{fill:"#DD2E44",d:"M20 3c0 2.209-1.447 6-2 6-.552 0-2-3.791-2-6s1.448-3 2-3c.553 0 2 .791 2 3zm-4.365 30c0-2.612 1.711-8 2.365-8 .653 0 2.365 5.388 2.365 8S18.652 36 18 36c-.654 0-2.365-.388-2.365-3z"}),(0,h.jsx)("ellipse",{fill:"#F4900C",cx:"18",cy:"22.5",rx:"7",ry:"4.5"}),(0,h.jsx)("path",{fill:"#FFAC33",d:"M25 22.5c0 1.5-14 1.5-14 0s4.791-4.5 7-4.5 7 3 7 4.5z"}),(0,h.jsx)("circle",{fill:"#292F33",cx:"11.5",cy:"18.5",r:"1.5"}),(0,h.jsx)("circle",{fill:"#292F33",cx:"24.5",cy:"18.5",r:"1.5"})]})},j=function(e){var t=e.link;return(0,h.jsx)(x.default,{href:"/".concat(t.toLowerCase(),"/"),children:(0,h.jsx)(n.rU,{px:2,py:1,rounded:"md",_hover:{textDecoration:"none",bg:(0,o.ff)("gray.200","gray.700")},children:t})})},w=function(){var e=(0,m.qY)(),t=e.isOpen,i=e.onOpen,s=e.onClose;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(n.xu,{bg:(0,o.ff)("gray.100","gray.900"),px:4,children:[(0,h.jsxs)(n.kC,{alignItems:"center",justifyContent:"space-between",mx:"auto",children:[t?null:(0,h.jsxs)(n.kC,{children:[(0,h.jsx)(x.default,{href:"/",children:(0,h.jsxs)(n.rU,{title:"Home Page",display:"flex",alignItems:"center",children:[(0,h.jsx)(b,{}),(0,h.jsx)(c.TX,{children:"KJ"})]})}),(0,h.jsx)(a.m$.h1,{fontSize:"xl",fontWeight:"medium",ml:"2",children:"Kevin Jiao"})]}),(0,h.jsxs)(n.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,h.jsx)(g.hU,{size:"md",icon:t?(0,h.jsx)(u.Tw,{}):(0,h.jsx)(u.Uq,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:t?s:i}),(0,h.jsx)(n.Ug,{spacing:8,alignItems:"center",children:(0,h.jsx)(n.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:r.Z.siteLinks.map((function(e){return(0,h.jsx)(j,{link:e},e)}))})})]})]}),t?(0,h.jsx)(n.xu,{pb:4,display:{md:"none"},children:(0,h.jsx)(n.Kq,{as:"nav",spacing:4,children:r.Z.siteLinks.map((function(e){return(0,h.jsx)(j,{link:e},e)}))})}):null]})})},y=function(e){var t=e.children;e.home;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(s.default,{children:[(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,h.jsx)("meta",{name:"description",content:"Kevin Jiao Personal Site"}),(0,h.jsx)("meta",{property:"og:image",content:r.Z.metaPic}),(0,h.jsx)("meta",{name:"og:title",content:r.Z.siteTitle}),(0,h.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,h.jsxs)(n.kC,{minH:"100vh",direction:"column",children:[(0,h.jsx)(w,{}),(0,h.jsx)(n.kC,{flex:1,direction:"column",as:"main",children:t}),(0,h.jsx)(f,{})]})]})}},886:function(e,t){"use strict";t.Z={name:"Kevin Jiao",siteTitle:"Kevin Jiao",metaPic:"https://og-image.vercel.app/**Kevin%20Jiao**.png?theme=dark&md=1&fontSize=225px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Ftwitter%2Ftwemoji%2Fba9c621af05213b19107d27a4b60afed888033dc%2Fsvg%2F1f414.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Fgooglefonts%2Fnoto-emoji%2F9a5261d871451f9b5183c93483cbd68ed916b1e9%2Fsvg%2Femoji_u1f99c.svg&widths=350&widths=350&widths=350&heights=350&heights=350&heights=350",siteLinks:["About","Projects","Misc"],projects:[{imageURL:"/images/animations/project1/Change1.PNG",title:"Computer Animation Projects",description:"Projects made in Computer Animation class",githubLink:"",deployLink:"/projects/animations",tags:["Autodesk Maya"]},{imageURL:"/images/site.PNG",title:"KXJiao.github.io",description:"My personal site, currently work in progress",githubLink:"https://github.com/KXJiao/KXJiao.github.io",deployLink:"/",tags:["Next.js","Typescript"]}],animations:[{imageURL:"/images/animations/project1/Change2.PNG",title:"Project 1: Planet Animation",description:"First Project: Solar System animation",githubLink:"",deployLink:"/projects/animations/project1",tags:[]},{imageURL:"/images/animations/project2/Smooth2.PNG",title:"Project 2: Treasure Chest",description:"Second Project: Treasure chest modeling",githubLink:"",deployLink:"/projects/animations/project2",tags:[]},{imageURL:"/images/animations/project3/icon.png",title:"Project 3: Bouncy Ball",description:"Third Project: 12 Principles of Animaton",githubLink:"",deployLink:"/projects/animations/project3",tags:[]}],socialLinks:{linkedin:"https://linkedin.com/in/kxjiao",github:"https://github.com/KXJiao"}}},8634:function(e,t,i){"use strict";i.r(t);var n=i(8527),s=i(456),r=i(9008),a=i(6543),o=i(2032),c=i(1447),l=i(886),h=i(5893);t.default=function(){return(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(r.default,{children:(0,h.jsxs)("title",{children:[l.Z.siteTitle," - Animations: Project3"]})}),(0,h.jsxs)(a.Z,{title:"Project 3: Bouncy Ball?",date:"2022-03-24",children:[(0,h.jsx)(n.X6,{size:"md",children:"Final Animation:"}),(0,h.jsx)(o.Z,{size:"80vw",src:"https://www.youtube.com/embed/rL8MNM544lE"}),(0,h.jsx)(n.LZ,{}),(0,h.jsx)(n.X6,{size:"md",children:"Storyboard"}),(0,h.jsx)(s.Ee,{h:800,src:"/images/animations/project3/storyboard.png",alt:"Bouncing Ball animation storyboard"}),(0,h.jsx)(n.LZ,{}),(0,h.jsx)(n.X6,{size:"md",children:"Principles"}),(0,h.jsx)(n.X6,{size:"sm",children:"Squash and Stretch"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/squash.png",alt:"Squash and Stretch"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"Used on several occasions with the ball bird, most notably when it bounces at the end of the animation."})]}),(0,h.jsx)(n.X6,{size:"sm",children:"Anticipation"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/anticipation.png",alt:"Anticipation"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"Used in conjunction with squash and stretch when the bird is jumping and when the bird is exclaiming at the other bird's skills."})]}),(0,h.jsx)(n.X6,{size:"sm",children:"Staging"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/staging.png",alt:"Staging"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"Used mostly to draw attention to the primary character of the frame, with instances such as the camera angle when the ball bird is watching the other bird doing a skate trick, or when the ball bird is far when it is flying quickly, or close when it is realizing its lack of flight."})]}),(0,h.jsx)(n.X6,{size:"sm",children:"Pose to pose"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/pose.png",alt:"Pose to pose"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"The vast majority of animations were made pose to pose, especially all the ramp skating animations."})]}),(0,h.jsx)(n.X6,{size:"sm",children:"Slow in and slow out"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/slow.png",alt:"Slow in and slow out"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"Most gravity related actions involved slow in and slow out, particularly for when the ball bird is flying high into the air, then falling again."})]}),(0,h.jsx)(n.X6,{size:"sm",children:"Arcs"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/squash.png",alt:"Arcs"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"Ramps are arc shaped so all the skate animations count right? Otherwise, when the ball bird is jumping onto its skateboard, it moves in an arc."})]}),(0,h.jsx)(n.X6,{size:"sm",children:"Exaggeration"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/exaggeration.png",alt:"Exaggeration"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"These skater birds are most definitely not following the laws of physics."})]}),(0,h.jsx)(n.X6,{size:"sm",children:"Appeal"}),(0,h.jsxs)(n.MI,{justifyItems:"center",columns:2,spacing:5,children:[(0,h.jsx)(s.Ee,{h:64,src:"/images/animations/project3/appeal.png",alt:"Appeal"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"I may be biased, but I believe our characters have a certain appeal."})]}),(0,h.jsx)(n.LZ,{}),(0,h.jsx)(n.X6,{size:"md",children:"My Inspiration"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"Two serendipitous events led to my creating of this animation. First: I saw a post online of an extremely round bird, quite literally ball shaped, making a ball shaped bird a perfect candidate for the ball bouncing animation. Second, I was playing a little bit of a computer game called SkateBIRD, which involves various fashionably dressed birds who fly high on skateboards. With these two pieces put together, the perfect animation idea came to me, thus bringing to life what you have seen above."}),(0,h.jsx)(n.LZ,{}),(0,h.jsx)(n.X6,{size:"md",children:"Challenges"}),(0,h.jsx)(n.xv,{justifySelf:"start",fontSize:"lg",children:"This project's theme was overambition, as I planned an overelaborate animation rendered using Arnold. My hopes and dreams began fading 20 minutes into rendering the first frame of nearly 2000 frames, with the realization dawning on me that my computer physically could not handle the Arnold renderer. Still, I stubbornly pushed onwards, until four hours and several force-shutdowns of my computer later, I finally reached the breaking point of my sanity. I was a fool from the beginning to even consider abandoning the old trusty, Playblast, and in the end, I came crawling back to it."}),(0,h.jsx)(n.LZ,{}),(0,h.jsx)(n.X6,{size:"md",children:"Credits"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/mineral-wells-skate-park-736e8e4e2456469fa9298d14bd7e3960",isExternal:!0,children:"Mineral Wells Skatepark from Sketchfab, by andrew"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/african-grey-parrot-6f729a4cb4db425599aa79257cc17c98",isExternal:!0,children:"African Grey Parrot from Sketchfab, by Gert-Jan van den Boom"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/sulphur-crested-cockatoo-18fca4e421094c789c63cd78565e38b6",isExternal:!0,children:"Sulfur-Crested Cockatoo from Sketchfab, by AlexGiardiniere"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/seagull-dd79fddb754f47caa3145e7d184e3e58",isExternal:!0,children:"Seagull from Sketchfab, by Bwinji Shamutete"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/pigeon-3-4383b3f88d9646c7b2f336266eaad947",isExternal:!0,children:"Pigeon 3 from Sketchfab, by tomkranis"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/little-blue-penguin-korora-8a58020139cf43bc821bfdfa01e13208",isExternal:!0,children:"Little Blue Penguin / Koror\u0101 from Sketchfab, by Auckland Museum"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/chicken-98830a78e8c54354a7fbe5ca8346fbf9",isExternal:!0,children:"Chicken from Sketchfab, by pooiloui2"}),(0,h.jsx)(n.rU,{href:"https://ffxiv.gamerescape.com/wiki/Dodo_(Mount)",isExternal:!0,children:"Dodo from Final Fantasy XIV, Square Enix"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/neck-tie-8b5f9940ce764f99b9f02646976f16ae",isExternal:!0,children:"Neck Tie from Sketchfab, by neutralize"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/gangster-hats-ef901c307a5c4ed89cd7ef900d3c7f4c",isExternal:!0,children:"Gangster Hats from Sketchfab, by Michal Cavrnoch"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/aviator-sunglasses-00d1cb5aa82745228a3b764c97f867de",isExternal:!0,children:"Aviator Sunglasses from Sketchfab, by Kimppo"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/skateboard-f1b9b8d4cc524fb891f972fba2351f44",isExternal:!0,children:"Skateboard from Sketchfab, by Microsoft"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/victorian-abigail-hat-e4bde388a33f405a9d5799a77c37cc3a",isExternal:!0,children:"Victorian Abigail Hat from Sketchfab, by Tijer\xedn Art Studio"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/baseball-hat-d2663d7899c04e73a43cc34ec3e14ee0",isExternal:!0,children:"Baseball hat from Sketchfab, by Tactical_Gamer"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/helmet-4aaee1ac11ae419a935e4ced4f191428",isExternal:!0,children:"Helmet from Sketchfab, by Oksana3D"}),(0,h.jsx)(n.rU,{href:"https://sketchfab.com/3d-models/shutter-shades-75e94f2c14b740e081ded0e4e60e0a94",isExternal:!0,children:"Shutter Shades from Sketchfab, by Microsoft"}),(0,h.jsx)(n.rU,{href:"https://polyhaven.com/a/noon_grass",isExternal:!0,children:"Noon Grass HDRI from Poly Haven"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=rDbGdc7L-qA",isExternal:!0,children:"Flock of Starlings from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=4DKw5wheGQQ",isExternal:!0,children:"ASMR | Skate park sounds from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=toexFBZmYqY",isExternal:!0,children:"ASMR Skateboarding Kick Push Ride- 1 Hour 1080p HD Tingle Sounds Sleep Relax Study (NO TALKING) from Youtube"}),(0,h.jsx)(n.rU,{href:"https://archive.org/details/BudgieSounds/",isExternal:!0,children:"Budgie Sounds from Internet Archive"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=SHl7tvfY9Fs",isExternal:!0,children:"Skateboard Ollie Sound Effect from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=ZJ-pxThGrmo",isExternal:!0,children:"BOOMERANG SOUND EFFECT | Swing | Swoosh| Thrown from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=iew9op9aPLQ",isExternal:!0,children:"Cartoon Boing Sound Effect from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=y8OtzJtp-EM",isExternal:!0,children:"Immigrant Song (Remaster) by Led Zeppelin from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=HDRVzwNkV20",isExternal:!0,children:"Whoosh Sound Effects from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=sivqrrbfZWI",isExternal:!0,children:"Cartoon Slow Rise Sound Effect from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=XFirF_bFHVg",isExternal:!0,children:"goofy ahh sounds from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=Qgx-WOn8CDA",isExternal:!0,children:"cartoon fall (sound effect) from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=Ag1o3koTLWM",isExternal:!0,children:"Curb Your Enthusiasm Theme from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=gvBoUDiMkJY",isExternal:!0,children:"Angry Budgie from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=Ub_GUGGUmF4",isExternal:!0,children:"Cartoon Impacts Sound Effects from Youtube"}),(0,h.jsx)(n.rU,{href:"https://www.youtube.com/watch?v=lUVQz6_-vxc",isExternal:!0,children:"Parrot: What the F**K from Youtube"})]})]})}},7649:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/animations/project3",function(){return i(8634)}])}},function(e){e.O(0,[445,237,503,774,888,179],(function(){return t=7649,e(e.s=t);var t}));var t=e.O();_N_E=t}]);