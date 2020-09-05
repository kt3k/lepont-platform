export const TYPE_OS = '@lepont/platform/os'
export const TYPE_SELECT = '@lepont/platform/select'
export const TYPE_CONSTANTS = '@lepont/platform/constants'
export const TYPE_VERSION = '@lepont/platform/version'

export type PlatformType = 'ios' | 'android' | 'native' | 'web' | 'default'

export type PayloadSelect = {
  map: { [key in PlatformType]: PlatformType }
}
