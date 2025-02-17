import { NextRequest, NextResponse } from "next/server";
import { sendFeedbackToDevTeam, sendFeedbackConfirmationToUser } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    try {
      // ✅ Send Emails to Dev Team & User
      await Promise.all([
        sendFeedbackToDevTeam(name, email, message),
        sendFeedbackConfirmationToUser(name, email),
      ]);
    } catch (emailError) {
      console.error("❌ Error sending emails:", emailError);
      return NextResponse.json(
        { error: "Failed to send confirmation emails" },
        { status: 500 }
      );
    }

    // ✅ Success Response
    return NextResponse.json(
      { message: "Feedback submitted successfully. Confirmation email sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Feedback submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
