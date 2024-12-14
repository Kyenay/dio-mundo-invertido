import app from "./app.js";
import { addDoc, collection, getFirestore, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeClube(subscription) {
    const db = getFirestore(app);
    const clubCollection = collection(db, 'teste');
    const docRef = await addDoc(clubCollection, subscription);
    return docRef.id;
}

export async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}