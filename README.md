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

1. Shorten a URL:
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:3000/shorten
    ```

2. Use the shortened URL to redirect:
    Open `http://localhost:3000/abc123` in your browser.

---

Made with 💗 by Jr