# Design Tokens

## Design token types
- Global tokens are the primitive values.  
  `blue-700`
- Alias tokens relates to specific context.  
`cta-bg-color`
- Component-specific tokens relates to a component.  
`button-cta-background-color`

To avoid things like "the grey border is the color-grey-30 or color-gray-40?" or "the primary color is the color-primary-50 or the color-primary-60?" I'm using

value-variable-context-component

## How to create semantic tokens
- NO 'color-gray' — YES 'neutral'
- NO 'color-red' — YES 'color-danger'


### Properties
1. border
1. surface
1. text
1. icon

### Emphasis
1. default
1. high-emphasis
1. low-emphasis

### States
1. default
1. hover
1. disabled
1. inverse

### Levels

2 level naming:

CATEGORY – CONCEPT
$color-action

3-level naming:

CATEGORY – COMPONENT – VARIANT
$background-button-primary

4-level naming:

CATEGORY – COMPONENT – VARIANT – STATE
$background-button-primary-hover

5-level naming:

SYSTEM – CATEGORY – COMPONENT – VARIANT – STATE
$cat-background-button-primary-hover

## Examples
- neutral-border-interactive-hover
- neutral-text-high-emphasis
- surface
- surface-high-emphasis
- surface-low-emphasis
- border
- border-hover
- text-high-emphasis
- text-low-emphasis
- text-disabled
- icon-high-emphasis
- icon-low-emphasis


## Links
- [Como implementamos Tokens Semânticos no Tangram](https://medium.com/design-rd/como-implementamos-tokens-sem%C3%A2nticos-no-tangram-bbf64ae24dc4)
- [Design Tokens 101](https://designstrategy.guide/design-system/design-tokens-101/)
- [Design Tokens Community Group](https://github.com/design-tokens/community-group) - DTCG repository for the design tokens specification
