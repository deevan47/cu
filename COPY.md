# Cheer Up: copy inventory

Every piece of text a visitor can see or that gets sent to WhatsApp, in one place.

**Rules used for the New text column**
1. **Emotion is the USP.** Every headline sells a feeling (being remembered, being seen, the quiet pause, the happy tear). The gift is just the carrier.
2. **Hook first.** Headlines are built to stop the scroll: a specific moment, a small tension, or a line people want to finish reading.
3. **Gender-neutral.** No he, she, her, him or his anywhere. "They / their" for the receiver. Relationship labels (Mum, Dad) stay only as tab names, because customers search by them.
4. **Business rules untouched:** 70% / 30% payment, 24-hour delivery, Pune only, free preview, photos deleted, cancel until printing starts.

**Status:** the v2 hook-led, emotion-first, gender-neutral copy has been **applied to the site** (2026-10-27). The **Current text** column below is what is live now. **New text** is blank for the next round: write a replacement there and tell me "apply COPY.md".

**Notes**
- Category and product names are unchanged on purpose. Idea cards and review tabs match on them.
- Where New text equals Current text, the line was already doing its job.
- The broken sentence in 5.5 was fixed when v2 was applied.
- Prices are real numbers now. Photos are real but still show the Cheer Up logo on the product rather than a customer's photo or name, and there are no real reviews yet.
- Two kinds of copy a visitor sees before the page even opens were added in the 2026-11-18 pass: section 17 (what Google and WhatsApp show) and section 18 (the fixed set of button labels).

Legend: **H1** main page heading, **H2** section heading, **H3** sub heading, **P** paragraph, **BTN** button, **LINK** text link, **TAB** tab label.

---

## 0. Site-wide

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 0.1 | Browser tab title | `src/routes.jsx` | now one per page, see section 17 |  |
| 0.2 | Brand name | `src/data/site.js` | Cheer Up |  |
| 0.3 | Tagline | `src/data/site.js` | Smile Delivered |  |
| 0.4 | City | `src/data/site.js` | Pune |  |
| 0.5 | Founder name | `src/data/site.js` | Deevan |  |
| 0.6 | Policies "last updated" | `src/data/site.js` | October 2026 |  |
| 0.7 | Phone shown big on Contact | `src/data/site.js` | +91 9505 9696 70 |  |
| 0.8 | Phone, digits only (the copy button) | `src/data/site.js` | 9505969670 |  |
| 0.9 | Email | `src/data/site.js` | cheerup.smiled@gmail.com |  |
| 0.10 | Favicon letters | `public/favicon.svg` | CU |  |

Screen-reader / accessibility labels (not visible, but read aloud):

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 0.11 | Logo link label (header, footer) | `Header.jsx`, `Footer.jsx` | Cheer Up, back to home |  |
| 0.12 | Header logo image label | `Logo.jsx` | Cheer Up |  |
| 0.13 | Footer logo image label | `Footer.jsx` | Cheer Up, Smile Delivered |  |
| 0.14 | Home logo image label | `Hero.jsx` | Cheer Up, Smile Delivered |  |
| 0.15 | Nav labels | `Header.jsx`, `MobileMenu.jsx`, `Footer.jsx` | Main / Mobile / Footer / Policies |  |
| 0.16 | Order sheet dialog label | `OrderSheet.jsx` | Make this gift theirs |  |
| 0.17 | Who-for tabs label | `LuckyOne.jsx` | Who are you thinking of |  |
| 0.18 | Categories tabs label | `Products.jsx` | Gift types |  |
| 0.19 | Reviews tabs label | `Reviews.jsx` | Reviews by gift |  |

---

## 1. Header (every page)

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 1.1 | Nav: Home | — | *(removed from the nav; the logo links home)* |  |
| 1.2 | Nav: Products | `src/routes.jsx` | Gifts |  |
| 1.3 | Nav: How it works | `src/routes.jsx` | How it works |  |
| 1.4 | Nav: About | `src/routes.jsx` | My story |  |
| 1.5 | Nav: Reviews | — | *(removed from the nav until there are real reviews; page still at `/reviews`)* |  |
| 1.6 | Nav: FAQ | `src/routes.jsx` | Questions |  |
| 1.7 | Nav: Contact | `src/routes.jsx` | Contact |  |
| 1.8 | BTN (desktop header) | `Header.jsx` | Chat on WhatsApp |  |
| 1.9 | Mobile menu button (closed) | `Header.jsx` | Menu |  |
| 1.10 | Mobile menu button (open) | `Header.jsx` | Close |  |
| 1.11 | Mobile sticky bottom bar BTN | `StickyBar.jsx` | Chat on WhatsApp |  |
| 1.12 | Mobile menu BTN (last item) | `MobileMenu.jsx` | Chat on WhatsApp |  |

---

## 2. Home page (`src/pages/home/`)

### 2.1 Hero (`Hero.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.1.1 | Eyebrow | Made for one person · Pune |  |
| 2.1.2 | **H1** | Give them the **“you remembered” moment.** |  |
| 2.1.3 | Lead P (the last sentence carries the marker highlight, see section 19) | That tiny pause when they open it, go quiet, and realise you really thought of them? I make that happen. Their photo, their name, your inside joke. **At their door in Pune within 24 hours.** |  |
| 2.1.4 | BTN primary | Chat on WhatsApp |  |
| 2.1.5 | BTN outline | See the gifts |  |
| 2.1.6 | Trust point 1 | See it first, free |  |
| 2.1.7 | Trust point 2 | Pay only once you love it |  |
| 2.1.8 | Trust point 3 | No online payment. Just a chat. |  |
| 2.1.9 | Trust point 4 | Your photos deleted after delivery |  |

### 2.1b Showcase strip (`Showcase.jsx`)

Four real products directly under the hero, each named and priced. The names and
prices are read live from `src/data/products.js`, so they can never drift from the
Gifts page; to change which four appear, edit the `PICKS` list in `Showcase.jsx`.

| # | Role | Current text | New text |
|---|---|---|---|
| 2.1b.1 | Product 1 (Polaroids) | Big Snaps · ₹45 per print |  |
| 2.1b.2 | Product 2 (Mugs) | Colour inside mug · ₹329 |  |
| 2.1b.3 | Product 3 (Keychains) | Photo keychain · ₹159 |  |
| 2.1b.4 | Product 4 (T-shirts) | Photo tee · ₹649 |  |

### 2.2 Who's the lucky one (`LuckyOne.jsx`, data in `src/data/people.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.2.1 | **H2** | Who’s on your **mind right now?** |  |
| 2.2.2 | Sub P | Pick a person. See what I’d make. |  |
| 2.2.3 | TAB 1 | Mum |  |
| 2.2.4 | TAB 2 | Dad |  |
| 2.2.5 | TAB 3 | Partner |  |
| 2.2.6 | TAB 4 | Best friend |  |
| 2.2.7 | TAB 5 | Sibling |  |
| 2.2.8 | TAB 6 | Colleague |  |
| 2.2.9 | TAB 7 | Teacher |  |
| 2.2.10 | TAB 8 | Not sure yet |  |
| 2.2.11 | BTN on every idea card | Order this on WhatsApp |  |
| 2.2.12 | Link on every idea card | See all {category in lowercase} |  |

Idea cards (category labels unchanged because they must match product category names):

| # | For | Category | Current one-liner | New one-liner |
|---|---|---|---|---|
| 2.2.13 | Mum | Polaroids | Fill their fridge with every face they love. |  |
| 2.2.14 | Mum | Paintings and prints | Your baby photo, framed. Keep tissues ready. For both of you. |  |
| 2.2.15 | Mum | Mugs | They’ve poured chai for everyone. Now pour them one with their name on it. |  |
| 2.2.16 | Dad | Mugs | They’ll never say it. They’ll just drink from it every morning. |  |
| 2.2.17 | Dad | Keychains | Car keys. House keys. And you. |  |
| 2.2.18 | Dad | Paintings and prints | The photo they’re secretly proudest of, where they can see it daily. |  |
| 2.2.19 | Partner | Phone cases | Be the face in their hand a hundred times a day. |  |
| 2.2.20 | Partner | Paintings and prints | Two people. One painting. A love story worth hanging up. |  |
| 2.2.21 | Partner | Polaroids | Every date so far, in one little stack. For the days you’re apart. |  |
| 2.2.22 | Best friend | Mugs | The inside joke only the two of you will ever get. |  |
| 2.2.23 | Best friend | T-shirts and hoodies | Their worst photo, on a T-shirt. Pure love. |  |
| 2.2.24 | Best friend | Keychains | A tiny you, on their keys. Forever. |  |
| 2.2.25 | Sibling | Phone cases | A childhood photo. Maximum embarrassment. Maximum love. |  |
| 2.2.26 | Sibling | Mugs | “Mum’s favourite.” Now it’s official. |  |
| 2.2.27 | Sibling | T-shirts and hoodies | Matching hoodies. Because nobody gets you like they do. |  |
| 2.2.28 | Colleague | Mugs | Their own mug on the desk. Proof someone noticed. |  |
| 2.2.29 | Colleague | Keychains | A goodbye they’ll carry into the next chapter. |  |
| 2.2.30 | Colleague | Polaroids | The whole team, in their hands, on their last day. |  |
| 2.2.31 | Teacher | Paintings and prints | A whole class in one frame. And a thank-you they’ll keep forever. |  |
| 2.2.32 | Teacher | Mugs | For the teacher who believed in you. Warm chai, warmer thanks. |  |
| 2.2.33 | Teacher | Polaroids | A year of small moments, handed back with a thank-you. |  |

"Not sure yet" shows a help card instead:

| # | Role | Current text | New text |
|---|---|---|---|
| 2.2.34 | P | Tell me three things about them. I’ll find the feeling. |  |
| 2.2.35 | BTN | Chat on WhatsApp |  |

### 2.3 Promise band (`Promises.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.3.1 | H2 #1 | Love it first. Pay later. |  |
| 2.3.2 | P #1 | A free design preview, every single time. You say yes only when your heart does. |  |
| 2.3.3 | H2 #2 (big figure now reads 70/30) | 70% after you approve. 30% at the door. |  |
| 2.3.4 | P #2 | No online checkout. You pay on WhatsApp once you love the preview, and the rest when it’s in your hands. |  |
| 2.3.5 | H2 #3 | Say yes today. See them smile tomorrow. |  |
| 2.3.6 | P #3 | I check every piece myself and hand-deliver it across Pune within 24 hours. Your photos are deleted after. |  |

### 2.4 Six ways (`Categories.jsx`, data in `src/data/products.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.4.1 | **H2** | Six ways to say **“you matter to me.”** |  |
| 2.4.2 | LINK | See them all |  |
| 2.4.9 | Line under the grid (the one place on Home that offers the off-catalogue route) | Not in the catalogue? I’ll make it. **Request a gift** |  |
| 2.4.3 | Card 1: name / tagline | Mugs / Every morning, a little reminder of you. |  |
| 2.4.4 | Card 2: name / tagline | Keychains / The smallest way to stay close. |  |
| 2.4.5 | Card 3: name / tagline | Paintings and prints / Memories that deserve a wall. |  |
| 2.4.6 | Card 4: name / tagline | Polaroids / Little squares of “remember when.” |  |
| 2.4.7 | Card 5: name / tagline | T-shirts and hoodies / Wear the memory. Wear the joke. |  |
| 2.4.8 | Card 6: name / tagline | Phone cases / Seen a hundred times a day. Felt every time. |  |

### 2.5 Process (`Process.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.5.1 | **H2** | Three steps. **One happy doorbell.** |  |
| 2.5.2 | LINK | See every step |  |
| 2.5.3 | Step 1 H3 | Tell me about them. |  |
| 2.5.4 | Step 1 P | A photo, a name, or just “help, it’s their birthday.” Start with the feeling. I’ll handle the rest. |  |
| 2.5.5 | Step 2 H3 | I send you a free preview. |  |
| 2.5.6 | Step 2 P | Change anything until it feels exactly right. Then pay 70%. |  |
| 2.5.7 | Step 3 H3 | Ding-dong. Smile unlocked. |  |
| 2.5.8 | Step 3 P | At their door within 24 hours. Pay the last 30% when it’s in your hands. |  |

### 2.6 Founder teaser (`FounderTeaser.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.6.1 | Big line | No call centre. No warehouse. **Just someone who truly cares.** |  |
| 2.6.2 | P | I design it, check it and deliver it myself. Your gift carries your feelings, and I treat it that way. |  |
| 2.6.3 | Signature | Deevan, founder |  |
| 2.6.4 | LINK | Meet the person behind it |  |

### 2.7 Final call to action (`FinalCta.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.7.1 | H2 | Not sure how to show you care? |  |
| 2.7.2 | P | Tell me three things about them. I’ll turn them into something they’ll treasure. |  |
| 2.7.3 | BTN | Chat on WhatsApp |  |

---

## 3. Products page (`src/pages/products/Products.jsx`, data `src/data/products.js`)

Page frame:

| # | Role | Current text | New text |
|---|---|---|---|
| 3.1 | **H1** | Pick a gift. **Pour your heart into it.** |  |
| 3.2 | Sub P | Six kinds of gift, fourteen ways to say what words can’t. Prices from ₹35. |  |
| 3.3 | BTN on every product | Personalise this |  |
| 3.4 | LINK on every product | Ask about this |  |
| 3.5 | Price on every product | ₹269 … ₹759, and ₹35 per print / ₹45 per print for Polaroids |  |
| 3.6 | Bottom band P | Can’t decide? Tell me about them. I’ll find the feeling. |  |
| 3.7 | Bottom band BTN | Chat on WhatsApp |  |
| 3.31 | Jump chips above the sections | Mugs / Keychains / Paintings and prints / Polaroids / T-shirts and hoodies / Phone cases |  |
| 3.32 | Line at the foot of the page | Not in the catalogue? I’ll make it. **Request a gift** |  |

Categories (all six are now stacked on the page; the chips above jump to them):

| # | Category | Current intro line | New intro line |
|---|---|---|---|
| 3.8 | Mugs | Their name, in their hands, every single morning. |  |
| 3.9 | Keychains | Small enough to carry everywhere. That’s the whole point. |  |
| 3.10 | Paintings and prints | The photo you keep going back to deserves a wall of its own. |  |
| 3.11 | Polaroids | Your camera roll, finally something they can hold. |  |
| 3.12 | T-shirts and hoodies | A gift they’ll wear close, not fold away. |  |
| 3.13 | Phone cases | What they hold all day will now hold you too. |  |

Products (names unchanged because they are matching keys):

| # | Category | Current name | Current description | New name | New description |
|---|---|---|---|---|---|
| 3.14 | Mugs | Classic white mug | Your photo, wrapped around white ceramic. Every sip feels like a hug. |  |  |
| 3.15 | Mugs | Colour inside mug | White outside, a burst of colour inside and on the handle. Just like them. |  |  |
| 3.16 | Mugs | Magic mug | Looks plain until the chai hits. Then your memory appears. |  |  |
| 3.17 | Keychains | Photo keychain | A favourite memory, always in their pocket. |  |  |
| 3.19 | Keychains | Two-sided keychain | Two sides. Two memories. Two reasons to smile. |  |  |
| 3.20 | Paintings and prints | Framed photo print | Printed, framed, ready to hang or stand. The moment never fades. |  |  |
| 3.21 | Paintings and prints | Painted portrait | Your photo, painted. Someone’s going to tear up. |  |  |
| 3.22 | Paintings and prints | Collage print | All the favourite moments. One frame. |  |  |
| 3.23 | Polaroids | Mini Snaps | Pocket-sized Polaroids for a stack, a wallet or a love letter. |  |  |
| 3.24 | Polaroids | Big Snaps | Large Polaroids for walls, fridges and gift boxes. Memories, on display. |  |  |
| 3.25 | T-shirts and hoodies | Photo tee | Your photo, printed big on soft cotton. A memory they can wear. |  |  |
| 3.26 | T-shirts and hoodies | Words tee | A name, a line or a joke only your gang gets. |  |  |
| 3.28 | Phone cases | Soft case | One photo, edge to edge. Your favourite moment, always with them. |  |  |
| 3.29 | Phone cases | Hard case | A name or initials on a clean colour. Simple. Personal. Theirs. |  |  |

Prices live as plain numbers in `src/data/products.js`; `src/lib/money.js` adds the ₹ and the Indian grouping. A variant with a `unit` (the two Polaroids) prints it after the price. **Name keychain, Custom hoodie and Collage case are not on the site** (no photo and/or commented out in the data file). Each variant also carries an `alt:` line describing its photo.

---

## 4. How it works page (`src/pages/how/How.jsx`, data `src/data/steps.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 4.1 | **H1** | From a feeling to **their doorbell.** |  |
| 4.2 | Sub P | Seven steps. You only do four of them, all on WhatsApp. Not a rupee until you’ve seen the design and loved it. |  |
| 4.2b | Small tag on steps 1, 3, 4 and 7 | You |  |
| 4.3 | Step 1 title | Tell me who it’s for |  |
| 4.4 | Step 1 text | A photo, a name, a joke. Or just “help, it’s their birthday.” Tell me the feeling. I’ll find the gift. |  |
| 4.5 | Step 2 title | See it, free |  |
| 4.6 | Step 2 text | I design it and send you a preview. Free. No strings. |  |
| 4.7 | Step 3 title | Make it feel just right |  |
| 4.8 | Step 3 text | Change anything you like. Nothing prints until you say yes. |  |
| 4.9 | Step 4 title | Say yes. Pay 70%. |  |
| 4.10 | Step 4 text | Then it goes to print with a trusted Pune vendor. |  |
| 4.11 | Step 5 title | I check it, by hand |  |
| 4.12 | Step 5 text | Against your approved design. Not perfect? It doesn’t leave. |  |
| 4.13 | Step 6 title | At their door in 24 hours |  |
| 4.14 | Step 6 text | Hand-delivered across Pune, with WhatsApp updates all the way. |  |
| 4.15 | Step 7 title | Pay the last 30% at the door |  |
| 4.16 | Step 7 text | Only once it’s in your hands. Then your photos are deleted, for good. |  |
| 4.17 | Closing band P | The first step costs nothing. Just say hi. |  |
| 4.18 | Closing band BTN | Chat on WhatsApp |  |

---

## 5. About page (`src/pages/about/About.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 5.1 | **H1** | Hi, I’m **Deevan.** |  |
| 5.2 | Tagline | For the moment someone opens a gift, goes quiet, and realises you really thought about them. |  |
| 5.3 | Body P1 | Tell me who it’s for and what they love. I’ll turn that into something made only for them, send you a preview, and deliver it once you approve. |  |
| 5.4 | Body P2 | It’s quick, and priced so **students can afford it**, because showing you care shouldn’t cost a fortune. |  |
| 5.5 | Body P3 (line break after the first sentence; last sentence is underlined and animates in) | Cheer Up is small on purpose, so your gift gets my full attention.<br>**My only aim is to deliver the smile you want to see.** |  |
| 5.7 | **H2** | Why one person who cares **beats an app.** |  |
| 5.8 | Reason 1 H3 | One human. Start to finish. |  |
| 5.9 | Reason 1 P | The person who reads your message is the person who makes your gift. |  |
| 5.10 | Reason 2 H3 | Made for one. Never mass-made. |  |
| 5.11 | Reason 2 P | Nothing comes off a shelf. Every piece is made for one person you love. |  |
| 5.12 | Reason 3 H3 | Checked by hand. Every time. |  |
| 5.13 | Reason 3 P | Every piece is checked against the design you approved before it leaves. Not right? It doesn’t go. |  |
| 5.14 | Reason 4 H3 | Clueless? Perfect. |  |
| 5.15 | Reason 4 P | Tell me about them. I’ll find the gift that says it for you. |  |
| 5.16 | Closing P | Now you know me. Tell me about them. |  |
| 5.17 | Closing BTN | Chat on WhatsApp |  |

---

## 6. Reviews page (`src/pages/reviews/Reviews.jsx`, data `src/data/reviews.js`)

The three quotes on this page were samples, and each was shown with a badge saying
so, under an author of "Customer name". The only social proof on the site announced
that it was invented. The gallery below them was six dashed placeholder boxes. Both
are gone, and Reviews is out of the nav, until there is something real to show.

**While `REVIEWS` is empty (now):**

| # | Role | Current text | New text |
|---|---|---|---|
| 6.1 | **H1** | Reviews are **on their way.** |  |
| 6.2 | Sub P | Cheer Up is new. Real reviews from real customers go up here, with their permission. |  |
| 6.3 | BTN | Send me your photo on WhatsApp |  |

**Once there are real reviews**, the page shows them all stacked (no tabs) under:

| # | Role | Current text | New text |
|---|---|---|---|
| 6.4 | **H1** | Don’t take **my word** for it. |  |
| 6.5 | Sub P | Every order so far came from a friend of a friend. Here’s what they felt. |  |
| 6.6 | **H2** (only if there are delivery photos) | Delivered. **Smiled at.** |  |

To add one, with the customer's permission, put `{ q, who, product }` in
`src/data/reviews.js`; at three or more, change the reviews route in
`src/routes.jsx` from `group: 'extra'` back to `group: 'main'`.

---

## 7. FAQ page (`src/pages/faq/Faq.jsx`, data `src/data/faqs.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 7.1 | **H1** | Fair questions. **Honest answers.** |  |
| 7.2 | P | Still wondering? **Just ask me on WhatsApp** (a WhatsApp link, with the chat icon) |  |
| 7.2b | Order | “How does payment work?” is now first and open on load; the rest start closed |  |
| 7.3 | Q1 | Can I send my own photo or idea? |  |
| 7.4 | A1 | Yes. That’s how most gifts begin. Send it on WhatsApp and I’ll turn it into a free preview. |  |
| 7.5 | Q2 | How fast will it reach them? |  |
| 7.6 | A2 | Within 24 hours of you approving the design. Pune only, for now. |  |
| 7.7 | A2 link | Delivery |  |
| 7.8 | Q3 | What if I don’t know what to gift? |  |
| 7.9 | A3 | Perfect. Tell me who it’s for, the occasion, and three things they love. I’ll find the gift that says it for you. |  |
| 7.10 | Q4 | How does payment work? |  |
| 7.11 | A4 | 70% after you approve the design, 30% when it’s delivered. No online checkout, just a simple chat on WhatsApp. |  |
| 7.12 | Q5 | What happens to my photos? |  |
| 7.13 | A5 | They’re used for your gift and nothing else. Once it’s delivered, they’re deleted from my phone, my files and our chat. |  |
| 7.14 | A5 link | Privacy |  |
| 7.15 | Q6 | Can I cancel? |  |
| 7.16 | A6 | Yes, until printing starts, with a full refund. After that, no, because it’s made just for them. |  |
| 7.17 | A6 link | Cancellation & refunds |  |

---

## 8. Contact page (`src/pages/contact/Contact.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 8.1 | **H1** | Someone’s about to feel special. **Message me.** |  |
| 8.2 | Sub P | Orders, questions, half-formed ideas. Every message lands on my phone, not a team’s. |  |
| 8.3 | Label | WhatsApp |  |
| 8.4 | Big number (one line at every width) | +91 9505 9696 70 |  |
| 8.5 | BTN | Chat on WhatsApp |  |
| 8.6 | Copy button | Copy number |  |
| 8.7 | Copy button after click | Copied |  |
| 8.8 | Label | Email |  |
| 8.9 | Label | Where |  |
| 8.10 | P | Pune. Ordered on WhatsApp, delivered to their door. |  |
| 8.11 | Label | Your photos |  |
| 8.12 | P | Yours alone, and deleted right after delivery. Privacy (link) |  |

---

## 9. Policy pages (`src/pages/policies/`)

Policies stay clear and plain on purpose. Warmth is added only where it doesn't blur the rule.

Shared on all four:

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 9.1 | Eyebrow | `PolicyLayout.jsx` | Policy, last updated October 2026 |  |
| 9.2 | Label above links to other policies | `PolicyLayout.jsx` | Other policies |  |
| 9.3 | Link labels, the same in the footer, the FAQ and the policy pages | `src/routes.jsx` | Cancellation & refunds / Delivery / Privacy / Terms |  |

**Cancellation and refunds** (`Refund.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.4 | H1 | Cancellation and refunds |  |
| 9.5 | P1 | If you cancel before the design is approved and printing begins, your advance payment is refunded in full. |  |
| 9.6 | P2 | Once printing has started, the order can’t be cancelled or refunded, because it’s made for one person and nobody else can use it. |  |
| 9.7 | — | *(the old P1 and P3 said the same thing; merged into 9.6)* |  |
| 9.8 | P4 | If your order arrives damaged or different from the approved design, tell me within 24 hours with a photo. I’ll reprint or refund it, because it should arrive perfect. |  |

**Delivery** (`Shipping.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.9 | H1 | Delivery |  |
| 9.10 | P1 | I deliver only within Pune for now. |  |
| 9.11 | P2 | Once your design is approved and the advance is paid, your gift is printed, personally quality-checked and hand-delivered, usually within 24 hours. |  |
| 9.12 | P3 | I’ll keep you posted on WhatsApp at every step. |  |
| 9.13 | P4 | *(removed: it repeated 9.10)* — replaced by the delivery charge line, which appears only once `deliveryCharge` is set in `src/data/site.js`. Until then the page shows an OWNER TO SUPPLY note. |  |

**Privacy** (`Privacy.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.14 | H1 | Privacy |  |
| 9.15 | P1 | I only collect what’s needed to make and deliver your gift: your name, phone number, delivery address, and any photo or text you send for personalisation. |  |
| 9.16 | P2 | I use this only to design, print and deliver your gift, and share it only with the vendor printing your order. I don’t sell or share your information with anyone else. |  |
| 9.17 | P3 | **After delivery I delete your photos and details from my phone, my files and our WhatsApp chat.** I don’t keep copies. |  |
| 9.17b | P4 | WhatsApp is run by Meta; their privacy policy covers messages sent through it. |  |
| 9.18 | P4 | Questions about your data? Write to cheerup.smiled@gmail.com. |  |

**Terms of service** (`Terms.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.19 | H1 | Terms of service |  |
| 9.19b | Extra P, only once `legalName` / `jurisdiction` are set in `src/data/site.js` | Cheer Up is run by {legal name}… / Any dispute is subject to the courts of {city}. |  |
| 9.20 | P1 | Cheer Up is run by a single founder in Pune. All orders are placed and confirmed over WhatsApp. |  |
| 9.21 | P2 | Production begins only after you approve a free design preview and pay 70% of the order value in advance. The remaining 30% is due on delivery. |  |
| 9.22 | P3 | Prices and delivery times may change without notice. |  |
| 9.23 | P4 | I reserve the right to decline an order I can’t fulfil to my quality standard. |  |

---

## 10. Footer (every page, `src/components/Footer.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 10.1 | Column heading | Pages |  |
| 10.2 | Column heading | Policies |  |
| 10.3 | Column heading | Talk to me |  |
| 10.4 | Link | WhatsApp +91 9505 9696 70 |  |
| 10.5 | Link | cheerup.smiled@gmail.com |  |
| 10.6 | Line (moved under the logo; it used to sit in the links column styled like a link) | Delivering smiles across Pune |  |
| 10.7 | Legal line | © 2026 Cheer Up. Smile Delivered. |  |

(Page links in the footer reuse the nav labels in section 1 and policy labels in 9.3.)

---

## 11. Order sheet: slides in when "Personalise this" is pressed (`src/components/OrderSheet.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 11.1 | Small heading | Personalise it |  |
| 11.2 | Close button | Close |  |
| 11.3 | Title / subtitle | (the product name / its category, filled in automatically) |  |
| 11.4 | Field label 1 | Who’s it for? |  |
| 11.5 | Field 1 hint | Their name, and who they are to you |  |
| 11.6 | Field label 2 | What should it say or show? |  |
| 11.7 | Field 2 hint | A name, a line, a photo idea. Or “surprise me” |  |
| 11.8 | Field label 3 and 4 (one box became two) | Delivery date / Area in Pune |  |
| 11.9 | Field 4 hint | e.g. Kothrud |  |
| 11.10 | P | Send your photos in the chat. You’ll see a free preview before you pay anything, and your photos are deleted after delivery. |  |
| 11.11 | BTN | Send on WhatsApp |  |

---

## 12. Pre-filled WhatsApp messages (`src/lib/whatsapp.js`)

These are what the customer's chat opens with. `{...}` parts are filled in automatically; keep them.

| # | Triggered by | Current text | New text |
|---|---|---|---|
| 12.1 | Every general order button | Hi Cheer Up, I’d like to make someone smile with a personalised gift. |  |
| 12.2 | The "Chat on WhatsApp" buttons in the helper panels | Hi Cheer Up, help me find the right gift. Three things about them: |  |
| 12.3 | "Got a gift from me? Share the smile." | Hi Cheer Up, here’s a photo of the gift I received. Sharing the smile! |  |
| 12.4 | "Order this on WhatsApp" on an idea card | Hi Cheer Up, I’d like a gift for my {person}. {Category}: “{one-liner}” |  |
| 12.5 | "Ask about this" on a product | Hi Cheer Up, quick question about the {product} ({category}). |  |
| 12.6 | "Send on WhatsApp" in the sheet, line 1 | Hi Cheer Up, I’d like to order: {category}, {product}. |  |
| 12.7 | Sheet line 2 (if filled) | For: {who} |  |
| 12.8 | Sheet line 3 (if filled) | On it: {what} |  |
| 12.9 | Sheet lines 4 and 5 (if filled) | Delivery date: {date} / Area in Pune: {area} |  |

---

## 13. Placeholder text

**There is none left.** Every "Photo: …" string is gone:

| # | Where | Was | Now |
|---|---|---|---|
| 13.1 | Home category cards | Photo: {category} | the real photo, with alt text describing it |
| 13.2 | Products cards | Photo: {product} | the real photo, with alt text describing it |
| 13.3 | Home founder photo | Photo: Deevan | nothing is drawn (the file never existed) |
| 13.4 | About founder photo | Photo: Deevan, ideally at work on an order | nothing is drawn |
| 13.5 | Reviews gallery | Photo: delivered {thing} | the section is not rendered |

Alt text now describes the picture rather than naming the slot, e.g. "Heart-shaped
acrylic photo keychain". It lives beside each photo as `alt:` in
`src/data/products.js`. A photo with no file draws nothing at all, so a missing
image can never again look like a broken page.

---

## 14. Business facts repeated across the copy (keep consistent)

If any of these change, update every place:
- **Payment:** 70% after approving the design, 30% on delivery. Appears in 2.3, 2.5, 4.9, 4.15, 7.11, 9.21.
- **Delivery:** within 24 hours, Pune only. Appears in 2.1.3, 2.3, 2.5, 4.13, 7.6, 9.10 to 9.13.
- **Free preview before paying.** Appears in 2.1.6, 2.3, 4.5, 11.10, 9.21.
- **Photos deleted after delivery.** Appears in 2.1.9, 2.3, 4.16, 7.13, 8.12, 9.17, 11.10.
- **Cancellation until printing starts.** Appears in 7.16, 9.5 to 9.7.
- **Six categories, fourteen products.** Appears in 2.4.1 and 3.2. Change one and change the other.
- **Three steps on Home, seven on How it works.** 2.5.1 and 4.2 have to agree: the How page says four of the seven are yours.
- **Prices.** ₹35 is the lowest (a Mini Snap, per print) and ₹759 the highest. It appears in 3.2, in the `priceRange` of the search listing (`src/lib/head.js`) and in the Gifts page description (`src/routes.jsx`).

---

## 15. Request a gift (`src/pages/request/Request.jsx`, the top bar, and the line under the Home gift grid)

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 15.1 | H1 | `Request.jsx` | Request a **custom gift.** |  |
| 15.2 | Lead | `Request.jsx` | Not in the catalogue? Tell me what you want and I’ll make it and deliver it in Pune. I read every request myself. |  |
| 15.3 | Radio chips (kind) | `Request.jsx` | A new product / A gift for a specific need / A bulk or team order / A change to something you make / A suggestion for you |  |
| 15.4 | Labels | `Request.jsx` | What kind of request is it? / Tell me about it / How many? / Budget (optional) / Delivery date / Area in Pune / Your name (optional) |  |
| 15.5 | Placeholders | `Request.jsx` | What is it, who’s it for, and what should it say or show? A rough idea is fine. / 1 / e.g. ₹500 / e.g. Kothrud / So I know who’s asking |  |
| 15.6 | Starter chips (six became three) | `Request.jsx` | A gift for the whole team / Something for their desk / A tote bag with an inside joke |  |
| 15.7 | BTN | `Request.jsx` | Send request on WhatsApp |  |
| 15.8 | Note | `Request.jsx` | You can share photos or a sketch in the chat. |  |
| 15.9 | H2 + steps | `Request.jsx` | What happens next: I read it myself and reply on WhatsApp. / I confirm the details and the price with you. / You get a free preview first. Nothing is printed, and you pay nothing, until you’ve approved it. |  |
| 15.10 | Note | `Request.jsx` | Delivering in Pune only for now. Your photos are deleted after delivery. |  |
| 15.11 | LINK (Home, under the six cards) | `Categories.jsx` | Not in the catalogue? I’ll make it. **Request a gift** |  |
| 15.12 | LINK (Gifts page) | `Products.jsx` | Not in the catalogue? I’ll make it. **Request a gift** |  |
| 15.14 | WhatsApp message | `src/lib/whatsapp.js` | Hi Cheer Up, I have a request (I’m {name}). Type: … What I’m thinking: … How many: … Budget: … Delivery date: … Area in Pune: … |  |
| 15.15 | Top bar (tablet and desktop only; hidden on phones) | `src/components/RequestBar.jsx` | Not in the catalogue? I’ll make it. Request a gift → |  |
| 15.16 | Header + mobile menu + footer label | `src/routes.jsx` | Request a gift |  |
| 15.17 | — | — | *(the hero link, and the whole `RequestBand.jsx` box that sat under the hero, were removed: the same offer appeared four times on the Home page, which told people the catalogue was not enough before they had looked at it. It now appears twice: the top bar and 15.11.)* |  |

---

## 16. Section labels and small text added by the minimal re-theme (2026-11-06)

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 16.1 | Hero eyebrow | `Hero.jsx` | Made for one person · Pune |  |
| 16.2 | Hero buttons | `Hero.jsx` | Chat on WhatsApp / See the gifts |  |
| 16.3 | Section markers, now one `.eyebrow` style with no numbers | `LuckyOne.jsx`, `Promises.jsx`, `Categories.jsx`, `Process.jsx`, `FounderTeaser.jsx` | Who’s it for / The deal / The gifts / How it works / The person |  |
| 16.5 | Step numbers (Home) | `Process.jsx` | 01 / 02 / 03 |  |


---

## 17. What Google and WhatsApp show (`src/routes.jsx`)

Every page has its own `title` and `description`. They are the first copy most
people read, because they are what a search result and a WhatsApp link preview
show. Before this, all twelve pages shared one title and had no description at all.

Keep descriptions at 155 characters or fewer, or Google cuts them off.

| # | Page | URL | Title | Description | New |
|---|---|---|---|---|---|
| 17.1 | Home | `/` | Personalised gifts in Pune, delivered in 24 hours \| Cheer Up | Personalised mugs, prints, Polaroids, keychains and tees, made for one person and hand-delivered across Pune in 24 hours. Free preview before you pay. |  |
| 17.2 | Gifts | `/gifts` | Personalised mugs, prints, Polaroids and more \| Cheer Up Pune | Six kinds of personalised gift: mugs, keychains, prints, Polaroids, tees and phone cases. Prices from ₹35. Ordered on WhatsApp, delivered in Pune. |  |
| 17.3 | Request a gift | `/request` | Request a custom gift \| Cheer Up Pune | Not in the catalogue? Describe the gift you want and I will make it and deliver it in Pune. Team orders, wedding favours and one-off ideas welcome. |  |
| 17.4 | How it works | `/how-it-works` | How ordering works \| Cheer Up | Seven steps from your first message to their doorbell. A free design preview, 70% after you approve, 30% at the door. All on WhatsApp. |  |
| 17.5 | My story | `/my-story` | Meet Deevan, founder \| Cheer Up | Cheer Up is one person in Pune. I read your message, design your gift, check it by hand and deliver it myself. Small on purpose. |  |
| 17.6 | Questions | `/questions` | Questions about orders, payment and delivery \| Cheer Up | How payment works, how fast delivery is, what happens to your photos, and whether you can cancel. Honest answers about ordering from Cheer Up. |  |
| 17.7 | Contact | `/contact` | Contact Cheer Up on WhatsApp | Message Cheer Up on WhatsApp at +91 9505 9696 70 for personalised gifts in Pune. Orders, questions and half-formed ideas all welcome. |  |
| 17.8 | Reviews | `/reviews` | Reviews \| Cheer Up | Cheer Up is new. Real reviews from real customers in Pune go up here, with their permission. |  |
| 17.9 | Cancellation & refunds | `/refunds` | Cancellation & refunds \| Cheer Up | Cancel before printing starts for a full refund of your advance. Damaged or wrong order? Tell me within 24 hours with a photo. |  |
| 17.10 | Delivery | `/delivery` | Delivery \| Cheer Up | Cheer Up delivers within Pune only, usually within 24 hours of you approving the design, with WhatsApp updates at every step. |  |
| 17.11 | Privacy | `/privacy` | Privacy \| Cheer Up | What Cheer Up collects to make your gift, who it is shared with, and when your photos and details are deleted. |  |
| 17.12 | Terms | `/terms` | Terms of service \| Cheer Up | The terms you order under: a free preview first, 70% on approval, 30% on delivery, all confirmed over WhatsApp. |  |

The picture shown beside these in a WhatsApp preview is `public/og.jpg`. Rebuild it
with `npm run og` after changing the logo or the products in it.

---

## 18. The button labels (`src/components/WaLink.jsx`)

One action, opening a WhatsApp chat, used to wear nine different names:
*Start their moment, Request a gift, Send on WhatsApp, Help me find it, Start their
gift, Say hi on WhatsApp, Tell me who it's for, Make it theirs, This is the one.*
Six of the nine never said that the site was about to hand you over to WhatsApp.

There are now five, and a chat icon on every one of them:

| # | Label | Where |
|---|---|---|
| 18.1 | Chat on WhatsApp | header, mobile menu, phone sticky bar, hero, and every closing panel |
| 18.2 | Order this on WhatsApp | an idea row on the Home page |
| 18.3 | Send on WhatsApp | the order sheet's submit |
| 18.4 | Send request on WhatsApp | the Request page's submit |
| 18.5 | Ask about this | a question about one product (the icon carries the rest) |

Two buttons do *not* open WhatsApp, and so deliberately have no icon:

| # | Label | What it does |
|---|---|---|
| 18.6 | Personalise this | opens the order sheet for that product |
| 18.7 | See the gifts | goes to `/gifts` |

**Adding a tenth label is the thing this list exists to stop.** Make every WhatsApp
link with `WaLink` or `WaTextLink`; both are in `src/components/WaLink.jsx`, and the
list above is repeated in the comment at the top of that file.

---

## 19. The marker highlight (`.hl` in `src/styles/ui.css`)

One phrase per page gets a pen stroke behind it: the thing that decides whether
someone keeps reading. It is a background band only, so the text colour and its
contrast are untouched (ink on the sand stroke is 11.83:1).

| # | Page | Highlighted phrase |
|---|---|---|
| 19.1 | Home | At their door in Pune within 24 hours. |
| 19.2 | Gifts | Prices from ₹35. |
| 19.3 | Request a gift | I’ll make it and deliver it in Pune. |
| 19.4 | How it works | Not a rupee until you’ve seen the design and loved it. |
| 19.5 | My story | students can afford it |
| 19.6 | Contact | Every message lands on my phone, not a team’s. |

Questions, Reviews and the four policy pages have none, on purpose: nothing on them
is competing for attention, and a highlight on every page is the same as none.

**Use it once per page. Two is a maybe. Three means none of them is important.**
