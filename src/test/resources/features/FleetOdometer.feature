Feature:As an authorized user I should be access to Vehicle odometer page.

  @Sc4
  Scenario Outline: As a<userType> should be able to access

  Given user on the login page
  When "<userType>" login with valid "<userName>" and "<password>"
  Then the user should be able to login "Dashboard" page
  Then Only valid userType  can access to vehicle odometer page
    Examples:
      | userType      | userName        | password    |
      | driver        | user169         | UserUser123 |
      | store_manager | storemanager213 | UserUser123 |


