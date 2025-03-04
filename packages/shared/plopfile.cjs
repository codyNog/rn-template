module.exports = (plop) => {
  plop.setGenerator("domain", {
    description: "domain",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "domain name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "domain/{{pascalCase name}}/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/index.test.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/mock/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/mock/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/modules/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/modules/index.test.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/modules/index.test.ts.hbs",
      },
    ],
  });
  plop.setGenerator("schema", {
    description: "schema",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "schema name please",
      },
    ],
    actions: [
      {
        type: "append",
        path: "db/schemas/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/db/schema/index.ts.hbs",
      },
    ],
  });
  plop.setGenerator("route", {
    description: "route",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "route name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "api/route/{{snakeCase name}}/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/api/route/index.ts.hbs",
      },
    ],
  });
};
