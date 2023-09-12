# JS-Web-Scraper

## Description

### About The Project

This project is a JavaScript-based Web Scraper. The project is a web application that allows users to enter a URL and scrape the URL & count the number of times the search term appears. The application will then display the data in a table.

### Built with the following Frameworks & Libraries

- **ReactJS(Frontend)**
- **NodeJS(Backend)**
- ExpressJS API Layer
- Puppeteer Library(Webscraping)

## Getting Started

### Installation

Below, I will detail how users can install and set up the application with the necessary dependencies and services.

Setting up the NodeJS frontend. 
*NOTE: If the NodeJS backend server is not running, the ReactJS frontend will not be able to connect to the backend server. Node and NPM must be installed on your machine.*
Please follow the steps below to set up the NodeJS backend server.

1. Open your terminal & navigate to the backend server folder.

```bash
cd JS-Web-Scraper/server
```

2. Install the necessary NPM Modules.

```bash
npm install
```

3. Start the NodeJS server:

```bash
node index.js
```

At this point, your NodeJS backend server should start. Please open a second terminal window and we can begin to set up the frontend.

Setting up the ReactJS frontend.

1. Open your terminal & navigate to the frontend folder.

```bash
cd JS-Web-Scraper/frontend
```

2. Install the necessary NPM Modules.

```bash
npm install
```

3. Start the ReactJS server:

```bash
npm start
```

At this point, the React frontend should start and open a new browser window. If the browser window does not open, please navigate to <http://localhost:3000/> to view the application.

## Usage

### How to use the application

1. Navigate to the application's homepage.
2. Enter a valid URL into the input field.
3. Click the "Submit" button.
4. The application will scrape the data from the URL and display the results in a table.

## Roadmap

### Future Improvements

- Add a loading screen to the application.
- Add a "Clear" button to clear the input field.
- Add a "Clear" button to clear the table.
- Add a "Copy" button to copy the table data to the clipboard.
- Add a "Download" button to download the table data as a JSON or CSV file.
- Allow for table sorting by clicking on the table headers.

## Message

### Thank you for taking the time to review my application. I hope you enjoy the application and I look forward to hearing from you soon
