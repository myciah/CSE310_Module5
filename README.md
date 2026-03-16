# Overview

The purpose of this project was to practice using TypeScript and to explore how TypeScript improves JavaScript by adding strong typing and better development tools.

The software is a command-line directory scanning tool written in TypeScript. The program allows a user to enter a folder path, and it will recursively scan through the directory and all of its subdirectories to locate files. As it scans, the program collects information about each file, including its file path and size. After the scan completes, the program displays a list of the discovered files, the total number of files found, and identifies the largest file in the scanned directory.

The purpose of writing this software was to gain hands-on experience with TypeScript features such as classes, typed variables, arrays, asynchronous functions, recursion, and exception handling. Building a practical tool like a directory scanner helped reinforce how TypeScript can be used with Node.js to interact with the file system and build useful command-line utilities.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

The software was developed using Visual Studio Code as the primary development environment. Visual Studio Code provided helpful tools such as syntax highlighting, TypeScript integration, and debugging features that made it easier to write and test the program.

The programming language used in this project was TypeScript. TypeScript is a strongly typed language that builds on JavaScript and compiles into standard JavaScript so it can run in environments like Node.js. The project also used Node.js built-in libraries, including the `fs` module for interacting with the file system, the `path` module for working with file paths, and the `readline` module to accept input from the terminal.

Additionally, the TypeScript compiler (`tsc`) and `ts-node` were used to compile and run the TypeScript code during development.

# Useful Websites

The following websites were helpful resources for learning TypeScript and understanding how to implement the features used in this project:

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [W3Schools](https://www.w3schools.com/typescript/index.php)

# AI Usage Disclosure

AI tools were used during the development of this project as a learning aid and reference tool. The goal of using AI was to better understand TypeScript syntax, Node.js modules, and general programming concepts while still writing and understanding the software myself.

AI was primarily used in the following ways:

• **Project idea exploration:** AI was used to explore possible project ideas that would demonstrate required TypeScript features such as recursion, classes, arrays, and asynchronous functions. The idea of building a recursive directory scanner was chosen because it naturally demonstrates these concepts in a practical way.

• **Understanding TypeScript syntax:** AI was helpful for clarifying how TypeScript typing works, particularly when defining class properties, typed arrays, and function parameters. This helped me understand how TypeScript improves JavaScript by adding stronger type safety.

• **Troubleshooting development environment issues:** AI assisted with resolving errors related to the TypeScript environment, including installing Node.js type definitions (`@types/node`), configuring the TypeScript compiler, and resolving module import errors in Visual Studio Code.

• **Debugging runtime errors:** AI provided guidance when running the program using `tsc` and `node`, helping identify issues such as incorrect filenames and how the TypeScript compilation process works.

Some code examples were initially suggested with AI assistance while learning how to interact with Node.js file system functions and how recursion could be used to scan directories. However, the code was reviewed, modified, and tested to ensure that I fully understood how it worked. The final program structure, testing, and debugging process were completed while ensuring I understood every part of the code.

Through this process, I learned how to:
- Use TypeScript with Node.js to build command-line applications
- Work with built-in Node.js modules such as `fs`, `path`, and `readline`
- Implement recursion to scan nested directory structures
- Use asynchronous functions with `async` and `await`
- Compile TypeScript code into JavaScript and run it using Node.js

AI served as a support tool to help explain concepts and resolve issues, but the focus remained on understanding how the code works and how TypeScript can be used to build useful applications.

# Future Work

There are several improvements that could be made to expand the functionality of this program in the future.

- Add filtering options so users can search for specific file types.
- Improve the output formatting to make the results easier to read when scanning large directories.
- Add an option to export the results of the scan to a file such as a JSON or CSV report.