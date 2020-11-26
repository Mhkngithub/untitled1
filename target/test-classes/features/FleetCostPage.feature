Feature: As a truck driver I should be able to access Vehicle Costs page


 Background:
   Given user on the login page
   When Driver login with valid credantial
   Then Driver Should see Dashboard page

 @Sc5
  Scenario: Fleet Tag Cost Module

    When "driver" log in page titles must be seen
      | TYPE        |
      | TOTAL PRICE |
      | DATE        |

    Then fourth line should include these informations
      | TYPE        | Depreciation and Interests |
      | TOTAL PRICE | $25.00                     |
      | DATE        | Jun 3, 2020                |
    And user should invoke page informations