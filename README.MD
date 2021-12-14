# INFO A TENER EN CUENTA

## HTML

### IMPORTANCIA DE LOS TAGS

Esencialmente nosotros como programadores podemos usar cualquier tag que queramos y hacer que la pagina tenga una correcta funcionalidad. Sin embargo la separación utilizando los correctos tags nos permiten a nosotros poder distinguir con mayor facilidad que queremos desarrollar en cada sección de la pagina, sin crear un ambiente ultra ambiguo para nosotros, el navegador y las partes relacionadas. Con una buena implementación de los mismos una pagina puede ser entendida de una mejor manera y por eso es importante tener en cuenta la gran variedad de separadores que poseemos.

### METADATA

Las etiquetas meta o meta tags encabezan un documento HTML y suministran información codificada a navegadores y motores de búsqueda sobre una página web. Los metadatos son invisibles para el usuario y se encargan de añadir información para facilitar el análisis de los archivos HTML y la gestión del contenido de una página web. Los meta tags de HTML siguen a menudo la misma construcción: en primer lugar se define un elemento y en segundo lugar se asigna un contenido. De esto resulta el siguiente esquema:

Hace un tiempo, los metadatos eran de gran importancia para el SEO, ahora su influencia en el posicionamiento en los buscadores más conocidos ha disminuido. Sin embargo, los meta tags siguen siendo relevantes para metabuscadores y archivos de búsqueda locales, por lo que no está de más contar con una detallada lista de los mismos. Además, permiten definir indicaciones para guiar a los bots (crawlers) de los motores de búsqueda.

La lista de todos los elementos que se pueden incluir en el encabezado de un archivo HTML es larga. Junto a datos esenciales como el título y la descripción de la página o la definición de la fuente usada para el texto, el header de los archivos HTML puede abarcar información útil para los agentes de usuario. Así, es posible delimitar palabras clave relevantes o definir un tema para la página. Incluso se puede hacer referencia al autor o editor de los contenidos e indicar el copyright. Aunque estos datos no siempre son relevantes para la interacción con navegadores y motores de búsqueda, los meta tags dirigen su comportamiento impidiendo, por ejemplo, la indexación de un archivo HTML o el rastreo de los enlaces de una página. En la siguiente selección aclaramos las etiquetas meta más importantes y su utilidad para la administración de páginas web.

### DIV vs SECTION vs ARTICLE

Los tres cumplen la misma función ya que todos están pensados para dividir en moduloso mas pequeños y manejables para nosotros.

Todos se utilizan para facilitar la implementación de nuestro código css en el, por lo cual no hay diferencia entre ellos, porque el contenido no lo definen ellos propiamente dicho.

En general div es utilizado cuando el contenido no esta relacionado entre si, es decir si tenemos que definir en alguna parte de nuestra pagina dos bloques diferentes con sus estilos y la información, de cada uno es variada y no relacionada. En el caso que la información sea sobre el mismo tema y pueda considerarse completamente autónoma se utiliza article. Y en cualquier otro caso utilizamos section.

En esencia podríamos decir que article es mas especifico que section y section es mas especifico que div.

### LINKS RECOMENDADOS

1. [Explicación sobre la semántica de html (ingles)](https://seekbrevity.com/semantic-markup-important-web-design/)
2. [Lista de tags (ingles)](https://www.w3schools.com/TAGS/default.ASP)
3. [Meta tags mas importantes](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/los-meta-tags-mas-importantes-y-su-funcion/)
4. [Div, section o article (ingles)](https://bitsofco.de/sectioning-content-in-html5/)
5. [input-type-button-vs-button](https://es.stackoverflow.com/questions/79603/input-type-button-vs-button-en-html)

## CSS

### PRIORIDAD(especificidad) Y SELECTORES

La especificidad es un peso (importancia o valor) que se le asigna a una declaración CSS dada, determinada por el número correspondiente de cada tipo de selector. Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento la última declaración encontrada en el CSS.

La especificidad solo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones. Según las reglas de CSS, en caso de que un elemento sea objeto de una declaración directa, esta siempre tendrá preferencia sobre las reglas heredadas de su ancestro.

Dentro de los selectores tenemos por tipo, pseudo elements, clases, atributos, pseudo clases y ids. además de que se pueden considerar en esta parte también los atributos stryle en el código html y el important! (se recomienda no utilizar).

Recordar usar la tabla para ver cual selector se aplica y recordar que cuando se tiene la misma importancia se aplica el ultimo cambio:

[![calcular prioridad](https://github.com/diegomaranges/AcamicaM1/raw/master/imagenes/priority.jpg)](https://github.com/diegomaranges/AcamicaM1/blob/master/imagenes/priority.jpg)

### FUENTES(TIPOGRAFIA)

Las tipografías (*también denominadas fuentes*) son una parte muy importante del mundo de CSS. De hecho, son uno de los pilares del diseño web. La elección de una **tipografía adecuada**, su tamaño, color, espacio entre letras, interlineado y otras características pueden variar mucho, de forma consciente o inconsciente, la percepción en la que una persona interpreta o accede a los contenidos de una página.

### POSITION, DISPLAY Y FLOAT

La principal diferencia entre estos es que *position* determina la posición y la relación que va a tener con los demás elementos. Mientras que *display* va a representar como se va a mostrar este elemento (si vamos a tener un bloque, una grilla, etc). Y finalmente *float* posee 3 valores posibles únicamente, **none**, **rigth** y **left**, es decir que nos permite manejar con mucha facilidad una sección de la pagina con a lo sumo dos elementos colocando uno a la derecha y uno a la izquierda y el valor por defecto es none.

Yo generalmente utilizo y recomiendo usar position y display. Dentro de position podemos superponer elementos y mover elementos para ponerlos mas cerca o lejos de los contiguos al mismo, y con display podemos darle una forma a estos elementos. Pero todo va a depender de como le sea mas cómodo al programador en ese momento y obviamente como sean los requerimientos del mismo.

### FLEX + GRID

La diferencia básica entre Grid y Flexbox Layout es que Flexbox se creó para diseños de una dimensión, en una fila o una columna. En cambio CSS Grid Layout se pensó para el diseño bidimensional, en varias filas y columnas al mismo tiempo.

### ANIMATION

### GENERATORS

1. [Font](https://html-css-js.com/css/generator/font/)
2. [Flexbox](https://loading.io/flexbox/)
3. [Grid](https://cssgrid-generator.netlify.app/)
4. [Polígonos](https://bennettfeely.com/clippy/)
5. [Buttons](https://www.bestcssbuttongenerator.com/)
6. [Box shadow](https://html-css-js.com/css/generator/box-shadow/)
7. [Animations](https://animista.net/)
8. [Css3](http://css3generator.com/)
9. [generador general](https://cssgenerator.org/)

### RESPONSIVE

### TIPS

### LINKS RECOMENDADOS

1. [Información general de todo en W3School - recomendado](https://www.w3schools.com/css/default.asp)
2. [Selectores muy buenos y bien explicados](https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
3. [Teoría de selectores (ingles)](https://www.freecodecamp.org/news/css-selectors-cheat-sheet/)
4. [Especificidad (ingles)](https://developer.mozilla.org/es/docs/Web/CSS/Especificidad)
5. [Tipografías](https://lenguajecss.com/css/fuentes-y-tipografias/tipografias/)
6. [CSS Position, Display y Float (ingles)](https://medium.com/@mautayro/understanding-css-position-display-float-87f9727334b2)
7. [Google fonts (ingles)](https://fonts.google.com/)
8. [Fuentes Responsive](https://marabelia.com/css-font-size-responsive/)
9. [Grid y flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout/Relacion_de_Grid_Layout)
10. [Hermoso y muy completo articulo de flexbox y grid (Grid for layout, Flexbox for components)(ingles)](https://ishadeed.com/article/grid-layout-flexbox-components/)
11. [Introducción a la unidad Fr - Grid (ingles)](https://css-tricks.com/introduction-fr-css-unit/)
12. [Definición de layouts y componentes](https://stackoverflow.com/questions/44309390/whats-exactly-the-purpose-of-components-layouts-and-pages-folders-in-a-meteor)
13. [Documentación de Bootstrap (ingles)](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
14. [Bootstrap tutorial completo (ingles)](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/)
15. [Bootswatch, formas de cambiar la base de colores y fuentes de bootstrap](https://bootswatch.com/)
16. [Guía de Sass y Scss oficial](https://sass-lang.com/guide)
17. [Sass vs Less vs Scss](https://marksheet.io/sass-scss-less.html)

### Temas extras

1. [Cascada vs Metodologías Agiles](https://codetiburon.com/agile-or-waterfall-choose-the-right-approach-to-your-software-project/)
2. [Paginas web y Sitios web (ingles)](https://www.websiteplanet.com/blog/website-vs-webpage-difference/)

### Mas tutoriales e info

1. [BettaTech](https://www.youtube.com/c/BettaTech/featured)
2. [FalconMaster](https://www.youtube.com/channel/UCJl1YajcPWTeJNsQhGyMIMg)

Links vistos en los encuentros:

> https://www.hackerrank.com/domains/algorithms
> https://bootswatch.com/morph/
> https://codeofaninja.com/2012/11/javascript-array-crud-example.html
> https://codeofaninja.com/2012/11/javascript-array-crud-example.html
> http://editorial.unrn.edu.ar/media/data/lecturas/problemas_algoritmos_eunrn.pdf
> https://www.techiedelight.com/data-structures-and-algorithms-problems/
> https://medium.com/techie-delight/500-data-structures-and-algorithms-practice-problems-35afe8a1e222
> https://dev.to/rahmanfadhil/how-to-crud-an-array-in-javascript-5bko
> https://es.godaddy.com/blog/diferencia-entre-http-y-https/
> https://www.youtube.com/watch?v=A79kP_Zjnio
> https://www.youtube.com/watch?v=LZJNj-HHfII
> https://blog.hubspot.com/hs-fs/hubfs/Parts%20of%20a%20URL.png?width=650&name=Parts%20of%20a%20URL.png
> https://doc.oroinc.com/api/http-methods/
> https://www.todojs.com/objetos-map-set/
> https://www.coderbyte.com/challenges
> https://www.hackerrank.com/domains/algorithms
> https://moderncss.dev/pure-css-custom-styled-radio-buttons/
> https://css-tricks.com/fighting-the-space-between-inline-block-elements/
> https://bulma.io/documentation/elements/button/
> https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15
> https://umbraco.com/knowledge-base/http-status-codes/