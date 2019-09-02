# Bulmally

### An accessibility ready frontend component framework for streamlining web development

This project contains a library of frontend components ready to be picked for use in web development projects. Each component has its own markup, styles and JS files if needed.

The visual representation of the component library can be found in https://{TODO}.io

## Usage

### Starting the project

You can get the project up and running by following these steps:

1. Clone the Git repository and navigate to the cloned folder. You can also fork the repository.
2. Run `npm install`
3. Run `npm start`
4. Open your browser and navigate to the URL provided by BrowserSync in your command line output.

Now you should be able to see the index of all Bulmally components!

### Creating a new component

When creating a new component, you need to follow these steps:

1. Create a folder for the component under the main folder
2. Add files for HTML, CSS and JS when needed.
3. You can copy the template files from the `boilerplate` folder. It is used to start new components.
4. You should namespace the component with a class `bulmally-component`, for example `bulmally-accordion`. This way the scope is easier to use in different projects.
5. When you add files, the watch should automatically detect all changes and reload the web browser.

## Developing and modifying existing components

The folder structure is pretty straight-forward: Each component has its own folder which contains the HTML, CSS and
possibly a JS file as well. All component folders are located under the main folder `components`. To modify an existing component, you
need to follow these steps:

1. Start the server (instructions above)
2. Navigate to the desired component folder and open its files you want to modify
3. Modify the files and check that they're loaded.
4. Save, copy or commit the changes depending on your use case and you're done!