Feature: login



  @wip
  Scenario Outline:As a <userType> should be able to login
  Given user on the login page
  When "<userType>" login with valid "<userName>" and "<password>"
  Then the user should be able to login "Dashboard" page

    Examples:
    | userType      | userName        | password    |
    | store_manager | storemanager213 | UserUser123 |
    #| driver        | user169         | UserUser123 |
    #| sales_manager | salesmanager269 | UserUser123 |




  @SC1
    Scenario: Start point
    Given user on the login page
    When "userType" login with valid userName and password
    Then the user should be able to login "Dashboard" page






 @Smp1
  Scenario: simple Driver login
    Given user on the login page
    When Driver login with valid credantial
    Then Driver Should see Dashboard page
@Smp1
  Scenario: simple salas_manager login
      Given user on the login page
      When Sales Manager login with valid credantial
      Then Sales Manager see Dashboard page

@Smp1
  Scenario: simple store_manager login
   Given user on the login page
    When Store Manager login with valid credantial
    Then Store Manager see Dashboard page


