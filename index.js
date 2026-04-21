
// ========== DATA ==========
const WA_NUMBER = '254741401230';

const REGION_MULTIPLIERS = {
  KE:{multiplier:1.0,currency:'KSh',symbol:'KSh',name:'Kenya'},
  NG:{multiplier:0.85,currency:'NGN',symbol:'₦',name:'Nigeria'},
  ZA:{multiplier:1.3,currency:'ZAR',symbol:'R',name:'South Africa'},
  GH:{multiplier:0.75,currency:'GHS',symbol:'GH₵',name:'Ghana'},
  US:{multiplier:3.2,currency:'USD',symbol:'$',name:'United States'},
  GB:{multiplier:3.8,currency:'GBP',symbol:'£',name:'UK'},
  DE:{multiplier:3.5,currency:'EUR',symbol:'€',name:'Germany'},
  IN:{multiplier:0.6,currency:'INR',symbol:'₹',name:'India'},
};

const events = [
  {id:1,title:'Nairobi Jazz Festival',subtitle:'An Evening of Soulful Rhythms',category:'concerts',date:'Sat, 14 Jun 2025',time:'7:00 PM EAT',venue:'KICC Grounds, Nairobi',location:'Nairobi, Kenya',description:'Join us for an unforgettable evening under the stars at the Nairobi Jazz Festival. Experience world-class jazz performances from <strong>Kenya\'s finest musicians</strong> alongside internationally acclaimed artists. The night will feature smooth rhythms, gourmet food stalls, and a curated art exhibition.',emoji:'🎷',color:'#C9A84C',bgGradient:'linear-gradient(135deg,#1a0a0a,#2d1a06,#1a1209)',tiers:[{name:'General',price:2500,available:200,total:300,perks:['General admission','Event program']},{name:'VIP',price:6500,available:45,total:100,perks:['Premium front section','Complimentary drinks (2)','Meet & Greet access'],featured:true},{name:'VVIP Table',price:18000,available:8,total:20,perks:['Private table for 4','Unlimited drinks','Backstage access','Personalized service']}]},
  {id:2,title:'Africa Tech Summit',subtitle:'Innovation. Future. Impact.',category:'tech',date:'Fri, 20 Jun 2025',time:'9:00 AM EAT',venue:'Sarit Expo Centre, Nairobi',location:'Nairobi, Kenya',description:'The continent\'s premier technology conference brings together <strong>founders, investors, and innovators</strong> shaping Africa\'s digital future. Three days of keynotes, workshops, and unparalleled networking opportunities.',emoji:'💻',color:'#2AABBC',bgGradient:'linear-gradient(135deg,#020a14,#051a2a,#0a1a20)',tiers:[{name:'Startup Pass',price:4500,available:150,total:200,perks:['All sessions','Networking app access']},{name:'Professional',price:12000,available:60,total:100,perks:['All sessions','Workshop access','Lunch included','Speaker dinner invite'],featured:true},{name:'Investor Pass',price:35000,available:12,total:20,perks:['All access','Private investor lounge','1:1 founder meetings','VIP dinner']}]},
  {id:3,title:'Lagos Fashion Week',subtitle:'Where African Style Meets the World',category:'fashion',date:'Thu, 3 Jul 2025',time:'6:30 PM WAT',venue:'Eko Hotel, Victoria Island',location:'Lagos, Nigeria',description:'Africa\'s most anticipated fashion event returns with <strong>60+ designers</strong> showcasing the future of African fashion. Walk the front row as the continent\'s top talent redefines global style on a world-class runway.',emoji:'👗',color:'#E8C96B',bgGradient:'linear-gradient(135deg,#14060a,#2a0a14,#1a0a14)',tiers:[{name:'Fashion Pass',price:8000,available:120,total:200,perks:['2 runway shows','Show catalog']},{name:'Front Row',price:22000,available:30,total:50,perks:['Front row seating','Champagne reception','Designer meet',],featured:true},{name:'Platinum Circle',price:55000,available:5,total:10,perks:['All shows front row','After-party access','Private designer dinner','Exclusive gift bag']}]},
  {id:4,title:'AFCON Finals Fan Park',subtitle:'The Ultimate Football Experience',category:'sports',date:'Sun, 6 Jul 2025',time:'3:00 PM CAT',venue:'FNB Stadium, Johannesburg',location:'Johannesburg, South Africa',description:'Experience the <strong>Africa Cup of Nations Finals</strong> in an electric atmosphere with thousands of passionate fans. Giant screens, live commentary, local legends, food village, and the energy of a continent united.',emoji:'⚽',color:'#2ECC71',bgGradient:'linear-gradient(135deg,#031a08,#051a0d,#031412)',tiers:[{name:'Fan Zone',price:1200,available:800,total:1000,perks:['Fan park access','Big screen viewing']},{name:'Premium Lounge',price:4500,available:80,total:150,perks:['Elevated viewing deck','Food and drinks included','Official jersey'],featured:true},{name:'Corporate Box',price:28000,available:6,total:12,perks:['Private box (10 people)','Catering service','Open bar','Exclusive merchandise']}]},
  {id:5,title:'Golden Gala',subtitle:'A Night of Elegance & Philanthropy',category:'galas',date:'Sat, 19 Jul 2025',time:'7:30 PM EAT',venue:'Fairmont The Norfolk, Nairobi',location:'Nairobi, Kenya',description:'The most glamorous evening in Nairobi\'s social calendar. The <strong>Golden Gala 2025</strong> raises funds for education initiatives across East Africa while offering an unparalleled evening of fine dining, live entertainment, and exquisite auction pieces.',emoji:'✨',color:'#B08DE8',bgGradient:'linear-gradient(135deg,#0a0516,#120a28,#0a0516)',tiers:[{name:'Individual',price:15000,available:60,total:100,perks:['Black-tie dinner','Entertainment program','Auction participation']},{name:'Couple Table',price:28000,available:20,total:30,perks:['Table for 2','Champagne on arrival','Priority auction bidding'],featured:true},{name:'Patron Table',price:120000,available:3,total:5,perks:['Table for 8','Premium wine menu','Recognition in program','Post-event reception']}]},
  {id:6,title:'Sanaa Arts Festival',subtitle:'Celebrating African Creativity',category:'art',date:'Fri, 1 Aug 2025',time:'10:00 AM EAT',venue:'National Museums of Kenya',location:'Nairobi, Kenya',description:'A three-day celebration of African visual art, sculpture, performance, and digital media. Featuring <strong>200+ artists</strong> from 30 countries, gallery exhibitions, live painting sessions, workshops, and curator talks.',emoji:'🎨',color:'#F0997B',bgGradient:'linear-gradient(135deg,#140a06,#200d08,#1a0808)',tiers:[{name:'Day Pass',price:800,available:300,total:500,perks:['Single day access','Exhibition tours']},{name:'3-Day Pass',price:2000,available:100,total:200,perks:['Full festival access','Workshop inclusion','Artist talks'],featured:true},{name:'Collector Pass',price:8500,available:15,total:25,perks:['All access','Private collector preview','Artist meet & greet','Acquisition advisory']}]}
];

let state = {
  currentPage:'home',
  selectedEvent:null,
  selectedTier:null,
  selectedQty:1,
  selectedCountry:'KE',
  checkoutCountry:'KE',
  currentStep:1,
  tickets:[],
  transactions:[],
  adminTab:'overview',
  dashTab:'tickets',
};

// ========== PRICING ENGINE ==========
function getRegionData(code){return REGION_MULTIPLIERS[code]||REGION_MULTIPLIERS['KE']}
function calcPrice(basePrice, countryCode, qty=1){
  const r=getRegionData(countryCode);
  const adjusted=Math.round(basePrice*r.multiplier);
  const platformFee=Math.round(adjusted*0.05);
  const total=adjusted+platformFee;
  return {base:adjusted,fee:platformFee,total,totalAll:total*qty,currency:r.currency,symbol:r.symbol,qty};
}
function fmtPrice(amount,symbol){return symbol+' '+amount.toLocaleString()}

// ========== PAGE ROUTING ==========
function showPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  state.currentPage=page;
  window.scrollTo({top:0,behavior:'smooth'});
  if(page==='home') renderEvents();
  if(page==='dashboard') renderDashboard();
  if(page==='admin') renderAdmin();
  if(page==='checkout') renderOrderSummary();
}

function scrollToEvents(){
  document.getElementById('events-anchor').scrollIntoView({behavior:'smooth'});
}

// ========== RENDER EVENTS ==========
function renderEvents(filterCat='all'){
  const grid=document.getElementById('eventsGrid');
  const filtered=filterCat==='all'?events:events.filter(e=>e.category===filterCat);
  grid.innerHTML=filtered.map((ev,i)=>{
    const lowestTier=ev.tiers[0];
    const p=calcPrice(lowestTier.price,'KE');
    const avail=ev.tiers.reduce((a,t)=>a+t.available,0);
    const total=ev.tiers.reduce((a,t)=>a+t.total,0);
    const pct=Math.round((1-avail/total)*100);
    return `<div class="event-card fade-in" style="animation-delay:${i*0.08}s" onclick="openEvent(${ev.id})">
      <div class="accent-bar"></div>
      <div class="event-card-img">
        <div class="event-card-img-bg" style="background:${ev.bgGradient};display:flex;align-items:center;justify-content:center;font-size:80px">${ev.emoji}</div>
        <div class="event-card-img-overlay"></div>
        <div class="event-card-badges">
          <span class="badge badge-gold">${ev.category}</span>
          ${avail<20?'<span class="badge badge-red">Few Left</span>':''}
        </div>
      </div>
      <div class="event-card-info">
        <h3 class="event-card-title">${ev.title}</h3>
        <div class="event-card-meta">
          <span>📅 ${ev.date} · ${ev.time}</span>
          <span>📍 ${ev.location}</span>
        </div>
        <div class="availability-bar">
          <div class="avail-label"><span>${avail} seats left</span><span>${pct}% sold</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="event-card-footer">
        <div>
          <div class="event-price-label">From</div>
          <div class="event-price">${fmtPrice(p.base,p.symbol)}</div>
        </div>
        <button class="btn btn-gold btn-sm">Get Tickets</button>
      </div>
    </div>`;
  }).join('');
}

function filterCategory(cat,el){
  document.querySelectorAll('.cat-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderEvents(cat);
}

// ========== OPEN EVENT ==========
function openEvent(id){
  const ev=events.find(e=>e.id===id);
  if(!ev) return;
  state.selectedEvent=ev;
  state.selectedTier=ev.tiers[1]||ev.tiers[0];
  state.selectedQty=1;

  document.getElementById('eventBannerImg').style.background=ev.bgGradient;
  document.getElementById('eventBannerImg').style.display='flex';
  document.getElementById('eventBannerImg').style.alignItems='center';
  document.getElementById('eventBannerImg').style.justifyContent='center';
  document.getElementById('eventBannerImg').style.fontSize='140px';
  document.getElementById('eventBannerImg').textContent=ev.emoji;

  document.getElementById('eventBadges').innerHTML=`
    <span class="badge badge-gold" style="font-size:13px;padding:6px 14px">${ev.category}</span>
    <span class="badge badge-teal" style="font-size:13px;padding:6px 14px">📅 ${ev.date}</span>
  `;

  document.getElementById('eventDetailTitle').innerHTML=ev.title+'<br><em>'+ev.subtitle+'</em>';
  document.getElementById('eventMetaRow').innerHTML=`
    <div class="event-meta-item"><div class="event-meta-icon">📅</div><div class="event-meta-text"><strong>${ev.date}</strong><span>${ev.time}</span></div></div>
    <div class="event-meta-item"><div class="event-meta-icon">📍</div><div class="event-meta-text"><strong>${ev.venue}</strong><span>${ev.location}</span></div></div>
  `;
  document.getElementById('eventDetailDesc').innerHTML=ev.description;
  document.getElementById('eventVenueInfo').innerHTML=`<div style="font-size:15px;font-weight:500;margin-bottom:4px">${ev.venue}</div><div style="font-size:13px;color:var(--text-muted)">${ev.location}</div>`;

  const waMsg=encodeURIComponent(`Hi, I need help with ticket purchase for ${ev.title}`);
  document.getElementById('eventWaBtn').href=`https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  renderTicketTiers(ev);
  showPage('event');
}

function renderTicketTiers(ev){
  const country=state.selectedCountry||'KE';
  document.getElementById('ticketTiers').innerHTML=ev.tiers.map((t,i)=>{
    const p=calcPrice(t.price,country);
    const isSel=state.selectedTier&&state.selectedTier.name===t.name;
    return `<div class="ticket-tier ${isSel?'selected':''} ${t.featured?'featured':''}" onclick="selectTier(${i})">
      ${t.featured?'<div class="tier-featured-badge">Most Popular</div>':''}
      <div class="tier-name" style="color:${t.featured?'#B08DE8':'var(--text-muted)'}">${t.name}</div>
      <div class="tier-price">${fmtPrice(p.base,p.symbol)}<sub> / person</sub></div>
      <div class="tier-perks">${t.perks.map(pk=>`<div class="tier-perk">${pk}</div>`).join('')}</div>
      <div class="availability-bar">
        <div class="avail-label"><span style="font-size:11px">${t.available} available</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${Math.round((1-t.available/t.total)*100)}%"></div></div>
      </div>
      ${isSel?`<div class="qty-selector">
        <button class="qty-btn" onclick="event.stopPropagation();changeQty(-1)">−</button>
        <span class="qty-display">${state.selectedQty}</span>
        <button class="qty-btn" onclick="event.stopPropagation();changeQty(1)">+</button>
        <button class="btn btn-gold btn-sm" style="margin-left:auto" onclick="event.stopPropagation();startCheckout()">Buy Now</button>
      </div>`:''}
    </div>`;
  }).join('');
}

function selectTier(i){
  state.selectedTier=state.selectedEvent.tiers[i];
  state.selectedQty=1;
  renderTicketTiers(state.selectedEvent);
}

function changeQty(delta){
  state.selectedQty=Math.max(1,Math.min(10,state.selectedQty+delta));
  renderTicketTiers(state.selectedEvent);
}

function updatePricing(country){
  state.selectedCountry=country;
  if(state.selectedEvent) renderTicketTiers(state.selectedEvent);
}

// ========== CHECKOUT ==========
function startCheckout(){
  if(!state.selectedTier){showToast('Please select a ticket tier','error');return}
  state.currentStep=1;
  state.checkoutCountry=state.selectedCountry||'KE';
  document.getElementById('checkoutCountry').value=state.checkoutCountry;
  showPage('checkout');
  updateStepUI(1);
  renderOrderSummary();
}

function renderOrderSummary(){
  if(!state.selectedTier||!state.selectedEvent) return;
  const p=calcPrice(state.selectedTier.price,state.checkoutCountry,state.selectedQty);
  const s=`<div class="order-summary-title">Order Summary</div>
    <div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;padding:12px;border-radius:var(--r-sm);background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15)">
      <div style="font-size:28px">${state.selectedEvent.emoji}</div>
      <div><div style="font-size:14px;font-weight:500">${state.selectedEvent.title}</div><div style="font-size:12px;color:var(--text-muted)">${state.selectedTier.name} · ${state.selectedQty}x</div></div>
    </div>
    <div class="order-line"><span class="order-line-label">Ticket price (×${state.selectedQty})</span><span>${fmtPrice(p.base*state.selectedQty,p.symbol)}</span></div>
    <div class="order-line"><span class="order-line-label">Platform fee (5%)</span><span>${fmtPrice(p.fee*state.selectedQty,p.symbol)}</span></div>
    <div class="order-line total"><span>Total</span><span>${fmtPrice(p.totalAll,p.symbol)}</span></div>
    <div class="pricing-info"><strong>Pricing Transparency</strong>Region: ${getRegionData(state.checkoutCountry).name} · Base ×${getRegionData(state.checkoutCountry).multiplier} · 5% platform fee · Organizer receives 95%</div>`;
  ['orderSummaryStep1','orderSummaryStep2'].forEach(id=>{
    const el=document.getElementById(id);if(el) el.innerHTML=s;
  });
}

function updateCheckoutPricing(country){
  state.checkoutCountry=country;
  renderOrderSummary();
}

function goToStep(n){
  if(n===2){
    const fn=document.getElementById('firstName').value.trim();
    const em=document.getElementById('emailInput').value.trim();
    const ph=document.getElementById('phoneInput').value.trim();
    if(!fn||!em||!ph){showToast('Please fill in all required fields','error');return}
    document.getElementById('mpesaPhone').value=ph.replace(/\D/g,'').slice(-9);
  }
  state.currentStep=n;
  updateStepUI(n);
  ['checkoutStep1','checkoutStep2','checkoutStep3'].forEach((id,i)=>{
    document.getElementById(id).classList.toggle('hide',i+1!==n);
  });
  if(n===3) renderTicketConfirmation();
  renderOrderSummary();
  window.scrollTo({top:0,behavior:'smooth'});
}

function updateStepUI(n){
  for(let i=1;i<=3;i++){
    const c=document.getElementById(`step${i}circle`);
    const l=document.getElementById(`step${i}label`);
    c.className='step-circle'+(i<n?' done':i===n?' active':'');
    l.className='step-label'+(i===n?' active':'');
    c.textContent=i<n?'✓':i;
  }
}

// ========== MPESA ==========
function initiateMpesa(){
  const phone=document.getElementById('mpesaPhone').value.trim();
  if(!phone||phone.length<9){showToast('Please enter a valid M-Pesa number','error');return}
  document.getElementById('mpesaForm').classList.add('hide');
  document.getElementById('mpesaProcessing').classList.remove('hide');
  let progress=0;
  const interval=setInterval(()=>{
    progress+=Math.random()*15+5;
    if(progress>90) progress=90;
    document.getElementById('mpesaProgress').style.width=Math.round(progress)+'%';
  },600);
  setTimeout(()=>{
    clearInterval(interval);
    document.getElementById('mpesaProgress').style.width='100%';
    setTimeout(()=>{
      document.getElementById('mpesaProcessing').classList.add('hide');
      document.getElementById('mpesaSuccess').classList.remove('hide');
      const ref='TXN'+Date.now().toString().slice(-8);
      document.getElementById('mpesaSuccessRef').textContent=`Transaction Ref: ${ref} · +254${phone}`;
      const p=calcPrice(state.selectedTier.price,state.checkoutCountry,state.selectedQty);
      state.transactions.push({id:ref,event:state.selectedEvent.title,tier:state.selectedTier.name,amount:fmtPrice(p.totalAll,p.symbol),date:new Date().toLocaleDateString(),status:'Confirmed'});
      showToast('Payment confirmed! 🎉','success');
    },800);
  },4000);
}

// ========== TICKET GENERATION ==========
function generateTicketId(){return 'LXE-'+Math.random().toString(36).substr(2,4).toUpperCase()+'-'+Date.now().toString(36).toUpperCase().slice(-4)}

function renderTicketConfirmation(){
  if(!state.selectedEvent||!state.selectedTier) return;
  const tid=generateTicketId();
  const fn=document.getElementById('firstName').value||'Guest';
  const ln=document.getElementById('lastName').value||'';
  const ticket={id:tid,event:state.selectedEvent.title,date:state.selectedEvent.date,venue:state.selectedEvent.venue,tier:state.selectedTier.name,holder:fn+' '+ln,qty:state.selectedQty};
  state.tickets.push(ticket);

  const waMsg=encodeURIComponent(`I just got tickets to ${state.selectedEvent.title}! 🎉 Ticket ID: ${tid}`);
  document.getElementById('confirmWaBtn').href=`https://wa.me/?text=${waMsg}`;

  document.getElementById('ticketDisplay').innerHTML=renderTicketHTML(ticket,state.selectedEvent);
}

function renderTicketHTML(t,ev){
  return `<div class="ticket-display fade-in" style="max-width:420px;margin:0 auto">
    <div class="ticket-header">
      <div style="font-size:40px;margin-bottom:8px">${ev?ev.emoji:'🎟️'}</div>
      <div class="ticket-header-title">${t.event}</div>
      <div class="ticket-header-sub">${t.date} · ${t.venue}</div>
    </div>
    <div class="ticket-body">
      <div class="ticket-info-grid">
        <div class="ticket-info-item">
          <div class="ticket-info-label">Ticket Holder</div>
          <div class="ticket-info-value">${t.holder}</div>
        </div>
        <div class="ticket-info-item">
          <div class="ticket-info-label">Tier</div>
          <div><span class="ticket-tier-badge">${t.tier}</span></div>
        </div>
        <div class="ticket-info-item">
          <div class="ticket-info-label">Date</div>
          <div class="ticket-info-value" style="font-size:13px">${t.date}</div>
        </div>
        <div class="ticket-info-item">
          <div class="ticket-info-label">Quantity</div>
          <div class="ticket-info-value">${t.qty||1} ${(t.qty||1)>1?'tickets':'ticket'}</div>
        </div>
      </div>
      <div class="ticket-perforated"></div>
      <div class="ticket-qr-area">
        ${generateQRSVG(t.id)}
        <div class="ticket-id">${t.id}</div>
        <div style="font-size:11px;color:var(--text-muted);text-align:center">Present this QR code at the entrance</div>
      </div>
    </div>
  </div>`;
}

function generateQRSVG(data){
  const s=data.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  let cells='';
  const size=10;
  for(let r=0;r<size;r++){
    for(let c=0;c<size;c++){
      if((r<2&&c<2)||(r<2&&c>7)||(r>7&&c<2)||((s*r+c*7+r*c)%3===0)){
        cells+=`<rect x="${4+c*11}" y="${4+r*11}" width="10" height="10" rx="1" fill="var(--text-primary)"/>`;
      }
    }
  }
  return `<svg class="qr-code" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="120" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(201,168,76,0.3)" stroke-width="1"/>
    ${cells}
    <rect x="4" y="4" width="22" height="22" rx="2" fill="none" stroke="var(--gold)" stroke-width="2"/>
    <rect x="8" y="8" width="14" height="14" rx="1" fill="var(--gold)" opacity="0.8"/>
    <rect x="94" y="4" width="22" height="22" rx="2" fill="none" stroke="var(--gold)" stroke-width="2"/>
    <rect x="98" y="8" width="14" height="14" rx="1" fill="var(--gold)" opacity="0.8"/>
    <rect x="4" y="94" width="22" height="22" rx="2" fill="none" stroke="var(--gold)" stroke-width="2"/>
    <rect x="8" y="98" width="14" height="14" rx="1" fill="var(--gold)" opacity="0.8"/>
  </svg>`;
}

// ========== DASHBOARD ==========
function renderDashboard(){
  document.getElementById('dashTicketCount').textContent=state.tickets.length;
  document.getElementById('dashUpcoming').textContent=state.tickets.length;
  const spent=state.transactions.reduce((a,t)=>a+(parseFloat(t.amount.replace(/[^0-9.]/g,''))||0),0);
  document.getElementById('dashTotalSpent').textContent='KSh '+Math.round(spent).toLocaleString();
  switchDashTab(state.dashTab||'tickets',null);
}

function switchDashTab(tab,el){
  state.dashTab=tab;
  if(el){document.querySelectorAll('.dash-nav-item').forEach(i=>i.classList.remove('active'));el.classList.add('active')}
  const cont=document.getElementById('dashContent');
  if(tab==='tickets'){
    if(state.tickets.length===0){
      cont.innerHTML=`<div style="text-align:center;padding:80px 20px">
        <div style="font-size:56px;margin-bottom:16px">🎟️</div>
        <h3 style="font-family:var(--ff-serif);font-size:24px;font-weight:300;margin-bottom:8px">No tickets yet</h3>
        <p style="color:var(--text-muted);margin-bottom:24px">Explore events and secure your spot</p>
        <button class="btn btn-gold" onclick="showPage('home')">Browse Events</button>
      </div>`;
    } else {
      cont.innerHTML=`<h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:16px">My Tickets</h3>`+
        state.tickets.map(t=>{
          const ev=events.find(e=>e.title===t.event);
          return `<div class="my-ticket-row">
            <div class="my-ticket-color" style="background:${ev?ev.color:'var(--gold)'}"></div>
            <div style="font-size:32px">${ev?ev.emoji:'🎟️'}</div>
            <div class="my-ticket-info">
              <div class="my-ticket-event">${t.event}</div>
              <div class="my-ticket-meta">${t.date} · ${t.venue}</div>
              <div style="margin-top:6px"><span class="my-ticket-tier">${t.tier}</span></div>
            </div>
            ${generateQRSVG(t.id)}
          </div>`;
        }).join('');
    }
  } else if(tab==='transactions'){
    if(state.transactions.length===0){
      cont.innerHTML=`<div style="text-align:center;padding:80px 20px"><div style="font-size:48px;margin-bottom:12px">💳</div><p style="color:var(--text-muted)">No transactions yet</p></div>`;
    } else {
      cont.innerHTML=`<h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:16px">Transaction History</h3>`+
        `<div class="glass-sm" style="overflow:hidden">
          <table class="admin-table" style="width:100%">
            <thead><tr><th>REF</th><th>Event</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>${state.transactions.map(tx=>`<tr>
              <td style="font-family:monospace;font-size:12px">${tx.id}</td>
              <td>${tx.event}</td>
              <td style="color:var(--gold)">${tx.amount}</td>
              <td>${tx.date}</td>
              <td><span class="badge badge-green">${tx.status}</span></td>
            </tr>`).join('')}</tbody>
          </table>
        </div>`;
    }
  } else if(tab==='profile'){
    cont.innerHTML=`<div style="max-width:500px">
      <h3 style="font-family:var(--ff-serif);font-size:24px;margin-bottom:24px">Profile Settings</h3>
      <div class="checkout-form">
        <div class="form-row">
          <div class="form-group"><label class="form-label">First Name</label><input class="form-input" value="Amara"></div>
          <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" value="Osei"></div>
        </div>
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" value="amara@example.com" type="email"></div>
        <div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="+254 741 401 230" type="tel"></div>
        <div class="form-group"><label class="form-label">Default Country</label>
          <select class="form-input country-select">
            <option>🇰🇪 Kenya</option><option>🇺🇸 United States</option><option>🇳🇬 Nigeria</option>
          </select>
        </div>
        <button class="btn btn-gold" onclick="showToast('Profile updated successfully','success')">Save Changes</button>
      </div>
    </div>`;
  }
}

// ========== ADMIN ==========
function renderAdmin(){switchAdminTab(state.adminTab||'overview',null)}

function switchAdminTab(tab,el){
  state.adminTab=tab;
  if(el){document.querySelectorAll('.admin-nav-item').forEach(i=>i.classList.remove('active'));el.classList.add('active')}
  const cont=document.getElementById('adminContent');
  const totalRevenue=state.transactions.reduce((a,t)=>a+(parseFloat(t.amount.replace(/[^0-9.]/g,''))||0),0);
  if(tab==='overview'){
    cont.innerHTML=`
      <div class="admin-header"><h1 class="admin-title">Dashboard <em style="font-style:italic;color:var(--gold)">Overview</em></h1></div>
      <div class="admin-metrics-grid">
        <div class="admin-metric"><div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:8px">Total Events</div><div style="font-family:var(--ff-serif);font-size:32px;font-weight:300">${events.length}</div></div>
        <div class="admin-metric"><div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:8px">Tickets Sold</div><div style="font-family:var(--ff-serif);font-size:32px;font-weight:300;color:var(--gold)">${state.tickets.length}</div></div>
        <div class="admin-metric"><div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:8px">Revenue</div><div style="font-family:var(--ff-serif);font-size:32px;font-weight:300;color:var(--success)">KSh ${Math.round(totalRevenue).toLocaleString()}</div></div>
        <div class="admin-metric"><div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:8px">Transactions</div><div style="font-family:var(--ff-serif);font-size:32px;font-weight:300">${state.transactions.length}</div></div>
      </div>
      <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:16px">Recent Transactions</h3>
      ${state.transactions.length?`<div class="glass-sm" style="overflow:hidden"><table class="admin-table"><thead><tr><th>Ref</th><th>Event</th><th>Amount</th><th>Status</th></tr></thead><tbody>${state.transactions.map(tx=>`<tr><td style="font-family:monospace;font-size:12px">${tx.id}</td><td>${tx.event}</td><td style="color:var(--gold)">${tx.amount}</td><td><span class="badge badge-green">${tx.status}</span></td></tr>`).join('')}</tbody></table></div>`:'<p style="color:var(--text-muted);font-size:14px">No transactions yet. Sell some tickets!</p>'}
    `;
  } else if(tab==='events'){
    cont.innerHTML=`
      <div class="admin-header">
        <h1 class="admin-title">Manage <em style="font-style:italic;color:var(--gold)">Events</em></h1>
        <button class="btn btn-gold btn-sm" onclick="switchAdminTab('create',null);document.querySelectorAll('.admin-nav-item')[3].classList.add('active');document.querySelectorAll('.admin-nav-item').forEach((i,idx)=>idx!==3&&i.classList.remove('active'))">+ Create Event</button>
      </div>
      <div class="glass-sm" style="overflow-x:auto">
        <table class="admin-table" style="width:100%;min-width:600px">
          <thead><tr><th>Event</th><th>Date</th><th>Category</th><th>Tiers</th><th>Actions</th></tr></thead>
          <tbody>${events.map(ev=>`<tr>
            <td><div style="display:flex;align-items:center;gap:10px"><span style="font-size:22px">${ev.emoji}</span><span style="font-weight:500">${ev.title}</span></div></td>
            <td style="font-size:13px;color:var(--text-muted)">${ev.date}</td>
            <td><span class="badge badge-gold">${ev.category}</span></td>
            <td style="font-size:13px">${ev.tiers.length} tiers</td>
            <td><div style="display:flex;gap:8px">
              <button class="btn btn-ghost btn-sm" onclick="openEvent(${ev.id})">View</button>
              <button class="btn btn-danger btn-sm" onclick="showToast('Delete functionality would remove event from DB','error')">Delete</button>
            </div></td>
          </tr>`).join('')}</tbody>
        </table>
      </div>`;
  } else if(tab==='create'){
    cont.innerHTML=`
      <div class="admin-header"><h1 class="admin-title">Create <em style="font-style:italic;color:var(--gold)">Event</em></h1></div>
      <div style="max-width:680px">
        <div class="checkout-form">
          <div class="form-group"><label class="form-label">Event Title</label><input class="form-input" placeholder="Summer Music Festival" id="newEventTitle"></div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Date</label><input class="form-input" type="date" id="newEventDate"></div>
            <div class="form-group"><label class="form-label">Category</label><select class="form-input country-select" id="newEventCat"><option value="concerts">Concerts</option><option value="tech">Tech</option><option value="fashion">Fashion</option><option value="sports">Sports</option><option value="galas">Galas</option><option value="art">Art & Culture</option></select></div>
          </div>
          <div class="form-group"><label class="form-label">Venue</label><input class="form-input" placeholder="KICC, Nairobi" id="newEventVenue"></div>
          <div class="form-group"><label class="form-label">Description</label><textarea class="form-input" rows="4" placeholder="Tell attendees what makes this event special..." id="newEventDesc" style="resize:vertical"></textarea></div>
          <div class="divider"></div>
          <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:12px">Ticket Tiers</h3>
          ${['General','VIP','VVIP'].map((tier,i)=>`<div class="glass-sm" style="padding:16px;margin-bottom:12px">
            <div style="font-weight:500;margin-bottom:12px">${tier} Tier</div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Base Price (KSh)</label><input class="form-input" type="number" placeholder="${[2000,6000,15000][i]}" id="tier${i}Price"></div>
              <div class="form-group"><label class="form-label">Capacity</label><input class="form-input" type="number" placeholder="${[200,50,20][i]}" id="tier${i}Cap"></div>
            </div>
          </div>`).join('')}
          <button class="btn btn-gold" onclick="createEvent()">Create Event →</button>
        </div>
      </div>`;
  } else if(tab==='transactions'){
    cont.innerHTML=`
      <div class="admin-header"><h1 class="admin-title">All <em style="font-style:italic;color:var(--gold)">Transactions</em></h1></div>
      ${state.transactions.length?`<div class="glass-sm"><table class="admin-table"><thead><tr><th>Ref</th><th>Event</th><th>Tier</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead><tbody>${state.transactions.map(tx=>`<tr><td style="font-family:monospace;font-size:12px">${tx.id}</td><td>${tx.event}</td><td>${tx.tier||'-'}</td><td style="color:var(--gold)">${tx.amount}</td><td>${tx.date}</td><td><span class="badge badge-green">${tx.status}</span></td></tr>`).join('')}</tbody></table></div>`:'<div style="text-align:center;padding:60px"><p style="color:var(--text-muted)">No transactions yet</p></div>'}`;
  }
}

function createEvent(){
  const title=document.getElementById('newEventTitle').value.trim();
  if(!title){showToast('Please fill in the event title','error');return}
  showToast(`Event "${title}" created successfully! 🎉`,'success');
  setTimeout(()=>switchAdminTab('events',null),1000);
}

// ========== MODALS ==========
function showLoginModal(){document.getElementById('loginModal').classList.remove('hide')}
function hideModal(id){document.getElementById(id).classList.add('hide')}
function handleLogin(){hideModal('loginModal');showToast('Welcome back to LUXE Events! ✨','success')}

// ========== TOAST ==========
function showToast(msg,type='success'){
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div');
  t.className=`toast ${type}`;
  t.innerHTML=`<span>${type==='success'?'✅':'❌'}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(()=>t.remove(),3500);
}

// ========== MODAL CLOSE ==========
document.addEventListener('click',e=>{
  if(e.target.classList.contains('modal-overlay')) e.target.classList.add('hide');
});

// ========== INIT ==========
renderEvents();
