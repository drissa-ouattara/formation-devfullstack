# Full-Stack Development Roadmap

> Une progression pratique, des fondamentaux jusqu'au déploiement d'une application complète.

## Comment utiliser cette roadmap

- [ ] Etudier chaque sujet dans l'ordre.
- [ ] Construire un petit exercice avant de passer au sujet suivant.
- [ ] Valider chaque phase avec un projet concret.
- [ ] Revenir sur les notions qui restent fragiles pendant les projets.

## Phase 1 - Fondamentaux du Web

### Architecture du Web

- [x] Modele client-serveur
- [x] Cycle requete-reponse
- [x] Systeme de noms de domaine (DNS)
- [x] Hebergement et serveurs
- [x] Ports et protocoles
- [x] Mecanismes de cache
- [x] Reseaux de diffusion de contenu (CDN)

### Protocole HTTP

- [x] Methodes HTTP
- [x] Codes de statut
- [x] En-tetes et corps des requetes
- [x] Cookies et sessions
- [x] Principe d'apatridie
- [x] HTTPS et TLS
- [x] Principes REST

## Phase 2 - Interface Web

### HTML

- [x] Structure d'un document
- [x] Elements semantiques
- [x] Metadonnees du document
- [x] Hierarchie des titres
- [x] Paragraphes et texte
- [x] Listes et tableaux
- [x] Elements multimedia
- [x] Elements inline et block

### Formulaires et saisie

- [x] Elements de formulaire
- [x] Types de champs
- [x] Attributs de validation
- [x] Labels et association avec les champs
- [x] Televersement de fichiers
- [x] Envoi des donnees
- [x] Bonnes pratiques d'accessibilite

### CSS

#### Concepts essentiels

- [x] Selecteurs et specificite
- [x] Modele de boite
- [x] Positionnement
- [x] Couleurs et unites
- [x] Regles typographiques
- [x] Arriere-plans et gradients
- [x] Proprietes d'affichage

#### Mise en page responsive

- [x] Flexbox
- [x] CSS Grid
- [x] Conception responsive
- [x] Media queries
- [x] Unites modernes
- [x] Techniques d'alignement
- [x] Gestion des debordements

## Phase 3 - JavaScript

### Bases du langage

- [x] Declaration des variables
- [x] Types de donnees
- [x] Operateurs et expressions
- [x] Conditions
- [x] Instructions switch
- [x] Boucles et iterations
- [x] Coercition de types
- [x]Tableau 

### Fonctions et portee

- [x] Declarations de fonctions
- [x] Expressions de fonctions
- [x] Fonctions flechees
- [x] Chaine de portee
- [x] Closures
- [x] Contexte d'execution
- [x] Pile d'appels

### Objets et modèle objet JavaScript ⭐ AJOUT
- [x] Objets et propriétés
- [x] Méthodes
- [x] this
- [x] Fonctions constructrices
- [x] Opérateur new
- [x] Instances
- [x] Prototypes
- [x] prototype
- [x] Chaîne de prototypes (prototype chain)
- [x] Héritage en JavaScript
- [x] Classes ES6 (class, extends, super)
- [x] Encapsulation et abstraction en JavaScript
- [x] IIFE (Immediately Invoked Function Expression)

### Navigateur et asynchronisme

- [x] Selection des elements du DOM
- [x] Gestion des evenements
- [x] Propagation des evenements
- [x] Creation et parcours des noeuds
- [x] Modification des attributs et des styles
- [x] Callbacks
- [x] Promesses
- [x] Async et await
- [x] API Fetch
- [x] Boucle d'evenements
- [x] Gestion des erreurs
- [x] Timers et intervalles

## Phase 4 - Frontend applicatif

### Architecture par composants

- [ ] Creation de composants
- [ ] Passage des props
- [ ] Gestion de l'etat
- [ ] Cycle de vie
- [ ] Rendu conditionnel
- [ ] Rendu de listes
- [ ] Composition de composants

### Etat et donnees de l'application

- [ ] Etat local
- [ ] Context API
- [ ] Hooks d'etat
- [ ] Hooks de reduction
- [ ] Stores externes
- [ ] Persistance de l'etat
- [ ] Flux de donnees
- [ ] Communication avec une API
- [ ] Gestion des chargements et des erreurs

## Phase 5 - Backend et donnees

### Environnement Node.js

- [ ] Runtime Node.js
- [ ] Gestionnaire de paquets
- [ ] Module File System
- [ ] Module Path
- [ ] Variables d'environnement
- [ ] Objet Process
- [ ] EventEmitter

### Framework serveur

- [ ] Mise en place d'un serveur
- [ ] Routage
- [ ] Creation de middlewares
- [ ] Lecture des requetes
- [ ] Construction des reponses
- [ ] Gestion centralisee des erreurs
- [ ] Modularisation des routes

### Bases de donnees relationnelles

- [ ] Conception d'une base de donnees
- [ ] Creation de tables
- [ ] Cles primaires
- [ ] Cles etrangeres
- [ ] Requetes SQL
- [ ] Jointures et unions
- [ ] Transactions

### Bases de donnees non relationnelles

- [ ] Bases documentaires
- [ ] Collections
- [ ] Schema JSON
- [ ] Operations CRUD
- [ ] Strategies d'indexation
- [ ] Pipeline d'agregation
- [ ] Modelisation des donnees

## Phase 6 - APIs, securite et qualite

### APIs REST

- [ ] Conception des endpoints
- [ ] Nommage des ressources
- [ ] Parametres de requete
- [ ] Validation des donnees
- [ ] Codes et statuts de reponse
- [ ] Formats de serialisation
- [ ] Documentation d'API
- [ ] Pagination, filtrage et tri

### Authentification et autorisation

- [ ] Hachage des mots de passe
- [ ] JSON Web Tokens
- [ ] Gestion des sessions
- [ ] OAuth
- [ ] Gestion des roles
- [ ] Protection des routes
- [ ] En-tetes de securite

### Tests et qualite du code

- [ ] Tests unitaires
- [ ] Tests d'integration
- [ ] Tests end-to-end
- [ ] Linting
- [ ] Formatage automatique
- [ ] Revue de code
- [ ] Gestion des erreurs et des logs

## Phase 7 - Collaboration et livraison

### Git

- [ ] Initialisation d'un depot
- [ ] Zone de staging
- [ ] Historique des commits
- [ ] Strategies de branches
- [ ] Fusion de branches
- [ ] Resolution des conflits
- [ ] Fichiers ignores

### Collaboration

- [ ] Depots distants
- [ ] Pull requests
- [ ] Revues de code
- [ ] Forks
- [ ] Taggage des versions
- [ ] Suivi des issues
- [ ] Integration continue

### Build et automatisation

- [ ] Bundling des ressources
- [ ] Transpilation
- [ ] Minification
- [ ] Configuration par environnement
- [ ] Scripts de projet
- [ ] Pipeline CI

### Deploiement et DevOps

- [ ] Plateforme as a Service (PaaS)
- [ ] Conteneurs
- [ ] Fichiers Docker
- [ ] Gestion des secrets et variables d'environnement
- [ ] Association d'un domaine
- [ ] Centralisation des logs
- [ ] Monitoring et verification de sante

## Projet de validation

- [ ] Concevoir une application full-stack de bout en bout.
- [ ] Creer son interface responsive et accessible.
- [ ] Exposer une API documentee et securisee.
- [ ] Connecter une base de donnees.
- [ ] Ajouter des tests automatises.
- [ ] Configurer l'integration continue.
- [ ] Deployer l'application et surveiller sa sante.