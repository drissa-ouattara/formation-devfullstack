## 1. Syntaxe CSS

Une règle CSS définit la manière dont un ou plusieurs éléments d'un document HTML ou XML doivent être présentés.

Elle est composée :

- d'un ou plusieurs **sélecteurs**, qui ciblent les éléments concernés ;
- d'un **bloc de déclarations** ;
- de **propriétés** et de leurs **valeurs**, qui déterminent les styles appliqués.

Exemple :

```css
p {
    color: red;
    font-size: 16px;
}
```
Dans cet exemple :

 **p** est le sélecteur ;
**color** et **font-size** sont les propriétés ;
**red** et **16px** sont les valeurs ;
**color**: **red**; et **font-size**: **16px**; sont des déclarations.

## 2. Sélecteurs

Un sélecteur CSS permet de cibler un ou plusieurs éléments HTML afin de leur appliquer des styles.

Il existe plusieurs types de sélecteurs :

- **Sélecteur de type (balise)** : `p` cible les éléments `<p>`.
- **Sélecteur de classe** : `.card` cible les éléments possédant la classe `card`.
- **Sélecteur d'identifiant** : `#contact` cible l'élément possédant l'identifiant `contact`.
- **Sélecteur universel** : `*` cible tous les éléments.
- **Sélecteur descendant** : `.navigation a` cible les éléments `<a>` situés dans `.navigation`.
- **Sélecteur d'enfant direct** : `.navigation > a` cible uniquement les `<a>` qui sont des enfants directs de `.navigation`.

Les sélecteurs permettent donc de déterminer précisément quels éléments HTML seront concernés par une règle CSS.

## 3. Cascade / Spécificité

- On parle de cascade parce que plusieurs déclarations CSS peuvent s'appliquer au même élément. Le navigateur détermine laquelle doit être appliquée selon un ordre de priorité, notamment l'importance, la spécificité et, lorsque nécessaire, l'ordre d'apparition des règles. 
- La spécificité permet de déterminer quelle règle CSS doit l'emporter lorsque plusieurs règles ciblent le même élément.

## 4. Héritage CSS
L'héritage CSS permet à certains styles définis sur un élément parent d'être transmis automatiquement à ses éléments descendants. Cependant, toutes les propriétés CSS ne sont pas héritées.

Exemple :
```css
    body {
        color: blue;
        font-family: Arial, sans-serif;
    }

    /*Les descendants peuvent hériter de color et font-family.

    En revanche :
    */

    body {
        margin: 20px;
        padding: 10px;
        border: 1px solid black;
    }
```
Les enfants ne récupèrent pas automatiquement ces margin, padding et border.

## 5. Box Model CSS
Le Box Model considère chaque élément HTML comme une boîte composée de plusieurs zones

    ┌───────────────────────────────┐
    │            margin             │
    │  ┌─────────────────────────┐  │
    │  │         border          │  │
    │  │  ┌───────────────────┐  │  │
    │  │  │      padding      │  │  │
    │  │  │  ┌─────────────┐  │  │  │
    │  │  │  │   content   │  │  │  │
    │  │  │  └─────────────┘  │  │  │
    │  │  └───────────────────┘  │  │
    │  └─────────────────────────┘  │
    └───────────────────────────────┘

Les dimensions d'un élément sont calculées selon la propriété `box-sizing` :

```css
/* Par défaut : width concerne uniquement le contenu. */
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 16px;
}

/* Recommandé : width inclut le contenu, le padding et la bordure. */
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

La largeur totale vaut `content + padding + border` avec `content-box`. La marge est extérieure à la boîte et ne fait pas partie de sa largeur.

## 6. Display

Display détermine principalement la manière dont un élément participe à la mise en page.
- `display: block` : occupe toute la largeur disponible et commence sur une nouvelle ligne.
- `display: inline` : reste dans le flux du texte ; `width` et `height` ne s'appliquent généralement pas.
- `display: inline-block` : reste en ligne tout en acceptant `width`, `height` et les marges verticales.
- `display: flex` : active une mise en page Flexbox pour les enfants directs.
- `display: grid` : active une mise en page Grid pour les enfants directs.
- `display: none` : retire l'élément de la mise en page et le rend invisible.
...

## 7. Positionnement

La propriété `position` détermine la manière dont un élément est placé :

- `static` : comportement normal, valeur par défaut ;
- `relative` : reste dans le flux et peut être décalé avec `top`, `right`, `bottom` ou `left` ;
- `absolute` : est retiré du flux et positionné par rapport à l'ancêtre positionné le plus proche ;
- `fixed` : est fixé par rapport à la fenêtre du navigateur ;
- `sticky` : se comporte comme `relative`, puis reste visible pendant le défilement dans ses limites.

```css
.parent {
    position: relative;
}

.badge {
    position: absolute;
    top: 8px;
    right: 8px;
}
```

`z-index` contrôle l'ordre d'empilement des éléments positionnés.

## 8. Flexbox

Flexbox organise les éléments sur un axe principal et un axe secondaire.

```css
.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}
```

- `justify-content` aligne les éléments sur l'axe principal ;
- `align-items` les aligne sur l'axe secondaire ;
- `flex-direction` choisit la direction (`row` ou `column`) ;
- `gap` définit l'espace entre les éléments ;
- `flex-wrap` autorise le retour à la ligne ;
- `flex` permet de contrôler la croissance et la réduction d'un enfant.

## 9. Grid

Grid organise les éléments en lignes et en colonnes.

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

`grid-template-columns` et `grid-template-rows` définissent la structure. `grid-column` et `grid-row` permettent de placer précisément un élément. L'unité `fr` représente une fraction de l'espace disponible.

## 10. Responsive Design

Le Responsive Design adapte l'interface aux différentes tailles d'écran. On privilégie une approche **mobile-first** : les styles de base ciblent les petits écrans, puis des règles supplémentaires améliorent l'affichage sur les écrans plus larges.

Il faut notamment utiliser des dimensions flexibles (`%`, `rem`, `vw`), des images adaptables et des mises en page capables de se réorganiser.

```css
img {
    max-width: 100%;
    height: auto;
}
```

## 11. Media Queries

Les media queries appliquent des styles selon les caractéristiques de l'appareil ou de la fenêtre.

```css
.gallery {
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

## 12. Transitions

Une transition anime progressivement le changement d'une propriété entre deux états.

```css
button {
    background-color: white;
    transition: background-color 200ms ease, transform 200ms ease;
}

button:hover {
    background-color: lightblue;
    transform: translateY(-2px);
}
```

Les propriétés animées doivent être précisées avec `transition-property`, ainsi que leur durée, leur fonction de progression et éventuellement leur délai.

## 13. Transformations

`transform` modifie visuellement un élément sans changer la place qu'il occupe dans le flux.

```css
.element {
    transform: translateX(10px) rotate(5deg) scale(1.05);
    transform-origin: center;
}
```

Les fonctions courantes sont `translate`, `rotate`, `scale` et `skew`.

## 14. Animations

Les animations CSS décrivent plusieurs étapes avec `@keyframes`, puis les associent à un élément.

```css
@keyframes apparition {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.panel {
    animation: apparition 400ms ease-out both;
}
```

`animation-duration`, `animation-delay`, `animation-iteration-count`, `animation-direction` et `animation-fill-mode` contrôlent le comportement de l'animation.

## 15. Variables CSS

Les variables CSS, déclarées avec `--`, stockent des valeurs réutilisables dans une feuille de style.

```css
:root {
    --couleur-principale: #2457a6;
    --espacement: 1rem;
}

.button {
    background-color: var(--couleur-principale);
    padding: var(--espacement);
}
```

`var(--nom, valeur-de-secours)` permet de définir une valeur de remplacement. Les variables héritent de leur élément parent et peuvent être modifiées dans une media query.

## 16. Architecture CSS

Une architecture CSS organise les styles pour limiter les conflits et faciliter la maintenance.

- séparer les styles par responsabilité : base, composants, utilitaires et mises en page ;
- privilégier des classes explicites et réutilisables ;
- limiter l'imbrication et éviter les sélecteurs trop spécifiques ;
- centraliser les valeurs partagées dans des variables CSS ;
- conserver une convention de nommage cohérente, par exemple BEM (`.card__title--featured`).

L'objectif est de garder des styles prévisibles, faciles à modifier et indépendants autant que possible.