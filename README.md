# CSS-Internals

This branch will be focused on how CSS works, and basic information of good-code conventions.

## Fundamental Principles of Writing Good HTML and CSS

| Responsive Design              | Maintainable and Scalable Code | Web Performance                    |
|--------------------------------|--------------------------------|------------------------------------|
| Fluid layouts                  | Clean                          | Less HTTP requests                 |
| Media queries                  | Easy to understand             | Less code                          |
| Responsive images              | Growth                         | Compress code                      |
| Correct units                  | Reusable                       | Use a CSS preprocessor (Like Sass) |
| Desktop-first vs. mobile-first | How to organize files          | Less images                        |
|                                | How to name classes            | Compress images                    |
|                                | How to structure HTML          |                                    |

## How CSS Works Behind the Scenes

```css
.selector {
    property: declared-value;
}

```

### What is Cascade?

Cascade is the process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.

![how html parsed](./slides-page.jpg)

### The Visual Formatting Model

The algorithm that calculates boxes and determines the layout of these boxes, for each element in the render tree, in order to determine the final layout of the page.

#### 1. The Box Model

- **Content:** text, images, etc.

- **Padding:** transparent area around the content, inside of the box.

- **Border:** goes around the padding and the content.

- **Margin:** space between boxes.

- **Fill Area:** area that gets filled with background color or background image.

**Total Width:** `right border + right padding + specified width + left padding + left border`.

**Total Height:** `top border + top padding + specified height + bottom padding + bottom border`.

#### 2. Box Types

How different box-types determine how boxes are laid out on a page.

1. Block-level Boxes
    - elements formatted visually as blocks
    - 100% of parent's width
    - vertically, one after the other
    - box-model applies as showed:
  
        ```css
        display: block;
        ```

        also,

        ```css
        (display: flex)
        (display: table)
        (display: list-item)
        ```

        produce block-level boxes.

2. Inline Boxes
    - content is distributed in lines
    - occupies only content's space
    - no line-breaks
    - no height and widths
    - paddings and margins are only applied by horizontal axis

        ```css
        display: inline;        
        ```

3. Inline-block Boxes
    - a mix of block and inline
    - occupies only content's space
    - no line-breaks
    - box model applies as showed

        ```css
        display: inline-block;
        ```

#### 3. Positioning Schemes

Simply, there are three of positioning schemes: `normal flow`, `floats`, `absolute positioning`.

| Normal Flow                                       | Floats                                                        | Absolute Positioning                                                                                      |
|---------------------------------------------------|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Default positioning scheme                        | Element is removed from the normal flow                       | Element is removed from the normal flow                                                                   |
| Not floated                                       | Text and inline elements will wrap around the floated element | No impact on surrounding content or elements                                                              |
| Not absolutely positioned                         | The container will not adjust its height to the element       | We use `top`, `bottom`, `left` and `right` to offset the element from its relatively positioned container |
| Elements laid out according to their source order | `float: left`                                                 | `position: absolute`                                                                                      |
| `position: relative`                              | `float: right`                                                | `position: fixed`                                                                                         |

#### 4. Stacking Context (Z-index)

The one with the higher index appears on top and lower index appears on bottom.
