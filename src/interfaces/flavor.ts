import {
    ArrayOptions,
    BooleanOptions,
    DateOptions,
    DateStringOptions,
    EnumOptions,
    IntegerOptions,
    NestedOptions,
    NumberOptions,
    StringOptions,
    UUIDOptions,
} from './options';

/* A collection of decorator recipes using a specific options type.
 */
export interface Flavor<Options> {
    // NB: IsArray has mandatory options
    IsArray: (options: Options & ArrayOptions) => PropertyDecorator,
    IsBoolean: (options?: Options & BooleanOptions) => PropertyDecorator,
    IsDate: (options?: Options & DateOptions) => PropertyDecorator,
    IsDateString: (options?: Options & DateStringOptions) => PropertyDecorator,
    // NB: IsEnum has mandatory options
    IsEnum: (options: Options & EnumOptions) => PropertyDecorator,
    IsInteger: (options?: Options & IntegerOptions) => PropertyDecorator,
    // NB: IsNested has mandatory options
    IsNested: (options: Options & NestedOptions) => PropertyDecorator;
    IsNumber: (options?: Options & NumberOptions) => PropertyDecorator,
    IsString: (options?: Options & StringOptions) => PropertyDecorator,
    IsUUID: (options?: Options & UUIDOptions) => PropertyDecorator,
}
