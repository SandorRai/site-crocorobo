# Configurare Deploy Automat pe DigitalOcean Droplet

Pentru ca site-ul să se actualizeze automat pe Droplet atunci când faci un commit pe GitHub, am creat un workflow GitHub Actions. Trebuie doar să configurezi câteva "secrete" (chei de securitate) și să pregătești serverul o singură dată.

## Pasul 1: Pregătirea Droplet-ului (Doar o singură dată)

Intră în consola Droplet-ului (prin SSH) și rulează comenzile de mai jos pentru a descărca proiectul prima dată.

```bash
# 1. Asigură-te că ești în folderul home sau unde vrei să ții site-ul
cd ~

# 2. Configurează autentificarea SSH cu GitHub (pentru a evita parola)
# Generează o cheie SSH pe server (dă enter la toate întrebările)
ssh-keygen -t ed25519 -C "droplet-deploy"

# Afișează cheia publică
cat ~/.ssh/id_ed25519.pub

# -> ATENȚIE: Copiază DOAR rezultatul care începe cu "ssh-ed25519 ...".
# -> NU copia cheia privată (cea fără .pub la final)!
# -> Cheia corectă arată așa: ssh-ed25519 AAAAC3NzaC1... droplet-deploy

# -> Mergi pe GitHub la Repository > Settings > Deploy keys > Add deploy key
# -> Pune un titlu (ex: Droplet) și lipește cheia. Bifează "Allow write access" dacă e nevoie (pentru pull nu e obligatoriu, dar ajută).

# VERIFICARE ÎNAINTE DE CLONE:
# Rulează comanda asta pentru a testa dacă GitHub te recunoaște:
ssh -T git@github.com

# 🔴 EROARE "PERMISSION DENIED"? URMEAZĂ ACEȘTI PAȘI:
# 1. Asigură-te că cheia există. Rulează:
#    ls -la ~/.ssh/
#    (Trebuie să vezi fișierele: id_ed25519 și id_ed25519.pub)
#
# 2. Dacă NU există, generează-le din nou (apasă Enter la tot):
#    ssh-keygen -t ed25519 -C "droplet-deploy"
#
# 3. Afișează cheia publică:
#    cat ~/.ssh/id_ed25519.pub
#
# 4. Copiază TOT textul afișat (de la "ssh-ed25519" până la sfârșit).
#
# 5. Mergi pe GitHub la Repository -> Settings -> Deploy Keys.
#    🔴 NOTĂ IMPORTANTĂ: Trebuie să fii Proprietarul (SandorRai) sau Admin pentru a vedea "Settings".
#    - Dacă ești "moldluca" și nu vezi tab-ul "Settings" la acest proiect:
#      1. Copiază cheia publică generată mai sus.
#      2. Trimite-i cheia lui SandorRai.
#      3. Roagă-l să o adauge la "Settings > Deploy Keys".
#
#    - Dacă ai acces la Settings:
#      - Apasă "Add deploy key".
#      - Paste la cheie.
#      - Bifează "Allow write access" (opțional, dar recomandat pt simplitate).
#      - Apasă "Add key".
#
# 6. Testează din nou:
#    ssh -T git@github.com
#    (Acum ar trebui să zică "Hi SandorRai!...")

# 3. Clonează repository-ul folosind SSH
git clone git@github.com:SandorRai/site-crocorobo.git

# 3. Intră în folder
cd site-crocorobo

# 4. Asigură-te că Docker este instalat. Dacă nu, instalează-l:
# sudo snap install docker 
# SAU
# apt update && apt install docker.io -y

# 5. Testează prima rulare manual
docker build -t site-crocorobo .
docker run -d --restart unless-stopped --name site-crocorobo -p 80:80 site-crocorobo
```

## Pasul 2: Configurare GitHub Secrets

1. Mergi la pagina proiectului tău pe **GitHub**.
2. Intră la **Settings** > **Secrets and variables** > **Actions**.
3. Apasă pe **New repository secret** și adaugă următoarele 3 secrete:

| Nume Secret | Valoare |
|-------------|---------|
| `DROPLET_IP` | Adresa IP a serverului tău DigitalOcean (ex: `164.90.x.x`). |
| `DROPLET_USER` | Utilizatorul cu care te conectezi (de obicei `root`). |
| `SSH_PRIVATE_KEY` | Cheia ta privată SSH. |

### Cum obții cheia SSH privată?
Trebuie să generezi o pereche de chei SSH special pentru GitHub Actions sau să folosești una existentă.
Dacă nu ai una, generează o cheie nouă pe calculatorul tău (sau direct pe server):
```bash
ssh-keygen -t rsa -b 4096 -f github_deploy_key -N ""
```
Aceasta va crea două fișiere:
- `github_deploy_key` (Cheia Privată -> O pui în GitHub Secret `SSH_PRIVATE_KEY`)
- `github_deploy_key.pub` (Cheia Publică -> O adaugi pe server în `~/.ssh/authorized_keys`)

**Pentru a adăuga cheia publică pe server:**
Copiaza conținutul lui `github_deploy_key.pub` și rulează pe serverul DigitalOcean:
```bash
echo "CONTINUTUL_CHEII_PUBLICE_AICI" >> ~/.ssh/authorized_keys
```

## Gata!
Acum, de fiecare dată când dai `git push origin main`, GitHub va:
1. Intra pe serverul tău.
2. Descărca noile modificări (`git pull`).
3. Reconstrui site-ul (`docker build`).
4. Reporni site-ul cu noile modificări.
