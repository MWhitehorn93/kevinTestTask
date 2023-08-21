## Part I. Testing our service (kevin. API)
Find our documentation [here](https://api-reference.kevin.eu/public/platform/v0.3), and prepare an automated script/tool for the execution of 5-10 tests for the [Payment Initiate Endpoint](https://api-reference.kevin.eu/public/platform/v0.3#operation/initiatePayment).

Choose one of the following types of technology for the task execution:
1. Automated testing framework that supports API testing (Cypress, JestJS, Playwright, WDIO, etc.)
2. API platform (like Postman) 

No matter the format, there must be:
1. Brief description for each test case, weather it is a file/function/request name or a dedicated field; 
2. Test case steps (as `it` statements, comments, or separate fields)
3. In case result aren't automatically generated/outputed, corresponding test report for a run performed by you.

## Part II. Testing us (kevin.) 
Write a script to automatically test a payment in kevin. demo page.

- Go to the [kevin. demo web page](https://demo.kevin.eu/)
- Accept all the cookies
- There, choose Bank Payment option
- Fill all the fields with data (0.01 for payment amount, your own email for email)
- Find the checkbox for terms and conditions but do not click it at first
- Choose Swedbank as the payment bank
- Click PAY
- Check if the error message for Terms and Conditions checkmark appears
- Mark the checkmark for terms and conditions
- Proceed with payment

**Bonus Points**
- Ensure that the action, that leads to the redirect to the bank website happens without performing any actions on the bank's superdomain
- When checking for the error message about Terms and Conditions, assert the color of the message text
- Please make sure that URL(s) used in the test are initiated as config variable(s)
- Make service **base URL**, **amount** and **email** variables easy to change and configurable for multiple environments
- Feel free to add any assertions and checks you see fit
- Add additional test step to revisit [kevin. demo web page](https://demo.kevin.eu/) and assert the presence of previously accepted cookies

## Submitting the task
- Make sure you don't mention `kevin.` anywhere in the code or repository name.
- Please include how long it took for you to do the tasks.
- Please include `README.md` with instructions how to launch tests.

## Remarks
- Any kind of text, csv, word, excel etc. file used for tasks 1 & 2 can be stored in the root of the automation project repository
- If you decided to go with an automation framework for the first task, test file can be in the same directory as the test file for the second task in the same project