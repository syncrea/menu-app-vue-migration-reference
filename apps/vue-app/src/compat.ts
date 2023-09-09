import { CompilerDeprecationTypes } from '@vue/compiler-core';
import { DeprecationTypes } from 'vue';

export type CompatConfigValue = boolean | 'suppress-warning';
export type ModeType = 2 | 3;
export type CompilerCompatConfig = Partial<
  Record<CompilerDeprecationTypes, CompatConfigValue>
> & {
  MODE?: ModeType;
};
export type RuntimeCompatConfig = Partial<
  Record<DeprecationTypes, CompatConfigValue>
> & {
  MODE?: ModeType;
};

export function overrideFlagsForProduction<
  ConfigType extends CompilerCompatConfig | RuntimeCompatConfig
>(config: ConfigType): ConfigType {
  if (process.env.NODE_ENV !== 'production') {
    return config;
  }

  // Return copy of config with all warnings suppressed
  return Object.keys(config).reduce((acc, key) => {
    if (key === 'MODE') {
      return acc;
    }

    if (config[key as keyof ConfigType] === true) {
      acc[key as keyof ConfigType] = 'suppress-warning' as any;
    } else {
      acc[key as keyof ConfigType] = config[key as keyof ConfigType];
    }
    return acc;
  }, {} as ConfigType);
}

export const applicationCompilerCompatConfig = (): CompilerCompatConfig => {
  return overrideFlagsForProduction({
    MODE: 2,
    COMPILER_FILTER: true,
    COMPILER_INLINE_TEMPLATE: true,
    COMPILER_IS_ON_ELEMENT: true,
    COMPILER_NATIVE_TEMPLATE: true,
    COMPILER_V_BIND_OBJECT_ORDER: true,
    COMPILER_V_BIND_PROP: true,
    COMPILER_V_BIND_SYNC: true,
    COMPILER_V_IF_V_FOR_PRECEDENCE: true,
    COMPILER_V_ON_NATIVE: true
  });
};

export const applicationRuntimeCompatConfig = (): RuntimeCompatConfig => {
  return overrideFlagsForProduction({
    MODE: 2,
    ATTR_ENUMERATED_COERCION: true,
    ATTR_FALSE_VALUE: true,
    COMPONENT_ASYNC: true,
    COMPONENT_FUNCTIONAL: true,
    COMPONENT_V_MODEL: true,
    GLOBAL_MOUNT: true,
    GLOBAL_EXTEND: true,
    CONFIG_DEVTOOLS: true,
    CONFIG_IGNORED_ELEMENTS: true,
    CONFIG_KEY_CODES: true,
    CONFIG_OPTION_MERGE_STRATS: true,
    CONFIG_PRODUCTION_TIP: true,
    CONFIG_SILENT: true,
    CONFIG_WHITESPACE: true,
    CUSTOM_DIR: true,
    FILTERS: true,
    GLOBAL_DELETE: true,
    GLOBAL_MOUNT_CONTAINER: true,
    GLOBAL_SET: true,
    GLOBAL_OBSERVABLE: true,
    GLOBAL_PROTOTYPE: true,
    GLOBAL_PRIVATE_UTIL: true,
    INSTANCE_ATTRS_CLASS_STYLE: true,
    INSTANCE_CHILDREN: true,
    INSTANCE_DELETE: true,
    INSTANCE_DESTROY: true,
    INSTANCE_EVENT_EMITTER: true,
    INSTANCE_EVENT_HOOKS: true,
    INSTANCE_LISTENERS: true,
    INSTANCE_SCOPED_SLOTS: true,
    INSTANCE_SET: true,
    OPTIONS_BEFORE_DESTROY: true,
    OPTIONS_DATA_FN: true,
    OPTIONS_DATA_MERGE: true,
    OPTIONS_DESTROYED: true,
    PRIVATE_APIS: true,
    PROPS_DEFAULT_THIS: true,
    RENDER_FUNCTION: true,
    TRANSITION_CLASSES: true,
    TRANSITION_GROUP_ROOT: true,
    V_ON_KEYCODE_MODIFIER: true,
    WATCH_ARRAY: true,
  });
};
