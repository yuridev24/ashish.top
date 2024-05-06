import { NextResponse } from "next/server";
import { addDoc, collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import firebaseApp from "@/lib/firebase";

import getGithubData from "@/lib/getGithubData";

import { getToken } from "next-auth/jwt";

const db = getFirestore(firebaseApp);
const messageRef = collection(db, "messages");

export async function POST(req: any) {
  try {
    const { message } = await req.json();
    
    const data = await getToken({ req });
    const name = data?.name;
    const image = data?.picture;

    const id = await getGithubData(image);

    if (!message) {
      return NextResponse.json({
        success: false,
        error: "Missing required field message",
      }, { status: 400 });
    }

    const currentTime = new Date().getTime();
    const rateLimitDuration = 60 * 60 * 1000;
    const rateLimitCount = 3;
    const userMessagesQuery = query(messageRef, where("github", "==", id), where("time", ">=", currentTime - rateLimitDuration));
    const userMessagesSnapshot = await getDocs(userMessagesQuery);
    const userSignCount = userMessagesSnapshot.size;

    if (userSignCount >= rateLimitCount) {
      return NextResponse.json({
        success: false,
        error: "Rate limited",
      }, { status: 429 });
    }

    // Save the sign
    await addDoc(messageRef, {
      name: name,
      image: image,
      message: message,
      time: currentTime,
      github: id,
    });

    return NextResponse.json({ success: true, id: id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
    }, { status: 500});
  }
}
