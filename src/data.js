const data = {
	data: [
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Click the button below to indicate...",
				info: "Here is some more info"
			},
			input:{
				component: {
					compName: "ButtonInput",
					compProps: {},
					compChildren: "I agree. Take me to the form."
				}
			}
		},
		{
			question:{
				label: "Name",
				question: "Enter your name below.",
				info: null
			},
			input:{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Jane Doe"
					},
					compChildren: {}
				}
			}
		},
	]
}

export default data;