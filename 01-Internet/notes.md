-1. UNE URL

 Une URL (Uniform Resource Locator) est une adresse permettant de localiser une ressource sur le Web. Elle contient plusieurs informations, notamment :

- Le protocole : HTTP ou HTTPS ;
- Le nom de domaine : par exemple www.google.com ;
- Un chemin (Path), éventuellement : par exemple /search ;
- Des paramètres (Query String), identifiés par "?" et séparés par "&" lorsqu'il y en a plusieurs : par exemple ?q=chat&lang=fr.

-2. Le rôle du DNS

    Les ordinateurs communiquent entre eux grâce aux adresses IP et non aux noms de domaine.

Le DNS (Domain Name System) est un service chargé de traduire un nom de domaine (par exemple www.google.com) en adresse IP afin que l'ordinateur puisse contacter le bon serveur.

On peut comparer le DNS au répertoire de contacts d'un téléphone : on recherche un nom, puis on obtient le numéro correspondant.

-3. Le rôle de TCP 

TCP (Transmission Control Protocol) est un protocole de transport (couche 4 du modèle OSI).

Son rôle est de garantir une communication fiable entre deux machines.

Pour cela, il :

- établit une connexion grâce au Three-Way Handshake (SYN, SYN-ACK, ACK) ;
- garantit la livraison des données ;
- retransmet les paquets perdus ;
- remet les paquets dans le bon ordre ;
- vérifie leur intégrité grâce au checksum.

-4. Le rôle de TLS 

    TLS (Transport Layer Security) assure la sécurité des échanges entre le client et le serveur.

Il garantit :

- la confidentialité des données grâce au chiffrement ;
- leur intégrité (elles ne peuvent pas être modifiées sans être détectées) ;
- l'authentification du serveur grâce aux certificats numériques.

-5. Le rôle de HTTP

    TLS (Transport Layer Security) assure la sécurité des échanges entre le client et le serveur.

Il garantit :

- la confidentialité des données grâce au chiffrement ;
- leur intégrité (elles ne peuvent pas être modifiées sans être détectées) ;
- l'authentification du serveur grâce aux certificats numériques.
    