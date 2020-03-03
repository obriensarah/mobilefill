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
		/// "Property to protect, pets and cellphones"
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "Is there any real or personal property that you want to prevent (abuser’s name) from taking, selling, transferring, concealing, damaging or otherwise disposing of?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  //IF LAST QUESTION WAS YES//
				label: "Property to protect, pets and cellphones",
				question: "List the real or personal property that you want to prevent (abuser’s name) from taking, selling, transferring, concealing, damaging or otherwise disposing of.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "need a placeholder"	
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "Why should (abuser’s name) be prevented from disposing of the property?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"I own the property",
							" We both own the property, but not having the property would be harder on me",
							"I claim or will the claim the property as marital property in a divorce case"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ /// If the victim selected the divorce option
				label: "Property to protect, pets and cellphones",
				question: "Has the divorce been filed?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "In case the Order of Protection is for an elderly victim. Do you want the abuser to be ordered by the court to stop using their financial resources for their own benefit?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
							"Does not apply"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "Do you want the court to give you possession of all family pets or other animals?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
							"Does not apply"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "Do you want the court to order a cell phone provider to separate your account from (abuser’s name) account? ",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ /// If last question was yes
				label: "Property to protect, pets and cellphones",
				question: "What is th ename of the cellphone service provider",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: " Cellphone provider"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "Is (abuser’s name) the cell phone service account holder?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "Do you know (abuser's name) billing phone number for the account?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ /// If last question was yes
				label: "Property to protect, pets and cellphones",
				question: "What is (abuser’s name) billing phone number for this account?",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: " Cellphone number"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ /// If last question was yes
				label: "Property to protect, pets and cellphones",
				question: "Enter the phone numbers you want separated",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Cellphone number"
					},
					compChildren: {}
				}},
			]
		},
		/// Remedies regarding children
		{
			question:{
				label: "Remedies regarding children",
				question: "Who is the primary caretaker of the minor children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"(victim's name)",
							"(abuser's name)",
							"Someone else",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			
			question:{ /// If last answer was someone else
				label: "Remedies regarding children",
				question: "Enter the caretaker's information",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name of the caretaker",
						placeHolder: "Address of the caretaker"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Remedies regarding children",
				question: "Do you want the the court to order that (abuser's name) cannot remove the children from the state of Illinois?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Remedies regarding children",
				question: "Do you want the court to give you temporary significant decision-making responsibility for your children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{
				label: "Remedies regarding children",
				question: "Do you currently have physical care and possession of all the minor children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last answer was no
				label: "Remedies regarding children",
				question: "Do you want the court to order (abuser's name) to return the children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // if last question was answered yes
				label: "Remedies regarding children",
				question: "To whom do you want the abuser to return the minor children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"To me",
							"To someone else",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ /// If last answer was someone else
				label: "Remedies regarding children",
				question: "Enter the name of the person you want (abuser's name) to return the children to",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name of person receiving the children"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Remedies regarding children",
				question: "Where should (abuser's name) return the children to?",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Address where the children are to be returned to"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Remedies regarding children",
				question: "When should (abuser’s name) return the children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"On a specific date",
							"By a specific date",
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Remedies regarding children",
				question: "Enter the date when you would like (abuser’s name) to transfer the children",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Date children are to be returned"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Remedies regarding children",
				question: "What time of day would you like the transfer to occur?",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Time of transfer"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Remedies regarding children",
				question: "Who should be present when the children are returned?",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name of person or agency to be present during the transfer"
					},
					compChildren: {}
				}},
			]
		},
/// Parentage of the children
		{
			question:{ 
				label: "Parentage of the children",
				question: "Select the statement that best describes the status of your children with (abuser's name)",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"The children were born before or during the marriage, or within 300 days of termination of the marriage",
							"We are not married, and paternity has not been established",
							"We are not married but paternity has been established" 
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If victim selected not married but paternity has been established
				label: "Parentage of the children",
				question: "How was paternity of the children established?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"We are listed as parent on an Illinois birth certificate",
							"We have signed a Voluntary Acknowledgement of Paternity",
							"A court or administrative order established paternity",
							"Other" 
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // if last question was answered other
				label: "Parentage of the children",
				question: "Please explain",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Please explain"
					},
					compChildren: {}
				}},
			]
		},
/// Parenting Time
		{
			question:{ 
				label: "Parenting Time",
				question: "How do you want the court to handle parenting time?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"I want the court to deny parenting time",
							"I want the court to restrict parent time",
							"I want the court to allow parenting time. The court will determine this after hearing on this Order of Protection",
							"I want the court to reserve parenting time until after a later hearing" 
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If deny parenting time option was selected
				label: "Parenting Time",
				question: "Why do you want the court to deny parenting time? (abuser’s name) is likely to:",
				info: null
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Abuse or endanger the children during parenting time",
							"Use parenting time to abuse or harass me, my family or my household",
							"Improperly hide or detain the children",
							"Act in a way that is not in the best interest of the children" 
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If restrict parenting time option was selected
				label: "Parenting Time",
				question: "Why do you want the court to restrict parenting time? (abuser’s name) is likely to:",
				info: null
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Abuse or endanger the children during parenting time",
							"Use parenting time to abuse or harass me, my family or my household",
							"Improperly hide or detain the children",
							"Act in a way that is not in the best interest of the children" 
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If allow parenting time option was selected
				label: "Parenting Time",
				question: "In order to prevent more abuse, do you want the court to order (abuser’s name) to not go to your residence to meet the children for parenting time?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If allow parenting time option was selected
				label: "Parenting Time",
				question: "How do you want to tell the court what parenting time schedule you want?",
				info: null
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Attach a parenting time schedule to my petition for Order of Protection",
							"Select parenting days in this questionnaire ",
							"Describe a short summary of the parenting time schedule "
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If select parenting time in this questionnaire option was selected
				label: "Parenting Time",
				question: "Where will parenting time occur?",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Enter the address where parenting time will occur"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If select parenting time in this questionnaire option was selected
				label: "Parenting Time",
				question: "Who will provide transport to take the children to and from parenting time?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Me",
							"(abuser's name)",
							"Other"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // if last question was answered other
				label: "Parentage of the children",
				question: "Enter the name of the person providing transport to and from parenting time",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If descfribe a short summary of parenting time was selected 
				label: "Parentage of the children",
				question: "Describe a short summary of the parenting time schedule",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Enter when, where, and how you want parenting time to happen and fill in the blanks with specific times, days, and other information. Include a.m. or p.m."
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If descfribe a short summary of parenting time was selected 
				label: "Parentage of the children",
				question: "Where will parenting time take place?",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Address"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If descfribe a short summary of parenting time was selected 
				label: "Parenting Time",
				question: "Who will provide transport to take the children to and from parenting time?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Me",
							"(abuser's name)",
							"Other"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // if last question was answered other
				label: "Parenting Time",
				question: "Enter the name of the person providing transport to and from parenting time",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name"
					},
					compChildren: {}
				}},
			]
		},
	// Parenting Time Location Details
		{
			question:{  
				label: "Parenting Time Location Details",
				question: "Where will (name of the person picking up the children) go to drop off and pick up the children for parenting time?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Police Department",
							"Sheriff's Department",
							"Safe Exchange Center",
							"Other Location"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If Other location option was selected
				label: "Parenting Time Location",
				question: "Enter the name of the pick-up / drop-off location for parenting time",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If Other location option was selected
				label: "Parenting Time Location",
				question: "Enter the address of the pick-up / drop-off location for parenting time",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Address"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  
				label: "Parenting Time Location Details",
				question: "Do you want (abuser’s name) parenting time to be supervised by another adult?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If last querstion was answered yes
				label: "Parenting Time Location Details",
				question: "Who do you want to supervise (abuser’s name) parenting time?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"A person I know",
							"An official supervised visitation center"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If person I know option is selected 
				label: "Parenting Time Location",
				question: "Enter the name of the adult who is to supervise parenting time",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If person I know option is selected 
				label: "Parenting Time Location",
				question: "Enter the name of the agency you want to supervise parenting time",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Name"
					},
					compChildren: {}
				}},
			]
		},
		// Parenting Time Holiday Schedule
		{
			question:{  
				label: "Parenting Time Holiday Schedule",
				question: "What holidays do you want (abuser’s name) to have parenting time with the children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"New Year's Day",
							"Easter",
							"Memorial Day",
							"Fourth of July",
							"Labor Day",
							"Thanksgiving Day",
							"Christmas Eve",
							"Christmas Day",
							"New Year's Eve",
							"None of the above"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Parenting Time Holiday Schedule",
				question: "Are there other holidays that you want (abuser’s name) to have parenting time with the children?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If yes is selected on last question 
				label: "Parenting Time Holiday Schedule",
				question: "Enter the other holidays you want (abuser's name) to have parenting time with the children",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Holidays"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Parenting Time Holiday Schedule",
				question: "Enter the start and end of parenting time on holidays",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Holidays parenting time start and finish time"
					},
					compChildren: {}
				}},
			]
		},
		// Other Remedies for Children
		{
			question:{ 
				label: "Other Remedies for Children",
				question: "Are there any reasons that you may want to deny (abuser’s name) to access, inspect, or obtain school, healthcare, or any other records of the minor children in your care? Select all that apply",
				info: null
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"I am requesting that the Order of Protection prohibit (abuser’s name) from having contact with the minor children.",
							"My address is not included on the petition due to the risk of further abuse.",
							"It is necessary to prevent abuse or wrongful removal or concealment of the minor children.",
							"None of the above."
						]
					},
					compChildren: {}
				}},
			]
		},
		// Firearms Information
		{
			question:{ 
				label: "Firearms Information",
				question: "Does (abuser’s name) own or have access to firearms? (a court can order an abuser to turn over firearms, but only after they have received actual notice of the Order of Protection case.",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
							"I do not know"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Firearms Information",
				question: "Has (abuser’s name) used firearms or threatened to use firearms against you or any other person named in the Order of Protection?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was answered as yes
				label: "Firearms Information",
				question: "Select the following statements that apply to your case"
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"(abuser’s name) has used or threatened to use a firearm against me",
							"There is likely to be the illegal use of firearms against me",
							"None of the above"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was answered optiom 1 or 2
				label: "Firearms Information",
				question: "Select the following statements that apply to (abuser's name)"
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Has a history of violence",
							"Has a history of possession or use of firearms",
							"Carries a firearm on their person or in a vehicle",
							"May be a threat to the public or police officers",
							"Is now or has been suicidal"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If selected the option keep a firearm in their car
				label: "Firearms Information",
				question: "Enter the make and model of (abuser's name) car",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Car make and model"
					},
					compChildren: {}
				}},
			]
		},
		// Support and Expenses
		{
			question:{ 
				label: "Support and Expenses",
				question: "Do you want economical support for yourself or a minor child?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was answered Yes
				label: "Support and Expenses",
				question: "Select all the forms of support you want"
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"I want temporary child support",
							"I want temporary support for myself"

						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Support and Expenses",
				question: "Do you want the court to order (abuser’s name) to reimburse a shelter providing you temporary housing or counselling?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was yes
				label: "Support and Expenses",
				question: "Enter the amount you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Support and Expenses",
				question: "Select the following expenses you want (abuser’s name) to pay for, that arose from the abuse, neglect or exploitation?",
				info: null
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Medical expenses",
							"Lost earnings",
							"Repair or replacement of property taken or damaged",
							"Moving or other travel expenses",
							"Expenses for housing and meals, other than the ones provided by a domestic violence shelter",
							"Expenses for search and recovery of the children",
							"Other expenses",
							"I did not incur in any expense"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was medical expensense
				label: "Support and Expenses",
				question: "Enter the amount of the medical expenses have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was lost earnings
				label: "Support and Expenses",
				question: "Enter the amount of the lost earnings you have lost so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was repair or replacement of property
				label: "Support and Expenses",
				question: "Enter the amount you have paid so far in repairing or replacoing your damage, stolen or taken property. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was moving or travel expenses
				label: "Support and Expenses",
				question: "Enter the amount of the moving or travel expenses you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was housing and meals expenses
				label: "Support and Expenses",
				question: "Enter the amount of the housing and meals expenses, other than for a domestic violence shelter, you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was search and recovery of children
				label: "Support and Expenses",
				question: "Enter the amount you have incurred in the search and recovery of your children so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was other expensenses
				label: "Support and Expenses",
				question: "Enter the amount of any other expense you have incurred so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Amount"
					},
					compChildren: {}
				}},
			]
		},
		// Miscellaneous Remedies & Case Number  
		{
			question:{ 
				label: "Miscellaneous Remedies & Case Number",
				question: "Do you want the court to order (abuser’s name) to undergo and successfully complete a counselling program?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{  // If last question was yes
				label: "Miscellaneous Remedies & Case Number",
				question: "What kind of counselling, evaluation and treatment do you want (abuser’s name) to receive?",
				info: null
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Domestic violence intervention",
							"An alcohol substance abuse evaluation and to successfully complete all recommendations",
							"A mental health evaluation and to successfully complete all recommendations",
							"Other"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was other 
				label: "Miscellaneous Remedies & Case Number",
				question: "What other type of counselling, evaluation or treatment do you want (abuser’s name) to get?",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Type of counselling"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Miscellaneous Remedies & Case Number",
				question: "Is there anything else you want the court to order (abuser’s name) to do or stop doing something that has not been yet asked (This can include for the court to order (abuser’s name) to delete any sensitive pictures they may have in their possession of you or the persons protected in this order)",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was yes
				label: "Miscellaneous Remedies & Case Number",
				question: "Describe the other things you want the court to order (abuser’s name) to do or stop doing",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Description"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was yes
				label: "Miscellaneous Remedies & Case Number",
				question: "Explain the reasons why you want the court to order (abuser’s name) to do or stop doing what you entered above",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Reasons"
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ 
				label: "Miscellaneous Remedies & Case Number",
				question: "Do you already have a case number?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No"
						]
					},
					compChildren: {}
				}},
			]
		},
		{
			question:{ // If last question was yes
				label: "Miscellaneous Remedies & Case Number",
				question: "Enter your case number",
				info: null
			},
			inputs:[
				{component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Case number"
					},
					compChildren: {}
				}},
			]
		},
	]
}

export default data;