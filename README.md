# IBM D-NA Egypt 2019 Hackathon Landing Page

  
> Project Directed towards establishing a landing page

### Contributors

- Ahmed Abd El-Aziz (abdelazizelsaman)
 - Omar I. Handouk (Omar-Handouk)

___
### Linting Guidelines

**Before pushing any code to the repository ensure that linting guidelines are followed.**

___

***Requirements***

  

- Visual Studio Code

- Beautify Plugin For Visual Studio Code

- NPM

- Prettier

___

#### Prettier Installation

```sh

$ npm install --global prettier

```

___

#### Linting Steps

**Important: Ensure that your project directory contains *.prettierconfig.json & .prettierignore***

  

- Ensure that you are using files in their base extension (html - js - css)

- Press F1 and type in Beautify File

- Open Bash and run the following commands (Manually)

```sh

$ prettier --write **/*.js

$ prettier --write --html-whitespace-sensitivity strict **/*.html

$ prettier --write **/*.css

```

- Alternatively to run the commands automatically using a bash script

**Ensure you are at the *root* of the project directory**

**Run the chmod command for the first time only or whenever the script outputs access denied**

```sh

$ chmod 775 ./scripts/linting.sh

$ ./linting.sh

```
