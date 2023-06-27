import { IOptions } from '../interfaces/option.interface';
/**
 *
 * @param data
 * @returns
 */
export declare class Json2CSV {
    /**
     *
     * @param data
     * @param flatten
     * @returns
     */
    static convert(data: any[], options?: IOptions): string | undefined;
    private keyGenerator;
    /**
     *
     * @param ob
     * @returns
     */
    static flattenObject(ob: any): any;
}
export declare class CSV2Json {
    static convert(csv: string, options?: IOptions): any[];
}
