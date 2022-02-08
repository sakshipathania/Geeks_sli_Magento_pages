$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Free_magento_pages.feature");
formatter.feature({
  "line": 2,
  "name": "pagination test for Free Magento pages",
  "description": "",
  "id": "pagination-test-for-free-magento-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Free_Magento_pages_test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "pagination test for Free Magento pages without log in",
  "description": "",
  "id": "pagination-test-for-free-magento-pages;pagination-test-for-free-magento-pages-without-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on Free Slides button on top navigation bar",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on any of page number and verify the listing page below",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select any of one ppt on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify the navigation on correct ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Free_Magento_pages.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6702941900,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_Free_Slides_button_on_top_navigation_bar()"
});
formatter.result({
  "duration": 1772856200,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_page_number_and_verify_the_listing_page_below()"
});
formatter.result({
  "duration": 6561168600,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.select_any_of_one_ppt_on_the_page()"
});
formatter.result({
  "duration": 8988904600,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.verify_the_navigation_on_correct_ppt_page()"
});
formatter.result({
  "duration": 2098149300,
  "status": "passed"
});
formatter.after({
  "duration": 96300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Pagination test for Free Magento pages with log in",
  "description": "",
  "id": "pagination-test-for-free-magento-pages;pagination-test-for-free-magento-pages-with-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@With_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Click on signin page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter username \"qaslidegeeks@gmail.com\" and passwordi \"Qwerty@1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on Free Slides button on top navigation bar",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on any of page number and verify the listing page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on any of one ppt under free ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify the navigation on correct ppt page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Free_Magento_pages.click_on_signin_page()"
});
formatter.result({
  "duration": 5241360700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaslidegeeks@gmail.com",
      "offset": 16
    },
    {
      "val": "Qwerty@1",
      "offset": 55
    }
  ],
  "location": "Free_Magento_pages.enter_username_and_passwordi(String,String)"
});
formatter.result({
  "duration": 12972834900,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Click_on_Free_Slides_button_on_top_navigation_bar()"
});
formatter.result({
  "duration": 2656052800,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_page_number_and_verify_the_listing_page()"
});
formatter.result({
  "duration": 5642811600,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.click_on_any_of_one_ppt_under_free_ppts()"
});
formatter.result({
  "duration": 9964705900,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.Verify_the_navigation_on_correct_ppt_page()"
});
formatter.result({
  "duration": 13106941300,
  "status": "passed"
});
formatter.match({
  "location": "Free_Magento_pages.user_logout_from_the_application()"
});
formatter.result({
  "duration": 8915112800,
  "status": "passed"
});
formatter.after({
  "duration": 36900,
  "status": "passed"
});
formatter.uri("src/test/java/features/New_Additions.feature");
formatter.feature({
  "line": 2,
  "name": "pagination \u0026 Mouse Hovers on New Additions pages",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-new-additions-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@New_Additions"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "pagination \u0026 Mouse Hovers on New Additions pages",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-new-additions-pages;pagination-\u0026-mouse-hovers-on-new-additions-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Home Pagesi",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on New Addition button on Top navigation bar",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "mouse hover on any of one ppt and verify the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on pagination number and verify the listing below",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on any of PPT",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify the page",
  "keyword": "Then "
});
formatter.match({
  "location": "New_Additions.user_is_on_Home_Pagesi()"
});
formatter.result({
  "duration": 6876253200,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.click_on_New_Addition_button_on_Top_navigation_bar()"
});
formatter.result({
  "duration": 938439500,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.mouse_hover_on_any_of_one_ppt_and_verify_the_popup()"
});
formatter.result({
  "duration": 6403873400,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.click_on_pagination_number_and_verify_the_listing_below()"
});
formatter.result({
  "duration": 4711482700,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.click_on_any_of_PPT()"
});
formatter.result({
  "duration": 5788884000,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.verify_the_page()"
});
formatter.result({
  "duration": 4092061000,
  "status": "passed"
});
formatter.after({
  "duration": 22100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "pagination \u0026 Mouse Hovers on New Additions pages",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-new-additions-pages;pagination-\u0026-mouse-hovers-on-new-additions-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@With_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Click on Login button",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter valid username \"qaslidegeeks@gmail.com\" and \"Qwerty@1\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on New Addition button on Top navigation bar",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Mouse hover on any of one ppt and verify the the popup",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on pagination number and verify the listing below",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on any of PPT and verify the download button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on the Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "New_Additions.click_on_Login_button()"
});
formatter.result({
  "duration": 5455155200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaslidegeeks@gmail.com",
      "offset": 22
    },
    {
      "val": "Qwerty@1",
      "offset": 51
    }
  ],
  "location": "New_Additions.enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 15597766800,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.Click_on_New_Addition_button_on_Top_navigation_bar()"
});
formatter.result({
  "duration": 1973368500,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.mouse_hover_on_any_of_one_ppt_and_verify_the_the_popup()"
});
formatter.result({
  "duration": 7336595600,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.Click_on_pagination_number_and_verify_the_listing_below()"
});
formatter.result({
  "duration": 4693369600,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.click_on_any_of_PPT_and_verify_the_download_button()"
});
formatter.result({
  "duration": 18115492500,
  "status": "passed"
});
formatter.match({
  "location": "New_Additions.clicks_on_the_Logout_button()"
});
formatter.result({
  "duration": 5861554000,
  "status": "passed"
});
formatter.after({
  "duration": 34500,
  "status": "passed"
});
formatter.uri("src/test/java/features/Paid_Manento_pages.feature");
formatter.feature({
  "line": 2,
  "name": "pagination \u0026 Mouse Hovers on paid Magento pages",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-paid-magento-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Paid_Magento_pages_test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "pagination \u0026 Mouse Hovers on Magento pages test without log in",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-paid-magento-pages;pagination-\u0026-mouse-hovers-on-magento-pages-test-without-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Home Pageii",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on Most Popular PPts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "mouse hover on any of one most Popular PPt",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the displayed pop-up is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on Any of page number and verify the listing of most populat ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on any of one Ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the user will navigation on cottect ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Paid_magento_pages.user_is_on_Home_Pageii()"
});
formatter.result({
  "duration": 6760830000,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_Most_Popular_PPts()"
});
formatter.result({
  "duration": 668735500,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.mouse_hover_on_any_of_one_most_Popular_PPt()"
});
formatter.result({
  "duration": 6250589600,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_displayed_pop_up_is_visible()"
});
formatter.result({
  "duration": 39505900,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_Any_of_page_number_and_verify_the_listing_of_most_populat_ppts()"
});
formatter.result({
  "duration": 7616232700,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_any_of_one_Ppt()"
});
formatter.result({
  "duration": 5075379200,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_user_will_navigation_on_cottect_ppt_page()"
});
formatter.result({
  "duration": 2095041600,
  "status": "passed"
});
formatter.after({
  "duration": 22400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "pagination \u0026 Mouse Hovers on Magento pages test with log in",
  "description": "",
  "id": "pagination-\u0026-mouse-hovers-on-paid-magento-pages;pagination-\u0026-mouse-hovers-on-magento-pages-test-with-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@With_login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Click on signin pageii",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter username \"nisha.dhiman@slidetech.in\" and passwordii \"Qwerty\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Most popular ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Mouse hover on any of one ppti",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify the displayed pop-up is visibleii",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on any of page number",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on any of ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Verify the navigation on cottect ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Paid_magento_pages.click_on_signin_pageii()"
});
formatter.result({
  "duration": 5260180300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nisha.dhiman@slidetech.in",
      "offset": 16
    },
    {
      "val": "Qwerty",
      "offset": 59
    }
  ],
  "location": "Paid_magento_pages.enter_username_and_passwordii(String,String)"
});
formatter.result({
  "duration": 10847488700,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_Most_popular_ppts()"
});
formatter.result({
  "duration": 7978120900,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.mouse_hover_on_any_of_one_ppti()"
});
formatter.result({
  "duration": 6254364900,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_displayed_pop_up_is_visibleii()"
});
formatter.result({
  "duration": 34242500,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_any_of_page_number()"
});
formatter.result({
  "duration": 6918318600,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.click_on_any_of_ppt()"
});
formatter.result({
  "duration": 5431487100,
  "status": "passed"
});
formatter.match({
  "location": "Paid_magento_pages.verify_the_navigation_on_cottect_ppt_page()"
});
formatter.result({
  "duration": 9913705100,
  "status": "passed"
});
formatter.after({
  "duration": 113100,
  "status": "passed"
});
formatter.uri("src/test/java/features/SLI_pop-up_Check_with_escape_key.feature");
formatter.feature({
  "line": 2,
  "name": "SLI POP UP test",
  "description": "",
  "id": "sli-pop-up-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sli_test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "SLI popup test with escape key",
  "description": "",
  "id": "sli-pop-up-test;sli-popup-test-with-escape-key",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Now user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter data in search field",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "press escape key",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "open Sli listing page and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter free valid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter data in Search fields",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Press Escape key",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the Pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "open Sli listing pages and verify the pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on the sign out button",
  "keyword": "Then "
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.Now_user_is_on_home_page()"
});
formatter.result({
  "duration": 6598912800,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_data_in_search_field()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.press_escape_key()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.verify_the_pop_up()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.open_Sli_listing_page_and_verify_the_pop_up()"
});
formatter.result({
  "duration": 20600,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.click_on_sign_in_button()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_free_valid_username_and_password()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.enter_data_in_Search_fields()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.press_Escape_key()"
});
formatter.result({
  "duration": 17400,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.verify_the_Pop_up()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.open_Sli_listing_pages_and_verify_the_pop_up()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "SLI_popup_check_with_escapeKey.click_on_the_sign_out_button()"
});
formatter.result({
  "duration": 8600,
  "status": "passed"
});
formatter.after({
  "duration": 18100,
  "status": "passed"
});
formatter.uri("src/test/java/features/Widgets_Pages.feature");
formatter.feature({
  "line": 2,
  "name": "Emarsys Widgets pages test",
  "description": "",
  "id": "emarsys-widgets-pages-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Emarsys_Widgets_pages"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Emarsys Widgets pages test",
  "description": "",
  "id": "emarsys-widgets-pages-test;emarsys-widgets-pages-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Go to the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "scroll down the page and select any of one ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify the download button",
  "keyword": "Then "
});
formatter.match({
  "location": "Widgets_pages.go_to_the_home_page()"
});
formatter.result({
  "duration": 7363258100,
  "status": "passed"
});
formatter.match({
  "location": "Widgets_pages.scroll_down_the_page_and_select_any_of_one_ppt()"
});
formatter.result({
  "duration": 7213664400,
  "status": "passed"
});
formatter.match({
  "location": "Widgets_pages.verify_the_download_button()"
});
formatter.result({
  "duration": 4101255600,
  "status": "passed"
});
formatter.after({
  "duration": 21600,
  "status": "passed"
});
formatter.uri("src/test/java/features/sli_listing_page.feature");
formatter.feature({
  "line": 2,
  "name": "SLI POP UP test",
  "description": "",
  "id": "sli-pop-up-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sli_pagination_test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "SLI pagination \u0026 Mouse Hover test without log in",
  "description": "",
  "id": "sli-pop-up-test;sli-pagination-\u0026-mouse-hover-test-without-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@without_Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter keyword \"Software\" in search field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Go to the listing page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "mouse hover on any of one ppts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify the whether the pop-up is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on any of page number and verify the product below",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on any of ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify the ppt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Sli_listing_pagination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6597797900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 15
    }
  ],
  "location": "Sli_listing_pagination.enter_keyword_in_search_field(String)"
});
formatter.result({
  "duration": 3093810500,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.go_to_the_listing_page()"
});
formatter.result({
  "duration": 3142587100,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.mouse_hover_on_any_of_one_ppts()"
});
formatter.result({
  "duration": 3422017500,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.verify_the_whether_the_pop_up_is_visible()"
});
formatter.result({
  "duration": 4073454300,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_any_of_page_number_and_verify_the_product_below()"
});
formatter.result({
  "duration": 3796682500,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_any_of_ppt()"
});
formatter.result({
  "duration": 3344391000,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.verify_the_ppt_page()"
});
formatter.result({
  "duration": 4090763100,
  "status": "passed"
});
formatter.after({
  "duration": 22800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "SLI pagination \u0026 mouse Hover test with login",
  "description": "",
  "id": "sli-pop-up-test;sli-pagination-\u0026-mouse-hover-test-with-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@With_login"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Click on signup page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enter username \"qaslidegeeks@gmail.com\" and password \"Qwerty@1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Enter keyword \"Progress\" in search fields",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Go to the listing pagei",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "mouse hover on any of one pptsi",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "verify the whether the pop-up is visiblei",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "click on Any of page number and verify the listing pagebelowi",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on any of ppti",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "verify the navigation on cottect ppt pageii",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Sign out button and verify the pagei",
  "keyword": "Then "
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_signup_page()"
});
formatter.result({
  "duration": 6323859500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaslidegeeks@gmail.com",
      "offset": 16
    },
    {
      "val": "Qwerty@1",
      "offset": 54
    }
  ],
  "location": "Sli_listing_pagination.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 13147511500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Progress",
      "offset": 15
    }
  ],
  "location": "Sli_listing_pagination.enter_keyword_in_search_fields(String)"
});
formatter.result({
  "duration": 3168349600,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.go_to_the_listing_pagei()"
});
formatter.result({
  "duration": 129024900,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.mouse_hover_on_any_of_one_pptsi()"
});
formatter.result({
  "duration": 6225045600,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.verify_the_whether_the_pop_up_is_visiblei()"
});
formatter.result({
  "duration": 38575300,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_Any_of_page_number_and_verify_the_listing_pagebelowi()"
});
formatter.result({
  "duration": 3147419600,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_any_of_ppti()"
});
formatter.result({
  "duration": 3258021300,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.verify_the_navigation_on_cottect_ppt_pageii()"
});
formatter.result({
  "duration": 4096147900,
  "status": "passed"
});
formatter.match({
  "location": "Sli_listing_pagination.click_on_Sign_out_button_and_verify_the_pagei()"
});
formatter.result({
  "duration": 5783446600,
  "status": "passed"
});
formatter.after({
  "duration": 130300,
  "status": "passed"
});
});