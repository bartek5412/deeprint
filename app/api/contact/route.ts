import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Walidacja
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane" },
        { status: 400 }
      );
    }

    // Walidacja emaila
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nieprawidłowy adres email" },
        { status: 400 }
      );
    }

    // Sprawdź czy API key jest ustawiony
    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY nie jest ustawiony w zmiennych środowiskowych"
      );
      return NextResponse.json(
        { error: "Konfiguracja serwera nie jest kompletna" },
        { status: 500 }
      );
    }

    // Inicjalizacja Resend wewnątrz funkcji (zmienne środowiskowe są dostępne w runtime)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Pobierz adres email odbiorcy z zmiennych środowiskowych lub użyj domyślnego
    const toEmail = process.env.CONTACT_EMAIL || "onboarding@resend.dev";

    // Wysyłanie emaila przez Resend
    const { data, error } = await resend.emails.send({
      from: "Kontakt <onboarding@resend.dev>", // Zmień na swój zweryfikowany domenę w Resend
      to: [toEmail],
      replyTo: email,
      subject: `Nowa wiadomość kontaktowa od ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            Nowa wiadomość kontaktowa
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Imię i nazwisko:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Wiadomość:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Ta wiadomość została wysłana z formularza kontaktowego na stronie.
          </p>
        </div>
      `,
      text: `
Nowa wiadomość kontaktowa

Imię i nazwisko: ${name}
Email: ${email}

Wiadomość:
${message}
      `,
    });

    if (error) {
      console.error("Błąd Resend:", error);
      return NextResponse.json(
        { error: "Wystąpił błąd podczas wysyłania wiadomości" },
        { status: 500 }
      );
    }

    console.log("Email wysłany pomyślnie:", data);

    return NextResponse.json(
      { message: "Wiadomość została wysłana pomyślnie!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd podczas przetwarzania formularza:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości" },
      { status: 500 }
    );
  }
}
