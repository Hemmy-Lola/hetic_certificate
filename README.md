# 🎓 Générateur de diplôme des Héticiens 

Étant actuellement en formation à HETIC, en quête d'un diplôme, j'ai décidé de créer un générateur de diplômes pour nous projeter un peu ! Dans mon projet, je développe un générateur aux couleurs de notre école où l'utilisateur peut saisir des informations. Ces informations seront ensuite stockées dans un tableau, permettant ainsi de générer un diplôme personnalisé que je remettrai à la personne concernée !


J'ai donc commenté quelques parties de mon code afin de pouvoir expliquer ma démarche 
Vous retrouverez également un fichier pdf qui vous montre un exemple de génération de diplôme dans le cas où le serveur ne fonctionne pas correctement.

## 🛠️ Dépendances

Avant de commencer, assurez-vous d'installer les dépendances suivantes :

```
npm install
```

## 📂 Architecture de mon Dossier

L'architecture de mon dossier est organisée comme ceci :

├── node_modules/            # Dossier des modules Node.js installés
├── public/                  # Dossier public
├── server/                  # Dossier du serveur
│   ├── server.js            # Fichier JavaScript du serveur compilé
│   ├── server.ts            # Fichier TypeScript du serveur
│   ├── mondiplome.pdf       # Modèle PDF
│   └── documents/           # Dossier des documents
│       ├── pdfTemplate.ts   # Fichier TypeScript du modèle PDF
│       └── pdfTemplate.js   # Fichier JavaScript du modèle PDF compilé
├── src/                     # Dossier src
│   ├── App.css              # Fichier CSS de l'application
│   ├── App.tsx              # Fichier principal de l'application React
│   ├── interface.ts         # Fichier contenant des interfaces TypeScript
│   └── logo_hetic.svg       # Logo de l'école
├── package-lock.json        # Fichier de verrouillage des dépendances
├── package.json             # Fichier de configuration npm
├── README.md                # Fichier README
└── tsconfig.json            # Fichier de configuration TypeScript

etc...


# 💻 Technologies Utilisées

Dans mon projet j'utilise les technologies suivantes :

- React = Bibliothèque js qui va me permettre de construire mon interface utilisateur 

- Express = Cela va me permettre de gérer mes requêtes HTTP de manière minimaliste et flexible

- TypeScript = Une version de Js très typée qui va me permettre de développer des applis plus robsutes (que j'ai compilé en js)

- Axios = Là aussi une bibliothèque qui va me permettre d'effectuer des requêtes http

- File-Saver = Bibliothèque Js qui va me permettre d'enregister mes fichiers ts à partir du navigateur

- Body-Parser =  Middleware pour Express utilisé pour extraire les données du corps des requêtes HTTP

- Cors = Egalement un Middleware pour Express utilisé pour activer le partage des ressources entre différentes sources dans mon API

- html-pdf = Bibliothèque Node.js qui me permet de générer des fichiers PDF à partir de contenu HTML


## 🌟 Axe d'améliorations 

Ce que j'aurai trouvé intéressant d'intégrer dans mon projet pour une meilleure expérience: 

- Une meilleure gestion de mon server afin de générer plus facilement mon fichier pdf 
- Eventuellement incorporer une base de données qui va me permettre de mieux stocker mes données 
- Faire un espace de connexion 
- Différentes pages pour mieux organiser l'expérience utilisateur 

