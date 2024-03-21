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

## User Stories

1. As a user I should be able to filter events by city, so that a list of events is available for only the city I am interested in.

2. As a user I should be able to click an event and view more or less details about it, so that I can learn more about the event.

3. As a user, I should be able to see the number of events listed for the city that is selected, so that I know how many events are taking place.

4. As a user, I should be able to access the app while offline, so that I have access to the information regardless of internet connection.

5. As a user, I should be able to add a shortcut to the app on my home screen, so that I have a more convenient way to access the app.

6. As a user, I should be able to view charts that display information and details about the events, so that I can have a better understanding of what kind of events are happening in the city.

## Scenarios 
Scenario 1: Filter Events by City 
  - *Given* the user hasn't searched for any city 
  - *When* the user opens the app main page
  - *Then* the user should see an option to search for a city, and a list of events for a variety of cities.

Scenario 2: Show a list of events for a selected CIty
  - *Given* the user has searched for a selected a City
  - *When* the user looks at the event page for that City
  - *Then* the user should see a list of events for only the Specified City

Scenario 3: Show/Hide Event Details 
  - *Given* the user is viewing the events page for a selected city
  - *When* they choose to show event details 
  - *Then* the event details should be displayed, and when they choose to hide event details then the event details should be hidden 
  
Scenario 4: Specify Number of Events 
  - *Given* the user is on the events page 
  - *When* they specify the number of events to display 
  - *Then* the specified number of events should be shown 
  
Scenario 5: Use the App *When* Offline 
  - *Given* the user has previously accessed the app 
  - *When* they lose internet connectivity 
  - *Then* they should still be able to use the app 
  
Scenario 6: Add an App Shortcut to the Home Screen
  - *Given* the user is accessing the app from a mobile device 
  - *When* they choose to add a shortcut to the home screen 
  - *Then* an app shortcut should be added 
  
Scenario 7: Display Charts Visualizing Event Details 
  - *Given* the user is viewing event details 
  - *When* they navigate to the charts section 
  - *Then* visualizations representing event details should be displayed 