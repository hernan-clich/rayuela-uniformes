export enum EFontSizes {
  big = 'clamp(1.5rem, 2.8vw, 14rem)',
  small = 'clamp(0.9rem, 1.1vw, 5rem)'
}

export enum EFontWeights {
  regular = 400,
  bold = 700,
  black = 900
}

export enum ETextAlign {
  center = 'center',
  left = 'left',
  right = 'right'
}

export enum ETextTransform {
  capitalize = 'capitalize',
  lowercase = 'lowercase',
  none = 'none',
  uppercase = 'uppercase'
}

export enum EFontColors {
  primary = 'primary',
  secondary = 'secondary'
}

export type TFontColors = keyof typeof EFontColors;
