# 324_portfolio_app1_Racine-Thibaud
# Portfolio de Développement

## 1. Introduction

### Objectif du projet :
Ce projet a pour objectif de documenter, à travers un portfolio détaillé,
l’ensemble des étapes du cycle de vie de développement logiciel : planification
(Plan), développement (Dev), génération (Build), tests (Tests) et déploiement (Deploy).
Le portfolio illustre ces étapes à travers la création de deux applications indépendantes,
mettant en œuvre des pratiques modernes de développement, d'intégration continue
et de livraison continue (CI/CD). Ce travail met en avant les choix techniques,
les défis rencontrés, et les solutions apportées pour mener à bien ces réalisations.

- Présentation des deux applications
  - Application 1 : Add-on Firefox – Todo App
  - Application 2 : [Nom et domaine de l'application à choix]

---

## 2. Analyse et Planification Initiale

- Analyse des besoins pour chaque application
- Schéma fonctionnel et architecture
- Liste des fonctionnalités principales
- Chronogramme prévisionnel

---

## 3. Configuration de l’Environnement de Développement

### Installation de l’add-on Todo

1. Télécharger le zip du projet
2. Modifier l’ID de gecko avec l’ID donné par le prof
3. Dans OneDrive, créer un dossier à la racine du OneDrive nommé “addon_todo” et ajouter un fichier JSON nommé “taskList.json”
4. Exécuter `npm install` dans le dossier local et `npm run dev:firefox`
5. Une page Firefox va s’ouvrir, appuyer sur le bouton des extensions, ouvrir l’app Todo et se connecter avec eduvaud.
6. Une fois connecté et la page actualisée, les tâches apparaissent dans la fenêtre Todo.
7. Pour accéder au debug de l’app, taper dans la barre de recherche `about:debugging`

#### Commande

- `npm run zip:firefox`

---

### Déployer l’add-on Firefox

1. Créer un compte Firefox
2. Générer des clés API en passant par le site FireFox add-ons > atelier sur les extensions > submit or manage extensions > outils > gérer les clés API
3. Enregistrez les clés générées et proposez un nouveau module
4. Acceptez les accords, ajoutez un nom et continuez
5. Ajoutez le fichier zip de Firefox qui se trouve dans `.output` de l’app, choisissez le fichier `firefox.zip`
6. Il faut ensuite donner le code source, importer le fichier `source.zip` qui se trouve aussi dans le dossier `.output`

---

### Outils Utilisés :

1. **OneDrive**

   - **Rôle** : Stockage des données persistantes.
   - **Utilisation** :
     - Création d'un dossier nommé `addon_todo` et ajout d’un fichier `taskList.json` pour la gestion des tâches.

2. **npm (Node Package Manager)**

   - **Rôle** : Gestionnaire de paquets JavaScript.
   - **Utilisation** :
     - Installation des dépendances nécessaires au projet (`npm install`).
     - Commandes spécifiques pour le développement et la génération :
       - `npm run dev:firefox` : Lance l'application en mode développement pour Firefox.
       - `npm run zip:firefox` : Génère un fichier ZIP prêt pour le déploiement de l'add-on.

3. **Firefox Developer Tools**

   - **Rôle** : Déboguer et tester les extensions dans Firefox.
   - **Utilisation** :
     - Accéder au débogueur via la commande `about:debugging` dans la barre de recherche de Firefox.
     - Tester et visualiser les modifications en direct.

4. **Firefox Add-on Developer Dashboard**

   - **Rôle** : Plateforme de gestion et de déploiement des add-ons pour Firefox.
   - **Utilisation** :
     - Création de compte pour accéder à la plateforme.
     - Génération des clés API nécessaires au déploiement.
     - Soumission et gestion des extensions.

5. **Gecko (Mozilla ID System)**
   - **Rôle** : Identifiant unique pour l'extension.
   - **Utilisation** :
     - Modification de l’ID donné par le professeur pour configurer l'add-on.

---

- IDE
- Gestionnaire de version (Git)
- Dépendances et bibliothèques
- Procédure de configuration pour les deux applications
  - Étapes pour installer l'environnement
  - Commandes clés

---

## 4. Journal des Commits

- Liste des commits datés et commentés
  - **Date 1** : Description du commit
  - **Date 2** : Description du commit
  - ...

---

## 5. Développement et Tests

### Application 1 : Add-on Firefox – Todo App

- Processus de développement
  - Description des étapes
  - Difficultés rencontrées et solutions
- Tests
  - Types de tests effectués (unitaires, fonctionnels, etc.)
  - Résultats des tests

### Application 2 : [Nom de l'application]

- Processus de développement
  - Description des étapes
  - Difficultés rencontrées et solutions
- Tests
  - Types de tests effectués (unitaires, fonctionnels, etc.)
  - Résultats des tests

---

## 6. Planification / Jobs / Étapes CI/CD

- Introduction à la CI/CD
- Plan de CI/CD pour chaque application
  - Jobs configurés
  - Étapes automatisées (build, tests, déploiement)

---

## 7. Résultats Finaux et Conclusion

- Présentation des applications finies
  - Screenshots ou captures d’écran
  - Fonctionnalités finales implémentées
- Retours d’expérience
  - Ce qui a bien fonctionné
  - Améliorations possibles
- Conclusion générale

---

## 8. Annexes

- Captures d’écran ou diagrammes supplémentaires

## Documentation complémentaire :

### GitHub Actions

Plateforme CI/CD qui permet d’automatiser des tâches dans un dépôt GitHub, d’exécuter des workflows, etc.

### Composants principaux :

#### Event :

Une activité spécifique dans le dépôt qui déclenche l’exécution d’un workflow.

- Peut être déclenché manuellement à l’aide d’une API REST ou programmé selon un calendrier.
- L’activité peut aussi provenir de GitHub (exemple : lorsqu’une pull request est créée).

#### Workflow :

Un processus automatisé et configurable qui exécute un ou plusieurs jobs.

- Les workflows sont définis dans des fichiers au format YAML dans le dépôt.

#### Runner :

Serveur qui exécute les workflows lorsqu’ils sont déclenchés.

- Chaque runner peut exécuter un seul job à la fois.
- On peut utiliser les runners fournis par GitHub ou ses propres runners.
- Les runners nettoient automatiquement ce qu’ils font après leur exécution.
- Prend en charge les exécutions synchrones ou asynchrones.

#### Jobs :

Ensemble d’étapes dans un workflow qui sont exécutées sur le même runner.

- Chaque étape est comme un script shell qui sera exécuté.
- Les étapes sont exécutées dans l’ordre et dépendent les unes des autres.
- Il est possible de configurer les dépendances entre jobs à l’aide de `needs`.

#### Action :

Une application personnalisée qui exécute une tâche complexe et répétitive.

- Chaque action contient des instructions spécifiques.
- Les actions locales doivent avoir un fichier nommé `action.yaml`.

### Workflow Général :

> `code > build > test > release > deploy > operate > monitor > plan`

### Protocoles :

- ftp
- scp
- sftp

---

Liens vers les dépôts Git : https://github.com/Gorfort/324_portfolio_app1_Racine-Thibaud
