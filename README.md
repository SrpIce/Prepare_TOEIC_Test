# TOEIC MASTER 900+ — V2

Independent, responsive TOEIC study workspace for an 84-day / 12-week learning plan.

## Run
Open `index.html` in a modern browser, or serve this folder with any static web server. No build step or API key is required.

## Modules
- Dashboard: course completion, attempts, accuracy, streak placeholder, roadmap and quick access.
- 84-day course: day-by-day objectives, vocabulary, grammar focus, listening/reading activities, review task and local completion tracking.
- Practice bank: original grammar, vocabulary, reading and listening-script questions with explanations, filters and error log.
- Full mock simulation: 200-question interface, 120-minute timer, answer navigation, unanswered tracking and result review. Question set is assembled from the included original practice pool; it is a practice simulation, not an official TOEIC form.
- Performance: skill-level accuracy and error review.
- Browser Text-to-Speech for sample listening scripts where supported.

## Data and limitations
- Progress is stored in browser localStorage on the current device/browser. There is no login, server database or cross-device synchronization.
- Listening practice currently uses text scripts and browser Text-to-Speech; it does not include licensed or recorded audio.
- The 84-day curriculum is structured daily guidance. It is not 84 fully authored textbook-length lessons.
- Mock test interface has 200 numbered items, but the current pool rotates original practice prompts to populate the simulation. It should not be treated as a validated TOEIC-equivalent score.
- No score guarantee. 900+ is a learning target, not a promised result.
- This independent project is not affiliated with or endorsed by ETS.

## Deploy on existing Netlify site
Keep the existing Netlify site connected to this GitHub repository and its production branch. Review and merge the V2 pull request into the production branch only after testing. Netlify should deploy automatically if deploy-on-push is enabled. The production URL is unchanged when the same Netlify site is retained.


## 84-day curriculum expansion

The expanded course map now defines 12 weekly themes and 84 day-specific lesson focuses, grammar targets, listening task types, reading task types, and study objectives. Days 2–84 use an interactive 10-question daily assessment flow with immediate feedback, answer explanations, local error logging, and a completion gate. Day 1 retains its dedicated 30-question lesson.

### Content limitations to address in the next content-authoring pass

- The shared question bank currently contains 30 questions and is rotated across Days 2–84. Daily assessment mechanics are active, but the question bank is not yet 840 unique questions.
- Vocabulary for Days 2–84 is drawn from the current shared vocabulary list; it is not yet a unique 15–25-word list for every day.
- Listening scripts for Days 2–84 are browser Text-to-Speech practice prompts, not professionally recorded audio or fully authored multi-speaker TOEIC dialogues.
- Reading passages for Days 2–84 are short practice notices; full-length, day-specific Part 6/7 passages and multi-document sets remain to be authored.
- All material is independent practice content and is not affiliated with or endorsed by ETS.
