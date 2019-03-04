// https://developer.chrome.com/extensions/webRequest
// https://github.com/kylepaulsen/ResourceOverride
// https://developer.chrome.com/extensions/webRequest#type-BlockingResponse

declare var chrome: any; // needed to prevent errors in compile?  seems to work without, but shows error...

// as an example for this page: https://developer.chrome.com/extensions/messaging
// replace chrome logo with my gravatar

let replacements = {
    'https://developer.chrome.com/static/images/chrome-logo_2x.png': 'https://www.gravatar.com/avatar/fdc806d0a8834e57b2d9309849dea8cd?s=48&amp;d=identicon&amp;r=PG',
    'https://www.google.com/cse/static/style/look/v2/default.css': `data:text/css;base64,` + btoa(`
    /**
    * Default Theme, v2.
    *
    */
   /* MODIFIED: */
   
   body div.gc-container {
    background-color: blue;
    }
   /* Slight reset to make the preview have ample padding. */
   .cse .gsc-control-cse,
   .gsc-control-cse {
     padding: 1em;
     width: auto;
   }
   .cse .gsc-control-wrapper-cse,
   .gsc-control-wrapper-cse {
     width: 100%;
   }
   .cse .gsc-branding,
   .gsc-branding {
     display: none;
   }
   /* Selector for entire element. */
   .cse .gsc-control-cse,
   .gsc-control-cse {
     background-color: #fff;
     border: 1px solid #fff;
   }
   .cse .gsc-control-cse:after,
   .gsc-control-cse:after {
     content: ".";
     display: block;
     height: 0;
     clear: both;
     visibility: hidden;
   }
   .cse .gsc-resultsHeader,
   .gsc-resultsHeader {
     border: block;
   }
   table.gsc-search-box td.gsc-input {
     padding-right: 24px;
   }
   
   .gsc-search-box-tools .gsc-search-box .gsc-input {
     padding-right: 12px;
   }
   
   input.gsc-input {
     font-size: 16px;
   }
   /* Hide clear input X added by MSIE. */
   .gsc-input::-ms-clear {
     display: none;
     height: 0;
     width: 0;
   }
   
   .gsc-input-box {
     border: 1px solid #D9D9D9;
     background: #fff;
   }
   
   .gsc-search-box .gsc-input>input:hover,
   .gsc-input-box-hover {
     border: 1px solid #b9b9b9;
     border-top-color: #a0a0a0;
     -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
     -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
     box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
     outline: none;
   }
   .gsc-search-box .gsc-input>input:focus,
   .gsc-input-box-focus {
     border: 1px solid #4d90fe;
     -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.3);
     -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.3);
     box-shadow: inset 0 1px 2px rgba(0,0,0,.3);
     outline: none;
   }
   
   /* Search button */
   .cse .gsc-search-button-v2,
   .gsc-search-button-v2 {
     font-size: 0px;
     padding: 6px 27px;
     width: auto;
     vertical-align: middle;
   
     border: 1px solid #666666;
     border-radius: 2px;
     -moz-border-radius: 2px;
     -webkit-border-radius: 2px;
   
     border-color: #3079ed;
     background-color: #4d90fe;
     background-image: -webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));
     background-image: -webkit-linear-gradient(top,#4d90fe,#4787ed);
     background-image: -moz-linear-gradient(top,#4d90fe,#4787ed);
     background-image: -ms-linear-gradient(top,#4d90fe,#4787ed);
     background-image: -o-linear-gradient(top,#4d90fe,#4787ed);
     background-image: linear-gradient(top,#4d90fe,#4787ed);
     filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#4787ed');
   }
   
   .cse .gsc-search-button-v2:hover,
   .gsc-search-button-v2:hover {
     border-color: #2f5bb7;
     background-color: #357ae8;
     background-image: -webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));
     background-image: -webkit-linear-gradient(top,#4d90fe,#357ae8);
     background-image: -moz-linear-gradient(top,#4d90fe,#357ae8);
     background-image: -ms-linear-gradient(top,#4d90fe,#357ae8);
     background-image: -o-linear-gradient(top,#4d90fe,#357ae8);
     background-image: linear-gradient(top,#4d90fe,#357ae8);
     filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#357ae8');
   }
   
   .cse .gsc-search-button-v2:focus,
   .gsc-search-button-v2:focus {
     box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
     -webkit-box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
     -moz-box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
   }
   
   .gsc-search-button-v2 svg {
     fill: #fff;
   }
   
   /* Firefox button fix */
   button::-moz-focus-inner {
       padding: 0;
       border: 0
   }
   
   .gsc-refinementHeader {
     text-decoration: none;
     font-weight: bold;
     color: #666;
   }
   
   .gsc-refinementHeader.gsc-refinementhActive {
     text-decoration: none;
     color: #DD4B39;
   }
   
   .gsc-refinementHeader.gsc-refinementhInactive {
     text-decoration: none;
     cursor: pointer;
   }
   
   .gsc-refinementHeader.gsc-refinementhInactive>span:hover {
     text-decoration: underline;
   }
   
   .gsc-refinementhActive>span {
     border-bottom: 3px solid;
     padding-bottom: 2px;
   }
   
   .gsc-refinementsArea {
     margin-top: 0;
     padding-bottom: 4px;
     padding-top: 10px;
   }
   
   /* Foont size for refinements */
   .gsc-tabsArea {
     font-size: 11px;
   }
   /* For searcher tabs */
   .gsc-tabsArea > .gsc-tabHeader {
     height: 27px;
   }
   .gsc-tabsArea > div {
     height: 30px;
     overflow: auto;
   }
   /* No spacers needed for keneddy refinements */
   .gsc-tabsArea .gs-spacer {
     display: none;
   }
   .gsc-tabsArea .gs-spacer-opera {
     display: none;
   }
   .gsc-tabsArea {
     margin-top: 12px;
     margin-bottom: 0;
     height: 29px;
     border-bottom: 1px solid #CCC;
   }
   /* Refinement tab properties */
   .gsc-tabHeader {
     display: inline-block;
     padding: 0 8px 1px 8px;
     margin-right: 0px;
     margin-top: 0px;
     font-weight: bold;
     height: 27px;
     line-height: 27px;
     min-width: 54px;
     text-align: center;
   }
   /* Active refinement tab properties */
   .gsc-tabHeader.gsc-tabhActive {
     border: 1px solid #ccc;
     border-bottom-color: #fff;
     color: #202020;
   }
   /* Inactive refinement tab properties */
   .gsc-tabHeader.gsc-tabhInactive {
     background: #fff;
     color: #666;
     border-left: 0;
     border-right: 0;
     border-top: 0;
   }
   /* Inner wrapper for an image result */
   .gsc-imageResult-column,
   .gsc-imageResult-classic {
     padding: .25em;
     border: 1px solid #fff;
     margin-bottom: 1em;
   }
   /* Inner wrapper for a result */
   .gsc-webResult.gsc-result {
     padding: .25em;
     border: 1px solid #fff;
     margin-bottom: 0;
   }
   /* Inner wrapper for a result */
   .cse .gsc-webResult.gsc-result {
     border: 1px solid #fff;
     margin-bottom: 0;
   }
   /* Wrapper for a result. */
   .gsc-webResult .gsc-result {
     padding: 10px 0 10px 0;
   }
   /* Result hover event styling */
   .cse .gsc-webResult.gsc-result:hover,
   .gsc-webResult.gsc-result:hover,
   .gsc-webResult.gsc-result.gsc-promotion:hover,
   .gsc-results .gsc-imageResult-classic:hover,
   .gsc-results .gsc-imageResult-column:hover {
     border: 1px solid #fff;
   }
   .gs-web-image-box,
   .gs-promotion-image-box {
     padding: 2px 0;
   }
   .gs-promotion-image-box img.gs-promotion-image {
     max-width: 50px;
   }
   .gs-promotion-image-box img.gs-promotion-image,
   .gs-promotion-image-box {
     width: 50px;
   }
   .gs-web-image-box img.gs-image {
     max-width: 70px;
     max-height: 70px;
   }
   
   .gs-web-image-box-landscape img.gs-image {
     max-width: 70px;
     max-height: 50px;
   }
   
   .gs-web-image-box-portrait img.gs-image {
     max-width: 50px;
     max-height: 120px;
   }
   
   .gs-image-box.gs-web-image-box.gs-web-image-box-landscape {
     width: 80px;
   }
   
   .gs-image-box.gs-web-image-box.gs-web-image-box-portrait {
     width: 60px;
     height: 50px;
     overflow: hidden;
   }
   
   .gs-web-image-box {
     text-align: inherit;
   }
   .gs-promotion-image-box img.gs-promotion-image {
     border: 1px solid #ebebeb;
   }
   /*Promotion Settings*/
   /* The entire promo */
   .cse .gsc-webResult.gsc-result.gsc-promotion,
   .gsc-webResult.gsc-result.gsc-promotion {
     background-color: #F6F6F6;
     margin-top: 5px;
     margin-bottom: 10px;
   }
   .gsc-result-info {
     margin-top: 0;
     margin-bottom: 0;
     padding: 8px;
     padding-bottom: 10px;
   }
   .gs-promotion-text-cell .gs-visibleUrl,
   .gs-promotion-text-cell .gs-snippet {
     font-size: 13px;
   }
   
   .gsc-table-result,
   .gsc-thumbnail-inside,
   .gsc-url-top {
     padding-left: 8px;
     padding-right: 8px;
   }
   
   .gs-promotion-table {
     margin-left: 8px;
     margin-right: 8px;
   }
   
   .gs-promotion table {
     padding-left: 8px;
     padding-right: 8px;
   }
   
   table.gs-promotion-table-snippet-with-image{
     padding-left: 0;
     padding-right: 0;
   }
   
   .gs-promotion-text-cell {
     margin-left: 8px;
     margin-right: 8px;
   }
   
   .gs-promotion-text-cell-with-image {
     padding-left: 10px;
     padding-right: 10px;
     vertical-align: top;
   }
   
   /* Promotion links */
   .cse .gs-promotion a.gs-title:link,
   .gs-promotion a.gs-title:link,
   .cse .gs-promotion a.gs-title:link *,
   .gs-promotion a.gs-title:link *,
   .cse .gs-promotion .gs-snippet a:link,
   .gs-promotion .gs-snippet a:link {
     color: #15C;
   }
   .cse .gs-promotion a.gs-title:visited,
   .gs-promotion a.gs-title:visited,
   .cse .gs-promotion a.gs-title:visited *,
   .gs-promotion a.gs-title:visited *,
   .cse .gs-promotion .gs-snippet a:visited,
   .gs-promotion .gs-snippet a:visited {
     color: #15C;
   }
   .cse .gs-promotion a.gs-title:hover,
   .gs-promotion a.gs-title:hover,
   .cse .gs-promotion a.gs-title:hover *,
   .gs-promotion a.gs-title:hover *,
   .cse .gs-promotion .gs-snippet a:hover,
   .gs-promotion .gs-snippet a:hover {
     color: #15C;
   }
   .cse .gs-promotion a.gs-title:active,
   .gs-promotion a.gs-title:active,
   .cse .gs-promotion a.gs-title:active *,
   .gs-promotion a.gs-title:active *,
   .cse .gs-promotion .gs-snippet a:active,
   .gs-promotion .gs-snippet a:active {
     color: #15C;
   }
   /* Promotion snippet */
   .cse .gs-promotion .gs-snippet,
   .gs-promotion .gs-snippet,
   .cse .gs-promotion .gs-title .gs-promotion-title-right,
   .gs-promotion .gs-title .gs-promotion-title-right,
   .cse .gs-promotion .gs-title .gs-promotion-title-right *,
   .gs-promotion .gs-title .gs-promotion-title-right * {
     color: #000;
   }
   /* Promotion url */
   .cse .gs-promotion .gs-visibleUrl,
   .gs-promotion .gs-visibleUrl {
     color: #093;
   }
   /* Style for auto-completion table
    * .gsc-completion-selected : styling for a suggested query which the user has moused-over
    * .gsc-completion-container : styling for the table which contains the completions
    */
   .gsc-completion-selected {
     background: #EEE;
   }
   
   .gsc-completion-container {
     font-family: Arial, sans-serif;
     font-size: 16px;
     background: white;
     border: 1px solid #CCC;
     border-top-color: #D9D9D9;
     margin: 0;
   }
   
   .gsc-completion-title {
     color: #15C;
   }
   .gsc-completion-snippet {
     color: #000;
   }
   
   /* Full URL */
   .gs-webResult div.gs-visibleUrl-short,
   .gs-promotion div.gs-visibleUrl-short {
     display: none;
   }
   .gs-webResult div.gs-visibleUrl-long,
   .gs-promotion div.gs-visibleUrl-long {
     display: block;
   }
   
   /* Keneddy shows url at the top of the snippet, after title */
   .gsc-url-top {
     display: block;
   }
   
   .gsc-url-bottom {
     display: none;
   }
   
   /* Keneddy shows thumbnail inside the snippet, under title and url */
   .gsc-thumbnail-left {
     display: none;
   }
   
   .gsc-thumbnail-inside {
     display: block;
   }
   
   .gsc-result .gs-title {
     height: 1.2em;
   }
   
   .gs-result .gs-title,
   .gs-result .gs-title * {
     color: #15C;
   }
   
   .gs-result a.gs-visibleUrl,
   .gs-result .gs-visibleUrl {
     color: #093;
     text-decoration: none;
     padding-bottom: 2px;
   }
   
   .gsc-results .gsc-cursor-box {
     margin: 10px;
   }
   
   .gsc-results .gsc-cursor-box .gsc-cursor-page {
     text-decoration: none;
   }
   
   .gsc-results .gsc-cursor-box .gsc-cursor-page:hover {
     text-decoration: underline;
   }
   
   .gsc-results .gsc-cursor-box .gsc-cursor-current-page {
     text-decoration: none;
     color: #DD4B39;
   }
   
   .gsc-preview-reviews,
   .gsc-control-cse .gs-snippet,
   .gsc-control-cse .gs-promotion em,
   .gsc-control-cse .gs-snippet,
   .gsc-control-cse .gs-promotion em {
     color: #333;
   }
   
   .gsc-control-cse-zh_CN .gs-snippet b,
   .gsc-control-cse-zh_CN .gs-promotion em,
   .gsc-control-cse-zh_TW .gs-snippet b,
   .gsc-control-cse-zh_TW .gs-promotion em {
     color: #C03;
   }
   
   .gsc-snippet-metadata,
   .gsc-role,
   .gsc-tel,
   .gsc-org,
   .gsc-location,
   .gsc-reviewer,
   .gsc-author {
     color: #666;
   }
   
   .gsc-wrapper.gsc-thinWrapper {
     border-right: 1px solid #e9e9e9;
   }
   
   .gs-spelling a {
     color: #15C;
   }
   
   .gs-spelling {
     color: #333;
     padding-left: 7px;
     padding-right: 7px;
   }
   
   .gs-snippet {
     margin-top: 1px;
   }
   
   div.gsc-clear-button {
     background-image: url('//www.google.com/cse/static/css/v2/clear.png');
   }
   
   div.gsc-clear-button:hover {
     background-image: url('//www.google.com/cse/static/css/v2/clear-hover.png');
   }
   
   .gsc-preview-reviews ul {
     padding-left: 0;
     padding-right: 0;
   }
   
   .gsc-completion-container .gsc-completion-icon-cell {
     width: 42px;
     height: 42px;
     padding-right: 10px;
   }
   
   .gsc-branding-text, .gcsc-branding-text {
     color: #666;
   }
   
   .gcsc-branding {
     padding-top: 4px;
     padding-left: 8px;
     padding-right: 8px;
   }
   
   .gsc-adBlock {
     padding-bottom: 5px;
   }
   
   .gsc-table-cell-snippet-close,
   .gsc-table-cell-snippet-open {
     padding-left: 0;
     padding-right: 0;
   }
   
   .gsc-selected-option-container {
     background-color: whiteSmoke;
     background-image: linear-gradient(top,whiteSmoke,#F1F1F1);
     background-image: -webkit-linear-gradient(top,whiteSmoke,#F1F1F1);
     background-image: -moz-linear-gradient(top,whiteSmoke,#F1F1F1);
     background-image: -ms-linear-gradient(top,whiteSmoke,#F1F1F1);
     background-image: -o-linear-gradient(top,whiteSmoke,#F1F1F1);
   }
   
   /* Facet box css */
   .gsc-context-box {
     font-size: 83%;
     margin-top: 3px;
     border-collapse: collapse;
   }
   
   .gsc-context-box .gsc-col {
     padding:1px 0;
     white-space: nowrap;
     vertical-align: middle;
   }
   
   .gsc-context-box .gsc-facet-label {
     width: 65px;
     padding-left: 2px;
     text-decoration: underline;
     color: #0000cc;
     cursor: pointer;
   }
   
   .gsc-context-box .gsc-chart {
     width: 32em;
     padding: 3px;
     border-left: 1px solid #0000cc;
     border-right: 1px solid #0000cc;
   }
   
   .gsc-context-box .gsc-top {
     border-top: 1px solid #0000cc;
   }
   
   .gsc-context-box .gsc-bottom {
     border-bottom: 1px solid #0000cc;
   }
   
   .gsc-context-box .gsc-chart div {
     background: #0000cc;
     height: 9px;
   }
   
   .gsc-context-box .gsc-facet-result {
     color: #0000cc;
     width: 30px;
     text-align: right;
     padding-right: 5px;
   }
   
   /* Universal one box css. */
   .gsc-usr-group-thumbnail {
     display: inline-block;
     max-width: 72px;
     max-height: 72px;
   }
   .gsc-usr-group-thumbnail img {
     max-height: 72px;
     overflow: hidden;
   }
   .gs-webResult .gs-title
   .gs-title.gsc-usr-group-heading {
     color: #0000cc;
     cursor: pointer;
   }
   .gsc-usr-group {
     min-height: 100px;
     zoom: 1;
     display: block;
     line-height: 1.24;
     margin-top: -7px;
     margin-bottom: -7px;
     margin-left: 20px;
   }
   .gsc-usr-group-content {
     padding-top: 1px;
     padding-bottom: 3px;
   }
   .gsc-usr-group-content-thumbnail {
     display: inline-block;
     vertical-align: top;
   }
   .gsc-usr-group-head-result {
     display: inline-block;
     padding-left: 6px;
   }
   .gsc-usr-group-snippet {
     width: 100%;
     height: 3.6em;
     overflow: hidden;
   }
   .gsc-usr-group-content-results {
     font-size: 12px;
     padding-left: 1px;
     width: 80%;
     padding-top: 7px;
   }
   .gsc-usr-group-head-results {
     display:inline-block;
     font-size: 13px;
     padding-left: 6px;
     width: 80%;
   }
   .gs-webResult .gs-title
   .gs-title.gsc-usr-group-all-results {
     font-size: 11px;
     line-height: 10px;
   }
   .gs-webResult .gs-title
   .gs-title.gsc-usr-group-all-results
   b {
     font-size: 14px;
     font-weight: 600;
   }
   .gs-webResult .gs-title
   .gs-title.gsc-usr-group-heading
   b {
     color: #0000cc;
   }
   
   .gcsc-find-more-on-google {
     color: #0000cc;
   }
   
   .gcsc-find-more-on-google-magnifier {
     fill: #0000cc;
   }

`)
};

export class InterceptWebRequests {
    static start() {
        console.log('Trying to intercept web requests!');
        chrome.webRequest.onBeforeRequest.addListener(function (details) {
            let replacement = replacements[details.url];
            if (replacement) {
                console.log('Replacing request:', details);
                return { redirectUrl: replacement };
            }
            return;
            // if (!requestIdTracker.has(details.requestId)) {
            //     if (details.tabId > -1) {
            //         var tabUrl = tabUrlTracker.getUrlFromId(details.tabId);
            //         if (details.type === "main_frame") {
            //             // a new tab must have just been created.
            //             tabUrl = details.url;
            //         }
            //         if (tabUrl) {
            //             var result = handleRequest(details.url, tabUrl, details.tabId);
            //             if (result) {
            //                 // make sure we don't try to redirect again.
            //                 requestIdTracker.push(details.requestId);
            //             }
            //             return result;
            //         }
            //     }
            // }
        }, {
                urls: ["<all_urls>"]
            }, ["blocking"]);
    }
}
