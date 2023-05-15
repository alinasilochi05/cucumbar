Feature: Register

Scenario Outline: Register with valid credentials

Given The user access Register Page
When The user enters the firstname <firstName>
And The user enters the lastname <lastName>
And The user enters the email <email>
And The user enters the address <address>
And The user enters the city <city>
And The user selects the country <country>
And The user selects de region state <region>
And The user enters the zip code <zip>
And The user enters the login name <loginName>
And The user enters the password <password>
And The user confirms password <confirmedPassword>
And The the user agrees the privacy policy 
And The user click the continue button
Then The users registration is confirmed

Examples:
|firstName|lastName|email|address|city|country|region|zip|loginName|password|confirmedPassword|
|test12|test|test123@gmail.com|address123|City123|Romania|Arad|123456|test.test12|pass|pass|    