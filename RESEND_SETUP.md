# Konfiguracja Resend

## Krok 1: Utwórz plik `.env.local`

W głównym katalogu projektu utwórz plik `.env.local` z następującą zawartością:

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Adres email, na który mają być wysyłane wiadomości kontaktowe (opcjonalne)
CONTACT_EMAIL=twoj@email.com
```

## Krok 2: Pobierz swój API Key z Resend

1. Zaloguj się do [Resend](https://resend.com)
2. Przejdź do sekcji [API Keys](https://resend.com/api-keys)
3. Utwórz nowy klucz API
4. Skopiuj klucz i wklej go do `.env.local` jako wartość `RESEND_API_KEY`

## Krok 3: Zweryfikuj domenę (opcjonalne, ale zalecane)

Domyślnie Resend używa `onboarding@resend.dev` jako adresu nadawcy. Aby używać własnej domeny:

1. W panelu Resend przejdź do [Domains](https://resend.com/domains)
2. Dodaj i zweryfikuj swoją domenę
3. W pliku `app/api/contact/route.ts` zmień:
   ```typescript
   from: "Kontakt <onboarding@resend.dev>",
   ```
   na:
   ```typescript
   from: "Kontakt <kontakt@twoja-domena.com>",
   ```

## Krok 4: Ustaw adres odbiorcy (opcjonalne)

Jeśli chcesz, aby wiadomości były wysyłane na konkretny adres email, ustaw zmienną `CONTACT_EMAIL` w `.env.local`. Jeśli nie ustawisz tej zmiennej, będzie używany domyślny adres Resend.

## Ważne!

- **NIE** commituj pliku `.env.local` do repozytorium (jest już w `.gitignore`)
- Po dodaniu zmiennych środowiskowych **zrestartuj serwer deweloperski** (`pnpm dev`)

