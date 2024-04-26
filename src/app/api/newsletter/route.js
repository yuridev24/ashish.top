import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    const requestBody = {
      query: `
        mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
          subscribeToNewsletter(input: $input) {
            status
          }
        }
      `,
      variables: {
        input: {
          publicationId: "6617c97b653f6f2168c868d7",
          email: email,
        },
      },
    };

    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData.errors);
      return NextResponse.json(
        { message: "Subscription failed", error: errorData.errors },
        { status: 500 }
      );
    }

    const data = await response.json();
    if (data && data.errors && data.errors.length > 0) {
      const errorMessage = data.errors[0].message;
      if (errorMessage === "Email already subscribed") {
        return NextResponse.json(
          { message: "Success", data }, // Already subscribed
          { status: 200 }
        );
      }
    }
    if (data && data.data && data.data.subscribeToNewsletter && data.data.subscribeToNewsletter.status === "PENDING") {
      return NextResponse.json(
      { message: "Success", data }, // New subscriber
      { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Subscription failed", data },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { message: "Subscription failed", error },
      { status: 500 }
    );
  }
}
