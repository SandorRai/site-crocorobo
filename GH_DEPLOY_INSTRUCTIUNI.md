# Configurare Automată Deploy (DigitalOcean)

Am configurat totul în cod (usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--no-lazy-fetch]
           [--no-optional-locks] [--no-advice] [--bare] [--git-dir=<path>]
           [--work-tree=<path>] [--namespace=<name>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   restore    Restore working tree files
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   diff       Show changes between commits, commit and working tree, etc
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   backfill   Download missing objects in a partial clone
   branch     List, create, or delete branches
   commit     Record changes to the repository
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   reset      Reset current HEAD to the specified state
   switch     Switch branches
   tag        Create, list, delete or verify tags

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.), dar pentru securitate, **nu pot accesa serverul tău** fără cheia SSH.

Trebuie să faci următorii 2 pași simpli:

## Pasul 1: Configurează GitHub Secrets
1. Mergi la: [https://github.com/SandorRai/site-crocorobo/settings/secrets/actions](https://github.com/SandorRai/site-crocorobo/settings/secrets/actions)
2. Apasă **New repository secret**.
3. Adaugă secretul pentru IP:
   - Name: `DROPLET_IP`
   - Value: `157.230.74.245`
4. Adaugă secretul pentru Cheia SSH:
   - Name: `SSH_PRIVATE_KEY`
   - Value: (Copiază tot conținutul fișierului tău privat, de ex: `cat ~/.ssh/id_rsa`)

## Pasul 2: Pregătește Serverul (Execută asta o singură dată)
Deschide un terminal la tine pe PC și rulează aceste comenzi pentru a pregăti serverul:

```bash
# Conectează-te la server
ssh root@157.230.74.245

# Instalează Docker și Git (copiază și dă paste la linia de mai jos)
apt-get update && apt-get install git docker.io -y
```

## Pasul 3: Gata!
Imediat ce ai adăugat secretele, GitHub va încerca din nou să facă deploy.
Dacă nu pornește automat, poți da un mic "imbold" cu un nou commit gol:

```bash
git commit --allow-empty -m "Trigger deploy"
git push
```

Site-ul va fi disponibil la: http://157.230.74.245
