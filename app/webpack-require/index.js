export const requireImage = (f) => '/dist/' + require.context('../../images', true)('./' + f);
