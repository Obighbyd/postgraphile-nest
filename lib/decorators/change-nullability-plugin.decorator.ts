import { SetMetadata } from '@nestjs/common';
import { PLUGIN_TYPE_METADATA } from '../postgraphile.constants';
import { PluginType } from '../enums/plugin-type.enum';

export function ChangeNullabilityPlugin() {
  return (
    // tslint:disable-next-line:ban-types
    target: object | Function,
    key?: string | symbol,
    descriptor?: any,
  ) => {
    SetMetadata(PLUGIN_TYPE_METADATA, PluginType.CHANGE_NULLABILITY)(
      target,
      key,
      descriptor,
    );
  };
}
