Feature: As a store manager and Sales managerI should be able to create Vehicle

Background:
Given user on the login page
When Store Manager login with valid credantial
Then Store Manager see Dashboard page

@Sc3
  Scenario:store manager should create and cancel and delete car

    When "userType" press "Fleet" tab "Vehicles" module should be see all information

 # 2. Verify that Store manager or sales manager should be able to create and cancel car
  #3. Verify that Store manager or sales manager should be able to cancel car
 #3.Verify that Store manager or sales manager should be able to add Vehicle Module and Vehicle Make
 # 4.Verify that Store manager or sales manager should be able to edit or delete the car
