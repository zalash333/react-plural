# react-plural

> react plural functon for declensions based on numbers

[![NPM](https://img.shields.io/npm/v/react-plural.svg)](https://www.npmjs.com/package/react-plural) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-plural
```

## Usage

```tsx
import { plural } from 'react-plural'

...
plural(1, 'one', 'two', 'five');
//=> one
plural(2, 'one', 'two', 'five');
//=> two
plural(5, 'one', 'two', 'five');
//=> five
plural(31, 'день', 'дня', 'дней');
//=> день
plural(22, 'день', 'дня', 'дней');
//=> дня
plural(15, 'день', 'дня', 'дней');
//=> дней
plural(1, 'day', 'days', 'days');
//=> day
plural(2, 'day', 'days', 'days');
//=> days
plural(5, 'day', 'days', 'days');
//=> days
...
```

## License

MIT © [zalash333](https://github.com/zalash333)
