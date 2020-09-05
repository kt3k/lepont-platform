import { Registry } from 'lepont'
import { TYPE_OS, TYPE_SELECT, TYPE_VERSION, TYPE_CONSTANTS, PayloadSelect } from './shared'

type PlatformModule = {
  OS: string
  select: (x: any) => any
  Version: string
  constants: any
}

export const PlatformBridge = (Platform: PlatformModule) => (
  registry: Registry
) => {
  registry.register(TYPE_OS, () => Platform.OS)
  registry.register(TYPE_SELECT, ({ map }: PayloadSelect) =>
    Platform.select(map)
  )
  registry.register(TYPE_VERSION, () => Platform.Version)
  registry.register(TYPE_CONSTANTS, () => Platform.constants)
}
