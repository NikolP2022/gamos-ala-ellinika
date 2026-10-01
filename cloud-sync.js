/* Device sync disabled: the application opens directly without email, login or pairing code. */
(function(){
  try {
    const gate=document.getElementById("deviceSyncGate");
    if(gate) gate.remove();
    const notice=document.getElementById("pairingNotice");
    if(notice) notice.remove();
    const status=document.getElementById("cloudSyncStatus");
    if(status) status.remove();
  } catch(e) {}
})();