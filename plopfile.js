export default function (plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "Create new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/component/component-script.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "plop-templates/component/component-stylesheet.hbs",
      },
    ], // array of actions
  });
}
