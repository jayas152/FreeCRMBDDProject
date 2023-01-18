Feature: Free CRM Deal Test
Scenario: Add New Deal Data By DataTable

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
| Jayas152 | vraj2210 |
Then user clicks on login button
Then user is on home page
Then user click on the NewDeal
Then user enters for  NewDeal #Title Company Amount Probability Commission 
| BDD Deal | Paag | 65000 | 95 | 15 |
Then user click on save button
Then user verify Deal
Then Close the browser