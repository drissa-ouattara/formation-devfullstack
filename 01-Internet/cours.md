# Cours — Internet et protocoles web

> Ce cours présente les bases du fonctionnement d’Internet, des échanges entre machines, puis du web et des APIs.
>
> Objectif : comprendre comment une URL devient une requête HTTP, comment les données circulent, et comment les applications web communiquent entre elles.

---

## I. Les bases de l’Internet

### 1. URL

Une URL (Uniform Resource Locator) sert à localiser une ressource sur le réseau.

Exemple :

```text
https://www.example.com:443/produits?id=42
```

Une URL contient généralement :

- le protocole : `https`
- le domaine : `www.example.com`
- le port : `443`
- le chemin : `/produits`
- les paramètres : `?id=42`

Elle permet d’indiquer précisément où se trouve une ressource et comment y accéder.

---

### 2. DNS

Le DNS (Domain Name System) transforme un nom de domaine en adresse IP.

Exemple :

```text
www.google.com
```

Le navigateur ne connaît pas directement cette adresse sous forme « lisible ». Il demande au DNS :

```text
Quelle est l’IP de www.google.com ?
```

Le DNS retourne une adresse IP, par exemple :

```text
142.250.190.14
```

Sans DNS, il faudrait mémoriser des adresses IP compliquées au lieu de noms simples.

---

### 3. IP

Une adresse IP identifie un appareil connecté au réseau.

Il existe deux versions principales :

- IPv4 : `192.168.1.12`
- IPv6 : `2001:db8::1`

Exemple :

```text
192.168.0.24
```

L’IP permet d’identifier la machine source et la machine destinataire lors d’une communication réseau.

---

### 4. NAT

Le NAT (Network Address Translation) permet de faire communiquer plusieurs appareils internes avec Internet en utilisant une seule adresse IP publique.

Schema simple :

```text
Appareil interne  ->  routeur NAT  ->  Internet
```

Le routeur conserve une table qui associe :

- une machine interne ;
- un port local ;
- une adresse externe ;
- un port public.

Le NAT est très utilisé dans les réseaux domestiques et professionnels.

Il permet de :

- conserver un nombre limité d’adresses IP publiques ;
- masquer l’infrastructure interne ;
- protéger les appareils locaux.

---

### 5. Ports

Un port est un numéro utilisé pour identifier un service ou un processus sur un ordinateur.

Exemple :

- `80` → HTTP
- `443` → HTTPS
- `21` → FTP
- `3306` → MySQL
- `8080` → serveur web local

Une adresse IP indique l’ordinateur, et le port indique le service sur cet ordinateur.

Exemple de combinaison :

```text
IP : 192.168.1.10
Port : 443
```

Cela correspond à un service web concret sur cette machine.

---

## II. Les protocoles de transport

### 6. TCP

TCP (Transmission Control Protocol) est un protocole fiable et orienté connexion.

Il garantit que :

- les données arrivent dans l’ordre ;
- les données ne sont pas perdues ;
- les paquets manquants sont retransmis.

Caractéristiques principales :

- connexion établie avant l’échange ;
- vérification des erreurs ;
- contrôle du flux ;
- fiable.

Exemples d’utilisation :

- HTTP
- HTTPS
- FTP
- SMTP

---

### 7. UDP

UDP (User Datagram Protocol) est un protocole plus simple et plus rapide.

Il n’établit pas de connexion robuste et ne garantit pas la remise complète des données.

Caractéristiques principales :

- sans connexion explicite ;
- plus rapide ;
- moins fiable ;
- utile pour les flux multimédias, jeux, DNS, VoIP.

Exemples d’utilisation :

- video streaming ;
- jeux en ligne ;
- DNS ;
- VoIP.

---

### 8. TCP vs UDP

| Protocole | Fiabilité | Vitesse | Utilisation typique |
| --------- | --------- | ------- | ------------------ |
| TCP       | Élevée    | Plus lente | HTTP, FTP, SMTP     |
| UDP       | Moins forte | Plus rapide | Streaming, jeux, VoIP |

En résumé :

- TCP : vérification, ordre, sécurité de livraison ;
- UDP : vitesse et simplicité.

---

## III. Sécurité et chiffrement

### 9. TLS

TLS (Transport Layer Security) est un protocole de sécurité qui chiffre les échanges entre client et serveur.

Il protège notamment :

- les données envoyées ;
- les identités du serveur (via certificat) ;
- la confidentialité et l’intégrité des informations.

Exemple :

```text
https://example.com
```

Le `https` signifie que la communication passe par HTTP + TLS.

---

## IV. HTTP et le web

### 10. HTTP

HTTP (HyperText Transfer Protocol) est le protocole utilisé pour échanger des pages web et des ressources entre navigateur et serveur.

Le navigateur envoie une requête, le serveur répond avec une réponse HTTP.

Exemple :

```text
GET /index.html HTTP/1.1
Host: example.com
```

Réponse du serveur :

```text
HTTP/1.1 200 OK
Content-Type: text/html
```

---

### 11. Méthodes HTTP

Les méthodes HTTP indiquent l’action souhaitée sur une ressource.

#### `GET`

Récupère une ressource.

```http
GET /users HTTP/1.1
```

#### `POST`

Crée une ressource.

```http
POST /users HTTP/1.1
```

#### `PUT`

Remplace ou met à jour complètement une ressource.

#### `PATCH`

Met à jour partiellement une ressource.

#### `DELETE`

Supprime une ressource.

#### `HEAD`

Récupère les headers sans le corps de la réponse.

#### `OPTIONS`

Indique les méthodes prises en charge par le serveur.

---

### 12. Codes HTTP

Les codes HTTP indiquent le résultat de la requête.

#### Codes de succès

- `200 OK` : la requête a réussi
- `201 Created` : ressource créée
- `204 No Content` : succès sans contenu

#### Codes de redirection

- `301 Moved Permanently` : déplacement permanent
- `302 Found` : redirection temporaire
- `304 Not Modified` : ressource non modifiée

#### Codes d’erreur client

- `400 Bad Request` : requête invalide
- `401 Unauthorized` : authentification requise
- `403 Forbidden` : accès interdit
- `404 Not Found` : ressource absente
- `429 Too Many Requests` : trop de requêtes

#### Codes d’erreur serveur

- `500 Internal Server Error` : erreur serveur
- `502 Bad Gateway` : mauvaise réponse du serveur upstream
- `503 Service Unavailable` : service indisponible
- `504 Gateway Timeout` : délai dépassé

---

### 13. Headers HTTP

Les headers HTTP transportent des informations supplémentaires autour de la requête ou de la réponse.

Exemples de headers de requête :

```http
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
Content-Type: application/json
```

Exemples de headers de réponse :

```http
Content-Type: text/html
Content-Length: 1234
Set-Cookie: session=abc123
Cache-Control: no-cache
```

Les headers permettent de transmettre :

- le type de contenu ;
- l’authentification ;
- les cookies ;
- la langue ;
- la compression ;
- les directives de cache.

---

### 14. Cookies

Un cookie est un petit fichier stocké côté navigateur par le serveur.

Il permet de mémoriser des informations comme :

- la langue préférée ;
- le panier d’achat ;
- une session utilisateur.

Exemple :

```http
Set-Cookie: theme=dark; Path=/; HttpOnly; Secure
```

Le navigateur envoie ensuite le cookie lors des requêtes suivantes.

Les cookies sont utiles mais peuvent aussi être utilisés pour suivre l’utilisateur.

---

### 15. Sessions

Une session correspond à un état conservé côté serveur pour un utilisateur donné.

Le navigateur envoie un identifiant de session, souvent via un cookie.

Exemple :

```text
sessionId = "abc123"
```

Le serveur sait alors :

- qui est l’utilisateur ;
- son panier ;
- son statut de connexion ;
- ses préférences.

Les cookies et les sessions sont deux mécanismes complémentaires.

- le cookie stocke souvent l’identifiant ;
- le serveur garde les informations détaillées.

---

## V. API REST et format des données

### 16. API REST — introduction

REST (Representational State Transfer) est un style d’architecture pour concevoir des APIs web.

Une API REST repose sur des principes :

- utilisation du protocole HTTP ;
- ressources identifiées par des URL ;
- méthodes HTTP pour les actions ;
- échange de données structurées ;
- absence d’état côté serveur entre deux requêtes (stateless).

Exemple :

```http
GET /api/users/1
```

Réponse possible :

```json
{
  "id": 1,
  "name": "Alice"
}
```

REST est utilisé partout :

- services web ;
- applications mobiles ;
- sites e-commerce ;
- backends modernes.

---

### 17. JSON

JSON (JavaScript Object Notation) est un format léger d’échange de données.

Il est très utilisé dans les APIs.

Exemple :

```json
{
  "nom": "Alice",
  "age": 25,
  "admin": false,
  "tags": ["dev", "js"]
}
```

JSON permet de représenter :

- des objets ;
- des tableaux ;
- des nombres ;
- des chaînes ;
- des booléens ;
- des valeurs null.

Le JSON est lisible par les humains et facilement exploitable par les applications.

---

### 18. JWT — introduction

JWT (JSON Web Token) est un standard utilisé pour transmettre des informations d’authentification entre parties.

Un JWT se compose généralement de 3 parties :

1. header
2. payload
3. signature

Exemple schématique :

```text
xxxxx.yyyyy.zzzzz
```

Le token contient souvent :

- l’identité de l’utilisateur ;
- les droits d’accès ;
- une date d’expiration ;
- une signature pour vérifier son intégrité.

Exemple de payload :

```json
{
  "sub": "123",
  "role": "admin",
  "exp": 1700000000
}
```

JWT permet de faciliter l’authentification dans les APIs et les applications web modernes.

Il est important de noter que le JWT n’est pas un remplacement complet des sessions ; il est souvent utilisé pour transmettre des informations d’identité de manière portable.

---

## VI. Synthèse

Le fonctionnement d’Internet repose sur plusieurs mécanismes liés entre eux :

- une URL indique où aller ;
- le DNS traduit le nom de domaine en IP ;
- l’IP identifie l’appareil ;
- le NAT masque et partage les adresses publiques ;
- les ports distinguent les services ;
- TCP et UDP transportent les données selon des besoins différents ;
- TLS sécurise les échanges ;
- HTTP standardise les requêtes et réponses web ;
- les headers, cookies et sessions ajoutent du contexte ;
- les API REST exposent des ressources via HTTP ;
- JSON est le format de données principal ;
- JWT sert à transporter des informations d’authentification.

En somme, Internet n’est pas seulement une toile de pages visibles : c’est un ensemble de protocoles, de règles et d’échanges structurés qui permettent à des machines de se parler.

---

## VII. Quiz de validation

### Questions rapides

1. Que signifie URL ?
2. À quoi sert le DNS ?
3. Quelle est la différence entre IP et port ?
4. Pourquoi utilise-t-on NAT ?
5. Quelle est la différence entre TCP et UDP ?
6. Que signifie HTTPS ?
7. Quelle est la différence entre GET et POST ?
8. Que représente un code HTTP 404 ?
9. Quel est le rôle d’un cookie ?
10. Qu’est-ce qu’une API REST ?
11. À quoi sert le format JSON ?
12. Que contient un JWT ?

---

## VIII. Révisions à retenir

- Une URL pointe vers une ressource.
- Le DNS résout les noms de domaine.
- L’IP identifie la machine.
- Le port identifie le service.
- TCP = fiable, UDP = rapide.
- HTTP = protocole web.
- TLS = sécurité.
- REST = architecture d’API.
- JSON = format de données.
- JWT = authentification portable.

---
