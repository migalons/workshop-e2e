Feature: Login

  This is a example feature to explain login behaviour.

  @valid_user @done
  Scenario: Login with valid user
    Given a valid user who is at login screen
     When he introduces his credentials
     Then he should see his dashboard

  @invalid_user @pending
  Scenario: Login with a invalid user
    Given a invalid user in login screen
     When he introduces his credentials
     Then he sould receive a error message
      And stay at login screen
