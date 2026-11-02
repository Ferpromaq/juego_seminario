// Comunicación en tiempo real (Supabase Realtime Broadcast). Usada por index.html y play.html.
const Net={ch:null,
 join(room,onMsg,onReady){
  if(!window.CFG||!CFG.key||CFG.key.startsWith("TU-"))throw new Error("Falta configurar js/config.js");
  const c=supabase.createClient(CFG.url,CFG.key);
  const ch=c.channel("atalaya-"+room,{config:{broadcast:{self:false}}});
  ["join","mv","btn","txt","st"].forEach(ev=>ch.on("broadcast",{event:ev},m=>onMsg(ev,m.payload)));
  ch.subscribe(s=>{if(s==="SUBSCRIBED"){Net.ch=ch;onReady&&onReady()}});
 },
 send(ev,payload){if(Net.ch)Net.ch.send({type:"broadcast",event:ev,payload})}
};
