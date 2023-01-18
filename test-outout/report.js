$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/jayas/Desktop/Selenium_WorkSpace/FreeCRMBDDFrameWorkJayas/src/main/java/Features/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deal Test",
  "description": "",
  "id": "free-crm-deal-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Add New Deal Data By DataTable",
  "description": "",
  "id": "free-crm-deal-test;add-new-deal-data-by-datatable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "Jayas152",
        "vraj2210"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on the NewDeal",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters for  NewDeal #Title Company Amount Probability Commission",
  "rows": [
    {
      "cells": [
        "BDD Deal",
        "Paag",
        "65000",
        "95",
        "15"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user verify Deal",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 8370953166,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 9046583,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_enters_username_and_password1(DataTable)"
});
formatter.result({
  "duration": 92797959,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9870766333,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 3015854667,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_click_on_the_NewDeal()"
});
formatter.result({
  "duration": 4336673708,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_enters_for_NewDeal_Title_Company_Amount_Probability_Commission(DataTable)"
});
formatter.result({
  "duration": 89121583,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_click_on_save_button()"
});
formatter.result({
  "duration": 4647665542,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_verify_Deal()"
});
formatter.result({
  "duration": 27803667,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 466873542,
  "status": "passed"
});
});