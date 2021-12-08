import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import {
    collection,
    addDoc,
    getDoc,
    doc,
    Timestamp,
    writeBatch,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,

    authDomain: process.env.REACT_APP_authDomain,

    projectId: process.env.REACT_APP_projectId,

    storageBucket: process.env.REACT_APP_storageBucket,

    messagingSenderId: process.env.REACT_APP_messagingSenderId,

    appId: process.env.REACT_APP_appId

};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const getFirebase = () => { return app };

export { getFirestore };


export const newOrder = (order, setId) => {

    return new Promise((resolve, reject) => {
        order = {
            ...order,
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const outOfStock = []

        order.items.forEach((prod, i) => {
            getDoc(doc(db, 'Productos', prod.id)).then(DocumentSnapshot => {
                if (DocumentSnapshot.data().stock >= order.items[i].cantidad) {
                    batch.update(doc(db, 'Productos', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - order.items[i].cantidad
                    })
                } else {
                    outOfStock.push({ ...DocumentSnapshot.data(), id: DocumentSnapshot.id })
                }
            })
        })

        if (outOfStock.length === 0) {
            addDoc(collection(db, 'Orders'), order).then(({ id }) => {
                setId(id)
                batch.commit().then(() => {
                    resolve("Compra exitosa!")
                })
            }).catch((error) => {
                reject("Algo salio mal, intente de nuevo.", error)
            })
        }
    })
}