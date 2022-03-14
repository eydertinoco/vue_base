# helloworld

### Limpar o terminar use
```
cls
```

## Project setup
```
npm install
```

## Install dependences

### Sass-loader
```
npm install -D sass-loader sass
```

### Fontawesome Icons
#### Add SVG Core
```
npm i --save @fortawesome/fontawesome-svg-core
```
#### Add Icon Packages
##### Free Icons Packages
```
npm i --save @fortawesome/free-solid-svg-icons
```
```
npm i --save @fortawesome/free-regular-svg-icons
```
```
npm i --save @fortawesome/free-brands-svg-icons
```
##### Pro Icon Packages
```
npm i --save @fortawesome/pro-solid-svg-icons
npm i --save @fortawesome/pro-regular-svg-icons
npm i --save @fortawesome/pro-light-svg-icons
npm i --save @fortawesome/pro-thin-svg-icons
npm i --save @fortawesome/pro-duotone-svg-icons
```

#### Add the Vue Component
```
npm i --save @fortawesome/vue-fontawesome@prerelease
```

### Vue Router 4
```
npm install vue-router@4
```

### vue/cli-plugin-router
```
npm i @vue/cli-plugin-router
```

### Json Server
```
npm install json-server
```
## Ações necessárias para Json Server (API)

### Arquivo package.json adicine em Scripts
```
"backend": "json-server --watch db/db.json"
```

### Run API json
```
npm run backend
```

## Run Project

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
