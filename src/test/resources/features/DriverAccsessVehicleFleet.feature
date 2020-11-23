Feature: As a truck driver ı should be able to accsess Vehicle under Fleet tab


  Background:
    Given user on the login page
    When "driver" login with valid userName and password

   @Sc4
  Scenario: Driver navigate vehicle under fleet tab


  Given user on "Dashboard"
  When driver clic "Fleet" tab and "Vehicles" module
  Then should be see all vehicle information on page
