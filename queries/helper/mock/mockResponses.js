const mockResponses = {
	"responses": [
		{
			"questions": [
				{
					"id": "nameId",
					"name": "Sample question 1",
					"type": "ShortAnswer",
					"value": "Sample Name"
				},
				{
					"id": "birthdayId",
					"name": "Sample question 2?",
					"type": "DatePicker",
					"value": "2024-02-22T05:01:47.691Z"
				},
			],
			"submissionId": "abc",
			"submissionTime": "Sample Submission Time"
		},
	],
	"totalResponses": 1,
	"pageCount": 1
}

// const parsedMockResponses = JSON.parse(mockResponses)

module.exports = {mockResponses}