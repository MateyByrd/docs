<h2 align="center">Nick's Wiki</h2>

[![Website Status](https://img.shields.io/website?down_color=critical&down_message=down&up_color=success&up_message=online&url=https%3A%2F%2Fwiki.nickbelzer.me)](https://wiki.nickbelzer.me)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


This repository contains the source code for the wiki hosted at [wiki.nickbelzer.me](https://wiki.nickbelzer.me). The project is based on [Hugo](https://gohugo.io/), for the generation of the site in a static manner, and [Github Pages](https://pages.github.com/) for hosting.

### Getting Started

These instructions should get you started running a local copy on your own machine.

#### Prerequisites
You should have both [Hugo](https://gohugo.io/getting-started/quick-start/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

#### Installation

Before being able to run the project locally, you need to install the following packages, [postcss-cli](https://www.npmjs.com/package/postcss-cli) and [autoprefixer](https://www.npmjs.com/package/autoprefixer), globally using npm as [they are required](https://gohugo.io/hugo-pipes/postcss/) for the Hugo PostCSS pipe:
```bash
npm install -g postcss-cli autoprefixer
```

Next you need to locally install the dependencies for the theme in `themes/docs/` by running:
```bash
# If you are not yet in the themes/docs/ folder:
cd themes/docs/

# Install dependencies:
npm install
```

#### Running

Hugo can act as a hot-reloading version of the website during development using the following command:
```bash
# Run this at the project root.
hugo server --disableFastRender
``` 
We use the `--disableFastRender` flag to make sure the full project is rebuilt upon change. This improves some incoherent behaviour while quickly iterating with the cost of increased build times.

#### Building

For production Hugo generates a set of files that can be statically hosted. The building can be done using the following command:
```bash
hugo --minify
```

Here the `--minify` flag creates a minified version of the output files like `HTML`, `CSS` or `JS`. 

When the build is finished the files are placed in the `public/` folder.

### Deployment

Once built the project can simply be deployed by hosting the files placed in the `public/` folder on a server.

This repository is hosted through Github Pages, the latest version of the `master` branch is deployed in to the `gh-pages` branch using a Github Workflow/Action which can be found in the `.github/workflows/` folder.


### Contributing

 The repository mostly contains personal content but help is always appreciated. In case you find an error, from a simple spelling mistake to errors in the code, please let me know. You can contact me either directly or through creating an issue.
 
 ### Acknowledgements
 
 -  [dirkolbrich/hugo-theme-tailwindcss-starter](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter) - Configuring Hugo with TailwindCSS. 
 