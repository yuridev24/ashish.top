import { NextResponse } from "next/server";
import { addDoc, collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import firebaseApp from "../../../lib/firebase";

const db = getFirestore(firebaseApp);
const messageRef = collection(db, "messages");

export async function POST(req) {
  try {
    const { name, image, message, id } = await req.json();
    if (!name || !image || !message || !id) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields",
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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
    }, { status: 500});
  }
}
