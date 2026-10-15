// Fleet Span University — Tech track. One object per module; see modules/README.md for the format.
FSU_MODULES.push(
{
  "id": "t1",
  "title": "Clock on and off jobs",
  "roles": [
    "Tech"
  ],
  "tier": "Module 1",
  "status": "Published",
  "version": 2,
  "days": 7,
  "why": "Your clocked time is how the shop knows what each job really took. Wrong clocks mean wrong efficiency and wrong pay conversations.",
  "before": [
    "You are logged into Fullbay",
    "You have clocked in and are on your **Tech Home**.",
    "The Service Order (SO) you are working on has been assigned to you."
  ],
  "doneRight": "At the end of the day every hour is on the right SO and job, or on a labeled activity.",
  "wrong": [
    "Clocked into the wrong job: clock out, clock into the right one, and leave a note on the SO for your Service Manager.",
    "If you forgot to clock in, leave a note with your start and end time for the day for your Service Manager to correct. You will also need to have a conversation regarding what jobs you worked on that day so allocate time to them correctly."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open **Tech Home**."
    },
    {
      "type": "step",
      "text": "Find the SO and the Action Item (the job) you are about to work on."
    },
    {
      "type": "step",
      "text": "Click the Action Item to clock into that job your red banner will turn green."
    },
    {
      "type": "step",
      "text": "To change what you are doing (for example from the job to a break or training), use the arrow next to the clock button and pick the activity."
    },
    {
      "type": "step",
      "text": "When you finish or repair, mark the job as complete before you leave the jobsite.."
    },
    {
      "type": "step",
      "text": "Samsara: **[Confirm with your Service Manager how clock-ins work with Samsara at this location]**"
    },
    {
      "type": "quiz",
      "q": "How do you clock into a job?",
      "options": [
        "Tell your Service Advisor",
        "Click the Action Item",
        "Write your start time in the SO notes",
        "Clock in at the front desk"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What happens when you clock into the job?",
      "options": [
        "Your red banner will turn green",
        "You get an email",
        "The SO moves to Review",
        "Parts gets notified"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "How do you change from the job to a break or training?",
      "options": [
        "Clock out for the day",
        "Use the arrow next to the clock button and pick the activity",
        "Leave the clock running on the job",
        "Ask Parts to change it"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "You clocked into the wrong job. What do you do?",
      "options": [
        "Leave it, the hours even out",
        "Clock out, clock into the right one, and leave a note on the SO for your Service Manager",
        "Delete the SO",
        "Tell the customer"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What does done right look like?",
      "options": [
        "At the end of the day every hour is on the right SO and job, or on a labeled activity",
        "You clocked in and out once",
        "Most of your hours are on jobs",
        "Your Service Advisor has your times"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "You clock onto the right SO and job for a full shift with no corrections from the Service Manager."
    }
  ]
},
{
  "id": "t2",
  "title": "Diagnose button on the SO",
  "roles": [
    "Tech"
  ],
  "tier": "Module 2",
  "status": "Published",
  "version": 2,
  "days": 14,
  "why": "Diagnose is where the job gets real. Until it is marked diagnosed, Parts cannot quote and the customer cannot approve.",
  "before": [
    "The SO is in the **Diagnose** stage (the Service Advisor has created it and captured the customer signature).",
    "You are clocked onto the job (Module 1)."
  ],
  "doneRight": "The Action Item shows diagnosed, the findings are clear enough that someone who was not there understands them, and parts are listed.",
  "wrong": [
    "You cannot find the button: the SO may not be past the signature step. Ask your Service Advisor.",
    "You need to change the diagnosis after marking it: tell ask your Service Advisor to change it."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the SO from **Tech Home**."
    },
    {
      "type": "step",
      "text": "Open the Action Item you are diagnosing."
    },
    {
      "type": "step",
      "text": "Write what you found in the **Cause** field. Say what is wrong in clear words and use AI to clean up your story."
    },
    {
      "type": "step",
      "text": "Add the parts you need (see Module 4). Do not enter prices."
    },
    {
      "type": "step",
      "text": "If the screen asks for usage (mileage or hours), enter it."
    },
    {
      "type": "step",
      "text": "Click **Diagnosed** on the Action Item. This sends any Special Order parts to Parts for a quote."
    },
    {
      "type": "step",
      "text": "Move to your next action item and repeat the above steps until all repairs have been diagnosed."
    },
    {
      "type": "quiz",
      "q": "What stage must the SO be in before you diagnose?",
      "options": [
        "Review",
        "Diagnose",
        "Invoiced",
        "Closed"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Where do you write what you found?",
      "options": [
        "In the Cause field",
        "In a text to the Service Advisor",
        "On a sticky note",
        "In the customer notes"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "When you add the parts you need, what do you leave out?",
      "options": [
        "The part description",
        "The quantity",
        "Prices",
        "Nothing"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "What happens when you click Diagnosed on the Action Item?",
      "options": [
        "The SO is invoiced",
        "It sends any Special Order parts to Parts for a quote",
        "You are clocked out",
        "The customer is charged"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "You cannot find the button. What is the likely reason?",
      "options": [
        "Your login is broken",
        "The SO may not be past the signature step",
        "Parts has not quoted yet",
        "The job is already complete"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You complete Diagnose on 5 SOs with no corrections."
    }
  ]
},
{
  "id": "t3",
  "title": "Inspection on every SO",
  "roles": [
    "Tech"
  ],
  "tier": "Module 3",
  "status": "Published",
  "version": 2,
  "days": 14,
  "why": "The inspection finds the extra work the customer did not ask about. It is how the shop catches problems early and adds honest revenue. This is critical in preventing failures and building trust with your customer.",
  "before": [
    "The SO has an inspection added automatically. It appears on SOs with a complaint that is not yet diagnosed."
  ],
  "doneRight": "Every line has a result, and every defect has its own Action Item that Parts and the Service Advisor can see.",
  "wrong": [
    "The inspection is missing: tell your Service Advisor right away.",
    "Do not skip lines to save time. A skipped line means missed work."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the SO and find the inspection line."
    },
    {
      "type": "step",
      "text": "Work down the procedure list one line at a time."
    },
    {
      "type": "step",
      "text": "For each line, mark the result honestly."
    },
    {
      "type": "step",
      "text": "If something is bad, mark it **Defective**. Fullbay creates a new Action Item for it automatically."
    },
    {
      "type": "step",
      "text": "Add notes or photos if the screen allows."
    },
    {
      "type": "step",
      "text": "Finish every line before you complete the inspection."
    },
    {
      "type": "quiz",
      "q": "Which SOs have an inspection added automatically?",
      "options": [
        "Only PM SOs",
        "SOs with a complaint that is not yet diagnosed",
        "Only when the customer asks",
        "Only new customers"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "How do you work the procedure list?",
      "options": [
        "Skip to the lines that matter",
        "One line at a time",
        "Mark everything at once",
        "Only the first page"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Something is bad. What do you mark it?",
      "options": [
        "Defective",
        "Passed",
        "Skipped",
        "Diagnosed"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "What does Fullbay do when you mark a line Defective?",
      "options": [
        "Invoices the customer",
        "Creates a new Action Item for it automatically",
        "Clocks you out",
        "Closes the SO"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "The inspection is missing. What do you do?",
      "options": [
        "Skip it",
        "Tell your Service Advisor right away",
        "Make up your own checklist",
        "Wait for the next visit"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You complete the inspection on 10 SOs."
    }
  ]
},
{
  "id": "t4",
  "title": "Request parts on the SO",
  "roles": [
    "Tech"
  ],
  "tier": "Module 4",
  "status": "Published",
  "version": 2,
  "days": 14,
  "why": "When you ask for parts on the SO, Parts can quote, order and receive without chasing you. Calls and sticky notes get lost.",
  "before": [
    "You know the job, the unit and the part you need."
  ],
  "doneRight": "Every part you need is on the right Action Item with the right quantity, and you never had to walk/call the parts counter to explain it.",
  "wrong": [
    "Wrong part added: tell Parts before they order it.",
    "Do not quote, order or receive parts yourself, even if your login allows it. Parts own that step."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the Action Item that needs the part."
    },
    {
      "type": "step",
      "text": "Scroll to the **Parts for Service** section of the Action Item"
    },
    {
      "type": "step",
      "text": "Enter a description of the part that you need"
    },
    {
      "type": "step",
      "text": "If you have the part on your truck, select the part from the Inventory dropdown menu"
    },
    {
      "type": "step",
      "text": "Enter the number of parts that you need for this repair (QTY)"
    },
    {
      "type": "step",
      "text": "Click **Add Part**."
    },
    {
      "type": "step",
      "text": "Leave prices alone. Parts own the quote, order and receiving."
    },
    {
      "type": "step",
      "text": "Mark the Action Item **Diagnosed** so Parts get notified (Module 2)."
    },
    {
      "type": "quiz",
      "q": "Where on the Action Item do you request a part?",
      "options": [
        "The Parts for Service section",
        "The Cause field",
        "The SO notes",
        "The inspection"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "You have the part on your truck. What do you do?",
      "options": [
        "Use it and say nothing",
        "Select the part from the Inventory dropdown menu",
        "Call the parts counter",
        "Ask the Service Advisor"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What do you do with prices?",
      "options": [
        "Enter your best guess",
        "Leave prices alone",
        "Copy last month's price",
        "Enter zero"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "Who owns the quote, order and receiving?",
      "options": [
        "The tech",
        "The Service Advisor",
        "Parts",
        "The customer"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Wrong part added. What do you do?",
      "options": [
        "Delete the SO",
        "Tell Parts before they order it",
        "Order the right one yourself",
        "Nothing"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You request parts on 5 SOs, and Parts quotes and orders them without the Service Advisor stepping in."
    }
  ]
},
{
  "id": "t5",
  "title": "Complete button on the SO",
  "roles": [
    "Tech"
  ],
  "tier": "Module 5",
  "status": "Published",
  "version": 2,
  "days": 14,
  "why": "Completing the job is what lets the SO move to invoicing. A job that is finished in the bay but not in Fullbay is revenue that has not been billed.",
  "before": [
    "The work is done and the parts are on the job.",
    "Special Order parts have been priced, ordered and received. You cannot finish until they are."
  ],
  "doneRight": "The cause and correction are written so the customer can understand them, and the SO is no longer waiting on you.",
  "wrong": [
    "You cannot finish: a part may still be waiting on Parts. Ask Parts, not the Service Advisor.",
    "The SO comes back from review: fix what the Service Manager notes and complete it again."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the Action Item."
    },
    {
      "type": "step",
      "text": "Write the complaint, the cause and the correction in plain words and use AI to clean up your story."
    },
    {
      "type": "step",
      "text": "Check that the parts and actual hours on the job match what you did and how long it took you."
    },
    {
      "type": "step",
      "text": "Click **Mark Action Item # as Corrected**."
    },
    {
      "type": "step",
      "text": "The SO moves to Review where your Service Manager takes it from here."
    },
    {
        "type": "quiz",
        "q": "What must be true before you can finish?",
        "options": [
          "Special Order parts have been priced, ordered and received",
          "The customer has paid",
          "The SO is invoiced",
          "Your shift is over"
        ],
        "answer": 0
      },
    {
      "type": "quiz",
      "q": "What do you write on the Action Item?",
      "options": [
        "Only the part numbers",
        "The complaint, the cause and the correction in plain words",
        "Your clock times",
        "Nothing"
      ],
      "answer": 1
    },
    {
        "type": "quiz",
        "q": "Which button do you click?",
        "options": [
          "Diagnosed",
          "Add Part",
          "Mark Action Item # as Corrected",
          "Defective"
        ],
        "answer": 2
      },
    {
      "type": "quiz",
      "q": "Where does the SO move after you complete it?",
      "options": [
        "Straight to the customer",
        "Review",
        "Back to Diagnose",
        "Parts"
      ],
      "answer": 1
    },
    {
        "type": "quiz",
        "q": "You cannot finish because a part may still be waiting on Parts. Who do you ask?",
        "options": [
          "The Service Advisor",
          "The customer",
          "Nobody",
          "Parts"
        ],
        "answer": 3
      },
    {
      "type": "signoff",
      "text": "You complete 10 SOs, and the SO review passes with none sent back."
    }
  ]
},
{
  "id": "t6",
  "title": "PM services on the SO",
  "roles": [
    "Tech"
  ],
  "tier": "Module 6",
  "status": "Published",
  "version": 2,
  "days": 14,
  "why": "PMs keep the customer's trucks running and keep them coming back. A PM that is done but not recorded is a PM the customer is told is overdue.",
  "before": [
    "A PM SO exists for the unit (created from the PM schedule).",
    "You are clocked onto the job."
  ],
  "doneRight": "The unit's PM shows done, with the right usage and date.",
  "wrong": [
    "The unit still shows overdue: tell the Service Manager. Do not redo the service."
  ],
  "items": [
    {
      "type": "step",
      "text": "Open the PM SO from **Tech Home**."
    },
    {
      "type": "step",
      "text": "Work each procedure line on the PM service in order."
    },
    {
      "type": "step",
      "text": "Enter the current usage (mileage or hours)."
    },
    {
      "type": "step",
      "text": "Mark defects the same way as in the inspection (Module 3)."
    },
    {
      "type": "step",
      "text": "Complete the job (Module 5)."
    },
    {
      "type": "step",
      "text": "Open the unit and look at its **Components & PMs** tab. The service should show as done."
    },
    {
      "type": "quiz",
      "q": "Where does the PM SO come from?",
      "options": [
        "The tech creates it",
        "The PM schedule",
        "The customer calls in",
        "Parts"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "How do you work the procedure lines on the PM service?",
      "options": [
        "In any order",
        "In order",
        "Only the important ones",
        "Skip to completing it"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What usage do you enter?",
      "options": [
        "The current usage (mileage or hours)",
        "Last visit's usage",
        "The customer's estimate",
        "None"
      ],
      "answer": 0
    },
    {
      "type": "quiz",
      "q": "Where do you check that the service shows as done?",
      "options": [
        "The invoice",
        "The unit's Components & PMs tab",
        "Tech Home",
        "The inspection"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "The unit still shows overdue. What do you do?",
      "options": [
        "Redo the service",
        "Tell the Service Manager. Do not redo the service.",
        "Ignore it",
        "Delete the PM"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "You complete a PM service and the unit shows it done."
    }
  ]
}
);
