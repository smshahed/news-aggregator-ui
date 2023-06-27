
# News Aggregator UI

> This is the frontend of the News Aggregator project, which allows users to search and aggregate news data. To run this app, please ensure that the backend server is running.

# Screenshots
<img width="1210" alt="Screenshot 2023-06-26 at 11 20 26 PM" src="https://github.com/smshahed/news-aggregator-ui/assets/8651630/f419eb2a-26d7-49df-a036-8aeea40e6a16">


## How to run this app

### Install dependencies
> npm install

### Serve with hot reload at localhost:8080
> npm run dev

## Notes
* This app does not currently support timezone conversion. The date inputs are assumed to be in UTC.
* Basic validation is implemented for the inputs to ensure data integrity.
* Default values are set for the inputs for testing.

## Assumptions
* The "Text" field is optional, while the "Start Date", "End Date", and "Interval" fields are required.
* The "Interval" options include: 1d (1 day), 1w (1 week), 1M (1 month), 1q (1 quarter), 1y (1 year).
* Medium size is assumed to be 5. Depending on the requirement, the medium size could be treated dynamically.
* To encompass the entire range, the start date is set at 12:00 am and the end date is set at 11:59 pm.

## Improvement Scopes
* **Add tests:** Implement unit tests and integration tests to ensure the app functions correctly and remains stable during development.
* **Isolate backend API calls:** Separate the backend API calls and related methods into a dedicated module or service for better code organization and maintainability.
* **Asynchronous backend API calls:** Modify the backend API calls to be asynchronous, allowing for improved responsiveness and user experience.
* **Enhance error handling:** Implement robust error handling mechanisms to gracefully handle any errors or network issues that may occur during API calls.
* **Separation of Chart generation logic:** Separating the chart generation logic would enhance both readability and testing capabilities.
* **Chart update instead of recreation:** Currently, the chart is recreated every time the user requests the result. This can be enhanced by updating the _chartData_ instead.
