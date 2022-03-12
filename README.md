# make_your_burger

Esse é um projeto feito por Matheus Battisti do Curso de Vue 3 disponibilizado no Youtube ( https://www.youtube.com/playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL ). Possui uma ótima didatica.

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
### Crie uma pasta db e arquivo db.json na pasta inicial do projeto
```
{
  "ingredientes": {
    "paes": [
      {
        "id": 1,
        "tipo": "Italiano Branco"
      },
      {
        "id": 2,
        "tipo": "3 Queijos"
      },
      {
        "id": 3,
        "tipo": "Parmesão e Orégano"
      },
      {
        "id": 4,
        "tipo": "Integral"
      }
    ],
    "carnes": [
      {
        "id": 1,
        "tipo": "Maminha"
      },
      {
        "id": 2,
        "tipo": "Alcatra"
      },
      {
        "id": 3,
        "tipo": "Picanha"
      },
      {
        "id": 4,
        "tipo": "Veggie burger"
      }
    ],
    "opcionais": [
      {
        "id": 1,
        "tipo": "Bacon"
      },
      {
        "id": 2,
        "tipo": "Cheddar"
      },
      {
        "id": 3,
        "tipo": "Salame"
      },
      {
        "id": 4,
        "tipo": "Tomate"
      },
      {
        "id": 4,
        "tipo": "Cebola roxa"
      },
      {
        "id": 4,
        "tipo": "Pepino"
      }
    ]
  },
  "status": [
    {
      "id": 1,
      "tipo": "Solicitado"
    },
    {
      "id": 2,
      "tipo": "Em produção"
    },
    {
      "id": 3,
      "tipo": "Finalizado"
    }
  ],
  "burgers": [
    {
      "nome": "Matheus Battisti",
      "carne": "Picanha",
      "pao": "Italiano Branco",
      "opcionais": [
        "Bacon",
        "Salame",
        "Cebola roxa"
      ],
      "status": "Finalizado",
      "id": 1
    },
    {
      "nome": "João Coelho",
      "carne": "Maminha",
      "pao": "3 Queijos",
      "opcionais": [
        "Salame",
        "Cebola roxa"
      ],
      "status": "Solicitado",
      "id": 4
    }
  ]
}
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
