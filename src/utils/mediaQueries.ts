export const sizes = {
  mobile: '300px',
  tabletVertical: '795px',
  tabletHorizontal: '900px',
  desktop: '1250px',
  bigScreen: '1650px',
};

const mediaQueries = {
  mobile: `(min-width: ${sizes.mobile}) and (max-width: ${sizes.tabletVertical})`,
  tabletVertical: `(min-width: ${sizes.tabletVertical} and (max-width: ${sizes.tabletHorizontal})`,
  tabletHorizontal: `(min-width: ${sizes.tabletHorizontal} and (max-width: ${sizes.tabletHorizontal})`,
  desktop: `(min-width: ${sizes.tabletHorizontal})`,
  bigScreen: `(min-width: ${sizes.bigScreen})`,
};

export default mediaQueries;
