import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
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
let foodall = [];
let userList = [];

async function getFoods(db) {
    const foodCol = collection(db, 'food');
    const empSnapshot = await getDocs(foodCol);
    return empSnapshot;
}
export { getFoods }

async function getUser(db) {
    const userCol = collection(db, 'user1');
    const userSnapshot = await getDocs(userCol);
    return userSnapshot;
}
export { getUser }
// ใช้ Promise.all เพื่อรอรับผลลัพธ์จากทั้งสอง Promise
const [data1, data2] = await Promise.all([getFoods(db), getUser(db)]);

// ใช้ forEach ในการดึงข้อมูล Food
data1.forEach(Food => {
    // console.log("Food", Food.data());
    foodall.push(Food.data());
});
// console.log("foodall", foodall);

// ใช้ forEach ในการดึงข้อมูล User
data2.forEach(user => {
    userList.push(user.data());
});
// console.log("userList", userList);
localStorage.setItem('foodall', JSON.stringify(foodall));
localStorage.setItem('userList', JSON.stringify(userList));

export function addfood() {
    // console.log("export yessssssss");
    // db.collection("user1").doc("LA").set({
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA"
    // })
}