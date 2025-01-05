# Airplanes API

List of airplanes with their respective manufacturers and models.

## REST API

| Method   | Path             | Description            | Expectation              |
| -------- | ---------------- | ---------------------- | ------------------------ |
| `GET`    | `/airplanes`     | Get all airplanes      | 200: `[]`                |
| `GET`    | `/airplanes/:id` | Get one airplane by id | 200: `{}`, 404           |
| `POST`   | `/airplanes`     | Add a new airplane     | 201: `{...} --> {}`, 400 |
| `DELETE` | `/airplanes`     | Delete all airplanes   | 200: `message`           |
| `DELETE` | `/airplanes/:id` | Delete airplane by id  | 200: `message`, 404      |
| `PUT`    | `/airplanes/:id` | Update airplane by id  | 200: `{...} --> {}`, 404 |

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
