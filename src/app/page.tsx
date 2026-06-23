'use client';
import { useState, useEffect, useRef } from 'react';

const P = {
  ink:"#0c1222",navy:"#162040",steel:"#1e293b",gold:"#c8a44e",gL:"#e8d5a0",
  cream:"#f5f0e8",parch:"#faf7f0",red:"#b91c1c",redS:"#fef2f2",
  blue:"#1e40af",blueS:"#eff6ff",amber:"#92400e",amberS:"#fffbeb",
  purple:"#6b21a8",purpleS:"#faf5ff",green:"#166534",greenS:"#f0fdf4",
  flame:"#ff6b00",muted:"#64748b",border:"#e2e0d8",white:"#ffffff"
};

const sIDs=["home","summary","plant","process","timeline","rootcause","vce","plume","hazmat","response","geo","lessons","document","sources"];
const sHe=["ראשי","תקציר","המתקן","תהליך הייצור","ציר זמן","שרשרת הכשל","הדמיית VCE","פיזור הענן","חומרים מסוכנים","מענה חומ״ס","רקע גאופוליטי","לקחים ותובנות","המסמך","מקורות"];
const sEn=["Home","Summary","The Plant","Process","Timeline","Failure Chain","VCE Sim","Plume","Hazards","HazMat Response","Geopolitics","Lessons","Document","Sources"];
const sIcon=["🏠","📋","🏭","⚗️","🕐","⛓️","💥","☁️","☣️","🛡️","🌍","🎓","📄","🔗"];

/* ═══ PROGRESS BAR ═══ */
function ProgressBar(){const[p,setP]=useState(0);useEffect(()=>{const fn=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;setP(h>0?(window.scrollY/h)*100:0);};window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);return<div style={{position:"fixed",top:0,left:0,right:0,zIndex:100,height:3,background:P.cream}}><div style={{height:"100%",width:`${p}%`,background:`linear-gradient(90deg,${P.gold},${P.gL})`,transition:"width 120ms"}}/></div>;}

/* ═══ NAV ═══ */
function Nav({lang,toggle}:{lang:string;toggle:()=>void}){const[open,setOpen]=useState(false);const labels=lang==="he"?sHe:sEn;return<><nav className="nv"><div style={{maxWidth:1100,margin:"0 auto",padding:"0 16px",height:48,display:"flex",alignItems:"center",justifyContent:"space-between"}}><a href="#home" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}><img src="/images/logo-60sec.png" alt="" style={{width:28,height:28,borderRadius:6}}/><span style={{fontSize:10,fontWeight:700,color:P.muted}}>{lang==="he"?"60 שניות חומ\"ס":"60 Sec HazMat"}</span></a><div className="hd-links" style={{display:"flex",gap:1,alignItems:"center"}}>{labels.map((s,i)=><a key={i} href={`#${sIDs[i]}`} style={{padding:"6px 7px",fontSize:10,color:P.muted,textDecoration:"none",borderRadius:4}}>{s}</a>)}<button onClick={toggle} className="mn" style={{padding:"5px 12px",fontSize:11,fontWeight:800,background:P.ink,color:P.gold,border:"none",borderRadius:4,cursor:"pointer",marginInlineStart:6}}>{lang==="he"?"EN":"עב"}</button></div><div style={{display:"flex",alignItems:"center",gap:8}}><button onClick={toggle} className="mn lang-btn" style={{padding:"5px 12px",fontSize:11,fontWeight:800,background:P.ink,color:P.gold,border:"none",borderRadius:4,cursor:"pointer"}}>{lang==="he"?"EN":"עב"}</button><button className="mob-btn" onClick={()=>setOpen(!open)} style={{display:"none",alignItems:"center",justifyContent:"center",background:"none",border:"none",cursor:"pointer",color:P.muted,fontSize:22}}>☰</button></div></div></nav>{open&&<div className="mob-menu" style={{position:"fixed",top:51,left:0,right:0,zIndex:89,background:P.white,borderBottom:`1px solid ${P.border}`,padding:8,boxShadow:"0 4px 16px rgba(0,0,0,0.08)",maxHeight:"70vh",overflowY:"auto"}}>{labels.map((s,i)=><a key={i} href={`#${sIDs[i]}`} onClick={()=>setOpen(false)} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",fontSize:13,color:P.steel,textDecoration:"none"}}><span>{sIcon[i]}</span>{s}</a>)}</div>}</>;}

/* ═══ BOTTOM TAB BAR (mobile) ═══ */
function BottomTabs({lang}:{lang:string}){const labels=lang==="he"?sHe:sEn;const keyTabs=[0,3,6,8,9];return<div className="btab"><div style={{display:"flex",width:"100%",justifyContent:"space-around",alignItems:"center",padding:"6px 0"}}>{keyTabs.map(i=><a key={i} href={`#${sIDs[i]}`} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,textDecoration:"none",color:P.gL,flex:1}}><span style={{fontSize:18}}>{sIcon[i]}</span><span style={{fontSize:8,fontWeight:600,color:`${P.gL}cc`}}>{labels[i]}</span></a>)}</div></div>;}

/* ═══ HERO with animated gas-fire background ═══ */
function Hero({lang}:{lang:string}){const he=lang==="he";return<section id="home" className="mh" style={{paddingTop:80,paddingBottom:56,position:"relative"}}>
  {/* Animated background: gas leak + fireball glow */}
  <div style={{position:"absolute",inset:0,zIndex:0,overflow:"hidden"}}>
    <div style={{position:"absolute",bottom:-40,right:"12%",width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,107,0,0.18) 0%,rgba(255,69,0,0.08) 40%,transparent 70%)",filter:"blur(40px)",animation:"cloudPulse 4s ease-in-out infinite"}}/>
    <div style={{position:"absolute",top:"20%",left:"15%",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,164,78,0.08) 0%,transparent 70%)",filter:"blur(50px)",animation:"float 9s ease-in-out infinite"}}/>
    {[0,1,2,3,4,5].map(i=><div key={i} style={{position:"absolute",bottom:"30%",right:`${18+i*2}%`,width:6+i*3,height:6+i*3,borderRadius:"50%",background:"rgba(180,190,200,0.15)",animation:`gasRise ${3+i*0.4}s ease-out infinite`,animationDelay:`${i*0.5}s`}}/>)}
  </div>
  <div style={{maxWidth:800,margin:"0 auto",padding:"0 24px",textAlign:"center",position:"relative",zIndex:1}}>
    <div className="mn au" style={{display:"inline-block",border:`1px solid ${P.gold}50`,padding:"3px 16px",borderRadius:2,color:P.gold,fontSize:10,fontWeight:700,letterSpacing:"0.3em",marginBottom:20}}>[ {he?"לא מסווג":"UNCLASSIFIED"} ]</div>
    <p className="au" style={{fontSize:10,letterSpacing:"0.25em",color:`${P.gL}70`,textTransform:"uppercase",marginBottom:16}}>Engineering & Operational Investigation • {he?"יוני 2026":"June 2026"}</p>
    <h1 className="sf au" style={{fontSize:"clamp(26px,5vw,50px)",fontWeight:900,color:P.white,lineHeight:1.15,marginBottom:12}}>{he?"אסון הגז בברזאן":"The Barzan Gas Disaster"}</h1>
    <h2 className="sf au" style={{fontSize:"clamp(14px,2vw,20px)",fontWeight:400,color:`${P.gL}90`,marginBottom:16}}>{he?"כשל תהליכי ופיצוץ ענן אדים (VCE) במתקן הגז הטבעי, ראס לאפן — קטר":"Process Failure & Vapor Cloud Explosion (VCE) at the Natural Gas Plant, Ras Laffan — Qatar"}</h2>
    <div className="gr au" style={{margin:"0 auto 16px"}}/>
    <p className="au" style={{fontSize:13,color:`${P.white}cc`,maxWidth:580,margin:"0 auto 32px",lineHeight:1.8}}>{he?"תחקיר הנדסי-מבצעי: אנטומיית המתקן, תהליך הייצור, שרשרת הכשל, הדמיית האירוע, רעילות לפי ערכי PAC, ודוקטרינת מענה חומ\"ס":"Engineering-operational investigation: plant anatomy, production process, failure chain, event simulation, PAC-based toxicity, and HazMat response doctrine"}</p>
    <div className="au" style={{display:"flex",justifyContent:"center",gap:"clamp(14px,5vw,44px)",flexWrap:"wrap",marginBottom:28}}>{[{n:"VCE",l:he?"מנגנון פיצוץ":"Blast Mechanism",c:P.flame},{n:"13",l:he?"הרוגים":"Fatalities",c:"#ef4444"},{n:"66",l:he?"פצועים":"Injured",c:P.gold},{n:"18",l:he?"נעדרים*":"Missing*",c:P.gL}].map((s,i)=><div key={i} style={{textAlign:"center"}}><div className="sf" style={{fontSize:"clamp(22px,3.5vw,36px)",fontWeight:900,color:s.c}}>{s.n}</div><div style={{fontSize:9,color:`${P.white}99`}}>{s.l}</div></div>)}</div>
    <p className="au" style={{fontSize:11,color:`${P.gL}cc`}}>{he?"רועי צוקרמן — מומחה לחומ״ס וטב״ק":"Roie Zukerman — HazMat & CBRN Expert"}</p>
    <p className="au mn" style={{fontSize:9,color:`${P.white}55`,marginTop:6}}>* {he?"מספרים ראשוניים ומתעדכנים":"Preliminary, updating figures"}</p>
  </div>
</section>;}

/* ═══ SECTION WRAPPER ═══ */
function Sec({id,num,title,subtitle,children,sidebar,dark}:{id:string;num:string;title:string;subtitle?:string;children:React.ReactNode;sidebar?:React.ReactNode;dark?:boolean}){return<section id={id} style={{padding:"48px 20px",background:dark?P.cream:P.parch,borderBottom:`1px solid ${P.border}`,position:"relative"}}><div style={{maxWidth:1100,margin:"0 auto",position:"relative"}}><div className="sf" style={{position:"absolute",top:-14,right:-5,fontSize:80,fontWeight:900,color:`${P.gold}08`,lineHeight:1,userSelect:"none",pointerEvents:"none"}}>{num}</div><div style={{marginBottom:24,position:"relative",zIndex:1}}><div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:4}}><span className="mn" style={{fontSize:11,fontWeight:700,color:P.gold}}>{num}</span><h2 className="sf" style={{fontSize:"clamp(20px,3vw,30px)",fontWeight:800,color:P.ink}}>{title}</h2></div>{subtitle&&<p style={{fontSize:13,color:P.muted,marginTop:2}}>{subtitle}</p>}<div className="gr" style={{marginTop:10}}/></div><div style={{display:"flex",gap:28,flexWrap:"wrap"}}><div style={{flex:"1 1 500px",minWidth:0}}>{children}</div>{sidebar&&<aside style={{flex:"0 1 280px",display:"flex",flexDirection:"column",gap:14}}>{sidebar}</aside>}</div></div></section>;}

/* ═══ SIDEBAR BOX ═══ */
function SB({color,title,children}:{color:string;title:string;children:React.ReactNode}){const cs:Record<string,[string,string]>={blue:[P.blueS,P.blue],red:[P.redS,P.red],amber:[P.amberS,P.amber],purple:[P.purpleS,P.purple],green:[P.greenS,P.green],gold:[`${P.gold}10`,P.gold],flame:["#fff4ec",P.flame]};const[bg,bc]=cs[color]||cs.blue;return<div className="cm" style={{padding:16,borderRight:`3px solid ${bc}`,background:bg}}><h4 style={{fontSize:10,fontWeight:800,color:bc,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.05em"}}>{title}</h4><div style={{fontSize:12,color:P.steel,lineHeight:1.7}}>{children}</div></div>;}

/* ═══ 01 EXECUTIVE SUMMARY ═══ */
function Summary({lang}:{lang:string}){const he=lang==="he";return<Sec id="summary" num="01" title={he?"תקציר מנהלים":"Executive Summary"} subtitle={he?"מבט-על על האירוע, הנפגעים והמשמעות":"Overview of the event, casualties and significance"} sidebar={<>
  <SB color="flame" title={he?"מנגנון מרכזי":"Core Mechanism"}><p style={{fontWeight:700,color:P.flame,fontSize:14,marginBottom:4}}>VCE</p><p>{he?"פיצוץ ענן אדים (Vapor Cloud Explosion) — שחרור גז דליק, יצירת ענן, והתלקחות באזור צפוף/כלוא שיוצרת גל הדף.":"Vapor Cloud Explosion — flammable gas release, cloud formation, and ignition in a congested/confined area producing a blast wave."}</p></SB>
  <SB color="red" title={he?"⚠️ מספרים מתעדכנים":"⚠️ Figures Updating"}><p>{he?"נתוני הנפגעים באירוע חי ומתפתח. מוצגות שתי קבוצות מספרים: ממסמך התחקיר ומהדיווחים הרשמיים העדכניים.":"Casualty data in a live, evolving event. Two figure sets shown: from the investigation document and from current official reports."}</p></SB>
</>}>
  <p style={{fontSize:14,color:P.steel,lineHeight:1.9,marginBottom:16}}>{he?"ב-21 ביוני 2026, במהלך שלב התנעה מחדש (Start-up) של מערכות הטיפול בגז במתקן \"ברזאן\" (Barzan Gas Project) הממוקם בקריית התעשייה ראס לאפן בקטר, אירע פיצוץ נפחי אדיר מסוג פיצוץ ענן אדים (VCE). האירוע הוביל לשריפת לחץ מסיבית, הרס תשתיתי נרחב באזור מדחסי הגז, ולנפגעים רבים בקרב סגל ההפעלה והקבלנים שנכחו במקום.":"On June 21, 2026, during a restart (Start-up) phase of the gas treatment systems at the Barzan Gas Project in Ras Laffan Industrial City, Qatar, a massive volumetric Vapor Cloud Explosion (VCE) occurred. The event led to a massive pressure fire, extensive structural destruction in the gas compressor area, and many casualties among operating staff and contractors present."}</p>
  <p style={{fontSize:14,color:P.steel,lineHeight:1.9,marginBottom:16}}>{he?"מתקן ברזאן הוא מתקן עיבוד גז טבעי \"חמוץ\" (Sour Gas) המכיל מימן גופרי (H₂S), והוא מספק גז לרשת החשמל וההתפלה המקומית בקטר. השבתתו לתחזוקה בדצמבר 2025, על רקע נזקי מתקפת טילים איראנית במרץ 2026, יצרה את התנאים לשלב התנעה רגיש שבמהלכו אירע הכשל.":"Barzan is a sour gas processing plant containing hydrogen sulfide (H₂S), supplying gas to Qatar's domestic power and desalination grid. Its maintenance shutdown in December 2025, against the backdrop of March 2026 Iranian missile-strike damage, created the conditions for a sensitive restart phase during which the failure occurred."}</p>
  <div className="pq">{he?"\"שלבי התנעה מחדש בתעשיית עיבוד הפחמימנים הם בין חלונות התפעול המסוכנים ביותר — חוסר יציבות תרמי, לחצים משתנים והצטברות גזים בלתי-צפויה.\"":"\"Restart phases in hydrocarbon processing are among the most hazardous operational windows — thermal instability, fluctuating pressures, and unexpected gas accumulation.\""}</div>
  {/* Dual casualty cards */}
  <h3 className="sf" style={{fontSize:18,fontWeight:800,color:P.ink,marginTop:24,marginBottom:12}}>{he?"תמונת הנפגעים":"Casualty Picture"}</h3>
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:10}}>
    <div className="cm" style={{padding:16,borderTop:`3px solid ${P.muted}`}}>
      <p style={{fontSize:10,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>{he?"מסמך התחקיר":"Investigation Doc"}</p>
      {[[he?"הרוגים מאושרים":"Confirmed dead","12"],[he?"פצועים":"Injured","54"],[he?"נעדרים":"Missing","6"]].map(([l,n],i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:i<2?`1px solid ${P.border}40`:"none"}}><span style={{fontSize:12,color:P.steel}}>{l}</span><span className="sf mn" style={{fontSize:22,fontWeight:900,color:P.ink}}>{n}</span></div>)}
    </div>
    <div className="cm" style={{padding:16,borderTop:`3px solid ${P.red}`}}>
      <p style={{fontSize:10,fontWeight:800,color:P.red,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:10}}>{he?"דיווח רשמי עדכני":"Current Official"}</p>
      {[[he?"הרוגים":"Fatalities","13"],[he?"פצועים":"Injured","66"],[he?"נעדרים":"Missing","18"]].map(([l,n],i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:i<2?`1px solid ${P.border}40`:"none"}}><span style={{fontSize:12,color:P.steel}}>{l}</span><span className="sf mn" style={{fontSize:22,fontWeight:900,color:P.red}}>{n}</span></div>)}
    </div>
  </div>
  <p style={{fontSize:10,color:P.muted,lineHeight:1.6}}>{he?"מקור רשמי: משרד הפנים הקטרי, QatarEnergy ומנכ\"ל סעד אל-כעבי. ההרוגים — אזרחי הודו ופקיסטן. הסיווג הרשמי: תקלה טכנית בהתנעה, ללא חבלה. המספרים עשויים להשתנות עם התקדמות החיפושים.":"Official source: Qatari Interior Ministry, QatarEnergy & CEO Saad Al-Kaabi. Fatalities — Indian & Pakistani nationals. Official classification: technical malfunction during start-up, no sabotage. Figures may change as search operations continue."}</p>
</Sec>;}

/* ═══ 02 THE PLANT ═══ */
function Plant({lang}:{lang:string}){const he=lang==="he";const facts=[
  {k:he?"מפעיל":"Operator",v:"Qatargas / QatarEnergy"},
  {k:he?"בעלות":"Ownership",v:he?"QatarEnergy 93% · ExxonMobil 7%":"QatarEnergy 93% · ExxonMobil 7%"},
  {k:he?"מיקום":"Location",v:he?"ראס לאפן, ~80 ק\"מ מדוחא":"Ras Laffan, ~80 km from Doha"},
  {k:he?"מקור הגז":"Gas Source",v:he?"השדה הצפוני (North Field)":"North Field"},
  {k:he?"הספק":"Capacity",v:he?"~1.4 מיליארד רגל³ גז מכירה ליום":"~1.4 Bscfd sales gas"},
  {k:he?"השקעה":"Investment",v:"~$10.4B"},
  {k:he?"ייעוד":"Purpose",v:he?"חשמל והתפלה מקומיים בקטר":"Qatar domestic power & desalination"},
  {k:he?"תוצרי לוואי":"Byproducts",v:he?"אתאן, גפ\"מ, קונדנסט, גופרית":"Ethane, LPG, condensate, sulfur"},
];return<Sec id="plant" num="02" title={he?"אנטומיית המתקן":"Plant Anatomy"} subtitle={he?"מתקן עיבוד גז טבעי \"חמוץ\" בקריית התעשייה ראס לאפן":"A sour gas processing plant in Ras Laffan Industrial City"} dark sidebar={<>
  <SB color="gold" title={he?"מה זה גז \"חמוץ\"?":"What is \"Sour\" Gas?"}><p>{he?"גז טבעי המכיל מימן גופרי (H₂S) ו/או CO₂. דורש \"המתקה\" (Sweetening) להסרת הגזים החומציים לפני שיווק. ה-H₂S הופך את האירוע למסוכן במיוחד.":"Natural gas containing H₂S and/or CO₂. Requires \"sweetening\" to remove acid gases before sale. The H₂S makes this event especially dangerous."}</p></SB>
  <SB color="blue" title={he?"💡 ידעת?":"💡 Did You Know?"}><p>{he?"המתקן נקרא על שם מגדלי ברזאן ההיסטוריים (מצודת אום סלאל מוחמד) מסוף המאה ה-19. בשיא הבנייה עבדו בו 30,000 פועלים.":"The plant is named after the historic Barzan Towers (Umm Salal Mohammed Fort) from the late 19th century. At construction peak, 30,000 workers were on site."}</p></SB>
</>}>
  <p style={{fontSize:14,color:P.steel,lineHeight:1.9,marginBottom:16}}>{he?"פרויקט הגז ברזאן מיועד לטפל בגז גולמי המופק מהשדה הצפוני של קטר, במטרה לספק גז איכותי לרשת החשמל ולהתפלת המים המקומית. בשונה ממתקני ייצוא ה-LNG הסמוכים, מתקן זה מבצע הפרדה וזיקוק בלחצים גבוהים של מספר תרכובות פחמימניות וקונדנסטים (תזקיקים נוזליים) נלווים, ומכאן רגישותו לאירועי כשל.":"The Barzan project processes raw gas from Qatar's North Field to supply high-quality gas to the domestic power grid and water desalination. Unlike the adjacent LNG export trains, this plant performs high-pressure separation and refining of several hydrocarbon condensates and associated components — hence its sensitivity to failure events."}</p>
  {/* Facts grid */}
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginBottom:20}}>
    {facts.map((f,i)=><div key={i} className="cm" style={{padding:"12px 14px"}}><div style={{fontSize:9,fontWeight:800,color:P.gold,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:3}}>{f.k}</div><div style={{fontSize:13,fontWeight:600,color:P.ink}}>{f.v}</div></div>)}
  </div>
  {/* Animated plant schematic */}
  <PlantSchematic lang={lang}/>
</Sec>;}

/* ═══ Animated plant overview schematic ═══ */
function PlantSchematic({lang}:{lang:string}){const he=lang==="he";return<div className="cm" style={{padding:20,background:"linear-gradient(135deg,#0c1222,#162040)"}}>
  <p style={{fontSize:11,fontWeight:700,color:P.gL,textAlign:"center",marginBottom:14,textTransform:"uppercase",letterSpacing:"0.1em"}}>{he?"סכמת מתקן עילי — מבט-על":"Plant Overview Schematic"}</p>
  <svg viewBox="0 0 200 90" style={{width:"100%"}}>
    {/* offshore platform */}
    <g>
      <rect x="6" y="50" width="22" height="14" fill="#1e293b" stroke="#475569" strokeWidth="0.5"/>
      <line x1="9" y1="64" x2="9" y2="78" stroke="#475569" strokeWidth="0.8"/><line x1="25" y1="64" x2="25" y2="78" stroke="#475569" strokeWidth="0.8"/>
      <rect x="14" y="42" width="3" height="8" fill="#64748b"/>
      <text x="17" y="84" textAnchor="middle" fill="#94a3b8" fontSize="3.5">{he?"אסדה":"WHP"}</text>
    </g>
    {/* subsea pipeline (animated flow) */}
    <line x1="28" y1="57" x2="58" y2="57" stroke="#c8a44e" strokeWidth="1.2" strokeDasharray="3 3" className="flow-arrow"/>
    <text x="43" y="53" textAnchor="middle" fill="#c8a44e" fontSize="3">{he?"צנרת תת-ימית":"Subsea"}</text>
    {/* onshore plant blocks */}
    {[{x:60,l:he?"קליטה":"Inlet",c:"#3b82f6"},{x:88,l:he?"המתקה":"Sweeten",c:"#10b981"},{x:116,l:"Claus",c:"#f59e0b"},{x:144,l:he?"מדחסים":"Compress",c:"#ef4444"}].map((b,i)=><g key={i}>
      <rect x={b.x} y="48" width="22" height="18" rx="1.5" fill={`${b.c}25`} stroke={b.c} strokeWidth="0.6"/>
      <rect x={b.x+3} y="44" width="4" height="4" fill={b.c} opacity="0.6"/>
      <text x={b.x+11} y="59" textAnchor="middle" fill={b.c} fontSize="3.2" fontWeight="bold">{b.l}</text>
      {i<3&&<line x1={b.x+22} y1="57" x2={b.x+28} y2="57" stroke="#c8a44e" strokeWidth="1" strokeDasharray="2 2" className="flow-arrow"/>}
    </g>)}
    {/* sales gas out */}
    <line x1="166" y1="57" x2="190" y2="57" stroke="#22c55e" strokeWidth="1.4"/>
    <polygon points="190,57 186,55 186,59" fill="#22c55e"/>
    <text x="182" y="53" textAnchor="middle" fill="#22c55e" fontSize="3">{he?"גז מכירה":"Sales gas"}</text>
    {/* compressor zone — danger glow (incident location) */}
    <circle cx="155" cy="57" r="14" fill="none" stroke="#ff4500" strokeWidth="0.4" opacity="0.5" style={{animation:"warnBlink 2s ease-in-out infinite"}}/>
    <text x="155" y="76" textAnchor="middle" fill="#ff6b00" fontSize="3" fontWeight="bold" style={{animation:"warnBlink 2s ease-in-out infinite"}}>⚠ {he?"מוקד האירוע":"Incident zone"}</text>
    {/* flare stack */}
    <line x1="178" y1="48" x2="178" y2="30" stroke="#64748b" strokeWidth="0.8"/>
    <ellipse cx="178" cy="28" rx="2.5" ry="4" fill="url(#flareG)" style={{animation:"flicker 0.4s ease-in-out infinite"}}/>
    <defs><linearGradient id="flareG" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#ff6b00"/><stop offset="100%" stopColor="#ffd700" stopOpacity="0.6"/></linearGradient></defs>
    <text x="178" y="20" textAnchor="middle" fill="#94a3b8" fontSize="2.8">{he?"לפיד":"Flare"}</text>
  </svg>
  <p style={{fontSize:10,color:`${P.white}66`,textAlign:"center",marginTop:8}}>{he?"זרימה: אסדה ← צנרת תת-ימית ← קליטה ← המתקה (הסרת H₂S) ← Claus (השבת גופרית) ← מדחסים ← גז מכירה":"Flow: platform → subsea → inlet → sweetening (H₂S removal) → Claus (sulfur recovery) → compressors → sales gas"}</p>
</div>;}

/* ═══ 03 PRODUCTION PROCESS — interactive flow diagram ═══ */
function Process({lang}:{lang:string}){const[sel,setSel]=useState(0);const he=lang==="he";
const stages=[
  {id:"inlet",ic:"📥",lb:he?"קליטה והפרדה":"Inlet & Separation",c:"#3b82f6",
   d:he?"הגז הגולמי מהשדה הצפוני מגיע בלחץ גבוה. מפרידים תלת-פאזיים מפרידים את הזרם לשלושה: גז, נוזלים (קונדנסט) ומים. כאן מתחילה רגישות הלחץ — כל שינוי פתאומי משפיע על כל המערכת במורד הזרם.":"Raw gas from the North Field arrives at high pressure. Three-phase separators split the stream into three: gas, liquids (condensate) and water. Pressure sensitivity begins here — any sudden change cascades downstream.",
   reactions:null,
   params:[[he?"לחץ כניסה":"Inlet pressure","~70-100 bar"],[he?"הפרדה":"Separation",he?"3 פאזות":"3-phase"],[he?"מכיל":"Contains","CH₄, NGL, H₂S, CO₂, H₂O"]],
   link:he?"⚠️ \"הלם גז\" (Gas Hammer) בשלב הזה — גל לחץ פתאומי בהזרמה מהירה — הוא שיזם את הכשל המבני.":"⚠️ A \"Gas Hammer\" at this stage — a sudden pressure surge during rapid flow — initiated the structural failure."},
  {id:"amine",ic:"🧪",lb:he?"המתקה (Amine)":"Amine Sweetening",c:"#10b981",
   d:he?"הגז ה\"חמוץ\" עובר במגדל ספיגה (Absorber) שבו זורמת תמיסת אמין (בדרך כלל MDEA בריכוז 30-50%). האמין סופג באופן סלקטיבי את ה-H₂S (ובמידה מסוימת CO₂) ויוצר \"גז מתוק\". ExxonMobil מספקת את טכנולוגיית Flexsorb SE+ המותקנת במתקני קטר. האמין ה\"עשיר\" בגז חומצי מוזרם ליחידת רגנרציה (Stripper) שבה חימום משחרר את ה-H₂S בחזרה — והאמין ה\"רזה\" חוזר למחזור.":"The sour gas passes through an absorber where amine solution flows (typically MDEA at 30-50%). The amine selectively absorbs H₂S (and some CO₂), producing \"sweet gas\". ExxonMobil's Flexsorb SE+ technology is installed in Qatar's plants. The acid-gas-rich amine is sent to a regenerator (stripper) where heat releases the H₂S back — and the lean amine is recycled.",
   reactions:[
     {t:he?"ספיגה (במגדל, ~40°C)":"Absorption (~40°C)",eq:"R₂NH + H₂S ⇌ R₂NH₂⁺ + HS⁻"},
     {t:he?"רגנרציה (בחימום, ~120°C)":"Regeneration (~120°C)",eq:"R₂NH₂⁺ + HS⁻ ⇌ R₂NH + H₂S↑"},
   ],
   params:[[he?"ממס":"Solvent","MDEA 30-50%"],[he?"יעד גז מתוק":"Sweet gas spec","<4 ppm H₂S"],[he?"תוצר":"Output",he?"גז אצל H₂S מרוכז":"Concentrated acid gas"]],
   link:he?"כאן ה-H₂S נמצא בריכוז הגבוה ביותר במערכת — נקודה קריטית מבחינת רעילות.":"Here H₂S is at its highest concentration in the system — a critical point for toxicity."},
  {id:"claus",ic:"🔥",lb:he?"השבת גופרית (Claus)":"Sulfur Recovery (Claus)",c:"#f59e0b",
   d:he?"הגז החומצי המרוכז (H₂S) מגיע ליחידת Claus להמרה לגופרית יסודית. שלב תרמי: כשליש מה-H₂S נשרף בכבשן (מעל 850°C, ולרוב 1,000°C+) ל-SO₂. כ-60-70% מהגופרית כבר נוצרת כאן. שלב קטליטי: ה-H₂S שנותר מגיב עם ה-SO₂ על קטליזטור אלומינה (~250°C) ויוצר גופרית נוספת. יעילות כוללת 95-97%; גז השארית (Tail Gas) עובר טיפול נוסף. הגופרית הנוזלית נאגרת בבור גופרית.":"The concentrated acid gas (H₂S) enters the Claus unit for conversion to elemental sulfur. Thermal stage: about one-third of the H₂S burns in a furnace (above 850°C, often 1,000°C+) to SO₂. Some 60-70% of the sulfur already forms here. Catalytic stage: remaining H₂S reacts with the SO₂ over an alumina catalyst (~250°C) forming more sulfur. Overall efficiency 95-97%; tail gas is treated further. Liquid sulfur is stored in a sulfur pit.",
   reactions:[
     {t:he?"שלב תרמי (כבשן, חמצון ⅓)":"Thermal stage (furnace)",eq:"2 H₂S + 3 O₂ → 2 SO₂ + 2 H₂O   (ΔH = −518 kJ/mol)"},
     {t:he?"שלב קטליטי (תגובת Claus)":"Catalytic (Claus reaction)",eq:"2 H₂S + SO₂ → 3 S + 2 H₂O"},
     {t:he?"תגובה כוללת":"Overall reaction",eq:"2 H₂S + O₂ → 2 S + 2 H₂O   (ΔH = −1165.6 kJ/mol)"},
   ],
   params:[[he?"כבשן":"Furnace","850-1,000°C+"],[he?"יחס H₂S:SO₂":"H₂S:SO₂ ratio","2 : 1"],[he?"יעילות השבה":"Recovery","95-97%"],[he?"קטליזטור":"Catalyst",he?"אלומינה/טיטניה":"Alumina/Titania"]],
   link:he?"תגובות אקסותרמיות בטמפרטורות קיצוניות — מקור הצתה פוטנציאלי וסיכון תרמי מובנה.":"Exothermic reactions at extreme temperatures — a potential ignition source and inherent thermal risk."},
  {id:"frac",ic:"⚗️",lb:he?"הפרדת NGL":"NGL Fractionation",c:"#8b5cf6",
   d:he?"הנוזלים הטבעיים (NGL) — אתאן (C₂), פרופאן (C₃) ובוטאן (C₄) — מופרדים בעמודות פרקציה (זיקוק) בלחצים וטמפרטורות שונים. כל רכיב עובר עיבוי (התנזלות) בנקודת רתיחה אחרת, ולכן ניתן להפריד אותם בשלבים. אלה בדיוק הנוזלים שבלחץ גבוה, בעת השחרור באירוע, עברו התאדות פתאומית (Flash) ויצרו את ענן האדים העצום.":"Natural gas liquids (NGL) — ethane (C₂), propane (C₃) and butane (C₄) — are separated in fractionation (distillation) columns at varying pressures and temperatures. Each component condenses at a different boiling point, allowing stepwise separation. These are exactly the liquids that, at high pressure, flash-vaporized upon release in the incident and formed the enormous vapor cloud.",
   reactions:[
     {t:he?"הפרדה פיזיקלית (ללא תגובה כימית)":"Physical separation (no reaction)",eq:he?"זיקוק לפי נקודת רתיחה: C₂ (−89°C) · C₃ (−42°C) · C₄ (−1°C)":"Distillation by boiling point: C₂ (−89°C) · C₃ (−42°C) · C₄ (−1°C)"},
   ],
   params:[[he?"רכיבים":"Components","C₂H₆, C₃H₈, C₄H₁₀"],[he?"תהליך":"Process",he?"זיקוק פרקציוני":"Fractional distillation"],[he?"סיכון":"Hazard",he?"Flash + BLEVE":"Flash + BLEVE"]],
   link:he?"⚠️ ה-NGL כבד מהאוויר ובלחץ גבוה — בעת שחרור הוא יוצר נפח אדים עצום שמצטבר נמוך ומגיע לטווח הנפיצות.":"⚠️ NGL is heavier than air and at high pressure — upon release it creates a huge vapor volume that accumulates low and reaches the flammable range."},
  {id:"comp",ic:"⚙️",lb:he?"דחיסה ושיווק":"Compression & Export",c:"#ef4444",
   d:he?"הגז ה\"מתוק\" נדחס במדחסים רבי-עוצמה (Centrifugal Compressors) לקראת הזרמה לרשת החשמל וההתפלה. אזור המדחסים צפוף בצנרת, אוגנים וציוד בלחץ גבוה — בדיוק תנאי הכליאה (Congestion) הנדרשים להפיכת התלקחות לפיצוץ (VCE) ולא רק לשריפת הבזק. כאן התרחש מוקד האירוע.":"The sweet gas is compressed by high-power centrifugal compressors for delivery to the power and desalination grid. The compressor area is dense with piping, flanges and high-pressure equipment — precisely the confinement (congestion) conditions required to turn ignition into an explosion (VCE) rather than just a flash fire. This is where the incident occurred.",
   reactions:null,
   params:[[he?"סוג":"Type",he?"מדחס צנטריפוגלי":"Centrifugal"],[he?"מאפיין סיכון":"Risk feature",he?"צפיפות ציוד גבוהה":"High congestion"],[he?"יעד":"Destination",he?"רשת חשמל + התפלה":"Power + desalination"]],
   link:he?"🔴 מוקד הפיצוץ. הצפיפות הגבוהה של הציוד היא שסיפקה את הכליאה שהפכה את הענן הדליק לגל הדף הרסני.":"🔴 The explosion focus. The high equipment congestion provided the confinement that turned the flammable cloud into a destructive blast wave."},
];const s=stages[sel];
return<Sec id="process" num="03" title={he?"תהליך הייצור":"Production Process"} subtitle={he?"לחצו על שלב לפרטים מלאים, כולל התגובות הכימיות":"Tap a stage for full details, including the chemical reactions"} sidebar={<>
  <SB color="gold" title={he?"💡 שרשרת בלחץ גבוה":"💡 High-Pressure Chain"}><p>{he?"שרשרת הייצור היא רצף שלבים בלחץ גבוה, שכל אחד תלוי ביציבות הקודם. ה-H₂S — גז קטלני — נמצא במערכת מהקליטה ועד השבת הגופרית. שילוב של גז רעיל, נוזלים נדיפים ולחצים גבוהים הופך כל כשל לאירוע רב-סיכון.":"The production chain is a sequence of high-pressure stages, each dependent on the previous. H₂S — a lethal gas — is present from inlet through sulfur recovery. The combination of toxic gas, volatile liquids and high pressures turns any failure into a multi-hazard event."}</p></SB>
  <SB color="amber" title={he?"זרימת התהליך":"Process Flow"}><p style={{fontSize:11,lineHeight:1.9}}>{he?"אסדה ← צנרת תת-ימית ← קליטה ← המתקה (הסרת H₂S) ← Claus (השבת גופרית) ← הפרדת NGL ← מדחסים ← גז מכירה":"Platform → subsea → inlet → sweetening (H₂S removal) → Claus → NGL fractionation → compressors → sales gas"}</p></SB>
</>}>
  {/* Clickable stage buttons — works on mobile */}
  <div style={{display:"flex",gap:6,marginBottom:4,overflowX:"auto",paddingBottom:8}}>
    {stages.map((st,i)=><button key={st.id} onClick={()=>setSel(i)} style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"10px 12px",borderRadius:10,border:sel===i?`2px solid ${st.c}`:`1px solid ${P.border}`,background:sel===i?`${st.c}12`:"#fff",cursor:"pointer",minWidth:78,transition:"all 0.2s"}}>
      <span style={{fontSize:24}}>{st.ic}</span>
      <span style={{fontSize:10,fontWeight:700,color:sel===i?st.c:P.muted,textAlign:"center",lineHeight:1.2}}>{st.lb}</span>
    </button>)}
  </div>
  {/* Flow indicator */}
  <div style={{display:"flex",alignItems:"center",gap:4,justifyContent:"center",marginBottom:16,flexWrap:"wrap"}}>
    {stages.map((st,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:"50%",background:sel===i?st.c:`${st.c}40`,transition:"all 0.2s"}}/>{i<stages.length-1&&<span style={{color:`${P.gold}80`,fontSize:11}}>{he?"←":"→"}</span>}</div>)}
  </div>
  {/* Expanded detail — opens directly here, visible on mobile */}
  <div className="cm" style={{padding:18,borderTop:`4px solid ${s.c}`,animation:"fu 0.35s ease-out both"}}>
    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
      <div style={{width:48,height:48,borderRadius:12,background:`${s.c}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{s.ic}</div>
      <div><span className="mn" style={{fontSize:10,fontWeight:700,color:s.c}}>{he?`שלב ${sel+1} מתוך 5`:`Stage ${sel+1} of 5`}</span><h3 className="sf" style={{fontSize:19,fontWeight:800,color:P.ink,lineHeight:1.2}}>{s.lb}</h3></div>
    </div>
    <p style={{fontSize:13,color:P.steel,lineHeight:1.85,marginBottom:14}}>{s.d}</p>
    {/* Chemical reactions box */}
    {s.reactions&&<div style={{padding:14,background:"linear-gradient(135deg,#0c1222,#162040)",borderRadius:10,marginBottom:14}}>
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}><span style={{fontSize:15}}>⚗️</span><h4 style={{fontSize:11,fontWeight:800,color:P.gL,textTransform:"uppercase",letterSpacing:"0.05em"}}>{he?"התגובות הכימיות":"Chemical Reactions"}</h4></div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {s.reactions.map((r,i)=><div key={i}>
          <div style={{fontSize:10,color:`${P.gL}cc`,marginBottom:3}}>{r.t}</div>
          <div className="mn" dir="ltr" style={{fontSize:13,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.06)",padding:"8px 12px",borderRadius:6,textAlign:"center",border:`1px solid ${s.c}40`,overflowX:"auto",whiteSpace:"nowrap"}}>{r.eq}</div>
        </div>)}
      </div>
    </div>}
    {/* Parameters */}
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:8,marginBottom:14}}>
      {s.params.map((p,i)=><div key={i} style={{padding:"8px 10px",background:P.cream,borderRadius:6}}><div style={{fontSize:9,fontWeight:700,color:P.muted,textTransform:"uppercase",marginBottom:2}}>{p[0]}</div><div className="mn" style={{fontSize:12,fontWeight:700,color:P.ink}} dir="ltr">{p[1]}</div></div>)}
    </div>
    {/* Link to incident */}
    <div style={{padding:"10px 14px",background:s.c==="#ef4444"?P.redS:`${s.c}0d`,borderRadius:8,borderInlineStart:`3px solid ${s.c}`}}>
      <p style={{fontSize:12,color:P.steel,lineHeight:1.6,fontWeight:500}}>{s.link}</p>
    </div>
  </div>
  {/* Key metrics strip */}
  <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:14}}>
    {[[he?"כבשן Claus":"Claus furnace","1,000°C+"],[he?"יעילות השבה":"Recovery","95-97%"],[he?"גז מתוק (יעד)":"Sweet gas spec","<4 ppm H₂S"]].map(([l,v],i)=><div key={i} className="cm" style={{padding:"10px 14px",flex:"1 1 140px",textAlign:"center"}}><div className="sf mn" style={{fontSize:18,fontWeight:900,color:P.amber}} dir="ltr">{v}</div><div style={{fontSize:10,color:P.muted}}>{l}</div></div>)}
  </div>
</Sec>;}

/* ═══ 04 TIMELINE — animated event reconstruction ═══ */
function Timeline({lang}:{lang:string}){const he=lang==="he";const ev=[
  {t:"12/2025",h:he?"השבתת המתקן לתחזוקה דחופה. קטר מכריזה כוח עליון על ייצוא LNG":"Plant shut down for urgent maintenance. Qatar declares force majeure on LNG exports",c:P.muted},
  {t:"03/2026",h:he?"מתקפות טילים ורחפנים איראניות פוגעות בקריית התעשייה ראס לאפן (18-19/3) — נזק נרחב ושריפות במתקן Pearl GTL ובמספר מתקני LNG. קטר כבר השביתה ייצור ב-2/3 והכריזה כוח עליון":"Iranian missile & drone strikes hit Ras Laffan Industrial City (Mar 18-19) — extensive damage & fires at the Pearl GTL facility and several LNG facilities. Qatar had already halted production on Mar 2 and declared force majeure",c:P.red,r:true},
  {t:"03–06/2026",h:he?"עבודות שיקום: החלפת מקטעי צנרת, ריתוך מחדש ובדיקות. הכנה להתנעה מחדש":"Restoration works: pipe-section replacement, re-welding and inspections. Preparation for restart",c:P.amber},
  {t:he?"19/06":"Jun 19",h:he?"המתקן מופעל מחדש לראשונה לאחר 6 חודשי השבתה":"Plant restarted for the first time after 6-month shutdown",c:P.blue},
  {t:he?"21/06 · T-0":"Jun 21 · T-0",h:he?"שלב התנעה: הזרמת גז בלחץ גבוה לצורך ניסוי המערכות. \"הלם גז\" (Gas Hammer) — גל לחץ פתאומי":"Start-up: high-pressure gas introduced to test systems. \"Gas Hammer\" — sudden pressure surge",c:P.flame,r:true},
  {t:"T+0s",h:he?"פריצת המעטפת: סדק זעיר (Micro-fissure) שלא אותר ב-NDT נפתח. קריעה מבנית של אוגן/צנרת":"Loss of Containment: an undetected micro-fissure opens. Structural rupture of a flange/pipe",c:P.flame,r:true},
  {t:"T+sec",h:he?"היווצרות ענן אדים: גז מתאן ו-NGL בלחץ גבוה נפלטו, התאדו והתערבבו עם החמצן בטווח הנפיצות":"Vapor cloud forms: high-pressure methane & NGL released, flash-vaporized and mixed with air within flammable range",c:P.red,r:true},
  {t:"T+min",h:he?"הצתה ופיצוץ נפחי (VCE): הענן נדד למקור הצתה ונחשף. גל הדף הרסני שיצר כדור אש":"Ignition & VCE: cloud drifted to an ignition source. Destructive blast wave creating a fireball",c:"#7f1d1d",r:true},
  {t:he?"לאחר":"After",h:he?"הפעלת תוכנית החירום: כיבוי, קירור חשיפה, חיפוש והצלה, וטיפול ב-H₂S שריד":"Emergency plan activated: firefighting, exposure cooling, search & rescue, and residual H₂S handling",c:P.green},
];return<Sec id="timeline" num="04" title={he?"ציר זמן: שחזור האירוע":"Timeline: Event Reconstruction"} subtitle={he?"מהשבתה ועד פיצוץ — רצף השלבים":"From shutdown to explosion — sequence of stages"} dark sidebar={<>
  <SB color="flame" title={he?"\"הלם גז\"":"\"Gas Hammer\""}><p>{he?"גל לחץ פתאומי בצנרת, אנלוגי ל\"מכת מים\" (Water Hammer). בהזרמת גז מהירה למערכת ריקה — הלחץ הדינמי קורע נקודות חולשה שלא נמצאו בבדיקה.":"A sudden pressure surge in piping, analogous to \"water hammer\". When gas is rapidly introduced into an empty system, the dynamic pressure ruptures weak points undetected in inspection."}</p></SB>
  <SB color="red" title={he?"חלון הסיכון":"The Risk Window"}><p>{he?"מחקרי בטיחות תהליכית מראים: שלבי התנעה מחדש הם סטטיסטית מהמסוכנים ביותר — מערכות לא יציבות, איטומים שהתרופפו, ולחצים שאינם במצב יציב.":"Process safety research shows: restart phases are statistically among the most dangerous — unstable systems, loosened seals, and non-steady-state pressures."}</p></SB>
</>}>
  {ev.map((e,i)=><div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 0",borderBottom:`1px solid ${P.border}30`,animation:`fu .5s ease-out both`,animationDelay:`${i*0.06}s`}}>
    <div className="mn" style={{flexShrink:0,width:74,fontSize:11,fontWeight:700,color:e.c,textAlign:"center"}}>{e.t}</div>
    <div style={{width:10,height:10,borderRadius:"50%",border:`2px solid ${e.c}`,background:e.r?e.c:"transparent",flexShrink:0,marginTop:4,boxShadow:e.r?`0 0 8px ${e.c}80`:"none",animation:e.r?"warnBlink 2.5s ease-in-out infinite":"none"}}/>
    <p style={{fontSize:13,color:e.r?P.steel:P.muted,fontWeight:e.r?600:400,lineHeight:1.6}}>{e.h}</p>
  </div>)}
  <p style={{fontSize:10,color:P.muted,marginTop:14,lineHeight:1.6}}>{he?"⏱️ ציר הזמן משחזר את רצף הכשל ההנדסי על בסיס מסמך התחקיר והערכות בטיחות תהליכית. הסימון האדום מציין שלבי הסלמה קריטיים.":"⏱️ The timeline reconstructs the engineering failure sequence based on the investigation document and process-safety assessments. Red markers indicate critical escalation stages."}</p>
</Sec>;}

/* ═══ 05 ROOT CAUSE — 3-stage failure chain ═══ */
function RootCause({lang}:{lang:string}){const he=lang==="he";const[open,setOpen]=useState<number|null>(0);const stages=[
  {n:"1",ic:"💨",ti:he?"פריצת המעטפת":"Loss of Containment",en:"Loss of Containment",c:P.flame,
   mech:he?"הזרמת פחמימנים מהירה יצרה אפקט \"הלם גז\" (Gas Hammer) בצנרת. סדק זעיר (Micro-fissure) שלא אותר בבדיקות אל-הרס (NDT) לאחר השיקום, קרס תחת עומס הלחץ המשתנה וגרם לקריעה מבנית של אוגן (Flange) או קו צנרת ראשי.":"Rapid hydrocarbon flow created a \"Gas Hammer\" effect in the piping. A micro-fissure undetected by non-destructive testing (NDT) after restoration collapsed under fluctuating pressure load, causing structural rupture of a flange or main pipe.",
   fail:he?"כשל או אי-דיוק במערך בדיקות הריתוך ואולטרסאונד (NDT) לאחר עבודות השיקום.":"Failure or inaccuracy in the weld/ultrasonic (NDT) inspection regime after restoration works."},
  {n:"2",ic:"☁️",ti:he?"היווצרות ענן האדים":"Vapor Cloud Formation",en:"Vapor Cloud",c:P.red,
   mech:he?"גז מתאן ו-NGL בלחץ גבוה נפלטו לאטמוספירה בספיקה אדירה, עברו התפשטות פתאומית (Flash) והתערבבו במהירות עם החמצן באוויר — תוך הגעה לטווח הנפיצות הרלוונטי (בין LEL ל-UEL).":"High-pressure methane and NGL were released to atmosphere at enormous flow rate, underwent sudden flash expansion and mixed rapidly with atmospheric oxygen — reaching the flammable range (between LEL and UEL).",
   fail:he?"אי-סגירה מהירה מספקת של מגופי השבתת החירום (ESD) גרמה להמשך הזנת הדלק המלאי.":"Insufficiently rapid closure of Emergency Shutdown (ESD) valves allowed continued fuel feed."},
  {n:"3",ic:"💥",ti:he?"הצתה ופיצוץ נפחי":"Ignition & VCE",en:"VCE",c:"#7f1d1d",
   mech:he?"ענן הגז נדד עקב משטר הרוחות המקומי לעבר אזור המדחסים, שם נחשף למקור הצתה (משטח חם או ניצוץ חשמלי מציוד שאינו ממוגן פיצוץ - Explosion Proof). התוצאה הייתה דפלגרציה מהירה שיצרה גל הדף הרסני.":"The gas cloud drifted by the local wind regime toward the compressor area, where it was exposed to an ignition source (a hot surface or electrical spark from non-Explosion-Proof equipment). The result was a rapid deflagration creating a destructive blast wave.",
   fail:he?"כישלון מערכות הדילול או היעדר בידוד מקורות הצתה באזור הצפוף.":"Failure of dilution systems or lack of ignition-source isolation in the congested area."},
];return<Sec id="rootcause" num="05" title={he?"שרשרת הכשל ההנדסי":"Engineering Failure Chain"} subtitle={he?"Root Cause Analysis — שלושה שלבים קריטיים":"Root Cause Analysis — three critical stages"} sidebar={<>
  <SB color="amber" title={he?"עקרון \"גבינה שוויצרית\"":"\"Swiss Cheese\" Model"}><p>{he?"אסון תעשייתי הוא לעולם לא כשל בודד, אלא יישור נדיר של מספר \"חורים\" במערכות ההגנה: בדיקה שהחמיצה, מגוף שלא נסגר בזמן, ומקור הצתה שלא בודד.":"An industrial disaster is never a single failure, but a rare alignment of several \"holes\" in defense systems: a missed inspection, a valve that didn't close in time, and an un-isolated ignition source."}</p></SB>
  <SB color="red" title={he?"3 כשלים מצטברים":"3 Cumulative Failures"}><p style={{marginBottom:6}}>① {he?"NDT שהחמיץ סדק":"NDT missed a fissure"}</p><p style={{marginBottom:6}}>② {he?"ESD איטי מדי":"ESD too slow"}</p><p>③ {he?"מקור הצתה לא מבודד":"Un-isolated ignition source"}</p></SB>
</>}>
  <p style={{fontSize:13,color:P.steel,lineHeight:1.8,marginBottom:18}}>{he?"במהלך ה-21 ביוני, החל סגל ההנדסה בהזרמת גז בלחץ גבוה לצורך ניסוי המערכות והחזרתן לעבודה שוטפת. שלב זה מוכר כאחד השלבים הרגישים והמסוכנים ביותר בתעשייה התהליכית. המנגנון המשוער של הכשל מורכב משלושה שלבים קריטיים — לחצו על כל שלב להרחבה:":"On June 21, the engineering staff began introducing high-pressure gas to test the systems and return them to normal operation. This phase is known as one of the most sensitive and dangerous in process industry. The presumed failure mechanism comprises three critical stages — click each stage to expand:"}</p>
  {/* Animated stage chain */}
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:20,flexWrap:"wrap"}}>
    {stages.map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:6}}>
      <button onClick={()=>setOpen(open===i?null:i)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"12px 10px",borderRadius:10,border:open===i?`2px solid ${s.c}`:`1px solid ${P.border}`,background:open===i?`${s.c}10`:"#fff",cursor:"pointer",minWidth:88,transition:"all 0.2s"}}>
        <span style={{fontSize:26}}>{s.ic}</span>
        <span style={{fontSize:11,fontWeight:800,color:s.c}}>{s.ti}</span>
        <span className="mn" style={{fontSize:8,color:P.muted}}>{s.en}</span>
      </button>
      {i<stages.length-1&&<span style={{fontSize:20,color:P.gold,animation:"warnBlink 2s ease-in-out infinite"}}>{he?"←":"→"}</span>}
    </div>)}
  </div>
  {open!==null&&<div className="cm" style={{padding:18,borderRight:`4px solid ${stages[open].c}`,animation:"fu 0.4s ease-out both"}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}><span style={{fontSize:30}}>{stages[open].ic}</span><div><span className="mn" style={{fontSize:11,fontWeight:700,color:stages[open].c}}>{he?"שלב":"Stage"} {stages[open].n}</span><h4 className="sf" style={{fontSize:18,fontWeight:800,color:P.ink}}>{stages[open].ti}</h4></div></div>
    <div style={{marginBottom:12}}><div style={{fontSize:10,fontWeight:800,color:P.steel,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>{he?"המנגנון הפיזיקלי / הנדסי":"Physical / Engineering Mechanism"}</div><p style={{fontSize:13,color:P.steel,lineHeight:1.8}}>{stages[open].mech}</p></div>
    <div style={{padding:12,background:P.redS,borderRadius:8,border:`1px solid ${P.red}20`}}><div style={{fontSize:10,fontWeight:800,color:P.red,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>{he?"⚠️ כשל מערכתי נלווה":"⚠️ Associated System Failure"}</div><p style={{fontSize:13,color:P.steel,lineHeight:1.7}}>{stages[open].fail}</p></div>
  </div>}
</Sec>;}

/* ═══ 06 VCE SIMULATION — the centerpiece animated simulation ═══ */
function VCESim({lang}:{lang:string}){const he=lang==="he";const[phase,setPhase]=useState(0);const[playing,setPlaying]=useState(true);
const phases=[
  {id:0,lb:he?"1. דליפה":"1. Leak",d:he?"סדק באוגן — גז מתאן ו-NGL מתחילים להיפלט בלחץ גבוה":"Flange fissure — methane & NGL begin releasing at high pressure",c:P.flame},
  {id:1,lb:he?"2. ענן אדים":"2. Vapor Cloud",d:he?"הגז מתאדה ומתפשט, נודד לפי הרוח ומגיע לטווח נפיצות (LEL-UEL)":"Gas vaporizes and spreads, drifts with wind, reaching flammable range (LEL-UEL)",c:P.red},
  {id:2,lb:he?"3. הצתה":"3. Ignition",d:he?"הענן פוגש מקור הצתה באזור המדחסים — משטח חם או ניצוץ":"Cloud meets ignition source in compressor area — hot surface or spark",c:"#fbbf24"},
  {id:3,lb:he?"4. גל הדף":"4. Blast Wave",d:he?"דפלגרציה מהירה — גל לחץ מתפשט מהמוקד, הורס מבנים בטווח":"Rapid deflagration — pressure wave expands from focus, destroying structures in range",c:"#7f1d1d"},
  {id:4,lb:he?"5. כדור אש":"5. Fireball",d:he?"כדור אש עולה — שריפת המלאי שנותר ונזק תרמי משני":"Rising fireball — combustion of remaining inventory and secondary thermal damage",c:"#ff4500"},
];
useEffect(()=>{if(!playing)return;const t=setInterval(()=>setPhase(p=>(p+1)%5),2200);return()=>clearInterval(t);},[playing]);
return<Sec id="vce" num="06" title={he?"הדמיית פיצוץ ענן האדים (VCE)":"Vapor Cloud Explosion (VCE) Simulation"} subtitle={he?"חמשת השלבים — אנימציה מתמשכת":"The five stages — continuous animation"} dark sidebar={<>
  <SB color="flame" title={he?"מה זה VCE?":"What is a VCE?"}><p>{he?"Vapor Cloud Explosion — פיצוץ ענן אדים. שחרור גז דליק → ענן → הצתה באזור צפוף בציוד. הצפיפות (Congestion) היא הקריטריון שמבדיל פיצוץ (גל הדף) מ\"שריפת הבזק\" (Flash Fire) ללא גל הדף.":"Release of flammable gas → cloud → ignition in equipment-congested area. Congestion is the criterion separating an explosion (blast wave) from a \"flash fire\" without a blast wave."}</p></SB>
  <SB color="red" title={he?"BLEVE — סיכון משני":"BLEVE — Secondary Risk"}><p>{he?"Boiling Liquid Expanding Vapor Explosion: אם להבות פוגעות במיכל גז מונזל תחת לחץ, הרתחת הנוזל הכלוא עלולה לקרוע את המיכל בפיצוץ אלים. סיכון מתמשך כל עוד יש זרימת דלק.":"Boiling Liquid Expanding Vapor Explosion: if flames impinge a pressurized liquefied-gas vessel, the boiling confined liquid can rupture the vessel in a violent explosion. An ongoing risk while fuel flows."}</p></SB>
</>}>
  {/* The simulation canvas */}
  <div className="cm" style={{padding:0,overflow:"hidden",background:"linear-gradient(180deg,#0a0f1c 0%,#162033 60%,#1a1410 100%)"}}>
    <svg viewBox="0 0 200 120" style={{width:"100%",display:"block"}}>
      <defs>
        <radialGradient id="cloudGrad"><stop offset="0%" stopColor="#9ca3af" stopOpacity="0.7"/><stop offset="100%" stopColor="#6b7280" stopOpacity="0"/></radialGradient>
        <radialGradient id="fbGrad"><stop offset="0%" stopColor="#fff8e1"/><stop offset="35%" stopColor="#ff6b00"/><stop offset="70%" stopColor="#dc2626"/><stop offset="100%" stopColor="#7f1d1d" stopOpacity="0"/></radialGradient>
        <linearGradient id="grnd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1f2937"/><stop offset="100%" stopColor="#0f172a"/></linearGradient>
      </defs>
      {/* ground */}
      <rect x="0" y="96" width="200" height="24" fill="url(#grnd)"/>
      {/* plant structures — compressor block + piping */}
      <g opacity={phase>=3?0.4:1} style={{transition:"opacity 0.5s"}}>
        <rect x="120" y="74" width="40" height="22" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
        <rect x="124" y="66" width="5" height="8" fill="#4b5563"/><rect x="134" y="62" width="5" height="12" fill="#4b5563"/><rect x="146" y="68" width="5" height="6" fill="#4b5563"/>
        {/* pipes */}
        <line x1="80" y1="90" x2="120" y2="90" stroke="#52525b" strokeWidth="2.5"/>
        <circle cx="100" cy="90" r="3" fill="#3f3f46" stroke="#71717a" strokeWidth="0.4"/>
        <text x="140" y="108" textAnchor="middle" fill="#64748b" fontSize="4">{he?"אזור מדחסים":"Compressors"}</text>
        {/* flange leak point */}
        <circle cx="100" cy="90" r="1.5" fill={P.flame}/>
      </g>

      {/* PHASE 0-1: gas leak particles + cloud */}
      {phase<=1&&<g>
        {[0,1,2,3,4,5,6,7].map(i=><circle key={i} cx={100} cy={90} r={1+i*0.3} fill="#9ca3af" opacity="0.5" style={{animation:`leakPuff ${1.2+i*0.2}s ease-out infinite`,animationDelay:`${i*0.18}s`,"--lx":`${-15-i*4}px`,"--ly":`${-8-i*2}px`}as any}/>)}
      </g>}
      {/* PHASE 1: drifting vapor cloud */}
      {(phase===1||phase===2)&&<g style={{animation:"drift 3s ease-in-out infinite alternate"}}>
        <ellipse cx="80" cy="84" rx="34" ry="14" fill="url(#cloudGrad)" style={{animation:"cloudPulse 2s ease-in-out infinite"}}/>
        <ellipse cx="95" cy="80" rx="22" ry="10" fill="url(#cloudGrad)" style={{animation:"cloudPulse 2.5s ease-in-out infinite"}}/>
        {phase===1&&<text x="78" y="86" textAnchor="middle" fill="#e5e7eb" fontSize="4" fontWeight="bold">CH₄ + NGL</text>}
        {/* LEL-UEL band indicator */}
        {phase===2&&<text x="78" y="68" textAnchor="middle" fill="#fbbf24" fontSize="4" fontWeight="bold" style={{animation:"warnBlink 0.8s infinite"}}>⚠ LEL–UEL</text>}
      </g>}
      {/* PHASE 2: ignition spark */}
      {phase===2&&<g><circle cx="120" cy="84" r="3" fill="#fde68a" style={{animation:"warnBlink 0.3s infinite"}}/><path d="M118,82 L121,84 L119,86 L122,88" stroke="#fbbf24" strokeWidth="1" fill="none" style={{animation:"warnBlink 0.2s infinite"}}/></g>}
      {/* PHASE 3: blast shockwaves */}
      {phase===3&&<g>
        {[0,1,2].map(i=><circle key={i} cx="110" cy="82" r="5" fill="none" stroke="#fca5a5" strokeWidth="1.5" style={{animation:`blast 1.2s ease-out infinite`,animationDelay:`${i*0.3}s`,transformOrigin:"110px 82px"}}/>)}
        <circle cx="110" cy="82" r="18" fill="url(#fbGrad)" style={{animation:"warnBlink 0.4s infinite"}}/>
        {/* debris */}
        {[0,1,2,3,4,5].map(i=><rect key={i} x="110" y="82" width="2" height="2" fill="#9ca3af" style={{animation:`leakPuff 1s ease-out infinite`,animationDelay:`${i*0.1}s`,"--lx":`${Math.cos(i)*40}px`,"--ly":`${-20-Math.abs(Math.sin(i))*20}px`}as any}/>)}
      </g>}
      {/* PHASE 4: rising fireball */}
      {phase===4&&<g>
        <circle cx="115" cy="60" r="26" fill="url(#fbGrad)" style={{animation:"fireball 2.2s ease-out infinite"}}/>
        <circle cx="115" cy="50" r="16" fill="url(#fbGrad)" opacity="0.8" style={{animation:"fireball 2s ease-out infinite",animationDelay:"0.3s"}}/>
        {/* smoke */}
        {[0,1,2,3].map(i=><circle key={i} cx={110+i*4} cy={40} r={4+i*2} fill="#3f3f46" opacity="0.5" style={{animation:`gasRise ${2+i*0.4}s ease-out infinite`,animationDelay:`${i*0.3}s`}}/>)}
      </g>}

      {/* phase label */}
      <rect x="4" y="4" width="56" height="12" rx="2" fill="rgba(0,0,0,0.5)"/>
      <text x="8" y="12" fill={phases[phase].c} fontSize="6" fontWeight="bold">{phases[phase].lb}</text>
    </svg>
    {/* description bar */}
    <div style={{padding:"12px 16px",background:"rgba(0,0,0,0.4)",borderTop:`2px solid ${phases[phase].c}`}}>
      <p style={{fontSize:13,color:"#fff",fontWeight:600,lineHeight:1.6}}>{phases[phase].d}</p>
    </div>
  </div>
  {/* Phase controls */}
  <div style={{display:"flex",gap:6,marginTop:14,flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
    <button onClick={()=>setPlaying(p=>!p)} className="ta" style={{padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:700,cursor:"pointer"}}>{playing?(he?"⏸ השהה":"⏸ Pause"):(he?"▶ נגן":"▶ Play")}</button>
    {phases.map((ph,i)=><button key={i} onClick={()=>{setPhase(i);setPlaying(false);}} className={phase===i?"ta":"ti"} style={{padding:"6px 12px",borderRadius:5,fontSize:11,fontWeight:700,cursor:"pointer"}}>{ph.lb}</button>)}
  </div>
  <p style={{fontSize:10,color:P.muted,marginTop:12,textAlign:"center",lineHeight:1.6}}>{he?"💡 הדמיה סכמטית להמחשת מנגנון ה-VCE. ההצתה דורשת ריכוז גז בטווח הנפיצות (LEL-UEL) ומקור הצתה באזור צפוף בציוד שיוצר את הכליאה הנדרשת לגל ההדף.":"💡 Schematic simulation illustrating the VCE mechanism. Ignition requires gas concentration within the flammable range (LEL-UEL) and an ignition source in an equipment-congested area providing the confinement needed for the blast wave."}</p>
</Sec>;}

/* ═══ 07 PLUME MODELING — animated dispersion with PAC zones ═══ */
function Plume({lang}:{lang:string}){const he=lang==="he";const[wind,setWind]=useState(3);return<Sec id="plume" num="07" title={he?"מודל פיזור הענן":"Plume Dispersion Model"} subtitle={he?"פיזור גז רעיל (H₂S) ואזורי PAC":"Toxic gas (H₂S) dispersion and PAC zones"} sidebar={<>
  <SB color="purple" title={he?"מהו מודל פיזור?":"What is a Plume Model?"}><p>{he?"מודל דיספרסיה (כמו ALOHA) מחשב את תנועת ענן הגז לפי מהירות וכיוון הרוח, יציבות אטמוספירית, וקצב הפליטה. התוצאה: \"אזורי איום\" מדורגים לפי ריכוז.":"A dispersion model (like ALOHA) computes gas-cloud movement by wind speed/direction, atmospheric stability, and release rate. The output: \"threat zones\" graded by concentration."}</p></SB>
  <SB color="red" title={he?"שילוב סיכונים":"Combined Hazards"}><p>{he?"בברזאן הסיכון כפול: גם רעילות (H₂S) וגם נפיצות (מתאן/NGL). מודל הפיזור מנחה הן את אזור הפינוי הרעיל והן את גבול הסיכון הנפיץ.":"At Barzan the risk is dual: both toxicity (H₂S) and flammability (methane/NGL). The plume model guides both the toxic evacuation zone and the flammable hazard boundary."}</p></SB>
</>}>
  <p style={{fontSize:13,color:P.steel,lineHeight:1.8,marginBottom:16}}>{he?"בעת אירוע שחרור גז רעיל, מערך גלאי הגז הפרימטריים ונתונים מטאורולוגיים (מהירות וכיוון רוח, יציבות אטמוספירית) מזינים מודל דיספרסיה. המודל מחשב אזורי איום מדורגים, המאפשרים למפקד האירוע להגדיר טבעות פינוי ובידוד מדויקות. הזיזו את מחוון הרוח כדי לראות את השפעתו:":"During a toxic release, perimeter gas detectors and meteorological data (wind speed/direction, atmospheric stability) feed a dispersion model. The model computes graded threat zones, enabling the incident commander to define precise evacuation and isolation rings. Move the wind slider to see its effect:"}</p>
  {/* Wind control */}
  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,padding:"10px 14px",background:P.cream,borderRadius:8}}>
    <span style={{fontSize:12,fontWeight:700,color:P.steel}}>🌬️ {he?"מהירות רוח":"Wind speed"}:</span>
    <input type="range" min="1" max="8" value={wind} onChange={e=>setWind(+e.target.value)} style={{flex:1,accentColor:P.gold}}/>
    <span className="mn" style={{fontSize:13,fontWeight:700,color:P.gold,minWidth:54}}>{wind} m/s</span>
  </div>
  {/* Plume visualization */}
  <div className="cm" style={{padding:0,overflow:"hidden",background:"linear-gradient(135deg,#1e1b2e,#0f172a)"}}>
    <svg viewBox="0 0 200 110" style={{width:"100%",display:"block"}}>
      {/* zones — width scales inverse to wind (higher wind = narrower/longer) */}
      {(()=>{const len=40+wind*16;const wid=26-wind*1.6;const zones=[{r:1,c:"#dc2626",op:0.35,lbl:"PAC-3 (50 ppm)",f:0.45},{r:2,c:"#f59e0b",op:0.3,lbl:"PAC-2 (27 ppm)",f:0.7},{r:3,c:"#fbbf24",op:0.22,lbl:"PAC-1 (0.51 ppm)",f:1}];return zones.map((z,i)=><g key={i}>
        <ellipse cx={40+len*z.f*0.5} cy="60" rx={len*z.f*0.5} ry={wid*z.f} fill={z.c} opacity={z.op} style={{animation:`cloudPulse ${2+i*0.4}s ease-in-out infinite`}}/>
      </g>);})()}
      {/* source */}
      <circle cx="40" cy="60" r="4" fill={P.flame} stroke="#fff" strokeWidth="0.5"/>
      <text x="40" y="74" textAnchor="middle" fill="#fff" fontSize="4.5" fontWeight="bold">{he?"מקור":"Source"}</text>
      {/* wind arrow */}
      <g transform="translate(150,16)"><line x1="0" y1="0" x2="22" y2="0" stroke="#93c5fd" strokeWidth="1.5"/><polygon points="22,0 18,-2 18,2" fill="#93c5fd"/><text x="11" y="-4" textAnchor="middle" fill="#93c5fd" fontSize="4">{he?"רוח":"Wind"}</text></g>
      {/* drifting particles */}
      {[0,1,2,3,4].map(i=><circle key={i} cx="40" cy="60" r="1" fill="#fca5a5" opacity="0.6" style={{animation:`leakPuff ${2+i*0.3}s linear infinite`,animationDelay:`${i*0.4}s`,"--lx":`${100+wind*12}px`,"--ly":`${(i-2)*8}px`}as any}/>)}
      {/* legend */}
      {[{c:"#dc2626",l:"PAC-3"},{c:"#f59e0b",l:"PAC-2"},{c:"#fbbf24",l:"PAC-1"}].map((z,i)=><g key={i} transform={`translate(8,${90+i*7})`}><rect width="5" height="5" fill={z.c} opacity="0.7"/><text x="8" y="4.5" fill="#cbd5e1" fontSize="4">{z.l}</text></g>)}
    </svg>
  </div>
  <p style={{fontSize:10,color:P.muted,marginTop:12,lineHeight:1.6}}>{he?"💡 ככל שהרוח חזקה יותר, הענן ארוך וצר יותר (פיזור צירי) ומגיע רחוק יותר במורד הרוח. ערכי ה-PAC מגדירים את גבולות אזורי האיום — ראו פירוט מלא בטאב \"חומרים מסוכנים\".":"💡 Stronger wind makes the plume longer and narrower (axial dispersion), reaching farther downwind. PAC values define the threat-zone boundaries — see full detail in the \"Hazards\" tab."}</p>
</Sec>;}

/* ═══ 08 HAZARDOUS MATERIALS — with PAC values ═══ */
function Hazards({lang}:{lang:string}){const he=lang==="he";const[sel,setSel]=useState("h2s");
const mats:Record<string,any>={
  h2s:{name:he?"מימן גופרי":"Hydrogen Sulfide",formula:"H₂S",cas:"7783-06-4",un:"1053",icon:"☠️",c:P.red,
    desc:he?"הגז הגולמי הנכנס למתקן מכיל ריכוזים משמעותיים של H₂S. גז רעיל ביותר, קורוזיבי, בעל ריח של ביצים רקובות בריכוזים נמוכים — אך משתק את עצב הריח בריכוזים גבוהים, כך שלא ניתן להסתמך על הריח כאזהרה. כבד מהאוויר ומצטבר בשקעים.":"The raw inlet gas contains significant H₂S concentrations. Highly toxic, corrosive, with a rotten-egg odor at low concentrations — but paralyzes the sense of smell at high concentrations, so odor cannot be relied upon as a warning. Heavier than air, accumulates in low spots.",
    props:[[he?"רעילות":"Toxicity",he?"קטלני":"Lethal"],["IDLH","100 ppm"],[he?"PEL (OSHA)":"PEL (OSHA)","20 ppm"],["REL (NIOSH)","10 ppm"],[he?"סף ריח":"Odor threshold","0.01 ppm"],[he?"שיתוק חוש ריח":"Olfactory paralysis","100-150 ppm"]],
    pac:[{l:"PAC-1",v:"0.51 ppm",d:he?"השפעות קלות הפיכות":"Mild reversible effects",c:"#fbbf24"},{l:"PAC-2",v:"27 ppm",d:he?"פגיעה בלתי-הפיכה / פגיעה ביכולת מילוט":"Irreversible / escape-impairing",c:"#f59e0b"},{l:"PAC-3",v:"50 ppm",d:he?"מסכן חיים":"Life-threatening",c:"#dc2626"}]},
  ch4:{name:he?"מתאן":"Methane",formula:"CH₄",cas:"74-82-8",un:"1971",icon:"🔥",c:P.blue,
    desc:he?"המרכיב העיקרי בגז הטבעי (מעל 80%). גז דליק ביותר בעל גבול נפיצות תחתון (LEL) של 5% וגבול נפיצות עליון (UEL) של 15%. חסר צבע וריח. קל מהאוויר — מתפזר כלפי מעלה. אינו רעיל אך מחניק (מדחק חמצן) ונפיץ.":"The main component of natural gas (over 80%). Highly flammable with a Lower Explosive Limit (LEL) of 5% and Upper Explosive Limit (UEL) of 15%. Colorless and odorless. Lighter than air — disperses upward. Non-toxic but asphyxiant (oxygen-displacing) and explosive.",
    props:[["LEL","5%"],["UEL","15%"],[he?"רעילות":"Toxicity",he?"מחניק":"Asphyxiant"],[he?"צפיפות יחסית":"Rel. density","0.55 (<אוויר)"],[he?"טמ' התלקחות":"Autoignition","537°C"],[he?"מצב":"State",he?"גז":"Gas"]],
    pac:[{l:"PAC-1 (TEEL-1)",v:"65,000 ppm",d:he?"דחיקת חמצן ל-19.5%":"O₂ down to 19.5%",c:"#fbbf24"},{l:"PAC-2 (TEEL-2)",v:"230,000 ppm",d:he?"דחיקת חמצן ל-16%":"O₂ down to 16%",c:"#f59e0b"},{l:"PAC-3 (TEEL-3)",v:"400,000 ppm",d:he?"דחיקת חמצן ל-12.5%":"O₂ down to 12.5%",c:"#dc2626"}],
    note:he?"כגז מחניק פשוט, ערכי PAC (TEEL) מבוססים על דחיקת חמצן ולא על רעילות, לפי ערכי ה-DOE הסטנדרטיים למחניקים. הסיכון הדומיננטי הוא נפיצות (LEL-UEL).":"As a simple asphyxiant, PAC (TEEL) values are based on oxygen displacement, not toxicity, per the DOE standard asphyxiant values. The dominant hazard is flammability (LEL-UEL)."},
  ngl:{name:he?"נוזלי גז טבעי":"Natural Gas Liquids",formula:"C₂–C₄",cas:"—",un:"1075",icon:"💧",c:P.amber,
    desc:he?"תערובת של אתאן, פרופאן ובוטאן. מהווים סיכון מוגבר עקב נטייתם להצטבר באזורים נמוכים וליצור ענני אדים עשירים בקרבת הקרקע. כבדים מהאוויר. בלחץ גבוה במתקן — בעת שחרור, התפשטות פתאומית (Flash) יוצרת כמות אדים עצומה.":"A mixture of ethane, propane and butane. Pose elevated risk due to their tendency to accumulate in low areas and form vapor-rich clouds near the ground. Heavier than air. At high pressure in the plant — upon release, flash expansion creates an enormous vapor volume.",
    props:[["LEL","~2%"],["UEL","~10%"],[he?"רעילות":"Toxicity",he?"מחניק":"Asphyxiant"],[he?"צפיפות יחסית":"Rel. density",">אוויר"],[he?"מצב":"State",he?"גז מונזל":"Liquefied gas"],[he?"סיכון":"Hazard","BLEVE"]],
    pac:[{l:"PAC-1 (TEEL-1)",v:"65,000 ppm",d:he?"דחיקת חמצן ל-19.5%":"O₂ down to 19.5%",c:"#fbbf24"},{l:"PAC-2 (TEEL-2)",v:"230,000 ppm",d:he?"דחיקת חמצן ל-16%":"O₂ down to 16%",c:"#f59e0b"},{l:"PAC-3 (TEEL-3)",v:"400,000 ppm",d:he?"דחיקת חמצן ל-12.5%":"O₂ down to 12.5%",c:"#dc2626"}],
    note:he?"ערכי PAC (TEEL) הם הערכים הסטנדרטיים של ה-DOE למחניקים פשוטים, החלים על פרופאן/בוטאן. הסיכון הדומיננטי הוא נפיצות וסיכון BLEVE.":"PAC (TEEL) values are the DOE standard simple-asphyxiant values applying to propane/butane. The dominant hazard is flammability and BLEVE risk."},
};const m=mats[sel];
return<Sec id="hazmat" num="08" title={he?"החומרים המסוכנים":"The Hazardous Materials"} subtitle={he?"מאפיינים ורעילות לפי ערכי PAC (Protective Action Criteria)":"Properties and toxicity by PAC (Protective Action Criteria) values"} dark sidebar={<>
  <SB color="gold" title={he?"מהם ערכי PAC?":"What are PAC values?"}><p>{he?"Protective Action Criteria — קריטריונים לפעולה מגוננת מבית DOE. שלוש רמות התואמות חשיפת 60 דקות:":"Protective Action Criteria — protective-action thresholds from DOE. Three tiers corresponding to 60-minute exposure:"}</p><p style={{marginTop:6}}><b style={{color:"#fbbf24"}}>PAC-1</b> — {he?"אי-נוחות הפיכה":"reversible discomfort"}</p><p><b style={{color:"#f59e0b"}}>PAC-2</b> — {he?"פגיעה ביכולת מילוט":"escape-impairing"}</p><p><b style={{color:"#dc2626"}}>PAC-3</b> — {he?"מסכן חיים":"life-threatening"}</p><p style={{marginTop:6,fontSize:11,color:P.muted}}>{he?"היררכיה: AEGL → ERPG → TEEL":"Hierarchy: AEGL → ERPG → TEEL"}</p></SB>
  <SB color="red" title={he?"⚠️ הסכנה הכפולה":"⚠️ The Dual Threat"}><p>{he?"נוכחות ה-H₂S החמוץ בשלבים המוקדמים מחייבת היערכות מיוחדת: לא רק אירוע דליקות, אלא גם איום רעילות קטלני המגביל את גישת כוחות החירום ללא מנ\"פ.":"The sour H₂S presence in early stages requires special readiness: not just a fire event, but a lethal toxicity threat limiting responder access without SCBA."}</p></SB>
</>}>
  {/* Material selector */}
  <div style={{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"}}>
    {Object.entries(mats).map(([k,v]:any)=><button key={k} onClick={()=>setSel(k)} className={sel===k?"ta":"ti"} style={{padding:"10px 16px",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:18}}>{v.icon}</span>{v.formula}</button>)}
  </div>
  {/* Material detail */}
  <div className="cm" style={{padding:20,borderTop:`4px solid ${m.c}`}}>
    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14,flexWrap:"wrap"}}>
      <span style={{fontSize:36}}>{m.icon}</span>
      <div><h3 className="sf" style={{fontSize:22,fontWeight:900,color:P.ink}}>{m.name}</h3><div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:2}}><span className="mn" style={{fontSize:13,fontWeight:700,color:m.c}}>{m.formula}</span>{m.cas!=="—"&&<span className="mn" style={{fontSize:11,color:P.muted}}>קאס {m.cas}</span>}<span className="mn" style={{fontSize:11,color:P.muted}}>{he?"מספר או\"ם":"UN"} {m.un}</span></div></div>
    </div>
    <p style={{fontSize:13,color:P.steel,lineHeight:1.8,marginBottom:16}}>{m.desc}</p>
    {/* Properties grid */}
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:18}}>
      {m.props.map((p:any,i:number)=><div key={i} style={{padding:"8px 10px",background:P.cream,borderRadius:6}}><div style={{fontSize:9,fontWeight:700,color:P.muted,textTransform:"uppercase",marginBottom:2}}>{p[0]}</div><div className="mn" style={{fontSize:13,fontWeight:700,color:P.ink}} dir="ltr">{p[1]}</div></div>)}
    </div>
    {/* PAC VALUES — the highlight */}
    <div style={{padding:16,background:"linear-gradient(135deg,#fef2f2,#fff7ed)",borderRadius:10,border:`1px solid ${P.red}20`}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><span style={{fontSize:18}}>📊</span><h4 style={{fontSize:13,fontWeight:800,color:P.ink}}>{he?"ערכי PAC — רעילות לחשיפת 60 דקות":"PAC Values — 60-minute exposure toxicity"}</h4></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
        {m.pac.map((p:any,i:number)=><div key={i} style={{padding:"12px 8px",background:"#fff",borderRadius:8,border:`2px solid ${p.c}`,textAlign:"center"}}>
          <div style={{fontSize:10,fontWeight:800,color:p.c,marginBottom:4}}>{p.l}</div>
          <div className="sf mn" style={{fontSize:18,fontWeight:900,color:P.ink,lineHeight:1.1}} dir="ltr">{p.v}</div>
          <div style={{fontSize:9,color:P.muted,marginTop:4,lineHeight:1.3}}>{p.d}</div>
        </div>)}
      </div>
      {m.note&&<p style={{fontSize:10,color:P.muted,marginTop:10,lineHeight:1.5,fontStyle:"italic"}}>ℹ️ {m.note}</p>}
      {sel==="h2s"&&<div style={{marginTop:12,padding:"10px 12px",background:"#fff",borderRadius:8}}>
        <p style={{fontSize:10,fontWeight:700,color:P.steel,marginBottom:6}}>{he?"טבלת AEGL מלאה (ppm) לפי משך חשיפה:":"Full AEGL table (ppm) by exposure duration:"}</p>
        <div style={{overflowX:"auto"}}><table className="mt" style={{width:"100%",borderCollapse:"collapse",fontSize:10}}><thead><tr><th style={{textAlign:he?"right":"left"}}>{he?"רמה":"Tier"}</th><th>10min</th><th>30min</th><th>60min</th><th>4hr</th><th>8hr</th></tr></thead><tbody>
          {[["AEGL-1","0.75","0.60","0.51","0.36","0.33"],["AEGL-2","41","32","27","20","17"],["AEGL-3","76","59","50","37","31"]].map((r,i)=><tr key={i}><td style={{fontWeight:700,color:i===0?"#fbbf24":i===1?"#f59e0b":"#dc2626"}}>{r[0]}</td>{r.slice(1).map((c,j)=><td key={j} className="mn" dir="ltr" style={{fontSize:11}}>{c}</td>)}</tr>)}
        </tbody></table></div>
        <p style={{fontSize:9,color:P.muted,marginTop:6}}>{he?"מקור: ATSDR / EPA. PAC = ערכי AEGL ל-60 דקות.":"Source: ATSDR / EPA. PAC = 60-minute AEGL values."}</p>
      </div>}
    </div>
  </div>
</Sec>;}

/* ═══ 09 HAZMAT RESPONSE ═══ */
function Response({lang}:{lang:string}){const he=lang==="he";const cards=[
  {ic:"🚿",ti:he?"קירור חשיפה וכיבוי":"Exposure Cooling & Firefighting",c:P.blue,
   pts:he?["העיקרון המבצעי: אין לכבות שריפת גז בלחץ כל עוד יש זרימת גז. כיבוי הלהבה ללא עצירת המקור מוביל להצטברות מחודשת של ענן גז ולפיצוץ משני קטלני בהרבה.","הפעלת תותחי מים ומערכות מתזים אוטומטיות (Deluge Systems) לצורך קירור מבני הציוד המשותפים, על מנת למנוע כשל מבני עקב עיוות תרמי או אירוע BLEVE.","בידוד מקורות האנרגיה באמצעות שליטה מרחוק ממפקדת השליטה המוגנת (CR) וסגירת מגופי ה-ESD הראשיים, מה שמאפשר למלאי הגז הכלוא לבעור באופן מבוקר (Burn-off) עד לדעיכה מלאה."]:["Operating principle: do not extinguish a pressurized gas fire while gas flows. Extinguishing the flame without stopping the source leads to renewed gas cloud accumulation and a far more lethal secondary explosion.","Deploy master streams and automatic Deluge Systems to cool shared equipment structures, preventing structural failure from thermal deformation or a BLEVE event.","Isolate energy sources via remote control from the protected control room (CR) and close main ESD valves, allowing the confined gas inventory to burn off in a controlled manner until full decay."]},
  {ic:"🧯",ti:he?"מיגון תרמי, דקונטמינציה והסרת מיגון":"Thermal PPE, Decon & Doffing",c:P.purple,
   pts:he?["זהו אירוע שריפה ופיצוץ שבו הסיכון הדומיננטי הוא תרמי — קרינת חום, להבות וגל הדף. לכן המיגון הנכון הוא חליפת כיבוי (Bunker/Turnout) בשילוב מנ\"פ, ולא חליפה כימית. חליפת הגנה כימית מסוג Level B אינה עמידה בחום ועלולה להיכשל מול קרינה תרמית — היא שמורה לתרחיש של דליפת גז רעיל לא-מוצתת בלבד.","המנ\"פ נותן את ההגנה הנשימתית הנדרשת גם מפני H₂S שלא נשרף (כיסים כלואים) וגם מפני תוצרי בעירה (SO₂, פחמן חד-חמצני) — כלל הזהב: לא נכנסים ללא מנ\"פ ובן-זוג.","דקונטמינציה חיונית ביציאה: ה-H₂S ותרכובות הגופרית (כולל SO₂ וגופרית יסודית) נספגים בחליפת הכיבוי ובציוד. נדרשת שטיפה רטובה יסודית של המיגון לפני הסרתו, כדי למנוע פליטה מושהית (Off-gassing) שתסכן את הלוחם עצמו ואת הצוות.","הסרת מיגון מבוקרת (Doffing) באזור נקי, בסדר פעולות מוגדר, תוך שמירה על המנ\"פ עד השלב האחרון. הציוד שספג גופרית מטופל ומנוקה בנפרד ואינו חוזר לשימוש לפני בדיקה."]:["This is a fire and explosion event where the dominant hazard is thermal — heat radiation, flames and blast wave. Therefore the correct PPE is structural firefighting gear (Bunker/Turnout) combined with SCBA, not a chemical suit. A Level B chemical suit is not heat-resistant and may fail under thermal radiation — it is reserved only for an un-ignited toxic gas release scenario.","SCBA provides the required respiratory protection both against unburned H₂S (confined pockets) and combustion products (SO₂, carbon monoxide) — golden rule: never enter without SCBA and a buddy.","Decontamination is essential on exit: H₂S and sulfur compounds (including SO₂ and elemental sulfur) are absorbed into the turnout gear and equipment. Thorough wet washing of the PPE is required before doffing, to prevent delayed off-gassing that would endanger the firefighter and the team.","Controlled doffing in a clean zone, in a defined sequence, keeping SCBA on until the final step. Sulfur-contaminated equipment is cleaned separately and not returned to service before inspection."]},
  {ic:"⚡",ti:he?"בקרת מקורות הצתה והשבתה":"Ignition Control & Shutdown",c:P.amber,
   pts:he?["וידוא שכל הציוד החשמלי באזור הסיכון תקין וממוגן פיצוץ (Explosion Proof). ניצוץ חשמלי בודד מציוד שאינו מתאים = הצתה מחודשת.","הפעלת רצף ההשבתה (ESD) המלא לבידוד הזנת הדלק. אי-סגירה מהירה מספקת של המגופים היא שהזינה את האירוע הראשוני.","אוטומציה של מגופי ESD: לוודא כי זמני התגובה של מגופי החירום מוגדרים לסגירה אוטומטית מלאה במקרה של נפילת לחץ פתאומית (Rate-of-Drop) ללא צורך באישור מפעיל אנושי."]:["Verify all electrical equipment in the risk zone is intact and Explosion-Proof. A single electrical spark from unsuitable equipment = re-ignition.","Activate the full Emergency Shutdown (ESD) sequence to isolate fuel feed. Insufficiently rapid valve closure fed the initial event.","ESD valve automation: ensure emergency-valve response times are configured for full automatic closure on a sudden pressure drop (Rate-of-Drop) without requiring human operator approval."]},
];return<Sec id="response" num="09" title={he?"ניתוח המענה ודוקטרינת החומ\"ס":"Response Analysis & HazMat Doctrine"} subtitle={he?"ניהול האירוע על פי עקרונות מתקדמים של פיקוד ושליטה":"Event management by advanced command & control principles"} sidebar={<>
  <SB color="red" title={he?"כלל הזהב ל-H₂S":"H₂S Golden Rule"}><p>{he?"לעולם אין להיכנס לאזור H₂S ללא מנ\"פ ובלי בן-זוג (Buddy). קורבנות H₂S פולטים גז מבגדיהם ועורם — הם מהווים סכנה למחלצים. נדרשת דקונטמינציה לפני העברה לאמבולנס.":"Never enter an H₂S zone without SCBA and a buddy. H₂S victims off-gas from clothing and skin — they endanger rescuers. Decontamination required before ambulance transfer."}</p></SB>
  <SB color="blue" title={he?"איזה מיגון? תרמי":"Which PPE? Thermal"}><p style={{marginBottom:6}}>{he?"באירוע שריפה/פיצוץ הסיכון הוא תרמי — ולכן:":"In a fire/explosion event the hazard is thermal — therefore:"}</p><p style={{marginBottom:4}}><b>{he?"חליפת כיבוי + מנ\"פ":"Turnout gear + SCBA"}</b> — {he?"ההגנה הנכונה":"the correct choice"}</p><p style={{marginBottom:6}}><b>Level A/B</b> — {he?"חליפה כימית, לא עמידה בחום — רק לדליפה רעילה לא-מוצתת":"chemical suit, not heat-resistant — only for un-ignited toxic release"}</p><p>{he?"⚠️ לבישת Level B ליד שריפת גז מסוכנת — היא תיכשל מול קרינה תרמית.":"⚠️ Wearing Level B near a gas fire is dangerous — it fails under thermal radiation."}</p></SB>
</>}>
  <p style={{fontSize:13,color:P.steel,lineHeight:1.8,marginBottom:18}}>{he?"עם קבלת ההודעה על הפיצוץ, הופעלה תוכנית החירום המפעלית בשילוב עם כוחות ההגנה האזרחית של קטר. ניהול האירוע התבצע על פי עקרונות מתקדמים של פיקוד ושליטה באירועי חומרים מסוכנים, תוך התמודדות עם שילוב ייחודי של סיכון דליקות וסיכון רעילות:":"Upon notification of the explosion, the plant emergency plan was activated alongside Qatar's civil defense forces. Event management followed advanced command and control principles for hazardous materials incidents, addressing a unique combination of fire and toxicity hazards:"}</p>
  <div style={{display:"flex",flexDirection:"column",gap:14}}>
    {cards.map((c,i)=><div key={i} className="cm" style={{padding:18,borderRight:`4px solid ${c.c}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}><span style={{fontSize:26}}>{c.ic}</span><h4 className="sf" style={{fontSize:16,fontWeight:800,color:c.c}}>{c.ti}</h4></div>
      <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>{c.pts.map((p,j)=><li key={j} style={{display:"flex",gap:8,fontSize:13,color:P.steel,lineHeight:1.7}}><span style={{color:c.c,flexShrink:0,fontWeight:700}}>▸</span><span>{p}</span></li>)}</ul>
    </div>)}
  </div>
</Sec>;}

/* ═══ 10 GEOPOLITICAL CONTEXT ═══ */
function Geo({lang}:{lang:string}){const he=lang==="he";return<Sec id="geo" num="10" title={he?"רקע גאופוליטי":"Geopolitical Context"} subtitle={he?"מדוע המתקן היה בתהליך התנעה רגיש":"Why the plant was in a sensitive restart"} dark sidebar={<>
  <SB color="amber" title={he?"מצר הורמוז":"Strait of Hormuz"}><p>{he?"כמעט כל תוצרת ראס לאפן עוברת דרך מצר הורמוז. סגירתו בתקופת המלחמה שיתקה את היצוא הקטרי והאיצה את הלחץ להתנעה מחדש.":"Almost all Ras Laffan output passes through the Strait of Hormuz. Its closure during the war paralyzed Qatari exports and accelerated pressure for restart."}</p></SB>
  <SB color="red" title={he?"~20% מאספקת ה-LNG העולמית":"~20% of Global LNG Supply"}><p>{he?"ראס לאפן היא מרכז ה-LNG הגדול בעולם — כ-20% מאספקת הגז הטבעי הנוזלי (LNG) העולמית. הנזק ממתקפת מרץ והשבתת הייצור יצרו לחץ כלכלי כבד לחזור לפעולה — וכך נוצר חלון ההתנעה המסוכן.":"Ras Laffan is the world's largest LNG hub — about 20% of global LNG supply. The March strike damage and production halt created heavy economic pressure to resume — forming the dangerous restart window."}</p></SB>
</>}>
  <p style={{fontSize:14,color:P.steel,lineHeight:1.9,marginBottom:16}}>{he?"אירוע ברזאן אינו מתקיים בחלל ריק. הוא מגיע ברגע שבו תשתית האנרגיה הקטרית כבר פועלת תחת לחץ משמעותי. בחודש מרץ 2026, במהלך העימות בין ארה\"ב-ישראל לאיראן, סדרת מתקפות טילים ורחפנים איראניות פגעה בקריית התעשייה ראס לאפן (ב-18-19 במרץ) — בתגובה לתקיפה ישראלית על שדה הגז הדרומי של איראן (הוא השדה הצפוני בצד הקטרי). המתקפות גרמו נזק נרחב ושריפות במתקן Pearl GTL (הפיכת גז לנוזלים) ובמספר מתקני LNG.":"The Barzan event does not exist in a vacuum. It arrives at a moment when Qatari energy infrastructure is already operating under significant strain. In March 2026, during the US-Israel conflict with Iran, a series of Iranian missile & drone strikes hit Ras Laffan Industrial City (on March 18-19) — in response to an Israeli strike on Iran's South Pars gas field (the same field is called the North Field on Qatar's side). The strikes caused extensive damage and fires at the Pearl GTL (gas-to-liquids) facility and several LNG facilities."}</p>
  <p style={{fontSize:14,color:P.steel,lineHeight:1.9,marginBottom:16}}>{he?"בעקבות הנזק, קטר הכריזה על כוח עליון (Force Majeure) על יצוא ה-LNG והשביתה את מתקן ברזאן בדצמבר 2025 לתחזוקה דחופה. עם ההפוגה היחסית ופתיחת מצר הורמוז, החל לחץ כלכלי ואסטרטגי כבד להחזיר את הייצור — מה שהוביל להתנעה מחדש של ברזאן ב-19 ביוני, יומיים בלבד לפני האסון.":"Following the damage, Qatar declared force majeure on LNG exports and shut down the Barzan plant in December 2025 for urgent maintenance. With the relative ceasefire and reopening of the Strait of Hormuz, heavy economic and strategic pressure mounted to restore production — leading to the restart of Barzan on June 19, just two days before the disaster."}</p>
  <div className="pq">{he?"\"חלון ההתנעה המסוכן לא נוצר בחלל ריק — לחץ גאופוליטי כלכלי להאיץ חזרה לייצור, על תשתית שספגה נזק מלחמתי, יצר את התנאים לאירוע.\"":"\"The dangerous restart window was not created in a vacuum — geopolitical economic pressure to accelerate return to production, on war-damaged infrastructure, created the conditions for the event.\""}</div>
  {/* Geopolitical timeline strip */}
  <div style={{display:"flex",gap:0,flexWrap:"wrap",marginTop:18}}>
    {[{d:"03/2026",t:he?"מתקפת טילים":"Missile strike",c:P.red},{d:"12/2025",t:he?"השבתה + כוח עליון":"Shutdown + force majeure",c:P.amber},{d:he?"06/2026 (יחסי)":"06/2026",t:he?"פתיחת הורמוז":"Hormuz reopens",c:P.blue},{d:"19/06",t:he?"התנעה מחדש":"Restart",c:P.green},{d:"21/06",t:he?"האסון":"The disaster",c:"#7f1d1d"}].map((s,i,a)=><div key={i} style={{flex:"1 1 110px",textAlign:"center",padding:"12px 6px",position:"relative"}}><div style={{width:14,height:14,borderRadius:"50%",background:s.c,margin:"0 auto 8px",boxShadow:`0 0 8px ${s.c}80`}}/><div className="mn" style={{fontSize:11,fontWeight:700,color:s.c}}>{s.d}</div><div style={{fontSize:10,color:P.muted,marginTop:2}}>{s.t}</div>{i<a.length-1&&<div style={{position:"absolute",top:18,[he?"left":"right"]:"-50%",width:"100%",height:2,background:`${P.border}`,zIndex:-1}}/>}</div>)}
  </div>
  <p style={{fontSize:10,color:P.muted,marginTop:10,lineHeight:1.6}}>{he?"⚠️ הערה: הסיווג הרשמי של האירוע הוא תקלה טכנית בהתנעה, ללא חבלה או פעולה עוינת — כך לפי משרד הפנים הקטרי ומנכ\"ל QatarEnergy. הרקע הגאופוליטי מוצג להבנת התנאים שהובילו לחלון ההתנעה הרגיש.":"⚠️ Note: The official classification is a technical malfunction during start-up, no sabotage or hostile action — per the Qatari Interior Ministry and QatarEnergy CEO. The geopolitical background is presented to understand the conditions that led to the sensitive restart window."}</p>
</Sec>;}

/* ═══ 11 LESSONS & INSIGHTS ═══ */
function Lessons({lang}:{lang:string}){const he=lang==="he";const lessons=[
  {n:"1",ic:"👁️",ti:he?"חיוניות של תאומים דיגיטליים":"Digital Twins are Vital",c:P.blue,
   d:he?"אירוע זה מוכיח את הצורך בהטמעת מערכות סימולציה מבוססות בינה מלאכותית, המסוגלות להצליב נתוני SCADA בזמן אמת עם המודל ההנדסי של רשת הצנרת, כדי להתריע על חריגות לחץ זעירות לפני התרחשות כשל בשלב ההתנעה (Start-up).":"This event proves the need for AI-based simulation systems that can cross-reference real-time SCADA data with the engineering model of the piping network, to alert on tiny pressure anomalies before a failure occurs during start-up."},
  {n:"2",ic:"🔬",ti:he?"החמרה בבדיקות NDT לאחר אירועי הדף":"Stricter NDT After Blast Events",c:P.amber,
   d:he?"מתקן שספג פגיעה מבנית בעבר אינו יכול להסתפק בבדיקות מדגמיות. יש לבצע בדיקות אל-הרס היקפיות ומלאות (100% UT/RT) לכל אורך קווי הלחץ הגבוה לפני אישור הזרמה מחדש.":"A plant that suffered prior structural damage cannot rely on sample inspections. Comprehensive, full non-destructive testing (100% UT/RT) must be performed along all high-pressure lines before re-flow approval."},
  {n:"3",ic:"⚡",ti:he?"אוטומציה של מגופי ESD":"ESD Valve Automation",c:P.red,
   d:he?"יש לוודא כי זמני התגובה של מגופי החירום מוגדרים לסגירה אוטומטית מלאה במקרה של נפילת לחץ פתאומית (Rate-of-Drop), ללא צורך באישור מפעיל אנושי, כדי לצמצם את המלאי המשתחרר לדקות הראשונות של הכשל.":"Emergency valve response times must be configured for full automatic closure on a sudden pressure drop (Rate-of-Drop), without human operator approval, to minimize released inventory in the first minutes of failure."},
];const historical=[
  {y:"2005",n:"Buncefield",l:"UK",d:he?"גלישת מיכל דלק יצרה ענן אדים ענק (>120,000 מ\"ר) שהתפוצץ. שינה את ההבנה כיצד ענני אדים נוצרים והתפשטו גם בשטח פתוח.":"Fuel tank overflow created a massive vapor cloud (>120,000 m²) that exploded. Changed understanding of how vapor clouds form and spread even in open terrain."},
  {y:"2004",n:"Skikda LNG",l:he?"אלג'יריה":"Algeria",d:he?"פיצוץ במתקן הנזלת LNG. דליפת פחמימנים קרים נשאבה למבער דוד קיטור — הצתה ופיצוץ. 27 הרוגים. לקח מרכזי על מרחקי בטיחות.":"Explosion at an LNG liquefaction plant. Cold hydrocarbon leak drawn into a boiler burner — ignition and explosion. 27 dead. Key lesson on safety distances."},
  {y:"1944",n:"Cleveland",l:"USA",d:he?"כשל מיכל אחסון LNG. דליפה לביוב העירוני, התאדות ופיצוץ. 130 הרוגים. אחד האסונות שעיצבו את תקני אחסון הגז המונזל.":"LNG storage tank failure. Leak into city sewers, vaporization and explosion. 130 dead. One of the disasters that shaped liquefied-gas storage standards."},
];return<Sec id="lessons" num="11" title={he?"מסקנות ולקחים":"Conclusions & Lessons"} subtitle={he?"לקחים ראשוניים לתעשייה ולמערכי החירום":"Preliminary lessons for industry and emergency systems"} sidebar={<>
  <SB color="gold" title={he?"לקח-העל":"Meta-Lesson"}><p>{he?"כל שלושת הלקחים מצביעים על אותו עקרון: בשלב התנעה מחדש, ההגנה חייבת להיות אוטומטית ומקדימה — לא תלויה בתגובה אנושית בזמן אמת.":"All three lessons point to the same principle: in a restart phase, protection must be automatic and preemptive — not dependent on real-time human response."}</p></SB>
  <SB color="purple" title={he?"היסטוריה חוזרת":"History Repeats"}><p>{he?"מ-Cleveland 1944 ועד היום — אסונות גז חוזרים על אותם דפוסים: כליאה, מקור הצתה, ותגובת חירום איטית. הלקחים ידועים; היישום הוא האתגר.":"From Cleveland 1944 to today — gas disasters repeat the same patterns: confinement, ignition source, and slow emergency response. The lessons are known; implementation is the challenge."}</p></SB>
</>}>
  <p style={{fontSize:13,color:P.steel,lineHeight:1.8,marginBottom:18}}>{he?"שלושה לקחים מרכזיים עולים מתחקיר האירוע — כולם מצביעים על הצורך באוטומציה ובהגנה מקדימה בשלבי התנעה מחדש:":"Three key lessons emerge from the event investigation — all pointing to the need for automation and preemptive protection in restart phases:"}</p>
  {/* Lessons cards */}
  <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
    {lessons.map((l,i)=><div key={i} className="cm" style={{padding:18,borderRight:`4px solid ${l.c}`,display:"flex",gap:14,alignItems:"flex-start"}}>
      <div style={{flexShrink:0,width:44,height:44,borderRadius:"50%",background:`${l.c}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{l.ic}</div>
      <div style={{flex:1}}><div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:6}}><span className="sf mn" style={{fontSize:14,fontWeight:900,color:l.c}}>{l.n}</span><h4 className="sf" style={{fontSize:16,fontWeight:800,color:P.ink}}>{l.ti}</h4></div><p style={{fontSize:13,color:P.steel,lineHeight:1.7}}>{l.d}</p></div>
    </div>)}
  </div>
  {/* Historical parallels */}
  <h3 className="sf" style={{fontSize:18,fontWeight:800,color:P.ink,marginBottom:12}}>{he?"אירועים מקבילים בהיסטוריה":"Historical Parallels"}</h3>
  <p style={{fontSize:12,color:P.muted,lineHeight:1.7,marginBottom:14}}>{he?"אסון ברזאן מצטרף לשרשרת אירועי פיצוץ ענן אדים ואסונות LNG שעיצבו את תורת הבטיחות התהליכית:":"The Barzan disaster joins a chain of vapor cloud explosions and LNG disasters that shaped process safety doctrine:"}</p>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12}}>
    {historical.map((h,i)=><div key={i} className="cm" style={{padding:16}}>
      <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:8}}><span className="sf mn" style={{fontSize:20,fontWeight:900,color:P.gold}}>{h.y}</span><div><div style={{fontSize:14,fontWeight:800,color:P.ink}}>{h.n}</div><div style={{fontSize:10,color:P.muted}}>{h.l}</div></div></div>
      <p style={{fontSize:12,color:P.steel,lineHeight:1.6}}>{h.d}</p>
    </div>)}
  </div>
</Sec>;}

/* ═══ 12 DOCUMENT VIEWER ═══ */
function DocViewer({lang}:{lang:string}){const he=lang==="he";return<Sec id="document" num="12" title={he?"מסמך התחקיר המקורי":"Original Investigation Document"} subtitle={he?"דוח תחקיר הנדסי ומבצעי — לצפייה בלבד":"Engineering & operational investigation report — view only"}>
  <p style={{fontSize:13,color:P.steel,lineHeight:1.8,marginBottom:16}}>{he?"להלן מסמך התחקיר ההנדסי-מבצעי המקורי של אירוע הכשל התהליכי והפיצוץ במתקן ברזאן, המשמש כבסיס לאפליקציה זו. המסמך מוצג לצפייה בלבד.":"Below is the original engineering-operational investigation document of the process failure and explosion at the Barzan plant, serving as the basis for this application. The document is displayed for viewing only."}</p>
  <div className="cm" style={{padding:0,overflow:"hidden",background:"#525659"}}>
    <object data="/barzan-report.pdf#view=FitH" type="application/pdf" style={{width:"100%",height:"min(80vh,800px)",display:"block",border:"none"}}>
      <div style={{padding:40,textAlign:"center",background:"#fff"}}>
        <p style={{fontSize:14,color:P.steel,marginBottom:16}}>{he?"הדפדפן אינו מציג PDF מוטמע.":"Your browser cannot display embedded PDFs."}</p>
        <a href="/barzan-report.pdf" target="_blank" rel="noopener noreferrer" className="ta" style={{display:"inline-block",padding:"12px 24px",borderRadius:8,textDecoration:"none",fontSize:14,fontWeight:700}}>{he?"📄 פתח את המסמך בכרטיסייה חדשה":"📄 Open document in new tab"}</a>
      </div>
    </object>
  </div>
  <div style={{display:"flex",justifyContent:"center",marginTop:14}}>
    <a href="/barzan-report.pdf" target="_blank" rel="noopener noreferrer" className="ti" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 20px",borderRadius:8,textDecoration:"none",fontSize:13,fontWeight:700,color:P.steel}}>{he?"📄 פתח במסך מלא":"📄 Open fullscreen"} ↗</a>
  </div>
</Sec>;}

/* ═══ 13 SOURCES ═══ */
function Sources({lang}:{lang:string}){const he=lang==="he";const sr=[
  {n:"Al Jazeera — Ras Laffan Explosion",c:he?"חדשות":"News"},
  {n:"Middle East Eye — Qatar Gas Hub",c:he?"חדשות":"News"},
  {n:"Euronews — Ras Laffan Energy Site",c:he?"חדשות":"News"},
  {n:"OilPrice / Reuters — Barzan Incident",c:he?"חדשות":"News"},
  {n:"QatarEnergy — Barzan Gas Project",c:he?"רשמי":"Official"},
  {n:"Offshore Technology — Barzan Project",c:he?"תעשייה":"Industry"},
  {n:"Saipem — Barzan Pipeline (sour gas)",c:he?"תעשייה":"Industry"},
  {n:"ATSDR — H₂S Toxicological Profile",c:he?"ממשלתי":"Govt"},
  {n:"EPA — H₂S AEGL Program",c:he?"ממשלתי":"Govt"},
  {n:"DOE — PAC/TEEL Database (Rev 30+)",c:he?"ממשלתי":"Govt"},
  {n:"NIOSH/CDC — H₂S Pocket Guide & IDLH",c:he?"ממשלתי":"Govt"},
  {n:"OSHA — H₂S Evaluating & Controlling",c:he?"ממשלתי":"Govt"},
  {n:"CCPS — VCE/BLEVE/Flash Fire Guidelines",c:he?"אקדמי":"Academic"},
  {n:"Mannan — Buncefield Lessons (Wiley)",c:he?"אקדמי":"Academic"},
  {n:"Chiyoda / Axens — Sulfur Recovery (Claus)",c:he?"תעשייה":"Industry"},
];const cc:Record<string,[string,string]>={[he?"ממשלתי":"Govt"]:[P.greenS,P.green],[he?"חדשות":"News"]:[P.redS,P.red],[he?"תעשייה":"Industry"]:[P.blueS,P.blue],[he?"אקדמי":"Academic"]:[P.purpleS,P.purple],[he?"רשמי":"Official"]:[P.amberS,P.amber]};return<Sec id="sources" num="13" title={he?"מקורות":"Sources"} subtitle={he?"מבוסס על מקורות פתוחים בלבד":"Based on open sources only"} dark>{sr.map((s,i)=>{const[bg,c]=cc[s.c]||[P.cream,P.muted];return<div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:`1px solid ${P.border}30`}}><span style={{color:P.gold}}>🔗</span><span style={{flex:1,fontSize:13,color:P.steel}}>{s.n}</span><span style={{fontSize:9,fontWeight:700,padding:"2px 8px",borderRadius:3,background:bg,color:c}}>{s.c}</span></div>;})}
  <p style={{fontSize:10,color:P.muted,marginTop:16,lineHeight:1.6}}>{he?"⚠️ אירוע חי ומתפתח. נתוני נפגעים, ממצאי תחקיר ופרטים טכניים עשויים להתעדכן. ערכי הרעילות (PAC/AEGL) מבוססים על מסדי הנתונים הרשמיים של EPA, ATSDR ו-DOE.":"⚠️ Live, evolving event. Casualty figures, investigation findings and technical details may update. Toxicity values (PAC/AEGL) are based on the official EPA, ATSDR and DOE databases."}</p>
</Sec>;}

/* ═══ VIEW COUNTER ═══ */
function ViewCounter({lang}:{lang:string}){const he=lang==="he";const[v,setV]=useState<number|null>(null);useEffect(()=>{fetch('https://api.counterapi.dev/v1/barzan-gas-60sec/visits/up',{cache:'no-store'}).then(r=>r.json()).then(d=>setV(d.count||0)).catch(()=>{});},[]);if(v===null)return null;return<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:10}}><span style={{fontSize:11,color:`#ffffff60`}}>👁️</span><span className="mn" style={{fontSize:12,fontWeight:700,color:P.gold}}>{v.toLocaleString()}</span><span style={{fontSize:10,color:`#ffffff50`}}>{he?"צפיות":"views"}</span></div>;}

/* ═══ FOOTER ═══ */
function Footer({lang}:{lang:string}){const he=lang==="he";const URL="https://barzan-gas-explosion.vercel.app";const title=he?"60 שניות חומ\u05B4ס — אסון הגז בברזאן":"60 Seconds HazMat — The Barzan Gas Disaster";return<footer style={{borderTop:`1px solid ${P.gold}40`,padding:"36px 20px",background:P.ink,textAlign:"center"}}>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:10}}><img src="/images/logo-60sec.png" alt="" style={{width:32,height:32,borderRadius:6}}/><span style={{fontSize:14,fontWeight:700,color:P.gold}}>{he?"60 שניות של חומ״ס":"60 Seconds HazMat"}</span></div>
  <p style={{fontSize:13,color:`${P.white}cc`,marginBottom:10}}><b style={{color:P.white}}>{he?"רועי צוקרמן":"Roie Zukerman"}</b> — {he?"מומחה לחומ״ס וטב״ק":"HazMat & CBRN Expert"}</p>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:14,flexWrap:"wrap"}}><a href="mailto:roiez1@gmail.com" style={{fontSize:12,color:P.gold,textDecoration:"none"}}>✉️ roiez1@gmail.com</a><a href="https://chat.whatsapp.com/K4NzcZucmimKYFOXE3VVtD?mode=gi_t" target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontWeight:700,color:"#22c55e",background:"rgba(34,197,94,0.1)",padding:"5px 14px",borderRadius:6,textDecoration:"none",border:"1px solid rgba(34,197,94,0.25)"}}>💬 WhatsApp</a></div>
  {/* Share buttons */}
  <div style={{display:"flex",justifyContent:"center",gap:8,marginBottom:14,flexWrap:"wrap"}}>
    <button onClick={()=>window.open('https://wa.me/?text='+encodeURIComponent(title+'\n'+URL),'_blank')} style={{padding:"8px 16px",borderRadius:8,border:"none",background:"#22c55e",color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer"}}>{he?"💬 שתף בוואטסאפ":"💬 Share WhatsApp"}</button>
    <button onClick={()=>window.open('https://t.me/share/url?url='+encodeURIComponent(URL)+'&text='+encodeURIComponent(title),'_blank')} style={{padding:"8px 16px",borderRadius:8,border:"none",background:"#0088cc",color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer"}}>{he?"✈️ טלגרם":"✈️ Telegram"}</button>
    <button onClick={()=>navigator.clipboard.writeText(URL)} style={{padding:"8px 16px",borderRadius:8,border:`1px solid ${P.gold}40`,background:`${P.gold}1a`,color:P.gold,fontSize:12,fontWeight:700,cursor:"pointer"}}>{he?"🔗 העתק קישור":"🔗 Copy Link"}</button>
  </div>
  <div style={{height:1,maxWidth:300,margin:"0 auto 12px",background:`linear-gradient(90deg,transparent,${P.gold}60,transparent)`}}/>
  <ViewCounter lang={lang}/>
  <p style={{fontSize:10,color:`${P.white}90`,marginBottom:8}}>{he?"מקורות פתוחים בלבד | לא מסווג":"Open sources only | Unclassified"} | {he?"יוני 2026":"June 2026"}</p>
  <div style={{maxWidth:400,margin:"0 auto",padding:"12px 16px",background:`${P.white}08`,borderRadius:8,border:`1px solid ${P.white}15`}}>
    <p style={{fontSize:10,color:P.gold,fontWeight:700,marginBottom:4}}>© 2026 {he?"רועי צוקרמן — מומחה לחומ״ס וטב״ק":"Roie Zukerman — HazMat & CBRN Expert"}</p>
    <p style={{fontSize:9,color:`${P.white}80`,lineHeight:1.6}}>{he?"כל הזכויות שמורות. מבוסס על מקורות פתוחים בלבד. למטרות מקצועיות והדרכתיות. אין להשתמש ללא אישור בכתב.":"All rights reserved. Open sources only. Professional & educational use. Written permission required."}</p>
  </div>
</footer>;}

/* ═══ MAIN ═══ */
export default function Home(){const[lang,setLang]=useState(()=>{if(typeof window!=="undefined"){const p=new URLSearchParams(window.location.search).get("lang");if(p==="en"||p==="he")return p;}return"he";});return<div dir={lang==="he"?"rtl":"ltr"} className="has-btab"><ProgressBar/><Nav lang={lang} toggle={()=>setLang(l=>l==="he"?"en":"he")}/><Hero lang={lang}/><Summary lang={lang}/><Plant lang={lang}/><Process lang={lang}/><Timeline lang={lang}/><RootCause lang={lang}/><VCESim lang={lang}/><Plume lang={lang}/><Hazards lang={lang}/><Response lang={lang}/><Geo lang={lang}/><Lessons lang={lang}/><DocViewer lang={lang}/><Sources lang={lang}/><Footer lang={lang}/><BottomTabs lang={lang}/></div>;}
