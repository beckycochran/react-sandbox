# THIS IS BECKY'S VERY INCOMPLETE API DOC WITH LIKE 2 ENDPOINTS because I had no time to prep this 

## Endpoints
| Endpoint              | Method    | Description                                       | Expected Body         |
|---------------------- | --------- | ------------------------------------------------- | --------------------- |
| `"/api/get-orders"`   | `GET`     | Returns an array of all the orders                | `N/A`                 |
| `"/api/:orderId"`     | `GET`     | Returns a single order based on its id            | `N/A`                 |
| `"/api/post-order"`   | `POST`    | Posts a new order and adds it to the orders array | `{ numOfScoops: "", iceCream: ""}`|