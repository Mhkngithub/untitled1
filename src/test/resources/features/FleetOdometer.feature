@Sc0
Feature:As an authorized user I should be access to Vehicle odometer page.

  Background:

  Scenario Outline:As a <userType> should be able to login
    Given user on the login page
    When "<userType>" login with valid "<userName>" and "<password>"
    Then the user should be able to login "Dashboard" page

    Examples:
      | userType      | userName        | password    |
      | driver        | user169         | UserUser123 |
      | store_manager | storemanager213 | UserUser123 |
  @Sc4
  Scenario Outline:
  When Only valid "<userType>" can access to vehicle odometer page

  Examples:
    | userType      |
    | driver        |
    | store_manager |

@Sc5
