import pdfrw
from datetime import date
import json
import sys

TEMPLATE_PATH = './files/Petition_for_Order_of_Protection.pdf'
OUTPUT_PATH = './files/Petition_for_Order_of_Protection_filled.pdf'

ANNOT_KEY = '/Annots'
ANNOT_FIELD_KEY = '/T'
ANNOT_VAL_KEY = '/V'
ANNOT_RECT_KEY = '/Rect'
SUBTYPE_KEY = '/Subtype'
WIDGET_SUBTYPE_KEY = '/Widget'


def fill_pdf(input_pdf_path, output_pdf_path, data_dict):
    template_pdf = pdfrw.PdfReader(input_pdf_path)
    for page in template_pdf.pages:
        annotations = page[ANNOT_KEY]
        for annotation in annotations:
            if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
                if annotation[ANNOT_FIELD_KEY]:
                    key = annotation[ANNOT_FIELD_KEY][1:-1]
                    if key in data_dict.keys():
                        if type(data_dict[key]) == bool:
                            if data_dict[key] == True:
                                annotation.update(pdfrw.PdfDict(
                                    AS=pdfrw.PdfName('Yes')))
                        else:
                            annotation.update(
                                pdfrw.PdfDict(V='{}'.format(data_dict[key]))
                            )
                            annotation.update(pdfrw.PdfDict(AP=''))
    pdfrw.PdfWriter().write(output_pdf_path, template_pdf)


def fill_starter_checklist(data):
    today = date.today()
    data_dict = {
        # 'Counties1': data['What is the name of Court advocate / helper?'],
        'Petitioner': data['Who are you requesting an Order of Protection for?'],
        'Petitioner': 'Not real Name',
        'People to be protected by this order1': True,
        'People to be protected by this order2': True,
        'Petitioner': 'Fake Name Tommy',
        'People to be protected by this order1': True,
        'People to be protected by this order2': True,
        "Petitioner's Minor Children with Respondent- Line 1": data['What is the name of the minor child you had with the person you want to protect with this order of protection?'],
        "People to be protected by this order3": True,
        "Petitioner's Minor Children Not Related - Line 1": data['What is the name of the minor children?'],
        'People to be protected by this order3': True,
        'People to be protected by this order4':True,
        'Dependent Adult - Line 1':data['What is the name of the dependent adult?'],
        'People to be protected by this order5':True,
        'High Risk Adult - Line 1':'What is the name of the high risk adult with disabilities?',  
        'People to be protected by this order6': True,
        'Other Household Members - Line 1' : data['What are the name of other household members?'], 
        # 'Other Household Members - Line 2'  
        # 'Other Household Members - Line 3'  
        # 'Other Household Members - Line 4'  
        # 'Respondent'  
        'Type of Order of Protection Requested':data['What is the type of this case?'], 
        # 'Background Information - Checkbox'  
        # '1a - Address Line':data['What is the Street address of Court advocate '/' helper?'], 
        '1a - Email Address':data['Enter your email address.'],
        # '1b - Address Line'  
        # '1b - Email Address'  
        '2a - Respondent Date of Birth': data['What is your birthdate?'],  
        # '2b - Respondent Home Address'  
        # '2c - Respondent's Employer and Address'  
        # '3a - Boyfriend/Girlfriend (Including ex)'  
        # '3a - Have Children with Respondent (never married to Respondent)'  
        # '3a - Parent'  
        # '3a - Other – Petitioner not Related to Respondent'  
        # '3a - Petitioner with Disability'  
        # '3a - Grandparent'  
        # '3a - Prospective or Adoptive Child has Family or Household Relationship with Respondent'  
        # '3a - Step-Parent'  
        # '3a - Spouse'  
        # '3a - Sharing or Shared Home'  
        # '3a - Brother or Sister'  
        # '3a - In-Law'  
        # '3a - Personal Assistant of Petitioner'  
        # '3a - Step-Child'  
        # '3a - Foster Child has Family or Household Relationship with Respondent'  
        # '3a - Ex-Spouse'  
        # '3a - Child'  
        # '3a - Other Family Member'  
        # '3a - Personal Caregiver to Disabled Petitioner'  
        # '3a - Grandchild'  
        # '3a - Step-Brother or Step-Sister'  
        # '3a - Legally Appointed Guardian or Custodian of a Child who has a Family or Household Relationship with Respondent'  
        # '4 - Checkboxes'  
        # '4 - Names of People Involved1'  
        # '4 - State and County1':data["What is the name of Court advocate '/' helper?"],
        '4 - Year1':data['In which year was this prior Order of Protection entered'],
        '4 - Names of People Involved2': data['Enter the name of the person who filed the for the prior Order of Protection.'], 
        # '4 - State and County2':data["What is the name of Court advocate '/' helper?"],
        # '4 - Year2'  
        # '4 - I have listed additional case information on the Additional Case Information form'  
        # '5 - Checkboxes'  
        # '5 - Type of Case 1'  
        # '5 - State and County1'  
        # '5 - Year1'  
        # '5 - Type of Case 2'  
        # '5 - State and County2'  
        # '5 - Year2'  
        # '5 - I have listed additional case information on the Additional Case Information form'  
        # '6a - Petitioner Resides Here'  
        # '6b - Respondent Resides Here'  
        # '6c - The abuse happened here'  
        # '6d - Petitioner fled here to avoid abuse'  
        # '7 - Date'  
        # '7 - Time'  
        '7 - Order of Protection Reason - Line 1': data['Reasons for the protective order'],
        # '7 - Order of Protection Reason - Line 2'  
        # '7 - Order of Protection Reason - Line 3'  
        # '7 - Order of Protection Reason - Line 4'  
        # '7 - Order of Protection Reason - Line 5'  
        # '7 - Order of Protection Reason - Line 6'  
        # '7 - Order of Protection Reason - Line 7'  
        # '7 - Order of Protection Reason - Line 8'  
        # '7 - Order of Protection Reason - Line 9'  
        # '7 - Order of Protection Reason - Line 10'  
        # '7 - Order of Protection Reason - Line 11'  
        # '7 - Order of Protection Reason - Line 12'  
        # '7 - Order of Protection Reason - Line 13'  
        # '7b - Date'  
        # '7b - Time'  
        # '7b - Order of Protection Reason - Line 1'  
        # '7b - Order of Protection Reason - Line 2'  
        # '7b - Order of Protection Reason - Line 3'  
        # '7b - Order of Protection Reason - Line 4'  
        # '7b - Order of Protection Reason - Line 5'  
        # '7b - Order of Protection Reason - Line 6'  
        # '7b - Order of Protection Reason - Line 7'  
        # '7b - Order of Protection Reason - Line 8'  
        # '7b - Order of Protection Reason - Line 9'  
        # '7b - Order of Protection Reason - Line 10'  
        # '7b - Order of Protection Reason - Line 11'  
        # '7b - Order of Protection Reason - Line 12'  
        # '7b - Order of Protection Reason - Line 13'  
        # '7c - Date'  
        # '7c - Time'  
        # '7c - Order of Protection Reason - Line 1'  
        # '7c - Order of Protection Reason - Line 2'  
        # '7c - Order of Protection Reason - Line 3'  
        # '7c - Order of Protection Reason - Line 4'  
        # '7c - Order of Protection Reason - Line 5'  
        # '7c - Order of Protection Reason - Line 6'  
        # '7c - Order of Protection Reason - Line 7'  
        # '7c - Order of Protection Reason - Line 8'  
        # '7c - Order of Protection Reason - Line 9'  
        # '7c - Order of Protection Reason - Line 10'  
        # '7c - Order of Protection Reason - Line 11'  
        # '7c - Order of Protection Reason - Line 12'  
        # '7c - Order of Protection Reason - Line 13'  
        # '7d - Date'  
        # '7d - Time'  
        # '7d - Order of Protection Reason - Line 1'  
        # '7d - Order of Protection Reason - Line 2'  
        # '7d - Order of Protection Reason - Line 3'  
        # '7d - Order of Protection Reason - Line 4'  
        # '7d - Order of Protection Reason - Line 5'  
        # '7d - Order of Protection Reason - Line 6'  
        # '7d - Order of Protection Reason - Line 7'  
        # '7d - Order of Protection Reason - Line 8'  
        # '7d - Order of Protection Reason - Line 9'  
        # '7d - Order of Protection Reason - Line 10'  
        # '7d - Order of Protection Reason - Line 11'  
        # '7d - Order of Protection Reason - Line 12'  
        # 'I have attached the Additional Incidents of Abuse form or my own extra pages'  
        # 'Part A - No Abuse'  
        # 'Part A - 1 - Harassment'  
        # 'Part A - 1 - Physical Abuse'  
        # 'Part A - 1 - Stalking'  
        # 'Part A - 1 - Willful Deprivation'  
        # 'Part A - 1 - Intimidation of a Dependent'  
        # 'Part A - 1 - Exploitation of a High Risk Adult with Disabilities'  
        # 'Part A - 1 - Neglect of a High Risk Adult with Disabilities'  
        # 'Part A - 1 - Interference with Personal Liberty'  
        # 'Part A - No Contact with Pettioner'  
        # 'Part 1 - 2 - Not have any communication with Petitioner'  
        # 'Part A - 2 - Stay away from Petitioner at all times'  
        # 'Part A - Stay Away From Certain Places'  
        '3 - Residence Located At': data['In which state is the residence you want the Respondent to keep away from?'],
        '3 - Residence Located at - Address':data['What is the address of the residence you want the Respondent to keep away from?'],  
        '3 - Places of Employment':data['In which state is the place of employment you want the Respondent to keep away from?'],
        # '3 - Petitioner Employment - Line 1'  
        # '3 - Petitioner Employment - Line 2'  
        # '3 - Schools, kindergartens, or daycare centers of Petitioner, located at:'  
        # '3 - Schools, kindergartens, or daycare centers of Petitioner, located at - Line 1'  
        # '3 - Schools, kindergartens, or daycare centers of Petitioner, located at - Line 2'  
        # '3 - Other Locations'  
        # '3 - Other Locations - Line 1'  
        # '3 - Other Locations - Line 2'  
        # 'Part B - Residence of Petitioner'  
        # 'Part B - 1A - Petitioner be granted exclusive possession of the residence and Respondent be ordered not to be or stay at this residence located at:'  
        # 'Part B - 1 A Checkbox'  
        # 'Part B - Residence of Petitioner (check only a, b, or c)'  
        # 'Part B - Possession of Personal Property'  
        'Part B - 2a - Petitioner be awarded possession of  this property:':data['In which state is the residence that you want exclusive possession?'],
        'Part B - 2A - Petitioner be awarded possession of  this property - Line 1' : data['In which city is the residence that you want exclusive possession?'], 
        'Part B - 2A - Petitioner be awarded possession of  this property - Line 2' :data['What is the ZIP code of the residence that you want exclusive possession?'],
        'Part B - 2A - Petitioner be awarded possession of  this property - Line 3': data['What is the address of the residence you want exclusive possession?'],  
        'Part B - 2b - Respondent be ordered to give Petitioner this property:' :'Why should the Respondent be ordered to stay away from the residence?', 
        'Part B - 2B - Respondent be ordered to give Petitioner this property (Line 1)': data['List the personal properties you want to protect from the Respondent.'], 
        # 'Part B - 2B - Respondent be ordered to give Petitioner this property (Line 2)'  
        # 'Part B - 2B - Respondent be ordered to give Petitioner this property (Line 3)'  
        # 'Part B - 2b - a - Petitioner, but not Respondent, owns the property'  
        # ' Not having the property would be harder on Petitioner'  
        # ' Sharing it would put Petitioner at risk for abuse, or is not practical'  
        # 'Part B - 2b - b - Petitioner and Respondent both own the property'  
        'Part B - 2b - c - The parties are married and a divorce case has/has not been filed' : True if data['Has the divorce been filed?'] == "true" else False, 
        # 'Part B - 2c - a - The parties are married and a divorce case has/has not been filed'  
        # 'Part B - 2c - Respondent be awarded possession of:'  
        # '2c1 - Clothing checkbox'  
        # '2c2 - Medicine checkbox'  
        # '2c3 - Other Personal Property checkbox'  
        # 'Part B - 2C - Other Personal Property - Line 1'  
        # 'Part B - 2C - Other Personal Property - Line 2'  
        # 'Part B - 2d - Respondent be given the right to enter the residence once to retrieve their property, but only in the presence of law enforcement or another person'  
        # 'Part B - Transfer of Personal Property'  
        # 'Part B - 3 - Property to be transferred at this address'  
        # 'Part B - 3 - Name of law enforcement agency'  
        # 'Part B - 3 - Name of Another Person'  
        # '3 - Transfer Date'  
        # 'Part B - 3 - Property to be transferred in the presence of (check one)'  
        # '3 - Transfer Time'  
        # 'Part B - Restrictions on Property'  
        'Part B - 4 - Respondent be ordered not to take, damage, or otherwise dispose of this property: (Line 1)':data['Enter the amount you have paid so far in repairing or replacing your damaged, stolen or taken property. If this amount changes you can ask the court to be paid back more at the hearing.'], 
        # 'Part B - 4 - Respondent be ordered not to take, damage, or otherwise dispose of this property: (Line 2)'  
        # 'Part B - 4 - Respondent be ordered not to take, damage, or otherwise dispose of this property: (Line 3)'  
        # 'Part B - Because Petitioner, but not Respondent, owns the property'  
        # 'Part B - Because Petitioner and Respondent both own the property'  
        # 'Part B - Parties are married and a divorce case has/has not been filed'  
        # 'Part B - 4c - The parties are married and a divorce case has/has not been filed'  
        # 'Part B - Restrictions on Resources'  
        # 'Part B - Possession of Animals'  
        'Part B - 6 - Name and description of each animal':data['Do you want the court to give you possession of all family pets or other animals?'],  
        # 'Part B - Telephone Services'  
        # 'Part B - 7a - Name of Provider'  
        # 'Part B - 7b - Name of Account Holder'  
        # 'Part B - 7c - Petitioner's Phone Number':data['Do you know (abuser's name) billing phone number for the account?'],  
        # 'Part B - 7d - Petitioner's Phone Number'  
        # 'Part B - 7e - Petitioner's Phone Number'  
        # 'Part C - School Restrictions'  
        # 'Part C - 1 - Respondent be ordered checkbox'  
        # 'Part C - 1 - School Name - Line 1'  
        # 'Part C - 1 - School Name'  
        # 'Part C - 1 - School Name - Line 3'  
        # 'Part D - Firearms'  
        # 'Part D - 1a - Has a history of violence'  
        # 'Part D - 1b - Has a history of possession or use of firearms':data['Does (abuser\’s name) own or have access to firearms? (a court can order an abuser to turn over firearms, but only after they have received actual notice of the Order of Protection case.'], 
        # 'Part D - 1c - Carries a firearm on their person or in a vehicle'  
        # 'Part D - Make/Model of Vehicle'  
        # 'Part D - 1d - May be a threat to the safety of the public or police officer'  
        'Part D - 1e - Is now or has been suicidal':data['Would you consider the Respondent to be a suicide risk?'],  
        # 'Part E - Temporary Support'  
        'Part E - 1a - Respondent pay temporary child support':data['Do you want the court to give you temporary significant decision-making responsibility for your children?'],  
        # 'Part E - 1b - Respondent pay temporary maintenance':data['Do you want the court to order (abuser\’s name) to reimburse a shelter providing you temporary housing or counselling?'],  
        # 'Part E - Payment for Losses because of abuse'  
        # 'Part E - 2a - Respondent be ordered to pay Petitioner for losses caused by abuse, neglect, or exploitation, including:'  
        'Part E - 2b - Medical Expenses':data['Enter the amount of the medical expenses have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.'],  
        # 'Part E - 2b - Medical Expenses Amount'  
        'Part E - 2c - Lost Earnings':data['Enter the amount of the lost earnings you have lost so far. If this amount changes you can ask the court to be paid back more at the hearing.'],  
        # 'Part E - 2c - Lost Earnings Amount'  
        'Part E - 2d - Repair or replace property damaged or taken' :data['Enter the amount you have paid so far in repairing or replacing your damaged, stolen or taken property. If this amount changes you can ask the court to be paid back more at the hearing.'], 
        # 'Part E - 2d - Repair or replace property damaged or taken amount'  
        'Part E - 2e - Moving and other travel expenses':data['Enter the amount of the moving or travel expenses you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.'],  
        # 'Part E - 2e - Moving and other travel expenses amount'  
        # 'Part E - 2f - Reasonable expenses for housing other than a domestic violence shelter':data['Do you want the court to order (abuser\’s name) to reimburse a shelter providing you temporary housing or counselling?'], 
        # 'Part E - 2f - Reasonable expenses for housing other than a domestic violence shelter amount'  
        # 'Part E - 2g - Expenses for search and recovery of children'  
        # 'Part E - 2g - Expenses for search and recovery of children amount'  
        # 'Part E - 2h - Other'  
        # 'Part E - Other Losses'  
        # 'Part E - 2h - Other Amount'  
        # 'Part B - 3 - Shelter Reimbursement'  
        # 'Part E - 3 - Shelter Reimbursement Amount'  
        # 'Part F - Respondent be ordered to participate in the following (check all that apply):'  
        # 'Part F - 1A - Domestic violence intervention'  
        # 'Part F - 1B - An alcohol and substance abuse evaluation and to successfully complete all recommendations'  
        # 'Part F - 1C - A mental health evaluation and to successfully complete all recommendations'  
        # 'Part F - 1D - Other'  
        # 'Part F - Other (Please Specify) - Line 1'  
        # 'Part F - Other (Please Specify) - Line 2'  
        # 'Part F - Other (Please Specify) - Line 3'  
        # 'Part F - Other (Please Specify) - Line 4'  
        'Part G - 1 - Respondent and Petitioner are both the parents of these minor children' :data['What is the name of the minor child you had with the person you want to protect with this order of protection?'], 
        # 'Part G - 1 - Child's Name 1':data['What is the name of the minor child you had with the person you want to protect with this order of protection?'], 
        'Part G - 1 - Age 1':data['What is the birthdate of the minor child you had with the person you want to protect with this order of protection?'],
        # 'Part G - 1 - State 1'  
        # 'Part G - 1 - Child's Name 2'  
        'Part G - 1 - Age 2':data['What is the birthdate of the minor child you had with the person you want to protect with this order of protection?'],
        # 'Part G - 1 - State 2'  
        # 'Part G - 1 - Child's Name 3'  
        # 'Part G - 1 - Age 3'  
        # 'Part G - 1 - State 3'  
        # 'Part G - 1 - Child's Name 4'  
        # 'Part G - 1 - Age 4'  
        # 'Part G - 1 - State 4'  
        # 'Part G - 2 - The primary caretaker of the minor children is (check one):'  
        # 'Part G - 1 - Child 1 Checkbox'  
        # 'Part G - 1 - Child 2 Checkbox'  
        # 'Part G - 1 - Child 3 Checkbox'  
        # 'Part G - 1 - Child 4 Checkbox'  
        # 'Part G - 2 - Other Person's Name'  
        # 'Part G - 2 - Other Person's Address'  
        # 'Part G - 3 - Petitioner requests the following (check all that apply):'  
        'Part G - 3 - A - Petitioner be granted physical care and possession of the minor children':data['Do you currently have physical care and possession of all the minor children?'],  
        # 'Part G - 3 - B - Respondent be ordered to return the minor children to the physical care of Petitioner or other person'  
        # 'Part G - 3 - C - Respondent be ordered to not remove the minor children from the physical care of Petitioner or from a school or childcare provider'  
        # 'Part G - 3 - C - I have given the name and location of the school or childcare provider on the Confidential Name & Location of the School or Childcare Provider form'  
        # 'Part G - 4 - Temporary Significant Decision-Making Responsibility (formerly custody) (available ONLY after actual notice to Respondent) (check all that apply)'  
        # 'Part G - 4 - A - The children of the parties were born before or during the marriage, or within 300 days of termination of the marriage'  
        # 'Part G - 4 - B - The parties are NOT married and paternity HAS NOT been established'  
        # 'Part G - 4 - C - The parties are NOT married but paternity HAS been established by one or more of the following'  
        # 'Part G - 2 - Checkbox'  
        # 'Part G - 4 - 4 - Other - Line 2'  
        # 'Part G - 4 - 4 - Other - Line 3'  
        # 'Part G - 5 - Parenting time with Minor Children (formerly visitation) (check a, b, or c)'  
        # '5 - A, B, and C checkboxes'  
        'Part G - 5 - AA - Abuse or endanger the children during parenting time':data['How do you want the court to handle parenting time?'],
        # 'Part G - 5 - AB - Use parenting time to abuse or harass Petitioner, Petitioner's family, or household members'  
        # 'Part G - 5 - AC - Improperly hide or detain the children'  
        # 'Part G - 5 - AD - Act in a way that is not in the best interest of the children'  
        # 'Part G - 5 B1/B2 checkboxes'  
        # 'Part G - 5 - B - Every week days from time to time'  
        # 'Part G - 5 - B2 - Days'  
        # 'Part G - 5 - B2 - From Time'  
        # 'Part G - 5 - B2 - To Time'  
        # 'Part G - 5 - B - 2a - From/To Times1'  
        # 'Part G - 5 - B - 2a - From Time1'  
        # 'Part G - 5 - B - Each Weekend/Every Other Weekend'  
        # 'Part G - 5 - B - 2a - To Time1'  
        # 'Part G - 5 - B - 2a - From/To Times2'  
        # 'Part G - 5 - B - 2a - From Time2'  
        # 'Part G - 5 - B - 2a - To Time2'  
        # 'Part G - 5 - B - 2a - From/To Times3'  
        # 'Part G - 5 - B - 2a - From Time3'  
        # 'Part G - 5 - B - 2a - To Time3'  
        # 'Part G - 5 - B - 2a - From/To Times4'  
        # 'Part G - 5 - B - 2a - From Time4'  
        # 'Part G - 5 - B - 2a - To Time4'  
        # 'Part G - 5 - B - 2a - From/To Times5'  
        # 'Part G - 5 - B - 2a - From Time5'  
        # 'Part G - 5 - B - 2a - To Time5'  
        'Part G - 5 - B - Parenting time is to begin on':data['Enter the start and end of parenting time on holidays'],
        'Part G - 5 - B - Parenting time is to begin on (Date)':data['Enter the start and end of parenting time on holidays'],
        # 'Part G - 5 - B - Holidays From checkbox'  
        # 'Part G - 5 - B2 - Holidays from time'  
        # 'Part G - 5 - B2 - Holidays to time'  
        # 'Part G - 2 - Holidays - Line 1'  
        # 'Part G - 2 - Holidays - Line 2'  
        # 'Part G - 2 - Holidays - Line 3'  
        'Part G - 5 - B - The person responsible for transportation of the children for parenting time is:':data['Enter the name of the adult who is to supervise parenting time'], 
        # 'Part G - 5 - B - The person responsible for transportation of the children for parenting time is: - Line 1':data['Who do you want to supervise (abuser\’s name) parenting time?'],
        # 'Part G - 5 - B - Pickup for parenting time to take place at:'  
        # 'Part G - 5B - Pickup for parenting time to take place at:'  
        # 'Part G - 5B - Return from parenting time to take place at checkbox'  
        # 'Part G - 5B - Return from parenting time to take place at:'  
        # 'Part G - 5B - Parenting time will take place at checkbox'  
        # 'Part G - 5B - Parenting time will take place at:'  
        # 'Part G - 5 - B - Name of Supervisor'  
        # 'Part G - 5B - Parenting time will be supervised by checkbox'  
        # 'Part G - 5B - Parenting time will be supervised at an official supervised visitation center (if available)'  
        # 'Part G - 5B - Respondent to return the children to Petitioner or the person designated by Petitioner immediately at the end of parenting time'  
        # 'Part G - 6 - No Concealment or Removal of Children'  
        # 'Part G - 7 - Appear with Children (check all that apply)'  
        # 'Part G - 7 - A - To prevent abuse, neglect, removal or concealment of the children'  
        # 'Part G - 7 - B - To return the children to Petitioner'  
        # 'Part G - 7 - C - To permit a court-ordered interview or examination of the children or Respondent'  
        # 'Part G - 8 - Children’s Records'  
        # 'Part G - 8 - Petitioner is requesting that Respondent not be allowed to have contact with the minor children'  
        'Part G - 8 - The actual address of Petitioner is not included in this Petition due to the risk of further abuse':data['What is the address of the residence you want the Respondent to keep away from?'], 
        # 'Part G - 8 - It is necessary to prevent abuse or wrongful removal or concealment of the children'  
        # 'Part G - MISCELLANEOUS REMEDIES'  
        # 'Part G - Miscellaneous Remedies Line 1'  
        # 'Part G - Miscellaneous Remedies Line 2'  
        # 'Part G - Miscellaneous Remedies Line 3'  
        # 'Part G - Miscellaneous Remedies Line 4'  
        # 'Part G - Miscellaneous Remedies Line 5'  
        # 'Part G - Miscellaneous Remedies Line 6'  
        # 'Part G - Reason Line 1'  
        # 'Part G - Reason Line 2'  
        # 'Part G - Reason Line 3'  
        # 'Part G - Reason Line 4'  
        # 'Part G - Reason Line 5'  
        # 'Part G - Reason Line 6'  
        # 'Petitioner Signature'  
        'Petitioner Name' :data['Enter the name of the person who filed the for the prior Order of Protection.'],
        'Prepared By': data['Enter the name of the person who filed the for the prior Order of Protection.'], 
        'Street Address':data['Enter an address where you will receive mail related to this Order of Protection.'],
        'City, State, and Zip Code':data['What is the City of the address you chose?'],
        'Phone Number': data['Enter the phone numbers you want separated'], 
        # 'Print Form'  
        # 'Save Form'  
        # 'Reset Form'  
        # 'Part G - 4 - 4 - Other - Line 1'  
        # 'Part G - 3 - School/Daycare Provider'  

    }

    return fill_pdf(TEMPLATE_PATH, OUTPUT_PATH, data_dict)


with open('results.json') as f:
  results = json.load(f)

# print(results)



def formData(data):
    data = results["results"]
    for i in data:
        if i["question"] in starter_checklist.keys():
            starter_checklist["question"] = i["result"]
    return starter_checklist
  
   
starter_checklist = {
    
    "Help file for an Order of Protection" : " ",
    "Petitioner": " ",

    "Respondent": " ",

    "Only Applicable in Cook County, IL": " ",

    "Only use this site if you agree with the following terms": " ",

    "Who are you requesting an Order of Protection for?": " ",

    "Download the PDF by clicking on the button.": " ",

    "What is the name of Court advocate '/' helper?": " ",

    "Who are you requesting an Order of Protection for?": " ",

    "Download the PDF by clicking on the button.": " ",

    "What is the name of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "What is the Street address of Court advocate '/' helper?": " ",

    "What is the ZIP code of Court advocate '/' helper?": " ",

    "What is the phone number of Court advocate '/' helper?": " ",

    "That's all the information about advocate '/' helper we need to know.": " ",

    "Qualification questions": " ",

    "Why are you filing for this Order of Protection in Cook County?": " ",

    "Why are you filing for this Order of Protection in Cook County?": " ",

    "How is your relationship with the Respondent?": " ",

    "Continue to select your relationship with the Respondent.": " ",

    "Help file for an Order of Protection": " ",

    "Petitioner": " ",

    "Respondent": " ",

    "Only Applicable in Cook County, IL": " ",

    "Only use this site if you agree with the following terms": " ",

    "Who are you requesting an Order of Protection for?": " ",

    "Download the PDF by clicking on the button.": " ",

    "What is the name of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "What is the Street address of Court advocate '/' helper?": " ",

    "What is the ZIP code of Court advocate '/' helper?": " ",

    "What is the phone number of Court advocate '/' helper?": " ",

    "That's all the information about advocate '/' helper we need to know.": " ",

    "Qualification questions": " ",

    "Help file for an Order of Protection": " ",

    "Petitioner": " ",

    "Respondent": " ",

    "Only Applicable in Cook County, IL": " ",

    "Only use this site if you agree with the following terms": " ",

    "Who are you requesting an Order of Protection for?": " ",

    "Help file for an Order of Protection": " ",

    "Petitioner": " ",

    "Respondent": " ",

    "Only Applicable in Cook County, IL": " ",

    "Only use this site if you agree with the following terms": " ",

    "Who are you requesting an Order of Protection for?": " ",

    "Download the PDF by clicking on the button.": " ",

    "What is the name of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",
    "What is the City of Court advocate '/' helper?": " ",
    "What is the Street address of Court advocate '/' helper?": " ",

    "What is the ZIP code of Court advocate '/' helper?": " ",

    "What is the phone number of Court advocate '/' helper?": " ",

    "That's all the information about advocate '/' helper we need to know.": " ",

    "Qualification questions": " ",

    "Only use this site if you agree with the following terms": " ",

    "Who are you requesting an Order of Protection for?" : " ",

    "Download the PDF by clicking on the button.": " ",

    "What is the name of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "Help file for an Order of Protection": " ",

    "Petitioner": " ",

    "Respondent": " ",

    "Only Applicable in Cook County, IL": " ",

    "Only use this site if you agree with the following terms": " ",

    "Who are you requesting an Order of Protection for?": " ",

    "What is the name of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "What is the City of Court advocate '/' helper?": " ",

    "What is the Street address of Court advocate '/' helper?": " ",

    "What is the ZIP code of Court advocate '/' helper?": " ",

    "What is the phone number of Court advocate '/' helper?": " ",

    "That's all the information about advocate '/' helper we need to know.": " ",

    "Qualification questions": " ",

    "Why are you filing for this Order of Protection in Cook County?": " ",


    "How is your relationship with the Respondent?": " ",

    "Continue to select your relationship with the Respondent.": " ",

    "You seem not qualified for Order of Protection": " ",

    "What is your name?": " ",

    "What is your birthdate?": " ",

    "Which type of Order of Protection are you requesting?": " ",

    "Another section finished!": " ",

    "Address, phone and email of solicitor": " ",

    "Do you want to hide your real address, and use a different address for the Order of Protection?": " ",

    "Enter an address where you will receive mail related to this Order of Protection.": " ",

    "What is your real address?": " ",

    "What is the City of the address you chose?": " ",

    "What is the State of the address you chose?": " ",

    "What is the ZIP code of the address you chose?": " ",

    "What is your phone number?": " ",

    "Would you like to receive documents in this case by email?": " ",

    "Enter your email address.": " ",

    "Another section finished!": " ",

    "Protected People": " ",

    "Do you want to protect yourself with this Order of Protection?": " ",

    "Do you want to protect your minor children (under 18) that you had with the Respondent with this Order of Protection?": " ",

    "How many minor children did you have with the person named on this Order of Protection?": " ",

    "What is the name of the minor child you had with the person you want to protect with this order of protection?": " ",

    "What is the birthdate of the minor child you had with the person you want to protect with this order of protection?": " ",

    "Which state does this minor child currently live in?": " ",

    "Do you want the Order of Protection to protect this child?": " ",

    "Do you want to protect your minor children (under 18) who is not related to the Respondent?": " ",

    "What is the name of the minor children?": " ",

    "Do you want to protect any dependent adult?": " ",

    "What is the name of the dependent adult?": " ",

    "Do you want to protect any high risk adult with disabilities?": " ",

    "What is the name of the high risk adult with disabilities?": " ",

    "Do you want to protect any other household members?": " ",

    "What are the name of other household members?": " ",

    # "Another section finished!": " ": " ",

    "Person you want protection from": " ",

    "What is the name of the Respondent?": " ",

    "What is the birthdate of the Respondent?": " ",

    "What is the gender of the Respondent?": " ",

    "What is the race of the Respondent? (Options in Alphabetical Order)": " ",

    "To your best knowledge, which state does the Respondent live in now?": " ",

    "To your best knowledge, which city does the Respondent live in now?": " ",

    "To your best knowledge, where does the Respondent live now?": " ",

    "To your best knowledge, what is the ZIP code of the Respondent home address?": " ",

    "To the best of your knowledge, are they currently employed?": " ",

    "What is the name of the Respondent's employer?": " ",

    "To your best knowledge, which state is the Respondent’s employer in?": " ",

    "To your best knowledge, where is the Respondent's employer?": " ",

    "To your best knowledge, what is the ZIP code of the Respondent's employer?": " ",

    "Enter the work hours of the Respondent for the employer.": " ",

    "Would you consider the Respondent to be armed or dangerous to others?": " ",

    "Would you consider the Respondent to be a suicide risk?": " ",

    "Is there now, has there ever been an Order of Protection in any State and county against the Respondent involving you or other people you want to protect on this order?": " ",

    "How many other Orders of Protection were the Respondent and you or other people you want protected involved in?": " ",

    "Enter the name of the person who filed the for the prior Order of Protection.": " ",

    "Enter the name of the person against whom the prior Order of Protection is filed.": " ",

    "In which county and state was this prior Order of Protection filed?": " ",

    "In which year was this prior Order of Protection entered": " ",

    "Are there now, or have there ever been, any other court cases against the Respondent involving you?": " ",

    "How many court cases of the Respondent that is, or have been, involving you?": " ",

    "What is the type of this case?": " ",

    "In which county and state was this prior court case filed?": " ",

    "In which year was this court case filed": " ",

    "Another section finished!": " ",

    # "Another section finished!": " ": " ",

    "Reasons for the protective order": " ",

    "Suggestion for Writing About Abuse Incidents": " ",

    "Tip: Draft Somewhere Else First, Copy-Paste Here Later": " ",

    "Tip: Start with what happened most recently": " ",

    "When date this incident happen?": " ",

    "At what time did this incident happen?": " ",

    "What did Respondent do to you, and or the other persons for whom you want an Order of Protection?": " ",

    "Do you want to add an older incident?": " ",

    "Another section finished!": " ",

    "Protection requested": " ",

    "Which types of abuse do you want to prevent?": " ",

    "Do you want the court to order the Respondent to not have any communication with you and any other protected persons?": " ",

    "Do you want the court to order the Respondent to stay away from you and any other protected persons at all times?": " ",

    "Do you want the court to prohibit the Respondent from entering or remaining at a residence, while you or a protected person are present?": " ",

    "In which state is the residence you want the Respondent to keep away from?": " ",

    "In which city is the residence you want the Respondent to keep away from?": " ",

    "What is the address of the residence you want the Respondent to keep away from?": " ",


    "What is ZIP code of the residence you want the Respondent to keep away from?": " ",

    "Do you want the court to prohibit the Respondent from entering or remaining at a place of employment, while you or a protected person are present?": " ",

    "What is name of the employer?": " ",

    "In which state is the place of employment you want the Respondent to keep away from?": " ",

    "In which city is the place of employment you want the Respondent to keep away from?": " ",

    "What is the address of the place of employment you want the Respondent to keep away from?": " ",

    "What is ZIP code of the place of employment you want the Respondent to keep away from?": " ",


    "Do you want the court to prohibit the Respondent from entering or remaining at any schools or day-care centers, while you or a protected person are present?": " ",

    "Do you want to hide from the Respondent the name of this school or day-care center?": " ",

    "What is name of the school or day-care center?": " ",

    "In which state is this school or day-care center you want the Respondent to keep away from?": " ",

    "In which city is this school or day-care center you want the Respondent to keep away from?": " ",

    "What is the address of this school or day-care center you want the Respondent to keep away from?": " ",

    "What is ZIP code of this school or day-care center you want the Respondent to keep away from?": " ",

    "Is this a school or a day-care facility?": " ",

    "Select the children who attend this school or day-care center?": " ",

    "Do you want to enter another this school, kindergarten, or day-care center you want the Respondent to keep away from?": " ",

    "Do you want the court to order the Respondent not to remove children from you or a school, babysitter, day-care provider, or any other person caring for the children?": " ",

    "Do you want the court to send a copy of the Order of Protection to each child’s school, kindergarten or day-care center?": " ",

    "Do you want the court to prohibit the Respondent from entering or remaining at other locations, while you or a protected person are present?": " ",

    "What is name of this location?": " ",

    "In which state is this location you want the Respondent to keep away from?": " ",

    "In which city is this location you want the Respondent to keep away from?": " ",

    "What is the address of this location you want the Respondent to keep away from?": " ",

    "What is ZIP code of this location you want the Respondent to keep away from?": " ",

    "Do you want to enter another location you want the Respondent to keep away from?": " ",

    "With regards to your home or where you are staying, which do you want the court to order?": " ",

    "In which state is the residence that you want exclusive possession?": " ",

    "In which city is the residence that you want exclusive possession?": " ",

    "What is the ZIP code of the residence that you want exclusive possession?": " ",

    "What is the address of the residence you want exclusive possession?": " ",

    "Why should the Respondent be ordered to stay away from the residence?": " ",

    "Do you have any personal properties you want to protect from the Respondent?": " ",

    "List the personal properties you want to protect from the Respondent.": " ",

    "Among these personal properties you listed, is there anything that is currently possessed by the Respondent and you want it back?": " ",

    "List all the personal properties you want the Respondent to return to you.": " ",

    "Why do you think the Respondent need to return these personal properties to you.": " ",

    "Has the divorce been filed?": " ",

    "Do you have property of the Respondent's that you think you need to return?": " ",

    "What things belonging to the Respondent are in your possession and need to be returned?": " ",

    "List the Respondent's properties in your possession.": " ",

    "Where should any property transfer between you and the Respondent's happen?": " ",

    "What is the state where you want the transfer to happen?": " ",

    "What is the city where you want the transfer to happen?": " ",

    "What is the address where you want the transfer to happen?": " ",

    "What is the ZIP code where you want the transfer to happen?": " ",

    "For this property transfer, who do you want the Respondent to return the property to?": " ",

    "What is the name of the person you want the Respondent to return the properties to?": " ",

    "Who do you want to supervise the transfer of personal property?": " ",

    "What is the name of the law enforcement agency you want present at the property transfer?": " ",

    "What is the name of the person who will supervise the transfer of property?": " ",

    "On which date do you want the transfer to take place?": " ",

    "At what time do you want the transfer to take place?": " ",

    "Is there any real or personal property that you want to prevent (abuser\’s name) from taking, selling, transferring, concealing, damaging or otherwise disposing of?": " ",

    "List the real or personal property that you want to prevent (abuser\’s name) from taking, selling, transferring, concealing, damaging or otherwise disposing of.": " ",

    "Why should (abuser\’s name) be prevented from disposing of the property?": " ",

    "Has the divorce been filed?": " ",

    "In case the Order of Protection is for an elderly victim. Do you want the abuser to be ordered by the court to stop using their financial resources for their own benefit?": " ",

    "Do you want the court to give you possession of all family pets or other animals?": " ",

    "Do you want the court to order a cell phone provider to separate your account from (abuser\’s name) account? ": " ",

    "What is th ename of the cellphone service provider": " ",

    "Is (abuser\’s name) the cell phone service account holder?": " ",

    "Do you know (abuser's name) billing phone number for the account?": " ",

    "What is (abuser\’s name) billing phone number for this account?": " ",

    "Enter the phone numbers you want separated": " ",

    "Another section finished!": " ",

    "Remedies regarding children": " ",

    "Who is the primary caretaker of the minor children?": " ",

    "Enter the caretaker's information": " ",

    "Do you want the the court to order that (abuser\'s name) cannot remove the children from the state of Illinois?": " ",

    "Do you want the court to give you temporary significant decision-making responsibility for your children?": " ",

    "Do you currently have physical care and possession of all the minor children?": " ",

    "Do you want the court to order (abuser\'s name) to return the children?": " ",


    "To whom do you want the abuser to return the minor children?": " ",

    "Enter the name of the person you want (abuser\'s name) to return the children to": " ",


    "Where should (abuser\'s name) return the children to?": " ",

    "When should (abuser\’s name) return the children?": " ",

    "Enter the date when you would like (abuser\’s name) to transfer the children": " ",

    "What time of day would you like the transfer to occur?": " ",

    "Who should be present when the children are returned?": " ",

    "Select the statement that best describes the status of your children with (abuser\'s name)": " ",

    "How was paternity of the children established?": " ",

    "Please explain": " ",

    "How do you want the court to handle parenting time?": " ",

    "Why do you want the court to deny parenting time? (abuser\’s name) is likely to:": " ",

    "Why do you want the court to restrict parenting time? (abuser\’s name) is likely to:": " ",

    "In order to prevent more abuse, do you want the court to order (abuser\’s name) to not go to your residence to meet the children for parenting time?": " ",

    "How do you want to tell the court what parenting time schedule you want?": " ",

    "Where will parenting time occur?": " ",

    "Who will provide transport to take the children to and from parenting time?": " ",

    "Enter the name of the person providing transport to and from parenting time": " ",

    "Describe a short summary of the parenting time schedule": " ",

    "Where will parenting time take place?": " ",

    # "Who will provide transport to take the children to and from parenting time?": " ",

    "Enter the name of the person providing transport to and from parenting time": " ",

    "Where will (name of the person picking up the children) go to drop off and pick up the children for parenting time?": " ",

    "Enter the name of the pick-up '/' drop-off location for parenting time": " ",

    "Enter the address of the pick-up '/' drop-off location for parenting time": " ",

    "Do you want (abuser\’s name) parenting time to be supervised by another adult?": " ",

    "Who do you want to supervise (abuser\’s name) parenting time?": " ",

    "Enter the name of the adult who is to supervise parenting time": " ",

    "Enter the name of the agency you want to supervise parenting time": " ",

    "What holidays do you want (abuser\’s name) to have parenting time with the children?": " ",

    "Are there other holidays that you want (abuser\’s name) to have parenting time with the children?": " ",

    "Enter the other holidays you want (abuser\'s name) to have parenting time with the children": " ",

    "Enter the start and end of parenting time on holidays": " ",

    "Are there any reasons that you may want to deny (abuser\’s name) to access, inspect, or obtain school, healthcare, or any other records of the minor children in your care? Select all that apply": " ",

    "Another section finished!": " ",

    "Firearms Information": " ",

    "Does (abuser\’s name) own or have access to firearms? (a court can order an abuser to turn over firearms, but only after they have received actual notice of the Order of Protection case.": " ",

    "Has (abuser\’s name) used firearms or threatened to use firearms against you or any other person named in the Order of Protection?": " ",

    "Select the following statements that apply to your case": " ",

    "Select the following statements that apply to (abuser\'s name)": " ",

    "Enter the make and model of (abuser\'s name) car": " ",

    "Another section finished!": " ",

    "Support and Expenses": " ",

    "Do you want economical support for yourself or a minor child?": " ",

    "Select all the forms of support you want": " ",

    "Do you want the court to order (abuser\’s name) to reimburse a shelter providing you temporary housing or counselling?": " ",

    "Enter the amount you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Select the following expenses you want (abuser\’s name) to pay for, that arose from the abuse, neglect or exploitation?": " ",

    "Enter the amount of the medical expenses have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Enter the amount of the lost earnings you have lost so far. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Enter the amount you have paid so far in repairing or replacing your damaged, stolen or taken property. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Enter the amount of the moving or travel expenses you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Enter the amount of the housing and meals expenses, other than for a domestic violence shelter, you have paid so far. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Enter the amount you have incurred in the search and recovery of your children so far. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Enter the amount of any other expense you have incurred so far. If this amount changes you can ask the court to be paid back more at the hearing.": " ",

    "Another section finished!": " ",

    "Miscellaneous Remedies & Case Number": " ",

    "Do you want the court to order (abuser\’s name) to undergo and successfully complete a counselling program?": " ",

    "What kind of counselling, evaluation and treatment do you want (abuser\’s name) to receive?": " ",

    "What other type of counselling, evaluation or treatment do you want (abuser\’s name) to get?": " ",

    "Is there anything else you want the court to order (abuser\’s name) to do or stop doing something that has not been yet asked (This can include for the court to order (abuser\’s name) to delete any sensitive pictures they may have in their possession of you or the persons protected in this order)": " ",

    "Describe the other things you want the court to order (abuser\’s name) to do or stop doing": " ",

    "Explain the reasons why you want the court to order (abuser\’s name) to do or stop doing what you entered above": " ",

    "Do you already have a case number?": " ",

    "Enter your case number": " ",
 
}

if __name__ == '__main__':
    starter_checklist=formData(starter_checklist)
    fill_starter_checklist(starter_checklist)
