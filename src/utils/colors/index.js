import {backdrop} from './backdrop';
import {border} from './border';
import {card} from './card';
import {mainColors} from './color';
import {message} from './message';
import {text} from './text';

export const colors = {
  ...mainColors,
  primary: mainColors?.blue1,
  secondary: mainColors?.blue2,
  submit: mainColors.green1,
  tertiary: mainColors.grey1,
  light: mainColors.blue1,
  dark: mainColors?.blue2,
  danger: mainColors.red5,
  text: text,
  backdrop: backdrop,
  card: card,
  border: border,
  message: message,
};
