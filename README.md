
# Video Card Management Project

This project is part of the Oracle Next Education program and is built using JavaScript and React. It allows users to create and edit video cards as well as view generated videos. 

## Features

- **Create Video Cards**: Easily create new video cards with custom details.
- **Edit Video Cards**: Modify existing video cards to update video details.
- **View Videos**: Access and watch the generated videos directly from the application.

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Application

To start the application, you need to activate the JSON Server which hosts the data for the videos. Run the following command:

```sh
npx json-server --watch src/data/db.json --port 3001
```

Then, in another terminal window, start the React development server:

```sh
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## JSON File

The `db.json` file located in the `src/data/` directory contains pre-generated videos which can be edited through the application. This file is used as the data source for the JSON Server.

## Project Structure

- `src/`: Contains the source code of the React application.
- `src/data/`: Contains the `db.json` file with the video data.
- `public/`: Public assets and the main HTML file.

## Contribution

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
