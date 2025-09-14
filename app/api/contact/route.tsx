import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] API route called - processing contact form")

    const body = await request.json()
    console.log("[v0] Form data received:", body)

    const { firstName, lastName, phone, email, address, service, propertySize, details, contactMethod } = body

    if (!firstName || !lastName || !phone || !email) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    console.log("[v0] API Key present:", !!process.env.RESEND_API_KEY)
    console.log("[v0] API Key first 10 chars:", process.env.RESEND_API_KEY?.substring(0, 10))

    const htmlEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - All American Lawn Maintenance</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f8fafc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      
    <div style="background-color: #000000; padding: 40px 30px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: -0.02em;">
        ALL AMERICAN LAWN MAINTENANCE
      </h1>
      <p style="color: #06b6d4; font-size: 16px; margin: 8px 0 0 0; font-weight: 500;">
        New Quote Request Received
      </p>
    </div>

     
    <div style="padding: 40px 30px;">
      <div style="background-color: #06b6d4; color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">
          🎯 New Customer Lead!
        </h2>
        <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">
          A potential customer is ready to get a quote
        </p>
      </div>

       Customer Info 
      <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="color: #000000; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; border-bottom: 2px solid #06b6d4; padding-bottom: 8px;">
          Customer Information
        </h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 140px;">Name:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151;">Phone:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">
              <a href="tel:${phone}" style="color: #06b6d4; text-decoration: none;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">
              <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151;">Address:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">${address}</td>
          </tr>
        </table>
      </div>

       Service Details 
      <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
        <h3 style="color: #000000; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; border-bottom: 2px solid #06b6d4; padding-bottom: 8px;">
          Service Details
        </h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 140px;">Service:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151;">Property Size:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">${propertySize}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151;">Contact Method:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">${contactMethod}</td>
          </tr>
          ${
            details
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151; vertical-align: top;">Details:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 500;">${details}</td>
          </tr>
          `
              : ""
          }
        </table>
      </div>

      <div style="text-align: center; margin-bottom: 30px;">
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER7RP8KNytrXgYx7_W8XJNMJQp7iJn8lL6eWvQhWK-2SvfVbdHvfvQhWK-2SvfVbdHvf" 
           style="display: inline-block; background-color: #06b6d4; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 10px 10px 0; transition: background-color 0.2s;">
          📅 Schedule Estimate
        </a>
        <a href="tel:${phone}" 
           style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 10px 10px 0;">
          📞 Call Customer
        </a>
      </div>

      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 0 8px 8px 0;">
        <p style="margin: 0; color: #92400e; font-weight: 600; font-size: 14px;">
          ⚡ PRIORITY: Respond within 24 hours to maintain high customer satisfaction!
        </p>
      </div>
    </div>

    <div style="background-color: #000000; padding: 30px; text-align: center;">
      <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: 500;">
        All American Lawn Maintenance
      </p>
      <p style="color: #06b6d4; margin: 8px 0 0 0; font-size: 14px;">
        Professional Lawn Care Services
      </p>
    </div>
  </div>
</body>
</html>
    `

    const plainTextContent = `
New Quote Request from All American Lawn Maintenance Website

Customer Information:
- Name: ${firstName} ${lastName}
- Phone: ${phone}
- Email: ${email}
- Address: ${address}

Service Details:
- Service Requested: ${service}
- Property Size: ${propertySize}
- Additional Details: ${details || "None provided"}
- Preferred Contact Method: ${contactMethod}

Please respond to this customer within 24 hours.
Schedule an estimate: https://calendar.google.com/calendar/u/0?cid=MzYzMDAxNjlhYTA2MzZlNTI1MzYyZDYwNTkxMDE4ZmVjZTRmMzllM2RmYzkzMTBhNTMyOTY3NjI3NzE5ZDM5ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t
    `

    console.log("[v0] Attempting to send email via Resend...")

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["2023aalm@gmail.com"],
        subject: `🎯 New Quote Request from ${firstName} ${lastName} - ${service}`,
        html: htmlEmailContent,
        text: plainTextContent,
        reply_to: email,
      }),
    })

    console.log("[v0] Email response status:", emailResponse.status)
    const responseText = await emailResponse.text()
    console.log("[v0] Email response body:", responseText)

    if (!emailResponse.ok) {
      console.error("[v0] Email service error:", responseText)
      return NextResponse.json({
        success: true,
        message: "Quote request received! We will contact you within 24 hours. (Email service issue - check logs)",
      })
    }

    console.log("[v0] Email sent successfully to 2023aalm@gmail.com")

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully! We will contact you within 24 hours.",
    })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit quote request. Please try again." },
      { status: 500 },
    )
  }
}
