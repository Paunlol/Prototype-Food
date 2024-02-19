import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBJMwXm9sPITs4vL8VcQl6sb6eqQbuvzuM",
    authDomain: "kinraidee-32dc4.firebaseapp.com",
    projectId: "kinraidee-32dc4",
    storageBucket: "kinraidee-32dc4.appspot.com",
    messagingSenderId: "595736427785",
    appId: "1:595736427785:web:9f6043cfecd63e4db567d8",
    measurementId: "G-7TJY5YJDVF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// //console.log("db", db);
let foodall = [];
let userList = [];


export async function getFoods(db) {
    const foodCol = collection(db, 'food');
    const empSnapshot = await getDocs(foodCol);
    return empSnapshot;
}

export async function getUser(db) {
    const userCol = collection(db, 'user1');
    const userSnapshot = await getDocs(userCol);
    return userSnapshot;
}

async function addData(name) {
    let uid = name
    let info = JSON.parse(sessionStorage.getItem("regis-info"))
    let bio = JSON.parse(sessionStorage.getItem("user-bio"))
    //console.log("info", info);
    //console.log("bio", bio);
    if (info && info.displayName !== "" && info.email !== "" && info.password !== "" && bio && bio.age !== "" && bio.height !== "" && bio.sex !== "" && bio.weight !== "" && bio.bmi !== "" && bio.totalkcal > 0) {
        const userDocRef1 = doc(collection(db, uid), "info");
        const userDocRef2 = doc(collection(db, uid), "bio");
        const userDocRef3 = doc(collection(db, uid), "dashboard");
        const userDocRef4 = doc(collection(db, uid), "breakfast");
        const userDocRef5 = doc(collection(db, uid), "lunch");
        const userDocRef6 = doc(collection(db, uid), "diner");
        await setDoc(userDocRef1, {
            username: info.displayName,
            email: info.email,
            password: info.password
        })
        await setDoc(userDocRef2, {
            sex: bio.sex,
            age: bio.age,
            height: bio.height,
            weight: bio.weight,
            bmi: bio.bmi
        })
        await setDoc(userDocRef3, {
            eaten: 0,
            total: bio.totalkcal,
            breakfast: 0,
            lunch: 0,
            dinner: 0
        })
        await setDoc(userDocRef3, {
            eaten: 0,
            total: bio.totalkcal,
            breakfast: 0,
            lunch: 0,
            dinner: 0
        })
        await setDoc(userDocRef4, {
            carb: 0,
            fat: 0,
            kcal: 0,
            name: "",
            protein: 0
        })
        await setDoc(userDocRef5, {
            carb: 0,
            fat: 0,
            kcal: 0,
            name: "",
            protein: 0
        })
        await setDoc(userDocRef6, {
            carb: 0,
            fat: 0,
            kcal: 0,
            name: "",
            protein: 0
        })
        //console.log("savedata");
    } else {
        //console.log("ข้อมูลยังไม่ครบ");
    }
}
export { addData }
const [data1, data2] = await Promise.all([getFoods(db), getUser(db)]);
// //console.log("data1", data1);
data1.forEach(Food => {
    foodall.push(Food.data());
});

data2.forEach(user => {
    userList.push(user.data());
});
localStorage.setItem('foodall', JSON.stringify(foodall));
localStorage.setItem('userList', JSON.stringify(userList));
