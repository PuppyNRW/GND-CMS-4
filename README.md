# Gear and Dance Event Website (GND-CMS-4)

This repository contains the open-source website for the Gear and Dance Event. Built with Vue 3 + Vite, this template provides a robust setup for modern web development. We welcome contributions! If you'd like to contribute, please send a pull request.

## Getting Started

### Prerequisites

Ensure you have [Docker](https://www.docker.com/get-started) installed on your machine.

### Running with Docker Compose

1. Clone this repository.

   ```bash
   git clone <repository-url>
  ```
2. Navigate to the project directory.

  ```bash
  cd path/to/project
  ```

3. Start the project using Docker Compose.

  ```bash
  docker-compose up
  ```

4. Once the containers are up and running, you can access the website on your local machine via http://localhost:<your-port>, replacing <your-port> with the port number specified in the docker-compose.yml.

## Development Setup
### Recommended IDE Setup
- VS Code + Volar
- Add the following to your settings.json to enable autofix on save:
```json
Copy code
"editor.codeActionsOnSave": {
   "source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "vue"],
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
