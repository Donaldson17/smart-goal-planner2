# Smart Goal Planner

## Overview
Smart Goal Planner is a React application designed to help users set, track, and manage their personal goals. The application provides a user-friendly interface for creating goals, tracking progress, and managing deposits related to those goals.

## Features
- Create and manage personal goals
- View a summary of goals and progress
- Input deposits related to goals
- Responsive design for various devices

## Project Structure
```
smart-goal-planner/
├── public/
│   ├── index.html        # Main HTML document
│   
├── src/
│   ├── components/       # React components for the application
│   │   ├── GoalList.js
│   │   ├── GoalItem.js
│   │   ├── GoalForm.js
│   │   ├── DepositForm.js
│   │   ├── Overview.js
│   │   └── ProgressBar.js
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point of the React application
│   ├── styles.css        # CSS styles for the application
│   └── setupTests.js     # Testing configuration
├── db.json               # Mock database for sample data
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/Donaldson17/smart-goal-planner2.git
   ```
2. Navigate to the project directory:
   ```
   cd smart-goal-planner
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Testing
To run the tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.