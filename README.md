<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: MIT][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tirthajyoti-ghosh/weather-app">
    <img src="https://user-images.githubusercontent.com/57726348/88449500-02aafb00-ce65-11ea-9a69-1bc31d6d649e.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Weather App</h3>

  <p align="center">
    A weather app that shows weather data by city.
    <br />
    <a href="https://github.com/tirthajyoti-ghosh/weather-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tirthajyoti-ghosh/weather-app">View Demo</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/weather-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/weather-app/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

![Weather App Screenshot](https://user-images.githubusercontent.com/57726348/88449813-ae554a80-ce67-11ea-8500-0e3505daf29a.png)

This is a weather app that shows temperatures (current, feels like, min, max), cloudiness (%), and wind speed (m/s) by city name. The city name is obtained from form input. This app consumes OpenWeather API in the `JSON` format to show weather data.

Data points consumed:

* City name
* Country code
* Weather description
* Weather icon
* Current temperature
* Feels like temperature
* Minimum temperature
* Maximum temperature
* Cloudiness
* Wind speed

### Built With

* Material Design Lite
* OpenWeatherMap
* Webpack
* ES6

## Live demo

Deployed to Raw Githack - [live demo](https://rawcdn.githack.com/tirthajyoti-ghosh/weather-app/0b69b93c02b080fa740a2ec65031f403675c142d/dist/index.html).

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm

    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/tirthajyoti-ghosh/weather-app.git
    ```

2. Install NPM packages

    ```sh
    npm install
    ```

3. Start local server

    ```sh
    npm run dev
    ```
    
4. Visit `http://localhost:8080/` in your browser.

   OR

   Navigate to the `/dist` folder and open the `index.html` in your browser.

<!-- USAGE EXAMPLES -->
## Usage

![Usage example](https://user-images.githubusercontent.com/57726348/88450206-d98d6900-ce6a-11ea-9256-f20becd92fe2.jpg)

1. Enter the city name and press the `Enter` key.
2. Weather data is displayed here.
3. These are buttons to convert the temperature in their respective units.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/tirthajyoti-ghosh/weather-app/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Tirthajyoti Ghosh - [@terrific_ghosh](https://twitter.com/terrific_ghosh) - itirthahere@gmail.com

Project Link: [https://github.com/tirthajyoti-ghosh/weather-app](https://github.com/tirthajyoti-ghosh/weather-app)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [OpenWeatherMap](https://openweathermap.org/api)
* README Icon made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com)
* [Material Design Lite](https://getmdl.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tirthajyoti-ghosh/weather-app.svg?style=flat-square
[contributors-url]: https://github.com/tirthajyoti-ghosh/weather-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tirthajyoti-ghosh/weather-app.svg?style=flat-square
[forks-url]: https://github.com/tirthajyoti-ghosh/weather-app/network/members
[stars-shield]: https://img.shields.io/github/stars/tirthajyoti-ghosh/weather-app.svg?style=flat-square
[stars-url]: https://github.com/tirthajyoti-ghosh/weather-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/tirthajyoti-ghosh/weather-app.svg?style=flat-square
[issues-url]: https://github.com/tirthajyoti-ghosh/weather-app/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://github.com/tirthajyoti-ghosh/weather-app/blob/development/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tirthajyoti-ghosh/
