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
  <a href="https://github.com/tirthajyoti-ghosh/react-redux-capstone">
    <img src="./public/naruto.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Animex</h3>

  <p align="center">
    Anime browsing wep app created with React/Redux and Jikan API.
    <br />
    <a href="https://github.com/tirthajyoti-ghosh/react-redux-capstone"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ghosh-animex.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/react-redux-capstone/issues">Report Bug</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/react-redux-capstone/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

This is a Single Page Application (SPA) built with React and Redux to browse and search animes. The design of the web app resembles Netflix. The data is fetched from [Jikan API](https://jikan.docs.apiary.io/#).

![image](https://user-images.githubusercontent.com/57726348/100578687-ce5eb400-3308-11eb-9746-1bd37d560d21.png)
![image](https://user-images.githubusercontent.com/57726348/97852749-295ab680-1d1d-11eb-9d6b-98a359508aaa.png)
![image](https://user-images.githubusercontent.com/57726348/100578778-fb12cb80-3308-11eb-8dd8-9b8255e8a8b6.png)
![image](https://user-images.githubusercontent.com/57726348/101772795-db05b800-3b11-11eb-8633-76033d18bf15.png)

#### Routes:

* `/` - home page.
* `/genre/:genreId/:genreName` - genre page.
* `/anime/:animeId` - anime details page

#### Features:

* Search anime
* Browse anime
* View anime details

### Built With

- React
- Redux
- ESLint
- Stylelint
- SASS
- Styled components
- npm
- Jikan API
- React-burger-menu
- Prop-types
- [Netlify](https://ghosh-animex.netlify.app/)

## Live demo

Deployed to Heroku - [live demo](https://ghosh-animex.netlify.app/).

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
    git clone https://github.com/tirthajyoti-ghosh/Animex.git
    ```

2. Change directory

    ```sh
    cd Animex
    ```

3. Install NPM packages

    ```sh
    npm install
    ```

4. Start the local server

    ```sh
    npm start
    ```

<!-- ROADMAP -->
## Roadmap

Check the [issues](https://github.com/tirthajyoti-ghosh/Animex/issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

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

👤 **Tirthajyoti Ghosh**

- Website: [ghosh.tech](https://ghosh.tech)
- GitHub - [@tirthajyoti-ghosh](https://github.com/tirthajyoti-ghosh)
- Twitter - [@terrific_ghosh](https://twitter.com/terrific_ghosh)
- LinkedIn - [@tirthajyoti-ghosh](https://www.linkedin.com/in/tirthajyoti-ghosh/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* Design inspirations
  * [Netflix-Redesign-challenge-on-Uplabs](https://dribbble.com/shots/5093535-Netflix-Redesign-challenge-on-Uplabs)
  * [Netflix-Redesign-Idea](https://dribbble.com/shots/5253521-Netflix-Redesign-Idea)
* README Icon from Icons8
* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tirthajyoti-ghosh/react-redux-capstone.svg?style=flat-square
[contributors-url]: https://github.com/tirthajyoti-ghosh/react-redux-capstone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tirthajyoti-ghosh/react-redux-capstone.svg?style=flat-square
[forks-url]: https://github.com/tirthajyoti-ghosh/react-redux-capstone/network/members
[stars-shield]: https://img.shields.io/github/stars/tirthajyoti-ghosh/react-redux-capstone.svg?style=flat-square
[stars-url]: https://github.com/tirthajyoti-ghosh/react-redux-capstone/stargazers
[issues-shield]: https://img.shields.io/github/issues/tirthajyoti-ghosh/react-redux-capstone.svg?style=flat-square
[issues-url]: https://github.com/tirthajyoti-ghosh/react-redux-capstone/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://github.com/tirthajyoti-ghosh/react-redux-capstone/blob/development/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tirthajyoti-ghosh/
