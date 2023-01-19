//actions

export const addINC = () => ({ type: 'INC', payload: 'valueINC' });
export const addDEC = () => ({ type: 'DEC', payload: 'valueDEC' });
export const clickRND = (rundomValue) => ({ type: 'RND', payload: rundomValue });