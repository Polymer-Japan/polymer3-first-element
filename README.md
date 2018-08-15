# Your first Polymer 3 element

This repo goes with the [Build your first Polymer 3 element codelab](http://www.code-labs.io/codelabs/polymer-first-elements/).

## Running the codelab

You'll need to install some command-line tools to manage
dependencies and to run the demo.

1.  Download and install Node(recommends v8.10.0) from [https://nodejs.org/](https://nodejs.org/). Node includes the node package manager command, `npm`.

2.  Clone this repo:

        https://github.com/Polymer-Japan/polymer3-first-element.git

3.  Change directory to your local repo and install dependencies with `npm`:

        cd polymer3-first-elements
        npm install

4.  To preview your element, run `npm start` from the repo directory:

        npm start

    Open `localhost:8081/components/icon-toggle/demo/` in your browser. (Note that the path uses `icon-toggle`—the 
    component name listed in this element's `package.json` file—rather than the actual directory name.) 

`npm start` calls `polymer serve`.
If you're wondering what `polymer serve` does, see [Run tests interactively](https://www.polymer-project.org/3.0/docs/tools/tests#run-tests-interactively) 
in the Polymer docs.
