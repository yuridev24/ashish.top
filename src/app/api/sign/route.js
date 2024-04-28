import { NextResponse } from "next/server";
import { addDoc, collection, getFirestore } from "firebase/firestore";
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
    await addDoc(messageRef, {
      name: name,
      image: image,
      message: message,
      time: new Date().getTime(),
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
