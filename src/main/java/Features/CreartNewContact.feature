Feature: Free CRM Add New Contact


#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "Jayas152" and "vraj2210"
#Then user clicks on login button
#Then user is on home page
#Then Close the browser


#Scenario: Add New Contact Scenario 
#Given user is already on homepage
#When title is CRMPRO
#Then userName is Jayas152
#Then hover on Contacts and Click on New Contacts
#Then type "FirstName", "LastName", "Company"
#Then clickk on save button
#Then verifing New contact
#Then close browser

Scenario Outline: Free CRM Add New Contact Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user click on the NewContact
Then user enters for  NewContact "<FirstName>" "<LastName>" "<Company>" and "<Country>"
Then user click on save button
Then user verify Contact
Then Close the browser


#Examples: 
#	| username | password |
#	| Jayas152 | vraj2210 |
#	| Vraj2210 | Jayas152 |
	
Examples:
	| username | password |FirstName|LastName|Company|Country|
	| Jayas152 | vraj2210 |Anil			|Kumble	|Sahara |India|
	| Jayas152 | vraj2210 |Anushka	|Kohli	|Bcci	|Canada|
	| Jayas152 | vraj2210 |Rohit		|Sharma	|Icci	|Usa|
	| Jayas152 | vraj2210 |Virat		|Kohli	|Bcci	|Canada|
	| Jayas152 | vraj2210 |Surya		|Yadav	|Acci	|Austrialia|
	



