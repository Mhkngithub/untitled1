
Feature: As a truck driver I should be able to access Vehicle under Fleet module.

  Background:
    Given user on the login page
    When Driver login with valid credantial
    Then Driver Should see Dashboard page
  @Sc2
  Scenario:Fleet tab Vehicle module

    When "userType" press "Fleet" tab "Vehicles" module should be see all information
      | License Plat         |
      | Tags                 |
      | Driver               |
      | Location             |
      | Chassis Number       |
      | Model Year           |
      | Last Odometer        |
      | Immatriculation Date |
      | First Contract Date  |
      | CVVI                 |
      | Seats Number         |
      | Doors Number         |
      | Color                |
      | Transmission         |
      | Fuel Type            |
      | CO2 Emissions        |
      | Horsepower           |
      | Horsepower Taxation  |
      | Power (kW)           |


    When "userType" click any car,should be display general information
    And "userType" can add Event, it should display under Activity tab and General information page as well.
    Then "userType" can reset the setting

