# Aurora

Widget oriented framework. Is a work in progress, all contributions are welcome.

## Installing

### Install dependencies

    $ npm install

### Build framework

    $ npm run build

You can also start a watcher process that will do a rebuild whenever one of the files changes:

    $ npm run watch

### Run tests
    
    $ npm run test

## Running the example

### Build example

    $ npm run build-example

### Run example

    $ npm run example

## Making a new component

To build a new component you can run

    $ npm run make-component

This script will create the files for the Component.ts, ComponentView.tsx, ComponentModel.ts and tests, based on the files included in `./templates`.

The script will to ask you the next information:

- `Folder name`: The folder where the component will be created. Usually is the component name in lower case (e.g. button).
- `Component name`: The name of the class for the component. Usually is the component name with the firts letter in upper case (e.g. Button).
- `Component UICODE`: The UICODE of the component. Usually is the component name in upper case (e.g. BUTTON).

## To do

- Tests: Test everything.
- Components

## License

[MIT](LICENSE.md)