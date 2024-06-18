// import { initializeApp } from "firebase/app";
// import {getFireStore, collection} from  " firebase/firestore/lite"

// const firebaseConfig = {
//   apiKey: "AIzaSyAphHEiMXSkOyWxUG9b717CjPMV7_KtMDk",
//   authDomain: "van-bnb.firebaseapp.com",
//   projectId: "van-bnb",
//   storageBucket: "van-bnb.appspot.com",
//   messagingSenderId: "572309754536",
//   appId: "1:572309754536:web:7b814b4c2c1ab94c10289d"
// };


// const app = initializeApp(firebaseConfig);

// const db=getFireStore(app);

// const vansCollection=collection(db, "vans")

// export async function getVans() {
//     const querySnapshot = await getDocs(vansCollection);
// }

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

   
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

    

