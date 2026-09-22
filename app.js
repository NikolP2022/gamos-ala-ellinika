const schemas={
baptism:["ΒΑΠΤΙΣΗ",[["ΣΤΟΙΧΕΙΑ ΠΑΙΔΙΟΥ",[ "Όνομα παιδιού","Όνομα Πατέρα","Επίθετο Πατέρα","Όνομα Μητέρας","Επίθετο Μητέρας","Τηλέφωνο επικοινωνίας","Email ζευγαριού"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΒΑΠΤΙΣΗΣ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Εκκλησία","Περιοχή","GPS Εκκλησίας"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]],
weddingBaptism:["ΓΑΜΟΣ & ΒΑΠΤΙΣΗ",[["ΣΤΟΙΧΕΙΑ ΖΕΥΓΑΡΙΟΥ",["Όνομα παιδιού","Όνομα Γαμπρού","Επίθετο Γαμπρού","Όνομα Νύφης","Επίθετο Νύφης","Τηλέφωνο επικοινωνίας","Email ζευγαριού","Περιοχή / Διεύθυνση","Προετοιμασία Νύφης □","Φωτογραφία Νύφης □","Βίντεο Νύφης □","GPS σπιτιού Νύφης","Προετοιμασία Γαμπρού □","Φωτογραφία Γαμπρού □","Βίντεο Γαμπρού □","GPS σπιτιού Γαμπρού"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΓΑΜΟΥ & ΒΑΠΤΙΣΗΣ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Εκκλησία","Περιοχή","GPS Εκκλησίας","Δεξίωση ΝΑΙ ΟΧΙ","Κέντρο Δεξίωσης","GPS Δεξίωσης"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]],
civilWedding:["ΠΟΛΙΤΙΚΟΣ ΓΑΜΟΣ",[["ΣΤΟΙΧΕΙΑ ΖΕΥΓΑΡΙΟΥ",["Όνομα Γαμπρού","Επίθετο Γαμπρού","Όνομα Νύφης","Επίθετο Νύφης","Τηλέφωνο επικοινωνίας","Email ζευγαριού","Περιοχή / Διεύθυνση"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΠΟΛΙΤΙΚΟΥ ΓΑΜΟΥ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Δημαρχείο","GPS Δημαρχείου","Περιοχή"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]],
wedding:["ΓΑΜΟΣ",[["ΣΤΟΙΧΕΙΑ ΖΕΥΓΑΡΙΟΥ",["Όνομα Γαμπρού","Επίθετο Γαμπρού","Όνομα Νύφης","Επίθετο Νύφης","Τηλέφωνο επικοινωνίας","Email ζευγαριού","Περιοχή / Διεύθυνση","Προετοιμασία Νύφης □","Φωτογραφία Νύφης □","Βίντεο Νύφης □","GPS σπιτιού Νύφης","Προετοιμασία Γαμπρού □","Φωτογραφία Γαμπρού □","Βίντεο Γαμπρού □","GPS σπιτιού Γαμπρού"]],["ΣΤΟΙΧΕΙΑ ΜΥΣΤΗΡΙΟΥ ΓΑΜΟΥ",["Ημερομηνία μυστήριου","Ώρα Μυστήριου","Εκκλησία","Περιοχή","GPS Εκκλησίας","Δεξίωση ΝΑΙ ΟΧΙ","Κέντρο Δεξίωσης","GPS Δεξίωσης"]],["ΟΜΑΔΑ ΣΥΝΕΡΓΑΤΩΝ",["Φωτογραφία","Βίντεο"]],["ΟΙΚΟΝΟΜΙΚΑ",["Συνολικό Ποσό €","Προκαταβολή €","Υπόλοιπο Ποσό €","Υπόλοιπο Ποσού Με Την Παράδοση €"]],["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ",["ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"]],["ΣΗΜΕΙΩΣΕΙΣ",["ΣΗΜΕΙΩΣΕΙΣ"]]]]
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
function field(q,v=""){if(q.endsWith("□"))return '<div class="field check"><label><input type="checkbox" name="'+esc(q)+'" '+(v==="ΝΑΙ"?"checked":"")+'><span>'+esc(q.replace(" □",""))+'</span></label></div>';if(q==="ΙΔΙΑΙΤΕΡΟΤΗΤΕΣ"||q==="ΣΗΜΕΙΩΣΕΙΣ")return '<div class="field full"><label>'+q+'</label><textarea name="'+q+'">'+esc(v)+'</textarea></div>';if(q==="Δεξίωση ΝΑΙ ΟΧΙ")return '<div class="field"><label>'+q+'</label><select name="'+q+'"><option></option><option '+(v==="ΝΑΙ"?"selected":"")+'>ΝΑΙ</option><option '+(v==="ΟΧΙ"?"selected":"")+'>ΟΧΙ</option></select></div>';let t=q.includes("Ημερομηνία")?"date":q.includes("Ώρα")?"time":q.includes("Email")?"email":q.includes("Ποσό")?"number":"text";return '<div class="field"><label>'+q+'</label><input type="'+t+'" name="'+esc(q)+'" value="'+esc(v)+'"></div>'}
function form(type,item){const [title,sections]=schemas[type];const f=item?.fields||{};let h='<h2>'+title+'</h2><form id="mform">';sections.forEach(([s,fs])=>{h+='<div class="form-section"><h3>'+s+'</h3><div class="fields">'+fs.map(q=>field(q,f[q])).join("")+'</div></div>'});h+='<button class="primary" type="submit">💾 ΑΠΟΘΗΚΕΥΣΗ</button></form>';$("formMount").innerHTML=h;show("formView");$("mform").onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),fields={};fd.forEach((v,k)=>fields[k]=v);e.target.querySelectorAll('input[type="checkbox"]').forEach(c=>fields[c.name]=c.checked?"ΝΑΙ":"ΟΧΙ");if(!fields["Ημερομηνία μυστήριου"]){alert("Συμπλήρωσε την ημερομηνία του μυστηρίου.");return}const x={id:item?.id||Date.now().toString(36)+Math.random().toString(36).slice(2),type,date:fields["Ημερομηνία μυστήριου"],fields};if(item)data=data.map(a=>a.id===item.id?x:a);else data.push(x);save();month=new Date(x.date+"T00:00:00");calendar();show("calendarView")}}
function eventTitle(x){const f=x.fields;if(x.type==="baptism")return "🕊️ "+(f["Όνομα παιδιού"]||"Βάπτιση");if(x.type==="weddingBaptism")return "💍🕊️ "+[f["Όνομα Γαμπρού"],f["Όνομα Νύφης"]].filter(Boolean).join(" & ")||"Γάμος & Βάπτιση";return (x.type==="civilWedding"?"🏛️ ":"💍 ")+[f["Όνομα Γαμπρού"],f["Όνομα Νύφης"]].filter(Boolean).join(" & ")||schemas[x.type][0]}
function calendar(){const y=month.getFullYear(),m=month.getMonth();$("monthTitle").textContent=new Intl.DateTimeFormat("el-GR",{month:"long",year:"numeric"}).format(month).toUpperCase();const g=$("calendar");g.innerHTML="";const first=(new Date(y,m,1).getDay()+6)%7,days=new Date(y,m+1,0).getDate();for(let i=0;i<first;i++)g.appendChild(document.createElement("div"));for(let d=1;d<=days;d++){const c=document.createElement("div");c.className="day";c.innerHTML="<b>"+d+"</b>";data.filter(x=>{const z=new Date(x.date+"T00:00:00");return z.getFullYear()===y&&z.getMonth()===m&&z.getDate()===d}).forEach(x=>{const b=document.createElement("button");b.className="event";b.type="button";b.textContent=eventTitle(x);b.onclick=()=>detail(x);c.appendChild(b)});g.appendChild(c)}}
function detail(x){let h="<h2>"+schemas[x.type][0]+"</h2>";schemas[x.type][1].forEach(([s,fs])=>{h+='<div class="form-section"><h3>'+s+'</h3><div class="detail-grid">'+fs.map(q=>'<div class="detail"><b>'+q+'</b><br>'+esc(x.fields[q]||"—").replace(/\\n/g,"<br>")+'</div>').join("")+"</div></div>"});h+='<button class="primary" id="editBtn">✏️ ΕΠΕΞΕΡΓΑΣΙΑ</button><button class="danger" id="deleteBtn">🗑️ ΔΙΑΓΡΑΦΗ</button>';$("detailMount").innerHTML=h;show("detailView");$("editBtn").onclick=()=>form(x.type,x);$("deleteBtn").onclick=()=>{const ok=window.confirm("Να διαγραφεί οριστικά αυτό το μυστήριο;");if(!ok)return;const before=data.length;data=data.filter(a=>String(a.id)!==String(x.id));if(data.length===before){const legacy=JSON.parse(localStorage.getItem("gamos_ala_ellinika_v2")||"[]");data=Array.isArray(legacy)?legacy.filter(a=>String(a.id)!==String(x.id)):data}localStorage.setItem(KEY,JSON.stringify(data));localStorage.removeItem("gamos_ala_ellinika_v2");calendar();show("calendarView");setTimeout(()=>alert("Το μυστήριο διαγράφηκε."),50)}}
function renderDaily(){const date=$("scheduleDate").value,rows=$("scheduleRows");rows.innerHTML="";for(let h=8;h<=22;h++){const t=String(h).padStart(2,"0")+":00",r=document.createElement("div");r.className="schedule-row";r.innerHTML='<span>'+t+'</span><input type="text" placeholder="Τι έχεις προγραμματίσει;">';const i=r.querySelector("input");i.value=(daily[date]||{})[t]||"";i.oninput=()=>{daily[date]=daily[date]||{};daily[date][t]=i.value;localStorage.setItem(DAYKEY,JSON.stringify(daily))};rows.appendChild(r)}}
function init(){ $("newBtn").onclick=()=>show("typeView"); $("calendarBtn").onclick=()=>{calendar();show("calendarView")}; $("menuBtn").onclick=()=>$("sideMenu").classList.remove("hidden"); $("closeMenu").onclick=()=>$("sideMenu").classList.add("hidden"); $("mysteriesBtn").onclick=()=>{ $("sideMenu").classList.add("hidden");show("typeView")}; document.querySelectorAll(".type-card").forEach(b=>b.onclick=()=>form(b.dataset.type)); $("collaboratorsBtn").onclick=()=>{ $("sideMenu").classList.add("hidden");collaborators()}; $("happyBoxBtn").onclick=()=>{ $("sideMenu").classList.add("hidden");happyBox()}; document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show(b.dataset.back)); $("prevMonth").onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()-1,1);calendar()}; $("nextMonth").onclick=()=>{month=new Date(month.getFullYear(),month.getMonth()+1,1);calendar()}; const now=new Date();$("scheduleDate").value=new Date(now-now.getTimezoneOffset()*60000).toISOString().slice(0,10);$("scheduleDate").onchange=renderDaily;renderDaily();calendar()}
window.show=show;window.form=form;window.calendar=calendar;window.detail=detail;
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{init();ensureHappyMenu()});else{init();ensureHappyMenu()}

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
  $("saveCollabFolder").onclick=()=>{folders[i].notes=$("collabNotes").value;localStorage.setItem(COLLAB_KEY,JSON.stringify(folders));alert("Αποθηκεύτηκε.");};
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
  const mystery=kind==="mystery";
  const f=item||{};
  let h='<button class="back" id="apptListBack">← ΡΑΝΤΕΒΟΥ</button><h2>'+ (mystery?"📁 Ραντεβού μυστήριου":"📁 Ραντεβού για συνεργασία") +'</h2><form id="apptForm">';
  if(mystery){
    h+='<div class="form-section"><div class="fields">';
    h+=field("ΟΝΟΜΑ",f.name)+field("ΤΗΛΕΦΩΝΟ",f.phone)+field("ΜΥΣΤΗΡΙΟ",f.mystery)+field("ΗΜΕΡΟΜΗΝΙΑ ΜΥΣΤΗΡΙΟΥ",f.mysteryDate)+field("ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ",f.date)+field("ΩΡΑ ΡΑΝΤΕΒΟΥ",f.time);
    h+='</div></div>';
  }else{
    h+='<div class="form-section"><div class="fields">';
    h+=field("ΟΝΟΜΑ",f.name)+field("ΤΗΛΕΦΩΝΟ",f.phone);
    h+=field("ΒΙΝΤΕΟ □",f.video)+field("ΦΩΤΟΓΡΑΦΙΑ □",f.photo);
    h+=field("ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ",f.date)+field("ΩΡΑ ΡΑΝΤΕΒΟΥ",f.time);
    h+='</div></div>';
  }
  h+='<button class="primary" type="submit">💾 ΑΠΟΘΗΚΕΥΣΗ</button></form>';
  $("detailMount").innerHTML=h;show("detailView");
  $("apptListBack").onclick=()=>appointmentFolder(kind);
  $("apptForm").onsubmit=e=>{
    e.preventDefault();const fd=new FormData(e.target),x={...(item||{}),id:item?.id||Date.now().toString(36)+Math.random().toString(36).slice(2),name:fd.get("ΟΝΟΜΑ")||"",phone:fd.get("ΤΗΛΕΦΩΝΟ")||"",date:fd.get("ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ")||"",time:fd.get("ΩΡΑ ΡΑΝΤΕΒΟΥ")||""};
    if(mystery){x.mystery=fd.get("ΜΥΣΤΗΡΙΟ")||"";x.mysteryDate=fd.get("ΗΜΕΡΟΜΗΝΙΑ ΜΥΣΤΗΡΙΟΥ")||"";saveAppts(APPT_MYSTERY_KEY,upsert(getAppts(APPT_MYSTERY_KEY),x))}
    else{x.video=fd.get("ΒΙΝΤΕΟ □")==="ΝΑΙ";x.photo=fd.get("ΦΩΤΟΓΡΑΦΙΑ □")==="ΝΑΙ";saveAppts(APPT_PARTNER_KEY,upsert(getAppts(APPT_PARTNER_KEY),x))}
    appointmentFolder(kind);
  };
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
  $("deleteAppointment").onclick=()=>{if(confirm("Να διαγραφεί οριστικά αυτό το ραντεβού;")){arr.splice(i,1);saveAppts(key,arr);appointmentFolder(kind)}};
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
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ensureAppointmentsMenu);else ensureAppointmentsMenu();

