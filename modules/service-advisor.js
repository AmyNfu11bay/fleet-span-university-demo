// Fleet Span University — Service Advisor track. Sample module for the demo only, not yet from an approved guide. One object per module; see modules/README.md for the format.
FSU_MODULES.push(
{
  "id": "m3",
  "title": "Build and send an estimate",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Basic",
  "status": "Published",
  "sample": true,
  "version": 1,
  "days": 14,
  "items": [
    {
      "type": "step",
      "text": "Open the service order and review the tech's diagnosis."
    },
    {
      "type": "step",
      "text": "Confirm Parts has priced every part line."
    },
    {
      "type": "step",
      "text": "Add labor using the shop's labor rate."
    },
    {
      "type": "step",
      "text": "Send the estimate to the customer and record their authorization or PO."
    },
    {
      "type": "quiz",
      "q": "Who prices parts on an estimate?",
      "options": [
        "The Service Advisor",
        "Parts",
        "The tech",
        "The Service Manager"
      ],
      "answer": 1
    },
    {
      "type": "quiz",
      "q": "What do you record when the customer approves?",
      "options": [
        "Nothing",
        "Their authorization, and a PO if they use one",
        "Only the date",
        "The tech name"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "Build and send a live estimate with authorization recorded."
    }
  ]
},
{
  "id": "m6",
  "title": "Close out and invoice a service order",
  "roles": [
    "Service Advisor"
  ],
  "tier": "Advanced",
  "status": "Draft",
  "version": 1,
  "days": 14,
  "items": [
    {
      "type": "step",
      "text": "Confirm every line is marked Complete."
    },
    {
      "type": "step",
      "text": "Review labor and parts against the estimate."
    }
  ]
}
);
