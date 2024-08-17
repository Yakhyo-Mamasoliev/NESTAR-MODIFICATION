/*----------------------------------------------------------------
// // 95. Let's build NestJS and the ZOO Rest API project 
//     1 What is NestJS
//     2 NestJS ingredients
//     3 Module Decorator and its components
//     4 Zoo Project

// common nestjs terminal commands 
//     - nest g module cat => creates cat folder(with controller) in src folder
//     - nest g controller cat => creates cat folder(with controller) in src folder
//     - nest g service cat => creates cat folder(with service) in src folder

// - Nestar
//     Front - NextJS
//     Back - NESTJS

//     No Redux cos no errors come form backend 
//     Redux = not only it has store but it also check type

// NestJS is a framework for building backend  

// **Paradigms:**
// 1. **OOP**: Encapsulates data and behavior in objects.
// 2. **AOP**: Modularize cross-cutting concerns.
// 3. **Functional Programming**: Emphasizes pure functions and immutability.
// 4. **Reactive Programming**: Handles asynchronous data streams.

// // Nestar includes 4 patters
// // 1) MVC        A.P
// // 2) DI         A.P
// // 3) Middleware D.P
// // 4) Decorator  D.P

// Express is good for building large projects.

// // nestJS Ingredients:
// // 1) Controller => Creating Endpoints
// // 2) Modules => Adding Dependencies
// // 3) Services => Business Logic
// // 4) Guards => Authorization
// // 5) Pipes => Validation & Transformation

// Dependencies is required files
// DevDependency extra files

// The package.json file is a JavaScript Object Notation (JSON) file that serves as a central hub for managing a Node.js project's metadata, dependencies, scripts, and other essential information. It's located in the root directory of the project and helps with project management and configuration.

// app in main.ts is like app = express
// Decorator => enrich a js class

// ----------------------------------------------------------------
// 96 Nestar Monorepo Start
// two types of starting project 
//   - 1 standard mode, 
//       - "$ nest new my-project"
//       - if project is single server
      
//   - 2 Monorepo mode, 
//       - "$ nest new my-monorepo"
//       - if project is multiple server(not just one ipe server, batch server, crawling server, )

// ----------------------------------------------------------------
// 98 Create, connect New DB. Writing Enums
MONGO_DEV same link => 
MONGO_PROD same link => renew later
We do not use db of production cos it is risky(data of customers)

-InjectConnection: Injects a Mongoose connection instance.
-MongooseModule: Integrates Mongoose with NestJS.
-Connection: Represents a Mongoose connection to the database.

Connection ready state
     * - 0 = disconnected
     * - 1 = connected
     * - 2 = connecting
     * - 3 = disconnecting
     * - 99 = uninitialized
forRootAsync()  vs forRoot
() => forRoot() is used when you have a static or synchronous configuration for the module. You provide the configuration directly as an object. 
    MongooseModule.forRoot('mongodb://localhost:2007');

forRootAsync() => Configures the Mongoose connection asynchronously.
useFactory() =>  Provides a function to create the Mongoose configuration object. (such as selecting between production and development databases.)

URI = A Uniform Resource Identifier (URI) is a formal system for identifying resources.
URL = a Uniform Resource Locator (URL) is a type of URI that identifies a resource by its location.
Purpose: 
A URI's primary goal is to locate a resource, while a URL's primary goal is to obtain a resource's location or address. 
What they identify:
A URI can identify HTML, XML, and other files, while a URL can only identify web pages. 

run start:prod may not work on windows, later we run this using docker.container



----------------------------------------------------------------
*/