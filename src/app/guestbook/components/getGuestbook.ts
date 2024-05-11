"use server";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../../../lib/firebase";

export const getGuestbook: any = async () => {
  try {
    // throw new Error();
    const db: any = getFirestore(firebaseApp);
    const messagesRef: any = collection(db, "messages");
    const messagesSnapshot: any = await getDocs(messagesRef);

    const messagesData: any = [];

    messagesSnapshot?.forEach((doc: any) => {
      const messageData: any = doc.data();
      messagesData?.push(messageData);
    });
    messagesData?.sort((a: any, b: any) => b.time - a.time); // sort by the timestamp

    return messagesData;
  } catch {
    return false;
  }
};