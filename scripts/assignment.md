# Node.js Assignment

Complete **all** the questions below. Each question must be solved in a **separate `.js` file** inside a new folder called `assignment/` within the `scripts/` directory.

---

## Question 1 — Hello & Process

**File:** `assignment/q1-process.js`

Write a script that:

1. Prints `"Welcome to Node.js!"` to the console.
2. Prints the current **process ID** (`process.pid`).
3. Prints the **Node.js version** being used (`process.version`).

**Run:** `node q1-process.js`

---

## Question 2 — Command Line Calculator

**File:** `assignment/q2-calculator.js`

Build a CLI calculator that accepts a **command** and **two or more numbers** as arguments.

Supported commands:

| Command     | Behaviour                        |
| ----------- | -------------------------------- |
| `sum`       | Adds all the numbers             |
| `product`   | Multiplies all the numbers       |
| `max`       | Prints the largest number        |
| `min`       | Prints the smallest number       |
| `average`   | Prints the average of the numbers|

**Requirements:**

- If no command is given, print `"Please provide a command"` and exit.
- If fewer than 2 numbers are given, print `"Please provide at least 2 numbers"` and exit.
- If an unknown command is given, print `"Unknown command: <command>"`.

**Example runs:**

```bash
node q2-calculator.js sum 10 20 30        # Output: 60
node q2-calculator.js average 10 20 30    # Output: 20
node q2-calculator.js max 5 99 12         # Output: 99
```

---

## Question 3 — File System Operations

**File:** `assignment/q3-file-ops.js`

Write a script that does the following **in order**:

1. Creates a folder called `output` (use `recursive: true`).
2. Writes a file `output/info.txt` with the content:
   ```
   Name: <your name>
   Date: <today's date>
   ```
3. Reads the file back and prints its contents to the console.
4. Creates a subfolder `output/backup`.
5. Writes a copy of the same content to `output/backup/info-backup.txt`.
6. Lists all files inside the `output` folder (recursively) and prints their names.

**Run:** `node q3-file-ops.js`

---

## Question 4 — Path Module

**File:** `assignment/q4-paths.js`

Write a script that prints the following information about **itself**:

1. The full absolute file path (`__filename`)
2. The directory it is in (`__dirname`)
3. Just the file name (use `path.basename`)
4. The file extension (use `path.extname`)
5. The **parent directory** of the current directory (use `path.join` with `..`)

**Run:** `node q4-paths.js`

---

## Question 5 — Error Handling

**File:** `assignment/q5-errors.js`

Write a script that contains **three** functions, each demonstrating `try/catch`:

### Part A — `safeDivide(a, b)`
- Returns `a / b`.
- If `b` is `0`, throw an error with the message `"Cannot divide by zero"`.
- Call the function with `b = 0`, catch the error, and print a friendly message.

### Part B — `safeReadFile(filePath)`
- Uses `fs.readFileSync` to read the given file.
- If the file does not exist, catch the error and print `"File not found: <filePath>"`.
- Call it with a file path that does **not** exist.

### Part C — `safeParseJSON(jsonString)`
- Uses `JSON.parse` to parse the given string.
- If parsing fails, catch the error and print `"Invalid JSON string"`.
- Call it once with a valid JSON string and once with an invalid one.

**Run:** `node q5-errors.js`

---

## Question 6 — Mini Data Store

**File:** `assignment/q6-datastore.js`  
**Data file:** `assignment/store.json` (create with initial content `{}`)

Build a **command-line data store** that stores data in a JSON file. It should support any entity type (e.g., `book`, `movie`, `todo`).

### Supported operations:

| Command | Usage | Description |
|---------|-------|-------------|
| `add`    | `node q6-datastore.js <entity> add <key>:<value> <key>:<value> ...` | Adds a new record |
| `list`   | `node q6-datastore.js <entity> list` | Lists all records of that entity |
| `get`    | `node q6-datastore.js <entity> get <key>=<value>` | Gets a single record matching the condition |
| `delete` | `node q6-datastore.js <entity> delete <key>=<value>` | Deletes records matching the condition |
| `edit`   | `node q6-datastore.js <entity> edit <key>:<newValue> <key>=<value>` | Edits a record matching the condition |

### Requirements:

1. Read existing data from `store.json` at the start.
2. Write updated data back to `store.json` after any mutation (`add`, `delete`, `edit`).
3. If the entity type does not exist yet, create an empty array for it.
4. For `add`: At least one `key:value` pair is required. Print `"Record added successfully"` on success.
5. For `list`: Print all records in a readable format. If none exist, print `"No <entity> records found"`.
6. For `get`: Print the matching record. If not found, print `"No <entity> found with <key> = <value>"`.
7. For `delete`: Remove matching records and print `"Record(s) deleted"`. If none matched, print `"No matching records found"`.
8. For `edit`: Update the matching record's properties and print `"Record updated"`. If not found, print `"No <entity> found with <key> = <value>"`.
9. If no operation is provided, print `"Usage: node q6-datastore.js <entity> <operation> [args...]"`.

### Example runs:

```bash
node q6-datastore.js book add title:Atomic-Habits author:James-Clear
# Output: Record added successfully

node q6-datastore.js book add title:Deep-Work author:Cal-Newport
# Output: Record added successfully

node q6-datastore.js book list
# Output: [ { title: 'Atomic-Habits', author: 'James-Clear' }, { title: 'Deep-Work', author: 'Cal-Newport' } ]

node q6-datastore.js book get title=Deep-Work
# Output: { title: 'Deep-Work', author: 'Cal-Newport' }

node q6-datastore.js book edit title:Atomic-Habits-2.0 title=Atomic-Habits
# Output: Record updated

node q6-datastore.js book delete title=Deep-Work
# Output: Record(s) deleted
```
