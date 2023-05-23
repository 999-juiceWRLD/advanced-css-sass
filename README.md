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
