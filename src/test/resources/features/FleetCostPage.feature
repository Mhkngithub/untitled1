Feature: As a truck driver I should be able to access Vehicle Costs page


 Background:
   Given user on the login page
   When Driver login with valid credantial
   Then Driver Should see Dashboard page

 @Sc5
  Scenario: Fleet Tag Cost Module

    When "driver" log ın page titles must be seen
      | Type        |
      | Total Price |
      | Date        |
      |             |
    Then fourth line should include these informations
      | Type        | Depreciation and Interests |
      | Total Price | $25.00                     |
      | Date        | Jun 3, 2020                |
    And user should invoke page informations