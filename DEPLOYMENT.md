# Wdrożenie na VPS

## Wymagania

- VPS z systemem Linux (Ubuntu/Debian)
- Node.js 18+ i pnpm/npm
- PM2 (opcjonalnie, do zarządzania procesem)
- Nginx (opcjonalnie, jako reverse proxy)

## Krok 1: Przygotowanie projektu

### Lokalnie (przed wdrożeniem):

1. Upewnij się, że masz wszystkie zmienne środowiskowe w `.env.local`
2. Zbuduj projekt lokalnie, aby sprawdzić czy wszystko działa:
   ```bash
   pnpm install
   pnpm build
   ```

## Krok 2: Wdrożenie na VPS

### Opcja A: Bezpośrednie wdrożenie (proste)

1. **Połącz się z VPS:**
   ```bash
   ssh uzytkownik@twoj-vps-ip
   ```

2. **Zainstaluj Node.js i pnpm:**
   ```bash
   # Node.js 20
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # pnpm
   npm install -g pnpm
   ```

3. **Sklonuj repozytorium lub prześlij pliki:**
   ```bash
   # Opcja 1: Git
   git clone twoje-repo-url
   cd deeprint
   
   # Opcja 2: SCP (prześlij pliki)
   # scp -r . uzytkownik@vps-ip:/path/to/project
   ```

4. **Zainstaluj zależności:**
   ```bash
   pnpm install --prod
   ```

5. **Utwórz plik `.env.local` na VPS:**
   ```bash
   nano .env.local
   ```
   Dodaj:
   ```env
   RESEND_API_KEY=twój_klucz_api
   CONTACT_EMAIL=twoj@email.com
   NODE_ENV=production
   ```

6. **Zbuduj projekt:**
   ```bash
   pnpm build
   ```

7. **Uruchom serwer:**
   ```bash
   pnpm start
   ```
   Serwer będzie działał na porcie 3000.

### Opcja B: Z PM2 (zalecane dla produkcji)

1. **Zainstaluj PM2:**
   ```bash
   npm install -g pm2
   ```

2. **Po wykonaniu kroków 1-6 z Opcji A, uruchom z PM2:**
   ```bash
   pm2 start npm --name "deeprint" -- start
   ```

3. **Zapisz konfigurację PM2:**
   ```bash
   pm2 save
   pm2 startup  # Uruchomi się automatycznie po restarcie serwera
   ```

4. **Przydatne komendy PM2:**
   ```bash
   pm2 list          # Lista procesów
   pm2 logs deeprint  # Logi
   pm2 restart deeprint  # Restart
   pm2 stop deeprint     # Stop
   ```

## Krok 3: Konfiguracja Nginx (opcjonalnie, ale zalecane)

1. **Zainstaluj Nginx:**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. **Utwórz konfigurację:**
   ```bash
   sudo nano /etc/nginx/sites-available/deeprint
   ```

3. **Dodaj konfigurację:**
   ```nginx
   server {
       listen 80;
       server_name twoja-domena.com www.twoja-domena.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Aktywuj konfigurację:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/deeprint /etc/nginx/sites-enabled/
   sudo nginx -t  # Sprawdź konfigurację
   sudo systemctl reload nginx
   ```

5. **Skonfiguruj SSL (Let's Encrypt):**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d twoja-domena.com -d www.twoja-domena.com
   ```

## Krok 4: Firewall

```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

## Aktualizacja aplikacji

1. **Połącz się z VPS**
2. **Przejdź do katalogu projektu:**
   ```bash
   cd /path/to/deeprint
   ```
3. **Pobierz najnowsze zmiany:**
   ```bash
   git pull  # jeśli używasz Git
   ```
4. **Zainstaluj nowe zależności (jeśli są):**
   ```bash
   pnpm install
   ```
5. **Zbuduj projekt:**
   ```bash
   pnpm build
   ```
6. **Zrestartuj aplikację:**
   ```bash
   # Jeśli używasz PM2:
   pm2 restart deeprint
   
   # Jeśli bez PM2:
   # Zatrzymaj proces (Ctrl+C) i uruchom ponownie:
   pnpm start
   ```

## Monitoring

### PM2 Monitoring:
```bash
pm2 monit  # Interaktywny monitoring
```

### Logi:
```bash
# PM2
pm2 logs deeprint

# Nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## Rozwiązywanie problemów

1. **Sprawdź czy port 3000 jest wolny:**
   ```bash
   sudo netstat -tulpn | grep 3000
   ```

2. **Sprawdź logi aplikacji:**
   ```bash
   pm2 logs deeprint
   ```

3. **Sprawdź zmienne środowiskowe:**
   ```bash
   cat .env.local
   ```

4. **Sprawdź status Nginx:**
   ```bash
   sudo systemctl status nginx
   ```

## Bezpieczeństwo

- ✅ **NIE commituj** `.env.local` do repozytorium
- ✅ Używaj HTTPS (Let's Encrypt)
- ✅ Regularnie aktualizuj system i zależności
- ✅ Używaj silnych haseł SSH
- ✅ Rozważ użycie fail2ban dla ochrony SSH

