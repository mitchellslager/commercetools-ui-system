# Commercetools UI System

The Commercetools UI System is a set of React components which provides a quick setup for any Commercetools API based website.

## Installation

```bash
// with npm
npm install commercetools-ui-system

// with yarn
yarn add commercetools-ui-system
```

## Usage

Before using any of the components, you will need to have a basic Commercetools API setup.

Example of how to use the `<Filters />` component.

```jsx
import { Filters } from 'commercetools-ui-system';

const config = [
  {
    title: 'Designer',
    name: 'designer',
    options: options.designer,
    defaultExpanded: true,
  },
  {
    title: 'Colors',
    name: 'colors',
    options: options.colors,
    defaultExpanded: true,
  },
];

<Filters
  filterBlockConfigs={config}
  onRemoveFilter={() => console.log('remove filter')}
  onSetFilter={() => console.log('set filter')}
  onReset={() => console.log('reset all filters')}
  resetButtonLabel="Reset filters"
/>;
```

## Required peer dependencies

There are a few required peer dependencies to use this package:
`react`, `react-dom` and `
