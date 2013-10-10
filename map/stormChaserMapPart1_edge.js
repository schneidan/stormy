
(function($,Edge,compId){var _=null,y=true,n=false,e67='${_gregoryRoad}',x61='rgba(81,81,81,1.00)',x117='168.5px 271.5px',x68='rgba(196,0,0,1.00)',x12='rgba(111,111,111,1.00)',x3='2.0.1.268',i='none',x98='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e86='${_countyRoad}',e90='${_tornadoPathText}',e91='${__2milesText}',x56='bold',e95='${_manningRoad}',e114='${_carPathLabel}',fs='font-size',e103='${_local_time}',e105='${_chilesRoad}',ta='text-align',xc='rgba(0,0,0,1)',x94='rgba(0,0,0,0.65)',x59='stage',rz='rotateZ',e62='${_pointer02}',e63='${_clock}',e65='${__15thStreet}',e71='${_clock_bg}',x21='solid',x2='2.0.0',p='px',x73='pointer',e87='${_reformatoryRoad}',x13='rgba(0,0,0,1.00)',rbl='border-bottom-left-radius',x116='rgba(160,49,37,1.00)',e101='${__1mileBar}',x23='14',x15='24',ql='linear',e111='${_alfadaleRoad}',e60='${_smithRoad}',e115='${_tornado_dot}',e66='${_countryClubRoad}',a='Base State',e75='${_tornadoBoundaryText}',dt='Default Timeline',e123='${_stormPath01}',x70='visible',e124='${_stormPath04}',lf='left',e79='${_bannerRoad}',e121='${_car}',e120='${_carPath01}',e119='${_tornadoPathLabel}',e100='${__29thStreet}',e118='${_stormPath03}',e96='${_clock_604Copy5}',e97='${_elmStreet}',bg='background-color',o='opacity',e113='${_stormPath02}',e99='${_radioRoad}',e107='${_sunsetDrive}',e109='${_Stage}',tp='top',x108='rgba(255,255,255,1)',x20='400',ov='overflow',x19='Courier, \'Courier New\', monospace',e110='${_pointer}',e106='${_RenoStreet}',x104='rgba(200,200,200,1.00)',x102='auto',t='transform',e112='${_carPath02}',cl='clip',x4='rgba(0,0,0,0)',d='display',e83='${_pointer01}',e78='${_elRenoRegionalAirport}',g='image',r='deg',e64='${_choctawAvenue}',x50='700',e89='${_Heaston_Road}',x48='rgba(196,0,0,1)',x1='2.0.1',e69='${_clockText}',rbr='border-bottom-right-radius',x72='@@0@@px @@1@@px',x='text',e80='${_jensenRoad}',x16='Courier, Courier New, monospace',e77='${_brandleyRoad}',m='rect',e81='${_elRenoOkla}',h='height',x57='rgba(255,255,255,1.00)',e88='${_calumetRoad}',e85='${_reuterRoad}',rt='right',e82='${_fortRenoRoad}',x122='127.75px 145.75px',e76='${_carPathText}',e74='${__2mileBar}',e92='${_evansRoad}',e93='${_clock_bg_frame}',x24='Arial, Helvetica, sans-serif',l='normal',x54='italic',rtl='border-top-left-radius',po='center',x18='18',rtr='border-top-right-radius',w='width',e84='${_airportRoad}',c='color',ff='font-family',s='style';var im='images/';var g7='carPath01.png',g5='overallMap3.png',g10='stormPath03.png',g9='stormPath02.png',g8='stormPath01.png',g11='stormPath04.png',g6='carPath02.png';var s31="Country Club Road",s46="Elm Street",s25="Banner Road",s41="15th Street",s43="Reno Street",s39="Calumet Road",s58="2 miles",s47="Sunset Drive",s30="Choctaw Avenue",s55="EL RENO, OKLA.",s26="Manning Road",s37="Heaston Road",s40="29th Street",s45="Smith Road",s51="Path of Samaras’ car",s17="Local time",s49="Tornado boundary",s29="Alfadale Road",s35="Brandley Road",s53="El Reno<br>Regional<br>Airport",s36="Fort Reno Road",s22="Gregory Road",s27="Evans Road",s33="Airport Road",s38="County Road",s32="Reformatory Road",s44="Jensen Road",s28="Radio Road",s14="6:00 p.m.",s42="Reuter Road",s52="Path of tornado center",s34="Chiles   Road";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'overallMap3',t:g,r:['0','0','1000px','479px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'carPath02',t:g,r:['0','0','1000px','479px','auto','auto'],cl:['rect(334px 452.5px 479px 0px)'],f:[x4,im+g6,'0px','0px']},{id:'carPath01',t:g,r:['0','0','1000px','479px','auto','auto'],cl:['rect(0px 125px 150px 0px)'],f:[x4,im+g7,'0px','0px']},{id:'stormPath01',t:g,r:['0','-1px','1000px','479px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'stormPath02',t:g,r:['0','-1px','1000px','479px','auto','auto'],cl:['rect(325px 721px 479px 0px)'],f:[x4,im+g9,'0px','0px']},{id:'stormPath03',t:g,r:['0','-1px','1000px','479px','auto','auto'],cl:['rect(0px 1000px 151px 799.5px)'],f:[x4,im+g10,'0px','0px']},{id:'stormPath04',t:g,r:['0','-1px','1000px','479px','auto','auto'],cl:['rect(163.5px 787.5px 479px 0px)'],f:[x4,im+g11,'0px','0px']},{id:'clock',t:'group',r:['908px','26px','79px','31px','auto','auto'],c:[{id:'clock_bg_frame',t:m,r:['-60px','-21px','146px','62px','auto','auto'],br:["8px 8px","8px 8px","8px 8px","8px 8px"],f:[x12],s:[2,"rgb(255, 255, 255)",i],boxShadow:["",-3,3,3,0,"rgba(0,0,0,0.65)"]},{id:'clock_bg',t:m,r:['-56px','4px','138px','33px','auto','auto'],cu:['pointer'],br:["7px 7px","7px 7px","7px 7px","7px 7px"],f:[x13],s:[2,"rgb(255, 255, 255)",i]},{id:'clockText',t:x,r:['-60px','6px','147px','36px','auto','auto'],text:s14,align:"center",n:[x16,x15,"rgba(196,0,0,1.00)",l,i,""]},{id:'local_time',t:x,r:['-49px','-19px','124px','20px','auto','auto'],text:s17,align:"center",n:[x19,x18,"rgba(200,200,200,1.00)",x20,i,l]}]},{id:'car',t:'ellipse',r:['158px','136px','16px','16px','auto','auto'],br:["50%","50%","50%","50%"],o:0.3984375,f:[x13],s:[2,"rgb(255, 255, 255)",x21]},{id:'street_labels',t:'group',r:['5','5','989','467','auto','auto'],c:[{id:'gregoryRoad',t:x,r:['857px','332px','251px','18px','auto','auto'],text:s22,align:"left",n:[x24,x23,"rgba(81,81,81,1)",l,i,l],tf:[[],['-90']]},{id:'bannerRoad',t:x,r:['796px','331px','251px','auto','auto','auto'],text:s25,align:"left",n:[x24,x23,"rgba(81,81,81,1)",l,i,l],tf:[[],['-90']]},{id:'manningRoad',t:x,r:['733px','333px','251px','auto','auto','auto'],text:s26,align:"left",n:[x24,x23,"rgba(81,81,81,1)",l,i,l],tf:[[],['-90']]},{id:'evansRoad',t:x,r:['675px','332px','251px','auto','auto','auto'],text:s27,align:"left",n:[x24,x23,"rgba(81,81,81,1)",l,i,l],tf:[[],['-90']]},{id:'radioRoad',t:x,r:['618px','336px','241px','auto','auto','auto'],text:s28,align:"left",n:[x24,x23,"rgba(81,81,81,1)",l,i,l],tf:[[],['-90']]},{id:'alfadaleRoad',t:x,r:['541px','176px','276px','auto','auto','auto'],text:s29,align:"right",n:[x24,x23,"rgba(81,81,81,1)",l,i,l],tf:[[],['-90']]},{id:'choctawAvenue',t:x,r:['445px','132px','224px','auto','auto','auto'],text:s30,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'countryClubRoad',t:x,r:['374px','123px','241px','auto','auto','auto'],text:s31,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'reformatoryRoad',t:x,r:['317px','126px','236px','auto','auto','auto'],text:s32,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'airportRoad',t:x,r:['289px','160px','168px','auto','auto','auto'],text:s33,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'chilesRoad',t:x,r:['151px','256px','326px','auto','auto','auto'],text:s34,align:"right",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'brandleyRoad',t:x,r:['134px','331px','232px','auto','auto','auto'],text:s35,align:"right",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'fortRenoRoad',t:x,r:['71px','336px','240px','auto','auto','auto'],text:s36,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'Heaston_Road',t:x,r:['11px','302px','237px','auto','auto','auto'],text:s37,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'countyRoad',t:x,r:['-23px','254px','186px','auto','auto','auto'],text:s38,align:"right",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'calumetRoad',t:x,r:['-85px','150px','188px','auto','auto','auto'],text:s39,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[[],['-90']]},{id:'_29thStreet',t:x,r:['475px','431px','225px','auto','auto','auto'],text:s40,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l]},{id:'_15thStreet',t:x,r:['5px','367px','186px','auto','auto','auto'],text:s41,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l]},{id:'reuterRoad',t:x,r:['721px','246px','263px','18px','auto','auto'],text:s42,align:"right",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l]},{id:'RenoStreet',t:x,r:['538px','309px','215px','auto','auto','auto'],text:s43,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l]},{id:'jensenRoad',t:x,r:['144px','186px','215px','auto','auto','auto'],text:s44,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l]},{id:'smithRoad',t:x,r:['54px','122px','225px','auto','auto','auto'],text:s45,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l],tf:[]},{id:'elmStreet',t:x,r:['340px','61px','225px','auto','auto','auto'],text:s46,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l]},{id:'sunsetDrive',t:x,r:['340px','0px','251px','auto','auto','auto'],text:s47,align:"left",n:[x24,x23,"rgba(81,81,81,1.00)",l,i,l]}]},{id:'tornado_dot',t:'ellipse',r:['157px','260px','11px','11px','auto','auto'],br:["50%","50%","50%","50%"],o:0.359375,f:[x48],s:[2,"rgb(255, 255, 255)",x21]},{id:'tornadoBoundaryLabel',t:'group',r:['854','282','120','44','auto','auto'],c:[{id:'tornadoBoundaryText',t:x,r:['32px','0px','88px','44px','auto','auto'],text:s49,align:"left",n:[x24,x18,"rgba(0,0,0,1.00)",x50,i,l]},{id:'pointer',t:m,r:['0px','8px','27px','2px','auto','auto'],f:[x13],s:[1,"rgb(255, 255, 255)",i]}]},{id:'carPathLabel',t:'group',r:['22px','66px','120','44','auto','auto'],cl:['rect(0px 158px 44px 0px)'],c:[{id:'carPathText',t:x,r:['32px','0px','126px','44px','auto','auto'],text:s51,align:"left",n:[x24,x18,"rgba(0,0,0,1.00)",x50,i,l]},{id:'pointer01',t:m,r:['0px','8px','27px','2px','auto','auto'],f:[x13],s:[1,"rgb(255, 255, 255)",i]}]},{id:'tornadoPathLabel',t:'group',r:['13px','261px','120','44','auto','auto'],cl:['rect(0px 161.5px 70px 56px)'],tf:[],c:[{id:'tornadoPathText',t:x,r:['51px','7px','71px','63px','auto','auto'],text:s52,align:"right",n:[x24,x18,"rgba(0,0,0,1.00)",x50,i,l]},{id:'pointer02',t:m,r:['127px','18px','31px','2px','auto','auto'],f:[x13],s:[1,"rgb(255, 255, 255)",i]}]},{id:'elRenoRegionalAirport',t:x,r:['378px','270px','auto','auto','auto','auto'],text:s53,align:"left",n:[x24,x23,"rgba(81,81,81,1)",l,i,x54]},{id:'elRenoOkla',t:x,r:['514px','50px','auto','auto','auto','auto'],text:s55,align:"right",n:[x24,x23,xc,x56,i,l]},{id:'mileageScale',t:'group',r:['8','440','124','28','auto','auto'],c:[{id:'_2mileBar',t:m,r:['0px','19px','122px','7px','auto','auto'],f:[x57],s:[1,"rgb(0, 0, 0)",x21]},{id:'_1mileBar',t:m,r:['auto','19px','60px','7px','0px','auto'],f:[x13],s:[1,"rgb(0, 0, 0)",x21]},{id:'_2milesText',t:x,r:['40px','0px','auto','auto','auto','auto'],text:s58,align:"center",n:[x24,x23,"rgba(81,81,81,1)",l,i,l]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:39500,a:y,tt:[]}}}};var S1=symbols[x59];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e60).P(tp,122).P(ta,lf).P(rz,0,t,_,r).P(c,x61,c).P(lf,54,_,_,p).P(w,225);A1.A(e62).P(tp,18).P(bg,xc,c).P("border-width",1).P(h,2).P("border-style",i).P(lf,127).P(w,31);A1.A(e63).P(tp,26).P(h,31).P(lf,908).P(w,79);A1.A(e64).P(tp,132).P(ta,lf).P(rz,-90,t,_,r).P(c,x61,c).P(lf,445,_,_,p).P(w,224);A1.A(e65).P(tp,367).P(ta,lf).P(c,x61,c).P(lf,5).P(w,186);A1.A(e66).P(tp,123).P(ta,lf).P(rz,-90,t,_,r).P(c,x61,c).P(lf,374,_,_,p).P(w,241);A1.A(e67).P(tp,332).P(ta,lf).P(rz,-90,t,_,r).P(h,18,_,_,p).P(lf,857).P(w,251);A1.A(e69).P(c,x68,c).P(lf,-60).P(w,147).P(tp,6).P(ta,po).P(ov,x70).P(h,36).P(ff,x16).P(fs,24);A1.A(e71).P(bg,xc,c).P(rtl,[7,7],_,x72).P(rbr,[7,7],_,x72).P("border-style",i).P(lf,-56).P(w,138).P(tp,4).P(rbl,[7,7],_,x72).P(h,33).P(rtr,[7,7],_,x72).P("cursor",x73);A1.A(e74).P(bg,x57,c).P(tp,19).P("border-width",1).P(h,7).P("border-style",x21).P(lf,0).P(w,122);A1.A(e75).P(c,x13,c).P("font-weight",700,_,_,"").P(lf,32,_,_,p).P(fs,18).P(tp,0).P(ta,lf).P(h,44).P(ff,x24).P(w,88);A1.A(e76).P(c,xc,c).P("font-weight",x56).P(lf,32).P(fs,18).P(tp,0).P(ta,lf).P(h,44).P(ff,x24).P(w,126);A1.A(e77).P(tp,331).P(ta,rt).P(rz,-90,t,_,r).P(c,x61,c).P(lf,134,_,_,p).P(w,232);A1.A(e78).P("font-style",x54).P(tp,270).P("text-decoration",i).P(lf,378);A1.A(e79).P(tp,331).P(ta,lf).P(rz,-90,t,_,r).P(lf,796,_,_,p).P(w,251);A1.A(e80).P(tp,186).P(ta,lf).P(c,x61,c).P(lf,144).P(w,215);A1.A(e81).P(tp,50).P(lf,514).P(fs,14);A1.A(e82).P(tp,336).P(ta,lf).P(rz,-90,t,_,r).P(c,x61,c).P(lf,71,_,_,p).P(w,240);A1.A(e83).P(tp,8).P(bg,xc,c).P(lf,0).P(h,2).P("border-style",i).P("border-width",1).P(w,27);A1.A(e84).P(tp,160).P(ta,lf).P(rz,-90,t,_,r).P(c,x61,c).P(lf,289,_,_,p).P(w,168);A1.A(e85).P(tp,246).P(ta,rt).P(h,18).P(c,x61,c).P(lf,721).P(w,263);A1.A(e86).P(tp,254).P(ta,rt).P(rz,-90,t,_,r).P(c,x61,c).P(lf,-23,_,_,p).P(w,186);A1.A(e87).P(tp,126).P(ta,lf).P(rz,-90,t,_,r).P(c,x61,c).P(lf,317,_,_,p).P(w,236);A1.A(e88).P(tp,150).P(ta,lf).P(rz,-90,t,_,r).P(c,x61,c).P(lf,-85,_,_,p).P(w,188);A1.A(e89).P(tp,302).P(ta,lf).P(rz,-90,t,_,r).P(c,x61,c).P(lf,11,_,_,p).P(w,237);A1.A(e90).P(c,xc,c).P("font-weight",x56).P(lf,51).P(fs,18).P(tp,7).P(ta,rt).P(h,63).P(ff,x24).P(w,71);A1.A(e91).P(tp,0).P(ta,po).P(lf,40);A1.A(e92).P(tp,332).P(ta,lf).P(rz,-90,t,_,r).P(lf,675,_,_,p).P(w,251);A1.A(e93).P(bg,x12,c).P(rtl,[8,8],_,x72).P("boxShadow.blur",3,"subproperty").P(rbr,[8,8],_,x72).P("border-style",i).P(lf,-60).P(w,146).P(tp,-21).P(rbl,[8,8],_,x72).P(rtr,[8,8],_,x72).P(h,62).P("boxShadow.offsetV",3,"subproperty").P("boxShadow.offsetH",-3,"subproperty").P("boxShadow.color",x94,"subproperty");A1.A(e95).P(tp,333).P(ta,lf).P(rz,-90,t,_,r).P(lf,733,_,_,p).P(w,251);A1.A(e96).P(tp,2).P(d,i).P(h,30).P(ov,x70).P(c,x68,c).P(ff,x16).P(lf,2).P(w,69);A1.A(e97).P(tp,61).P(ta,lf).P(c,x61,c).P(lf,340).P(w,225);A1.A(e99).P(tp,336).P(ta,lf).P(rz,-90,t,_,r).P(lf,618,_,_,p).P(w,241);A1.A(e100).P(tp,431).P(ta,lf).P(c,x61,c).P(lf,475).P(w,225);A1.A(e101).P(tp,19).P(bg,x13,c).P(lf,x102).P("border-style",x21).P(h,7).P(rt,0).P("border-width",1).P(w,60);A1.A(e103).P(tp,-19).P(w,124).P(c,x104,c).P(h,20).P("font-weight",400,_,_,"").P(lf,-49,_,_,p).P(fs,18);A1.A(e105).P(tp,256).P(ta,rt).P(rz,-90,t,_,r).P(c,x61,c).P(lf,151,_,_,p).P(w,326);A1.A(e106).P(tp,309).P(ta,lf).P(c,x61,c).P(lf,538).P(w,215);A1.A(e107).P(tp,0).P(ta,lf).P(c,x61,c).P(w,251).P(lf,340).P(fs,14);A1.A(e109).P(bg,x108,c).P(ov,x70).P(h,479).P(w,1000);A1.A(e110).P(tp,8).P(bg,x13,c).P("border-width",1).P(h,2).P("border-style",i).P(lf,0).P(w,27);A1.A(e111).P(tp,176).P(ta,rt).P(rz,-90,t,_,r).P(lf,541,_,_,p).P(w,276);A1.A(e112).P(cl,[334,452.5,479,0],_,x98).T(11.449,[264,452.5,479,0],1.551,ql).T(13,[264,489.5,479,0],0.75).T(13.75,[264,566.5,479,0],1.25).T(15,[264,626,479,0],1.5).T(16.5,[264,681.5,479,0],1).T(17.5,[264,730,479,0],1.75).T(19.25,[264,740.5,479,0],1.25);A1.A(e113).P(tp,-1).P(cl,[325,721,479,0],_,x98).T(19,[314.5,731,479,0],0.173,ql).T(19.173,[302.5,735,479,0],0.577).T(19.75,[290.5,739,479,0],0.43).T(20.18,[277.5,741.5,479,0],0.479).T(20.659,[267,743,479,0],0.457).T(21.116,[259.5,754,479,0],0.322).T(21.438,[254,768,479,0],0.37).T(21.808,[243,769.5,479,0],0.384).T(22.192,[232.5,778,479,0],0.363).T(22.555,[219,783,479,0],0.37).T(22.925,[205.5,788.5,479,0],0.413).T(23.338,[192.5,793,479,0],0.355).T(23.693,[180,795,479,0],0.384).T(24.077,[167,802.5,479,0],0.479).T(24.556,[154.5,808.5,479,0],0.444).T(25,[142.5,812,479,0],0.926);A1.A(e114).P(tp,66).P(lf,22).P(cl,[0,158,44,0],_,x98).P(o,0,_,_,"").T(2.066,1,0.776,ql);A1.A(e115).P(bg,x116,c).T(35.628,x116).P("location",x117,"motion").T(1,[[168.5,271.5,0,0],[173.44,281.8,9.22,14.92,8.36,13.51],[180.25,290.5,0,0]],1,ql).T(2,[[180.25,290.5,0,0],[187.14,297.97,10.15,9.26,11.18,10.2],[194.5,303.5,0,0]],1).T(3,[[194.5,303.5,0,0],[206.74,314.76,10.06,10.84,13.73,14.79],[210.75,321,0,0]],1).T(4,[[210.75,321,0,0],[218.5,342.75,6,15]],1).T(5,[[218.5,342.75,6,15],[233.75,365.5,13.99,10.63]],1).T(6,[[233.75,365.5,18.75,14.25],[271,375.5,21,4.5]],1).T(7,[[271,375.5,21,4.5],[302.75,381.25,23.25,2.25]],1).T(8,[[302.75,381.25,13.21,1.28],[324.64,380.84,38.36,-6.12,20.95,-3.34],[341.75,382.5,6.76,2.16]],1).T(9,[[341.75,382.5,12.51,4],[365,390.24,26.14,9.58,29.97,10.98],[390.75,389.25,41.25,-9]],1).T(10,[[390.75,389.25,10.46,-2.28],[417.67,383.78,23.77,-5.83,31.23,-7.66],[431.5,377.25,6.79,-4.13]],1).T(11,[[431.5,377.25,17.25,-10.5],[451.75,361.5,12.65,-14.45]],1).T(12,[[451.75,361.5,10.43,-11.92],[470.48,358.63,24.68,-0.04,24.13,-0.04],[486.25,359,14.25,4.5]],1).T(13,[[486.25,359,14.25,4.5],[519.25,371.5,20.1,8.6]],1).T(14,[[519.25,371.5,18.99,8.12],[541.7,384.04,9.61,4.31,36.18,16.24],[567,384.75,15.86,-0.35]],1).T(15,[[567,384.75,33.75,-0.75],[620.25,382.75,13.5,-4.5]],1).T(16,[[620.25,382.75,13.5,-4.5],[663.5,364,25.5,-15]],1).T(17,[[663.5,364,25.5,-15],[691.75,345,18,-13.5]],1).T(18,[[691.75,345,10.08,-7.56],[713.13,330.36,17.95,-12.2,22.86,-15.54],[723,323.5,3.75,-5.25]],1).T(19,[[723,323.5,3.75,-5.25],[731.5,300.75,4.5,-18.75]],1).T(20,[[731.5,300.75,4.5,-18.75],[736.5,274,3,-24]],1).T(21,[[736.5,274,1.61,-12.85],[750.82,262.97,47.3,-13.66,31.98,-9.23],[763.75,252.75,-3.38,-15.48]],1).T(22,[[763.75,252.75,-2.91,-13.3],[769.67,241.05,13.43,-15.36,12.81,-14.65],[778.5,223,5.02,-14.74]],1).T(23,[[778.5,223,12,-35.25],[789.75,186.75,7.71,-32.38]],1).T(24,[[789.75,186.75,5.35,-22.48],[802.5,160,6.75,-17.25]],1).T(25,[[802.5,160,6.75,-17.25],[804.5,146.5,-6,-6.75]],1).T(26,[[804.5,146.5,-6,-6.75],[794.5,151.5,-6.75,6]],1).T(27,[[794.5,151.5,-6.75,6],[788.25,156.5,-3,3.75]],1).T(28,[[788.25,156.5,-3,3.75],[785.25,161.75,-2.25,5.25]],1).T(29,[[785.25,161.75,-2.25,5.25],[783.75,168.5,6.75,3.75]],1).T(30,[[783.75,168.5,6.75,3.75],[791.5,163.75,7.5,-7.5]],1).T(31,[[791.5,163.75,2.83,-2.83],[798.11,158.2,5.75,-3.27,7.96,-4.53],[812.75,161.5,19.74,6.64]],1).T(32,[[812.75,161.5,18.12,6.09],[838.75,173.25,26.78,13.39]],1).T(33,[[838.75,173.25,5.19,2.59],[848.54,177.15,15.66,1.58,9.05,0.91],[865.5,178.5,14.04,0.38]],1).T(34,[[865.5,178.5,12.12,0.33],[877.27,178.45,8.13,-2.27,5.47,-1.53],[888,172.25,7.5,-6.05]],1).T(35,[[888,172.25,23.25,-18.75],[901.25,168.5,9.75,10.5]],1).T(36,[[901.25,168.5,4.8,5.17],[908.72,168.07,9.42,-6.06,11.44,-7.36],[919,163,8,-3.81]],1).T(37,[[919,163,15.75,-7.5],[932,163.75,-1.5,12]],1).T(38,[[932,163.75,-1.5,12],[937.5,173.75,15.75,9.75]],1).P(o,0,_,_,"").T(0,0).T(0.5,1,0.5).T(38.485,0,1.015).P(h,16,_,_,p).T(0,16).P(w,16).T(0,16);A1.A(e118).P(tp,-1).P(cl,[0,1000,143.5,808],_,x98).T(0,[0,1000,143.87051391601562,807.7134399414062],25.75,ql).T(25.75,[0,1000,151,799.5],0.176).T(25.926,[0,1000,156.5,790],1.015).T(26.941,[0,1000,166.5,782],1.652).T(28.593,[0,1000,175.5,777],1.319);A1.A(e119).P(tp,261).P(lf,13).P(cl,[0,161.5,70,56],_,x98).P(o,0,_,_,"").T(2.066,1,0.776,ql);A1.A(e120).P(cl,[0,125,150,0],_,x98).T(0,[0,186,150,0],0.812,ql).T(0.812,[0,248,150,0],0.688).T(3.75,[0,268,150,0],0.194).T(3.944,[0,268,211.5,0],0.906).T(4.85,[0,330,211.5,0],0.9).T(5.75,[0,330,334.5,0],3.25).T(9,[0,448,334.5,0],2.449);A1.A(e121).P(lf,158).P(bg,x13,c).T(20.5,x13,0.75,ql,xc).P(o,0,_,_,"").T(0,1,1).T(20.5,0,0.75).P("location",x122,"motion").T(0,[[127.75,145.75,0,0],[211.5,145.75,0,0]],1).T(1,[[211.5,145.75,0,0],[248,145.75,0,0]],0.5).T(3.75,[[248,145.75,0,0],[264.87,146.19,0,0,0,0],[264.55,207.14,0,0,0,0],[326.5,207.75,0,0]],2).T(5.75,[[326.5,207.75,0,0],[327,330.5,0,0]],3.25).T(9,[[327,330.5,0,0],[386.25,330.5,0,0]],1.25).T(10.25,[[386.25,330.5,0,0],[424.25,330.5,0,0]],0.5).T(10.75,[[424.25,330.5,0,0],[447.84,331.52,0,0,0,0],[447.75,320.75,0,0]],1).T(11.75,[[447.75,320.75,0,0],[447.75,268.25,0,0]],1.25).T(13,[[447.75,268.25,0,0],[490.25,268.25,0,0]],0.75).T(13.75,[[490.25,268.25,0,0],[567,268.25,0,0]],1.25).T(15,[[567,268.25,0,0],[627.25,268.25,0,0]],1.5).T(16.5,[[627.25,268.25,0,0],[681.75,268.25,0,0]],1).T(17.5,[[681.75,268.25,0,0],[729.75,268.25,0,0]],1.75).T(19.25,[[729.75,268.25,0,0],[737.75,268.25,0,0]],1.25).P("filter.blur",0,"subproperty",_,p).T(20.5,3,0.75).T(21.25,3).T(39.5,3);A1.A(e123).P(tp,-1).P(cl,[220,166.5,268.5,0],_,x98).T(0.812,[220,170.5,276.5,0],0.188,ql).T(1,[220,174,283.5,0],0.5).T(1.5,[220,179,290,0],0.327).T(1.827,[220,184,296.5,0],0.423).T(2.25,[220,191.5,303,0],0.44).T(2.69,[220,199.5,310,0],0.478).T(3.168,[220,207,317,0],0.332).T(3.5,[220,213,325,0],0.444).T(3.944,[220,216,333.5,0],0.457).T(4.401,[220,218.5,344.5,0],0.449).T(4.85,[220,225.5,353,0],0.4).T(5.25,[220,230.5,363,0],0.369).T(5.619,[220,238,371.5,0],0.442).T(6.061,[220,248.5,374,0],0.268).T(6.329,[220,261,376.5,0],0.261).T(6.59,[220,270.5,380.5,0],0.291).T(6.881,[220,281,383,0],0.311).T(7.192,[220,290.5,385,0],0.308).T(7.5,[220,301.5,385,0],0.309).T(7.809,[220,313,388,0],0.355).T(8.164,[220,326,388,0],0.275).T(8.439,[220,338.5,388,0],0.311).T(8.75,[220,351,389,0],0.342).T(9.092,[220,365,395,0],0.268).T(9.36,[220,379,399,0],0.268).T(9.628,[220,392,399,0],0.276).T(9.904,[220,405.5,399,0],0.29).T(10.194,[220,418.5,399,0],0.306).T(10.5,[220,433,399,0],0.339).T(10.839,[220,446,399,0],0.529).T(11.368,[220,458.5,399,0],0.695).T(12.063,[220,472.5,399,0],0.348).T(12.411,[220,487,399,0],0.406).T(12.817,[220,501,399,0],0.433).T(13.25,[220,514.5,399,0],0.408).T(13.658,[220,529,399,0],0.406).T(14.064,[220,543,399,0],0.326).T(14.39,[220,557,399,0],0.276).T(14.666,[220,570.5,399,0],0.268).T(14.934,[220,583,399,0],0.254).T(15.188,[220,596.5,399,0],0.239).T(15.427,[220,611,399,0],0.254).T(15.681,[220,625,399,0],0.254).T(15.935,[220,637.5,399,0],0.315).T(16.25,[220,651.5,399,0],0.313).T(16.563,[220,665,399,0],0.297).T(16.86,[220,678,399,0],0.449).T(17.309,[220,691.5,399,0],0.441).T(17.75,[220,705.5,399,0],0.5).T(18.25,[220,719,399,0],0.422).T(18.672,[220,728.5,399,0],0.328);A1.A(e124).P(tp,-1).P(cl,[173,780.5,479,0],_,x98).T(0,[171.95704650878906,782.5579833984375,479,0],29.5,ql).T(29.5,[163.5,787.5,479,0],0.412).T(29.912,[156,800,479,0],1.197).T(31.109,[154,813.5,479,0],0.641).T(31.75,[154,827.5,479,0],0.562).T(32.312,[154,842,479,0],0.537).T(32.849,[154,855,479,0],0.536).T(33.385,[154,867,479,0],0.464).T(33.849,[154,879.5,479,0],0.493).T(34.342,[154,892,479,0],0.558).T(34.9,[154,905,479,0],0.914).T(35.814,[154,917,479,0],0.761).T(36.575,[154,927.5,479,0],0.776).T(37.351,[154,932.5,479,0],0.649).T(38,[154,941.5,479,0],0.75);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-3014757");