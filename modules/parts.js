// Fleet Span University — Parts track. Sample module for the demo only, not yet from an approved guide. One object per module; see modules/README.md for the format.
FSU_MODULES.push(
{
  "id": "m4",
  "title": "Quote, order and receive parts",
  "roles": [
    "Parts"
  ],
  "tier": "Basic",
  "status": "Published",
  "sample": true,
  "version": 1,
  "days": 14,
  "items": [
    {
      "type": "step",
      "text": "Open the parts request on the service order."
    },
    {
      "type": "step",
      "text": "Quote the part and price it."
    },
    {
      "type": "step",
      "text": "Order the part from the vendor."
    },
    {
      "type": "step",
      "text": "Receive the part and match it to the vendor bill."
    },
    {
      "type": "quiz",
      "q": "Who owns quote, order and receive on service order parts?",
      "options": [
        "The Service Advisor",
        "The tech",
        "Parts",
        "The Service Manager"
      ],
      "answer": 2
    },
    {
      "type": "quiz",
      "q": "A part arrives. What happens next?",
      "options": [
        "Hand it to the tech",
        "Receive it and match the vendor bill",
        "Leave it on the shelf",
        "Email the customer"
      ],
      "answer": 1
    },
    {
      "type": "signoff",
      "text": "Quote, order and receive one live part request."
    }
  ]
}
);
