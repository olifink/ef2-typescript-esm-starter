# ef2-typescript-esm-starter

Just a lightweight starter structure for using [Syncfusion EJ2](https://ej2.syncfusion.com/documentation/getting-started/quick-start/) with modern TypeScript to ES2020 and local ESM modules from local node_modules. No other assumptions are made about the build chain.

You only need to run `npm i` and `tsc` and then it runs in browsers that support importmaps. If not or for publishing, `parcel index.html` seems to do the right thing.

It probably makes sense to not only include `ej2-button` as node module but all of `ej2` and import what's needed. 

I switched to node modules from remote imports via [jsnpm](https://jspm.org/) originally e2377ad8507adf00c1a2802e570387a04615040d so that TypeScript completion works directly, which it doesn't using the remote imports.