react-admin system solution

### Preface

> It takes a little longer to start and package, please wait patiently for two minutes.

### Dependent modules

<span style="color: rgb(184,49,47);">The project was created using create-react-app, which mainly lists the newly added functional dependency packages.</span>

<span style="color: rgb(184,49,47);">Click on the name to jump to related websites 😄😄</span>

-   [react](https://facebook.github.io/react/)
-   [react-router](https://react-guide.github.io/react-router-cn/)
-   [redux](https://redux.js.org/)
-   [antd](https://ant.design/index-cn)
-   [axios](https://github.com/mzabriskie/axios)
-   [echarts-for-react](https://github.com/hustcc/echarts-for-react)(<span style="color: rgb(243,121,52);">Visual charts</span>)
-   [recharts](http://recharts.org/#/zh-CN/)(<span style="color: rgb(243,121,52);">Another chart based on react package</span>)
-   [nprogress](https://github.com/rstacruz/nprogress)(<span style="color: rgb(243,121,52);">top loading bar</span>)
-   [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg)(<span style="color: rgb(243,121,52);">Rich text packaging based on react</span>)
-   [react-draggable](https://github.com/mzabriskie/react-draggable)(<span style="color: rgb(243,121,52);">Drag and drop modules</span>)
-   [screenfull](https://github.com/sindresorhus/screenfull.js/)(<span style="color: rgb(243,121,52);">full screen plugin</span>)
-   [photoswipe](https://github.com/dimsemenov/photoswipe)(<span style="color: rgb(243,121,52);">Picture pop-up view plug-in</span>)
-   [animate.css](http://daneden.me/animate)(<span style="color: rgb(243,121,52);">css animation library</span>)
-   [react-loadable](https://github.com/jamiebuilds/react-loadable)(Code splitting, on-demand loading, preloading, everything is OK, please see its documentation for details)
-   [redux-alita](https://github.com/yezihaohao/redux-alita) Minimalist redux2react tool
-   Other small details are omitted

### functional module

<span style="color: rgb(184,49,47);">The project uses antd's custom theme function --> black. If you want to replace other colors, please check the antd official website for specific operations.</span>

<!--more-->

-   front page
    -   complete layout
    -   Skin change (global function, currently only the skin change of the top navigation is implemented, other modules will be added later)
-   Navigation menu
    -   Top navigation (menu telescopic, full screen function)
    -   Left menu (adding scroll bars and active operations to adapt routing)
-   UI module
    -   Button (antd component)
    -   Icons (antd component and add colorful emoticons)
    -   Loading (antd component and adding top loading bar)
    -   Notification reminder box (antd component)
    -   Tab page (antd component)
    -   Carousel chart (ant animation component)
    -   rich text
    -   drag
    -   gallery
-   animation
    -   Basic animation (animate.css all animations)
    -   Animation case
-   sheet
    -   Basic table (antd component)
    -   Advanced tables (antd component)
    -   Asynchronous table (data comes from Nugget Sauce’s interface)
-   form
    -   Basic form (antd component)
-   chart
    -   echarts chart
    -   recharts chart
-   page
    -   Login page (including GitHub third-party login)
    -   404 page


### Code directory

```js
+-- build/                                  ---Packaged file directory
+-- config/                                 ---npm run eject The configuration file directory after
+-- node_modules/                           ---npm download file directory
+-- public/
|   --- index.html							---Home page entrance html file
|   --- npm.json							---echarts test data
|   --- weibo.json							---echarts test data
+-- src/                                    ---Core code directory
|   +-- axios                               ---http request storage directory
|   |    --- index.js
|   +-- components                          ---Various component storage directories
|   |    +-- animation                      ---animation component
|   |    |    --- ...
|   |    +-- charts                         ---chart component
|   |    |    --- ...
|   |    +-- dashboard                      ---Home page component
|   |    |    --- ...
|   |    +-- forms                          ---form component
|   |    |    --- ...
|   |    +-- pages                          ---Page components
|   |    |    --- ...
|   |    +-- tables                         ---Table component
|   |    |    --- ...
|   |    +-- ui                             ---ui component
|   |    |    --- ...
|   |    --- BreadcrumbCustom.jsx           ---Breadcrumb component
|   |    --- HeaderCustom.jsx               ---Top navigation component
|   |    --- Page.jsx                       ---page container
|   |    --- SiderCustom.jsx                ---left menu component
|   +-- style                               ---The project style storage directory is mainly written in less
|   +-- utils                               ---Tool file storage directory
|   --- App.js                              ---Component entry file
|   --- index.js                            ---The overall js entry file of the project, including routing configuration, etc.
--- .env                                    ---Start project custom port configuration file
--- .eslintrc                               ---Customized eslint configuration file, including increased react jsx syntax restrictions
--- package.json
```

### Install and run

##### 1.Download or clone the project source code

##### 2.yarn Install dependencies

```js
yarn;
```

##### 3.Startup project

```js
yarn start
```

##### 4.Package project

```js
yarn build
```

### License

MIT

### end

This project will be updated from time to time, and more modules will be added in the future.

Welcome and thank you all for PR~~👏👏