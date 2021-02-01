import theme from './theme';

export const [
  md,
  lg,
  xl,
] = theme.breakpoints;

const media = {
  md: `min-width: ${md}px`,
  lg: `min-width: ${lg}px`,
  xl: `min-width: ${xl}px`,
};

export default media;