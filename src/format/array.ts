export const ArrayUtils = {
  /**
   * Unique an Array
   *
   * @category Array
   */
  unique<T>(array: readonly T[]): T[] {
    return [...new Set(array)]
  },
}
