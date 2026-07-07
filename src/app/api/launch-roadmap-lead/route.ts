import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  return Response.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, email, brandName, category, stage, phoneNumber, budget, message } = data;

    if (!fullName || !email || !category || !stage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM;
    const leadReceiverEmail = process.env.LEAD_RECEIVER_EMAIL;

    let emailSent = false;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
       const res = await resend.emails.send({
  from: emailFrom || "LaunchVeda <onboarding@resend.dev>",
  to: leadReceiverEmail || "your@email.com",
  subject: `🚀 New Launch Consultation Inquiry from ${fullName}`,
  html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0;padding:24px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          
          <tr>
            <td style="background:#111827;padding:28px;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;">
                🚀 New Launch Consultation Inquiry
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:32px;">

              <p style="margin-top:0;font-size:16px;color:#444;">
                A new lead has submitted the consultation form.
              </p>

              <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="font-weight:bold;width:180px;border-bottom:1px solid #eee;">Full Name</td>
                  <td style="border-bottom:1px solid #eee;">${fullName}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;border-bottom:1px solid #eee;">Email</td>
                  <td style="border-bottom:1px solid #eee;">
                    <a href="mailto:${email}">${email}</a>
                  </td>
                </tr>

                <tr>
                  <td style="font-weight:bold;border-bottom:1px solid #eee;">Phone / WhatsApp</td>
                  <td style="border-bottom:1px solid #eee;">${phoneNumber || "-"}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;border-bottom:1px solid #eee;">Brand Name</td>
                  <td style="border-bottom:1px solid #eee;">${brandName || "-"}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;border-bottom:1px solid #eee;">Category</td>
                  <td style="border-bottom:1px solid #eee;">${category}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;border-bottom:1px solid #eee;">Current Stage</td>
                  <td style="border-bottom:1px solid #eee;">${stage}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;border-bottom:1px solid #eee;">Estimated Budget</td>
                  <td style="border-bottom:1px solid #eee;">${budget || "-"}</td>
                </tr>
              </table>

              <h3 style="margin-top:32px;color:#111827;">
                Message
              </h3>

              <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:16px;color:#444;line-height:1.7;">
                ${message || "No additional message provided."}
              </div>

              <hr style="margin:32px 0;border:none;border-top:1px solid #e5e7eb;" />

              <p style="margin:0;color:#666;font-size:14px;">
                <strong>Source:</strong> LaunchVeda Website
              </p>

              <p style="margin-top:8px;color:#666;font-size:14px;">
                <strong>Submitted:</strong> ${new Date().toLocaleString()}
              </p>

            </td>
          </tr>

          <tr>
            <td style="background:#f9fafb;padding:20px;text-align:center;color:#888;font-size:13px;">
              This email was automatically generated from the LaunchVeda contact form.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
});
        emailSent = true;
        console.log("Email sent successfully via Resend:", res);
      } catch (emailError) {
        console.error("Error sending email via Resend:", emailError);
      }
    } else {
      console.warn("Resend API key not configured in process.env.");
    }

    // 2. Send WhatsApp Notification
    // const waToken = process.env.WHATSAPP_API_TOKEN;
    // const waPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    // const waReceiver = process.env.WHATSAPP_RECEIVER_NUMBER;

    // if (waToken && waPhoneId) {
    //   const messageText = `New Launch Consultation Inquiry\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber || "N/A"}\nCategory: ${category}\nStage: ${stage}\nBudget: ${budget || "N/A"}\n\nMessage:\n${message || "N/A"}\n\nSource: LaunchVeda Website`;
      
    //   const whatsappPayload = {
    //     messaging_product: "whatsapp",
    //     recipient_type: "individual",
    //     to: waReceiver || "918796300199",
    //     type: "text",
    //     text: {
    //       preview_url: false,
    //       body: messageText
    //     }
    //   };

    //   try {
    //     const waResponse = await fetch(`https://graph.facebook.com/v17.0/${waPhoneId}/messages`, {
    //       method: "POST",
    //       headers: {
    //         "Authorization": `Bearer ${waToken}`,
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(whatsappPayload),
    //     });

    //     if (!waResponse.ok) {
    //       const waError = await waResponse.text();
    //       console.error("Error sending WhatsApp message:", waError);
    //     }
    //   } catch (waError) {
    //     console.error("Exception sending WhatsApp message:", waError);
    //   }
    // } else {
    //   console.warn("WhatsApp API credentials not configured in process.env.");
    // }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing launch roadmap request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
