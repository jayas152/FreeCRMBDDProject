$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/jayas/Desktop/Selenium_WorkSpace/FreeCRMBDDFrameWorkJayas/src/main/java/Features/DealMap.feature");
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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "Jayas152",
        "vraj2210"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on the NewDeal",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters for  NewDeal",
  "rows": [
    {
      "cells": [
        "Title",
        "Company",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "BDD Deal",
        "Paag",
        "65000",
        "95",
        "15"
      ],
      "line": 14
    },
    {
      "cells": [
        "POM Deal",
        "JG",
        "75000",
        "90",
        "10"
      ],
      "line": 15
    },
    {
      "cells": [
        "JAVA Deal",
        "BP",
        "85000",
        "100",
        "20"
      ],
      "line": 16
    },
    {
      "cells": [
        "Selinium Deal",
        "VD",
        "95000",
        "80",
        "25"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#\tThen user click on save button"
    },
    {
      "line": 19,
      "value": "#\tThen user verify Deal"
    }
  ],
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsMapStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 8783709208,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 9687375,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_enters_username_and_password1(DataTable)"
});
formatter.result({
  "duration": 83988250,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10349398042,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 3015736916,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_click_on_the_NewDeal()"
});
formatter.result({
  "duration": 4027988375,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_enters_for_NewDeal_Title_Company_Amount_Probability_Commission(DataTable)"
});
formatter.result({
  "duration": 35586662250,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 521715541,
  "status": "passed"
});
});