import { IsDefined, IsOptional } from 'class-validator';

import { Constructor, HasInputDecorators, HasOptions } from '../interfaces';

export interface ValidatorOptions {
    optional?: boolean;
}

type BaseBuilder = HasInputDecorators & HasOptions<ValidatorOptions>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function withValidator<B extends Constructor<BaseBuilder>>(Base: B) {
    return class ValidatorMixin extends Base {

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args: any[]) {
            super(...args);

            if (this.options.optional) {
                this.optional();
            } else {
                this.required();
            }
        }

        /* Mark property as optional.
         */
        public optional(): this {
            this.add(IsOptional());
            return this;
        }

        /* Mark property as required.
         */
        public required(): this {
            this.add(IsDefined());
            return this;
        }
    };
}