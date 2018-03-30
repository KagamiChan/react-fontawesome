# react-fontawesome

Wrapper for official component, with unofficial component compat.

Currently in beta stage.

Since Font-awesome v5 has divided icons into different sets, and renamed many icons, usages with [`react-fontawesome`](https://github.com/danawoodman/react-fontawesome) package could not be updated to [`official component`](https://github.com/FortAwesome/react-fontawesome) in a simple find-and-replace way. This package is created to ease the migration, wrapping the official component and automatically shimming v4 icon name.

## Installation
```shell
yarn add @skagami/react-fontawesome
```
or
```shell
npm install @skagami/react-fontawesome
```

Note that you should also install `@fortawesome/react-svg-core` and `@fortawesome/react-fontawesome`. Due to the API change in FontAwesome 5.1, you should install the version that satisfy the peer dependencies. It seems the official package keeps changing with every pre-release, please report any incompat you meet.

## Usage
### Replacement
with this package you could simply make a replacement:

```diff
- import FA from 'react-fontawesome'
+ import FA from '@skagami/react-fontawesome'
```

### Shim
besides, this package provides a shim method based on official `v4-shim.js`:

```js
import shim from '@skagami/react-fontawesome/shim'

shim('google-plus') // returns ['fab', 'google-plus-o']
```

### Injection
An inject method for react-fontawesome is available so that you don't even need to do the replacement:

```js
import '@skagami/react-fontawesome/inject'
```

__IMPORTANT__: same as official component, [you'll need to add the icons yourself](https://github.com/FortAwesome/react-fontawesome#usage).

## API
The API is designed to maximize the compat with unofficial `react-fontawesome` and provide more semantic usage for new v5 icons. __Currently only font-awesome@5's svg format icon is supported__.

### Semantic and compact API
You don't have to combine icon set and icon name in a array to fill in `icon` prop:
```diff
- <Icon icon={['fab', 'google-plus-o']} />
+ <Icon fab icon="google-plus-o" />
```
`fas|far|far|fab` and `fa`(for explicit v4 icon name usage) Boolean prop is supported.

and `name` prop is also supported:
```js
<Icon fab name="google-plus-o" />
```

### Icon version and name shimming
The icon version is detected by the following procedure:
- check `v5`. If truthy, it is a v5 icon
- check `tag`, although `tag` will not take effect. If truthy, it is a v4 icon
- check if `fas`, `far`, `fal` and `fab` is all falsy. If any of them is truthy, it is a v5 icon
- check if `icon` and `name` prop is `String`. If none of them is `String`, it is a v5 icon (and nothing will show up).
- check `icon`. If `icon` is truthy and it is not `String`, it is a v5 icon
- it should be a v4 icon

V4 icon names will be shimmed to v5's

on `mask` prop, if the icon is believe to be v4, and `mask` is `String`, then the mask icon name will also be shimmed
