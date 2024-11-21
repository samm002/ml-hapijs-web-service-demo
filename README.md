<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

# Skin Cancer Classification

<p>
This is a demo project based on the Dicoding course:  
<a href="https://www.dicoding.com/academies/658">Belajar Penerapan Machine Learning dengan Google Cloud</a>.
</p>

<p>
The frontend repository and machine learning model are provided as part of the course.  
All copyright belongs to Dicoding. This repository is created for practice and learning purposes.
</p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
<p>API to interact with machine learning model for classifying 3 category of skin cancer based on image input</p>
<ul>
  <li>Melanocytic nevi</li>
  <li>Squamous cell carcinoma</li>
  <li>Vascular lesion</li>
</ul>

### Built With

- Hapi.js

- Firestore

<p><i>You can check express branch for the app build using express</i></p>

<!-- GETTING STARTED -->

## Getting Started

Currently using Node.js version 18.16.1 for Windows compatibility to run @tensorflow/tfjs-node dependecies.

- Model [source](https://github.com/dicodingacademy/a658-machine-learning-googlecloud/releases/tag/serta-mulia-model)
- Frontend [repository](https://github.com/dicodingacademy/serta-mulia) (please replace `append` with `set` in `src/scripts/main.js` (line `59` and `69`) to avoid input image error)

### Prerequisites

Make sure to have these condition applied

- Node.js version 18.16.1 (recommended)

- Python version > 3.x.x

- Visual Studio Build Tools 2019 or newer with "Desktop development with C++" workload (windows only, refer to this [disscusion 1](https://github.com/tensorflow/tfjs/issues/7939), [disscusion 2](https://github.com/tensorflow/tfjs/issues/7341), [disscusion 3](https://github.com/tensorflow/tfjs/issues/7793) if still facing issue)

- node-gyp installed globally

  ```sh
    npm install -g node-gyp
  ```
- [gcloud CLI](https://cloud.google.com/sdk/docs/install) installed for authorizing to your GCP project

- [Model](https://github.com/dicodingacademy/a658-machine-learning-googlecloud/releases/tag/serta-mulia-model) stored in cloud storage and accesible for public

- Default native firestore database configured

### Installation

1. Authorize and configure GCP project
   ```sh
   gcloud init
   ```

2. Clone the repo
   ```sh
   git clone https://github.com/samm002/ml-hapijs-web-service-demo.git
   ```

3. Install NPM packages
   ```sh
   npm install
   ```

4. Rename `.env.example` to `.env` and fill in your model url 
   ```sh
   MODEL_URL='your model url'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Run project
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/samm002/ml-hapijs-web-service-demo.svg?style=for-the-badge
[contributors-url]: https://github.com/samm002/ml-hapijs-web-service-demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/samm002/ml-hapijs-web-service-demo.svg?style=for-the-badge
[forks-url]: https://github.com/samm002/ml-hapijs-web-service-demo/network/members
[stars-shield]: https://img.shields.io/github/stars/samm002/ml-hapijs-web-service-demo.svg?style=for-the-badge
[stars-url]: https://github.com/samm002/ml-hapijs-web-service-demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/samm002/ml-hapijs-web-service-demo.svg?style=for-the-badge
[issues-url]: https://github.com/samm002/ml-hapijs-web-service-demo/issues
[product-screenshot]: images/screenshot.png
