Feature: Login

Scenario Outline: Login with valid credentials

Given I access Login page
When I enter username <username> 
And I enter password <password>
And I click on Login Button
Then Home Page is loaded with title My Account

Examples:
    | username | password | 
    | gloria  | pass  | 
    |test| test12|