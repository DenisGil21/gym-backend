import { sign } from "jsonwebtoken";


const generarJWT = (id: number) => {

    return new Promise((resolve, reject) => {

        const payload = { id };
        console.log(process.env.SECRETORPRIVATEKEY);

        sign(payload, (process.env.SECRETORPRIVATEKEY || ''), {
            expiresIn: '4h'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })

    })
}




export default generarJWT;
