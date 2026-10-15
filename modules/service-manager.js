// Fleet Span University — Service Manager track. Sample module for the demo only, not yet from an approved guide. One object per module; see modules/README.md for the format.
FSU_MODULES.push(
{
  "id": "m5",
  "title": "Turn on PM tracking for a unit",
  "roles": [
    "Service Manager"
  ],
  "tier": "Basic",
  "status": "Published",
  "sample": true,
  "version": 1,
  "days": 21,
  "items": [
    {
      "type": "step",
      "text": "Find units with no PM tracking."
    },
    {
      "type": "step",
      "text": "Turn on PM tracking and set the schedule."
    },
    {
      "type": "step",
      "text": "Confirm the schedule matches the customer agreement."
    },
    {
      "type": "quiz",
      "q": "Who owns PM schedules?",
      "options": [
        "The tech",
        "Parts",
        "The Service Manager",
        "The Service Advisor"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "Where do PM schedules come from for contract customers?",
      "options": [
        "The partner agreement set up by sales",
        "The tech decides",
        "The customer calls in",
        "They are random"
      ],
      "answer": 0
    },
    {
      "type": "signoff",
      "text": "Turn on PM tracking for three live units."
    }
  ]
}
);
