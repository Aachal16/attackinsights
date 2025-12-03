# Attack Insights

A React-based web application designed to visualize user account data and provide AI-powered security insights, including threat analysis and recommended mitigation steps for potential system attacks.

## Microsoft Teams Integration

This application can send notifications to Microsoft Teams when alert types are updated for users.

### Setup

1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Get your Microsoft Teams webhook URL:
   - Go to your Microsoft Teams channel
   - Click on the three dots (...) next to the channel name
   - Select "Connectors"
   - Search for "Incoming Webhook" and configure it
   - Copy the webhook URL
3. Add the webhook URL to your `.env` file:
   ```
   REACT_APP_TEAMS_WEBHOOK_URL=https://your-teams-webhook-url
   ```
4. Restart the development server for changes to take effect

### Features

- Automatic notifications sent to Teams when user alert types change
- Color-coded messages based on alert severity (Critical, Warning, Okay)
- Includes user name, alert type change details, and timestamp

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

