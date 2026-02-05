# Cum să publici site-ul pe DigitalOcean

Acest proiect este pregătit pentru a fi publicat (deploy) folosind **DigitalOcean App Platform** prin intermediul Docker.

## De ce Docker?
Proiectul conține fișiere 3D (`.usdz`, `.glb`) care necesită configurări speciale de server (MIME types) pentru a funcționa corect pe iPhone și Android. Aceste configurări se află în `config/nginx.conf`, iar `Dockerfile`-ul se asigură că sunt folosite.

## Pași pentru publicare

1. **GitHub**
   - Asigură-te că ultima versiune a codului este urcată pe GitHub.

2. **DigitalOcean App Platform**
   - Accesează [DigitalOcean Dashboard](https://cloud.digitalocean.com/apps).
   - Apasă **Create App**.
   - Selectează **GitHub** ca sursă.
   - Alege repository-ul `site-crocorobo`.
   - **Important:** Când DigitalOcean detectează proiectul, asigură-te că folosește **Dockerfile**.
     - Dacă îl setează ca *Static Site*, s-ar putea să pierzi configurările pentru modelele 3D.
     - Dacă îl setează ca *Web Service (Docker)*, totul va funcționa conform configurării noastre, dar va costa aprox. $5/lună (Planul Basic).
   
   - *Alternativă Gratuită (Static Site):* Poți încerca planul gratuit (Static Site). Dacă modelele 3D nu se încarcă pe telefoane, înseamnă că DigitalOcean nu servește tipurile MIME corecte și va trebui să treci la planul Docker.

3. **Deploy**
   - Apasă **Next** și apoi **Create Resource**.
   - Așteaptă câteva minute până când build-ul este gata.
   - Vei primi un link (ex: `site-crocorobo-x7z.ondigitalocean.app`) unde site-ul este vizibil.

## Actualizări
Orice modificare pe care o faci și o trimiți pe GitHub (`git push`) va declanșa automat o actualizare a site-ului live.
