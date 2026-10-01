const schemas={
baptism:["ΒΑΠΤΙΣΗ",[["ΣΤΟΙΧΕΙΑ ΠΑΙΔΙΟΥ",[ "Όνομα παιδιού","Όνομα Πατέρα","Επίθετο Πατέρα","Όνομα Μητέρας","Επίθετο Μητέρας","Τηλέφωνο επικοινωνίας","Email ζευγαριού"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΒΑΠΤΙΣΗΣ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Εκκλησία","Περιοχή","GPS Εκκλησίας"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €","Εξοφλήθηκε ΝΑΙ ΟΧΙ"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]],
weddingBaptism:["ΓΑΜΟΣ & ΒΑΠΤΙΣΗ",[["ΣΤΟΙΧΕΙΑ ΖΕΥΓΑΡΙΟΥ",["Όνομα παιδιού","Όνομα Γαμπρού","Επίθετο Γαμπρού","Όνομα Νύφης","Επίθετο Νύφης","Τηλέφωνο επικοινωνίας","Email ζευγαριού","Περιοχή / Διεύθυνση","Προετοιμασία Νύφης □","Φωτογραφία Νύφης □","Βίντεο Νύφης □","GPS σπιτιού Νύφης","Προετοιμασία Γαμπρού □","Φωτογραφία Γαμπρού □","Βίντεο Γαμπρού □","GPS σπιτιού Γαμπρού"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΓΑΜΟΥ & ΒΑΠΤΙΣΗΣ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Εκκλησία","Περιοχή","GPS Εκκλησίας","Δεξίωση ΝΑΙ ΟΧΙ","Κέντρο Δεξίωσης","GPS Δεξίωσης"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €","Εξοφλήθηκε ΝΑΙ ΟΧΙ"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]],
civilWedding:["ΠΟΛΙΤΙΚΟΣ ΓΑΜΟΣ",[["ΣΤΟΙΧΕΙΑ ΖΕΥΓΑΡΙΟΥ",["Όνομα Γαμπρού","Επίθετο Γαμπρού","Όνομα Νύφης","Επίθετο Νύφης","Τηλέφωνο επικοινωνίας","Email ζευγαριού","Περιοχή / Διεύθυνση"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΠΟΛΙΤΙΚΟΥ ΓΑΜΟΥ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Δημαρχείο","GPS Δημαρχείου","Περιοχή"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €","Εξοφλήθηκε ΝΑΙ ΟΧΙ"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]],
wedding:["ΓΑΜΟΣ",[["ΣΤΟΙΧΕΙΑ ΖΕΥΓΑΡΙΟΥ",["Όνομα Γαμπρού","Επίθετο Γαμπρού","Όνομα Νύφης","Επίθετο Νύφης","Τηλέφωνο επικοινωνίας","Email ζευγαριού","Περιοχή / Διεύθυνση","Προετοιμασία Νύφης □","Φωτογραφία Νύφης □","Βίντεο Νύφης □","GPS σπιτιού Νύφης","Προετοιμασία Γαμπρού □","Φωτογραφία Γαμπρού □","Βίντεο Γαμπρού □","GPS σπιτιού Γαμπρού"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΓΑΜΟΥ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Εκκλησία","Περιοχή","GPS Εκκλησίας","Δεξίωση ΝΑΙ ΟΧΙ","Κέντρο Δεξίωσης","GPS Δεξίωσης"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €","Εξοφλήθηκε ΝΑΙ ΟΧΙ"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]]
};
const KEY="gamos_ala_ellinika_v3",DAYKEY="gamos_daily_schedule_v2";
let data=JSON.parse(localStorage.getItem(KEY)||"[]"); if(!Array.isArray(data))data=[];
const old=JSON.parse(localStorage.getItem("gamos_ala_ellinika_v2")||"[]"); if(!data.length&&Array.isArray(old))data=old;
let daily=JSON.parse(localStorage.getItem(DAYKEY)||"{}"); if(!daily||typeof daily!=="object")daily={};
let month=new Date(new Date().getFullYear(),new Date().getMonth(),1);
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
function save(){localStorage.setItem(KEY,JSON.stringify(data));localStorage.removeItem("gamos_ala_ellinika_v2")}
function show(id){document.querySelectorAll(".view").forEach(x=>x.classList.add("hidden"));const el=$(id);if(el)el.classList.remove("hidden");window.scrollTo(0,0)}
function field(q,v=""){
  const low=String(q).toLocaleLowerCase("el");
  if(q.endsWith("□"))return '<div class="field check"><label><input type="checkbox" name="'+esc(q)+'" '+(v==="ΝΑΙ"?"checked":"")+'><span>'+esc(q.replace(" □",""))+'</span></label></div>';
  if(q==="ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"||q==="ΣΗΜΕΙΩΣΕΙΣ")return '<div class="field full"><label>'+q+'</label><textarea name="'+q+'">'+esc(v)+'</textarea></div>';
  if(q==="Δεξίωση ΝΑΙ ΟΧΙ"||q==="Εξοφλήθηκε ΝΑΙ ΟΧΙ")return '<div class="field"><label>'+q+'</label><select name="'+q+'"><option></option><option '+(v==="ΝΑΙ"?"selected":"")+'>ΝΑΙ</option><option '+(v==="ΟΧΙ"?"selected":"")+'>ΟΧΙ</option></select></div>';
  if(low.includes("ημερομηνία"))return '<div class="field"><label>'+esc(q)+'</label><input type="text" class="date-picker" readonly autocomplete="off" name="'+esc(q)+'" value="'+esc(v)+'" placeholder="📅 ΠΑΤΗΣΕ ΓΙΑ ΕΠΙΛΟΓΗ ΗΜΕΡΟΜΗΝΙΑΣ" aria-label="Επιλογή ημερομηνίας" style="cursor:pointer"></div>';
  if(low.includes("ώρα"))return '<div class="field"><label>'+esc(q)+'</label><input type="text" class="time-picker" readonly autocomplete="off" inputmode="none" name="'+esc(q)+'" value="'+esc(v)+'" placeholder="🕐 ΠΑΤΗΣΕ ΓΙΑ ΕΠΙΛΟΓΗ ΩΡΑΣ" aria-label="Επιλογή ώρας" style="cursor:pointer"></div>';
  let t=/email/i.test(q)?"email":/ποσό/i.test(q)?"number":"text";
  return '<div class="field"><label>'+esc(q)+'</label><input type="'+t+'" name="'+esc(q)+'" value="'+esc(v)+'"></div>';
}
function activateDateTimePickers(root){
  const scope=root||document;
  scope.querySelectorAll('input.date-picker').forEach(inp=>{
    if(inp.dataset.pickerBound==="1")return;
    inp.dataset.pickerBound="1";
    inp.readOnly=true;
    inp.setAttribute("autocomplete","off");
    const open=e=>{if(e){e.preventDefault();e.stopPropagation()}openCalendarPicker(inp)};
    inp.addEventListener("pointerdown",open);
    inp.addEventListener("click",open);
    inp.addEventListener("focus",()=>openCalendarPicker(inp));
  });
  scope.querySelectorAll('input.time-picker, input[type="time"]').forEach(inp=>{
    if(inp.dataset.pickerBound==="1")return;
    inp.dataset.pickerBound="1";
    inp.type="text";
    inp.readOnly=true;
    inp.inputMode="none";
    inp.setAttribute("autocomplete","off");
    const open=e=>{if(e){e.preventDefault();e.stopPropagation()}openClock24(inp)};
    inp.addEventListener("pointerdown",open);
    inp.addEventListener("click",open);
    inp.addEventListener("focus",()=>openClock24(inp));
  });
}
function openCalendarPicker(input){
  let ov=document.getElementById("datePickerOverlay");
  if(!ov){
    ov=document.createElement("div");ov.id="datePickerOverlay";ov.className="date-picker-overlay";
    ov.innerHTML='<div class="date-picker-card"><div class="date-picker-head"><button type="button" id="datePrev">‹</button><b id="dateTitle"></b><button type="button" id="dateNext">›</button></div><div class="date-week"><b>ΔΕ</b><b>ΤΡ</b><b>ΤΕ</b><b>ΠΕ</b><b>ΠΑ</b><b>ΣΑ</b><b>ΚΥ</b></div><div id="dateGrid" class="date-grid"></div><button type="button" id="dateToday" class="date-today">ΣΗΜΕΡΑ</button><button type="button" id="dateClose" class="date-close">✓ ΕΠΙΛΟΓΗ</button></div>';
    document.body.appendChild(ov);
    ov.addEventListener("click",e=>{if(e.target===ov)ov.classList.remove("open")});
  }
  let base=input.value?new Date(input.value+"T12:00:00"):new Date();
  if(Number.isNaN(base.getTime()))base=new Date();
  ov.dataset.year=base.getFullYear();ov.dataset.month=base.getMonth();ov.dataset.inputId="";
  const render=()=>{
    const y=Number(ov.dataset.year),m=Number(ov.dataset.month);
    ov.querySelector("#dateTitle").textContent=new Intl.DateTimeFormat("el-GR",{month:"long",year:"numeric"}).format(new Date(y,m,1)).toUpperCase();
    const grid=ov.querySelector("#dateGrid");grid.innerHTML="";
    const first=(new Date(y,m,1).getDay()+6)%7,days=new Date(y,m+1,0).getDate();
    for(let i=0;i<first;i++)grid.appendChild(document.createElement("span"));
    for(let d=1;d<=days;d++){
      const b=document.createElement("button");b.type="button";b.textContent=d;
      const iso=y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0");
      if(input.value===iso)b.className="selected";
      b.onclick=()=>{input.value=iso;ov.classList.remove("open");input.dispatchEvent(new Event("change",{bubbles:true}))};
      grid.appendChild(b);
    }
  };
  ov.querySelector("#datePrev").onclick=()=>{let m=Number(ov.dataset.month)-1,y=Number(ov.dataset.year);if(m<0){m=11;y--}ov.dataset.month=m;ov.dataset.year=y;render()};
  ov.querySelector("#dateNext").onclick=()=>{let m=Number(ov.dataset.month)+1,y=Number(ov.dataset.year);if(m>11){m=0;y++}ov.dataset.month=m;ov.dataset.year=y;render()};
  ov.querySelector("#dateToday").onclick=()=>{const d=new Date();input.value=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");ov.classList.remove("open");input.dispatchEvent(new Event("change",{bubbles:true}))};
  ov.querySelector("#dateClose").onclick=()=>ov.classList.remove("open");
  render();ov.classList.add("open");
}
function openClock24(input){
  let ov=document.getElementById("clock24Overlay");
  if(!ov){
    ov=document.createElement("div");ov.id="clock24Overlay";ov.className="clock24-overlay";
    ov.innerHTML='<div class="clock24-card"><div class="clock24-title">🕐 ΕΠΙΛΟΓΗ ΩΡΑΣ</div><div id="clock24Value" class="clock24-value">00:00</div><div id="clock24Face" class="clock24-face"></div><div id="clock24Minutes" class="clock24-minutes"><button data-m="00">00</button><button data-m="01">01</button><button data-m="02">02</button><button data-m="03">03</button><button data-m="04">04</button><button data-m="05">05</button><button data-m="06">06</button><button data-m="07">07</button><button data-m="08">08</button><button data-m="09">09</button><button data-m="10">10</button><button data-m="11">11</button><button data-m="12">12</button><button data-m="13">13</button><button data-m="14">14</button><button data-m="15">15</button><button data-m="16">16</button><button data-m="17">17</button><button data-m="18">18</button><button data-m="19">19</button><button data-m="20">20</button><button data-m="21">21</button><button data-m="22">22</button><button data-m="23">23</button><button data-m="24">24</button><button data-m="25">25</button><button data-m="26">26</button><button data-m="27">27</button><button data-m="28">28</button><button data-m="29">29</button><button data-m="30">30</button><button data-m="31">31</button><button data-m="32">32</button><button data-m="33">33</button><button data-m="34">34</button><button data-m="35">35</button><button data-m="36">36</button><button data-m="37">37</button><button data-m="38">38</button><button data-m="39">39</button><button data-m="40">40</button><button data-m="41">41</button><button data-m="42">42</button><button data-m="43">43</button><button data-m="44">44</button><button data-m="45">45</button><button data-m="46">46</button><button data-m="47">47</button><button data-m="48">48</button><button data-m="49">49</button><button data-m="50">50</button><button data-m="51">51</button><button data-m="52">52</button><button data-m="53">53</button><button data-m="54">54</button><button data-m="55">55</button><button data-m="56">56</button><button data-m="57">57</button><button data-m="58">58</button><button data-m="59">59</button></div><button id="clock24Close" class="clock24-close">✓ ΕΠΙΛΟΓΗ</button></div>';
    document.body.appendChild(ov);
    ov.addEventListener("click",e=>{if(e.target===ov)ov.classList.remove("open")});
    ov.querySelector("#clock24Close").onclick=()=>ov.classList.remove("open");
    ov.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{const h=ov.dataset.hour||"00";input.value=h+":"+b.dataset.m;ov.querySelector("#clock24Value").textContent=input.value});
  }
  ov.dataset.inputId="clockTarget";
  ov.dataset.hour=input.value?input.value.slice(0,2):"00";
  const val=input.value||"00:00";ov.querySelector("#clock24Value").textContent=val;
  const face=ov.querySelector("#clock24Face");face.innerHTML="";
  for(let h=0;h<24;h++){
    const b=document.createElement("button");b.type="button";b.className="clock24-hour";
    const angle=(h/24)*360-90; b.style.setProperty("--a",angle+"deg");
    b.textContent=String(h).padStart(2,"0");
    b.onclick=()=>{ov.dataset.hour=String(h).padStart(2,"0");ov.querySelector("#clock24Value").textContent=ov.dataset.hour+":00";input.value=ov.dataset.hour+":00"};
    face.appendChild(b);
  }
  ov.classList.add("open");
}
if(!document.getElementById("datePickerStyle")){
  const st=document.createElement("style");st.id="datePickerStyle";st.textContent=`
.date-picker-overlay{position:fixed;inset:0;background:rgba(0,0,0,.48);display:none;align-items:center;justify-content:center;z-index:100000;padding:18px}
.date-picker-overlay.open{display:flex}.date-picker-card{width:min(94vw,430px);background:#fff;border-radius:24px;padding:18px;box-shadow:0 18px 60px rgba(0,0,0,.3);text-align:center}
.date-picker-head{display:grid;grid-template-columns:48px 1fr 48px;align-items:center;font-size:19px;margin-bottom:12px}.date-picker-head button{border:0;background:#eef4f0;border-radius:12px;font-size:30px;height:46px}.date-week,.date-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}.date-week{margin-bottom:6px;font-size:12px}.date-grid button{height:42px;border:0;border-radius:10px;background:#f4f6f4;font-size:16px;font-weight:700}.date-grid button.selected{background:#35574d;color:#fff}.date-today,.date-close{width:100%;border:0;border-radius:12px;padding:12px;margin-top:12px;font-weight:800;font-size:16px}.date-today{background:#eef4f0}.date-close{background:#dcebe2}
`;document.head.appendChild(st);
}
if(!document.getElementById("clock24Style")){
  const st=document.createElement("style");st.id="clock24Style";st.textContent=`
.clock24-overlay{position:fixed;inset:0;background:rgba(0,0,0,.48);display:none;align-items:center;justify-content:center;z-index:99999;padding:18px}
.clock24-overlay.open{display:flex}.clock24-card{width:min(94vw,430px);background:#fff;border-radius:24px;padding:20px;box-shadow:0 18px 60px rgba(0,0,0,.3);text-align:center}
.clock24-title{font-size:20px;font-weight:800}.clock24-value{font-size:34px;font-weight:900;margin:8px 0 10px}
.clock24-face{width:min(82vw,330px);height:min(82vw,330px);max-height:330px;max-width:330px;margin:auto;border-radius:50%;position:relative;background:#f4f7f5;border:5px solid #d9e4dd}
.clock24-hour{position:absolute;left:50%;top:50%;width:42px;height:42px;border-radius:50%;border:0;background:#fff;font-weight:800;transform:translate(-50%,-50%) rotate(var(--a)) translateY(-135px) rotate(calc(-1 * var(--a)));box-shadow:0 2px 7px rgba(0,0,0,.15)}
.clock24-hour:active{transform:translate(-50%,-50%) rotate(var(--a)) translateY(-135px) rotate(calc(-1 * var(--a))) scale(.92)}
.clock24-minutes{display:grid;grid-template-columns:repeat(10,1fr);gap:6px;margin:14px 0;max-height:150px;overflow:auto;padding:2px}.clock24-minutes button,.clock24-close{border:0;border-radius:9px;padding:8px 4px;font-weight:800;background:#eef4f0}.clock24-minutes button:active{transform:scale(.94)}
.clock24-close{width:100%;font-size:17px;background:#dcebe2}
`;document.head.appendChild(st);
}
function form(type,item){const [title,sections]=schemas[type];const f=item?.fields||{};let h='<h2>'+title+'</h2><form id="mform">';sections.forEach(([s,fs])=>{h+='<div class="form-section"><h3>'+s+'</h3><div class="fields">'+fs.map(q=>field(q,f[q])).join("")+'</div></div>'});h+='<button class="primary" type="submit">💾 ΑΠΟΘΗΚΕΥΣΗ</button></form>';$("formMount").innerHTML=h;show("formView");activateDateTimePickers($("formMount"));$("mform").onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),fields={};fd.forEach((v,k)=>fields[k]=v);e.target.querySelectorAll('input[type="checkbox"]').forEach(c=>fields[c.name]=c.checked?"ΝΑΙ":"ΟΧΙ");if(!fields["Ημερομηνία μυστήριου"]){alert("Συμπλήρωσε την ημερομηνία του μυστηρίου.");return}
const x={id:item?.id||Date.now().toString(36)+Math.random().toString(36).slice(2),type,date:fields["Ημερομηνία μυστήριου"],fields};
const sameMystery=data.find(a=>String(a.id)!==String(x.id)&&a.date===x.date&&a.fields&&a.fields["Ώρα Μυστήριου"]===x.fields["Ώρα Μυστήριου"]&&x.fields["Ώρα Μυστήριου"]);
if(sameMystery)alert("⚠️ ΠΡΟΣΟΧΗ: Η ημερομηνία και ώρα είναι ήδη κρατημένες για άλλο μυστήριο.\n\nΗ νέα καταχώριση θα αποθηκευτεί κανονικά και θα εμφανιστεί επίσης στο Ημερήσιο Ημερολόγιο.");
if(item)data=data.map(a=>a.id===item.id?x:a);else data.push(x);save();window.__lastSyncSnapshot="";month=new Date(x.date+"T00:00:00");calendar();renderDaily();show("calendarView");if(typeof syncPush==="function")syncPush()}}
function eventTitle(x){const f=x.fields;if(x.type==="baptism")return "🕊️ "+(f["Όνομα παιδιού"]||"Βάπτιση");if(x.type==="weddingBaptism")return "💍🕊️ "+[f["Όνομα Γαμπρού"],f["Όνομα Νύφης"]].filter(Boolean).join(" & ")||"Γάμος & Βάπτιση";return (x.type==="civilWedding"?"🏛️ ":"💍 ")+[f["Όνομα Γαμπρού"],f["Όνομα Νύφης"]].filter(Boolean).join(" & ")||schemas[x.type][0]}
function calendar(){const y=month.getFullYear(),m=month.getMonth();$("monthTitle").textContent=new Intl.DateTimeFormat("el-GR",{month:"long",year:"numeric"}).format(month).toUpperCase();const g=$("calendar");g.innerHTML="";const first=(new Date(y,m,1).getDay()+6)%7,days=new Date(y,m+1,0).getDate();for(let i=0;i<first;i++)g.appendChild(document.createElement("div"));for(let d=1;d<=days;d++){const c=document.createElement("div");c.className="day";c.innerHTML="<b>"+d+"</b>";data.filter(x=>{const z=new Date(x.date+"T00:00:00");return z.getFullYear()===y&&z.getMonth()===m&&z.getDate()===d}).forEach(x=>{const b=document.createElement("button");b.className="event";b.type="button";b.textContent=eventTitle(x);b.onclick=()=>detail(x);c.appendChild(b)});g.appendChild(c)}}
function detail(x){let h="<h2>"+schemas[x.type][0]+"</h2>";schemas[x.type][1].forEach(([s,fs])=>{h+='<div class="form-section"><h3>'+s+'</h3><div class="detail-grid">'+fs.map(q=>'<div class="detail"><b>'+q+'</b><br>'+esc(x.fields[q]||"—").replace(/\\n/g,"<br>")+'</div>').join("")+"</div></div>"});h+='<button class="primary" id="editBtn">✏️ ΕΠΕΞΕΡΓΑΣΙΑ</button><button class="danger" id="deleteBtn">🗑️ ΔΙΑΓΡΑΦΗ</button>';$("detailMount").innerHTML=h;show("detailView");$("editBtn").onclick=()=>form(x.type,x);$("deleteBtn").onclick=()=>{const ok=window.confirm("Να διαγραφεί οριστικά αυτό το μυστήριο;");if(!ok)return;const before=data.length;data=data.filter(a=>String(a.id)!==String(x.id));if(data.length===before){const legacy=JSON.parse(localStorage.getItem("gamos_ala_ellinika_v2")||"[]");data=Array.isArray(legacy)?legacy.filter(a=>String(a.id)!==String(x.id)):data}localStorage.setItem(KEY,JSON.stringify(data));localStorage.removeItem("gamos_ala_ellinika_v2");calendar();renderDaily();show("calendarView");setTimeout(()=>alert("Το μυστήριο διαγράφηκε."),50)}}
function dailyAddSection(rows,title,items,getLabel){
  if(!items.length)return;
  const box=document.createElement("div");box.className="daily-events";
  const h=document.createElement("h3");h.textContent=title;box.appendChild(h);
  items.forEach(x=>{
    const b=document.createElement("button");b.type="button";b.className="event";b.textContent=getLabel(x);
    b.onclick=()=>x._kind==="candidateMystery"?openAppointment("mystery",x._index):x._kind==="candidatePartner"?openAppointment("partner",x._index):x._kind==="mysteryEvent"?detail(x):null;
    box.appendChild(b);
  });
  rows.appendChild(box);
}
function isIsoDate(v){return /^\d{4}-\d{2}-\d{2}$/.test(String(v||""))}
function isTime(v){return /^\d{2}:\d{2}$/.test(String(v||""))}
function findDateTimeDeep(obj){
  let date="",time="";
  const seen=new Set();
  function walk(v){
    if(v==null||date&&time)return;
    if(typeof v==="object"){
      if(seen.has(v))return;seen.add(v);
      if(Array.isArray(v)){v.forEach(walk);return}
      for(const [k,val] of Object.entries(v)){
        if(!date && /ημερομηνία|date/i.test(k) && isIsoDate(val))date=String(val);
        if(!time && /ώρα|time/i.test(k) && isTime(val))time=String(val);
        if(!date||!time)walk(val);
      }
    }
  }
  walk(obj);return {date,time};
}
function dailyTime(x){
  if(!x)return "";
  if(isTime(x.time))return String(x.time);
  return findDateTimeDeep(x).time||"";
}
function dailyDate(x){
  if(!x)return "";
  if(isIsoDate(x.date))return String(x.date);
  return findDateTimeDeep(x).date||"";
}
function calendarEventSourceLabel(key,x){
  if(key===TASKS_KEY)return "📋 "+(x.name||x.category||"Εκκρεμότητα");
  if(key===DELIVERIES_KEY)return "📦 "+(x.name||x.category||"Παράδοση");
  if(key===COLLAB_KEY)return "👥 "+(x.name||x.title||"Συνεργάτης");
  if(key===HAPPY_ORDERS_KEY)return "📦 "+(x.title||x.name||"Παραγγελία");
  if(key===DISKS_KEY)return "💾 "+(x.name||x.category||"Σκληρός δίσκος");
  return "📌 "+(x.name||x.title||x.category||x.type||key);
}
function getCalendarEvents(date){
  const events=[];
  const add=(source,id,d,t,label,action,duration=0)=>{
    if(d!==date||!isTime(t))return;
    events.push({source,id,date:d,time:String(t),duration,label,action});
  };
  data.forEach(x=>{
    const d=dailyDate(x),t=dailyTime(x);
    if(d===date&&t)add("mystery",x.id,d,t,eventTitle(x)+" — "+t,()=>detail(x),0);
  });
  getAppts(APPT_MYSTERY_KEY).forEach((x,i)=>add("appointment-mystery",x.id,x.date,x.time,"📞 "+(x.name||"Ραντεβού Μυστηρίου")+" — "+x.time+(x.mystery?" — "+x.mystery:""),()=>openAppointment("mystery",i),60));
  getAppts(APPT_PARTNER_KEY).forEach((x,i)=>add("appointment-partner",x.id,x.date,x.time,"👥 "+(x.name||"Ραντεβού Συνεργάτη")+" — "+x.time,()=>openAppointment("partner",i),60));

  const explicitKeys=[TASKS_KEY,DELIVERIES_KEY,DISKS_KEY,COLLAB_KEY,HAPPY_ORDERS_KEY];
  for(const key of explicitKeys){
    let raw=null;
    try{raw=JSON.parse(localStorage.getItem(key)||"null")}catch(e){raw=null}
    const list=Array.isArray(raw)?raw:(raw&&typeof raw==="object"?Object.values(raw):[]);
    list.forEach((x,i)=>{
      const d=dailyDate(x),t=dailyTime(x);
      if(d===date&&t)add(key,x.id||i,d,t,calendarEventSourceLabel(key,x)+" — "+t,null,0);
    });
  }

  const handled=new Set([KEY,DAYKEY,APPT_MYSTERY_KEY,APPT_PARTNER_KEY,TASKS_KEY,DELIVERIES_KEY,DISKS_KEY,COLLAB_KEY,HAPPY_ORDERS_KEY,"gamos_sync_token"]);
  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    if(!key||handled.has(key))continue;
    try{
      const raw=JSON.parse(localStorage.getItem(key)||"null");
      const list=Array.isArray(raw)?raw:(raw&&typeof raw==="object"?Object.values(raw):[]);
      list.forEach((x,j)=>{
        const d=dailyDate(x),t=dailyTime(x);
        if(d===date&&t)add(key,x.id||j,d,t,calendarEventSourceLabel(key,x)+" — "+t,null,0);
      });
    }catch(e){}
  }
  return events.sort((a,b)=>(timeToMinutes(a.time)??1440)-(timeToMinutes(b.time)??1440));
}
function renderDaily(){
  const date=$("scheduleDate").value,rows=$("scheduleRows");
  rows.innerHTML="";
  const events=getCalendarEvents(date);
  for(let h=0;h<=23;h++){
    const hour=String(h).padStart(2,"0")+":00";
    const r=document.createElement("div");
    r.className="schedule-row";
    r.innerHTML='<span>'+hour+'</span><div class="schedule-cell"><div class="schedule-events"></div><input type="text" autocomplete="off" placeholder="Γράψε εδώ για τις '+hour+'..."></div>';
    const box=r.querySelector(".schedule-events");
    events.filter(e=>{const tm=timeToMinutes(e.time);return tm!==null&&tm>=h*60&&tm<h*60+60}).forEach(e=>{
      const b=document.createElement("button");
      b.type="button";b.className="event daily-event";
      b.textContent=e.duration?e.label+" ("+e.time+"–"+String(Math.floor((timeToMinutes(e.time)+e.duration)/60)).padStart(2,"0")+":"+String((timeToMinutes(e.time)+e.duration)%60).padStart(2,"0")+")":e.label;
      b.onclick=()=>{if(e.action)e.action()};
      box.appendChild(b);
    });
    const input=r.querySelector("input");
    input.value=(daily[date]||{})[hour]||"";
    const persist=async()=>{
      daily[date]=daily[date]||{};
      daily[date][hour]=input.value;
      localStorage.setItem(DAYKEY,JSON.stringify(daily));
      window.__lastSyncSnapshot="";
      if(typeof syncPush==="function")await syncPush();
    };
    input.addEventListener("input",persist);
    input.addEventListener("change",persist);
    rows.appendChild(r);
  }
}
function init(){
  $("newBtn").onclick=()=>show("typeView");
  $("calendarBtn").onclick=()=>{calendar();show("calendarView")};
  $("menuBtn").onclick=()=>$("sideMenu").classList.remove("hidden");
  $("closeMenu").onclick=()=>$("sideMenu").classList.add("hidden");
  $("mysteriesBtn").onclick=()=>{$("sideMenu").classList.add("hidden");show("typeView")};
  document.querySelectorAll(".type-card").forEach(b=>b.onclick=()=>form(b.dataset.type));
  $("collaboratorsBtn").onclick=()=>{$("sideMenu").classList.add("hidden");collaborators()};
  $("happyBoxBtn").onclick=()=>{$("sideMenu").classList.add("hidden");happyBox()};
  $("appointmentsBtn").onclick=()=>{$("sideMenu").classList.add("hidden");appointments()};
  document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show(b.dataset.back));
  $("prevMonth").onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()-1,1);calendar()};
  $("nextMonth").onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()+1,1);calendar()};
  const now=new Date();
  $("scheduleDate").classList.add("date-picker");
  $("scheduleDate").readOnly=true;
  $("scheduleDate").value=new Date(now-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
  activateDateTimePickers(document);
  $("scheduleDate").onchange=renderDaily;
  renderDaily();
  calendar();
}
window.show=show;window.form=form;window.calendar=calendar;window.detail=detail;

/* ΣΥΝΕΡΓΑΤΕΣ — κενή σελίδα με ελεύθερους φακέλους */
const COLLAB_KEY="gamos_collaborators_v1";
function collaborators(){
  const folders=JSON.parse(localStorage.getItem(COLLAB_KEY)||"[]");
  let h='<button class="back" id="collabBack">← ΜΕΝΟΥ</button><h2>👥 ΣΥΝΕΡΓΑΤΕΣ</h2>';
  h+='<div class="collab-empty"><p>Η σελίδα είναι άδεια.</p><p>Πάτησε <b>＋ ΝΕΟΣ ΦΑΚΕΛΟΣ</b> και γράψε ό,τι θέλεις.</p></div>';
  h+='<button class="primary big" id="newCollaboratorFolder">＋ ΝΕΟΣ ΦΑΚΕΛΟΣ</button>';
  h+='<div id="collabFolders" class="collab-folders"></div>';
  $("detailMount").innerHTML=h;
  show("detailView");
  $("collabBack").onclick=()=>{show("homeView");$("sideMenu").classList.remove("hidden")};
  $("newCollaboratorFolder").onclick=()=>newCollaboratorFolder();
  renderCollaboratorFolders(folders);
}
function renderCollaboratorFolders(folders){
  const box=$("collabFolders"); if(!box)return;
  box.innerHTML="";
  folders.forEach((folder,i)=>{
    const b=document.createElement("button"); b.type="button"; b.className="collab-folder";
    b.textContent="📁 "+folder.name; b.onclick=()=>openCollaboratorFolder(i);
    box.appendChild(b);
  });
}
function newCollaboratorFolder(){
  $("detailMount").innerHTML='<button class="back" id="newFolderBack">← ΣΥΝΕΡΓΑΤΕΣ</button><h2>📁 ΝΕΟΣ ΦΑΚΕΛΟΣ</h2><div class="collab-editor"><label class="collab-label">ΟΝΟΜΑ ΦΑΚΕΛΟΥ</label><input id="newFolderName" class="collab-name" type="text" placeholder="Γράψε το όνομα του φακέλου..."></div><button class="primary" id="saveNewFolder">＋ ΔΗΜΙΟΥΡΓΙΑ ΦΑΚΕΛΟΥ</button>';
  show("detailView");
  $("newFolderBack").onclick=()=>collaborators();
  $("saveNewFolder").onclick=()=>{
    const name=$("newFolderName").value.trim();
    if(!name){alert("Γράψε το όνομα του φακέλου.");return}
    const folders=JSON.parse(localStorage.getItem(COLLAB_KEY)||"[]");
    const folder={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name,notes:""};
    folders.push(folder);
    localStorage.setItem(COLLAB_KEY,JSON.stringify(folders));
    openCollaboratorFolder(folders.length-1);
  };
  $("newFolderName").focus();
}
function openCollaboratorFolder(i){
  const folders=JSON.parse(localStorage.getItem(COLLAB_KEY)||"[]"), f=folders[i]; if(!f)return;
  $("detailMount").innerHTML='<button class="back" id="folderBack">← ΣΥΝΕΡΓΑΤΕΣ</button><h2>📁 '+esc(f.name)+'</h2><div class="collab-editor"><textarea id="collabNotes" placeholder="Γράψε εδώ ό,τι θέλεις...">'+esc(f.notes||"")+'</textarea></div><button class="primary" id="saveCollabFolder">💾 ΑΠΟΘΗΚΕΥΣΗ</button><button class="danger" id="deleteCollabFolder">🗑️ ΔΙΑΓΡΑΦΗ ΦΑΚΕΛΟΥ</button>';
  show("detailView");
  $("folderBack").onclick=()=>collaborators();
  $("saveCollabFolder").onclick=()=>{folders[i].notes=$("collabNotes").value;localStorage.setItem(COLLAB_KEY,JSON.stringify(folders));window.__lastSyncSnapshot="";if(typeof syncPush==="function")syncPush();};
  $("deleteCollabFolder").onclick=()=>{if(confirm("Να διαγραφεί οριστικά ο φάκελος;")){folders.splice(i,1);localStorage.setItem(COLLAB_KEY,JSON.stringify(folders));collaborators()}};
}
window.collaborators=collaborators;
const HAPPY_KEY="gamos_happy_box_v1";
const HAPPY_ORDERS_KEY="gamos_happy_orders_v2";
function getHappyOrders(){const x=JSON.parse(localStorage.getItem(HAPPY_ORDERS_KEY)||"[]");return Array.isArray(x)?x:[]}
function saveHappyOrders(x){localStorage.setItem(HAPPY_ORDERS_KEY,JSON.stringify(x))}
function happyBox(){
  let h='<button class="back" id="happyBack">← ΜΕΝΟΥ</button><h2>🎁 HAPPY BOX</h2>';
  h+='<button class="primary big" id="newDeliveryOrder">＋ ΠΑΡΑΓΓΕΛΙΑ ΓΙΑ ΠΑΡΑΔΟΣΗ</button>';
  const orders=getHappyOrders();
  if(orders.length) h+='<div class="folder-list">'+orders.map((o,i)=>'<button type="button" class="menu-item happy-order" data-i="'+i+'">📦 '+esc(o.title)+'</button>').join("")+'</div>';
  else h+='<p class="empty-state">Δεν υπάρχουν ακόμη παραγγελίες.</p>';
  $("detailMount").innerHTML=h; show("detailView");
  $("happyBack").onclick=()=>show("homeView");
  $("newDeliveryOrder").onclick=()=>newHappyOrder();
  document.querySelectorAll(".happy-order").forEach(b=>b.onclick=()=>openHappyOrder(Number(b.dataset.i)));
}
function newHappyOrder(){
  $("detailMount").innerHTML='<button class="back" id="happyOrderBack">← HAPPY BOX</button><h2>＋ ΠΑΡΑΓΓΕΛΙΑ ΓΙΑ ΠΑΡΑΔΟΣΗ</h2><div class="collab-editor"><label class="collab-label">ΟΝΟΜΑ / ΤΙΤΛΟΣ ΠΑΡΑΓΓΕΛΙΑΣ</label><input id="happyOrderTitle" class="collab-name" type="text" placeholder="π.χ. Μαρία Παπαδοπούλου"><label class="collab-label">ΣΤΟΙΧΕΙΑ ΠΑΡΑΓΓΕΛΙΑΣ</label><textarea id="happyOrderNotes" placeholder="Γράψε εδώ ό,τι θέλεις και όσα θέλεις..."></textarea></div><button class="primary" id="saveHappyOrder">💾 ΑΠΟΘΗΚΕΥΣΗ</button>';
  show("detailView"); $("happyOrderBack").onclick=()=>happyBox();
  $("saveHappyOrder").onclick=()=>{const title=$("happyOrderTitle").value.trim();if(!title){alert("Γράψε ένα όνομα/τίτλο για την παραγγελία.");return}const x=getHappyOrders();x.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2),title,notes:$("happyOrderNotes").value});saveHappyOrders(x);happyBox()};
}
function openHappyOrder(i){
  const x=getHappyOrders()[i];if(!x)return;
  $("detailMount").innerHTML='<button class="back" id="happyOrderBack">← HAPPY BOX</button><h2>📦 '+esc(x.title)+'</h2><div class="collab-editor"><textarea id="happyOrderNotes">'+esc(x.notes||"")+'</textarea></div><button class="primary" id="saveHappyOrder">💾 ΑΠΟΘΗΚΕΥΣΗ</button><button class="danger" id="deleteHappyOrder">🗑️ ΔΙΑΓΡΑΦΗ</button>';
  show("detailView"); $("happyOrderBack").onclick=()=>happyBox();
  $("saveHappyOrder").onclick=()=>{const a=getHappyOrders();a[i].notes=$("happyOrderNotes").value;saveHappyOrders(a);happyBox()};
  $("deleteHappyOrder").onclick=()=>{if(confirm("Να διαγραφεί η παραγγελία;")){const a=getHappyOrders();a.splice(i,1);saveHappyOrders(a);happyBox()}};
}
window.happyBox=happyBox;
function ensureHappyMenu(){
 const menu=document.getElementById("sideMenu"); if(!menu)return;
 const existing=document.getElementById("happyBoxBtn");
 if(existing){
   existing.onclick=()=>{menu.classList.add("hidden");happyBox()};
   existing.removeAttribute("disabled");
   return;
 }
 const b=document.createElement("button"); b.id="happyBoxBtn"; b.className="menu-item"; b.type="button"; b.textContent="🎁 HAPPY BOX"; b.onclick=()=>{menu.classList.add("hidden");happyBox()};
 menu.appendChild(b);
}



/* ΡΑΝΤΕΒΟΥ — υποψήφια μυστήρια & υποψήφιοι συνεργάτες */
const APPT_MYSTERY_KEY="gamos_appointments_mysteries_v1";
const APPT_PARTNER_KEY="gamos_appointments_partners_v1";
function getAppts(key){const x=JSON.parse(localStorage.getItem(key)||"[]");return Array.isArray(x)?x:[]}
function saveAppts(key,x){localStorage.setItem(key,JSON.stringify(x))}
function appointmentFields(kind,item){
  const dateField=(label,value)=>`<div class="field"><label>${label}</label><input type="hidden" name="${label}" value="${esc(value||"")}" data-picker-value><button type="button" class="appointment-picker appointment-date-trigger" data-picker-kind="date" data-field="${label}">${value?"📅 "+esc(value):"📅 ΕΠΙΛΕΞΕ ΗΜΕΡΟΜΗΝΙΑ"}</button></div>`;
  const timeField=(label,value)=>`<div class="field"><label>${label}</label><input type="hidden" name="${label}" value="${esc(value||"")}" data-picker-value><button type="button" class="appointment-picker appointment-time-trigger" data-picker-kind="time" data-field="${label}">${value?"🕐 "+esc(value):"🕐 ΕΠΙΛΕΞΕ ΩΡΑ"}</button></div>`;
  const mystery=kind==="mystery";
  const f=item||{};
  let h='<button class="back" id="apptListBack">← ΡΑΝΤΕΒΟΥ</button><h2>'+ (mystery?"📁 Ραντεβού μυστήριου":"📁 Ραντεβού για συνεργασία") +'</h2><form id="apptForm">';
  if(mystery){
    h+='<div class="form-section"><div class="fields">';
    h+=field("ΟΝΟΜΑ",f.name)+field("ΤΗΛΕΦΩΝΟ",f.phone)+field("ΜΥΣΤΗΡΙΟ",f.mystery)+dateField("ΗΜΕΡΟΜΗΝΙΑ ΜΥΣΤΗΡΙΟΥ",f.mysteryDate)+dateField("ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ",f.date)+timeField("ΩΡΑ ΡΑΝΤΕΒΟΥ",f.time);
    h+='</div></div>';
  }else{
    h+='<div class="form-section"><div class="fields">';
    h+=field("ΟΝΟΜΑ",f.name)+field("ΤΗΛΕΦΩΝΟ",f.phone);
    h+=field("ΒΙΝΤΕΟ □",f.video)+field("ΦΩΤΟΓΡΑΦΙΑ □",f.photo);
    h+=dateField("ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ",f.date)+timeField("ΩΡΑ ΡΑΝΤΕΒΟΥ",f.time);
    h+='</div></div>';
  }
  h+='<button class="primary" type="submit">💾 ΑΠΟΘΗΚΕΥΣΗ</button></form>';
  $("detailMount").innerHTML=h;show("detailView");
  const appointmentMount=$("detailMount");
  appointmentMount.querySelectorAll(".appointment-picker").forEach(btn=>{
    btn.style.width="100%";
    btn.style.minHeight="48px";
    btn.style.border="1px solid #d8cbb9";
    btn.style.borderRadius="10px";
    btn.style.background="#fff";
    btn.style.fontWeight="700";
    btn.style.cursor="pointer";
    btn.onclick=()=>{
      const hidden=btn.parentElement.querySelector('input[data-picker-value]');
      if(btn.dataset.pickerKind==="date"){
        openCalendarPicker(hidden);
        const sync=()=>{btn.textContent=hidden.value?"📅 "+hidden.value:"📅 ΕΠΙΛΕΞΕ ΗΜΕΡΟΜΗΝΙΑ";hidden.removeEventListener("change",sync)};
        hidden.addEventListener("change",sync);
      }else{
        openClock24(hidden);
        const sync=()=>{btn.textContent=hidden.value?"🕐 "+hidden.value:"🕐 ΕΠΙΛΕΞΕ ΩΡΑ";hidden.removeEventListener("change",sync)};
        hidden.addEventListener("change",sync);
      }
    };
  });
  $("apptListBack").onclick=()=>appointmentFolder(kind);
  $("apptForm").onsubmit=e=>{
    e.preventDefault();const fd=new FormData(e.target);const read=name=>{const el=e.target.querySelector(`[name="${name}"]`);return String(el?el.value:(fd.get(name)||"")).trim()};const x={...(item||{}),id:item?.id||Date.now().toString(36)+Math.random().toString(36).slice(2),name:read("ΟΝΟΜΑ"),phone:read("ΤΗΛΕΦΩΝΟ"),date:read("ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ"),time:read("ΩΡΑ ΡΑΝΤΕΒΟΥ")};
    if(!x.date||!x.time){alert("⚠️ ΕΠΕΛΕΞΕ ΗΜΕΡΟΜΗΝΙΑ ΚΑΙ ΩΡΑ ΡΑΝΤΕΒΟΥ.");return}
    const conflict=appointmentConflict(x,kind);
    if(conflict){
      alert("⚠️ ΥΠΑΡΧΕΙ ΗΔΗ ΔΕΣΜΕΥΜΕΝΟ ΡΑΝΤΕΒΟΥ\n\n"+formatAppt(conflict)+"\n\nΤο ραντεβού διαρκεί 1 ώρα. Δεν έγινε αποθήκευση για να αποφευχθεί διπλοκράτηση.");
      return;
    }
    if(mystery){
      x.mystery=read("ΜΥΣΤΗΡΙΟ");
      x.mysteryDate=read("ΗΜΕΡΟΜΗΝΙΑ ΜΥΣΤΗΡΙΟΥ");
      saveAppts(APPT_MYSTERY_KEY,upsert(getAppts(APPT_MYSTERY_KEY),x));
    } else {
      x.video=fd.get("ΒΙΝΤΕΟ □")==="ΝΑΙ";x.photo=fd.get("ΦΩΤΟΓΡΑΦΙΑ □")==="ΝΑΙ";
      saveAppts(APPT_PARTNER_KEY,upsert(getAppts(APPT_PARTNER_KEY),x));
    }
    appointmentFolder(kind);
    renderDaily();window.__lastSyncSnapshot="";if(typeof syncPush==="function")syncPush();
  };
}
function mysteryConflict(x){
  if(!x.date||!x.fields)return null;
  const time=String(x.fields["Ώρα Μυστήριου"]||"");
  if(!isTime(time))return null;
  return data.find(y=>String(y.id)!==String(x.id)&&y.date===x.date&&y.fields&&String(y.fields["Ώρα Μυστήριου"]||"")===time)||null;
}
function timeToMinutes(t){if(!/^\d{2}:\d{2}$/.test(String(t||"")))return null;const [h,m]=String(t).split(":").map(Number);return h*60+m}
function formatAppt(x){return "📅 "+(x.date||"—")+"  🕐 "+(x.time||"—")+"\n📁 "+(x.name||"Ραντεβού")}
function appointmentConflict(x,kind){
  const start=timeToMinutes(x.time); if(start===null||!x.date)return null;
  const keys=[APPT_MYSTERY_KEY,APPT_PARTNER_KEY];
  for(const key of keys){
    for(const y of getAppts(key)){
      if(String(y.id)===String(x.id) || y.date!==x.date)continue;
      const ys=timeToMinutes(y.time); if(ys===null)continue;
      if(start < ys+60 && start+60 > ys)return y;
    }
  }
  return null;
}
function upsert(a,x){const i=a.findIndex(v=>String(v.id)===String(x.id));if(i>=0)a[i]=x;else a.push(x);return a}
function appointmentFolder(kind){
  const mystery=kind==="mystery",key=mystery?APPT_MYSTERY_KEY:APPT_PARTNER_KEY;
  const title=mystery?"ΥΠΟΨΗΦΙΑ ΜΥΣΤΗΡΙΑ":"ΥΠΟΨΗΦΙΟΙ ΣΥΝΕΡΓΑΤΕΣ",arr=getAppts(key);
  let h='<button class="back" id="appointmentFolderBack">← ΡΑΝΤΕΒΟΥ</button><h2>📁 '+title+'</h2>';
  h+='<button class="primary big" id="newAppointment">＋ ΝΕΟ ΡΑΝΤΕΒΟΥ</button>';
  h+='<p class="empty-state">Κάθε ραντεβού δημιουργεί δικό του φάκελο.</p>';
  if(!arr.length)h+='<p class="empty-state">Δεν υπάρχουν ακόμη ραντεβού.</p>';
  else h+='<div class="folder-list">'+arr.map((x,i)=>'<button type="button" class="menu-item" data-i="'+i+'">📁 '+esc(x.name||"Χωρίς όνομα")+' — '+esc(x.date||"Χωρίς ημερομηνία")+'</button>').join("")+'</div>';
  $("detailMount").innerHTML=h;show("detailView");
  $("appointmentFolderBack").onclick=()=>appointments();
  $("newAppointment").onclick=()=>appointmentFields(kind);
  document.querySelectorAll("#detailMount .menu-item[data-i]").forEach(b=>b.onclick=()=>openAppointment(kind,Number(b.dataset.i)));
}
function openAppointment(kind,i){
  const key=kind==="mystery"?APPT_MYSTERY_KEY:APPT_PARTNER_KEY,arr=getAppts(key),x=arr[i];if(!x)return;
  const mystery=kind==="mystery";
  let h='<button class="back" id="openApptBack">← '+(mystery?"ΥΠΟΨΗΦΙΑ ΜΥΣΤΗΡΙΑ":"ΥΠΟΨΗΦΙΟΙ ΣΥΝΕΡΓΑΤΕΣ")+'</button><h2>📁 '+esc(x.name||"Ραντεβού")+'</h2>';
  h+='<div class="form-section"><div class="detail-grid">';
  const rows=mystery?[["ΟΝΟΜΑ",x.name],["ΤΗΛΕΦΩΝΟ",x.phone],["ΜΥΣΤΗΡΙΟ",x.mystery],["ΗΜΕΡΟΜΗΝΙΑ ΜΥΣΤΗΡΙΟΥ",x.mysteryDate],["ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ",x.date],["ΩΡΑ ΡΑΝΤΕΒΟΥ",x.time]]:[["ΟΝΟΜΑ",x.name],["ΤΗΛΕΦΩΝΟ",x.phone],["ΒΙΝΤΕΟ",x.video?"ΝΑΙ":"ΟΧΙ"],["ΦΩΤΟΓΡΑΦΙΑ",x.photo?"ΝΑΙ":"ΟΧΙ"],["ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ",x.date],["ΩΡΑ ΡΑΝΤΕΒΟΥ",x.time]];
  rows.forEach(r=>h+='<div class="detail"><b>'+r[0]+'</b><br>'+esc(r[1]||"—")+'</div>');
  h+='</div></div><button class="primary" id="editAppointment">✏️ ΕΠΕΞΕΡΓΑΣΙΑ</button><button class="danger" id="deleteAppointment">🗑️ ΔΙΑΓΡΑΦΗ</button>';
  $("detailMount").innerHTML=h;show("detailView");
  $("openApptBack").onclick=()=>appointmentFolder(kind);
  $("editAppointment").onclick=()=>appointmentFields(kind,x);
  $("deleteAppointment").onclick=()=>{if(confirm("Να διαγραφεί οριστικά αυτό το ραντεβού;")){arr.splice(i,1);saveAppts(key,arr);appointmentFolder(kind);renderDaily()}};
}
function appointments(){
  let h='<button class="back" id="appointmentsBack">← ΜΕΝΟΥ</button><h2>📅 ΡΑΝΤΕΒΟΥ</h2>';
  h+='<button class="menu-item appointment-folder" type="button" id="candidateMysteries">＋ ΥΠΟΨΗΦΙΑ ΜΥΣΤΗΡΙΑ</button>';
  h+='<button class="menu-item appointment-folder" type="button" id="candidatePartners">＋ ΥΠΟΨΗΦΙΟΙ ΣΥΝΕΡΓΑΤΕΣ</button>';
  $("detailMount").innerHTML=h;show("detailView");
  $("appointmentsBack").onclick=()=>show("homeView");
  $("candidateMysteries").onclick=()=>appointmentFolder("mystery");
  $("candidatePartners").onclick=()=>appointmentFolder("partner");
}
window.appointments=appointments;
function ensureAppointmentsMenu(){
 const menu=document.getElementById("sideMenu");if(!menu)return;
 let b=document.getElementById("appointmentsBtn");
 if(!b){b=document.createElement("button");b.id="appointmentsBtn";b.className="menu-item";b.type="button";b.textContent="📅 ΡΑΝΤΕΒΟΥ";menu.insertBefore(b,menu.querySelector("#collaboratorsBtn")||null)}
 b.onclick=()=>{menu.classList.add("hidden");appointments()};
}




/* Mystery folder buttons are handled by the existing .type-card bindings in init(). */

/* ΕΞΑΓΩΓΗ PDF σε όλους τους φακέλους και στις καρτέλες */
(function(){
  function addPdfButton(){
    ["detailMount","formMount"].forEach(function(id){
      var mount=document.getElementById(id);
      if(!mount || !mount.innerHTML.trim() || mount.querySelector(".pdf-export"))return;
      var b=document.createElement("button");
      b.type="button";b.className="secondary pdf-export";b.textContent="📄 ΑΠΟΘΗΚΕΥΣΗ ΣΕ PDF";
      b.addEventListener("click",function(){window.print()});
      mount.insertBefore(b,mount.firstChild);
    });
  }
  function setup(){
    addPdfButton();
    var observer=new MutationObserver(addPdfButton);
    ["detailMount","formMount"].forEach(function(id){
      var el=document.getElementById(id);if(el)observer.observe(el,{childList:true,subtree:true});
    });
    var style=document.createElement("style");
    style.textContent="@media print{body{background:#fff!important;color:#000!important}.topbar,.side-menu,.back,.menu-btn,.pdf-export,button.primary,button.secondary,button.danger,.section-head button{display:none!important}.container{max-width:none!important;margin:0!important;padding:0!important}.view{display:none!important}.view:not(.hidden){display:block!important}.form-section,.detail,.collab-editor{break-inside:avoid;page-break-inside:avoid}input,textarea,select{color:#000!important;border:0!important;box-shadow:none!important;background:transparent!important}textarea{white-space:pre-wrap!important}h1,h2,h3{color:#000!important}}";
    document.head.appendChild(style);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setup);else setup();
})();


/* ΕΚΚΡΕΜΟΤΗΤΕΣ / ΠΑΡΑΔΟΣΕΙΣ / ΣΚΛΗΡΟΙ ΔΙΣΚΟΙ */
const TASKS_KEY="gamos_pending_v1", DELIVERIES_KEY="gamos_deliveries_v1", DISKS_KEY="gamos_disks_v1";
const TASK_CATS=["🔴 Επείγοντα","🟠 Αυτή την εβδομάδα","🟡 Αναμονή από πελάτη","📞 Τηλέφωνα","💰 Οικονομικές εκκρεμότητες","📸 Εκκρεμούν φωτογραφίες","🎥 Εκκρεμούν βίντεο","💿 Εκκρεμούν παραδόσεις"];
const DELIVERY_CATS=["📸 Φωτογραφίες","🎥 Βίντεο","💿 USB","📦 Άλμπουμ","🖼️ Εκτυπώσεις","💍 Γάμοι","🕊️ Βαπτίσεις"];
const DISK_CATS=["Σκληρός Δίσκος 1","Σκληρός Δίσκος 2","Backup","Cloud / Online Backup","Τοποθεσία αρχείων","Ελεύθερος χώρος","Ημερομηνία τελευταίου backup"];
function arrKey(k){const x=JSON.parse(localStorage.getItem(k)||"[]");return Array.isArray(x)?x:[]}
function saveArr(k,x){localStorage.setItem(k,JSON.stringify(x))}
function simpleFolders(title,cats,key,kind){
  const arr=arrKey(key);
  let h='<button class="back" id="simpleBack">← ΜΕΝΟΥ</button><h2>'+title+'</h2>';
  h+='<div class="folder-list">'+cats.map((cat,i)=>{
    const count=arr.filter(x=>x.category===cat).length;
    return '<div class="simple-folder-row"><button type="button" class="menu-item" data-i="'+i+'">📁 '+esc(cat)+(count?' ('+count+')':'')+'</button><button type="button" class="primary add-simple" data-i="'+i+'">＋</button></div>';
  }).join("")+'</div>';
  $("detailMount").innerHTML=h;show("detailView");
  $("simpleBack").onclick=()=>show("homeView");
  document.querySelectorAll("#detailMount .menu-item").forEach(b=>b.onclick=()=>openSimpleFolder(kind,Number(b.dataset.i),cats,key));
  document.querySelectorAll("#detailMount .add-simple").forEach(b=>b.onclick=(e)=>{e.stopPropagation();openSimpleFolder(kind,Number(b.dataset.i),cats,key,null,true)});
}
function openSimpleFolder(kind,i,cats,key,existing,adding){
  const arr=arrKey(key), found=existing||(!adding&&arr.find(x=>x.category===cats[i]));
  const x=found||{id:Date.now().toString(36)+Math.random().toString(36).slice(2),category:cats[i],notes:"",name:"",date:"",status:""};
  let h='<button class="back" id="simpleFolderBack">← '+(kind==="task"?"ΕΚΚΡΕΜΟΤΗΤΕΣ":kind==="delivery"?"ΠΑΡΑΔΟΣΕΙΣ":"ΣΚΛΗΡΟΙ ΔΙΣΚΟΙ")+'</button><h2>📁 '+esc(x.category)+'</h2>';
  h+='<div class="collab-editor">';
  if(kind==="disk"){
    h+='<label class="collab-label">ΟΝΟΜΑ / ΣΤΟΙΧΕΙΑ</label><input id="simpleName" class="collab-name" value="'+esc(x.name||"")+'" placeholder="Γράψε στοιχεία...">';
    h+='<label class="collab-label">ΣΗΜΕΙΩΣΕΙΣ / ΤΟΠΟΘΕΣΙΑ / ΕΛΕΥΘΕΡΟΣ ΧΩΡΟΣ</label>';
  }else{
    h+='<label class="collab-label">ΟΝΟΜΑ / ΠΕΛΑΤΗΣ</label><input id="simpleName" class="collab-name" value="'+esc(x.name||"")+'" placeholder="Γράψε όνομα...">';
    h+='<label class="collab-label">ΗΜΕΡΟΜΗΝΙΑ</label><input id="simpleDate" type="text" class="date-picker" readonly autocomplete="off" value="'+esc(x.date||"")+'" placeholder="📅 ΕΠΙΛΕΞΕ ΗΜΕΡΟΜΗΝΙΑ">';
    h+='<label class="collab-label">ΩΡΑ</label><input id="simpleTime" type="time" value="'+esc(x.time||"")+'">';
    h+='<label class="collab-label">ΣΗΜΕΙΩΣΕΙΣ</label>';
  }
  h+='<textarea id="simpleNotes" placeholder="Γράψε εδώ ό,τι χρειάζεσαι...">'+esc(x.notes||"")+'</textarea></div><button class="primary" id="saveSimple">💾 ΑΠΟΘΗΚΕΥΣΗ</button>';
  if(found&&!adding) h+='<button class="danger" id="delSimple">🗑️ ΔΙΑΓΡΑΦΗ</button>';
  $("detailMount").innerHTML=h;show("detailView");activateDateTimePickers($("detailMount"));
  $("simpleFolderBack").onclick=()=>simpleFolders(kind==="task"?"📋 ΕΚΚΡΕΜΟΤΗΤΕΣ":kind==="delivery"?"📦 ΠΑΡΑΔΟΣΕΙΣ":"💾 ΣΚΛΗΡΟΙ ΔΙΣΚΟΙ",cats,key,kind);
  $("saveSimple").onclick=()=>{
    const item={...x,name:$("simpleName").value,date:$("simpleDate")?$("simpleDate").value:"",time:$("simpleTime")?$("simpleTime").value:"",notes:$("simpleNotes").value};
    if(!adding){const idx=arr.findIndex(z=>z.id===x.id);if(idx>=0)arr[idx]=item;else arr.push(item)}else arr.push(item);
    saveArr(key,arr);simpleFolders(kind==="task"?"📋 ΕΚΚΡΕΜΟΤΗΤΕΣ":kind==="delivery"?"📦 ΠΑΡΑΔΟΣΕΙΣ":"💾 ΣΚΛΗΡΟΙ ΔΙΣΚΟΙ",cats,key,kind);renderDaily();
  };
  if($("delSimple")) $("delSimple").onclick=()=>{saveArr(key,arr.filter(z=>z.id!==x.id));simpleFolders(kind==="task"?"📋 ΕΚΚΡΕΜΟΤΗΤΕΣ":kind==="delivery"?"📦 ΠΑΡΑΔΟΣΕΙΣ":"💾 ΣΚΛΗΡΟΙ ΔΙΣΚΟΙ",cats,key,kind);renderDaily()};
}
function pending(){simpleFolders("📋 ΕΚΚΡΕΜΟΤΗΤΕΣ",TASK_CATS,TASKS_KEY,"task")}
function deliveries(){simpleFolders("📦 ΠΑΡΑΔΟΣΕΙΣ",DELIVERY_CATS,DELIVERIES_KEY,"delivery")}
function disks(){simpleFolders("💾 ΣΚΛΗΡΟΙ ΔΙΣΚΟΙ",DISK_CATS,DISKS_KEY,"disk")}
window.pending=pending;window.deliveries=deliveries;window.disks=disks;
// ===== CLOUD SYNC: ONE SHARED WORKSPACE, UNLIMITED DEVICES =====
const SYNC_URL="https://vbkuvexyqehmpeeejqbh.supabase.co/functions/v1/gamos-sync";
const SYNC_KEYS=["gamos_ala_ellinika_v3","gamos_daily_schedule_v2","gamos_collaborators_v1","gamos_happy_orders_v2","gamos_appointments_mysteries_v1","gamos_appointments_partners_v1","gamos_pending_v1","gamos_deliveries_v1","gamos_disks_v1"];
let syncBusy=false,syncLastRemote=null;
function syncAllLocalStorage(){const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k!=="gamos_sync_token")o[k]=localStorage.getItem(k)}return o}
function syncApplyAll(data){syncBusy=true;Object.entries(data||{}).forEach(([k,v])=>{if(k!=="gamos_sync_token")localStorage.setItem(k,v)});syncBusy=false}
async function syncCall(body){const r=await fetch(SYNC_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});const j=await r.json();if(!r.ok)throw Error(j.error||"Σφάλμα συγχρονισμού");return j}
async function syncPull(){if(syncBusy)return;try{const j=await syncCall({action:"pull"});if(j.updated_at&&j.updated_at!==syncLastRemote){syncLastRemote=j.updated_at;if(Object.keys(j.data||{}).length){syncApplyAll(j.data);location.reload()}}}catch(e){console.warn("Cloud sync:",e.message)}}
async function syncPush(){if(syncBusy)return;try{const j=await syncCall({action:"push",data:syncAllLocalStorage()});syncLastRemote=j.updated_at}catch(e){console.warn("Cloud sync:",e.message)}}
(function(){setTimeout(async()=>{await syncPull();window.__lastSyncSnapshot=JSON.stringify(syncAllLocalStorage());},1200);setInterval(async()=>{if(syncBusy)return;const now=JSON.stringify(syncAllLocalStorage());if(now!==window.__lastSyncSnapshot){window.__lastSyncSnapshot=now;await syncPush()}else await syncPull()},3000)})();
function syncScreen(){
 let h="<button class=\"back\" id=\"syncBack\">← ΜΕΝΟΥ</button><h2>☁️ ΣΥΓΧΡΟΝΙΣΜΟΣ ΣΥΣΚΕΥΩΝ</h2>";
 h+="<p style=\"font-size:18px;line-height:1.5\"><b>Αυτόματος συγχρονισμός εργασίας</b><br>Η εφαρμογή συνδέεται στον ίδιο ασφαλή χώρο δεδομένων από όσες συσκευές χρειάζεσαι.</p>";
 h+="<div style=\"font-size:18px;padding:14px;border-radius:12px;background:#f1f7f3\">☁️ <b>Ο συγχρονισμός είναι ενεργός</b><br>Δεν χρειάζεται κωδικός, email ή ζεύξη συσκευών.</div>";
 h+="<button class=\"primary big\" id=\"syncNow\">☁️ ΣΥΓΧΡΟΝΙΣΜΟΣ ΤΩΡΑ</button>";
 $("detailMount").innerHTML=h;show("detailView");$("syncBack").onclick=()=>show("homeView");$("syncNow").onclick=async()=>{await syncPush();await syncPull()};
}
window.syncScreen=syncScreen;
function ensureExtraMenus(){
 const menu=$("sideMenu");if(!menu)return;
 [["disksBtn","💾 ΣΚΛΗΡΟΙ ΔΙΣΚΟΙ",disks],["pendingBtn","📋 ΕΚΚΡΕΜΟΤΗΤΕΣ",pending],["deliveriesBtn","📦 ΠΑΡΑΔΟΣΕΙΣ",deliveries]].forEach(([id,label,fn])=>{
   let b=$(id);if(!b){b=[...menu.querySelectorAll(".menu-item")].find(x=>x.textContent.includes(label.slice(2)))}
   if(b){b.id=id;b.onclick=()=>{menu.classList.add("hidden");fn()}}
 });
}



// ===== ΕΚΚΙΝΗΣΗ ΕΦΑΡΜΟΓΗΣ =====
// Η εκκίνηση γίνεται στο τέλος του αρχείου, αφού έχουν δηλωθεί ΟΛΟΙ οι φάκελοι
// και οι σταθερές ραντεβού. Έτσι κανένας φάκελος δεν μένει ανενεργός από
// ReferenceError πριν ολοκληρωθεί η φόρτωση του app.js.
function startApp(){
  init();
  ensureHappyMenu();
  ensureAppointmentsMenu();
  ensureExtraMenus();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",startApp);
else startApp();
