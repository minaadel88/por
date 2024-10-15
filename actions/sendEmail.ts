"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Initialize Resend only if the API key is present
const resendApiKey = process.env.RESEND_API_KEY;
let resend: Resend;

if (resendApiKey) {
  resend = new Resend(resendApiKey);
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email. Please provide a valid email address.",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message. Please provide a message with fewer than 5000 characters.",
    };
  }

  // If the API key is missing, return an error
  if (!resend) {
    return {
      error: "Email sending is not available. Please set your RESEND_API_KEY.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "bytegrad@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: `Failed to send email: ${getErrorMessage(error)}`,
    };
  }

  return {
    data,
  };
};
