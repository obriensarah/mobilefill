const data = {
	data: [
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Click the button below to indicate...",
				info: "Here is some more info"
			},
			inputs:[{
				component: {
					compName: "ButtonInput",
					compProps: {},
					compChildren: "I agree. Take me to the form."
				}
			}]
		},
		{
			question:{
				label: "Name",
				question: "Enter your name below.",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Jane Doe"
					},
					compChildren: {}
				}
			}]
		},
		{
			question:{
				label: "County of Residence",
				question: "Select the Illinois county in which you are a resident.",
				info: null
			},
			inputs:[{
				component: {
					compName: "DropdownInput",
					compProps: {
						buttonText:"i'm a dropdown!",
						options: [
							"action1",
							"action2"
						]
					},
					compChildren: {}
				}
			}]
		},
		{
			question:{
				label: "County of Residence",
				question: "Select the Illinois county in which you are a resident.",
				info: null
			},
			inputs:[
				{component: {
					compName: "DropdownInput",
					compProps: {
						buttonText:"i'm a dropdown!",
						options: [
							"action1"
						]
					},
					compChildren: {}
				}},
				{component: {
					compName: "ButtonInput",
					compProps: {
					},
					compChildren: "I'm a button!"
				}},
			]
		},
		{
			question:{
				label: "Abuser Relationship",
				question: "How is the abuser related to you or the person you want protected?",
				info: "Check all that apply."
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Spouse",
							"Ex or former spouse",
							"Current or former partner",
							"Child",
							"Parent",
							"Sibling",
							"Stepchild",
							"Stepsibling",
							"Stepparent",
							"Grandchild",
							"Grandparent",
							"In-law",
							"Other family member",
							"We have a child in common (never married)",
							"We share a living space",
							"This is another option"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Order Type",
				question: "What kind of Order of Protection are you requesting?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"An Emergency Order of Protection (up to 21 days) because advance written notice would cause more abuse.",
							"A Plenary Order of Protection that requires the abuser to get notice and a copy of your Petition before the court hearing."
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Order Type",
				question: "What kind of Order of Protection are you requesting?",
				info: null
			},
			inputs:[
				{component: {
					compName: "LongTextInput",
					compProps: {
						options: [
							"An Emergency Order of Protection (up to 21 days) because advance written notice would cause more abuse.",
							"A Plenary Order of Protection that requires the abuser to get notice and a copy of your Petition before the court hearing."
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Order Type",
				question: "What kind of Order of Protection are you requesting?",
				info: null
			},
			inputs:[
				{component: {
					compName: "LongTextInput",
					compProps: {
						options: [
							"An Emergency Order of Protection (up to 21 days) because advance written notice would cause more abuse.",
							"A Plenary Order of Protection that requires the abuser to get notice and a copy of your Petition before the court hearing."
						]
					},
					compChildren: {}
				}},
			]
		},
	]
}

export default data;