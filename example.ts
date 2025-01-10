import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});
await client.connect();

type Airplane = {
  id: number;
  name: string;
  year: number;
};

try {
  const result = await client.query("SELECT * FROM Airplane");
  const airplanes: Airplane[] = result.rows;

  console.log({ airplanes });
} catch (error) {
  console.error("Failed to connect to the database", error);
} finally {
  await client.end();
}
