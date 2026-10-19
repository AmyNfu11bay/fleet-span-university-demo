// Fleet Span University — modules every employee takes. One object per module; see modules/README.md for the format.
FSU_MODULES.push(
{
  "id": "all1",
  "title": "Translate Fullbay to Spanish",
  "roles": [
    "Tech",
    "Service Advisor",
    "Parts",
    "Service Manager",
    "Operations Director"
  ],
  "allEmployees": true,
  "tier": "Module 1",
  "level": "Basic",
  "status": "Published",
  "version": 3,
  "days": 7,
  "soCount": 0,
  "why": "You do your best work when you can read the screen easily. Your browser can show Fullbay in Spanish so every step is clear.",
  "before": [
    "You are logged in to Fullbay.",
    "You know which device and browser you use. Pick it at the top of the steps, and you only see the steps for your device."
  ],
  "doneRight": "Fullbay shows in Spanish on every page you open, and you can find your SOs, buttons and tabs.",
  "wrong": [
    "A word looks wrong: browser translation isn't always 100% accurate. Ask your Service Manager or Spike (Module 9) what it means.",
    "Safari on your iPhone or iPad stops translating when you go to a new page: tap **aA** > **Translate to Spanish** again.",
    "You need English again: repeat the steps and pick English."
  ],
  "sources": [
    {
      "title": "Changing the Language on your PC/Mac",
      "url": "https://help.fullbay.com/en/articles/12061978-changing-the-language-on-your-pc-mac"
    },
    {
      "title": "Translate pages and change Chrome languages (Android, Google Chrome Help)",
      "url": "https://support.google.com/chrome/answer/173424?hl=en&co=GENIE.Platform%3DAndroid"
    },
    {
      "title": "Translate pages and change Chrome languages (iPhone and iPad, Google Chrome Help)",
      "url": "https://support.google.com/chrome/answer/173424?co=GENIE.Platform%3DiOS&hl=en"
    },
    {
      "title": "Translate Webpages in Safari on iPhone and iPad (MacRumors)",
      "url": "https://www.macrumors.com/how-to/safari-webpage-translation-ios/"
    }
  ],
  "items": [
    {
      "type": "step",
      "text": "In Chrome, click the menu button (3 vertical dots) in the top right corner.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "Select **Settings**.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "Select **Languages** from the left menu.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "Under **Preferred Languages**, click **Add Languages**, find Spanish, and click **Add**.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "Scroll down to the **Google Translate** section and turn on Google Translate if it isn't on already.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "In the **Translate into this language** menu, select Spanish.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "Go back to Fullbay. Right-click anywhere on the page and select **Translate to** Spanish.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "Click the **Google Translate** button to the right of the address bar, click the menu button (3 vertical dots), and select **Always translate English**. Every Fullbay page you open now shows in Spanish.",
      "device": "pc"
    },
    {
      "type": "step",
      "text": "From the top ribbon, click **View**, hover over **Translation**, select **Translate to Spanish**, then click **Enable Translation**.",
      "device": "mac"
    },
    {
      "type": "step",
      "text": "On your Android phone or tablet, open Chrome. Tap **More** (3 dots), then **Settings**.",
      "device": "android"
    },
    {
      "type": "step",
      "text": "Tap **Languages**.",
      "device": "android"
    },
    {
      "type": "step",
      "text": "Under **Chrome's language**, tap the current language and select Spanish (Español). Chrome restarts when the language downloads.",
      "device": "android"
    },
    {
      "type": "step",
      "text": "Open Fullbay. In the notification at the top of the screen, tap Spanish. If no notification appears, tap **More**, then **Translate**.",
      "device": "android"
    },
    {
      "type": "step",
      "text": "To keep every page in Spanish, go to **Settings** > **Languages** > **Advanced** > **Automatically translate these languages**. Tap **Add language** and select English.",
      "device": "android"
    },
    {
      "type": "step",
      "text": "Open the **Settings** app and go to **General** > **Language & Region**.",
      "device": "ios-safari"
    },
    {
      "type": "step",
      "text": "Tap **Add Language...** and select Spanish. When asked, keep your current language as the main one. This adds Spanish as a translation option.",
      "device": "ios-safari"
    },
    {
      "type": "step",
      "text": "Open Fullbay in Safari. Tap the **aA** button at the left of the address bar and choose **Translate to Spanish**.",
      "device": "ios-safari"
    },
    {
      "type": "step",
      "text": "If asked, tap **Enable Translation**.",
      "device": "ios-safari"
    },
    {
      "type": "step",
      "text": "Open Fullbay in Chrome. At the top, select Spanish. If you don't see **Translate**, tap **More**, then **Translate**.",
      "device": "ios-chrome"
    },
    {
      "type": "step",
      "text": "To keep it in Spanish, tap the **Settings** icon at the top after the page translates, then tap **Always translate English**.",
      "device": "ios-chrome"
    },
    {
      "type": "step",
      "text": "Open Fleet Span University. Your browser translates your training the same way, so every module shows in Spanish too."
    },
    {
      "type": "quiz",
      "q": "What is the goal of this module?",
      "options": [
        "Fullbay shows in Spanish on every page you open",
        "Fullbay prints invoices in Spanish",
        "Only Spike answers in Spanish",
        "Your paycheck shows in Spanish"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "A translated word looks wrong. Why?",
      "options": [
        "Fullbay is broken",
        "Browser translation isn't always 100% accurate",
        "Your login expired",
        "You picked the wrong SO"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "You need Fullbay in English again. What do you do?",
      "options": [
        "Call IT",
        "Delete your browser",
        "Repeat the steps and pick English",
        "Log out for a day"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "After you translate Fullbay, what happens to Fleet Span University?",
      "options": [
        "Nothing, it stays in English",
        "It stops working",
        "It asks for a new password",
        "Your training shows in Spanish too"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "A word looks wrong and you are not sure what it means. Who can you ask?",
      "options": [
        "Your Service Manager or Spike",
        "The customer",
        "Nobody",
        "Parts"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "You show your Service Manager Fullbay translated to Spanish on your own device."
    }
  ],
  "devices": [
    {
      "id": "pc",
      "label": "Chrome on a PC"
    },
    {
      "id": "mac",
      "label": "Safari on a Mac"
    },
    {
      "id": "android",
      "label": "Chrome on an Android phone or tablet"
    },
    {
      "id": "ios-safari",
      "label": "Safari on an iPhone or iPad"
    },
    {
      "id": "ios-chrome",
      "label": "Chrome on an iPhone or iPad"
    }
  ]
}
);
