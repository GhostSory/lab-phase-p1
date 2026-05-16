# NovaCore — Développement Logiciel & Applications Web

> Des logiciels qui propulsent votre business — de l'Afrique au monde.

## Présentation

NovaCore est une entreprise de développement logiciel fondée en **2017 à Abidjan**. Nous concevons et développons des logiciels sur mesure et des applications web qui transforment les ambitions de nos clients en réalité numérique.

### Quelques chiffres

| Indicateur | Valeur |
|---|---|
| Projets livrés | 150+ |
| Satisfaction client | 98 % |
| Pays couverts | 40+ |
| Années d'expertise | 8 ans |

---

## Structure du projet

```
novacore/
├── index.html       # Page de présentation principale
├── landing.html     # Page produit (NovaOS)
├── contact.html     # Formulaire de contact
├── styles.css       # Feuille de style globale (Design System NovaCore)
└── main.js          # Scripts JavaScript (navigation, formulaires)
```

---

## Pages

### `index.html` — Présentation
Page d'accueil principale. Elle comprend :
- **Hero** : accroche avec statistiques clés et photo d'équipe
- **Clients** : logos des clients partenaires (TECHVISION, NOVA&CO, SYNAPSE, OPTICORE, DATAFLUX)
- **À propos** : histoire et valeurs de NovaCore
- **Grille expertises** : 4 domaines cliquables avec ancres internes
- **Sections détail** : description complète de chaque expertise

### `landing.html` — Notre Produit
Page dédiée à **NovaOS v2.0**, le produit phare de NovaCore.

### `contact.html` — Nous Contacter
Formulaire de prise de contact avec l'équipe NovaCore.

---

## Expertises

### ⚙️ Développement Logiciel Sur Mesure
Applications robustes, scalables et sécurisées conçues pour vos processus métier.
- Architecture microservices évolutive
- APIs RESTful et GraphQL haute performance
- Applications desktop cross-platform (Electron, Tauri)
- Systèmes métier sur mesure (ERP, CRM, HRMS)
- Tests automatisés avec couverture > 90 %

**Technologies :** Node.js · Python · Go · Java / Spring · PostgreSQL · MongoDB · Redis · GraphQL · gRPC

### 🌐 Applications Web
Interfaces modernes et plateformes SaaS.
- Progressive Web Apps (PWA)
- Dashboards interactifs
- Plateformes SaaS

**Technologies :** React · Vue · Next.js · TypeScript · Tailwind CSS · Figma

### ☁️ Cloud & DevOps
Infrastructure scalable et pipelines CI/CD automatisés.
- Déploiement cloud multi-provider
- Pipelines CI/CD automatisés
- Monitoring proactif — uptime garanti 99.9 %

**Technologies :** AWS · GCP · Azure · Docker · Kubernetes · Terraform · GitHub Actions

### 🤖 IA & Machine Learning
Automatisation intelligente et modèles prédictifs.
- Modèles prédictifs et NLP
- Vision par ordinateur
- Automatisation de processus métier

**Technologies :** Python · TensorFlow · PyTorch · OpenAI API · LangChain · HuggingFace

---

## Design System

Le fichier `styles.css` définit l'ensemble du design system NovaCore.

### Palette de couleurs

| Variable | Valeur | Usage |
|---|---|---|
| `--bg` | `#080810` | Fond principal |
| `--surface` | `#0F0F1A` | Surfaces (cartes, panels) |
| `--surface2` | `#161625` | Surfaces secondaires |
| `--accent` | `#00E5C8` | Couleur d'accentuation principale (cyan) |
| `--accent2` | `#FF5F4B` | Accentuation secondaire (rouge-orange) |
| `--accent3` | `#7C6FFD` | Accentuation tertiaire (violet) |
| `--text` | `#EEF0FF` | Texte principal |
| `--muted` | `#8888AA` | Texte secondaire / grisé |

### Typographie
- **Police** : [Roboto](https://fonts.google.com/specimen/Roboto) (Google Fonts)
- **Graisses utilisées** : 300, 400, 500, 700

### Composants principaux
- `.btn-primary` / `.btn-secondary` — Boutons d'action
- `.hero-badge` — Badge animé avec pulsation
- `.feature-card` — Carte d'expertise cliquable avec hover animé
- `.feat-section` — Section de détail avec ancre de navigation

---

## JavaScript (`main.js`)

| Fonction | Description |
|---|---|
| `toggleMenu()` | Ouvre/ferme le menu de navigation mobile |
| `submitLandingForm(e)` | Gère la soumission du formulaire produit |
| `submitContactForm(e)` | Gère la soumission du formulaire de contact |
| Scroll smooth | Navigation fluide vers les ancres internes (`#expertises`, `#logiciel`, `#web`, `#cloud`, `#ia`) |
| Fermeture menu | Ferme le menu mobile au clic en dehors |

---

## Valeurs NovaCore

- **Orientés résultats** — Chaque projet est piloté par des indicateurs clairs et mesurables.
- **Sécurité par conception** — La sécurité est intégrée dès la première ligne de code.
- **Partenariat long terme** — Nous accompagnons nos clients bien au-delà de la livraison.

---

## Indicateurs de qualité

| Métrique | Valeur |
|---|---|
| Réponse initiale | < 48 h |
| Uptime garanti | 99.9 % |
| Couverture de tests | 90 %+ |
| Satisfaction client | 4.9 / 5 |

---

## Utilisation locale

Aucune dépendance externe ni étape de build requise. Le projet utilise uniquement du HTML, CSS et JavaScript natifs.

```bash
# Cloner le projet
git clone <url-du-repo>
cd novacore

# Ouvrir directement dans un navigateur
open index.html

# Ou démarrer un serveur local simple (recommandé)
npx serve .
# ou
python3 -m http.server 8000
```

Le site sera accessible à l'adresse `http://localhost:8000`.

---

## Contact

Pour toute demande de projet ou d'information, rendez-vous sur la page [Nous Contacter](contact.html) ou visitez [novacore.com](https://novacore.com).

---

*NovaCore © 2017–2025 — Abidjan, Côte d'Ivoire*
