CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  state_id TEXT NOT NULL,
  state_name TEXT NOT NULL,
  lat TEXT NOT NULL,
  lng TEXT NOT NULL,
  pop TEXT NOT NULL,
  spring TEXT,
  summer TEXT,
  fall TEXT,
  winter TEXT
);

