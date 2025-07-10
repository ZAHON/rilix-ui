export interface ClampParams {
  /**
   * The number to be clamped.
   * This is the value you want to ensure stays within a specific range.
   */
  value: number;

  /**
   * The lower bound of the clamping range.
   * The `value` will not be less than this.
   */
  min: number;

  /**
   * The upper bound of the clamping range.
   * The `value` will not be greater than this.
   */
  max: number;
}
