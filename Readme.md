# am-ecomhelper

### 1. MongoDB Connection Utility

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

## Feedback

If you have any feedback, please reach out at my

[![email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:anirbanmishra7005@gmail.com)

## Issues

If you are facing issuses while using this package, you can raise issue in the official github repository's Isuuse Section. [Clice here to raise an issue](https://github.com/anirban-629/am-ecomhelper/issues/new)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

[@anirban-629](https://github.com/anirban-629/)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-anirban.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/a-mishra810/)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/anirban.misra_184/)
