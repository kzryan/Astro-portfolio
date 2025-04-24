import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

export async function POST({ request }) {
  try {
    const data = await request.formData(); // ✅ use correct request
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const msg = {
      to: 'kate.ryan20@alumni.colostate.edu',
      from: 'kate.ryan20@alumni.colostate.edu',
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await sendGrid.send(msg);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    }); // ✅ return a Response in error case
  }
}
