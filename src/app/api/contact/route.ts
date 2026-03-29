import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  // Lazy-initialize so build doesn't fail without RESEND_API_KEY set
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'MISSING_KEY');
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      relationship,
      careFor,
      location,
      conditions,
      careType,
      frequency,
      urgency,
      startDate,
      budget,
      hearAboutUs,
      message,
    } = body;

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const emailBody = `
New care enquiry received via primroseevercare.co.uk

CONTACT DETAILS
---------------
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Relationship to person needing care: ${relationship || 'Not specified'}

PERSON NEEDING CARE
-------------------
Name: ${careFor || 'Not provided'}
Location / Area: ${location || 'Not specified'}
Medical conditions / diagnoses: ${conditions || 'Not specified'}

CARE REQUIREMENTS
-----------------
Type of care: ${careType || 'Not specified'}
Frequency: ${frequency || 'Not specified'}
Urgency: ${urgency || 'Not specified'}
Preferred start date: ${startDate || 'Not specified'}
Budget: ${budget || 'Not specified'}

ADDITIONAL INFORMATION
----------------------
How they heard about us: ${hearAboutUs || 'Not specified'}
Message: ${message || 'None'}

---
Sent automatically from the Primrose Ever Care website contact form.
    `.trim();

    const { error } = await resend.emails.send({
      from: 'Primrose Ever Care Website <noreply@primroseevercare.co.uk>',
      to: ['enquires@primroseevercare.co.uk'],
      replyTo: email,
      subject: `New Care Enquiry — ${firstName} ${lastName}`,
      text: emailBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
