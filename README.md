# Sports Dashboard Application

This is a simple React application that allows users to log in with Google OAuth and view sports data from a designated API. It includes components for authentication, user sessions, and fetching sports data based on user interactions.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Google OAuth Login:** Users can log in with their Google accounts using OAuth.
- **Authentication:** The application securely manages user sessions and authentication tokens.
- **Sports Data Display:** Users can view sports data fetched from an API, organized by different sports categories.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine
- A Google Developer account with OAuth credentials set up
- Access to the designated sports API with the necessary API key

## Installation
1. Clone the repository to your local machine:
   <pre>git clone https://github.com/NexusSportHub/front</pre>
2. Navigate to the project directory
   
3. Install dependencies:
   <pre>npm install</pre>

## Usage
1. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     - `VITE_API_KEY`: Your API key for accessing the sports data API.
     - `VITE_API_HOST`: The host URL of the sports data API.
     - `VITE_SPORT`: Comma-separated list of sports categories available in the API.
     - `VITE_WEBCLIENT_PORT`: Port number of your web client.
     - `VITE_CLIENT_ID`: Your Google OAuth client ID.
2. Start the development server:
   <pre>npm start</pre>
3. Open your browser and navigate to `http://localhost:5173` .

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


