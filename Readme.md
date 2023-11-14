# am-ecomhelper

## 1. MongoDB Connection Utility

A robust utility designed to streamline MongoDB connections using Mongoose within your Node.js applications. This versatile tool simplifies the process of establishing secure and efficient connections to MongoDB databases, enhancing the development experience for seamless integration with your Node.js projects.

## Installation

To use this utility, make sure you have Node.js installed. Then, install the required dependencies:

```bash
npm install mongoose
```

## About Function

This is how the function is working internally.

- #### Prototype

```javascript
Connect_MongoDB(Mongo_URI, family);
```

- #### Details

```
Default -
    Mongo_URI: "mongodb://localhost:27017"
    family: 4, 6
Details -
    Mongo_URI = MongoDB connection string.
    family: IP version (4 for IPv4, 6 for IPv6).
    return  Promise<boolean>;
```

#### Error Handling

The utility throws an error if the MongoDB connection fails. Ensure to handle errors appropriately in your application.

## Documentation

To learn how to use this package properly Read the offical documentation (Link provided below). Just need to copy and paste the code provided in this documentation.

[![Documentation](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://anirban-629.hashnode.dev/package-am-ecomhelper-01)

## 2. Model Creation

- Mongoose simplifies MongoDB data modeling in Node.js, providing an elegant schema-based solution. It enhances data validation, facilitates schema creation, and streamlines interactions with MongoDB, enabling efficient and structured data management in applications.

  - But, my package revolutionizes Mongoose and MongoDB integration, providing unparalleled ease in schema creation, validation, and data modeling for Node.js applications, ensuring seamless development and enhanced productivity

- ### Schema Object Creation

  Here the packages Provides 5 functions to create schema object

  ```javascript
  function(...)             => return type

  generateStringField(...)  => object
  generateDateField(...)    => object
  generateBooleanField(...) => object
  generateNumberField(...)  => object
  generateRefIdField(...)   => object
  ```

- #### Prototype

  - All the parameters are optional and depends on your application configuration if you don't want to use a single one then also it'll work accordingly
  - Suppose If you wnat to use the `_default` but you don't want to use `required` in that case you've to provide a **`undefined`** for those parameters

  |     | **generateStringField(...)** | **generateNumberField(...)** | **generateDateField(...)** | **generateBooleanField(...)** | **generateRefIdField(...)** |
  | --- | ---------------------------- | ---------------------------- | -------------------------- | ----------------------------- | --------------------------- |
  | 1   | required (Boolean)           | required (Boolean)           | required (Boolean)         | required (Boolean)            | required (Boolean)          |
  | 2   | \_default (Str/Num/Bool)     | \_default (Num/Bool)         | \_default (Date/Bool)      | \_default (Boolean)           | ref (String)                |
  | 3   | unique (Boolean)             | unique (Boolean)             | unique (Boolean)           | -                             | -                           |
  | 4   | lowerCase (Boolean)          | min (Number)                 | min (Number)               | -                             | -                           |
  | 5   | upperCase (Boolean)          | max (Number)                 | max (Number)               | -                             | -                           |
  | 6   | minLength (Number)           | -                            | expires (Num/Str)          | -                             | -                           |
  | 7   | maxLength (Number)           | -                            | -                          | -                             | -                           |

- #### Details

  ```javascript
  const testSchema = {
    name: generateStringField(
      true,
      "ANIRBAN MISHRA",
      false,
      false,
      true,
      7,
      20
    ),
    Date: generateDateField(
      true,
      new Date(),
      false,
      new Date(),
      new Date("2023-12-31"),
      60 * 60 * 24
    ),
    //24 Hours In Seconds,
    isAdmin: generateBooleanField(true, false),
    age: generateNumberField(true, 20, false, 18, 100),
    ref_model: generateRefIdField(true, "User"),
  };
  ```

  - #### Parameter Skipping

    - If you don't need a parameter you can a skip it

    ```javascript
    const testSchema = {
      name: generateStringField(undefined,"ANIRBAN MISHRA",false,undefined,true,7,20)
      ...
    };
    ```

- ##### Advantage

  1. This is how easier to use this function to create the schema object.
  1. Each and every parameters are given in the prototype table.
  1. It makes the code shorter and more easy to understand for freshers.
  1. This Will generate the schema object not the schema, now the next thing is to create the model using this schema object

- ### Model Creation

  Previously the discussion was regarding schema object creation, now after the schema is created we need to create a mongoose model

  Here am-ecomhelper provides a function to create a model

  ```js
  createMongooseModel("test", schema, true);
  ```

  - Parameters

    ```
    createMongooseModel("database_model_name", schema, timestamps);

    Default -
        database_model_name: string
        schema: object
        timestamps: false
    ```

- Details
  ```js
  const testModel = createMongooseModel("test", schema, true);
  model1.create({
    name: "ANIRBAN Mishra",
    Date: Date.now(),
    isAdmin: false,
    age: 145,
    ref_model: "65530ce5e081d5e1a255025b",
  });
  ```
  - This will give me a mongoose model where I can perform all other actions like
  ```bash
  .create()
  .deleteOne()
  .findById()
  .findOne()
  .find()
  .deleteOne()
  ...
  ```

## Feedback

If you have any feedback, please reach out at my

[![email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:anirbanmishra7005@gmail.com)

## Issues

If you are facing issuses while using this package, you can raise issue in the official github repository's Isuuse Section. [Clice here to raise an issue](https://github.com/anirban-629/am-ecomhelper/issues/new)

## License

<!-- [MIT](https://choosealicense.com/licenses/mit/) -->

MIT License

Copyright (c) 2023 ANIRBAN MISHRA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

[@anirban-629](https://github.com/anirban-629/)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-anirban.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/a-mishra810/)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/anirban.misra_184/)
