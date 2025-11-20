# SQLBolt

## Lesson 1

#### 1. Find the title of each film

```sql
SELECT title FROM movies;
```

| Title        |
| ------------ |
| Toy Story    |
| A Bug's Life |
| Toy Story 2  |

#### 2. Find the director of each film

```sql
SELECT director FROM movies;
```

| Director      |
| ------------- |
| John Lasseter |
| John Lasseter |
| John Lasseter |

#### 3. Find the title and director of each film

```sql
SELECT title, director FROM movies;
```

| Title        | Director      |
| ------------ | ------------- |
| Toy Story    | John Lasseter |
| A Bug's Life | John Lasseter |
| Toy Story 2  | John Lasseter |

#### 4. Find the title and year of each film

```sql
SELECT title, year FROM movies;
```

| Title        | Year |
| ------------ | ---- |
| Toy Story    | 1995 |
| A Bug's Life | 1998 |
| Toy Story 2  | 1999 |

#### 5. Find all the information about each film

```sql
SELECT * FROM movies;
```

| id  | Title        | Director      | Year | Length (minutes) |
| --- | ------------ | ------------- | ---- | ---------------- |
| 1   | Toy Story    | John Lasseter | 1995 | 81               |
| 2   | A Bug's Life | John Lasseter | 1998 | 95               |
| 3   | Toy Story 2  | John Lasseter | 1999 | 93               |

---

## Lesson 2

#### 1. Find the movie with a row id of 6

```sql
SELECT * FROM movies WHERE id = 6;
```

| id  | Title           | Director  | Year | Length_minutes |
| --- | --------------- | --------- | ---- | -------------- |
| 6   | The Incredibles | Brad Bird | 2004 | 116            |

#### 2. Find the movies released in the years between 2000 and 2010

```sql
SELECT * FROM movies WHERE year BETWEEN 2000 AND 2010;
```

| id  | Title           | Director       | Year | Length_minutes |
| --- | --------------- | -------------- | ---- | -------------- |
| 4   | Monsters, Inc.  | Pete Docter    | 2001 | 92             |
| 5   | Finding Nemo    | Andrew Stanton | 2003 | 107            |
| 6   | The Incredibles | Brad Bird      | 2004 | 116            |

#### 3. Find the movies not released in the years between 2000 and 2010

```sql
SELECT * FROM movies WHERE year NOT BETWEEN 2000 AND 2010;
```

| id  | Title        | Director      | Year | Length_minutes |
| --- | ------------ | ------------- | ---- | -------------- |
| 1   | Toy Story    | John Lasseter | 1995 | 81             |
| 2   | A Bug's Life | John Lasseter | 1998 | 95             |
| 3   | Toy Story 2  | John Lasseter | 1999 | 93             |

#### 4. Find the first 5 Pixar movies and their release year

```sql
SELECT * FROM movies WHERE id <= 5;
```

| id  | Title          | Director       | Year | Length_minutes |
| --- | -------------- | -------------- | ---- | -------------- |
| 1   | Toy Story      | John Lasseter  | 1995 | 81             |
| 2   | A Bug's Life   | John Lasseter  | 1998 | 95             |
| 3   | Toy Story 2    | John Lasseter  | 1999 | 93             |
| 4   | Monsters, Inc. | Pete Docter    | 2001 | 92             |
| 5   | Finding Nemo   | Andrew Stanton | 2003 | 107            |

---

## Lesson 3

#### 1. Find all the Toy Story movies

```sql
SELECT * FROM movies WHERE title LIKE "Toy Story%";
```

| id  | Title       | Director      | Year | Length_minutes |
| --- | ----------- | ------------- | ---- | -------------- |
| 1   | Toy Story   | John Lasseter | 1995 | 81             |
| 3   | Toy Story 2 | John Lasseter | 1999 | 93             |
| 11  | Toy Story 3 | Lee Unkrich   | 2010 | 103            |

#### 2. Find all the movies directed by John Lasseter

```sql
SELECT * FROM movies WHERE director = "John Lasseter";
```

| id  | Title        | Director      | Year | Length_minutes |
| --- | ------------ | ------------- | ---- | -------------- |
| 1   | Toy Story    | John Lasseter | 1995 | 81             |
| 2   | A Bug's Life | John Lasseter | 1998 | 95             |
| 3   | Toy Story 2  | John Lasseter | 1999 | 93             |

#### 3. Find all the movies (and director) not directed by John Lasseter

```sql
SELECT title, director FROM movies WHERE director != "John Lasseter";
```

| Title           | Director       |
| --------------- | -------------- |
| Monsters, Inc.  | Pete Docter    |
| Finding Nemo    | Andrew Stanton |
| The Incredibles | Brad Bird      |

#### 4. Find all the WALL-\* movies

```sql
SELECT * FROM movies WHERE title LIKE "WALL-%" OR title LIKE "WALL%";
```

| id  | Title  | Director       | Year | Length_minutes |
| --- | ------ | -------------- | ---- | -------------- |
| 9   | WALL-E | Andrew Stanton | 2008 | 104            |
| 87  | WALL-G | Brenda Chapman | 2042 | 97             |

---

## Lesson 4

#### 1. List all directors of Pixar movies (alphabetically), without duplicates

```sql
SELECT DISTINCT director FROM movies ORDER BY director;
```

| Director       |
| -------------- |
| Andrew Stanton |
| Brad Bird      |
| Brenda Chapman |

#### 2. List the last four Pixar movies released (ordered from most recent to least)

```sql
SELECT title, year FROM movies ORDER BY year DESC LIMIT 4;
```

| Title               | Year |
| ------------------- | ---- |
| Monsters University | 2013 |
| Brave               | 2012 |
| Cars 2              | 2011 |
| Toy Story 3         | 2010 |

#### 3. List the first five Pixar movies sorted alphabetically

```sql
SELECT title FROM movies ORDER BY title LIMIT 5;
```

| Title        |
| ------------ |
| A Bug's Life |
| Brave        |
| Cars         |
| Cars 2       |
| Finding Nemo |

#### 4. List the next five Pixar movies sorted alphabetically

```sql
SELECT title FROM movies ORDER BY title LIMIT 5 OFFSET 5;
```

| Title               |
| ------------------- |
| Monsters University |
| Monsters, Inc.      |
| Ratatouille         |
| The Incredibles     |
| Toy Story           |
