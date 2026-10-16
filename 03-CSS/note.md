# Notes personnelles — CSS

> Ces notes regroupent mes compréhensions, corrections et points importants rencontrés pendant l'apprentissage de CSS.

---

## 1. Cascade, spécificité et héritage

Ces trois notions sont liées, mais ne désignent pas la même chose.

### Cascade

La cascade intervient lorsque plusieurs déclarations CSS peuvent s'appliquer au même élément.

Le navigateur détermine quelle déclaration appliquer selon différents critères, notamment l'importance, la spécificité et l'ordre d'apparition.

### Spécificité

La spécificité permet de déterminer quelle règle est prioritaire lorsque plusieurs sélecteurs ciblent le même élément.

Modèle mental simple :

```text
ID > classe/attribut/pseudo-classe > élément/pseudo-élément
```

Exemple :

```css
p {
    color: red;
}

.card {
    color: blue;
}

#presentation {
    color: green;
}
```

Si un élément possède les trois sélecteurs, la règle utilisant `#presentation` est la plus spécifique.

### Héritage

L'héritage permet à certaines propriétés définies sur un parent d'être transmises à ses descendants.

Toutes les propriétés ne sont pas héritées. Par exemple, `color` et `font-family` sont généralement héritées, tandis que `margin`, `padding` et `border` ne le sont pas automatiquement.

### À retenir

| Notion | Question à se poser |
| --- | --- |
| Cascade | Plusieurs règles peuvent-elles s'appliquer ? |
| Spécificité | Quelle règle est prioritaire ? |
| Héritage | La propriété vient-elle du parent ? |

## 2. Box Model

Chaque élément HTML peut être considéré comme une boîte composée de quatre zones :

- `content` : le contenu de l'élément ;
- `padding` : l'espace intérieur, entre le contenu et la bordure ;
- `border` : la bordure de l'élément ;
- `margin` : l'espace extérieur à la boîte.

Le `margin` est toujours extérieur à la boîte.

### `content-box`

Avec `content-box`, la valeur de `width` ou `height` concerne le contenu uniquement. Le padding et la bordure s'ajoutent aux dimensions.

### `border-box`

Avec :

```css
box-sizing: border-box;
```

la largeur ou la hauteur définie comprend :

```text
content + padding + border
```

Le `margin` n'est jamais inclus.

Dans les projets, je peux appliquer :

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

Cela donne un comportement plus prévisible.

## 3. Sélecteurs descendants et enfants directs

Il ne faut pas confondre :

```css
.navigation a
```

et :

```css
.navigation > a
```

Le premier est un sélecteur descendant : il cible les éléments `a` situés dans `.navigation`, même s'ils sont profondément imbriqués.

Le second cible uniquement les éléments `a` qui sont des enfants directs de `.navigation`.

## 4. Positionnement

### `static`

Comportement normal et valeur par défaut.

### `relative`

L'élément reste dans le flux et peut être décalé par rapport à sa position normale. L'espace qu'il occupait reste réservé.

### `absolute`

L'élément est retiré du flux et positionné par rapport à son ancêtre positionné le plus proche.

Exemple :

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

### `fixed`

L'élément est positionné par rapport au viewport et reste à cette position pendant le défilement.

### `sticky`

L'élément se comporte normalement dans le flux puis peut rester « collé » lors du défilement.

Pour obtenir un effet sticky perceptible, il faut généralement définir une position comme :

```css
position: sticky;
top: 0;
```

`sticky` reste cependant soumis aux limites de son conteneur.

## 5. `display`

`display` définit principalement la manière dont un élément participe à la mise en page.

Quelques valeurs importantes :

- `block`
- `inline`
- `inline-block`
- `flex`
- `grid`
- `none`

`flex` et `grid` créent respectivement un contexte Flexbox et Grid pour les enfants directs.

## 6. Grid

Grid permet d'organiser une mise en page en deux dimensions : lignes et colonnes.

Dans le mini-projet, j'ai utilisé :

```css
.container {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

Cette combinaison permet aux cartes de s'organiser automatiquement selon l'espace disponible.

### Point important

Une grille qui organise des cartes reste une responsabilité de layout. La carte elle-même reste un component.

## 7. Architecture CSS

J'ai appris qu'une architecture CSS ne consiste pas simplement à créer plusieurs dossiers. Chaque couche doit avoir une responsabilité.

| Couche | Responsabilité |
| --- | --- |
| `base/` | Fondations globales |
| `layout/` | Organisation et structure de la page |
| `components/` | Éléments réutilisables |
| `utilities/` | Petites classes utilitaires |
| `pages/` | Particularités propres à une page |

### Exemples rencontrés dans le mini-projet

| Fichier | Couche |
| --- | --- |
| `reset.css` | base |
| `typography.css` | base |
| `containers.css` | layout |
| `header.css` | layout |
| `navigation.css` | layout |
| `cards.css` | component |
| `buttons.css` | component |
| `forms.css` | component |
| `utilities.css` | utility |
| `home.css` | styles spécifiques à la page d'accueil |

### Distinction importante

Un élément réutilisable n'est pas forcément un component.

- `.container` est réutilisable, mais concerne le layout ;
- `.card` est un component ;
- `.text-center` est une utility.

## 8. Variables CSS

Les variables CSS permettent de centraliser des valeurs réutilisées.

Exemple :

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

Dans des projets plus importants, les variables peuvent être regroupées dans une couche dédiée comme `theme/` ou `tokens/`.

## 9. Ce que j'ai appris avec le mini-projet

Le mini-projet m'a permis de comprendre que l'organisation du CSS dépend surtout de la responsabilité des règles, et pas simplement du nom de l'élément HTML concerné.

J'ai notamment dû réfléchir à la différence entre :

- une règle de base ;
- une règle de layout ;
- un component ;
- une utility ;
- un style spécifique à une page.

Le classement d'une règle dépend donc principalement de ce qu'elle fait.

## 10. Erreurs et corrections importantes

### Considérer `margin` comme faisant partie de `border-box`

```text
border-box = content + padding + border
margin = extérieur
```

### Confondre cascade et héritage

```text
cascade  → choix entre plusieurs déclarations
héritage → transmission de certaines propriétés du parent
```

### Considérer `.navigation a` comme un enfant direct

```text
.navigation a   → descendant
.navigation > a → enfant direct
```

### Classer automatiquement une grille avec les cards

```text
grille qui organise les éléments → layout
card elle-même                  → component
```