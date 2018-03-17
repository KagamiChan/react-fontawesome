# react-fontawesome

Wrapper for official component, with unofficial component compat.

Currently not production ready, please check later.

Since Font-awesome v5 has divided icons into different sets, and renamed many icons, usages with [`react-fontawesome`](https://github.com/danawoodman/react-fontawesome) package could not be updated to [`official component`](https://github.com/FortAwesome/react-fontawesome) in a simple find-and-replace way. This package is created to ease the migration, wrapping the official component and automatically shimming v4 icon name. So with this package you could simply make a replacement:

```diff
- import FA from 'react-fontawesome'
+ import FA from '@skagami/react-fontawesome'
```

besides, this package provides a shim method based on official `v4-shim.js`:

```js
import shim from '@skagami/react-fontawesome/shim'

shim('google-plus') // returns ['fab', 'google-plus-o']
```

and an inject method for react-fontawesome so that you don't even need to do the replacement:

```js
import '@skagami/react-fontawesome/inject'
```

__IMPORTANT__: same as official component, [you'll need to add the icons yourself](https://github.com/FortAwesome/react-fontawesome#usage).

## API
The API is designed to maximize the compat with unofficial `react-fontawesome` and provide more semantic usage for new v5 icons.
