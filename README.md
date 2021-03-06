# @lepont/platform v0.1.4

![ci](https://github.com/kt3k/lepont-platform/workflows/ci/badge.svg)

> [lepont][] bridge for React Native's [Platform](https://reactnative.dev/docs/platform-specific-code) utility

# Install

```
npm i --save lepont @lepont/platform
```

# Usage

On React Native side:

```tsx
import React from 'react'
import { Platform } from 'react-native'
import { WebView } from 'react-native-webview'
import { useBridge } from 'lepont'
import { PlatformBridge } from '@lepont/platform'

const App = () => {
  const [ref, onMessage] = useBridge(
    PlatformBridge(Platform)
  )
  return (
    <WebView
      ref={ref}
      onMessage={onMesssage}
      javaScriptEnabled
    />
  )
}
```

On the browser side:

```ts
import { getOS, select, getVersion } from '@lepont/platform'

await getOS() // => 'ios' or 'android'

await select({
  android: 'foo',
  ios: 'bar'
})
// => 'foo' on Android, 'bar' on iOS

await getVersion() // => 0.63.0 for example
```

# APIs

```
import { select, getOS, getVerion, getConstants } from '@lepont/platform'
```

## `select<A | I | N | W | D>(obj: { android?: A, ios?: I, native?: N, web?: W, default?: D }): Promise<A | I | N | W | D>`

Selects the value according to the platform.

See the example above.

## `getOS(obj): Promise<string>`

Gets the OS string, such as 'ios', 'android', etc.

## `getVersion(): Promise<string | number>`

Gets the OS version.

# License

MIT

[lepont]: https://github.com/kt3k/lepont
