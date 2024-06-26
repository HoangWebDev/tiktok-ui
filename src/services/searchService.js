import * as instance from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const result = await instance.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
