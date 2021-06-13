# Vocabulary Practice (0.1.0)

- This web-app allows helps you memorize words that you want.
- You can provide list of words that you want to memorize, and it will ask 
you those words in random.
- You'd have option to set the status of that word
as 'MASTERED' or 'LEARNING', based on which it will put those words in different buckets.


# Providing WorldList

- You can provide the word list in form of a JSON file.
- The sample jsons are present in `src/data/`
- You need to create JSON with your custom name, you can then plug that JSON
`App.tsx`.
- The line you need to look for is: 
  ```
  const wordList: GREWord[] = require("./data/<your JSON Name>");
  ```
  
# Further Intended Features
- Uploading words from Excel
- Making website screen responsive
- Organizing quizzes

## Run Project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


