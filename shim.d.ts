import { MemoizedFunction } from 'lodash';
export declare type shimElement = string | null;
export declare type shimEntry = [string, shimElement, shimElement];
/**
 * Method to get the shimmed icon name arrays in font-awesome 5
 * @param {String} nameV4 icon name in v4
 * @returns {Array} [ type, prefixed name ]
 */
declare const getShimFaName: ((nameV4: string) => string[]) & MemoizedFunction;
export declare type MemoizedFunction = MemoizedFunction;
export default getShimFaName;
