
# News Aggregator UI

> This is the frontend of the News Aggregator project, which allows users to search and aggregate news data. To run this app, please ensure that the backend server is running.

## How to run this app

### Install dependencies
> npm install

### Serve with hot reload at localhost:8080
> npm run dev

## Notes
* This app does not currently support timezone conversion. The date inputs are assumed to be in UTC.
* Basic validation is implemented for the inputs to ensure data integrity.

## Assumptions
* The "Text" field is optional, while the "Start Date", "End Date", and "Interval" fields are required.
* The "Interval" options include: 1d (1 day), 1w (1 week), 1M (1 month), 1q (1 quarter), 1y (1 year).

## Improvement Scopes
* **Add tests:** Implement unit tests and integration tests to ensure the app functions correctly and remains stable during development.
* **Isolate backend API calls:** Separate the backend API calls and related methods into a dedicated module or service for better code organization and maintainability.
* **Asynchronous backend API calls:** Modify the backend API calls to be asynchronous, allowing for improved responsiveness and user experience.
* **Enhance error handling:** Implement robust error handling mechanisms to gracefully handle any errors or network issues that may occur during API calls.
