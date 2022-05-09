Feature: Sign In
  As a customer,
  I want to login with email and password,
  So that I can use the app.

  Background:
    Given I am at the Login page

  Scenario Outline: Loggin with valid credentials
    When I fill in the account email field with the value "<user>"
    And I fill in the password field with the value "<password>"
    And I hit the login button
    Then I should be at the home page
    And I logout

    Examples:
      | user | password  |
      | 5010 | Password1 |
   #   | 1040 | Password1 |
