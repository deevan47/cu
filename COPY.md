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
- Prices (`₹___`), photos and sample reviews are still placeholders.

Legend: **H1** main page heading, **H2** section heading, **H3** sub heading, **P** paragraph, **BTN** button, **LINK** text link, **TAB** tab label.

---

## 0. Site-wide

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 0.1 | Browser tab title | `index.html` | Cheer Up \| Gifts that say “I thought of you” in Pune |  |
| 0.2 | Brand name | `src/data/site.js` | Cheer Up |  |
| 0.3 | Tagline | `src/data/site.js` | Smile Delivered |  |
| 0.4 | City | `src/data/site.js` | Pune |  |
| 0.5 | Founder name | `src/data/site.js` | Deevan |  |
| 0.6 | Policies "last updated" | `src/data/site.js` | October 2026 |  |
| 0.7 | Phone shown big on Contact | `src/data/site.js` | 834 163 7447 |  |
| 0.8 | Phone short (footer, copy button) | `src/data/site.js` | 8341637447 |  |
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
| 1.1 | Nav: Home | `src/routes.jsx` | Home |  |
| 1.2 | Nav: Products | `src/routes.jsx` | Gifts |  |
| 1.3 | Nav: How it works | `src/routes.jsx` | How it works |  |
| 1.4 | Nav: About | `src/routes.jsx` | My story |  |
| 1.5 | Nav: Reviews | `src/routes.jsx` | Reviews |  |
| 1.6 | Nav: FAQ | `src/routes.jsx` | Questions |  |
| 1.7 | Nav: Contact | `src/routes.jsx` | Say hi |  |
| 1.8 | BTN (desktop header) | `Header.jsx` | Start their moment |  |
| 1.9 | Mobile menu button (closed) | `Header.jsx` | Menu |  |
| 1.10 | Mobile menu button (open) | `Header.jsx` | Close |  |
| 1.11 | Mobile sticky bottom bar BTN | `StickyBar.jsx` | Tell me who it’s for |  |

---

## 2. Home page (`src/pages/home/`)

### 2.1 Hero (`Hero.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.1.1 | Eyebrow | Made for one person. Felt for a lifetime. Pune. |  |
| 2.1.2 | **H1** | Give them the **“you remembered” moment.** |  |
| 2.1.3 | Lead P | That tiny pause when they open it, go quiet, and realise you really thought of them? I make that happen. Their photo, their name, your inside joke. **At their door in Pune within 24 hours.** |  |
| 2.1.4 | BTN primary | Tell me who it’s for |  |
| 2.1.5 | BTN outline | See all 6 ways to say it |  |
| 2.1.6 | Trust point 1 | See it first, free |  |
| 2.1.7 | Trust point 2 | Pay only once you love it |  |
| 2.1.8 | Trust point 3 | No online payment. Just a chat. |  |
| 2.1.9 | Trust point 4 | Your photos deleted after delivery |  |

### 2.2 Who's the lucky one (`LuckyOne.jsx`, data in `src/data/people.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.2.1 | **H2** | Who’s on your **mind right now?** |  |
| 2.2.2 | Sub P | Tap a person. Watch the idea land. |  |
| 2.2.3 | TAB 1 | Mum |  |
| 2.2.4 | TAB 2 | Dad |  |
| 2.2.5 | TAB 3 | Partner |  |
| 2.2.6 | TAB 4 | Best friend |  |
| 2.2.7 | TAB 5 | Sibling |  |
| 2.2.8 | TAB 6 | Colleague |  |
| 2.2.9 | TAB 7 | Teacher |  |
| 2.2.10 | TAB 8 | Not sure yet |  |
| 2.2.11 | Link on every idea card | This is the one |  |
| 2.2.12 | Link on every idea card | See the options |  |

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
| 2.2.35 | BTN | Help me find it |  |

### 2.3 Promise band (`Promises.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.3.1 | H2 #1 | Love it first. Pay later. |  |
| 2.3.2 | P #1 | A free design preview, every single time. You say yes only when your heart does. |  |
| 2.3.3 | H2 #2 | Just 30% at the door. |  |
| 2.3.4 | P #2 | 70% once you’ve approved the design. The last 30% when it’s finally in your hands. |  |
| 2.3.5 | H2 #3 | Say yes today. See them smile tomorrow. |  |
| 2.3.6 | P #3 | I check every piece myself and hand-deliver it across Pune within 24 hours. Your photos are deleted after. |  |

### 2.4 Six ways (`Categories.jsx`, data in `src/data/products.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.4.1 | **H2** | Six ways to say **“you matter to me.”** |  |
| 2.4.2 | LINK | See them all |  |
| 2.4.3 | Card 1: name / tagline | Mugs / Every morning, a little reminder of you. |  |
| 2.4.4 | Card 2: name / tagline | Keychains / The smallest way to stay close. |  |
| 2.4.5 | Card 3: name / tagline | Paintings and prints / Memories that deserve a wall. |  |
| 2.4.6 | Card 4: name / tagline | Polaroids / Little squares of “remember when.” |  |
| 2.4.7 | Card 5: name / tagline | T-shirts and hoodies / Wear the memory. Wear the joke. |  |
| 2.4.8 | Card 6: name / tagline | Phone cases / Seen a hundred times a day. Felt every time. |  |

### 2.5 Process (`Process.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.5.1 | **H2** | Two texts. **One happy doorbell.** |  |
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
| 2.6.2 | P | I design it, check it and usually deliver it myself. Your gift carries your feelings, and I treat it that way. |  |
| 2.6.3 | Signature | Deevan, founder |  |
| 2.6.4 | LINK | Meet the person behind it |  |

### 2.7 Final call to action (`FinalCta.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 2.7.1 | H2 | Not sure how to show you care? |  |
| 2.7.2 | P | Tell me three things about them. I’ll turn them into something they’ll treasure. |  |
| 2.7.3 | BTN | Help me find it |  |

---

## 3. Products page (`src/pages/products/Products.jsx`, data `src/data/products.js`)

Page frame:

| # | Role | Current text | New text |
|---|---|---|---|
| 3.1 | **H1** | Pick a gift. **Pour your heart into it.** |  |
| 3.2 | Sub P | Six gifts. Endless ways to say what words can’t. |  |
| 3.3 | BTN on every product | Make it theirs |  |
| 3.4 | LINK on every product | Ask me anything |  |
| 3.5 | Price on every product (placeholder) | Starting at ₹___ |  |
| 3.6 | Bottom band P | Can’t decide? Tell me about them. I’ll find the feeling. |  |
| 3.7 | Bottom band BTN | Help me find it |  |

Categories (shown when its tab is selected):

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
| 3.18 | Keychains | Name keychain | A name, initials or a date that means the world. |  |  |
| 3.19 | Keychains | Two-sided keychain | Two sides. Two memories. Two reasons to smile. |  |  |
| 3.20 | Paintings and prints | Framed photo print | Printed, framed, ready to hang or stand. The moment never fades. |  |  |
| 3.21 | Paintings and prints | Painted portrait | Your photo, painted. Someone’s going to tear up. |  |  |
| 3.22 | Paintings and prints | Collage print | All the favourite moments. One frame. |  |  |
| 3.23 | Polaroids | Mini Snaps | Pocket-sized Polaroids for a stack, a wallet or a love letter. |  |  |
| 3.24 | Polaroids | Big Snaps | Large Polaroids for walls, fridges and gift boxes. Memories, on display. |  |  |
| 3.25 | T-shirts and hoodies | Photo tee | Your photo, printed big on soft cotton. A memory they can wear. |  |  |
| 3.26 | T-shirts and hoodies | Words tee | A name, a line or a joke only your gang gets. |  |  |
| 3.27 | T-shirts and hoodies | Custom hoodie | Photo or words on a warm hoodie. The next best thing to a hug. |  |  |
| 3.28 | Phone cases | Photo case | One photo, edge to edge. Your favourite moment, always with them. |  |  |
| 3.29 | Phone cases | Name case | A name or initials on a clean colour. Simple. Personal. Theirs. |  |  |
| 3.30 | Phone cases | Collage case | Your favourite photos, in their hand every day. |  |  |

(Prices are a separate task: replace `₹___` in `src/data/products.js` once decided.)

---

## 4. How it works page (`src/pages/how/How.jsx`, data `src/data/steps.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 4.1 | **H1** | From a feeling to **their doorbell.** |  |
| 4.2 | Sub P | Seven steps. All on WhatsApp. Not a rupee until you’ve seen the design and loved it. |  |
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
| 4.18 | Closing band BTN | Say hi on WhatsApp |  |

---

## 5. About page (`src/pages/about/About.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 5.1 | **H1** | Hi, I’m **Deevan.** |  |
| 5.2 | Tagline | For the moment someone opens a gift, goes quiet, and realises you really thought about them. |  |
| 5.3 | Body P1 | Tell me who it’s for and what they love. I’ll turn that into something made only for them, send you a preview, and deliver it once you approve. |  |
| 5.4 | Body P2 | It’s quick, and priced so **students can afford it**, because showing you care shouldn’t cost a fortune. |  |
| 5.5 | Body P3 (line break after the first sentence; last sentence is underlined and animates in) | Cheer Up is small on purpose, so your gift gets my full attention.<br>**My only aim is to deliver the smile you want to see.** |  |
| 5.6 | Photo caption (placeholder) | Photo: Deevan, ideally at work on an order |  |
| 5.7 | **H2** | Why one person who cares **beats an app.** |  |
| 5.8 | Reason 1 H3 | One human. Start to finish. |  |
| 5.9 | Reason 1 P | The person who reads your message is the person who makes your gift. |  |
| 5.10 | Reason 2 H3 | Made for one. Never mass-made. |  |
| 5.11 | Reason 2 P | Nothing comes off a shelf. Every piece is made for one person you love. |  |
| 5.12 | Reason 3 H3 | Checked by hand. Every time. |  |
| 5.13 | Reason 3 P | Handled with care. Packed with effort. Delivered with a smile. |  |
| 5.14 | Reason 4 H3 | Clueless? Perfect. |  |
| 5.15 | Reason 4 P | Tell me about them. I’ll find the gift that says it for you. |  |
| 5.16 | Closing P | Now you know me. Tell me about them. |  |
| 5.17 | Closing BTN | Start their gift |  |

---

## 6. Reviews page (`src/pages/reviews/Reviews.jsx`, data `src/data/reviews.js`, `src/data/photos.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 6.1 | **H1** | Don’t take **my word** for it. |  |
| 6.2 | Sub P | Every order so far came from a friend of a friend. Here’s what they felt. |  |
| 6.3 | TAB 1 | Mug |  |
| 6.4 | Quote 1 | “Ordered a mug for my friend’s birthday. The preview looked exactly like what I’d imagined, and it reached them the same evening. Best surprise I’ve ever pulled off.” |  |
| 6.5 | Attribution 1 | Customer name, mug for a birthday |  |
| 6.6 | TAB 2 | Polaroids |  |
| 6.7 | Quote 2 | “Sent twenty old photos for my parents’ anniversary. The Mini Snaps came back in a little stack and my mum cried. Good tears.” |  |
| 6.8 | Attribution 2 | Customer name, Polaroids for an anniversary |  |
| 6.9 | TAB 3 | Keychain |  |
| 6.10 | Quote 3 | “I had no idea what to get my roommate, so I just described them. The idea back: a keychain with their bike’s number plate. They haven’t taken it off since.” |  |
| 6.11 | Attribution 3 | Customer name, keychain, gift suggestion |  |
| 6.12 | Badge on sample reviews | Sample review, replace with a real customer quote |  |
| 6.13 | **H2** | Delivered. **Smiled at.** |  |
| 6.14 | LINK | Got a gift from me? Share the smile. |  |
| 6.15 | Gallery placeholders | Photo: delivered mug / Polaroids / keychain / print / phone case / hoodie |  |

Note: the three quotes are samples. Replace them with real customer words when you have them (set `sample: false`).

---

## 7. FAQ page (`src/pages/faq/Faq.jsx`, data `src/data/faqs.js`)

| # | Role | Current text | New text |
|---|---|---|---|
| 7.1 | **H1** | Fair questions. **Honest answers.** |  |
| 7.2 | P | Still wondering? Just ask me. (“Just ask me.” is a WhatsApp link) |  |
| 7.3 | Q1 | Can I send my own photo or idea? |  |
| 7.4 | A1 | Yes. That’s how most gifts begin. Send it on WhatsApp and I’ll turn it into a free preview. |  |
| 7.5 | Q2 | How fast will it reach them? |  |
| 7.6 | A2 | Within 24 hours of you approving the design. Pune only, for now. |  |
| 7.7 | A2 link | Delivery policy |  |
| 7.8 | Q3 | What if I don’t know what to gift? |  |
| 7.9 | A3 | Perfect. Tell me who it’s for, the occasion, and three things they love. I’ll find the gift that says it for you. |  |
| 7.10 | Q4 | How does payment work? |  |
| 7.11 | A4 | 70% after you approve the design, 30% when it’s delivered. No online checkout, just a simple chat on WhatsApp. |  |
| 7.12 | Q5 | What happens to my photos? |  |
| 7.13 | A5 | They’re used for your gift and nothing else. Once it’s delivered, they’re deleted. No copies kept. |  |
| 7.14 | A5 link | Privacy policy |  |
| 7.15 | Q6 | Can I cancel? |  |
| 7.16 | A6 | Yes, until printing starts, with a full refund. After that, no, because it’s made just for them. |  |
| 7.17 | A6 link | Cancellation and refund policy |  |

---

## 8. Contact page (`src/pages/contact/Contact.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 8.1 | **H1** | Someone’s about to feel special. **Message me.** |  |
| 8.2 | Sub P | Orders, questions, half-formed ideas. Every message lands on my phone, not a team’s. |  |
| 8.3 | Label | WhatsApp |  |
| 8.4 | Big number | 834 163 7447 |  |
| 8.5 | BTN | Start their gift on WhatsApp |  |
| 8.6 | Copy button | Copy number |  |
| 8.7 | Copy button after click | Copied |  |
| 8.8 | Label | Email |  |
| 8.9 | Label | Where |  |
| 8.10 | P | Pune. Ordered online, delivered to their door. |  |
| 8.11 | Label | Your photos |  |
| 8.12 | P | Yours alone, and deleted right after delivery. Privacy policy (link) |  |

---

## 9. Policy pages (`src/pages/policies/`)

Policies stay clear and plain on purpose. Warmth is added only where it doesn't blur the rule.

Shared on all four:

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 9.1 | Eyebrow | `PolicyLayout.jsx` | Policy, last updated October 2026 |  |
| 9.2 | Label above links to other policies | `PolicyLayout.jsx` | Other policies |  |
| 9.3 | Footer link labels | `src/routes.jsx` | Cancellation & refunds / Delivery / Privacy / Terms of service |  |

**Cancellation and refunds** (`Refund.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.4 | H1 | Cancellation and refunds |  |
| 9.5 | P1 | Because every gift is made for just one person, I can’t accept cancellations once printing has started. |  |
| 9.6 | P2 | If you cancel before the design is approved and printing begins, your advance payment is refunded in full. |  |
| 9.7 | P3 | Once printing has started, the order can’t be cancelled or refunded, since it’s made specifically for you. |  |
| 9.8 | P4 | If your order arrives damaged or different from the approved design, tell me within 24 hours with a photo. I’ll reprint or refund it, because it should arrive perfect. |  |

**Delivery** (`Shipping.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.9 | H1 | Delivery |  |
| 9.10 | P1 | I currently deliver only within Pune. |  |
| 9.11 | P2 | Once your design is approved and the advance is paid, your gift is printed, personally quality-checked and hand-delivered, usually within 24 hours. |  |
| 9.12 | P3 | I’ll keep you posted on WhatsApp at every step. |  |
| 9.13 | P4 | I don’t offer shipping outside Pune yet. |  |

**Privacy** (`Privacy.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.14 | H1 | Privacy |  |
| 9.15 | P1 | I only collect what’s needed to make and deliver your gift: your name, phone number, delivery address, and any photo or text you send for personalisation. |  |
| 9.16 | P2 | I use this only to design, print and deliver your gift, and share it only with the vendor printing your order. I don’t sell or share your information with anyone else. |  |
| 9.17 | P3 | **Once your gift is delivered, your photos and details are deleted.** I don’t keep copies, so there’s nothing left to leak. |  |
| 9.18 | P4 | Questions about your data? Write to cheerup.smiled@gmail.com. |  |

**Terms of service** (`Terms.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 9.19 | H1 | Terms of service |  |
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
| 10.4 | Link | WhatsApp 8341637447 |  |
| 10.5 | Link | cheerup.smiled@gmail.com |  |
| 10.6 | Line | Delivering smiles across Pune |  |
| 10.7 | Legal line | © 2026 Cheer Up. Smile Delivered. |  |

(Page links in the footer reuse the nav labels in section 1 and policy labels in 9.3.)

---

## 11. Order sheet: slides in when "Make it theirs" is pressed (`src/components/OrderSheet.jsx`)

| # | Role | Current text | New text |
|---|---|---|---|
| 11.1 | Small heading | Make it theirs |  |
| 11.2 | Close button | Close |  |
| 11.3 | Title / subtitle | (the product name / its category, filled in automatically) |  |
| 11.4 | Field label 1 | Who’s it for? |  |
| 11.5 | Field 1 hint | Their name, and who they are to you |  |
| 11.6 | Field label 2 | What should it say or show? |  |
| 11.7 | Field 2 hint | A name, a line, a photo idea. Or “surprise me” |  |
| 11.8 | Field label 3 | When, and where in Pune? |  |
| 11.9 | Field 3 hint | Date and area |  |
| 11.10 | P | Send your photos in the chat. You’ll see a free preview before you pay anything, and your photos are deleted after delivery. |  |
| 11.11 | BTN | Send it on WhatsApp |  |

---

## 12. Pre-filled WhatsApp messages (`src/lib/whatsapp.js`)

These are what the customer's chat opens with. `{...}` parts are filled in automatically; keep them.

| # | Triggered by | Current text | New text |
|---|---|---|---|
| 12.1 | Every general order button | Hi Cheer Up, I’d like to make someone smile with a personalised gift. |  |
| 12.2 | "Help me find it" buttons | Hi Cheer Up, help me find the right gift. Three things about them: |  |
| 12.3 | "Got a gift from me? Share the smile." | Hi Cheer Up, here’s a photo of the gift I received. Sharing the smile! |  |
| 12.4 | "This is the one" on an idea card | Hi Cheer Up, I’d like a gift for my {person}. {Category}: “{one-liner}” |  |
| 12.5 | "Ask me anything" on a product | Hi Cheer Up, quick question about the {product} ({category}). |  |
| 12.6 | "Send it on WhatsApp" in the sheet, line 1 | Hi Cheer Up, I’d like to order: {category}, {product}. |  |
| 12.7 | Sheet line 2 (if filled) | For: {who} |  |
| 12.8 | Sheet line 3 (if filled) | On it: {what} |  |
| 12.9 | Sheet line 4 (if filled) | When and where: {when} |  |

---

## 13. Placeholder text (visible while photos are missing)

| # | Where | Current text | New text |
|---|---|---|---|
| 13.1 | Home category cards | Photo: {category name in lowercase} |  |
| 13.2 | Products cards | Photo: {product name in lowercase} |  |
| 13.3 | Home founder photo | Photo: Deevan |  |
| 13.4 | About founder photo | Photo: Deevan, ideally at work on an order |  |
| 13.5 | Reviews gallery | Photo: delivered {mug / Polaroids / keychain / print / phone case / hoodie} |  |

---

## 14. Business facts repeated across the copy (keep consistent)

If any of these change, update every place:
- **Payment:** 70% after approving the design, 30% on delivery. Appears in 2.3, 2.5, 4.9, 4.15, 7.11, 9.21.
- **Delivery:** within 24 hours, Pune only. Appears in 2.1.3, 2.3, 2.5, 4.13, 7.6, 9.10 to 9.13.
- **Free preview before paying.** Appears in 2.1.6, 2.3, 4.5, 11.10, 9.21.
- **Photos deleted after delivery.** Appears in 2.1.9, 2.3, 4.16, 7.13, 8.12, 9.17, 11.10.
- **Cancellation until printing starts.** Appears in 7.16, 9.5 to 9.7.
- **Six product categories / "Six gifts" / "See all 6 ways to say it".** Appears in 2.1.5, 2.4.1, 3.2.

---

## 15. Request a gift (`src/pages/request/Request.jsx`; also the top bar, header button, hero link and Home request box)

| # | Role | File | Current text | New text |
|---|---|---|---|---|
| 15.1 | H1 | `Request.jsx` | Not in our catalogue? Request a new one. |  |
| 15.2 | Lead | `Request.jsx` | Couldn’t find what you need? Tell me. A new product, a gift for a particular need, a team order. If it’s not in the catalogue, I’ll make it and deliver it. I read every request myself. |  |
| 15.3 | Chips (kind) | `Request.jsx` | A new product / A gift for a specific need / A bulk or team order / A change to something you make / A suggestion for you |  |
| 15.4 | Labels | `Request.jsx` | What kind of request is it? / Tell me about it / How many? / Budget, if you have one / When, and where in Pune? / Your name |  |
| 15.5 | Placeholders | `Request.jsx` | What is it, who’s it for, and what should it say or show? A rough idea is fine. / Just one, or about 20 / Optional / Date and area |  |
| 15.6 | Starter chips | `Request.jsx` | A gift for the whole team / Favours for a wedding or anniversary / Something for their desk / A surprise box with a few things inside / A notebook or diary with their name / A tote bag with an inside joke |  |
| 15.7 | BTN | `Request.jsx` | Send my request on WhatsApp |  |
| 15.8 | Note | `Request.jsx` | You can share photos or a sketch in the chat. |  |
| 15.9 | H2 + steps | `Request.jsx` | What happens next: I read it myself and reply on WhatsApp. / I confirm the details and the price with you. / You get a free preview first. Nothing is printed, and you pay nothing, until you’ve approved it. |  |
| 15.10 | Note | `Request.jsx` | Delivering in Pune only for now. Your photos are deleted after delivery. |  |
| 15.11 | LINK (Home, under the six cards) | `Categories.jsx` | Didn’t find yours in the catalogue? Request a new one |  |
| 15.12 | LINK (Products page) | `Products.jsx` | Not in the catalogue? We’ll make it. Request a new one |  |
| 15.14 | WhatsApp message | `src/lib/whatsapp.js` | Hi Cheer Up, I have a request (I’m {name}). Type: … What I’m thinking: … How many: … Budget: … When and where in Pune: … |  |
| 15.15 | Top bar, every page | `src/components/RequestBar.jsx` | Can’t find it in our catalogue? We’ll make it. Request a new gift → |  |
| 15.16 | Header + mobile menu + footer label | `src/routes.jsx` | Request a gift |  |
| 15.17 | Hero link | `Hero.jsx` | Can’t find it? Request a new gift |  |
| 15.18 | Home request box (under the hero) | `RequestBand.jsx` | Not in our catalogue? / Have a gift in mind? Request it now. / Describe it in a line. I’ll make it and deliver it. No need to browse first. |  |
| 15.19 | Request box field + chips | `RequestBand.jsx` | Who’s it for, and what should it be? A rough idea is fine. / A gift for the whole team / Something for their desk / Favours for a wedding or anniversary / A tote bag with an inside joke |  |
| 15.20 | Request box buttons | `RequestBand.jsx` | Send my request on WhatsApp / Add quantity, budget or date |  |
