import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInAnonymously, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getDatabase, ref, onValue, set, update, remove, push, get } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCl5R2rApLf1RCNK904srL4qe5DpNEs_WQ",
  authDomain: "project-8813260888034421031.firebaseapp.com",
  databaseURL: "https://project-8813260888034421031-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-8813260888034421031",
  storageBucket: "project-8813260888034421031.firebasestorage.app",
  messagingSenderId: "634067769231",
  appId: "1:634067769231:web:de6b14160c50008784ddfa"
};
export const ADMIN_UID="zY2MqDPUnmg6MdUoJFmb5ap8pWh2";
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app), db=getDatabase(app);
export {signInAnonymously,signInWithEmailAndPassword,onAuthStateChanged,signOut,ref,onValue,set,update,remove,push,get};
export const countVotes=(v={})=>{const a=Object.values(v||{}),o=a.filter(x=>x==="O").length,x=a.filter(x=>x==="X").length;return{o,x,total:o+x}};
export const pct=(n,t)=>t?Math.round(n/t*1000)/10:0;
export const left=t=>Math.max(0,Number(t||0)-Date.now());
export const clock=m=>`00:${String(Math.max(0,Math.ceil(m/1000))).padStart(2,"0")}`;
export const esc=(s="")=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
