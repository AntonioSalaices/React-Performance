/**
 * Created on May 23 2023
 * @author Antonio Salaices M
 */

import { GifData } from "ApiData";

type GenericFunction<T> = (arg: T) => void;

const Formatter = {
  /**
   * @function getFormatedData
   * A function to create endpoint
   * @param {string} search
   */
  getFormatedData(data: GifData[] = []): Partial<GifData>[] {
    return data?.map((item) => ({
      id: item.id,
      url: item.images.fixed_height.url,
    }));
  },
  /**
   * @function debounce
   * A function to implemente debounce tecnique
   * @param {Function} callback
   * @param {number} timer
   */
  debounce(callback: GenericFunction<any>, time: number) {
    let timer;
    clearTimeout(timer);
    return (args) => {
      timer = setTimeout(() => {
        callback(args);
      }, time);
    };
  },
  /**
   * @function throttle
   * A function to implement throttle technique
   * @param {Function} callback
   * @param {number} timer
   */
  throttle(callback: GenericFunction<any>, delay: number) {
    let timeout;

    return (...args) => {
      if (timeout !== undefined) return;

      timeout = setTimeout(() => {
        timeout = undefined;
      }, delay);

      return callback(...args);
    };
  },
  /**
   * @function sizeToRange
   * A function to get the size by range
   * @param {number} size
   */
  sizeToRange(size: number) {
    if (size < 600) {
      return "small";
    } else if (size > 1200) {
      return "large";
    }
    return "medium";
  },
};

export default Formatter;
