"use server";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../../../lib/firebase";

export const getGuestbook = async () => { 
  const db = getFirestore(firebaseApp);
  const messagesRef = collection(db, "messages");
  const messagesSnapshot = await getDocs(messagesRef);

  const messagesData = [];

  messagesSnapshot.forEach((doc) => {
    const messageData = doc.data();
    messagesData.push(messageData);
  });
  messagesData.sort((a, b) => b.time - a.time); // sort by the timestamp

  return messagesData;
}