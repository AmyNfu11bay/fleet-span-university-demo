// Fleetspan University — Service Manager track. Basic modules from Amy's Service Manager step-by-step guide (cleaned-up draft, Oct 2026), Help Center modules carried over from the Service Advisor track, and Module 14 from Amy's DIR desk guide. One object per module; see modules/README.md for the format.
FSU_MODULES.push(
{
  "id": "sm2",
  "title": "What is Fullbay",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 2",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 7,
  "soCount": 0,
  "why": "Fullbay is the system the whole shop runs on. When you know what it does, and what it doesn't, you see why every click you make matters.",
  "before": [
    "You have your own Fullbay login."
  ],
  "doneRight": "You can explain in your own words what Fullbay does for the shop and for the customer.",
  "wrong": [
    "Something in Fullbay doesn't look right: ask the VP, or ask Spike (Module 16)."
  ],
  "sources": [
    {
      "title": "What is Fullbay",
      "url": "https://help.fullbay.com/en/articles/11626773-what-is-fullbay"
    }
  ],
  "items": [
    {
      "type": "step",
      "text": "Fullbay is repair shop software built for the heavy-duty industry. It runs in the cloud, so you can use it on a computer, phone or tablet."
    },
    {
      "type": "step",
      "text": "Everything about the customer lives in Fullbay: customers, units, contacts, service history and PM programs."
    },
    {
      "type": "step",
      "text": "Work moves one way: a service request comes in, becomes a Service Order, and comes out the other end as an accurate invoice."
    },
    {
      "type": "step",
      "text": "Every tech has their own login. Techs clock in and document their work on a phone or tablet, and the shop sees productivity in real time."
    },
    {
      "type": "step",
      "text": "Customers have their own portal. They can create service requests, watch repairs in real time, see service history, authorize repairs and pay invoices."
    },
    {
      "type": "step",
      "text": "Fullbay is not an accounting or payroll system. It tracks your working hours on a timesheet; payroll is done in a separate system."
    },
    {
      "type": "quiz",
      "q": "What is Fullbay?",
      "options": [
        "Accounting software",
        "Repair shop software built for the heavy-duty industry",
        "A payroll system",
        "A parts catalog"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Where can you use Fullbay?",
      "options": [
        "Only on the shop computer",
        "Only at the front desk",
        "On a computer, phone or tablet",
        "Only on a laptop"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "A service request goes into Fullbay. What comes out the other end?",
      "options": [
        "An invoice",
        "A paycheck",
        "A parts order",
        "A warranty claim"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "What can customers do in their portal?",
      "options": [
        "Change your clocked hours",
        "Assign techs",
        "Edit inspection results",
        "Authorize repairs and pay invoices"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "Fullbay is NOT which of these?",
      "options": [
        "Repair shop software",
        "A payroll system",
        "Cloud-based",
        "A place to clock in"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You explain to the VP or trainer how a job moves through Fullbay, from service request to invoice."
    }
  ]
},
{
  "id": "sm3",
  "title": "Tech Home and your Details",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 3",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 7,
  "soCount": 0,
  "why": "Tech Home is where your work lives. Your Details tab keeps your phone, address and notifications right so the shop can reach you.",
  "before": [
    "You are logged in to Fullbay."
  ],
  "doneRight": "Your phone number, address and notifications are current, and you can find your assigned work by status.",
  "wrong": [
    "You need to change your email: you can't do it yourself, because it is your login name. Ask an administrator.",
    "You can't change your notifications: your role may not allow it. Ask the VP.",
    "You forgot your password: use **Forgot Password** on the login page."
  ],
  "sources": [
    {
      "title": "Tech Home",
      "url": "https://help.fullbay.com/en/articles/11832838-tech-home"
    },
    {
      "title": "Update My Password and Profile",
      "url": "https://help.fullbay.com/en/articles/12036332-update-my-password-and-profile"
    }
  ],
  "items": [
    {
      "type": "step",
      "text": "Open **Tech Home**. Every Fullbay user has one."
    },
    {
      "type": "step",
      "text": "Look at the header at the top. It shows your **Efficiency** and **Utilization** for today. As a Service Manager, your Efficiency may not have values."
    },
    {
      "type": "step",
      "text": "Find the tabs: **SOs**, **Returns**, **Stats** and **Details**. Some techs also see **Open SOs**."
    },
    {
      "type": "step",
      "text": "On the **SOs** tab, pick a view from the drop-down. **By SO Status** sorts your work into **Diagnose**, **Waiting On Parts Pricing & Authorization** and **Repair**."
    },
    {
      "type": "step",
      "text": "Open the **Details** tab and click **Edit**. The **Employee Information** window opens on the right."
    },
    {
      "type": "step",
      "text": "Update your home and cell phone numbers, preferred method of contact, address, password or profile picture."
    },
    {
      "type": "step",
      "text": "Click **Save**."
    },
    {
      "type": "step",
      "text": "Under **Notification Preferences**, set your pop-up and email notifications and your **Do Not Disturb Hours**."
    },
    {
      "type": "quiz",
      "q": "Where do you update your phone number and address?",
      "options": [
        "The SOs tab",
        "The Details tab of Tech Home",
        "The Stats tab",
        "Spike"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "You made changes in Employee Information. What do you click?",
      "options": [
        "Save",
        "Close",
        "Diagnosed",
        "Edit"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "You need to change your email address. What do you do?",
      "options": [
        "Change it on the Details tab",
        "Ask Spike to change it",
        "Ask an administrator, because it is your login name",
        "Create a new login"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "You forgot your password. What do you use?",
      "options": [
        "Ask the customer",
        "Forgot Password on the login page",
        "The Stats tab",
        "Global Search"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Where do you set Do Not Disturb Hours?",
      "options": [
        "The Stats tab",
        "Notification Preferences on the Details tab",
        "The Returns tab",
        "The Schedule"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You show the VP or trainer the changes you made to your employee profile on the **Details** tab."
    }
  ]
},
{
  "id": "sm4",
  "title": "Global Search",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 4",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 7,
  "soCount": 1,
  "why": "Global Search is the fastest way to open any SO by its number, without scrolling through lists.",
  "before": [
    "You know the number of the SO you are looking for."
  ],
  "doneRight": "You open any SO in a few seconds using its number.",
  "wrong": [
    "Too many results: filter to Service Orders only.",
    "The SO doesn't come up: check the number with the Service Advisor and make sure it was created in the correct shop location."
  ],
  "sources": [
    {
      "title": "Service Order Edit Tab",
      "url": "https://help.fullbay.com/en/articles/12062010-service-order-edit-tab"
    }
  ],
  "items": [
    {
      "type": "step",
      "text": "Click into the **Global Search** field at the top of Fullbay."
    },
    {
      "type": "step",
      "text": "Select the **funnel icon** to filter your search."
    },
    {
      "type": "step",
      "text": "Refine the search by checking the Service Orders checkbox."
    },
    {
      "type": "step",
      "text": "Type in the SO number that you are searching for"
    },
    {
      "type": "step",
      "text": "Select the SO from the drop-down to open it."
    },
    {
      "type": "step",
      "text": "Use the same field to find a Customer, Unit or a Service Request quickly."
    },
    {
      "type": "quiz",
      "q": "You know the SO number. What is the fastest way to open it?",
      "options": [
        "Scroll through Tech Home",
        "Global Search",
        "Ask the customer",
        "Ask Parts"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What do you type into Global Search to find an SO?",
      "options": [
        "The customer's phone number",
        "Your password",
        "The SO number",
        "A part price"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "You get too many results. What do you do?",
      "options": [
        "Check the Service Orders checkbox",
        "Log out",
        "Close Fullbay",
        "Ask Parts"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "How do you open the SO after searching?",
      "options": [
        "Print the results",
        "Select it from the drop-down",
        "Email it",
        "Clock out"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What else can you find quickly with Global Search?",
      "options": [
        "Your paycheck",
        "Vendor prices only",
        "Your schedule",
        "A Customer, Unit or Service Request"
      ],
      "answer": 3
    },
    {
      "type": "signoff",
      "text": "You open an SO with **Global Search** while the VP or trainer watches."
    }
  ]
},
{
  "id": "sm5",
  "title": "Shop process and tech overview",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 5",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 1,
  "why": "every other module assumes you can explain how an SO moves through the shop and who owns each stage.",
  "before": [
    "you need one SO that is in progress and your own Fullbay login."
  ],
  "doneRight": "a new tech can name all seven stages, who owns each, and find their own open SOs without help.",
  "wrong": [
    "A tech is working on a job but their status is in **Red**: the tech isn’t clocked in or assigned to the SO.",
    "A tech can't find an SO: check **By Tech** on the In Process tab; it may be unassigned.",
    "The tech has left the job but the SO isn’t in the **Review** section: the tech has not marked the SO as complete."
  ],
  "items": [
    {
      "type": "step",
      "text": "Click **Service** in the left menu. The main sections are Tech Home, Service, Parts, Office and Reporting."
    },
    {
      "type": "step",
      "text": "Open the **In Process** tab and switch the view to **By Status**. You now see where every open SO sits."
    },
    {
      "type": "step",
      "text": "Open one SO and walk the seven stages out loud: **Assign**, **Diagnose**, **Price Parts**, **Authorize**, **Order Parts**, **Repair**, **Invoice**."
    },
    {
      "type": "step",
      "text": "For each stage, name who owns it: the Service Advisor creates and authorizes, the Tech diagnoses and repairs, Parts prices and orders and who creates the invoice at your shop."
    },
    {
      "type": "step",
      "text": "Click **Tech Home** in the left menu. It shows Efficiency and Utilization stats and the tabs Open SOs, Returns, Stats and Details."
    },
    {
      "type": "step",
      "text": "Show a new tech where their own open SOs and stats are on Tech Home."
    },
    {
      "type": "quiz",
      "q": "Which view on the In Process tab shows where every open SO sits?",
      "options": [
        "By Tech",
        "By Status",
        "Unscheduled Work",
        "Deleted SOs"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What are the seven stages, in order?",
      "options": [
        "Diagnose, Assign, Authorize, Price Parts, Repair, Order Parts, Invoice",
        "Assign, Authorize, Diagnose, Repair, Price Parts, Order Parts, Invoice",
        "Assign, Diagnose, Price Parts, Authorize, Order Parts, Repair, Invoice"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Who prices and orders the parts?",
      "options": [
        "The Tech",
        "The Service Advisor",
        "Parts",
        "The VP"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Which stages does the Tech own?",
      "options": [
        "Diagnose and repair",
        "Create and authorize",
        "Price and order",
        "Invoice"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "A tech can't find an SO. Where do you check?",
      "options": [
        "The Text Messages Report",
        "Pending Repairs",
        "The Fleet Report",
        "By Tech on the In Process tab; it may be unassigned"
      ],
      "answer": 3
    },
    {
      "type": "signoff",
      "text": "Can confidently walk through each step with no assistance and walks a new tech through the shop process without using notes."
    }
  ]
},
{
  "id": "sm6",
  "title": "SO review",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 6",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 10,
  "why": "this is the last check before money goes out the door. A bad SO that gets invoiced costs you a credit memo and a customer call.",
  "before": [
    "the Review step must be turned on and your role needs the permission that requires review before invoicing. Ask the account owner if you can't see the step on the Service page."
  ],
  "doneRight": "an SO moves on only when all six checks pass, and any SO you fail has a note naming the problem and next steps.",
  "wrong": [
    "Hours billed don't match clocked time: check the tech's timesheet first (Module 10), then decide whether the hours or the clock entry is wrong.",
    "A part is still unpriced: send it to Parts; don't price it yourself.",
    "The tech failed to complete any repairs or action items, do not complete them for them. Contact the tech and have him complete his tasks."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the SOs that are waiting for review."
    },
    {
      "type": "step",
      "text": "Open the SO and check **authorization first**: every Action Item you will bill has been authorized/declined (moved to pending)."
    },
    {
      "type": "step",
      "text": "Check **labor**: click the **$** icon to see Expected, Invoiced and SO Hours. Compare the hours billed with the tech's clocked time on the SO. Ensure you are hitting the expected Margin shown."
    },
    {
      "type": "step",
      "text": "Check **the write-up**: each Action Item has the complaint, the cause and the correction written in plain words."
    },
    {
      "type": "step",
      "text": "Verify that the words tell the complete story. Use AI in Fullbay to clean up the tech's hand-keyed information."
    },
    {
      "type": "step",
      "text": "Check **the inspection**: it is completed and anything defective has its own Action Item."
    },
    {
      "type": "step",
      "text": "If everything passes, leave a note on the SO stating that you have reviewed and confirmed your portion of the SO. Do not approve the review without a parts note confirming they have also reviewed the SO for accuracy."
    },
    {
      "type": "step",
      "text": "If anything fails, contact the tech or service advisor for clarity on the action items in question."
    },
    {
      "type": "quiz",
      "q": "What do you check first on an SO waiting for review?",
      "options": [
        "Authorization",
        "The inspection",
        "The write-up",
        "Labor"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Where do you see Expected, Invoiced and SO Hours?",
      "options": [
        "The Schedule page",
        "Tech Home",
        "The $ icon",
        "The Text Messages Report"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Everything passes. What must be on the SO before you approve the review?",
      "options": [
        "A customer text",
        "A parts note confirming they have also reviewed the SO",
        "A new due date",
        "A Samsara report"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "A part is still unpriced. What do you do?",
      "options": [
        "Price it yourself",
        "Invoice without it",
        "Delete the line",
        "Send it to Parts; don't price it yourself"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "The tech failed to complete repairs on the SO. What do you do?",
      "options": [
        "Contact the tech and have him complete his tasks",
        "Complete them for him",
        "Approve the review anyway",
        "Move the SO to Pending"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "reviews 10 SOs: invoiced hours are at or above margin, parts are received and at or above margins, complaint, cause and correction written, authorization on file, review has been verified and customer is aware of the vehicle status."
    }
  ]
},
{
  "id": "sm7",
  "title": "Daily meeting and calendar",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 7",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "entry": {
    "title": "Meeting and capacity conflict",
    "help": "Enter the date you ran the meeting and the SO number of the capacity conflict you resolved.",
    "rows": 1,
    "fields": [
      {
        "label": "Meeting date",
        "type": "date"
      },
      {
        "label": "SO number of the conflict",
        "type": "text"
      }
    ]
  },
  "why": "the schedule is where a full shop either stays full or quietly loses billable hours. You settle the next day's capacity before the shop closes.",
  "before": [
    "10 minutes before the meeting, open **Service** and the **Schedule** page."
  ],
  "doneRight": "no work is left in Unassigned or Unscheduled at the end of the meeting, and no tech is booked past their working hours.",
  "wrong": [
    "Events won't fit a tech's day: check that **Follow Employee Schedule** is on and the tech's work schedule is set.",
    "Autofill picks the wrong time: type the time in yourself.",
    "The schedule isn’t showing the invoice/expected time on the tech calendar: verify the SO has invoiced or expected hours set for each action item."
  ],
  "items": [
    {
      "type": "step",
      "text": "On the **Schedule** page, filter by your shop. Keep the view to fewer than 20 people and about one week out so it loads fast."
    },
    {
      "type": "step",
      "text": "Look at the left column: **Service Requests**, **Unassigned Work** and **Unscheduled Work**. Anything sitting there needs a tech and a time on the schedule or a note indicating why it isn’t scheduled."
    },
    {
      "type": "step",
      "text": "Click **Service**, open **In Process** and choose **By Tech**. Green means a tech is on an assigned SO. Red means a tech is clocked in but not on an assigned SO."
    },
    {
      "type": "step",
      "text": "Switch the view to **By Status** and note SOs stuck waiting on parts or authorization."
    },
    {
      "type": "step",
      "text": "Run the meeting with the Service Advisors and Parts: what finished today, what is on the schedule tomorrow, what is waiting on parts, what is waiting on authorization, and what is blocked."
    },
    {
      "type": "step",
      "text": "**Ensure that each SO that was called out has notes indicating what the problem is and where it stands.**"
    },
    {
      "type": "step",
      "text": "Fix capacity conflicts on the calendar: drag the SO to another tech's slot, or click a slot and choose **Add SO Event** and type the time."
    },
    {
      "type": "step",
      "text": "Tell the owner of every item what they need to do before the next meeting."
    },
    {
      "type": "quiz",
      "q": "How do you set up the Schedule page?",
      "options": [
        "Show every shop, a month out",
        "Filter by your shop, fewer than 20 people, about one week out",
        "Today only",
        "Filter by tech, one day out"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "On In Process, By Tech, what does Red mean?",
      "options": [
        "The tech is on an assigned SO",
        "The tech is clocked out",
        "The SO is past due",
        "The tech is clocked in but not on an assigned SO"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "Something is sitting in Unassigned Work. What does it need?",
      "options": [
        "A tech and a time on the schedule, or a note saying why it isn't scheduled",
        "A new SO",
        "Nothing until tomorrow",
        "A customer text"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Events won't fit a tech's day. What do you check?",
      "options": [
        "The tech's password",
        "The Fleet Report",
        "That Follow Employee Schedule is on and the tech's work schedule is set",
        "The All Revenue Report"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What does done right look like at the end of the meeting?",
      "options": [
        "Every SO is invoiced",
        "No work left in Unassigned or Unscheduled, and no tech booked past their hours",
        "Every tech is Red",
        "The schedule is empty"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "runs the daily meeting to the agenda and resolves one capacity conflict."
    }
  ]
},
{
  "id": "sm8",
  "title": "Customer comms and escalations",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 8",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 1,
  "why": "the Service Advisor sends the day-to-day updates. You step in when a customer is unhappy, stuck, or has had no answer, and you own customer satisfaction.",
  "before": [
    "texting only works for a contact with a cell number on file and the right **Notification Preferences** turned on. Two-way texting must be enabled for your shop. If you do not have the ability to text, let your trainer know."
  ],
  "doneRight": "no incoming message is left unanswered, and every escalation has a written outcome on the SO.",
  "wrong": [
    "The text won't send: check the contact has a cell number and that texting is on for the shop.",
    "The customer says they never got a message: check the contact's **Notification Preferences**.",
    "The customer does not reply to your text. Give the customer a call and ensure the number listed is a cell number and give the customer an update when you are verifying the customer contact info."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the **Text Messages Report** under Reporting. It defaults to the last 30 days of unread messages. Filter by incoming and unread."
    },
    {
      "type": "step",
      "text": "Open each unanswered thread: go to the customer's record and click the **Messages** tab."
    },
    {
      "type": "step",
      "text": "Read the thread, then open the customer's **Services** tab and find the SO the message is about."
    },
    {
      "type": "step",
      "text": "Confirm the facts on the SO before you reply: authorization status, parts status, and where the job sits in the stages."
    },
    {
      "type": "step",
      "text": "Reply from the **Messages** tab, or click the **+** icon and send an ad hoc text. You can attach up to 5 images."
    },
    {
      "type": "step",
      "text": "If the customer needs a call, make it, then write what was agreed in a note on the SO so the advisor sees it."
    },
    {
      "type": "step",
      "text": "Back in the report, mark the thread **Read**. You can mark several at once with the batch action."
    },
    {
      "type": "quiz",
      "q": "Where do you find unanswered customer texts?",
      "options": [
        "The Schedule page",
        "The Text Messages Report under Reporting",
        "Tech Home",
        "The Fleet Report"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What do you confirm on the SO before you reply?",
      "options": [
        "The tech's clock-ins",
        "The invoice total",
        "Authorization status, parts status, and where the job sits in the stages",
        "The PM schedule"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "How many images can you attach to a text?",
      "options": [
        "Up to 5",
        "1",
        "Up to 10",
        "None"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "You called the customer. What do you do next?",
      "options": [
        "Nothing; the call is enough",
        "Text the tech",
        "Mark the SO complete",
        "Write what was agreed in a note on the SO"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "The customer doesn't reply to your text. What do you do?",
      "options": [
        "Text again tomorrow",
        "Close the thread",
        "Call them, make sure the number is a cell, and give an update",
        "Ask Parts to call"
      ],
      "answer": 2
    },
    {
      "type": "signoff",
      "text": "handles a live escalation and logs the outcome."
    }
  ]
},
{
  "id": "sm9",
  "title": "Financial shop performance and GP",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 9",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 30,
  "entry": {
    "title": "Month's GP and drivers",
    "help": "Enter the month you reviewed, its GP %, and the two drivers you explained to the VP.",
    "rows": 1,
    "fields": [
      {
        "label": "Month",
        "type": "text"
      },
      {
        "label": "GP %",
        "type": "text"
      },
      {
        "label": "Driver 1",
        "type": "text"
      },
      {
        "label": "Driver 2",
        "type": "text"
      }
    ]
  },
  "why": "gross profit is how you know whether the shop made money. You find the two things that moved it most and say them plainly.",
  "before": [
    "run this on the first working days of the month, for the full month just ended. The Reports Dashboard needs the Owner permission, so ask the owner if you can't open it."
  ],
  "doneRight": "you can state last month's GP and name two drivers with a number behind each.",
  "wrong": [
    "Mileage lines show $0 cost on the All Revenue Report. That is normal.",
    "Numbers look low: check the Work In Progress Report for work done but not yet invoiced."
  ],
  "items": [
    {
      "type": "step",
      "text": "Click **Reporting** and open the **All Revenue Report**. It lists the Revenue Reports under the revenue category."
    },
    {
      "type": "step",
      "text": "Set the date range to last month and click **Go**."
    },
    {
      "type": "step",
      "text": "Read revenue, cost and margin for each category (labor, parts and so on). Write down the margin for labor and for parts."
    },
    {
      "type": "step",
      "text": "Compare to the site targets: cost at or below targets and margin at or above targets."
    },
    {
      "type": "step",
      "text": "Open the **Employee Statistics Report** and note each tech's Efficiency, Utilization and Revenue. The site targets are Efficiency at or above targets, Utilization above targets and revenue per tech at or above targets for the month."
    },
    {
      "type": "step",
      "text": "Open the **Work In Progress Report** and note the money not yet invoiced."
    },
    {
      "type": "step",
      "text": "Pick the **top two drivers** of the month's GP (for example, parts margin dropped, or two techs were under their Efficiency target) and write one sentence on each for your leadership team."
    },
    {
      "type": "step",
      "text": "Share the numbers and the two drivers with the VP."
    },
    {
      "type": "quiz",
      "q": "Which report shows revenue, cost and margin by category?",
      "options": [
        "Employee Statistics Report",
        "Fleet Report",
        "All Revenue Report",
        "Text Messages Report"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What are the site's cost and margin benchmarks?",
      "options": [
        "Cost at or above targets, margin at or below targets",
        "Cost is low and margins are high",
        "Cost at or below targets, margin at or above targets",
        "Cost is high and margins are low"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What do you compare each tech's Efficiency to?",
      "options": [
        "At or above 110%",
        "At or above the site target",
        "At or above 75%",
        "100% or close to it"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Mileage lines show $0 cost on the All Revenue Report. What does that mean?",
      "options": [
        "A pricing error",
        "Missing parts",
        "A report bug",
        "That is normal"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "The month's numbers look low. What do you check?",
      "options": [
        "The Work In Progress Report for work done but not yet invoiced",
        "The Schedule page",
        "Tech Home",
        "The Fleet Report"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "pulls the month's GP and explains the top two drivers to the VP."
    }
  ]
},
{
  "id": "sm10",
  "title": "Clock-ins and Samsara",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 10",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "entry": {
    "title": "Clock-in correction",
    "help": "Enter the date, the tech, and what you corrected.",
    "rows": 1,
    "fields": [
      {
        "label": "Date",
        "type": "date"
      },
      {
        "label": "Tech",
        "type": "text"
      },
      {
        "label": "What you corrected",
        "type": "text"
      }
    ]
  },
  "why": "clock time is how labor gets checked at SO review, and how efficiency and payroll hours are worked out. A bad clock entry left overnight turns into a payroll fix later.",
  "before": [
    "check clock-ins first thing in the morning and again before end of day."
  ],
  "doneRight": "Clock In/Out match Samsara Start/End times for techs at the end of the day, and every correction has a comment (required).",
  "wrong": [
    "A tech clocks in all day to General: coach them to click their Action Item when they start a job (Tech Module 4).",
    "A tech clocks In/Out of Fullbay before the Start/End of their day. Coach them on the process for clocking in/out in Fullbay based on the Policy and Procedures outlined for techs.",
    "Payroll hours look wrong at the end of a pay period: export timesheets as CSV from the **Office** page and compare before you change anything."
  ],
  "items": [
    {
      "type": "step",
      "text": "Click **Service**, open **In Process**, and choose **By Tech**. A **red** tech is clocked in but not on an assigned SO. A **green** tech is on an assigned SO."
    },
    {
      "type": "step",
      "text": "For every red tech, ask what they are working on and get them onto the right SO."
    },
    {
      "type": "step",
      "text": "Click **Office**, then the **Timesheets** tab. Filter by today's date, then by each employee you want to check."
    },
    {
      "type": "step",
      "text": "Look for entries that don't make sense: a missing clock-out, time sitting in **General** that should be on an SO, or time on the wrong SO."
    },
    {
      "type": "step",
      "text": "Verify that the **Clock In/Out** follow the Samsara **Start/End** times."
    },
    {
      "type": "step",
      "text": "Fix an entry using **Clock In/Out** and add a **Comment** (required) that says what you changed and why."
    },
    {
      "type": "step",
      "text": "Tell the tech what you corrected so it doesn't repeat."
    },
    {
      "type": "quiz",
      "q": "On In Process, By Tech, a tech shows red. What does that mean?",
      "options": [
        "Clocked in but not on an assigned SO",
        "On an assigned SO",
        "Clocked out",
        "On vacation"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Where do you check a tech's timesheet entries?",
      "options": [
        "Tech Home",
        "The Schedule page",
        "Office, then the Timesheets tab",
        "The Fleet Report"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What should a tech's Clock In/Out match?",
      "options": [
        "The SO's estimate",
        "The Samsara Start/End times",
        "The customer's hours",
        "The Service Advisor's schedule"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "You fix a clock entry. What else is required?",
      "options": [
        "A text to the customer",
        "A new SO",
        "Nothing",
        "A Comment that says what you changed and why"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "A tech clocks in all day to General. What do you coach?",
      "options": [
        "Click their Action Item when they start a job",
        "Clock out at lunch only",
        "Ask Parts to clock them in",
        "Leave it in General"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "finds and corrects a clock-in error the same day."
    }
  ]
},
{
  "id": "sm11",
  "title": "SO report and accountability",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 11",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "entry": {
    "title": "Weekly SO review",
    "help": "Enter the date of the review and how many SOs you assigned an owner.",
    "rows": 1,
    "fields": [
      {
        "label": "Review date",
        "type": "date"
      },
      {
        "label": "SOs assigned an owner",
        "type": "text"
      }
    ]
  },
  "why": "finished work that isn't invoiced is money sitting on the shelf. A daily report review with a named owner on every item is how it gets moving.",
  "before": [
    "review the SO for notes that indicate why the SO hasn’t been reviewed/invoiced. If there are no notes, complete the following steps."
  ],
  "doneRight": "every old SO has an owner and a date, and the list is shorter each week.",
  "wrong": [
    "The Age column exports as text like \"103d 10h\" and won't sort or count. Convert it to days before you count rows over 2 days.",
    "Work In Progress Details times out on a big shop: narrow the date range."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the **Work In Progress Report**. It splits open SOs into Pending Auth, Incomplete, and Complete-not-invoiced."
    },
    {
      "type": "step",
      "text": "Mark every SO older than 2 days."
    },
    {
      "type": "step",
      "text": "For each marked SO, write the reason (waiting on a part, waiting on authorization, waiting on review, tech hasn't completed) and the **owner**: tech, advisor, parts, or biller."
    },
    {
      "type": "step",
      "text": "Meet with the VP. Go down the list one SO at a time and agree a **due date** with each owner."
    },
    {
      "type": "step",
      "text": "Leave a note on the SO with the owner and agreed upon due date."
    },
    {
      "type": "step",
      "text": "Next week, run the same two reports (the **Work In Progress Report** and Efficiency) and check each item off. Anything still open gets a conversation, not just a new due date."
    },
    {
      "type": "quiz",
      "q": "How does the Work In Progress Report split open SOs?",
      "options": [
        "By tech and by customer",
        "Pending Auth, Incomplete, and Complete-not-invoiced",
        "Paid and unpaid",
        "Labor and parts"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "For each SO older than 2 days, what do you write?",
      "options": [
        "The customer's phone number",
        "The invoice total",
        "The reason and the owner",
        "The tech's Efficiency"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Where do you record the owner and agreed due date?",
      "options": [
        "In a note on the SO",
        "In a text to the customer",
        "On the Schedule page",
        "Nowhere; just say it"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Next week, an item is still open. What happens?",
      "options": [
        "Give it a new due date",
        "Delete the SO",
        "Invoice it as is",
        "It gets a conversation, not just a new due date"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "The Age column exports as text like \"103d 10h\". What do you do?",
      "options": [
        "Count it as is",
        "Convert it to days before you count rows over 2 days",
        "Ignore the column",
        "Ask the customer"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "runs the weekly SO report review with techs, advisors, parts and billers and assigns an owner."
    }
  ]
},
{
  "id": "sm12",
  "title": "Performance, discipline and monthly 1-on-1s",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 12",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 30,
  "entry": {
    "title": "1-on-1 dates",
    "help": "Enter the dates only. Keep the notes themselves in your own records, not in this app.",
    "rows": 1,
    "fields": [
      {
        "label": "1-on-1 date",
        "type": "date"
      },
      {
        "label": "Corrective conversation date",
        "type": "date"
      }
    ]
  },
  "why": "a tech who sees their own numbers and knows what you expect improves faster than one who hears about it only when something is wrong. Writing it down protects both of you.",
  "before": [
    "hold one 1-on-1 per tech per month. Fullbay supplies the numbers. The conversation and the write-up are yours."
  ],
  "doneRight": "each tech has a dated note for the month, and every note names a next check date.",
  "wrong": [
    "The tech disputes a number: pull up the clocked hours and the SO together and go through it line by line.",
    "Efficiency looks low because the tech was waiting on parts: check the SO's parts history before you blame the tech."
  ],
  "items": [
    {
      "type": "step",
      "text": "Before the meeting, open the **Employee Statistics Report** for the month and find the tech. Note Efficiency, Utilization and Revenue."
    },
    {
      "type": "step",
      "text": "Compare each number to the site targets."
    },
    {
      "type": "step",
      "text": "Open the **Clocked Hours Report** and the **Completed Hours Report** for the same tech. Look for clock-ins that don't match completed work."
    },
    {
      "type": "step",
      "text": "Open the tech's SOs from the month and pick two good ones and, if needed, one that needs work."
    },
    {
      "type": "step",
      "text": "In the meeting, have the tech open **Tech Home** and look at their own stats with you. Start with what went well."
    },
    {
      "type": "step",
      "text": "Agree one or two specific things to change and the date you will check them."
    },
    {
      "type": "step",
      "text": "Write it down the same day: date, the numbers you looked at, what was agreed, and the check date. A short form is enough."
    },
    {
      "type": "step",
      "text": "For a rule that was broken (not just a number that was low), write what happened, what was said to the tech, and what happens next."
    },
    {
      "type": "step",
      "text": "Cover the month's incentive results and set goals as needed for improvement."
    },
    {
      "type": "quiz",
      "q": "How often do you hold a 1-on-1 with each tech?",
      "options": [
        "Once a year",
        "Once per tech per month",
        "Only when something is wrong",
        "Every day"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Which report shows a tech's Efficiency, Utilization and Revenue?",
      "options": [
        "Fleet Report",
        "Text Messages Report",
        "Employee Statistics Report",
        "All Revenue Report"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Which reports show clock-ins that don't match completed work?",
      "options": [
        "The Clocked Hours Report and the Completed Hours Report",
        "The Fleet Report and the PMs tab",
        "The Text Messages Report",
        "The All Revenue Report"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "When do you write the 1-on-1 down?",
      "options": [
        "At the end of the quarter",
        "Only if the tech disagrees",
        "Never; it's verbal",
        "The same day"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "A tech's Efficiency looks low because they were waiting on parts. What do you do first?",
      "options": [
        "Write them up",
        "Check the SO's parts history before you blame the tech",
        "Lower their target",
        "Ignore it"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "holds a documented 1-on-1 and one documented corrective conversation."
    }
  ]
},
{
  "id": "sm13",
  "title": "PM tracking program",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 13",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "entry": {
    "title": "PM due list",
    "help": "Enter the week you ran the PM due list and how many due units you got scheduled.",
    "rows": 1,
    "fields": [
      {
        "label": "Week of",
        "type": "date"
      },
      {
        "label": "Due units scheduled",
        "type": "text"
      }
    ]
  },
  "why": "PMs are steady, predictable work. Units that fall past due are lost jobs and unhappy customers. You own the program; the advisors check it at intake.",
  "before": [
    "PMs only work if the setup was done in this order: **Components & Systems**, then **Unit Types**, then **PMs**. If a unit shows no PMs, the setup is where to look first."
  ],
  "doneRight": "the Fleet Report shows fewer past-due units each week, and every due PM has an SO.",
  "wrong": [
    "A new PM doesn't show on a unit: check the unit's Type is checked on the PM, then use **Add to Units**.",
    "A PM was done but still shows due: use **Update Last Performed** to enter the date and mileage or hours."
  ],
  "items": [
    {
      "type": "step",
      "text": "Click **Service**, then the **PMs** tab. It shows units with a PM coming due or past due."
    },
    {
      "type": "step",
      "text": "Open **Reporting** and run the **Fleet Report**. Each unit shows as current, due in 7 days, or past due. A PM never performed shows as past due."
    },
    {
      "type": "step",
      "text": "Select the units that are due, and create the SOs from the PMs tab. It creates one SO per unit; if a unit has several PMs due they combine on one SO."
    },
    {
      "type": "step",
      "text": "Hand each new SO to the advisor to schedule (Service Advisor Module 8)."
    },
    {
      "type": "step",
      "text": "Check for units with no tracking: open the unit, then the **Components & PMs** tab, and confirm the PM is tracked by mileage or hours. If it isn't, turn it on (Service Advisor Module 15)."
    },
    {
      "type": "step",
      "text": "To put a PM on many customer units at once, select the units and choose **Add PM Service** from **Batch Actions**."
    },
    {
      "type": "step",
      "text": "To add or change a PM for a whole type of unit, open the PM, set its interval, check the Unit Types, **Save**, then click **Add to Units**. !!WARNING: This overwrites any custom changes made on individual units and cannot be reversed; you will lose all custom unit configuration.!!"
    },
    {
      "type": "step",
      "text": "Each week, count how many PMs are past due and compare with last week."
    },
    {
      "type": "quiz",
      "q": "Where do you see units with a PM coming due or past due?",
      "options": [
        "Tech Home",
        "Service, then the PMs tab",
        "The Timesheets tab",
        "The Text Messages Report"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "On the Fleet Report, how does a PM that was never performed show?",
      "options": [
        "Current",
        "Due in 7 days",
        "Past due",
        "It doesn't show"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "A unit has several PMs due. You create SOs from the PMs tab. What happens?",
      "options": [
        "They combine on one SO",
        "One SO per PM",
        "Nothing; do it by hand",
        "The PMs are deleted"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "A PM was done but still shows due. What do you use?",
      "options": [
        "Add to Units",
        "Batch Actions",
        "Delete the PM",
        "Update Last Performed"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "What does Add to Units do to custom changes made on individual units?",
      "options": [
        "Keeps them",
        "Overwrites them",
        "Emails them to the customer",
        "Moves them to Pending"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "produces the PM due list and gets each due unit scheduled."
    }
  ]
},
{
  "id": "sm14",
  "title": "DIR and inspection on every SO",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 14",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 10,
  "why": "DIR — Diagnose, Inspect, Repair — this is the core of who we are. Customers count on us to inspect their vehicles and keep them safe, and a thorough inspection surfaces the legitimate work a truck actually needs.",
  "before": [
    "You can review SOs on the Service page (Module 6)."
  ],
  "doneRight": "Every SO had an inspection · every inspection had a call · every approval is in writing on the SO.",
  "wrong": [
    "No inspection on the SO is a process failure, not a paperwork failure.",
    "A tech with low RPH and few findings has an inspection problem, not a speed problem.",
    "Work found but not called on is lost. Work called on but not approved is lost. Work approved but not invoiced is lost."
  ],
  "items": [
    {
      "type": "step",
      "text": "Diagnose the stated complaint properly — no guess-and-replace."
    },
    {
      "type": "step",
      "text": "Inspect the whole unit while it is down, including PM."
    },
    {
      "type": "step",
      "text": "Repair so it holds. Quality the first time."
    },
    {
      "type": "step",
      "text": "DIR runs on every SO, every visit — not just the big ones."
    },
    {
      "type": "step",
      "text": "Spot-check SOs for a completed inspection and a documented diagnosis."
    },
    {
      "type": "step",
      "text": "Required call after every inspection — tech briefs the manager."
    },
    {
      "type": "step",
      "text": "Tech and manager shape the repair plan together."
    },
    {
      "type": "step",
      "text": "Manager secures the customer's approval before work proceeds."
    },
    {
      "type": "step",
      "text": "Log what the customer declined — it is pipeline for the next touch on the unit."
    },
    {
      "type": "step",
      "text": "Track approval rate on findings and time from inspection to approval."
    },
    {
      "type": "quiz",
      "q": "What does DIR stand for?",
      "options": [
        "Dispatch, Invoice, Review",
        "Diagnose, Inspect, Repair",
        "Diagnose, Invoice, Repair",
        "Drive, Inspect, Return"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Which SOs get DIR?",
      "options": [
        "Only the big ones",
        "Only PM services",
        "Every SO, every visit",
        "Only when the customer asks"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "An SO has no inspection. What kind of failure is it?",
      "options": [
        "A process failure, not a paperwork failure",
        "A paperwork failure only",
        "Not a failure if the repair was done",
        "A parts failure"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Who secures the customer's approval before work proceeds?",
      "options": [
        "The tech",
        "Parts",
        "The customer's driver",
        "The manager"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "A tech has low RPH and few findings. What kind of problem is it?",
      "options": [
        "A speed problem",
        "A parts problem",
        "An inspection problem, not a speed problem",
        "A scheduling problem"
      ],
      "answer": 2
    },
    {
      "type": "signoff",
      "text": "spot-checks 10 SOs for a completed inspection and a documented diagnosis."
    }
  ]
},
{
  "id": "sm15",
  "title": "Leave a note on an SO",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 15",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 7,
  "soCount": 3,
  "why": "A note on the SO is how the shop knows what happened on a job. Calls and memory get lost; a note stays on the SO for anyone who opens it later.",
  "before": [
    "You have the SO open."
  ],
  "doneRight": "Anyone who opens the SO later understands what you did or found without calling you.",
  "wrong": [
    "Not sure who will see the note: Action Item notes are only visible to the shop. An SO note with **Show note to customer** checked shows in the customer's Customer Portal.",
    "Looking for your note on the invoice: notes never appear on the estimate or invoice. The cause and correction go in their own fields."
  ],
  "sources": [
    {
      "title": "Create a New Service Order (Notes sections)",
      "url": "https://help.fullbay.com/en/articles/12061994-1-create-a-new-service-order"
    }
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the SO."
    },
    {
      "type": "step",
      "text": "Open the Action Item the note is about."
    },
    {
      "type": "step",
      "text": "Click the **Notes** icon on the Action Item."
    },
    {
      "type": "step",
      "text": "Write the note in plain words: what you found, what you did, and what is still open."
    },
    {
      "type": "step",
      "text": "Click the blue **Add Note** button"
    },
    {
      "type": "step",
      "text": "Leave **Show note to customer** unchecked unless you want the customer to see it."
    },
    {
      "type": "quiz",
      "q": "Where do you add a note about one Action Item?",
      "options": [
        "The Stats tab",
        "The Notes icon on the Action Item",
        "Spike",
        "Global Search"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Who can see an Action Item note?",
      "options": [
        "The customer",
        "The vendor",
        "Only the shop",
        "Anyone online"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "You wrote your note. What do you click to add it?",
      "options": [
        "Save",
        "Diagnosed",
        "The blue Add Note button",
        "Close"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What does checking Show note to customer do?",
      "options": [
        "Puts the note on the invoice",
        "Emails the vendor",
        "Deletes the note",
        "Lets the customer see the note in their Customer Portal"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "Do SO notes appear on the estimate or invoice?",
      "options": [
        "Yes, always",
        "No",
        "Only on the invoice",
        "Only when printed"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You leave clear Action Item notes on 3 SOs that the Service Advisor, Parts or the tech can act on without asking you."
    }
  ]
},
{
  "id": "sm16",
  "title": "Get help with Spike",
  "roles": [
    "Service Manager"
  ],
  "tier": "Module 16",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 7,
  "soCount": 0,
  "why": "Spike is your 24/7 help inside Fullbay. When you're stuck, Spike gets you an answer without stopping the job.",
  "before": [
    "You are logged in to Fullbay."
  ],
  "doneRight": "You get an answer from Spike or a Help & Training article without leaving the job.",
  "wrong": [
    "You can't find what you need: go back to the **Home** tab and start a new chat or a new search.",
    "Spike's answer doesn't match how your shop does it: ask the VP. Your shop's process comes first."
  ],
  "sources": [
    {
      "title": "Navigating Spike",
      "url": "https://help.fullbay.com/en/articles/12564280-navigating-spike"
    }
  ],
  "items": [
    {
      "type": "step",
      "text": "Open **Spike**. You can open it from anywhere in Fullbay, at any time."
    },
    {
      "type": "step",
      "text": "You start on the **Home** tab. Start a new conversation with Spike, or search Help & Training."
    },
    {
      "type": "step",
      "text": "Type your question in your preferred language. Spike answers in the same language."
    },
    {
      "type": "step",
      "text": "Open the **Help** tab to see all Help & Training content in one place. Use the **search field** to find a topic."
    },
    {
      "type": "step",
      "text": "Inside an article, click the **Table of Contents** to jump to a section, or click a **numbered bubble** to open a related article."
    },
    {
      "type": "step",
      "text": "Open the **Messages** tab to see your past conversations and pick up where you left off."
    },
    {
      "type": "quiz",
      "q": "When is Spike available?",
      "options": [
        "Only during shop hours",
        "Only on weekends",
        "Only for managers",
        "24/7"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "Which tab does Spike open on?",
      "options": [
        "Home",
        "Messages",
        "Help",
        "Details"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "You type your question in Spanish. How does Spike answer?",
      "options": [
        "In English only",
        "In Spanish",
        "It can't answer",
        "By email"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Where do you find your past conversations with Spike?",
      "options": [
        "The Help tab",
        "The Home tab",
        "The Messages tab",
        "The Stats tab"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What does a numbered bubble in an article do?",
      "options": [
        "Closes Spike",
        "Opens the related article in the Help tab",
        "Rates the article",
        "Prints the article"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You use Spike to answer a question the VP or trainer gives you, then show where that conversation is saved in **Messages**."
    }
  ]
}
);
