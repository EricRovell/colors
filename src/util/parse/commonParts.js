export default {
  /**
   * Group for getting opacity value
   * Possible match:
   *   - Decimal with 2 trailing digits: 0.35;
   *   - Decimal with 2 trailing digits w/o zero: .35;
   *   - Integers: 0 and 1;
   *   - Percentages in range [0, 100] with % symbol: 35%.
   * ! Percent values captured with % symbol
   */
  opacity: /(?: (?<opacity>0\.\d{1,2}|[1-9]\d?(?!\d)|100|0|1)?%?)?/,

  /**
   * Groups for capturing integer values in range defined range
   */
  range0to100: groupName => new RegExp(`(?<${groupName}>0|100|\\d{1,2})`),
  range0to255: groupName => new RegExp(`(?<${groupName}>[01]?\\d\\d?|2[0-4]\\d|25[0-5])`),  
  range0to360: groupName => new RegExp(`(?<${groupName}>0|360|35\\d|3[0-4]\\d|[12]\\d\\d|0?\\d?\\d)`),

  percentage: groupName => new RegExp(`(?<${groupName}>0|100|\\d{1,2})(?:%)?`),

  /**
   * Hexadecimal characters
   */
  hex: groupName => new RegExp(`(?<${groupName}>[a-fA-F0-9])`),
  hex2: groupName => new RegExp(`(?<${groupName}>[a-fA-F0-9]{2})`),

  separator: /[\s\/]+/,
}
