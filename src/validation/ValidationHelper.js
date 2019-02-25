
export const validationHandler = (res, next) => result => {

    // console.log (result);

    // if (result.isEmpty()) { next() }
    
    if (!next) {

        const response_msg = result.array()
            .map(i => `${i.param} ${i.msg}`)
            .join(' '); 

        res.json({
            response_code: 422,
            response_msg: response_msg
        });
    }
}