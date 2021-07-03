export enum EHorizontal {
  left = 'flex-start',
  right = 'flex-end'
}

export enum EVertical {
  bottom = 'flex-end',
  center = 'center',
  top = 'flex-start'
}

export type TAlignment = {
  horizontal: 'left' | 'right';
  vertical: 'bottom' | 'center' | 'top';
};
