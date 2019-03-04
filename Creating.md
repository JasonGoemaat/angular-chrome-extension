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
