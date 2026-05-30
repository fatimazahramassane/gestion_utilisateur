# Gestion des Utilisateurs - Application Web CRUD

## Auteur
Fatimazahra Massane  
Master SDIA 

## Description
Ce projet consiste en le développement d'une application web complète de gestion des utilisateurs, implémentant les opérations CRUD (Create, Read, Update, Delete). L'architecture repose sur une séparation claire entre le backend et le frontend, conformément aux standards modernes de développement web.

L'application permet d'ajouter, consulter, modifier et supprimer des utilisateurs via une interface graphique intuitive connectée à une API REST. Ce travail a été réalisé dans le cadre des travaux pratiques du Master SDIA.

## Technologies Utilisées
- Backend : Node.js, Express.js, CORS
- Frontend : React.js, Vite, CSS3
- Communication : API REST, Fetch API
- Stockage : Mémoire vive (tableau JavaScript) pour la phase de démonstration

## Structure du Projet
projet/
├── backend/
│   ├── server.js          # Serveur Express et définition des routes API
│   ├── package.json       # Dépendances et scripts backend
│   └── node_modules/
└── frontend/
    ├── src/
    │   ├── App.jsx        # Composant principal React contenant la logique CRUD
    │   ├── App.css        # Feuille de styles de l'interface
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js

## Installation et Configuration

### Prérequis
- Node.js (version 16 +)
- Gestionnaire de paquets npm ou yarn

### Configuration du Backend
1. Accéder au dossier backend :
   cd backend
2. Installer les dépendances :
   npm install
3. Lancer le serveur :
   node server.js
   Le serveur sera accessible sur http://localhost:5000

### Configuration du Frontend
1. Ouvrir un nouveau terminal et accéder au dossier frontend :
   cd frontend
2. Installer les dépendances :
   npm install
3. Lancer l'application de développement :
   npm run dev
   L'interface sera accessible sur http://localhost:5173

## Fonctionnalités Implémentées
- Création d'un utilisateur avec validation des champs obligatoires
- Affichage dynamique de la liste des utilisateurs
- Modification des informations d'un utilisateur existant
- Suppression d'un utilisateur avec demande de confirmation
- Synchronisation automatique entre l'interface et l'API
- Design responsive et ergonomique

## Endpoints de l'API
| Méthode | Route              | Description                          |
|---------|--------------------|--------------------------------------|
| GET     | /api/users         | Récupérer la liste complète          |
| GET     | /api/users/:id     | Récupérer un utilisateur spécifique  |
| POST    | /api/users         | Créer un nouvel utilisateur          |
| PUT     | /api/users/:id     | Mettre à jour un utilisateur         |
| DELETE  | /api/users/:id     | Supprimer un utilisateur             |

## Guide d'Utilisation
1. Vérifier que les deux serveurs (backend et frontend) sont actifs.
2. Ouvrir un navigateur web et accéder à http://localhost:5173
3. Utiliser le formulaire supérieur pour saisir un nom et un email, puis valider.
4. Consulter la liste mise à jour automatiquement.
5. Cliquer sur le bouton de modification pour éditer un enregistrement.
6. Cliquer sur le bouton de suppression pour retirer un utilisateur.

## Perspectives d'Amélioration
- Migration vers une base de données persistante (SQLite, PostgreSQL ou MongoDB)
- Implémentation d'un système d'authentification et de gestion des rôles
- Ajout de validations avancées côté serveur et client
- Intégration de tests unitaires et end-to-end
- Conteneurisation avec Docker et déploiement cloud

## Licence
Ce projet est réalisé dans un cadre académique. Toute utilisation, modification ou redistribution doit citer l'auteur et respecter les droits d'auteur associés.
