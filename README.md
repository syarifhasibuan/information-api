# Airplanes API

List of airplanes with their respective manufacturers and models.

## REST API

| Method   | Path             | Description            |
| -------- | ---------------- | ---------------------- |
| `GET`    | `/airplanes`     | Get all airplanes      |
| `GET`    | `/airplanes/:id` | Get one airplane by id |
| `POST`   | `/airplanes`     | Add a new airplane     |
| `DELETE` | `/airplanes`     | Delete all airplanes   |
| `DELETE` | `/airplanes/:id` | Delete airplane by id  |
| `PATCH`  | `/airplanes/:id` | Update airplane by id  |

## Development

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

Open <http://localhost:3000>
