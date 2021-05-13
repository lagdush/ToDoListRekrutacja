module.exports = (plop) => plop.setGenerator("FCC", {
       description: "Create a functional component",
       prompts: [
           {
               type: "input",
               name: "name",
               message: "What is your component name",
           },
       ],
       actions: [
           {
               type: "add",
               path:"src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
               templateFile: "plop-template-ts/functionalComponent.tsx.hbs",
           },
       ],
   });