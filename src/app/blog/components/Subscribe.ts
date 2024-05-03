"use client";

export async function subscribe(email: string) {
  try {
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
      return JSON.stringify(
        { message: "Subscription failed", error: errorData.errors }
      );
    }

    const data = await response.json();
    if (data && data.errors && data.errors.length > 0) {
      const errorMessage = data.errors[0].message;
      if (errorMessage === "Email already subscribed") {
        return JSON.stringify(
          { message: "Success", data }, // Already subscribed
        );
      }
    }
    if (
      data &&
      data.data &&
      data.data.subscribeToNewsletter &&
      data.data.subscribeToNewsletter.status === "PENDING"
    ) {
      return JSON.stringify(
        { message: "Success", data }, // New subscriber
      );
    } else {
      return JSON.stringify(
        { message: "Subscription failed", data },
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return JSON.stringify(
      { message: "Subscription failed", error },
    );
  }
}
