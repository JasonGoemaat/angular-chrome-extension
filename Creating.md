# Creating this project

### commit '1'

    ng new extension --style=scss --routing
    cd extension

### '2'

Creating a module to store code used between the other modules

    ng g library extension-common --prefix=lib --style=scss

### '3' - material, font-awesome

    yarn add @angular/material @angular/cdk @angular/animations

Followed [getting-started](https://material.angular.io/guide/getting-started)
to add it to the app.  See [the source](https://github.com/angular/material2/tree/master/src/material-examples)
for their examples for usage.

    yarn add font-awesome

### '4' - simple extension

The point here is to make a basic extension.

I created a `src/manifest.json` file.  It's important to include this line required
by angular to work:

    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"

And I added it to `angular.json` as an asset:

    "assets": [
        "src/favicon.ico",
        "src/assets",
        "src/manifest.json"
    ],

Then I did a build with `ng build`.

At this point, I installed the extension by going to [chrome://extensions](chrome://extensions),
turning on developer mode, clicking 'load unpacked' and picking the directory
`C:\git\git\extension\dist\extension` (root of this project is `C:\git\git\extension`). I
noticed the id `imbnlmnmddaeggfahkkndklokfoieofn`.  Now I can view the main index by going to:

    chrome-extension://imbnlmnmddaeggfahkkndklokfoieofn/

### '5' - background page

Here I will add a background page.  First create a new angular project:

    ng g application background

I want it to be in a subfolder of the main extension, so I changed the output path in `angular.json`:

    "outputPath": "dist/extension/background",

In `projects/background/src/index.html` and in `src/index.html` we remove the base href tags.
This is because chrome doesn't use default files in their extension urls.  That way we can
type in a route and when the page loads it will leave the url alone so we can bookmark it (I also took the capabilities component off the main page and put it in a route that is the default and added a simple 'other' component in its own route):

    chrome-extension://imbnlmnmddaeggfahkkndklokfoieofn/index.html#/other

In `projects/background/app.module.ts` I put in a console log so we can tell it's being
loaded as the background page:

    console.log('BACKGROUND PAGE RUNNING!');


Now you build the main extension first because it wipes out the contents of the dist directory,
then build the background project:

    ng build
    ng build background

Use the refresh button in `chrome://extensions` to reload the app.  You can click on the link
there to inspect the background page and you should see the message in the console.  You can
also see the url going to [chrome-extension://imbnlmnmddaeggfahkkndklokfoieofn/background/index.html](chrome-extension://imbnlmnmddaeggfahkkndklokfoieofn/background/index.html).

I added some scripts to make building both easier:

    "build-all": "ng build && ng build background",
    "build-all-prod": "ng build --prod && ng build background --prod",

The normal build includes sourcemaps and is much faster (about 30 seconds), the prod
version does ahead-of-time compilation and tree-shaking, producing much smaller files
but takes longer (60-90s).

