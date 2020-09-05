import { Registry } from 'lepont'
import { TYPE_OS, TYPE_SELECT, TYPE_VERSION, PayloadSelect } from './shared'

type PlatformModule = {
  OS: string
  select: (x: any) => any
  Version: string | number
}

export const PlatformBridge = (Platform: PlatformModule) => (
  registry: Registry
) => {
  registry.register(TYPE_OS, () => Platform.OS)
  registry.register(TYPE_SELECT, ({ map }: PayloadSelect) =>
    Platform.select(map)
  )
  registry.register(TYPE_VERSION, () => Platform.Version)
}
