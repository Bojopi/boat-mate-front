
import { boatApi } from '../api/axios.js'

export const Payment = () => {


    const pay = (data: any) => {
        boatApi
            .post('/pay', data)
            .then( res => {console.log(res)})
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    };

    return {
        pay
    }
};