![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white "Node.js")
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black "Javascript")
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white "Express")
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white "HTML5")
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white "CSS3")

# Timestamp Project  

The timestamp project is one of the projects in the freeCodeCamp.org [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects) course.  

## Table of Contents  

- [Requirements](#requirements)
- [How to use](#how-to-use)
- [Project structure](#project-structure)
- [Preview](#preview)
- [License](#license)
- [Author](#author)

## <a name="requirements"></a>Requirements

  - Node: >=20.0.0 <21

## How to Use

1. **Install the packages:**
   ```sh
   npm install
   ```
   
2. **Initialize the server:**
   ```sh
   npm run start
   ```

3. **Make a GET request to** `http://localhost:{env.PORT}/api/:date?`

*date* accepts the following formats:
  - [Milliseconds](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range)
  - Date string ("Fri, 25 Dec 2015 00:00:00 GMT", "2015-12-25", etc.)
  
**Note:** A query without a parameter will return the current time.

4. **To test the project:**
   ```sh
   npm run test
   ```  
## <a name="project-structure"></a>Project Structure

```
/project-root
    src/
        app.js           # Main entry point for the application  
        views/           # Client-side code
        api/             # Server-side code  
        tests/           # Tests of the project
```

## <a name="preview"></a>Preview
![timestamp project image preview](https://github.com/Wesley-Nunes/timestamp-project/assets/43190808/5bbfde97-34e3-4ed3-9064-eefdc57ab697)


## <a name="license"></a>License

The code is under the [MIT License](./LICENSE).

## <a name="author"></a>Author

Developed by @Wesley-Nunes  
[![Connect](https://img.shields.io/badge/-Connect-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dev-wesley-nunes/)](https://www.linkedin.com/in/dev-wesley-nunes/)
