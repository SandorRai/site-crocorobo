# Setare CD (Continuous Deployment) pe DigitalOcean Droplet

Deoarece ai deja un Droplet creat, vom folosi **GitHub Actions** pentru a face deploy automat de fiecare dată când faci `push` pe GitHub.

## Pasul 1: Pregătește GitHub Secrets
Trebuie să îi "spui" lui GitHub cum să se conecteze la serverul tău în siguranță.

1. Mergi la pagina proiectului tău pe GitHub.
2. Intră la **Settings** > **Secrets and variables** > **Actions**.
3. Apasă pe **New repository secret** și adaugă următoarele două secrete:

### `DROPLET_IP`
*   **Value:** Adresa IP a Droplet-ului tău (ex: `164.90.x.x`).

### `SSH_PRIVATE_KEY`
*   **Value:** Cheia ta privată SSH.
    *   Dacă ai creat Droplet-ul cu o cheie SSH, trebuie să copiezi conținutul fișierului privat de pe calculatorul tău (de obicei în `~/.ssh/id_rsa`).
    *   Dacă te conectezi cu parolă, va trebui să generezi o pereche de chei SSH pe Droplet sau local și să adaugi cheia publică în `~/.ssh/authorized_keys` pe Droplet.
    *   *Nota: Cheia trebuie să înceapă cu `-----BEGIN OPENSSH PRIVATE KEY-----`.*

## Pasul 2: Pregătește Serverul (O singură dată)
Conectează-te la Droplet-ul tău prin terminal (SSH) și asigură-te că `git` este instalat. Scriptul nostru de deploy se va ocupa de instalarea Docker automat, dar e bine să verifici accesul.

```bash
ssh root@IP-UL-TAU
apt-get update
apt-get install git docker.io -y
```

## Cum funcționează?
1. Am creat fișierul `.github/workflows/deploy.yml`.
2. De fiecare dată când dai `git push origin main`, GitHub va:
   - Se conecta la Droplet prin SSH.
   - Trage ultimele modificări (`git pull`).
   - Reconstrui containerul Docker.
   - Reporni site-ul automat.

## Testare
Dă un push acum pentru a declanșa procesul:
```bash
git add .
git commit -m "Setup deployment pipeline"
git push
```
