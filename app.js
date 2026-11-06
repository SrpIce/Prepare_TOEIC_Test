const roadmap = [
  "Diagnostic & Core Vocabulary","Essential Grammar Foundations","Workplace Vocabulary & Part 1","Listening Parts 1–2","Listening Parts 3–4","Reading Parts 5–6","Reading Part 7: Single Passages","Double & Triple Passages","Advanced Grammar & Paraphrase","Timed Practice & Weakness Review","Mini Mock Tests","Full Mock Tests & Final Review"
];
const key = "toeic-master-progress-v1";
let completed = JSON.parse(localStorage.getItem(key) || "[]");
const weeks = document.getElementById("weeks");
roadmap.forEach((name,i)=>{const el=document.createElement("div");el.className="week";el.innerHTML=`<span><b>Week ${i+1}</b><br><small>${name}</small></span><small>Days ${i*7+1}–${i*7+7}</small>`;weeks.appendChild(el)});
function render(){document.getElementById("daysDone").innerHTML=`${completed.length} <small>/ 84</small>`;document.getElementById("lessonsDone").textContent=completed.length;document.getElementById("progressBar").style.width=(completed.length/84*100)+"%";document.getElementById("completeBtn").textContent=completed.includes(1)?"Day 1 completed ✓":"Mark day as complete"}
render();
document.getElementById("completeBtn").addEventListener("click",()=>{if(!completed.includes(1))completed.push(1);localStorage.setItem(key,JSON.stringify(completed));render()});
document.getElementById("startBtn").addEventListener("click",()=>document.querySelector(".today").scrollIntoView({behavior:"smooth"}));
document.querySelectorAll(".choice").forEach(b=>b.addEventListener("click",()=>{const f=document.getElementById("feedback");if(b.dataset.answer==="B"){f.textContent="Correct. “Each” is singular, so it takes the singular verb “is”." ;f.style.color="#69e0d0"}else{f.textContent="Not quite. “Each” is grammatically singular; the correct answer is B. is.";f.style.color="#ffb18b"}}));
