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

### '6' - icons and browser action with popup

I created a `src\assets\icons` directory.  Using [inkscape](https://inkscape.org/) I created
`icon.svg` and exported to various sizes of icons.  Updating the `manifest.json`:

    "icons": {
        "16": "assets/icons/icon-16.png",
        "48": "assets/icons/icon-48.png",
        "128": "assets/icons/icon-128.png"
    }

And I updated the favicon link in the main and background `index.html` files:

    <link rel="icon" type="image/x-icon" href="/assets/icons/icon-16.png">

Now I create a popup application.  I was hoping I could use a route on the
main page to access the popup, but I think the popup configuration only takes
html files.  I updated the `build-all` scripts to include ng build popup` also.
In angular.json I put it to go to `dist/extension/popup', and updated the
`index.html` to have a) no base tag and b) use our icon as favicon.  Also made
the style changes to include material, font-awesome, etc.

    ng g application popup --style=scss

Now you should be able to `npm run build-all` and go to: 

    chrome-extension://imbnlmnmddaeggfahkkndklokfoieofn/popup/index.html

> Note: If you are just working on one part, say the popup, you can run
> `ng build popup --watch` and it will auto-rebuild when you make changes,
> but you'll still probably need to reload the extension from the
> extensions page.

In the manifest I added a browser action that will load the popup.  This
is the icon to the right of the address bar.  I'll use the same icons for
the app:

    "browser_action": {
        "default_icon": {
            "16": "/assets/icons/icon-16.png",
            "48": "/assets/icons/icon-48.png"
        },
        "default_title": "Extension",
        "default_popup": "popup/index.html"
    }

Now `npm run build-all` and you can see the popup when you click on the
browser action icon.

### 7 - options

Let's create a new page for options:

    ng g application options --style=scss

And do things we've done for other pages:

1. Set output path to `dist/extension/options` in `angular.json`
2. Add `_variables.scss` and update `styles.scss` to include it, font-awesome, and our material theme
3. Add it to `build-all` and `build-all-prod` scripts
4. Remove `<base>` tag and update favicon in `index.html`

Now add this to `src/manifest.json`:

    "options_ui": {
        "page": "options/index.html",
        "open_in_tab": false
    },

### 8 - using chrome apis

Run this to add types for chrome addins:

    yarn add @types/chrome

I then modified the popup to include a text field and button that will set the
badge text of the browser action.  There are also two buttons to change the badge
background, red and green.  Finally a button that will output information about
the current tab to the console (right-click on the browser action and select
inspect popup to see the console).  That requires this to be added to the
manifest (at least tabs, activeTab, and the urls you want to use it on):

    "permissions": [
        "storage",
        "tabs",
        "activeTab",
        "http://*/*",
        "https://*/*"
    ]

### 9 - webRequest

To modify web requests synchronously, we need to add the `webRequest` and `webRequestBlocking`
permissions to `manifest.json`:

    "permissions": [
        "webRequest",
        "webRequestBlocking",

Check out [the docs](https://developer.chrome.com/extensions/webRequest) for information.

This simple sample is in `projects/background/intercept-web-requests.ts`.  It replaces the chrome
icon with a request for my gravatar, and one of the css files with one tweaked to give
the content a blue background.  This uses a `data:text/css;base64` data url.  It could have
been plain text, but the hashes needed to be encoded.





# Links

* https://www.red-gate.com/simple-talk/dotnet/software-tools/developing-google-chrome-extension-using-angular-4/
* https://developer.chrome.com/extensions/api_index
