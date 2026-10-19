// Fleet Span University — Service Advisor track. Built from the approved Service Advisor Modules Draft v2 (Oct 19, 2026). One object per module; see modules/README.md for the format.
FSU_MODULES.push(
{
  "id": "sa2",
  "title": "What is Fullbay",
  "roles": [
    "Service Advisor"
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
    "Something in Fullbay doesn't look right: ask your Service Manager, or ask Spike (Module 16)."
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
      "text": "You explain to your Service Manager how a job moves through Fullbay, from service request to invoice."
    }
  ]
},
{
  "id": "sa3",
  "title": "Tech Home and your Details",
  "roles": [
    "Service Advisor"
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
    "You can't change your notifications: your role may not allow it. Ask your Service Manager.",
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
      "text": "Look at the header at the top. It shows your **Efficiency** and **Utilization** for today. As a Service Advisor, your Efficiency may not have values."
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
      "text": "You show your Service Manager the changes you made to your employee profile on the **Details** tab."
    }
  ]
},
{
  "id": "sa4",
  "title": "Global Search",
  "roles": [
    "Service Advisor"
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
    "The SO doesn't come up: check the number with your Service Manager."
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
    }
  ]
},
{
  "id": "sa5",
  "title": "Create an SO or convert a service request",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 5",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 8,
  "why": "every later step depends on the right customer, the right unit and a clear complaint on the SO. A wrong start means rework at invoicing.",
  "before": [
    "have the customer name, the unit (or its VIN) and what the customer says is wrong."
  ],
  "doneRight": "the SO is in Diagnose with the right customer, unit, complaint and tech, and there is only one SO for the job.",
  "wrong": [
    "Wrong customer or unit: open the SO's **Edit** tab, change the **Customer** or **Unit** drop-down, then Save and confirm.",
    "Created in error: if nothing is invoiced or paid and no parts are received, leave a note for your Service Manager on the SO indicating why you need them to delete it. A deleted SO can be restored for 30 days.",
    "!!Never edit the automatic Estimate number; it resets SO numbering.!!"
  ],
  "items": [
    {
      "type": "step",
      "text": "Click the **+** icon and choose **Service Order**."
    },
    {
      "type": "step",
      "text": "Pick the **Customer** from the drop-down. Search first so you don't create a duplicate. If they are new, choose **New Customer** and fill in the required fields."
    },
    {
      "type": "step",
      "text": "Pick the **Unit**. For a new unit, enter the VIN and click **Decode**. Check the Year, Make and Model it fills in, because the decoder is not always right."
    },
    {
      "type": "step",
      "text": "Type each **Complaint** in the customer's words, one per Action Item."
    },
    {
      "type": "step",
      "text": "Set the **Technician** (the lead tech)."
    },
    {
      "type": "step",
      "text": "Click **Create & Capture Signature**. The SO moves to **Diagnose**."
    },
    {
      "type": "step",
      "text": "To convert a service request: open the **Service Requests** list."
    },
    {
      "type": "step",
      "text": "Open the request and check the customer, unit and complaint."
    },
    {
      "type": "step",
      "text": "Click **Create Service Order**."
    },
    {
      "type": "step",
      "text": "Call the customer if anything is not clear with the request"
    },
    {
      "type": "quiz",
      "q": "The customer may already be in Fullbay. What do you do before choosing New Customer?",
      "options": [
        "Choose New Customer right away",
        "Search first so you don't create a duplicate",
        "Ask the tech",
        "Ask Parts"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "You entered a VIN and clicked Decode. What do you check?",
      "options": [
        "The Year, Make and Model it fills in",
        "Nothing, the decoder is always right",
        "The customer's balance",
        "The labor rate"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "How do you enter the customer's complaints?",
      "options": [
        "All on one Action Item",
        "In the tech's words",
        "Leave them for the tech",
        "In the customer's words, one per Action Item"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "You created an SO in error. Nothing is invoiced or paid, and no parts are received. What do you do?",
      "options": [
        "Delete it yourself",
        "Leave a note for your Service Manager on the SO indicating why you need them to delete it",
        "Edit the Estimate number",
        "Leave it open"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What should you never edit?",
      "options": [
        "The Complaint",
        "The Technician",
        "The automatic Estimate number",
        "The Unit"
      ],
      "answer": 2
    },
    {
      "type": "signoff",
      "text": "creates 5 SOs and converts 3 Service requests cleanly."
    }
  ]
},
{
  "id": "sa6",
  "title": "Check PM and pending work",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 6",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 1,
  "why": "the customer is already bringing the truck in. A due PM or a repair they declined last time is work you can offer today instead of a second visit.",
  "before": [
    "the SO is created (Module 5) and you know which unit it is for."
  ],
  "doneRight": "every SO shows the unit's due PMs and pending repairs were offered, and what the customer said is on the SO.",
  "wrong": [
    "The unit shows no PMs at all: tracking may be off (Module 15).",
    "Parts on a Pending Repair are only copies and were never ordered. They still need to be quoted and ordered once the repair goes onto an SO."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the unit's record from the SO, or click **Customers** and open the unit."
    },
    {
      "type": "step",
      "text": "Click the **Components & PMs** tab. Look for any PM that is due or past due."
    },
    {
      "type": "step",
      "text": "Click the **Active Services** tab. Look for other open work on this unit so you don't double-book it."
    },
    {
      "type": "step",
      "text": "Click **Service**, then the **Pending Repairs** tab, and find this customer's unit. These are repairs the customer declined or put off."
    },
    {
      "type": "step",
      "text": "Tell the customer what is due and what is pending, and ask what they want done today."
    },
    {
      "type": "step",
      "text": "Add what they agree to onto the SO: choose **Add Action Item** and **Select Service**."
    },
    {
      "type": "step",
      "text": "If a PM is due, you can also create the SO from the **PMs** tab, which puts the due PMs on one SO for the unit."
    },
    {
      "type": "quiz",
      "q": "Which tab shows PMs that are due or past due?",
      "options": [
        "Active Services",
        "Components & PMs",
        "Pending Repairs",
        "Estimate"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Why do you check the Active Services tab?",
      "options": [
        "To find other open work so you don't double-book the unit",
        "To set the labor rate",
        "To order parts",
        "To clock in"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Where do you find repairs the customer declined or put off?",
      "options": [
        "Tech Home",
        "The Messages tab",
        "Global Search",
        "Service, then the Pending Repairs tab"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "What is true about parts on a Pending Repair?",
      "options": [
        "They are already ordered",
        "They are already received",
        "They are only copies and still need to be quoted and ordered",
        "The advisor prices them"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "The unit shows no PMs at all. What may be the reason?",
      "options": [
        "The customer declined",
        "Tracking may be off",
        "The tech hasn't diagnosed",
        "The PO is missing"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "finds and adds a due PM on a live unit."
    }
  ]
},
{
  "id": "sa7",
  "title": "Hours and estimate",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 7",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 5,
  "why": "the hours you set are what the customer is billed. Too low and the shop eats the difference; too high and the customer says no.",
  "before": [
    "the tech has diagnosed the job. Parts prices come from Parts, so don't price parts yourself."
  ],
  "doneRight": "every Action Item has hours, every part is priced, and the Estimate tab total meets the shop's margin targets. This is the number that you would be willing to say out loud to the customer.",
  "wrong": [
    "The total looks wrong: check the tax location and labor rate set for the customer, unit or shop. A manual tax change is erased if the tax location changes.",
    "The tech's real hours keep coming in over your estimate: tell your Service Manager so the estimates can be coached."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the SO and check the tech has marked it **Diagnosed**. If not, wait; don't estimate from the complaint alone."
    },
    {
      "type": "step",
      "text": "Read the tech's diagnosis on each Action Item."
    },
    {
      "type": "step",
      "text": "Enter the **Invoiced Hours** on each Action Item. This is what the customer is billed."
    },
    {
      "type": "step",
      "text": "If your shop uses it, enter **Expected Hours** too. It is  a forecast of how long you expect the tech will take and does not change the bill."
    },
    {
      "type": "step",
      "text": "If you have a labor guide connected (MOTOR or Mitchell1), you can use it to check the hours."
    },
    {
      "type": "step",
      "text": "Look at each part on the SO and confirm it has a price from Parts. If one is still unpriced, tell Parts. It is not yours to fill in."
    },
    {
      "type": "step",
      "text": "Open the **Estimate** tab and check the labor, parts, shop supplies and tax totals."
    },
    {
      "type": "step",
      "text": "Before you call the customer, click the **$** icon to check the estimate meets the margin targets set at the shop level."
    },
    {
      "type": "quiz",
      "q": "When can you build the estimate?",
      "options": [
        "From the complaint alone",
        "After the tech has marked it Diagnosed",
        "After invoicing",
        "Before the SO is created"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Which hours is the customer billed for?",
      "options": [
        "Invoiced Hours",
        "Expected Hours",
        "SO Hours",
        "Clocked hours"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "What are Expected Hours?",
      "options": [
        "What the customer is billed",
        "The tech's pay",
        "A forecast of how long the tech will take; it does not change the bill",
        "A discount"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "A part on the SO has no price yet. What do you do?",
      "options": [
        "Price it yourself",
        "Remove the part",
        "Send the estimate anyway",
        "Tell Parts; it is not yours to fill in"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "What must the Estimate tab total meet?",
      "options": [
        "The customer's last invoice",
        "The shop's margin targets",
        "The tech's clocked hours",
        "The PO amount"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "builds 5 estimates within a minimal variance of final hours."
    }
  ]
},
{
  "id": "sa8",
  "title": "Dispatch and schedule",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 8",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "entry": {
    "title": "Week of scheduled work",
    "help": "Enter the start and end date of the calendar week you scheduled, for example 10/12 to 10/16. Your Service Manager uses it to check the calendar.",
    "rows": 1,
    "fields": [
      {
        "label": "Week start",
        "type": "date"
      },
      {
        "label": "Week end",
        "type": "date"
      }
    ]
  },
  "why": "a job with no tech and no time slot is a job that doesn't get done. The Service Manager has the final say on capacity; you build the day.",
  "before": [
    "the SO is created (Module 5)."
  ],
  "doneRight": "the day's jobs are all assigned, on the calendar, and fit each tech's hours.",
  "wrong": [
    "A job is on the wrong tech: drag it to the right tech's slot, or edit the event and change the tech.",
    "A job moved without updating the customer: send an update via text or phone call (Module 14)."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the **Schedule** page and filter by your shop. Keep it to fewer than 20 people and about a week out."
    },
    {
      "type": "step",
      "text": "In the left column, find the job under **Unscheduled Work** or **Unassigned Work**."
    },
    {
      "type": "step",
      "text": "Open the SO and set the **Lead Tech** with the **Person** icon. Assign each Action Item to a tech."
    },
    {
      "type": "step",
      "text": "Add the job to the calendar: drag it to the tech's day and start time, or click a slot and choose **Add SO Event**. Type the start and end time in; don't rely on autofill."
    },
    {
      "type": "step",
      "text": "If your shop uses urgency levels, set one with the SO's **Schedule** icon."
    },
    {
      "type": "step",
      "text": "Check the tech's day: the event should fit inside their working hours. If it doesn't, have your Service Manager check that the Follow **Employee Schedule** setting is on."
    },
    {
      "type": "step",
      "text": "If two jobs fight for the same tech or time, don't decide it yourself. Take it to your Service Manager or ask the customer to prioritize which job they would like completed first."
    },
    {
      "type": "step",
      "text": "Confirm the parts for the job are ordered or in stock before the tech's start time."
    },
    {
      "type": "step",
      "text": "Notify the tech if the parts need to be picked up at the shop or if you will have a parts runner deliver the parts by leaving a note on the SO."
    },
    {
      "type": "quiz",
      "q": "How do you set up the Schedule page?",
      "options": [
        "Show every shop",
        "Filter by your shop, fewer than 20 people, about a week out",
        "A month out",
        "Today only"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Where do you find jobs that aren't on the calendar yet?",
      "options": [
        "Pending Repairs",
        "The Messages tab",
        "Unscheduled Work or Unassigned Work in the left column",
        "Global Search"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "How do you set the start and end time?",
      "options": [
        "Type them in; don't rely on autofill",
        "Let autofill set them",
        "Leave them blank",
        "Ask the tech"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Two jobs fight for the same tech or time. What do you do?",
      "options": [
        "Decide it yourself",
        "Give it to the newest job",
        "Cancel one",
        "Take it to your Service Manager or ask the customer to prioritize"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "How do you tell the tech the parts need to be picked up at the shop?",
      "options": [
        "Text the customer",
        "Leave a note on the SO",
        "Change the estimate",
        "Call Parts"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "builds a week's dispatch and gets Service Manager sign-off."
    }
  ]
},
{
  "id": "sa9",
  "title": "Manage the All SOs tab",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 9",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 7,
  "soCount": 5,
  "why": "the **All SOs** tab on the **Service** page is where you will spend most of your day. It shows every Service Order in one place, so you can see what is moving and spot anything that may slow work down.",
  "before": [
    "your role has the **Service** permission, which lets you see the Service page."
  ],
  "doneRight": "you open the All SOs tab with your saved filters and can say which of your jobs are moving and which are held up.",
  "wrong": [
    "The list is too long to work: set the filters and click **Save Filters**.",
    "An SO was deleted by mistake: it stays on the **Deleted SOs** tab for 30 days, so ask your Service Manager about restoring it."
  ],
  "sources": [
    {
      "title": "Service Page | Alerts and Tabs",
      "url": "https://help.fullbay.com/en/articles/12062056-service-page-alerts-and-tabs"
    }
  ],
  "items": [
    {
      "type": "step",
      "text": "Click **Service**, then open the **All SOs** tab."
    },
    {
      "type": "step",
      "text": "Use the filters to narrow the list to the date range or details you want to review."
    },
    {
      "type": "step",
      "text": "Click **Save Filters** so this view is ready the next time you open the tab."
    },
    {
      "type": "step",
      "text": "Check the **Completed** column. It shows the date the last part on the SO was received, so you know when all the parts for a job are in."
    },
    {
      "type": "step",
      "text": "Click **Download** when you need the list outside Fullbay."
    },
    {
      "type": "step",
      "text": "Use the All SOs tab to leave customer notes, view SO’s in needs authorization, notify customers of completed repairs etc."
    },
    {
      "type": "step",
      "text": "No SO should have a 0 in the # SO notes column at the end of each day if you are communicating with your customer regularly"
    },
    {
      "type": "quiz",
      "q": "What does the All SOs tab show?",
      "options": [
        "Only your own SOs",
        "Every Service Order in one place",
        "Only deleted SOs",
        "Only invoices"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "How do you keep your filtered view for next time?",
      "options": [
        "Click Download",
        "Refresh the page",
        "Click Save Filters",
        "Ask Spike"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What does the Completed column show?",
      "options": [
        "The date the last part on the SO was received",
        "The invoice date",
        "The date the tech clocked out",
        "The date the customer paid"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "At the end of each day, what should the # SO notes column show?",
      "options": [
        "A 0 on every SO",
        "Only invoiced SOs have notes",
        "It doesn't matter",
        "No SO should have a 0"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "An SO was deleted by mistake. Where can it be found?",
      "options": [
        "On the Deleted SOs tab, for 30 days",
        "On the All SOs tab",
        "In Pending Repairs",
        "Nowhere; it's gone"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "You show your Service Manager your saved All SOs view and explain the status of 5 open SOs."
    }
  ]
},
{
  "id": "sa10",
  "title": "Customer authorization",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 10",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 5,
  "why": "no approval means no parts are ordered and no work starts. Work done without approval is work the customer can refuse to pay for.",
  "before": [
    "hours are set (Module 7) and every part on the SO has been priced by Parts."
  ],
  "doneRight": "every line being worked is authorized, and you can show who approved it and how.",
  "wrong": [
    "The price goes up after approval: Fullbay flags the line **Needs Authorization** when a change goes over the authorized amount. Get the new approval before the work continues.",
    "**Blanket Authorization** approves the whole SO and pulls parts straight away. Use it only when the customer has agreed to a total up front.",
    "Don't use **Pre-Authorize All Parts** to get around waiting for the customer."
  ],
  "items": [
    {
      "type": "step",
      "text": "Click **Service**, and find the SO in the **Authorize** section. SOs that are fully quoted land there."
    },
    {
      "type": "step",
      "text": "Open the SO and go over the **Estimate** tab with the customer."
    },
    {
      "type": "step",
      "text": "Pick how the customer approves: **Request Authorization** sends the customer a portal link, and they approve or decline each line. **Authorize for Customer** records an approval you got by phone or in person. Write down who approved and when. **Authorize Internally** is for approval by someone inside your own company."
    },
    {
      "type": "step",
      "text": "Check the SO afterwards: the lines the customer approved show as authorized, and parts on them are now free to order."
    },
    {
      "type": "step",
      "text": "Any line the customer declined should be  moved to **Pending Repairs**, so you can offer it again on the next visit."
    },
    {
      "type": "step",
      "text": "For **Authorize for Customer**, pick the person who approved in the **Contact** field on the **Estimate** tab before you click **Authorize for Customer**. Their name appears on the authorization. If the customer gives you an authorization amount, type it in the **Customer Threshold** field under **Authorize Internally** on the Estimate tab."
    },
    {
      "type": "quiz",
      "q": "Where do fully quoted SOs land?",
      "options": [
        "The Authorize section under Service",
        "Tech Home",
        "Pending Repairs",
        "The Schedule"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "The customer approved by phone. Which option do you use?",
      "options": [
        "Request Authorization",
        "Authorize Internally",
        "Blanket Authorization",
        "Authorize for Customer"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "Before you click Authorize for Customer, what do you pick in the Contact field?",
      "options": [
        "Your own name",
        "The tech",
        "The person who approved",
        "The Service Manager"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "The customer declines a line. What do you do?",
      "options": [
        "Delete it",
        "Do the work anyway",
        "Move it to Pending Repairs",
        "Use Pre-Authorize All Parts"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "A line is flagged Needs Authorization after the price went up. What do you do?",
      "options": [
        "Get the new approval before the work continues",
        "Keep working",
        "Use Blanket Authorization",
        "Lower the hours"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "gets and records 5 authorizations."
    }
  ]
},
{
  "id": "sa11",
  "title": "Get the PO",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 11",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "entry": {
    "title": "Customers checked",
    "help": "Check 3 customers. For each one, enter the customer name and whether the customer requires a PO.",
    "rows": 3,
    "fields": [
      {
        "label": "Customer name",
        "type": "text"
      },
      {
        "label": "PO required",
        "type": "select",
        "options": [
          "Yes",
          "No"
        ]
      }
    ]
  },
  "why": "some customers will only pay for work that has their purchase order number on it. Getting it before work starts avoids an invoice that sits unpaid.",
  "before": [
    "know which of your customers require a PO.  To verify, look in the **Preventive Maintenance & Repair** section of the customer details."
  ],
  "doneRight": "no repair work starts on an SO for a PO-required customer without a PO number on it",
  "wrong": [
    "The customer gives you the PO after the invoice is created: tell your Service Manager so it can be corrected before the invoice is sent.",
    "A customer requires a PO on every job but the record doesn't say so: ask your Service Manager to update the customer record."
  ],
  "items": [
    {
      "type": "step",
      "text": "When you open the SO, check whether the customer requires a PO."
    },
    {
      "type": "step",
      "text": "If they do, ask for the PO number when you send the estimate for authorization (Module 10)."
    },
    {
      "type": "step",
      "text": "Type the PO number on the SO within the Estimate tab and hit Save."
    },
    {
      "type": "step",
      "text": "Check the PO number is on the SO before you notify the tech to begin the work (Module 8) when the PO Required to create service order and quick service order is set to **Yes** in the customer profile."
    },
    {
      "type": "step",
      "text": "If the customer says the PO is coming later, log a note on the SO, and confirm with your Service Manager that you are good to have the tech begin the job."
    },
    {
      "type": "step",
      "text": "If the Service Manager instructs you to wait for the PO, move the SO to **On Hold** via the calendar icon within the SO."
    },
    {
      "type": "step",
      "text": "If the PO approval amount is less than the estimate, go back to the customer for a new approval before you have the tech begin."
    },
    {
      "type": "quiz",
      "q": "Where do you check whether a customer requires a PO?",
      "options": [
        "The Estimate tab",
        "The Preventive Maintenance & Repair section of the customer details",
        "Tech Home",
        "The Schedule"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "When do you ask for the PO number?",
      "options": [
        "When you send the estimate for authorization",
        "After invoicing",
        "When the tech finishes",
        "Only if the customer offers"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Where do you type the PO number?",
      "options": [
        "In a note",
        "In the Complaint",
        "On the unit record",
        "On the SO within the Estimate tab, then Save"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "Your Service Manager says to wait for the PO. What do you do?",
      "options": [
        "Dispatch the job anyway",
        "Move the SO to On Hold via the calendar icon",
        "Delete the SO",
        "Invoice it"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "The PO amount is less than the estimate. What do you do?",
      "options": [
        "Lower the hours to match",
        "Start the work",
        "Go back to the customer for a new approval before the tech begins",
        "Ignore it"
      ],
      "answer": 2
    },
    {
      "type": "signoff",
      "text": "no repair work starts on a PO-required SO without a PO for 2 weeks"
    }
  ]
},
{
  "id": "sa12",
  "title": "Leave a note on an SO",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 12",
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
      "text": "You leave clear Action Item notes on 3 SOs that your Service Manager can act on without asking you."
    }
  ]
},
{
  "id": "sa13",
  "title": "FleetNet jobs",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 13",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 2,
  "why": "FleetNet sends dispatch requests with a short clock on them. Miss the window and FleetNet hands the job to another shop.",
  "before": [
    "the manager or owner must already have turned FleetNet on for your shop, set the **Default FleetNet Customer**, and set a **Default Unit Type**. If **Create Service Order** is greyed out, one of these is usually why."
  ],
  "doneRight": "every request is accepted or rejected inside 10 minutes, and every finished FleetNet job is sent to FleetNet after invoicing.",
  "wrong": [
    "**Create Service Order** is greyed out: the Dispatch Request hasn't arrived yet, or a setting above is missing.",
    "A job isn't in the **FleetNet Ready** filter: check the SO was created from the FleetNet request."
  ],
  "items": [
    {
      "type": "step",
      "text": "Watch for new FleetNet requests in your Fullbay alerts, phone calls or the Service Request section of the Service tab."
    },
    {
      "type": "step",
      "text": "Open the dispatch request and **Accept** it with an ETA, or **Reject** it. You have under 10 minutes before FleetNet issues a Kill on its own."
    },
    {
      "type": "step",
      "text": "Once the **Dispatch Request** has arrived, click **Create Service Order**. The button only works after the request is there."
    },
    {
      "type": "step",
      "text": "Dispatch the job the usual way (Module 8)."
    },
    {
      "type": "step",
      "text": "Do the job through the normal SO steps. Check FleetNet's authorization requirements for the job."
    },
    {
      "type": "step",
      "text": "After the SO is invoiced, filter the invoices by **FleetNet Ready** on the customer transactions tab."
    },
    {
      "type": "step",
      "text": "Select the invoices and choose **Batch Actions**, then **Send to FleetNet**."
    },
    {
      "type": "quiz",
      "q": "Where can you watch for new FleetNet requests?",
      "options": [
        "Your email inbox",
        "Your Fullbay alerts, phone calls or Service Request section of the service tab",
        "Spike",
        "Pending Repairs"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "How long do you have to accept or reject a FleetNet request?",
      "options": [
        "Under 10 minutes",
        "1 hour",
        "By end of day",
        "24 hours"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "When does the Create Service Order button work?",
      "options": [
        "Any time",
        "After invoicing",
        "Only after the Dispatch Request has arrived",
        "After the tech finishes"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "The SO is invoiced. How do you send it to FleetNet?",
      "options": [
        "Email the invoice",
        "Print it and mail it",
        "Call FleetNet",
        "Filter by FleetNet Ready, select the invoices, choose Batch Actions, then Send to FleetNet"
      ],
      "answer": 3
    },
    {
      "type": "quiz",
      "q": "A finished job isn't in the FleetNet Ready filter. What do you check?",
      "options": [
        "That the SO was created from the FleetNet request",
        "That the tech clocked out",
        "The labor rate",
        "The customer's PO"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "completes 2 FleetNet jobs end to end."
    }
  ]
},
{
  "id": "sa14",
  "title": "Customer comms",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 14",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "soCount": 1,
  "why": "a customer who hears from you before they have to call is a customer who stays calm. Most escalations start with silence.",
  "before": [
    "the customer's contact needs a cell number on file and the right **Notification Preferences** turned on. Two-way texting must be enabled for the shop."
  ],
  "doneRight": "no open SO goes a day without an update, and the customer's thread shows what you told them.",
  "wrong": [
    "A customer is angry or the issue is bigger than you can fix: hand it to your Service Manager.",
    "A customer says they got nothing: check the contact's cell number and **Notification Preferences**."
  ],
  "items": [
    {
      "type": "step",
      "text": "Start of day: open the **Text Messages Report** and reply to anything unread."
    },
    {
      "type": "step",
      "text": "For each open SO, open the customer's record and click the **Messages** tab to see what has already been sent."
    },
    {
      "type": "step",
      "text": "Send an update by clicking the **+** icon and choosing a text, or from the **Messages** tab. You can attach up to 5 images, such as a photo of a worn part."
    },
    {
      "type": "step",
      "text": "Send an authorization request through the customer portal when an estimate is ready (Module 10)."
    },
    {
      "type": "step",
      "text": "Update the customer whenever something changes: a part is delayed, the job moves to another day, the price changes, or the work is finished.  You can use the notes section and check the \"for customer\" box, you can use 2 way text messaging, you can call or email the customer."
    },
    {
      "type": "step",
      "text": "Say when the next update will come, and then make sure it does."
    },
    {
      "type": "step",
      "text": "End of day: check every open SO has a current status and a next update time as well as notes with this information."
    },
    {
      "type": "quiz",
      "q": "What do you open at the start of the day?",
      "options": [
        "The Schedule",
        "Pending Repairs",
        "The Text Messages Report",
        "Spike"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "How many images can you attach to a text update?",
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
      "q": "When do you update the customer?",
      "options": [
        "Only when the invoice is ready",
        "Only if they call",
        "Whenever something changes: a delayed part, a new day, a new price, or finished work",
        "Once a week"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What do you tell the customer with each update?",
      "options": [
        "When the next update will come",
        "The tech's hours",
        "Your schedule",
        "Nothing else"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "A customer says they got nothing. What do you check?",
      "options": [
        "The estimate total",
        "The contact's cell number and Notification Preferences",
        "The tech's notes",
        "The PO"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "end-of-day check shows no SO without an update."
    }
  ]
},
{
  "id": "sa15",
  "title": "Turn on Track PMs",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Module 15",
  "level": "Basic",
  "status": "Published",
  "version": 1,
  "days": 14,
  "entry": {
    "title": "Units checked",
    "help": "For each of the 10 units you checked, enter the unit number and pick what you found.",
    "rows": 10,
    "fields": [
      {
        "label": "Unit number",
        "type": "text"
      },
      {
        "label": "What you found",
        "type": "select",
        "options": [
          "N/A: Track PMs was already on",
          "Tracking was off: turned it on",
          "No PMs appeared: told my Service Manager",
          "Wrong Unit Type: told my Service Manager",
          "Last performed needs updated"
        ]
      }
    ]
  },
  "why": "a unit that isn't tracking PMs will never show as due. The shop loses the work and the customer loses the reminder.",
  "before": [
    "do this at intake, on every SO, when you check the unit (Module 6)."
  ],
  "doneRight": "the unit's Components & PMs tab shows its PMs with due dates, and the unit appears on the Fleet Report.",
  "wrong": [
    "You can't find the setting: check you opened the right component (Engine for hours, Chassis for mileage).",
    "The PM still doesn't show: the unit may be the wrong Unit Type, or the PM wasn't added to that type."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the unit's record from the SO, or click **Customers** and open the unit."
    },
    {
      "type": "step",
      "text": "Click the **Components & PMs** tab."
    },
    {
      "type": "step",
      "text": "Look at whether PMs are being tracked for this unit. If it already shows PMs with due dates, stop here."
    },
    {
      "type": "step",
      "text": "If tracking is off, open the **Engine** or **Chassis** component and set **Track PMs by** to mileage or engine hours, then save."
    },
    {
      "type": "step",
      "text": "Enter the unit's current mileage or hours so the first due date is worked out from today's reading."
    },
    {
      "type": "step",
      "text": "Look at the tab again. The PMs for this unit's type should now show with a due date."
    },
    {
      "type": "step",
      "text": "If no PMs appear, tell your Service Manager. The PM setup for that unit type may be missing."
    },
    {
      "type": "quiz",
      "q": "When do you check Track PMs?",
      "options": [
        "Once a year",
        "Only at invoicing",
        "At intake, on every SO, when you check the unit",
        "Only when the customer asks"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Which tab shows whether a unit is tracking PMs?",
      "options": [
        "Components & PMs",
        "Estimate",
        "Messages",
        "Active Services"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "You want to track PMs by engine hours. Which component do you open?",
      "options": [
        "Chassis",
        "Engine",
        "Brakes",
        "Tires"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "After you turn tracking on, what do you enter?",
      "options": [
        "The PO number",
        "The customer's phone",
        "The unit's current mileage or hours",
        "The labor rate"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "You turned tracking on, but no PMs appear. What do you do?",
      "options": [
        "Tell your Service Manager",
        "Add PMs yourself",
        "Turn tracking off",
        "Ignore it"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "a spot-check of 10 units shows Track PMs on for each."
    }
  ]
},
{
  "id": "sa16",
  "title": "Get help with Spike",
  "roles": [
    "Service Advisor"
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
    "Spike's answer doesn't match how your shop does it: ask your Service Manager. Your shop's process comes first."
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
      "text": "You use Spike to answer a question your Service Manager gives you, then show where that conversation is saved in **Messages**."
    }
  ]
}
);
