export const requireImage = (f) => '/dist/' + require.context('../../images', true)('./' + f);
export const requireComponent = (f) => require.context('../components', true)('./' + f).default;
export const requireService = (f) => require.context('../services', true)('./' + f).default;
export const requireDirective = (f) => require.context('../directives', true)('./' + f).default;
