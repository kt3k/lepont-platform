import { sendMessage } from 'lepont/browser'
import {
  TYPE_OS,
  TYPE_SELECT,
  TYPE_VERSION,
  PayloadSelect,
  PlatformType,
} from './shared'

type OSType = 'ios' | 'android' | 'web'

/**
 * Gets the OS string.
 */
export function getOS(): Promise<OSType> {
  return sendMessage<OSType, void>({
    type: TYPE_OS,
    payload: undefined,
  })
}

/**
 * Selects the value from the given source object.
 * @param source
 */
export async function select<A, I, W, N, D>(source: {
  android?: A
  ios?: I
  native?: N
  web?: W
  default?: D
}): Promise<A | I | N | W | D> {
  const p = await sendMessage<PlatformType, PayloadSelect>({
    type: TYPE_SELECT,
    payload: {
      map: {
        android: 'android',
        ios: 'ios',
        native: 'native',
        web: 'web',
        default: 'default',
      },
    },
  })
  return source[p]!
}

/**
 * Gets the platform vesion.
 */
export function getVersion(): Promise<string> {
  return sendMessage<string, void>({
    type: TYPE_VERSION,
    payload: undefined,
  })
}
