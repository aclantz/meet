# Meet App
## Career Foundry Achievement 4

## Objective:
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Requirements
### Key Features:
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App *When* Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

### Technical Requirements:
- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on
mobile.
- The app must be deployed on GitHub Pages.
- The app must implement an alert system using an OOP approach to show information to the
user.
- The app must make use of data visualization.
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online performance monitoring tool.

## User Stories (Gherkin)
Scenario 1: Filter Events by City <br/>0
  *Given* the user hasn't searched for any city <br/>
  *When* the user opens the app <br/>
  *Then* the user should see a list of upcoming events 

Scenario 2: Show/Hide Event Details <br/>
  *Given* the user is viewing the events page <br/>
  *When* they choose to show event details <br/>
  *Then* the event details should be displayed <br/>
    And when they choose to hide event details <br/>
    Then the event details should be hidden 
  
Scenario 3: Specify Number of Events <br/>
  *Given* the user is on the events page <br/>
  *When* they specify the number of events to display <br/>
  *Then* the specified number of events should be shown 
  
Scenario 4: Use the App *When* Offline <br/>
  *Given* the user has previously accessed the app <br/>
  *When* they lose internet connectivity <br/>
  *Then* they should still be able to use the app 
  
Scenario 5: Add an App Shortcut to the Home Screen <br/>
  *Given* the user is accessing the app from a mobile device <br/>
  *When* they choose to add a shortcut to the home screen <br/>
  *Then* an app shortcut should be added 
  
Scenario 6: Display Charts Visualizing Event Details <br/>
  *Given* the user is viewing event details <br/>
  *When* they navigate to the charts section <br/>
  *Then* visualizations representing event details should be displayed 