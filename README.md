# URL Shortener

This is a simple URL shortener service built with Express.js. It allows you to shorten long URLs and redirect to the original URLs using the shortened codes.

## Features

- Shorten long URLs
- Redirect to original URLs using shortened codes
- JSON-based storage for URL mappings

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd url_shortener
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm run start
    ```

4. The server will be running at `http://localhost:3000`.

## API Endpoints

### Shorten URL

- **URL:** `/shorten`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
      "url": "https://example.com"
    }
    ```
- **Response:**
    ```json
    {
      "shortCode": "abc123",
      "shortenedURL": "http://localhost:3000/abc123"
    }
    ```

### Redirect to Original URL

- **URL:** `/:shortCode`
- **Method:** `GET`
- **Response:** Redirects to the original URL.

## Example

1. Shorten a URL using curl:
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:3000/shorten
    ```

2. Use the shortened URL to redirect:
    Open `http://localhost:3000/abc123` in your browser.

## Using Postman or Thunder Client

### Shorten URL

1. Open Postman or Thunder Client.
2. Create a new POST request.
3. Set the URL to `http://localhost:3000/shorten`.
4. Set the request body to:
    ```json
    {
      "url": "https://example.com"
    }
    ```
5. Send the request.
6. You should receive a response with the shortened URL.

### Redirect to Original URL

1. Open your browser.
2. Enter the shortened URL, e.g., `http://localhost:3000/abc123`.
3. You should be redirected to the original URL.

---

Made with <3