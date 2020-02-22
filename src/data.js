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
						buttonText:"i'm a dropdown!"
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
						buttonText:"i'm a dropdown!"
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
	]
}

export default data;