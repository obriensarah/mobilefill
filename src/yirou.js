import React from 'react';
const data = {
	data: [
	{
			question:{
				label: "Protection requested",
				question: "Which types of abuse do you want to prevent?",				
				info: "If you are unsure what the words after the boxes mean, you can click the top right corner for explanation."
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Harassment",
							"Physical abuse",
							"Stalking",
							"Willful Deprivation",
							"Intimidation of a Dependent ",
							"Exploitation of a High-Risk Adult with Disabilities",
							"Neglect of a High-Risk Adult with Disabilities",
							"Interference with Personal Liberty",
							"None of the above",
						]
					},
					compChildren: {}
				}},
			],
			extraInfo:<div><b>What is Abuse?</b><br />"Abuse" means physical abuse, harassment, intimidation of a dependent, interference with personal liberty, or willful deprivation but does not include reasonable direction of a minor child by a parent.<br /><br /><b>What is Harassment?</b><br />Harassment is an unnecessary conduct which causes you emotional distress.  The following types of conducts are presumed to cause emotional distress:<br /> creating a disturbance at your place of work or school;<br />repeatedly telephoning your place of employment, house or school;<br />repeatedly following you in a public place or places;<br />repeatedly keeping you under surveillance by staying outside your home, school, place of work, vehicle or another place you are in or by looking through your windows;<br />threatening physical force, confinement or restraint on one or more occasions; or<br />improperly concealing or threatening to conceal your child from you, removing your child outside State limits or from your physical care, or making a threat after actually or attempting to improperly remove your child.<br /><br /><b>What is Physical Abuse?</b><br />Physical abuse includes: <br />sexual abuse;<br />physical force;<br />confinement or restraint;<br />intentional, repeated and unnecessary sleep deprivation; or<br />any conduct which creates an immediate risk of physical harm.<br /><br /><b>What is Stalking?</b><br />Stalking means the Respondent knowingly and without lawful justification follows you or other persons protected in this Order of Protection in at least 2 separate occasions and places you under surveillance or threatens immediate or future harm to a person protected by this Order of Protection.<br /><br /><b>What is Willful Deprivation?</b><br />Denying a person access to medication, food, shelter or any other assistance they need resulting in their exposure to the risk of being harmed (physically, emotionally or mentally).<br /><br /><b>What is Intimidation of a Dependent?</b><br />Subjecting a person dependent to the Respondent because of age, health or disability to participate in or witness physical force, physical confinement, or restraint against any person.<br /><br /><b>What is Exploitation?</b><br />The illegal (including tortious) use of a high-risk adult with disabilities or of the assets or resources of a high-risk adult with disabilities. Exploitation includes the misappropriation of assets by:<br />undue influence;<br />breach of a fiduciary relationship;<br />fraud or deception;<br />extortion;<br />the illegal use of such assets or resources.</div>
		},
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Help file for an Order of Protection",
				info: "This site guides you through answering all the questions that are necessary to get an Order of Protection in Cook County, IL. The information you provide will be filled on the Order of Protection form that you submit to the court directly."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Petitioner",
				info: "\"Petitioner\" in this site refers to the person who is seeking protection. If you are completing the form for someone else, use their name, and do not use your information."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Respondent",
				info: "\"Respondent\" in this site refers to the person the Petitioner is seeking protection from."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Only Applicable in Cook County, IL",
				info: "This product only helps if the Petitioner or the Respondent lives in Cook county, the abuse took place in the county, or the Petitioner is in Cook county temporarily to avoid abuse somewhere else. If that’s not the case, please use other resources instead."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Only Applicable in Cook County, IL",
				info: "This site only helps if the Petitioner or the Respondent lives in Cook county, the abuse took place in the county, or the Petitioner is in Cook county temporarily to avoid abuse somewhere else. If that’s not the case, please use other resources instead."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Disclaimer and Agreement",
				question: "Only use this site if you agree with the following terms",
				info: "This site does not give legal advice. Talk to a lawyer if you need legal help.<br />You must not use this site for any commercial purpose.<br />You are either low-income people or people without lawyers who access this site from a statewide legal aid website, pro bono website, or approved court website, nonprofit and charitable organization staff or authorized court staff who help other permitted users, or lawyers and their team who provide not-for-profit or reduced fee legal help to low-income people or nonprofit and charitable organizations."
			},
			inputs:[{
				component: {
					compName: "ButtonInput",
					compProps: {},
					compChildren: "I agree. Take me to the form."
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Name",
				question: "Who are you requesting an Order of Protection for?",
				info: "If you are preparing the order for someone else, your information can be listed on the Petition as the person who prepared it."
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"My self, my family, or my household members.",
							"Someone else I am trying to help as a court advocate or helper."
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: <div><b>Who is a Family or Household Member?</b><br />Persons related by blood or by present or prior marriage, such as:<br />spouses or ex-spouses;<br /> parents, step-parents or grandparents;<br />children or stepchildren;<br />persons who have or allegedly have a child in common, even if you have never been married nor lived together;<br />people you date or engage with (or you used to do so), which does not include your casual acquaintanceship in business or daily life;<br />persons who live with now or have lived with before;<br />persons who share or allegedly share a blood relationship through a child;<br />for a person with disabilities, their personal assistants or caregivers</div>
		},
		{
			question:{//nested under "Someone else I am trying to help as an advocate or helper."
				label: "Name",
				question: "What is the name of Court advocate / helper?",
				info: "Enter your information as you want it to appear on the Petition."
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
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "Someone else I am trying to help as an advocate or helper."
				label: "Name",
				question: "What is the City of Court advocate / helper?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "Someone else I am trying to help as an advocate or helper."
				label: "Name",
				question: "What is the City of Court advocate / helper?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "Someone else I am trying to help as an advocate or helper."
				label: "Name",
				question: "What is the Street address of Court advocate / helper?",
				info: "Including apartment, suite, or floor #."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "Someone else I am trying to help as an advocate or helper."
				label: "Name",
				question: "What is the ZIP code of Court advocate / helper?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "Someone else I am trying to help as an advocate or helper."
				label: "Name",
				question: "What is the phone number of Court advocate / helper?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "(999)999-9999"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Name",
				question: "That's all the information about advocate / helper we need to know.",
				info: "If you are preparing the order for someone else, your information can be listed on the Petition as the person who prepared it."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Qualification questions",
				question: "Qualification questions",				
				info: "This section asks for the most basic information of your Petition, including: <br />Where you are;<br />Who needs protection;<br />Against whom you want an Order of Protection;<br />What kind of Order of Protection do you need.<br />As always, if you need help, you can find help information at the top right corner."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{//??: is question "List of Illinois counties (drop down)" necessary now that we're building for cook county?
				label: "Qualification questions",
				question: "In which County are you filing for an Order of Protection?",				
				info: null			
			},
			inputs:[{
				component: {
					compName: "DropdownInput",
					compProps: {
						buttonText:"Cook",
						options: [
							"Adams",
							"Alexsander",
							"Bood",
							"Boone",
							"..."
						]
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Qualification questions",
				question: "Why are you filing for this Order of Protection in Cook County?",
				info: "Select all that is true. <br />If none of these apply, you cannot file in the Cook County.",
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"I live in the county.",
							"The person I am filing against lives in the county.",
							"Abuse took place in the county.",
							"I am in this county temporarily to avoid abuse somewhere else.",
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Qualification questions",
				question: "How is your relationship with the Respondent?",
				info: "Select all that is true."
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"I am his/her Spouse",
							"I am his/her Ex or former spouse",
							"I am his/her Current or former partner",
							"We have a child in common and never married",
							"We shared or are sharing living space",
							"I am his/her Child",
							"I am his/her Parent",
							"I am his/her Sibling",
							"I am his/her Stepchild",
							"I am his/her Stepsibling",
							"I am his/her Stepparent",
							"I am his/her Grandchild",
							"I am his/her Grandparent",
							"I am his/her In-law",
							"Other family member",
							"I'm a person with disability",
							"The Respondent is my Personal Caregiver and I am disabled",
							"The Respondent is my Personal Assistant",
							"None of these apply"
							]
					},
					compChildren: {}
				}}],
			extraInfo:<div><b>Who is an adult with disabilities?</b><br />Adult with Disabilities is either:<br />An elder adult with disabilities;<br/> an adult prevented by advanced age from taking appropriate action to protect himself or herself from abuse by a family or household member; or<br />a high-risk adult with disabilities, a person aged 18 or over whose physical or mental disability impairs his or her ability to seek or obtain protection from abuse, neglect, or exploitation.<br /><br/><b>Who is considered a caregiver?</b><br />A family member by blood or marriage who lives with you or regularly visits, and who knows or should know about your physical or mental impairment and that you cannot care for yourself;<br />a person who is employed to live with you or regularly visit you to take care of you;<br />a person who, for payments or other paybacks, agrees to live with you or regularly visit you and take care of you; or<br />a person who has been appointed by a private or public agency or by a court to take care of you.<br /><br />For purposes of this Order of Protection the following persons are not considered caregivers:<br />a person who works at a licensed or certified nursing home or rehabilitation facility; or<br />a healthcare provider who is giving regular medical care to an adult with disabilities.</div>
		},
		{
			question:{
				label: "Qualification questions",
				question: "Continue to select your relationship with the Respondent.",
				info: "Select all that is true."
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"I have a foster child whose family or household member is the person who abused me.",
							"I have an adopted child, or I am a prospective adoptive parent of a child whose family or household member is the person who abused me.",
							"I am a legally-appointed guardian or legally-appointed custodian of a child whose family or household member is the person who abused me.",
							"None of these apply"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: <div><b>Who is a Family or Household Member?</b><br />Persons related by blood or by present or prior marriage, such as:<br />spouses or ex-spouses;<br /> parents, step-parents or grandparents;<br />children or stepchildren;<br />persons who have or allegedly have a child in common, even if you have never been married nor lived together;<br />people you date or engage with (or you used to do so), which does not include your casual acquaintanceship in business or daily life;<br />persons who live with now or have lived with before;<br />persons who share or allegedly share a blood relationship through a child;<br />for a person with disabilities, their personal assistants or caregivers.</div>
		},
		{
			question:{//nested, appear if both questions' answers are "none of these apply"
				label: "Qualification questions",
				question: "You seem not qualified for Order of Protection",
				info: "You need to have the relationship(s) we listed to get an Order of Protection.<br />If you need protection and have other relationship with the Respondent, look into Civil No Contact Order or Stalking No Contact Order."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Qualification Question",
				question: "What is your name?",
				info: "Enter the name of you (the person who is filing this form now), even if you are filing for the Order of Protection for other family or household members. On the form, your name will appear as the Petitioner.<br />To court advocate or helper: enter the petitioner's name here, not yours."
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
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Qualification Question",
				question: "What is your birthdate?",
				info: "Enter the birthdate of you (the person who is filing this form now), even if you are filing for the Order of Protection for other family or household members. <br />To court advocate or helper: enter the petitioner's birthdate here, not yours."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "mm/dd/yyyy"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Qualification Question",
				question: "Which type of Order of Protection are you requesting?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"An Emergency Order of Protection (up to 21 days) because advance written notice would cause more abuse.<br />Select this if you want an Order of Protection right now. This may be extended to a Plenary Order of Protection later.",
							"A Plenary Order of Protection that requires the abuser to get notice and a copy of your Petition before the court hearing.<br />Select this only if you do not wish an Emergency Order of Protection."
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: <div><b>What will happen if I apply for an Emergency Order of Protection?</b><br /><br />No Need to Meet Respondent: To get an Emergency Order, you don’t need to meet the Respondent at court in person. Nor will the judge contact the Respondent before deciding this matter. <br />Note that once the Emergency Order of Protection is granted, the Court will send the Respondent a copy of your Emergency Order of Protection. This is to let the Respondent know the consequences if he or she doesn’t obey.<br /><br />Simpler Procedures: The judge will consider if you need immediate protection based on what you describe in this Petition. If the answer is yes, he or she will grant you an Emergency Order of Protection.<br /><br />Shorter Duration: An Emergency Order typically lasts up to 21 days but sometimes can be extended. <br /><br />Limited Protection: If ordered to stay away from the protected person, the Respondent must not have ANY physical, non-physical, direct or indirect contact with the protected person. But some types of protection can only be offered by a Plenary Order. <br /><br /><b>What will happen if I apply for a Plenary Order of Protection?</b><br /><br />Need to Meet Respondent: A Plenary (final) Order of Protection offers longer protection than an Emergency Order, so the Respondent will need to be in person at a Hearing. The judge will not grant the Plenary Order if the Petitioner does not show up. On the contrary, if the Respondent does not show up, the Petition gets a Plenary Order.<br /><br />More Formal Procedures: During the Hearing, you and the Respondent will both present evidence to the judge. <br /><br />Longer Duration: A Plenary Order of Protection lasts up to 2 years, with extensions possible.<br /><br />More Extensive Protection: A Plenary Order can include more remedies that cannot be granted by an Emergency Order, such as payment of support or monetary compensation.</div>
		},
		{
			question:{
				label: "Qualification Question",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}]
		},
		{
			question:{
				label: "communication",
				question: "Address, phone and email of solicitor",
				info: "This section asks how you want the court to communicate with you. Please get these information at hand:<br />Your address (this doesn’t need to be your real address)<br />Optionally, your email (this can be an email created just for filling for an Order of Protection that you regularly check)<br />As always, if you need help, you can find help information at the top right corner."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "communication",
				question: "Do you want to hide your real address, and use a different address for the Order of Protection?",
				info: null			
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"I want to hide my real address and use another address where I can receive mail about this case<br />Select this if you do not want Respondent to know where you live, and have a different address where you can get mail.",
							"I want to use my real address"
						]//abnormalinput: notes for separate option
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},
		{
			question:{//nested under "I want to hide my real address and use another address where I can receive mail about this case<br />Select this if you do not want Respondent to know where you live, and have a different address where you can get mail."
				label: "communication",
				question: "Enter an address where you will receive mail related to this Order of Protection.",
				info: "The address should not be where you are staying since you want to hide your real address. Including apartment, suite, or floor #."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "I want to use my real address."
				label: "communication",
				question: "What is your real address?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "communication",
				question: "What is the City of the address you chose?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "communication",
				question: "What is the State of the address you chose?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "communication",
				question: "What is the ZIP code of the address you chose?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{				
				label: "communication",
				question: "What is your phone number?",
				info: "You do not have to enter the phone number of where you are staying if you are concerned that someone will harass you by phone."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "(999)999-9999"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},		
		{
			question:{				
				label: "communication",
				question: "Would you like to receive documents in this case by email?",
				info: "Your email address will appear on the court forms. <br />You can use a new email that is created just for Order of Protection purpose and not shared with others."
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
			],
			extraInfo: ""
		},		
		{
			question:{//nested under "Yes"			
				label: "communication",
				question: "Enter your email address.",
				info: "<br />You can use a new email that is created just for Order of Protection purpose and not shared with others. <br />Remember to check the email regularly in case you miss important information about your case. "
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "yourname@email.com"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{
				label: "communication",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Protected People",
				question: "Protected People",				
				info: "This section asks for more details about the person that needs protection, such as their names. Please keep your answers consistent with what you have answered in the Qualification Questions section.<br />As always, if you need help, you can find help information at the top right corner."},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{				
				label: "Protected People",
				question: "Do you want to protect yourself with this Order of Protection?",
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
			],
			extraInfo: ""
		},		
		{
			question:{//nested under "Yes"			
				label: "Protected People",
				question: "Do you want to protect your minor children (under 18) that you had with the Respondent with this Order of Protection?",
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
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "Yes"			
				label: "Protected People",
				question: "How many minor children did you have with the person named on this Order of Protection?",
				info: null			
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",//abnormalinput: take number of children, input each children's name + if he/she needs to be protected 
					compProps: {
						controlId: "blah",
						placeHolder: "1"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//abnormalinput: nested conditioned on "how many minor children"		
				label: "Protected People",
				question: "What is the name of the minor child you had with the person you want to protect with this order of protection?",
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
			}],
			extraInfo: ""
		},
		{
			question:{//abnormalinput: nested conditioned on "how many minor children"		
				label: "Protected People",
				question: "What is the birthdate of the minor child you had with the person you want to protect with this order of protection?",
				info: null			
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "mm/dd/yyyy"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//abnormalinput: nested conditioned on "how many minor children"		
				label: "Protected People",
				question: "Which state does this minor child currently live in?",
				info: null			
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//abnormalinput: nested conditioned on "how many minor children"		
				label: "Protected People",
				question: "Do you want the Order of Protection to protect this child?",
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
			],
			extraInfo: ""
		},	
		{
			question:{			
				label: "Protected People",
				question: "Do you want to protect your minor children (under 18) who is not related to the Respondent?",
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "Yes."
				label: "Protected People",
				question: "What is the name of the minor children?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Jane Doe"//abnormalinput: may have more than one child
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{			
				label: "Protected People",
				question: "Do you want to protect any dependent adult?",
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "Yes."
				label: "Protected People",
				question: "What is the name of the dependent adult?",
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
			}],
			extraInfo: ""
		},	
		{
			question:{			
				label: "Protected People",
				question: "Do you want to protect any high risk adult with disabilities?",
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
			],
			extraInfo:<div><b>Who is a High-Risk Adult with Disabilities?</b><br />A person aged 18 or over whose physical or mental disability impairs their ability to seek or obtain protection from abuse, neglect, or exploitation.</div>
		},
		{
			question:{//nested under "Yes."
				label: "Protected People",
				question: "What is the name of the high risk adult with disabilities?",
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
			}],
			extraInfo:<div><b>Who is a High-Risk Adult with Disabilities?</b><br />A person aged 18 or over whose physical or mental disability impairs their ability to seek or obtain protection from abuse, neglect, or exploitation.</div>
		},	
		{
			question:{			
				label: "Protected People",
				question: "Do you want to protect any other household members?",
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "Yes."
				label: "Protected People",
				question: "What are the name of other household members?",
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
			}],
			extraInfo: ""
		},	
			{
			question:{
				label: "Protected People",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Person you want protection from",
				question: "Person you want protection from",				
				info: "This section asks for more details about the person against whom you want an Order of Protection. Again, please keep your answers consistent with what you have answered in the Qualification questions section.<br />You will need to provide the basic information such as his or her name, gender, race. <br />If you are not sure of the answer, you can write “do not know” under some questions, such as the person’s address, existing Order of Protection against him/her, or court cases against him/her that also involves you.<br />As always, if you need help, you can find help information at the top right corner."			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Person you want protection from",
				question: "What is the name of the Respondent?",
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
			}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "What is the birthdate of the Respondent?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "mm/dd/yyyy"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "What is the gender of the Respondent?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Male",
							"Female",
							"Other"						
							]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "What is the race of the Respondent? (Options in Alphabetical Order)",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Asian",
							"Black",
							"Hispanic or Latino",
							"Mixed",
							"Native American",
							"Native Hawaiian or Pacific Islander",
							"White",
							"Other"
							]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "To your best knowledge, which state does the Respondent live in now?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "To your best knowledge, which city does the Respondent live in now?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "To your best knowledge, where does the Respondent live now?",
				info: "Including apartment, suite, or floor #.<br />If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "To your best knowledge, what is the ZIP code of the Respondent home address?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
				}
			}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "To the best of your knowledge, are they currently employed?",
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "What is the name of the Respondent's employer?",
				info: "Enter as much information as you can. If unknown, write \"Do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Acme Corporation"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "To your best knowledge, which state is the Respondent’s employer in?",
				info: "If unknown, please leave it blank."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "To your best knowledge, where is the Respondent's employer?",
				info: "Including apartment, suite, or floor #.<br />If unknown, please leave it blank."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
			}}],
			extraInfo: ""
		},
		{
			question:{//nested under "Yes."
				label: "Person you want protection from",
				question: "To your best knowledge, what is the ZIP code of the Respondent's employer?",
				info: "If unknown, please leave it blank."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					}
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "Yes."
				label: "Person you want protection from",
				question: "Enter the work hours of the Respondent for the employer.",
				info: "For example, 9:00 am to 5:00 pm.<br />If unknown, please leave it blank."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "9:00 am to 5:00 pm"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "Would you consider the Respondent to be armed or dangerous to others?",
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
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "Would you consider the Respondent to be a suicide risk?",
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
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "Is there now, has there ever been an Order of Protection in any State and county against the Respondent involving you or other people you want to protect on this order?",
				info: "Answer this to the best you can. If you select \"yes\" but do not know some of the information asked for, then write \"do not know.\""
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
							"Do not know"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "How many other Orders of Protection were the Respondent and you or other people you want protected involved in?",
				info: "If you do not know the information asked for, then write \"do not know.\""
			},
			inputs:[{//abnormalinput: 3 cases = 3 set of questions 
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "1"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "Enter the name of the person who filed the for the prior Order of Protection.",
				info: "If you do not know the information asked for, then write \"do not know.\""
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
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "Enter the name of the person against whom the prior Order of Protection is filed.",
				info: "If you do not know the information asked for, then write \"do not know.\""
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
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "In which county and state was this prior Order of Protection filed?",
				info: "Enter in the format of \"IL, Cook County\". If you do not know the information asked for, then write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "IL, Cook County"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "In which year was this prior Order of Protection entered",
				info: "If you do not know the information asked for, then write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "2020"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "Are there now, or have there ever been, any other court cases against the Respondent involving you?",
				info: "Including all other types of court cases that you have been involved in with the Respondent, such as divorce, custody, child support, paternity, parenting time, guardianship, adoption, and abuse and neglect cases."
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Yes",
							"No",
							"Do not know"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "How many court cases of the Respondent that is, or have been, involving you?",
				info: "If you do not know the information asked for, then write \"do not know.\""
			},
			inputs:[{//abnormalinput: 3 cases = 3 set of questions 
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "1"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "What is the type of this case?",
				info: "For example, divorce, custody, child support, paternity, parenting time, guardianship, adoption, and abuse and neglect cases.<br />If you do not know the information asked for, then write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Divorce"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "In which county and state was this prior court case filed?",
				info: "Enter in the format of \"IL, Cook County\". If you do not know the information asked for, then write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "IL, Cook County"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Person you want protection from",
				question: "In which year was this court case filed",
				info: "If you do not know the information asked for, then write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "2020"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Person you want protection from",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Person you want protection from",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "Reasons for the protective order",			
				info: "You need to describe the incidents of abuse in this section. This is because to decide whether to grant an Order of Protection (including Emergency Order of Protection), the judge needs to know what happened exactly. <br />You can include up to 9 incidents of any past abuses (and any criminal conviction that resulted) from the Respondent. "
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "Suggestion for Writing About Abuse Incidents",				
				info: "You may find these suggestions useful:<br /> Were you emotionally abused? <br /> Where you hit with a close hand? <br /> Did the abuser use any instruments to hurt you? <br /> If you have children, were they hurt by the abuser? <br /> Was the abuser the influence of any substance? <br />You can always refer to this Suggestion List at the top right corner."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "Tip: Draft Somewhere Else First, Copy-Paste Here Later",				
				info: "Writing about abuse experiences can be hard. You may need details that are not at hand, or you simply need more time to figure things out.<br />If it is more comfortable to you, you can take a look at this section, leave it blank for now, draft your experiences somewhere secure, and copy-paste your finished descriptions into this section later."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "Tip: Start with what happened most recently",				
				info: "Please input first what happened most recently, then enter in reverse chronological order. <br />You may find it more comfortable to draft your experiences somewhere secure, and copy-paste your finished descriptions here later."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "When date this incident happen?",				
				info: "Try to be as specific about dates as you can. If you don’t remember exact dates of things that happened long ago, just enter the month and year."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "mm/dd/yyyy"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
			{
			question:{
				label: "Reasons for the protective order",
				question: "At what time did this incident happen?",				
				info: "Try to be as specific about times as you can."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "5:00pm"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "What did Respondent do to you, and or the other persons for whom you want an Order of Protection?",				
				info: "Be specific, and describe the effect that this incident has had on you or the other persons.<br />You can always refer to this Suggestion List at the top right corner."
			},
			inputs:[{
				component: {
					compName: "LongTextInput",
					compProps: {
						placeHolder: "LongTextInput text"
					},
				compChildren: null
			}}],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "Do you want to add an older incident?",
				info: "Please input first what happened most recently, then enter in reverse chronological order."
			},
			inputs:[//??: 3 incidents = need 3 set of questions
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Reasons for the protective order",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "Protection requested",				
				info: "This section asks for the types of abuse that you want to prevent, and the details of the protection sought. Think about the types of protections you need, such as: <br />No communication;<br />Staying physically away;<br />Arrangements if the Respondent attend the same school with the person who needs protection;<br />Other arrangements about properties, pets and cell phone accounts<br />If other types of protection are needed but not included in this section, you can fill them later at the “Miscellaneous Remedies & Case Number” section of this Form.<br />As always, if you need help, you can find help information at the top right corner."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "Which types of abuse do you want to prevent?",				
				info: "If you are unsure what the words after the boxes mean, you can click the top right corner for explanation."
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Harassment",
							"Physical abuse",
							"Stalking",
							"Willful Deprivation",
							"Intimidation of a Dependent ",
							"Exploitation of a High-Risk Adult with Disabilities",
							"Neglect of a High-Risk Adult with Disabilities",
							"Interference with Personal Liberty",
							"None of the above",
						]
					},
					compChildren: {}
				}},
			],
			extraInfo:<div><b>What is Abuse?</b><br />"Abuse" means physical abuse, harassment, intimidation of a dependent, interference with personal liberty, or willful deprivation but does not include reasonable direction of a minor child by a parent.<br /><br /><b>What is Harassment?</b><br />Harassment is an unnecessary conduct which causes you emotional distress.  The following types of conducts are presumed to cause emotional distress:<br /> creating a disturbance at your place of work or school;<br />repeatedly telephoning your place of employment, house or school;<br />repeatedly following you in a public place or places;<br />repeatedly keeping you under surveillance by staying outside your home, school, place of work, vehicle or another place you are in or by looking through your windows;<br />threatening physical force, confinement or restraint on one or more occasions; or<br />improperly concealing or threatening to conceal your child from you, removing your child outside State limits or from your physical care, or making a threat after actually or attempting to improperly remove your child.<br /><br /><b>What is Physical Abuse?</b><br />Physical abuse includes: <br />sexual abuse;<br />physical force;<br />confinement or restraint;<br />intentional, repeated and unnecessary sleep deprivation; or<br />any conduct which creates an immediate risk of physical harm.<br /><br /><b>What is Stalking?</b><br />Stalking means the Respondent knowingly and without lawful justification follows you or other persons protected in this Order of Protection in at least 2 separate occasions and places you under surveillance or threatens immediate or future harm to a person protected by this Order of Protection.<br /><br /><b>What is Willful Deprivation?</b><br />Denying a person access to medication, food, shelter or any other assistance they need resulting in their exposure to the risk of being harmed (physically, emotionally or mentally).<br /><br /><b>What is Intimidation of a Dependent?</b><br />Subjecting a person dependent to the Respondent because of age, health or disability to participate in or witness physical force, physical confinement, or restraint against any person.<br /><br /><b>What is Exploitation?</b><br />The illegal (including tortious) use of a high-risk adult with disabilities or of the assets or resources of a high-risk adult with disabilities. Exploitation includes the misappropriation of assets by:<br />undue influence;<br />breach of a fiduciary relationship;<br />fraud or deception;<br />extortion;<br />the illegal use of such assets or resources.</div>
		},
		{
			question:{
				label: "Protection requested",
				question: "Do you want the court to order the Respondent to not have any communication with you and any other protected persons?",
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "Do you want the court to order the Respondent to stay away from you and any other protected persons at all times?",
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "Do you want the court to prohibit the Respondent from entering or remaining at a residence, while you or a protected person are present?",
				info: "The Respondent will see these addresses."
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which state is the residence you want the Respondent to keep away from?",
				info: "The Respondent will see these addresses."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which city is the residence you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is the address of the residence you want the Respondent to keep away from?",
				info: "Including apartment, suite, or floor #.<br />If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is ZIP code of the residence you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{
				label: "Protection requested",
				question: "Do you want the court to prohibit the Respondent from entering or remaining at a place of employment, while you or a protected person are present?",
				info: "The Respondent will see these addresses. You can enter up to two employment addresses."
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is name of the employer?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Acme Corporation"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which state is the place of employment you want the Respondent to keep away from?",
				info: "The Respondent will see these addresses."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which city is the place of employment you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is the address of the place of employment you want the Respondent to keep away from?",
				info: "Including apartment, suite, or floor #.<br />If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is ZIP code of the place of employment you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes" abnormalinput: up to two employment addresses
				label: "Protection requested",
				question: "Do you want to enter another place of employment you want the Respondent to keep away from?",
				info: "You can enter up to two employment addresses."
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
				}}
			],
			extraInfo: ""
		},	
///
		{
			question:{
				label: "Protection requested",
				question: "Do you want the court to prohibit the Respondent from entering or remaining at any schools or day-care centers, while you or a protected person are present?",
				info: "You can choose to hide these addresses from the Respondent later. You can enter up to two employment addresses."
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "Do you want to hide from the Respondent the name of this school or day-care center?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"School",
							"Day-care facility"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is name of the school or day-care center?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Acme Corporation"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which state is this school or day-care center you want the Respondent to keep away from?",
				info: "The Respondent will see these addresses."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which city is this school or day-care center you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is the address of this school or day-care center you want the Respondent to keep away from?",
				info: "Including apartment, suite, or floor #.<br />If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is ZIP code of this school or day-care center you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "Is this a school or a day-care facility?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"School",
							"Day-care facility"
						]
					},
					compChildren: {}
				}}
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "Select the children who attend this school or day-care center?",
				info: null
			},
			inputs:[
				{component: {//abnormalinput: show children's name that are previously entered 
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
				}}
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes" abnormalinput: up to two employment addresses
				label: "Protection requested",
				question: "Do you want to enter another this school, kindergarten, or day-care center you want the Respondent to keep away from?",
				info: "You can enter up to two addresses."
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
				}}
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "Do you want the court to order the Respondent not to remove children from you or a school, babysitter, day-care provider, or any other person caring for the children?",
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
				}}
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "Do you want the court to send a copy of the Order of Protection to each child’s school, kindergarten or day-care center?",
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
				}}
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Protection requested",
				question: "Do you want the court to prohibit the Respondent from entering or remaining at other locations, while you or a protected person are present?",
				info: "The Respondent will see these addresses. You can enter up to two addresses."
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
			],
			extraInfo: ""
		},
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is name of this location?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Acme Corporation"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which state is this location you want the Respondent to keep away from?",
				info: "The Respondent will see these addresses."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "In which city is this location you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is the address of this location you want the Respondent to keep away from?",
				info: "Including apartment, suite, or floor #.<br />If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What is ZIP code of this location you want the Respondent to keep away from?",
				info: "If unknown, write \"do not know.\""
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
			}}],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes" abnormalinput: up to two addresses
				label: "Protection requested",
				question: "Do you want to enter another location you want the Respondent to keep away from?",
				info: "You can enter up to two addresses."
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
			],
			extraInfo: ""
		},	
///
		{
			question:{
				label: "Protection requested",
				question: "With regards to your home or where you are staying, which do you want the court to order?",
				info: "The court's final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"I want exclusive possession of my residence, and the Respondent should not be allowed to enter or stay there at all times.",
							"I want the Respondent to provide a different place for me and the protected people to live because we share a residence",
							"I want the Respondent not to be or stay at my residence while under the influence of drugs or alcohol. This would be a threat to the safety or well-being of myself or my children.",
							"None of the above"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "I want exclusive possession of my residence, and the Respondent should not be allowed to enter or stay there at all times." 
				label: "Protection requested",
				question: "In which state is the residence that you want exclusive possession?",
				info: "If you did not list your actual address in previous questions, leave it blank instead."
			},
			inputs:[{
				component: {//abnormalinput: can we call/show here the residence address that has been entered previously?
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "I want exclusive possession of my residence, and the Respondent should not be allowed to enter or stay there at all times." 
				label: "Protection requested",
				question: "In which city is the residence that you want exclusive possession?",
				info: "If you did not list your actual address in previous questions, leave it blank instead."
			},
			inputs:[{
				component: {//abnormalinput: can we call/show here the residence address that has been entered previously?
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "I want exclusive possession of my residence, and the Respondent should not be allowed to enter or stay there at all times." 
				label: "Protection requested",
				question: "What is the ZIP code of the residence that you want exclusive possession?",
				info: "If you did not list your actual address in previous questions, leave it blank instead."
			},
			inputs:[{
				component: {//abnormalinput: can we call/show here the residence address that has been entered previously?
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "I want exclusive possession of my residence, and the Respondent should not be allowed to enter or stay there at all times." 
				label: "Protection requested",
				question: "What is the address of the residence you want exclusive possession?",
				info: "If you did not list your actual address in previous questions, write “PROTECTED ADDRESS” instead.<br />Including apartment, suite, or floor #."
			},
			inputs:[{
				component: {//abnormalinput: can we call/show here the residence address that has been entered previously?
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},	
		{
			question:{//nested under "I want exclusive possession of my residence, and the Respondent should not be allowed to enter or stay there at all times." 
				label: "Protection requested",
				question: "Why should the Respondent be ordered to stay away from the residence?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"The other person has no right to live there",
							"Both people have a right to live there, but it is a greater burden for me to leave the residence"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Protection requested",
				question: "Do you have any personal properties you want to protect from the Respondent?",
				info: "The court's final decisions do not affect who owns the property, only who gets to use or occupy it."
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
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "List the personal properties you want to protect from the Respondent.",
				info: "The court's final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {
					compName: "LongTextInput",
					compProps: {
						options: [
							"List the personal properties you want to protect from the Respondent."
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "Among these personal properties you listed, is there anything that is currently possessed by the Respondent and you want it back?",
				info: "The court's final decisions do not affect who owns the property, only who gets to use or occupy it."
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
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes" of "Among these personal properties you listed, is there anything that is currently possessed by the Respondent and you want back?"
				label: "Protection requested",
				question: "List all the personal properties you want the Respondent to return to you.",
				info: "The court's final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {
					compName: "LongTextInput",
					compProps: {
						options: [
							"List all the personal properties you want the Respondent to return to you."
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes" of "Among these personal properties you listed, is there anything that is currently possessed by the Respondent and you want back?"
				label: "Protection requested",
				question: "Why do you think the Respondent need to return these personal properties to you.",
				info: "The court's final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"I own the property, not the Respondent.",
							"We both own the property but sharing it would put me at risk for abuse or is not practical. It would also be harder on me if I did not have the property.",
							"I claim or will claim the property as marital property in a divorce case."
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "I claim or will claim the property as marital property in a divorce case." of "Among these personal properties you listed, is there anything that is currently possessed by the Respondent and you want back?"
				label: "Protection requested",
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
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Protection requested",
				question: "Do you have property of the Respondent's that you think you need to return?",
				info: "The court’s final decisions do not affect who owns the property, only who gets to use or occupy it."
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
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "yes"
				label: "Protection requested",
				question: "What things belonging to the Respondent are in your possession and need to be returned?",
				info: "The court’s final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {
					compName: "CheckboxInput",
					compProps: {
						options: [
							"Clothing",
							"Medicine",
							"Other personal property"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested if "Other personal property" is checked
				label: "Protection requested",
				question: "List the Respondent's properties in your possession.",
				info: "The court’s final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {
					compName: "LongTextInput",
					compProps: {
						options: [
							"List the Respondent's properties in your possession."
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{
				label: "Protection requested",
				question: "Where should any property transfer between you and the Respondent's happen?",
				info: "The court’s final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {//abnormalinput: need notes explaining each option
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"At the residence <br />(Select this if you agree to let the abuser enter the residence once to get their things)",//abnormalinput: need residence address that has been entered previously to pop up
							"At another location"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},	
		{
			question:{//nested under "At another location."
				label: "Protection requested",
				question: "What is the state where you want the transfer to happen?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Illinois"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "At another location."
				label: "Protection requested",
				question: "What is the city where you want the transfer to happen?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "Chicago"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "At another location."
				label: "Protection requested",
				question: "What is the address where you want the transfer to happen?",
				info: "Including apartment, suite, or floor #."
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "555 W. Harrison Apt. 1234"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "At another location."
				label: "Protection requested",
				question: "What is the ZIP code where you want the transfer to happen?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "60607"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "For this property transfer, who do you want the Respondent to return the property to?",
				info: null
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Me",
							"Someone else"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},
		{
			question:{//nested under "Someone else"
				label: "Protection requested",
				question: "What is the name of the person you want the Respondent to return the properties to?",
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
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "Who do you want to supervise the transfer of personal property?",
				info: "The court’s final decisions do not affect who owns the property, only who gets to use or occupy it."
			},
			inputs:[
				{component: {
					compName: "MultipleChoiceInput",
					compProps: {
						options: [
							"Law enforcement officials<br />It may be safer if the transfer is in the presence of a law enforcement officer.",
							"A third person"
						]
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
		},
		{
			question:{//nested under "Law enforcement officials"
				label: "Protection requested",
				question: "What is the name of the law enforcement agency you want present at the property transfer?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: " "
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{//nested under "A third person"
				label: "Protection requested",
				question: "What is the name of the person who will supervise the transfer of property?",
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
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "On which date do you want the transfer to take place?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "mm/dd/yyyy"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
		},
		{
			question:{
				label: "Protection requested",
				question: "At what time do you want the transfer to take place?",
				info: null
			},
			inputs:[{
				component: {
					compName: "SingleTextInput",
					compProps: {
						controlId: "blah",
						placeHolder: "5:00 pm"
					},
					compChildren: {}
				}
			}],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Property to protect, pets and cellphones",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		/// Remedies regarding children
		/// (This part appears only if the victim has children younger than 18 with the Respondent.)
		{
			question:{
				label: "Remedies regarding children",
				question: "Remedies regarding children",			
				info: "This section appears because you answered the person who needs protection has children younger than 18 with the Respondent. If this is not the case, come back and change your answer.<br />You need to provide information about the children.<br />Some of the protections available are return of the children, restriction against hiding or removing the children from Illinois, and specified parenting time."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
		},
/// Parenting Time
		{
			question:{ 
				label: "Parenting Time",
				question: "How do you want the court to handle parenting time?",
				info: "\"Deny\" means Respondent can have no visits at all.\"Restrict\" means visits with some rules."
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
			],
			extraInfo: ""
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
			],
	 	extraInfo: "<br />What's Harassment? <br />\ Harassment is an unnecessary conduct which causes you emotional distress.  The following types of conducts are presumed to cause emotional distress: <br /> - creating a disturbance at your place of work or school; <br /> - repeatedly telephoning your place of employment, house or school; <br /> - repeatedly following you in a public place or places; <br /> - repeatedly keeping you under surveillance by staying outside your home, school, place of work, vehicle or another place you are in or by looking  through your windows; <br /> - threatening physical force, confinement or restraint on one or more occasions; or <br /> - improperly concealing or threatening to conceal your child from you, removing  your child outside State limits or from your physical care, or making a threat after actually or attempting to improperly remove your child.<br />Who is a Family or Household Member? <br />\ Persons related by blood or  marriage, such as: parents, step-parents or grandparents; children or stepchildren <br /> Persons who have or allegedly have a child in common, even if you have never been married nor lived together <br /> People you date or engage with (or you used to do so), which does not include your casual acquaintanceship in business or daily life <br /> Persons who live with you now or have lived with you before <br /> Persons who share or allegedly share a blood relationship through a child <br /> For a person with disabilities, their personal assistants or caregivers."	
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
			],
		extraInfo: "<br />What's Harassment? <br />\ Harassment is an unnecessary conduct which causes you emotional distress.  The following types of conducts are presumed to cause emotional distress: <br /> - creating a disturbance at your place of work or school; <br /> - repeatedly telephoning your place of employment, house or school; <br /> - repeatedly following you in a public place or places; <br /> - repeatedly keeping you under surveillance by staying outside your home, school, place of work, vehicle or another place you are in or by looking  through your windows; <br /> - threatening physical force, confinement or restraint on one or more occasions; or <br /> - improperly concealing or threatening to conceal your child from you, removing  your child outside State limits or from your physical care, or making a threat after actually or attempting to improperly remove your child.<br />Who is a Family or Household Member? <br />\ Persons related by blood or  marriage, such as: parents, step-parents or grandparents; children or stepchildren <br /> Persons who have or allegedly have a child in common, even if you have never been married nor lived together <br /> People you date or engage with (or you used to do so), which does not include your casual acquaintanceship in business or daily life <br /> Persons who live with you now or have lived with you before <br /> Persons who share or allegedly share a blood relationship through a child <br /> For a person with disabilities, their personal assistants or caregivers."	
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
		},
	// Parenting Time Location Details 
	// This part appears only if the victim has children younger than 18 with the Respondent.)
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
			],
			extraInfo: ""
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
						placeHolder: "Location"
					},
					compChildren: {}
				}},
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
		},
		// Parenting Time Holiday Schedule
		// (This part appears only if the victim has children younger than 18 with the Respondent.)
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Remedies regarding children",
				question: "Another section finished!",			
				info: "You are one more step closer to finishing this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		// Firearms Information
		{
			question:{ 
				label: "Firearms Information",
				question: "Firearms Information",
				info: "This section asks for the use of firearms by the Respondent, or his or her threats to do so. This is to know if the Respondent may impose any threat against you, the public, police officers, or himself/herself."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Remedies regarding children",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		// Support and Expenses
		{
			question:{
				label: "Support and Expenses",
				question: "Support and Expenses",			
				info: "For this section, if you want the Respondent to pay support or repay you for expenses that resulted from abuse, you will need to input the amount in this section. <br />To calculate the numbers, you may want to keep the proof of expenses at hand, and bring the proof later to the court. But if you are not sure of the exact number, you can input an estimate here."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		{
			question:{ 
				label: "Support and Expenses",
				question: "Do you want economical support for yourself or a minor child?",
				info: "The court can order (abuser’s name) to pay support or repay you for expenses that resulted from abuse, though only after they received actual notice of the Order of Protection"
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
			],
			extraInfo: ""
		},
		{
			question:{ // If last question was answered Yes
				label: "Support and Expenses",
				question: "Select all the forms of support you want",
				info: "The court can order (abuser’s name) to pay support or repay you for expenses that resulted from abuse, though only after they received actual notice of the Order of Protection"
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
			],
			extraInfo: ""
		},
		{
			question:{ 
				label: "Support and Expenses",
				question: "Do you want the court to order (abuser’s name) to reimburse a shelter providing you temporary housing or counselling?",
				info: "The court can order (abuser’s name) to pay support or repay you for expenses that resulted from abuse, though only after they received actual notice of the Order of Protection"
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
			],
			extraInfo: ""
		},
		{
			question:{ // If last question was yes
				label: "Support and Expenses",
				question: "Enter the amount you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.",
				info: "The court can order (abuser’s name) to pay support or repay you for expenses that resulted from abuse, though only after they received actual notice of the Order of Protection"
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
			],
			extraInfo: ""
		},
		{
			question:{ 
				label: "Support and Expenses",
				question: "Select the following expenses you want (abuser’s name) to pay for, that arose from the abuse, neglect or exploitation?",
				info: "The court can order (abuser’s name) to pay support or repay you for expenses that resulted from abuse, though only after they received actual notice of the Order of Protection"
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
			],
			extraInfo: ""
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
			],
		extraInfo: <div><b>What are medical expenses?</b> <br /> Medical expenses are those expenses paid to physicians and hospitals that you may have incurred for yourself or other protected person in the Order of Protection for seeking medical help for injuries suffered from the Respondent.</div>
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
			],
		extraInfo: <div><b>What are lost earnings?</b><br /> Lost earnings are the wages you lost from not being able to work because of the injuries the Respondent inflicted on you or your children, or because you were forced to change housing to avoid additional confrontation.</div>
		},
		{
			question:{ // If last question was repair or replacement of property
				label: "Support and Expenses",
				question: "Enter the amount you have paid so far in repairing or replacing your damaged, stolen or taken property. If this amount changes you can ask the court to be paid back more at the hearing.",
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
			],
		extraInfo: <div><b>What are the expenses for repairing or replacing property taken or damaged?</b> <br /> Includes any payment you think you deserve because the Respondent took your property or money away from you, or because the Respondent damaged your property, and you have paid for repairs.</div>
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
			],
		extraInfo: <div><b>What expenses are included under moving and travel?</b> <br />Moving and other travel expenses are expenses that you incurred because you had to move yourself, your dependents or children from your home, as well as extra commuting costs you incur from your new living space to your place of work.</div>
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
			],
		extraInfo: <div><b>What are expenses for housing and meals other than for a domestic violence shelter?</b> <br />The amount you paid for housing and meals other than for a domestic violence shelter; including rent or hotels, for you or your dependents, as well as the money you spent for meals while you were away from your home. <br /> Do not include any payment made to domestic violence shelters.</div>
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
			],
		extraInfo: <div><b>What are search and recovery of children expenses?</b> <br /> Search and recovery of children expenses are the money you may have spent for a private investigator to locate your children, as well as any costs you had to expend to recover physical possession of your children.</div>
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Remedies regarding children",
				question: "Another section finished!",			
				info: "You are one more step closer to finish this process! Press \"Next\" to continue."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
		// Miscellaneous Remedies & Case Number  
		{
			question:{
				label: "Miscellaneous Remedies & Case Number",
				question: "Miscellaneous Remedies & Case Number",			
				info: "You are almost finished! <br />In this section, you can ask for other protections you find necessary that have not been touched in previous sections. You also need to provide your Case Number if you have one."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
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
			],
			extraInfo: ""
		},
		{
			question:{
				label: "Miscellaneous Remedies & Case Number",
				question: "You are all set!",			
				info: "You have finished the form. Press \"Next\" to download your completed form."
			},
			inputs:[{
				component: {
					compName: "NoInput",
					compProps: {},
					compChildren: null
				}
			}],
			extraInfo: ""
		},	
		]}

export default data;