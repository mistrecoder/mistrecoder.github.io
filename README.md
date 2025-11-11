# Portfolio - Mehdi Rejeb Kaabia

Un portfolio professionnel moderne et responsive pour Mehdi Rejeb Kaabia, futur ingénieur en télécommunications passionné par l'IoT, l'IA et la 5G.

## 🌟 Fonctionnalités

- **Design Moderne** : Interface épurée avec animations fluides
- **100% Responsive** : Optimisé pour mobile, tablette et desktop
- **Performance** : Chargement rapide et optimisations SEO
- **Animations** : Effets visuels avec AOS.js et CSS personnalisé
- **Navigation Fluide** : Scroll smooth et menu responsive
- **Section Projets** : Cartes animées avec système de filtrage
- **Formulaire de Contact** : Intégration prête pour Formspree ou EmailJS

## 🎨 Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework** : Tailwind CSS
- **Animations** : AOS.js (Animate On Scroll)
- **Icônes** : Font Awesome 6
- **Polices** : Inter & Poppins (Google Fonts)
- **Déploiement** : GitHub Pages

## 🚀 Installation & Utilisation

### Méthode 1 : Déploiement Direct sur GitHub Pages

1. **Fork ce repository**
   ```bash
   # Cliquez sur le bouton "Fork" en haut à droite
   ```

2. **Activez GitHub Pages**
   - Allez dans Settings → Pages
   - Source : Deploy from a branch
   - Branch : main / (root)
   - Cliquez sur Save

3. **Personnalisez votre portfolio**
   - Modifiez `index.html` avec vos informations
   - Remplacez `me.png` par votre photo de profil
   - Mettez à jour les liens vers vos projets

### Méthode 2 : Développement Local

1. **Clonez le repository**
   ```bash
   git clone https://github.com/mistrecoder/mistrecoder.github.io.git
   cd mistrecoder.github.io
   ```

2. **Lancez un serveur local**
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Avec Python 2
   python -m SimpleHTTPServer 8000
   
   # Avec Node.js
   npx http-server
   ```

3. **Ouvrez votre navigateur**
   ```
   http://localhost:8000
   ```

## 📁 Structure du Projet

```
.
├── index.html          # Page principale du portfolio
├── main.js            # JavaScript principal avec animations
├── me.png             # Photo de profil (à remplacer)
├── .github/
│   └── workflows/
│       └── deploy.yml # Workflow GitHub Actions
├── design.md          # Documentation du design
├── structure.json     # Structure du projet
└── README.md          # Ce fichier
```

## 🎨 Personnalisation

### 1. Informations Personnelles
Modifiez les sections suivantes dans `index.html` :
- **Hero Section** : Nom, titre et description
- **Section About** : Biographie et informations personnelles
- **Section Contact** : Email et coordonnées

### 2. Projets
Mettez à jour le tableau `projectsData` dans `main.js` avec vos propres projets :

```javascript
{
    id: 1,
    title: "Nom du Projet",
    category: "iot", // iot, ai, telecom
    description: "Description du projet",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/username/repo",
    demo: "https://demo-link.com",
    image: "url-image-ou-placeholder"
}
```

### 3. Compétences
Ajustez les niveaux de compétence dans la section "Compétences" de `index.html`.

### 4. Couleurs et Design
Modifiez les variables CSS dans la section `<style>` de `index.html` :

```css
:root {
    --primary-blue: #0044cc;
    --light-gray: #f5f5f5;
    --dark-text: #1b1b1b;
}
```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 640px
- **Tablette** : 640px - 1024px  
- **Desktop** : > 1024px

## 🚀 Déploiement

### GitHub Pages (Recommandé)

Le site sera automatiquement déployé à l'adresse :
```
https://mistrecoder.github.io
```

### Autres options de déploiement

- **Netlify** : Glisser-déposer le dossier
- **Vercel** : Importer depuis GitHub
- **Firebase Hosting** : CLI Firebase

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Ouvrir une issue pour des suggestions
2. Soumettre une pull request
3. Partager vos améliorations

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

## 📞 Contact

**Mehdi Rejeb Kaabia**
- Email : mehdi.rejebkaabia@etudiant-enit.utm.tn
- LinkedIn : [linkedin.com/in/mehdi-rejeb-534661181](https://linkedin.com/in/mehdi-rejeb-534661181)
- GitHub : [github.com/mistrecoder](https://github.com/mistrecoder)

---

⭐ Si ce portfolio vous a aidé, n'hésitez pas à mettre une étoile !