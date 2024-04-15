import type { ButtonVariants } from './index.css';

export type ButtonElement = React.ElementRef<'button'>;
export type ButtonProps = {
  loading?: boolean;
  loadingText?: string;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> &
  ButtonVariants;
