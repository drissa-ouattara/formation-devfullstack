## 1. UNE URL

Une URL (Uniform Resource Locator) est une adresse permettant de localiser une ressource sur le Web. Elle contient plusieurs informations, notamment :

- Le protocole : HTTP ou HTTPS ;
- Le nom de domaine : par exemple www.google.com ;
- Un chemin (Path), éventuellement : par exemple /search ;
- Des paramètres (Query String), identifiés par "?" et séparés par "&" lorsqu'il y en a plusieurs : par exemple ?q=chat&lang=fr.

## 2. Le rôle du DNS

Les ordinateurs communiquent entre eux grâce aux adresses IP et non aux noms de domaine.

Le DNS (Domain Name System) est un service chargé de traduire un nom de domaine (par exemple www.google.com) en adresse IP afin que l'ordinateur puisse contacter le bon serveur.

On peut comparer le DNS au répertoire de contacts d'un téléphone : on recherche un nom, puis on obtient le numéro correspondant.

## 3. Le rôle de TCP 

TCP (Transmission Control Protocol) est un protocole de transport (couche 4 du modèle OSI).

Son rôle est de garantir une communication fiable entre deux machines.

Pour cela, il :

- établit une connexion grâce au Three-Way Handshake (SYN, SYN-ACK, ACK) ;
- garantit la livraison des données ;
- retransmet les paquets perdus ;
- remet les paquets dans le bon ordre ;
- vérifie leur intégrité grâce au checksum.

## 4. Le rôle de TLS 

TLS (Transport Layer Security) assure la sécurité des échanges entre le client et le serveur.

Il garantit :

- la confidentialité des données grâce au chiffrement ;
- leur intégrité (elles ne peuvent pas être modifiées sans être détectées) ;
- l'authentification du serveur grâce aux certificats numériques.

## 5. Le rôle de HTTP

HTTP (HyperText Transfer Protocol) est le protocole utilisé pour communiquer entre un client et un serveur Web.

Il permet au client de demander une ressource (page HTML, image, vidéo, API, etc.) et au serveur de lui répondre.
Un exemple de requête http/1.1:
    Client :
    GET / HTTP/1.1    ← Ligne de requête
    Host: www.youtube.com
    User-Agent: Brave
    Accept: text/html   ← Headers

    ------------------------
    Serveur: 
    HTTP/1.1 200 OK (protocole utilisé : HTTP/1.1, code : 200, message : OK)    ← Ligne de status
    Content-Type: text/html (contenu est du html)
    Content-Length: 15432 (Taille du contenu)   ← Headers de réponse

    <html>
        ...
    </html> (Contenu réel)  ← Body

## 6. Les méthodes HTTP

- GET : lire une ressource.

- POST : envoyer des données au serveur, souvent pour créer une nouvelle ressource.

- PUT : remplacer complètement une ressource.

- PATCH : modifier partiellement une ressource.

- DELETE : supprimer une ressource.

## 7. Les principaux codes HTTP

| Code                      | Signification             |
| ------------------------- | ------------------------- |
| 200 OK                    | Requête réussie           |
| 201 Created               | Ressource créée           |
| 204 No Content            | Succès sans contenu       |
| 400 Bad Request           | Requête invalide          |
| 401 Unauthorized          | Authentification requise  |
| 403 Forbidden             | Permissions insuffisantes |
| 404 Not Found             | Ressource introuvable     |
| 500 Internal Server Error | Erreur interne du serveur |

## 8. Les principaux headers HTTP

Host
→ indique le nom de domaine demandé.

User-Agent
→ indique quel logiciel effectue la requête.

Accept
→ indique le type de données attendu.

Content-Type
→ indique le type des données envoyées.

Content-Length
→ indique la taille du contenu.

Authorization
→ permet de transmettre des informations d'authentification.
    
## 9. Les cookies et les sessions

HTTP est un protocole sans état (stateless) : chaque requête est indépendante.

Pour reconnaître un utilisateur d'une requête à l'autre :

- le serveur crée une **session** contenant les informations de l'utilisateur ;
- cette session reçoit un **identifiant unique (Session ID)** ;
- le serveur envoie cet identifiant au navigateur dans un **cookie** (`Set-Cookie`) ;
- le navigateur renvoie automatiquement ce cookie à chaque nouvelle requête (`Cookie`) ;
- le serveur retrouve alors la session correspondante et reconnaît l'utilisateur.

## 10. API REST

Une API (Application Programming Interface) est une interface permettant à deux programmes de communiquer.

Une API REST est une API qui utilise les principes de REST et les méthodes du protocole HTTP (GET, POST, PUT, PATCH, DELETE...) pour manipuler des ressources.

## 11. JSON

JSON (JavaScript Object Notation) est un format texte permettant d'échanger des données entre différents programmes.

Il est indépendant des langages de programmation et peut être utilisé par JavaScript, Python, PHP, Java, C#, Go et bien d'autres.

Les API REST utilisent très souvent JSON pour envoyer et recevoir des données.

## 12. JWT

JWT (JSON Web Token) est un standard permettant de représenter les informations d'authentification sous la forme d'un jeton (token) : `xxxxx.yyyyy.zzzzz (Header.Payload.Signature)`.

Après une authentification réussie, le serveur génère un token signé qu'il renvoie au client.

Le client conserve ce token et le renvoie au serveur à chaque requête, généralement dans l'en-tête HTTP `Authorization`.

Le serveur vérifie alors la validité du token avant d'autoriser l'accès aux ressources demandées.