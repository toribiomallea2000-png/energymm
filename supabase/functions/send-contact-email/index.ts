import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "MM Energy <onboarding@resend.dev>",
      to: ["contacto@mmenergy.com.ar"], // Replace with actual business email
      subject: `Nuevo contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "MM Energy <onboarding@resend.dev>",
      to: [email],
      subject: "Recibimos tu mensaje - MM Energy",
      html: `
        <h1>¡Gracias por contactarnos, ${name}!</h1>
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.</p>
        <p>Tu mensaje:</p>
        <blockquote style="border-left: 3px solid #22c55e; padding-left: 16px; color: #666;">
          ${message}
        </blockquote>
        <p>Saludos,<br>El equipo de MM Energy</p>
      `,
    });

    console.log("Emails sent successfully:", { businessEmailResponse, userEmailResponse });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
