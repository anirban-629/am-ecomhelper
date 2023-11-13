interface DynamicInterface {
  [key: string]: {
    type: string;
    required: boolean;
    unique?: boolean;
    default?: false | number | boolean | string;
  };
}

function generateInterface(
  arr: {
    [key: string]:
      | {
          type: string;
          required: boolean;
          unique?: boolean;
          default?: false | number | boolean | string;
        }
      | undefined;
  }[]
): DynamicInterface {
  const dynamicInterface: DynamicInterface = {};

  arr.forEach((item) => {
    if (item) {
      const key = Object.keys(item)[0];
      if (key) {
        dynamicInterface[key] = {
          type: item[key]?.type || "",
          required: item[key]?.required || false,
          unique: item[key]?.unique,
          default: item[key]?.default,
        };
      }
    }
  });

  return dynamicInterface;
}

const arr = [
  {
    name: {
      type: "String",
      required: true,
    },
  },
  {
    email: {
      type: "String",
      required: true,
      unique: true,
      default: "example@example.com",
    },
  },
  {
    password: {
      type: "String",
      required: true,
    },
  },
  {
    isAdmin: {
      type: "Boolean",
      required: true,
      default: false,
    },
  },
];

const generatedInterface = generateInterface(arr);

console.log(generatedInterface);
