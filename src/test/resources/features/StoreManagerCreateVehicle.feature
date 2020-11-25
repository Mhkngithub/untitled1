Feature: As a store manager and Sales managerI should be able to create Vehicle

Background:
Given user on the login page
When Store Manager login with valid credantial
Then Store Manager see Dashboard page

@Sc3
  Scenario:store manager should create and cancel and delete car

    When "store manager" press "Fleet" tab "Vehicles" module should be see all information
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

 Then Store manager should be able to create and cancel car
 Then Store manager should be able to add Vehicle Module and Vehicle Make
 And Store manager should be able to edit or delete the car
