# Notes HTML (La liste n'est pas exhaustive)


## 1. Structure minimale d'une page HTML


Une page HTML possède une structure minimale :


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>...</title>
</head>
<body>
    ...
</body>
</html>


- `<!DOCTYPE html>` : indique au navigateur d'interpréter le document en mode HTML standard.
- `<html lang="fr">` : élément racine du document et indique que la langue principale est le français.
- `<head>` : contient les métadonnées et les informations nécessaires au document.
- `<meta charset="UTF-8">` : définit l'encodage des caractères du document.
- `<title>` : définit le titre du document, généralement affiché dans l'onglet du navigateur.
- `<body>` : contient le contenu visible et interactif de la page.


---


## 2. Les titres


Les balises `<h1>` à `<h6>` représentent des titres de différents niveaux.


- `<h1>` : titre principal de niveau 1.
- `<h2>` : titre de niveau 2, généralement utilisé pour une section du document.
- `<h3>` à `<h6>` : niveaux de titres successivement plus profonds.


La différence entre les titres est avant tout **sémantique et hiérarchique**, et non visuelle.


Le navigateur applique une taille par défaut différente à chaque niveau, mais cette apparence peut être modifiée avec CSS.


Il ne faut donc pas choisir une balise de titre uniquement en fonction de sa taille.


---


## 3. Paragraphes et listes


`<p>` représente un paragraphe de texte.


### Liste non ordonnée


`<ul>` représente une liste dont l'ordre des éléments n'a pas de signification particulière.


```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
Liste ordonnée

<ol> représente une liste dont l'ordre des éléments est important.

<ol>
    <li>Installer Node.js</li>
    <li>Créer le projet</li>
    <li>Lancer le serveur</li>
</ol>

<li> représente un élément d'une liste.

```

## 4. Les liens

La balise <a> représente un hyperlien.

L'attribut href indique la destination du lien.

<a href="https://roadmap.sh">roadmap.sh</a>

Dans cet exemple :

<a> représente le lien ;
href indique sa destination ;
roadmap.sh est le contenu visible du lien.

Sans href, l'élément <a> ne possède pas de destination et ne fonctionne pas comme un lien de navigation.

## 5. Les images

<img> permet d'intégrer une image dans un document HTML.

src (source) : indique le chemin ou l'URL de l'image.
alt (alternative text) : fournit un texte alternatif décrivant l'image lorsque cela est nécessaire.

L'attribut alt est important pour l'accessibilité, notamment parce que les lecteurs d'écran peuvent utiliser ce texte pour transmettre l'information de l'image.

Pour une image purement décorative, on peut utiliser un alt vide :

<img src="decoration.png" alt="">

<img> est un élément void : il ne possède pas de balise fermante.

## 6. Les formulaires

<form> représente un formulaire permettant de recueillir et d'envoyer des données utilisateur.

action : indique l'URL vers laquelle les données du formulaire sont envoyées.
method : indique la méthode HTTP utilisée pour envoyer les données.
<form action="/contact" method="POST">
    ...
</form>
label et input

<label> définit l'étiquette d'un champ de formulaire.

L'attribut for du label doit correspondre à l'attribut id du champ :

<label for="nom">Nom</label>
<input type="text" id="nom">

Cette association :

donne du sens au champ ;
améliore l'accessibilité ;
permet notamment de donner le focus au champ en cliquant sur son label.
Types de champs
<input type="text">

Permet de saisir du texte générique.

<input type="email">

Indique que le champ attend une adresse e-mail et permet au navigateur d'effectuer une validation native du format.

name

L'attribut name définit le nom sous lequel la valeur du champ sera envoyée au serveur.

<input type="text" name="nom">

Si l'utilisateur saisit Drissa, la donnée envoyée sera associée au nom nom.

## 7. HTML sémantique

Les balises sémantiques permettent de donner du sens et de structurer le contenu d'une page.

Exemples :

<header> : contenu introductif d'une page ou d'une section.
<nav> : zone contenant des liens de navigation.
<main> : contenu principal de la page.
<section> : section thématique du document.
<footer> : pied de page ou d'une section.

L'utilisation de balises sémantiques améliore notamment :

la compréhension de la structure du document ;
l'accessibilité ;
le référencement ;
la maintenance du code.
Principe important

HTML décrit principalement la structure et le sens du contenu.

CSS contrôle principalement sa présentation.

JavaScript ajoute principalement du comportement et de l'interactivité.