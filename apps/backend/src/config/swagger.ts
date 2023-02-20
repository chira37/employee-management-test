import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    info: {
      title: "Employee management api doc",
      description: "Employee management api doc",
      version: "1.0.0",
    },
    host: "localhost:8080",
    basePath: "/api",
  },
  apis: ["./src/modules/employee/docs/index.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
