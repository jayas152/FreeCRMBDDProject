$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/jayas/Desktop/Selenium_WorkSpace/FreeCRMBDDFrameWorkJayas/src/main/java/Features/CreartNewContact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Add New Contact",
  "description": "",
  "id": "free-crm-add-new-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"Jayas152\" and \"vraj2210\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 11,
      "value": "#Then Close the browser"
    },
    {
      "line": 14,
      "value": "#Scenario: Add New Contact Scenario"
    },
    {
      "line": 15,
      "value": "#Given user is already on homepage"
    },
    {
      "line": 16,
      "value": "#When title is CRMPRO"
    },
    {
      "line": 17,
      "value": "#Then userName is Jayas152"
    },
    {
      "line": 18,
      "value": "#Then hover on Contacts and Click on New Contacts"
    },
    {
      "line": 19,
      "value": "#Then type \"FirstName\", \"LastName\", \"Company\""
    },
    {
      "line": 20,
      "value": "#Then clickk on save button"
    },
    {
      "line": 21,
      "value": "#Then verifing New contact"
    },
    {
      "line": 22,
      "value": "#Then close browser"
    }
  ],
  "line": 24,
  "name": "Free CRM Add New Contact Test Scenario",
  "description": "",
  "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on the NewContact",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user enters for  NewContact \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cCompany\u003e\" and \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user verify Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 38,
      "value": "#Examples:"
    },
    {
      "line": 39,
      "value": "#\t| username | password |"
    },
    {
      "line": 40,
      "value": "#\t| Jayas152 | vraj2210 |"
    },
    {
      "line": 41,
      "value": "#\t| Vraj2210 | Jayas152 |"
    }
  ],
  "line": 43,
  "name": "",
  "description": "",
  "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "FirstName",
        "LastName",
        "Company",
        "Country"
      ],
      "line": 44,
      "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;1"
    },
    {
      "cells": [
        "Jayas152",
        "vraj2210",
        "Anil",
        "Kumble",
        "Sahara",
        "India"
      ],
      "line": 45,
      "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;2"
    },
    {
      "cells": [
        "Jayas152",
        "vraj2210",
        "Anushka",
        "Kohli",
        "Bcci",
        "Canada"
      ],
      "line": 46,
      "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;3"
    },
    {
      "cells": [
        "Jayas152",
        "vraj2210",
        "Rohit",
        "Sharma",
        "Icci",
        "Usa"
      ],
      "line": 47,
      "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;4"
    },
    {
      "cells": [
        "Jayas152",
        "vraj2210",
        "Virat",
        "Kohli",
        "Bcci",
        "Canada"
      ],
      "line": 48,
      "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;5"
    },
    {
      "cells": [
        "Jayas152",
        "vraj2210",
        "Surya",
        "Yadav",
        "Acci",
        "Austrialia"
      ],
      "line": 49,
      "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Free CRM Add New Contact Test Scenario",
  "description": "",
  "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"Jayas152\" and \"vraj2210\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on the NewContact",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user enters for  NewContact \"Anil\" \"Kumble\" \"Sahara\" and \"India\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user verify Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 9321534416,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 9464833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jayas152",
      "offset": 13
    },
    {
      "val": "vraj2210",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 109665041,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9417696750,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 3013166917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_the_NewContact()"
});
formatter.result({
  "duration": 3403322792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anil",
      "offset": 29
    },
    {
      "val": "Kumble",
      "offset": 36
    },
    {
      "val": "Sahara",
      "offset": 45
    },
    {
      "val": "India",
      "offset": 58
    }
  ],
  "location": "LoginStepDefination.user_enters_for_NewContact_and(String,String,String,String)"
});
formatter.result({
  "duration": 79141917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_save_button()"
});
formatter.result({
  "duration": 4175447125,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_verify_Contact()"
});
formatter.result({
  "duration": 33258584,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 516652625,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Free CRM Add New Contact Test Scenario",
  "description": "",
  "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"Jayas152\" and \"vraj2210\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on the NewContact",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user enters for  NewContact \"Anushka\" \"Kohli\" \"Bcci\" and \"Canada\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user verify Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6936987709,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 7742792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jayas152",
      "offset": 13
    },
    {
      "val": "vraj2210",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 76771417,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9262628333,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 3011480250,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_the_NewContact()"
});
formatter.result({
  "duration": 3567001000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anushka",
      "offset": 29
    },
    {
      "val": "Kohli",
      "offset": 39
    },
    {
      "val": "Bcci",
      "offset": 47
    },
    {
      "val": "Canada",
      "offset": 58
    }
  ],
  "location": "LoginStepDefination.user_enters_for_NewContact_and(String,String,String,String)"
});
formatter.result({
  "duration": 81121709,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_save_button()"
});
formatter.result({
  "duration": 4438868125,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_verify_Contact()"
});
formatter.result({
  "duration": 29557166,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 468829083,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Free CRM Add New Contact Test Scenario",
  "description": "",
  "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"Jayas152\" and \"vraj2210\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on the NewContact",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user enters for  NewContact \"Rohit\" \"Sharma\" \"Icci\" and \"Usa\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user verify Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6313240250,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 7029042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jayas152",
      "offset": 13
    },
    {
      "val": "vraj2210",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 80261333,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8971455667,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 3015250917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_the_NewContact()"
});
formatter.result({
  "duration": 3733245250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rohit",
      "offset": 29
    },
    {
      "val": "Sharma",
      "offset": 37
    },
    {
      "val": "Icci",
      "offset": 46
    },
    {
      "val": "Usa",
      "offset": 57
    }
  ],
  "location": "LoginStepDefination.user_enters_for_NewContact_and(String,String,String,String)"
});
formatter.result({
  "duration": 86569292,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_save_button()"
});
formatter.result({
  "duration": 3741760917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_verify_Contact()"
});
formatter.result({
  "duration": 28251917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 509517000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Free CRM Add New Contact Test Scenario",
  "description": "",
  "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"Jayas152\" and \"vraj2210\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on the NewContact",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user enters for  NewContact \"Virat\" \"Kohli\" \"Bcci\" and \"Canada\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user verify Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6388042083,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 2493417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jayas152",
      "offset": 13
    },
    {
      "val": "vraj2210",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 66018416,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8530749708,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 3013006834,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_the_NewContact()"
});
formatter.result({
  "duration": 3269683334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virat",
      "offset": 29
    },
    {
      "val": "Kohli",
      "offset": 37
    },
    {
      "val": "Bcci",
      "offset": 45
    },
    {
      "val": "Canada",
      "offset": 56
    }
  ],
  "location": "LoginStepDefination.user_enters_for_NewContact_and(String,String,String,String)"
});
formatter.result({
  "duration": 78755542,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_save_button()"
});
formatter.result({
  "duration": 4646275292,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_verify_Contact()"
});
formatter.result({
  "duration": 36857000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 488468959,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Free CRM Add New Contact Test Scenario",
  "description": "",
  "id": "free-crm-add-new-contact;free-crm-add-new-contact-test-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"Jayas152\" and \"vraj2210\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on the NewContact",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user enters for  NewContact \"Surya\" \"Yadav\" \"Acci\" and \"Austrialia\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user verify Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6660575333,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 4157792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jayas152",
      "offset": 13
    },
    {
      "val": "vraj2210",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 83973375,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8879978500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 3011502209,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_the_NewContact()"
});
formatter.result({
  "duration": 3712783292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surya",
      "offset": 29
    },
    {
      "val": "Yadav",
      "offset": 37
    },
    {
      "val": "Acci",
      "offset": 45
    },
    {
      "val": "Austrialia",
      "offset": 56
    }
  ],
  "location": "LoginStepDefination.user_enters_for_NewContact_and(String,String,String,String)"
});
formatter.result({
  "duration": 73771041,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_save_button()"
});
formatter.result({
  "duration": 3932666875,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_verify_Contact()"
});
formatter.result({
  "duration": 31624667,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 533380375,
  "status": "passed"
});
});