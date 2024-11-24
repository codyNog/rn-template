module.exports = (plop) => {
  // controller generator
  plop.setGenerator("cc", {
    description: "react client component",
    prompts: [
      // 入力させたい値につけたnameをactionsやtemplate内で参照できます
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile:
          "../../plop-templates/packages/app/client-component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/hooks/index.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/modules/index.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/modules/index.test.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/client-component/index.stories.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("sc", {
    description: "react server component",
    prompts: [
      // 入力させたい値につけたnameをactionsやtemplate内で参照できます
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile:
          "../../plop-templates/packages/app/server-component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/server-component/index.stories.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("form", {
    description: "react form component",
    prompts: [
      // 入力させたい値につけたnameをactionsやtemplate内で参照できます
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.tsx",
        templateFile: "../../plop-templates/packages/app/form/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/hooks/index.ts",
        templateFile:
          "../../plop-templates/packages/app/form/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.ts",
        templateFile:
          "../../plop-templates/packages/app/form/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.test.ts",
        templateFile:
          "../../plop-templates/packages/app/form/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/types/index.ts",
        templateFile:
          "../../plop-templates/packages/app/form/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/form/index.stories.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("layout", {
    description: "layout",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "layout name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/layouts/{{name}}/index.tsx",
        templateFile: "../../plop-templates/packages/app/layout/index.tsx.hbs",
      },
      {
        type: "add",
        path: "app/{{name}}/layout.ts",
        templateFile: "../../plop-templates/packages/app/layout/layout.ts.hbs",
      },
    ],
  });
  plop.setGenerator("screen", {
    description: "screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "screen name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{snakeCase name}}/index.tsx",
        templateFile: "../../plop-templates/packages/app/screen/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{snakeCase name}}/hooks/index.ts",
        templateFile:
          "../../plop-templates/packages/app/screen/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "app/{{snakeCase name}}/index.ts",
        templateFile: "../../plop-templates/packages/app/screen/index.ts.hbs",
      },
    ],
  });
  plop.setGenerator("ui", {
    description: "ui",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "ui name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/ui/{{name}}/index.tsx",
        templateFile: "../../plop-templates/packages/app/ui/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/ui/{{name}}/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/ui/index.stories.tsx.hbs",
      },
    ],
  });
};
