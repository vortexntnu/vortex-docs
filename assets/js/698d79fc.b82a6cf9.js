"use strict";(self.webpackChunkvortex_docs=self.webpackChunkvortex_docs||[]).push([[3843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={},l="Software FAT",s={unversionedId:"Logs/FAT/software-fat-jan23",id:"Logs/FAT/software-fat-jan23",title:"Software FAT",description:"Hei this is a document for software fat.",source:"@site/docs/Logs/FAT/software-fat-jan23.md",sourceDirName:"Logs/FAT",slug:"/Logs/FAT/software-fat-jan23",permalink:"/vortex-docs/docs/Logs/FAT/software-fat-jan23",draft:!1,editUrl:"https://vortexntnu.github.io/vortex-docs/editor?path=/docs/Logs/FAT/software-fat-jan23.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/vortex-docs/docs/DevOps/Docusaurus/tutorial-extras/translate-your-site"},next:{title:"Pooltest 29.01.23 :whale:",permalink:"/vortex-docs/docs/Logs/Pooltests/Pooltest-29-jan-23"}},i={},u=[{value:"init",id:"init",level:3},{value:"Connect to beluga",id:"connect-to-beluga",level:2},{value:"On rasberrypi",id:"on-rasberrypi",level:2},{value:"Start the roscore",id:"start-the-roscore",level:3},{value:"Setup rasberrypi",id:"setup-rasberrypi",level:3},{value:"On Xavier",id:"on-xavier",level:2},{value:"Do something",id:"do-something",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"software-fat"},"Software FAT"),(0,n.kt)("p",null,"Hei this is a document for software fat."),(0,n.kt)("p",null,"You will be promted to open a new terminal, this do not mean you should close the exsisting terminal."),(0,n.kt)("h3",{id:"init"},"init"),(0,n.kt)("p",null,"Use the crap-top"),(0,n.kt)("p",null,"Check batteries, use a voltmeter to controlle the batteri charges, the batteries are fully charged if the voltage is 16.8v (see wiki page about batteries)."),(0,n.kt)("h2",{id:"connect-to-beluga"},"Connect to beluga"),(0,n.kt)("p",null,"There is aliases for connecting to the varius computing node of beluga. Use bachrc or aliases to list the different aliases."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ./bachrc\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ alias\n")),(0,n.kt)("p",null,"beluga ip addresses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rasberrypi = "),(0,n.kt)("li",{parentName:"ul"},"xavior = ")),(0,n.kt)("p",null,'The alias "rpi" connects you to the rasberrypi and alias "xavier" connects you to the xavier, both on beluga.'),(0,n.kt)("h2",{id:"on-rasberrypi"},"On rasberrypi"),(0,n.kt)("p",null,"We run the autonomus stack on the rasberrypi"),(0,n.kt)("h3",{id:"start-the-roscore"},"Start the roscore"),(0,n.kt)("p",null,"SSH to rasberrypi."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ rpi\n")),(0,n.kt)("p",null,"start the roscore"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ roscore\n")),(0,n.kt)("h3",{id:"setup-rasberrypi"},"Setup rasberrypi"),(0,n.kt)("p",null,"This start all functions needed to begin our code...."),(0,n.kt)("p",null,"On a new terminal SSH to rasberrypi agien, change your location to the launch files and start beluga.launch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ rpi\n$ cd /vortex_ws\n$ roslaunch auv_setup beluga.launch\n")),(0,n.kt)("p",null,"Does this not work try sourcing the workspace."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ source devel/setup.bash\n")),(0,n.kt)("h2",{id:"on-xavier"},"On Xavier"),(0,n.kt)("p",null,"We run the perception stack on xavier."),(0,n.kt)("p",null,"What to do if the xavier randomly turns off."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Observ the xavier light"),(0,n.kt)("li",{parentName:"ol"},"Try use the xavier"),(0,n.kt)("li",{parentName:"ol"},"Just ask electronical...")),(0,n.kt)("h3",{id:"do-something"},"Do something"),(0,n.kt)("p",null,"Open a new terminal and SSH to xavier."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ xavier\n")),(0,n.kt)("p",null,"When promted with a password it is usaly one of the following"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"gladlaks"),(0,n.kt)("li",{parentName:"ul"},"vortex")),(0,n.kt)("p",null,"FAT fail"))}p.isMDXComponent=!0}}]);