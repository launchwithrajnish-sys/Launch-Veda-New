import { Resend } from 'resend';

interface Env {
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
  LEAD_RECEIVER_EMAIL?: string;
  WHATSAPP_API_TOKEN?: string;
  WHATSAPP_PHONE_NUMBER_ID?: string;
  WHATSAPP_RECEIVER_NUMBER?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const data = await request.json() as {
      fullName: string;
      email: string;
      brandName?: string;
      category: string;
      stage: string;
    };

    const { fullName, email, brandName, category, stage } = data;

    if (!fullName || !email || !category || !stage) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 1. Send Email Notification
    const resendApiKey = env.RESEND_API_KEY;
    const emailFrom = env.EMAIL_FROM;
    const leadReceiverEmail = env.LEAD_RECEIVER_EMAIL;

    let emailSent = false;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
        const res = await resend.emails.send({
          from: emailFrom || 'leads@launchveda.com',
          to: leadReceiverEmail || 'support@launchveda.com',
          subject: 'New Launch Roadmap Request - LaunchVeda Website',
          text: `New Launch Roadmap Request

Name: ${fullName}
Email: ${email}
Brand / Company: ${brandName || 'N/A'}
Target Category: ${category}
Launch Stage: ${stage}

Source: LaunchVeda Website (Cloudflare Pages Function)
Submitted At: ${new Date().toLocaleString()}`,
        });
        emailSent = true;
        console.log('Email sent successfully via Resend:', res);
      } catch (emailError) {
        console.error('Error sending email via Resend:', emailError);
      }
    } else {
      console.warn('Resend API key not configured in environment variables.');
    }

    // 2. Send WhatsApp Notification
  //   const waToken = env.WHATSAPP_API_TOKEN;
  //   const waPhoneId = env.WHATSAPP_PHONE_NUMBER_ID;
  //   const waReceiver = env.WHATSAPP_RECEIVER_NUMBER;

  //   if (waToken && waPhoneId) {
  //     const messageText = `New Launch Roadmap Request\n\nName: ${fullName}\nEmail: ${email}\nBrand / Company: ${brandName || 'N/A'}\nTarget Category: ${category}\nLaunch Stage: ${stage}\n\nSource: LaunchVeda Website`;
      
  //     const whatsappPayload = {
  //       messaging_product: "whatsapp",
  //       recipient_type: "individual",
  //       to: waReceiver || "918796300199",
  //       type: "text",
  //       text: {
  //         preview_url: false,
  //         body: messageText
  //       }
  //     };

  //     try {
  //       const waResponse = await fetch(`https://graph.facebook.com/v17.0/${waPhoneId}/messages`, {
  //         method: 'POST',
  //         headers: {
  //           'Authorization': `Bearer ${waToken}`,
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(whatsappPayload),
  //       });

  //       if (!waResponse.ok) {
  //         const waError = await waResponse.text();
  //         console.error('Error sending WhatsApp message:', waError);
  //       }
  //     } catch (waError) {
  //       console.error('Exception sending WhatsApp message:', waError);
  //     }
  //   } else {
  //     console.warn('WhatsApp API credentials not configured in environment variables.');
  //   }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing launch roadmap request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
