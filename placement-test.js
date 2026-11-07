(() => {
'use strict';
const STORE='toeic-placement-v1';
const $=s=>document.querySelector(s);
const groups={
vocabulary:[
['The company will _____ a new employee to oversee the eastern region.','assign','attend','reserve','borrow',0,'Assign means to give someone a task or responsibility.'],
['Please keep all travel _____ for reimbursement.','receipts','recipes','reviews','reminders',0,'Receipts are proof of payment.'],
['The conference room is currently _____.','available','availability','avail','availably',0,'Available is the adjective required after is.'],
['The manager asked us to _____ the delivery until Friday.','postpone','propose','purchase','persuade',0,'Postpone means to delay an event.'],
['All applicants must meet the minimum _____ listed in the advertisement.','qualifications','qualify','qualified','qualifying',0,'Qualifications are skills or credentials required for a role.'],
['The factory has increased its monthly _____ by ten percent.','output','outcome','outlet','outlook',0,'Output refers to the amount produced.'],
['The new policy will take _____ on the first of July.','effect','affect','effective','effectively',0,'The fixed expression is take effect.'],
['Customers may request a full _____ within thirty days.','refund','budget','fare','wage',0,'A refund is money returned to a customer.'],
['The report provides a _____ overview of current sales trends.','comprehensive','comprehend','comprehension','comprehensively',0,'Comprehensive is the adjective modifying overview.'],
['The shipment was delayed because of an unexpected customs _____.','inspection','instruction','intention','invention',0,'A customs inspection can delay imported goods.'],
['Staff members are encouraged to _____ suggestions through the online form.','submit','omit','admit','commit',0,'Submit means to formally send something for consideration.'],
['The hotel offers _____ parking for guests who book directly.','complimentary','compulsory','competitive','comparable',0,'Complimentary means provided free of charge.'],
['The board reached a _____ after reviewing the financial data.','consensus','consequence','conscience','concession',0,'Consensus means general agreement.'],
['The supplier is known for its _____ delivery service.','reliable','rely','reliably','reliability',0,'Reliable is the adjective modifying service.'],
['Please contact the _____ department about your salary statement.','payroll','shipping','marketing','maintenance',0,'Payroll handles employee wages and salary records.'],
['The company plans to _____ its offices to a larger building.','relocate','release','relate','rely',0,'Relocate means to move to a new place.'],
['The discount is _____ to orders placed before noon.','applicable','applied','applicant','application',0,'Applicable means relevant or able to be applied.'],
['The director will _____ the proposal at tomorrow’s meeting.','review','revise','remind','restore',0,'Review means to examine or assess.'],
['A _____ of qualified candidates attended the recruitment event.','number','amount','quantity','deal',0,'A number of is used with countable plural nouns.'],
['The maintenance team completed the repair _____ schedule.','ahead of','in spite','instead','regardless',0,'Ahead of schedule means earlier than planned.']
],
grammar:[
['Neither the assistants nor the supervisor _____ available this afternoon.','are','is','be','have',1,'With neither…nor, the verb agrees with the nearer subject: supervisor (singular).'],
['The documents _____ by the legal department yesterday.','review','were reviewed','have review','reviewing',1,'Yesterday requires past simple; passive form is were reviewed.'],
['Ms. Chen is responsible for _____ the monthly sales report.','prepare','prepared','preparing','to prepare',2,'A preposition is followed by a noun or gerund.'],
['The new system is _____ efficient than the previous one.','most','more','much','many',1,'Than signals a comparative structure: more efficient.'],
['Each of the applicants _____ required to complete the form.','are','were','is','have',2,'Each is grammatically singular.'],
['Please send the invoice _____ the end of the business day.','by','during','while','since',0,'By expresses a deadline.'],
['The manager, along with two analysts, _____ attending the conference.','are','is','have','were',1,'The main subject is manager; along with does not make it plural.'],
['If the shipment arrives early, we _____ the inventory immediately.','updated','will update','would updated','had updated',1,'First conditional: if + present, will + base verb.'],
['The company has operated in Singapore _____ 2018.','for','during','since','from',2,'Since is used with a starting point in time.'],
['The proposal was rejected because it was not financially _____.','feasibility','feasible','feasibly','feasiblely',1,'An adjective is needed after was: feasible.'],
['The staff must wear identification badges _____ entering the laboratory.','before','although','despite','unless',0,'Before introduces the time relationship.'],
['The meeting was canceled, _____ all participants had already arrived.','even though','because of','in order to','so that',0,'Even though introduces a contrast.'],
['The director requested that the contract _____ signed today.','is','was','be','being',2,'Mandative subjunctive after requested that: base form be.'],
['The more carefully the data are checked, _____ the results will be.','accurate','the more accurate','more accurately','most accurate',1,'Correlative comparative: the more…, the more…'],
['Employees _____ submit expense claims within ten working days.','must','might have','would have','are',0,'Must expresses an obligation.'],
['The machine stopped _____ the operator pressed the emergency button.','when','despite','unless','whereas',0,'When introduces the time at which it stopped.'],
['Having _____ the instructions, the technician began the installation.','read','reading','reads','to read',0,'Having is followed by a past participle.'],
['The department needs someone _____ can communicate with overseas clients.','which','whose','who','whom',2,'Who is the subject relative pronoun for people.'],
['Sales increased _____ 12 percent compared with last quarter.','by','at','to','with',0,'Increase by indicates the amount of change.'],
['No sooner had the presentation begun _____ the fire alarm sounded.','when','than','then','while',1,'The fixed inversion pattern is no sooner…than.']
],
listening:[
['A caller says: “Could you move our appointment to Thursday morning?” What does the caller want?','To reschedule an appointment','To cancel a purchase','To confirm a shipment','To reserve a hotel',0,'Move an appointment means change its scheduled time.','Hello, this is Daniel from Westbridge. I’m calling about our appointment on Wednesday. Could we move it to Thursday morning instead? I’m available any time before eleven. Please call me back to confirm.'],
['A woman says: “The 2:15 train has been delayed by twenty minutes.” When will it depart?','2:15','2:25','2:35','2:45',2,'A twenty-minute delay changes 2:15 to 2:35.','Attention passengers. The 2:15 service to Bristol has been delayed by twenty minutes due to a signal problem. Passengers should wait on Platform 4. We apologize for the inconvenience.'],
['What is the main purpose of the announcement?','To announce an office closure','To introduce a new employee','To advertise a product','To request donations',0,'The announcement states that the office will close for maintenance.','Good afternoon. Please be advised that the main office will close at 3 P.M. this Friday for scheduled electrical maintenance. Employees who need access after that time should contact building security in advance.'],
['Where will the meeting take place?','Room 204','Room 240','The cafeteria','The main lobby',0,'The speaker explicitly says Room 204.','The quarterly planning meeting has been moved from the main conference hall to Room 204. The start time remains 9:30 A.M. Please bring your department budget summaries.'],
['What should employees do first?','Complete the online safety course','Collect their new uniforms','Attend a sales presentation','Submit travel receipts',0,'The speaker instructs employees to complete the online course before Friday.','All warehouse employees must complete the updated safety course by Friday. The training link was sent by email this morning. Supervisors will receive a completion report next Monday.'],
['Why is the customer calling?','A product arrived damaged','A payment was duplicated','A delivery was early','A password expired',0,'The caller reports a damaged item in the delivery.','I received order 5831 this morning, but one of the glass containers was broken. The outer box appears intact. Could you arrange a replacement? I can send photographs if necessary.'],
['What does the speaker ask listeners to bring?','A printed agenda','A parking permit','A passport','A purchase receipt',0,'The speaker specifically requests a printed agenda.','Before attending tomorrow’s project review, please print the agenda attached to the calendar invitation. We will discuss the revised timeline first, followed by the staffing plan.'],
['What is indicated about the shipment?','It is waiting for customs clearance','It has been delivered','It was sent to the wrong address','It has been canceled',0,'The tracking update says the shipment is awaiting customs clearance.','Your shipment has reached the international distribution center and is currently awaiting customs clearance. We will send another notification as soon as it is released for delivery.'],
['When will the new employee start?','Monday','Tuesday','Wednesday','Friday',0,'The start date stated is Monday, June 3.','We are pleased to welcome Priya Nair to the accounting team. She will begin work on Monday, June 3. Please join us in the break room at 9 A.M. for a short introduction.'],
['What problem does the speaker mention?','The air conditioning is not working','The elevator is too crowded','The lights are too bright','The internet is disconnected',0,'The speaker says the air-conditioning unit has stopped functioning.','The air-conditioning unit on the fourth floor stopped working this morning. A technician has been contacted and is expected to arrive by noon. Staff may use the meeting rooms on the third floor in the meantime.'],
['What is the woman most likely doing?','Offering an alternative schedule','Rejecting a job offer','Ordering office supplies','Reporting a lost item',0,'She proposes another time because she cannot attend the original slot.','I’m afraid I can’t attend the product demonstration at two. Would three-thirty work instead? I have a client call that should finish by then.'],
['What does the speaker say about the brochure?','It contains outdated prices','It is ready for printing','It has been translated','It will be mailed today',0,'The brochure needs revision because the prices are outdated.','Please hold the brochure printing. The prices listed on page six are from last year, and the marketing team is preparing an updated version.'],
['Which department should employees contact?','Human Resources','Information Technology','Purchasing','Facilities',0,'Questions about leave balances should go to Human Resources.','Employees who have questions about their annual leave balance should contact Human Resources. The updated leave policy is also available on the staff portal.'],
['What will happen next?','The technician will inspect the equipment','The office will relocate','The customer will receive a refund','The meeting will begin',0,'The next step is an equipment inspection.','We received your report about the copier making unusual noises. A technician will inspect the machine this afternoon. Please do not attempt to open the rear panel.'],
['Why has the deadline changed?','The client requested additional revisions','The manager is on vacation','The printer is broken','The budget was reduced',0,'The client requested more revisions, so the deadline was extended.','The design submission deadline has been extended until next Wednesday. The client requested two additional revisions to the layout, and the design team needs more time to complete them.'],
['What is the purpose of the call?','To confirm a reservation','To complain about a bill','To apply for a position','To request a reference',0,'The caller confirms a hotel reservation for two nights.','I’m calling to confirm my reservation for a double room from August 12 through August 14. The booking is under the name Morgan Lee. Could you verify that breakfast is included?'],
['What does the speaker imply about the report?','It needs more supporting data','It has already been approved','It is too short to print','It was sent to the wrong person',0,'The speaker asks for additional sales figures before approval.','The report is clearly written, but I would like to see the regional sales figures included before we send it to the board. Please add the figures in an appendix.'],
['Where are listeners instructed to go?','The south entrance','The loading dock','The second-floor lounge','The parking garage',0,'The announcement directs visitors to the south entrance.','Due to construction near the main lobby, all visitors should enter through the south entrance today. Security staff will be available to provide directions.'],
['What will the woman probably do?','Send the revised quotation','Schedule a job interview','Cancel the order','Contact the bank',0,'She says she will email the updated quotation this afternoon.','Thank you for pointing out the quantity error. I’ll correct the quotation and email the revised copy this afternoon. The unit price will remain unchanged.'],
['What is the main topic of the conversation?','A change in delivery arrangements','A new employee benefit','A conference registration','A software installation',0,'The speakers discuss changing the delivery location and time.','A: The supplier cannot deliver to the front entrance tomorrow. B: Could they use the loading area after lunch? A: Yes, I’ll update the delivery instructions and notify security.']
],
reading:[
['NOTICE: The east parking lot will be closed from 6 A.M. Monday until 6 P.M. Wednesday for resurfacing. Employees should use the west lot and display their staff permits.','Why was the notice written?','To explain a temporary parking change','To announce new working hours','To recruit parking attendants','To report a security incident',0,'The notice explains the closure and directs employees to another parking area.'],
['EMAIL: Your replacement laptop has been dispatched and is expected to arrive on Thursday. Please return the faulty device using the prepaid label included in the package.','What is the recipient asked to do?','Return the faulty laptop','Pay for express shipping','Collect the laptop on Wednesday','Contact the manufacturer by phone',0,'The email asks the recipient to return the defective device with the supplied label.'],
['JOB POSTING: Applicants for the sales coordinator position should have at least two years of customer-service experience. Fluency in English is preferred.','Which qualification is preferred rather than required?','Fluency in English','Two years of customer-service experience','A completed application','Availability for an interview',0,'The posting explicitly says English fluency is preferred.'],
['MEMO: The monthly budget meeting has been moved to 10:30 A.M. on May 8. Department heads should submit revised forecasts by May 5.','What must department heads do by May 5?','Submit revised forecasts','Attend a training session','Approve the annual report','Reserve a meeting room',0,'The memo gives May 5 as the forecast submission deadline.'],
['ADVERTISEMENT: Register for the City Business Expo before September 1 to receive a 15% discount. The event will be held at the Riverside Convention Center.','How can attendees receive a discount?','Register before September 1','Bring a colleague','Pay at the venue','Attend both days',0,'Early registration before the stated date qualifies for the discount.'],
['EMAIL: The shipment of office chairs will arrive two days later than expected because of severe weather. The supplier has offered free installation to compensate for the delay.','What is the supplier offering?','Free installation','A full refund','A larger shipment','A discount on future orders',0,'Free installation is offered as compensation for the delay.'],
['NOTICE: The cafeteria will serve breakfast from 7:00 to 9:30 A.M. beginning next Monday. Lunch service will remain unchanged.','What will change next Monday?','Breakfast service hours','Lunch menu prices','The cafeteria location','Employee meal allowances',0,'The notice announces breakfast service beginning next Monday.'],
['EMAIL: Thank you for interviewing for the assistant accountant role. We have decided to proceed with another candidate whose experience more closely matches our current needs.','What is the purpose of the email?','To inform an applicant of a hiring decision','To invite someone to a second interview','To request additional documents','To offer a temporary position',0,'The company informs the applicant that another candidate was selected.'],
['INVOICE: Payment is due within 30 days of the invoice date. A late fee of 2% will be applied to balances unpaid after that period.','When will the late fee apply?','After 30 days without payment','Immediately after receipt','At the end of the calendar year','Only after a written warning',0,'The invoice states that the fee applies to balances unpaid after 30 days.'],
['SCHEDULE: Maintenance inspection—Building A, Tuesday 9 A.M.; Building B, Tuesday 1 P.M.; Building C, Wednesday 9 A.M.','Which building is inspected first?','Building A','Building B','Building C','All buildings at once',0,'Building A is scheduled for Tuesday at 9 A.M., the earliest slot.'],
['EMAIL: The revised catalog is attached. Please check product descriptions on pages 4–7 and send corrections to the editorial team by noon tomorrow.','What is the recipient expected to review?','Product descriptions','Shipping invoices','Employee biographies','Advertising expenses',0,'Pages 4–7 contain the descriptions to be checked.'],
['NOTICE: Visitors must sign in at reception and wear a temporary identification badge while inside the building.','What must visitors do?','Register at reception','Bring their own uniform','Use the staff parking area','Submit a medical certificate',0,'Visitors are required to sign in and wear a badge.'],
['REPORT: Online sales rose 18% in the second quarter, while in-store sales declined 4%. The marketing director attributes the online increase to the spring promotion.','What contributed to the rise in online sales?','A spring promotion','A reduction in product range','Longer store opening hours','A new payment policy',0,'The report attributes the increase to the spring promotion.'],
['EMAIL: We received your application for the training program. Because places are limited, selected participants will be notified by October 12.','When will selected participants be informed?','By October 12','On the application date','At the end of the year','Within two business hours',0,'The email gives October 12 as the notification deadline.'],
['POLICY: Employees traveling more than 100 kilometers for business may claim meal expenses up to 800 baht per day. Original receipts must be attached.','What is required for reimbursement?','Original receipts','A supervisor’s passport','A hotel booking confirmation','A personal bank statement',0,'The policy requires original receipts to be attached.'],
['EMAIL: The first shipment contained the correct number of items, but several units were the wrong model. Please arrange an exchange rather than a refund.','What does the sender request?','An exchange of the incorrect items','A refund for the entire order','A larger quantity of products','A cancellation of future shipments',0,'The sender explicitly requests an exchange, not a refund.'],
['NOTICE: Due to renovations, the customer service desk will operate from the temporary office beside Entrance C until further notice.','Where is the temporary customer service desk?','Beside Entrance C','On the top floor','Inside the cafeteria','Near the loading dock',0,'The notice locates the temporary office beside Entrance C.'],
['EMAIL: I reviewed the draft proposal and added comments to the pricing section. The technical specifications look complete, so no changes are needed there.','Which section requires attention?','Pricing','Technical specifications','Staff biographies','Project timeline',0,'Comments were added to the pricing section; the technical specifications need no changes.'],
['CONTRACT: Either party may terminate this agreement by providing written notice at least 60 days in advance.','How much advance notice is required?','60 days','30 days','45 days','90 days',0,'The contract specifies at least 60 days.'],
['NEWSLETTER: The company’s annual volunteer day will take place on Saturday, November 16. Staff may choose between the park cleanup and food-bank activities. Registration closes November 8.','What must employees do by November 8?','Register for an activity','Complete a safety inspection','Submit an expense report','Attend a budget meeting',0,'Registration closes on November 8.']
]
};
const labels={vocabulary:'Vocabulary',grammar:'Grammar',listening:'Listening',reading:'Reading'};
let answers=Array(80).fill(null),index=0,remaining=60*60,timer=null,selectedAccent='en-US';
const readingPrompts=[
'Why was the notice written?','What is the recipient asked to do?','Which qualification is preferred rather than required?','What must department heads do by May 5?','How can attendees receive a discount?','What is the supplier offering?','What will change next Monday?','What is the purpose of the email?','When will the late fee apply?','Which building is inspected first?','What is the recipient expected to review?','What must visitors do?','What contributed to the rise in online sales?','When will selected participants be informed?','What is required for reimbursement?','What does the sender request?','Where is the temporary customer service desk?','Which section requires attention?','How much advance notice is required?','What must employees do by November 8?'
];
const all=Object.entries(groups).flatMap(([skill,qs],g)=>qs.map((q,i)=>{const opts=skill==='reading'?q.slice(2,6):q.slice(1,5),shift=(i+g)%4,correctIndex=skill==='reading'?q[6]:q[5],explanation=skill==='reading'?q[7]:q[6];return{skill,q:skill==='reading'?q[0]+'|||'+readingPrompts[i]:q[0],o:[...opts.slice(shift),...opts.slice(0,shift)],a:(correctIndex-shift+4)%4,e:explanation,audio:skill==='listening'?q[7]||'':''}}));
function mount(){
 const host=$('#placementPanel');if(!host)return;
 const saved=localStorage.getItem(STORE);
 host.innerHTML='<div class="placement-intro"><p class="eyebrow">BEFORE DAY 1 · BASELINE DIAGNOSTIC</p><h2>TOEIC Placement Test</h2><p>80 ข้อ · 4 ทักษะ · เวลาสูงสุด 60 นาที</p><div class="placement-stats"><span>20 Vocabulary</span><span>20 Grammar</span><span>20 Listening</span><span>20 Reading</span></div><p class="muted">ข้อสอบนี้เป็นแบบประเมินวินิจฉัยที่สร้างขึ้นใหม่ ไม่ใช่ข้อสอบ ETS และไม่สามารถแปลงเป็นคะแนน TOEIC อย่างเป็นทางการได้ แนะนำให้ทำในที่เงียบ ไม่เปิดเฉลย และใช้หูฟังสำหรับ Listening</p><button class="primary" id="placementStart">เริ่มทำ Placement Test →</button> '+(saved?'<button class="secondary" id="placementView">ดูผลครั้งล่าสุด</button>':'')+'</div><div id="placementExam" hidden></div><div id="placementResult" hidden></div>';
 $('#placementStart').onclick=start;
 if($('#placementView'))$('#placementView').onclick=()=>showResult(JSON.parse(saved));
}
function start(){
 answers=Array(80).fill(null);index=0;remaining=3600;$('#placementResult').hidden=true;$('#placementExam').hidden=false;render();
 if(timer)clearInterval(timer);
 timer=setInterval(()=>{remaining--;const el=$('#placementTimer');if(el)el.textContent=fmt(remaining);if(remaining<=0)finish();},1000);
}
function fmt(n){return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
function speakListening(text){
 if(!('speechSynthesis'in window))return;
 speechSynthesis.cancel();
 const utterance=new SpeechSynthesisUtterance(text);
 utterance.lang=selectedAccent;
 const voices=speechSynthesis.getVoices();
 const exact=voices.find(v=>v.lang.toLowerCase()===selectedAccent.toLowerCase());
 const regional=voices.find(v=>v.lang.toLowerCase().startsWith(selectedAccent.slice(0,2).toLowerCase()));
 const english=voices.find(v=>v.lang.toLowerCase().startsWith('en-'));
 const voice=exact||regional||english;
 if(voice){utterance.voice=voice;utterance.lang=voice.lang}
 speechSynthesis.speak(utterance);
}
function estimateCEFR(percent){
 // Conservative, provisional score bands for this unvalidated in-house diagnostic.
 if(percent<25)return 'A1';
 if(percent<40)return 'A2';
 if(percent<55)return 'B1';
 if(percent<70)return 'B2';
 return 'C1';
}
function render(){
 const item=all[index],groupStart=Math.floor(index/20)*20;
 const context=item.skill==='listening'?item.audio:item.skill==='reading'?item.q.split('|||')[0]:'';
 const prompt=item.skill==='reading'?item.q:item.q;
 $('#placementExam').innerHTML='<div class="exam-head"><div><b>Placement Test</b><small> · '+labels[item.skill]+' · '+(index+1)+'/80</small></div><span class="timer" id="placementTimer">'+fmt(remaining)+'</span></div><div class="placement-progress"><i style="width:'+((index+1)/80*100)+'%"></i></div>'+(item.skill==='listening'?'<div class="explanation"><label class="placement-accent-label" for="placementAccent">English accent <select id="placementAccent"><option value="en-US" '+(selectedAccent==='en-US'?'selected':'')+'>American English</option><option value="en-GB" '+(selectedAccent==='en-GB'?'selected':'')+'>British English</option><option value="en-CA" '+(selectedAccent==='en-CA'?'selected':'')+'>Canadian English</option><option value="en-AU" '+(selectedAccent==='en-AU'?'selected':'')+'>Australian English</option></select></label><button class="secondary" id="placementPlay">▶ Play listening passage</button><p class="small muted">เลือกสำเนียงภาษาอังกฤษจากเสียงที่อุปกรณ์มีให้บริการ เสียงเป็นระบบสังเคราะห์ ไม่ใช่เสียงบันทึกจากผู้พูดจริง</p></div>':'')+'<div class="exam-question"><div class="q-meta">'+labels[item.skill].toUpperCase()+' · QUESTION '+(index+1)+'</div>'+(item.skill==='reading'?'<div class="placement-passage">'+context+'</div>':'')+'<p class="q-prompt">'+(item.skill==='reading'?item.q.split('|||')[1]||item.q:item.q)+'</p><div class="answers">'+item.o.map((v,i)=>'<button class="answer '+(answers[index]===i?'selected':'')+'" data-answer="'+i+'">'+String.fromCharCode(65+i)+'. '+v+'</button>').join('')+'</div></div><div class="placement-controls"><button class="secondary" id="placementPrev" '+(index===0?'disabled':'')+'>← Previous</button><span class="muted small">'+answers.filter(x=>x!==null).length+' / 80 answered</span>'+(index===79?'<button class="primary" id="placementFinish">Submit test</button>':'<button class="primary" id="placementNext">Next →</button>')+'</div>';
 $('#placementExam').querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{answers[index]=+b.dataset.answer;render()});
 $('#placementPrev').onclick=()=>{if(index>0){index--;render()}};
 if($('#placementNext'))$('#placementNext').onclick=()=>{index++;render()};
 if($('#placementFinish'))$('#placementFinish').onclick=finish;
 if($('#placementAccent'))$('#placementAccent').onchange=e=>{selectedAccent=e.target.value};
 if($('#placementPlay'))$('#placementPlay').onclick=()=>speakListening(item.audio);
}
function finish(){
 if(timer)clearInterval(timer);timer=null;
 const scores={vocabulary:0,grammar:0,listening:0,reading:0},counts={vocabulary:0,grammar:0,listening:0,reading:0};
 all.forEach((q,i)=>{counts[q.skill]++;if(answers[i]===q.a)scores[q.skill]++});
 const total=Object.values(scores).reduce((a,b)=>a+b,0);
 const pct=Math.round(total/80*100);
 const band=pct>=90?'Advanced diagnostic range':pct>=75?'Upper-intermediate diagnostic range':pct>=60?'Intermediate diagnostic range':pct>=40?'Elementary diagnostic range':'Foundation diagnostic range';
 const cefr=estimateCEFR(pct);
 const skillCEFR=Object.fromEntries(Object.entries(scores).map(([skill,score])=>[skill,estimateCEFR(score/counts[skill]*100)]));
 const result={resultVersion:2,date:new Date().toISOString(),scores,counts,total,pct,band,cefr,skillCEFR,cefrNote:'Preliminary internal estimate only; this test has not been empirically calibrated to CEFR.',answers:answers.slice(),duration:3600-remaining};
 localStorage.setItem(STORE,JSON.stringify(result));
 $('#placementExam').hidden=true;showResult(result);
}
function showResult(r){
 // Migrate historical attempts created before the Reading answer-map fix.
 // Old Reading options were q.slice(1,5): prompt + first three choices.
 // Recover the selected text using the old rotation, then map it to the corrected options.
 if(!r.resultVersion&&Array.isArray(r.answers)&&r.answers.length===80){
  const migratedAnswers=r.answers.slice();
  const legacyInvalid=[];
  for(let i=0;i<20;i++){
   const globalIndex=60+i, selected=migratedAnswers[globalIndex];
   if(selected===null||selected===undefined)continue;
   const q=groups.reading[i], oldOptions=q.slice(1,5), shift=(i+3)%4;
   const selectedText=oldOptions[(selected+shift)%4];
   const currentOptions=q.slice(2,6);
   const currentIndex=currentOptions.indexOf(selectedText);
   if(currentIndex<0){legacyInvalid.push({question:globalIndex+1,selectedText});migratedAnswers[globalIndex]=null;}
   else migratedAnswers[globalIndex]=(currentIndex-shift+4)%4;
  }
  r.answers=migratedAnswers;
  const recalculated={vocabulary:0,grammar:0,listening:0,reading:0};
  const counts={vocabulary:20,grammar:20,listening:20,reading:20};
  all.forEach((q,i)=>{if(migratedAnswers[i]===q.a)recalculated[q.skill]++});
  const total=Object.values(recalculated).reduce((a,b)=>a+b,0);
  const pct=Math.round(total/80*100);
  r={...r,answers:migratedAnswers,scores:recalculated,counts,total,pct,
    band:pct>=90?'Advanced diagnostic range':pct>=75?'Upper-intermediate diagnostic range':pct>=60?'Intermediate diagnostic range':pct>=40?'Elementary diagnostic range':'Foundation diagnostic range',
    cefr:estimateCEFR(pct),
    skillCEFR:Object.fromEntries(Object.entries(recalculated).map(([skill,score])=>[skill,estimateCEFR(score/20*100)])),
    historicalReadingMigration:true,legacyInvalid,resultVersion:2};
  localStorage.setItem(STORE,JSON.stringify(r));
 }
 $('#placementExam').hidden=true;$('#placementResult').hidden=false;
 const weak=Object.entries(r.scores).sort((a,b)=>a[1]-b[1])[0][0];
 const overallCEFR=r.cefr||estimateCEFR(r.pct);
 const skillCEFR=r.skillCEFR||Object.fromEntries(Object.entries(r.scores).map(([k,v])=>[k,estimateCEFR(v/(r.counts?.[k]||20)*100)]));
 const advice={vocabulary:'เน้น word families, collocations และคำศัพท์ตามบริบทธุรกิจ',grammar:'ทบทวน parts of speech, verb patterns, clauses และ subject–verb agreement',listening:'ฝึกจับ main idea, key details, paraphrase และ distractors',reading:'ฝึก skimming, scanning, inference และบริหารเวลา Part 5–7'};
 const migrationNotice=r.historicalReadingMigration?'<div class="explanation"><b>อัปเดตผลสอบเดิมแล้ว</b><p>ระบบแปลงคำตอบ Reading จากรูปแบบตัวเลือกเดิมและคำนวณคะแนนใหม่แล้ว'+(r.legacyInvalid?.length?' โดยมี '+r.legacyInvalid.length+' ข้อที่คำตอบเดิมเป็นข้อความที่ไม่ใช่ตัวเลือกคำตอบ จึงนับเป็นไม่ได้ตอบ':'')+'.</p></div>':'';
 const reviewHtml='<section class="answer-review"><h3>เฉลยและคำอธิบายครบ 80 ข้อ</h3><p class="small muted">เปิดดูแต่ละข้อเพื่อตรวจคำตอบและอ่านเหตุผลประกอบ</p>'+all.map((q,i)=>{const chosenIndex=r.answers?.[i];const correct=chosenIndex===q.a;const passage=q.skill==='reading'?q.q.split('|||')[0]:'';const prompt=q.skill==='reading'?q.q.split('|||')[1]:q.q;return '<details class="review-item"><summary><span>ข้อ '+(i+1)+' · '+labels[q.skill]+'</span><b class="'+(correct?'review-correct':'review-wrong')+'">'+(chosenIndex===null||chosenIndex===undefined?'ไม่ได้ตอบ':correct?'ถูกต้อง':'ไม่ถูกต้อง')+'</b></summary>'+(passage?'<div class="placement-passage">'+escapeHTML(passage)+'</div>':'')+'<p class="review-question">'+escapeHTML(prompt)+'</p><p><b>คำตอบที่ถูก:</b> '+String.fromCharCode(65+q.a)+'. '+escapeHTML(q.o[q.a])+'</p><p><b>คำตอบของคุณ:</b> '+(chosenIndex===null||chosenIndex===undefined?'ไม่ได้ตอบ':String.fromCharCode(65+chosenIndex)+'. '+escapeHTML(q.o[chosenIndex]))+'</p><p class="review-explanation"><b>คำอธิบาย:</b> '+escapeHTML(q.e)+'</p>'+(q.skill==='listening'?'<p class="small muted"><b>Listening transcript:</b> '+escapeHTML(q.audio)+'</p>':'')+'</details>'}).join('')+'</section>';
 $('#placementResult').innerHTML=migrationNotice+'<p class="eyebrow">YOUR BASELINE</p><h2>ผลการประเมินเบื้องต้น</h2><div class="result-score">'+r.total+' / 80 <small>('+r.pct+'%)</small></div><section class="cefr-card"><p class="eyebrow">ESTIMATED CEFR LEVEL</p><div class="cefr-level">'+overallCEFR+'</div><p>ระดับภาษาอังกฤษโดยประมาณจากคะแนนรวม</p><span class="cefr-caution">ความเชื่อมั่น: ต่ำ · ใช้เป็นแนวทางตั้งต้นเท่านั้น</span></section><h3>'+r.band+'</h3><p class="muted">วันที่ทำ: '+new Date(r.date).toLocaleString('th-TH')+' · ใช้เวลา '+fmt(r.duration)+'</p><h3>CEFR แยกตามทักษะ</h3><div class="placement-results">'+Object.entries(r.scores).map(([k,v])=>'<div class="skill-row"><div><b>'+labels[k]+'</b><span>'+skillCEFR[k]+' · '+v+' / 20 ('+Math.round(v/20*100)+'%)</span></div><div class="bar"><i style="width:'+(v/20*100)+'%"></i></div></div>').join('')+'</div><div class="explanation"><b>จุดที่ควรเริ่มพัฒนา: '+labels[weak]+'</b><p>'+advice[weak]+'</p><p>หลักสูตรแนะนำ: เริ่ม Day 1 และใช้ผลแยกทักษะนี้จัดลำดับการทบทวน โดยยังคงเรียนครบทั้ง 84 วัน</p></div><p class="small muted">CEFR เป็นการประมาณแบบ heuristic จากข้อสอบภายใน 80 ข้อ ไม่ใช่ผลสอบ CEFR ที่ผ่านการสอบเทียบหรือการรับรองจากหน่วยงานภาษา ข้อสอบมีจำนวนข้อจำกัดและ Listening ใช้ Text-to-Speech จึงควรยืนยันระดับด้วยแบบทดสอบมาตรฐานเพิ่มเติม · C2 ไม่ได้ประเมินในชุดนี้</p><button class="primary" id="placementGoCourse">เริ่มหลักสูตร 84 วัน →</button> <button class="secondary" id="placementRetake">ทำแบบทดสอบใหม่</button>'+reviewHtml;
 $('#placementGoCourse').onclick=()=>{if(typeof showView==='function')showView('course');if(typeof openLesson==='function')openLesson(1)};
 $('#placementRetake').onclick=start;
}
function addNav(){
 const nav=$('.sidebar');
 if(nav&&!nav.querySelector('[data-view="placement"]')){
  const anchor=nav.querySelector('[data-view="course"]');
  const b=document.createElement('button');b.className='nav';b.dataset.view='placement';b.innerHTML='◎ <span>Placement Test</span>';
  anchor.insertAdjacentElement('beforebegin',b);b.onclick=()=>showView('placement');
 }
}
document.addEventListener('DOMContentLoaded',()=>{addNav();mount()});
if(document.readyState!=='loading'){addNav();mount()}
})();
