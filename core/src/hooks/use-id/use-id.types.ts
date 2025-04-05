export interface UseIdParams {
  /**
   * An optional custom id.
   * If provided, the hook will return this id as-is without generating a new one.
   */
  id?: string;

  /**
   * An optional prefix to prepend to the automatically generated id.
   * @default "rilix-ui-"
   */
  prefix?: string;
}
