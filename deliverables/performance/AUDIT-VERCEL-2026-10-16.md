# Audit du site déployé — 16 octobre 2026

Site : https://crochet-blog-26tq.vercel.app . Chrome headless, Lighthouse 13.5.0, profil mobile simulé par défaut. Mesures successives sur les URLs publiques avant puis après déploiement du commit add896a. Ces tests réseau sur le site déployé restent des mesures de laboratoire, pas des données réelles des visiteurs. Un passage par état : ne pas interpréter un faible écart comme un gain certain.

| Page | Performance avant / après | LCP avant / après | CLS avant / après | TBT avant / après |
| --- | --- | --- | --- | --- |
| Accueil | 92 / 93 | 2,9 / 2,7 s | 0 / 0 | 50 / 90 ms |
| Guide débutant | 77 / 99 | 2,1 / 2,1 s | 0,558 / 0 | 10 / 0 ms |
| Boutique | 100 / 99 | 1,5 / 1,8 s | 0,005 / 0 | 0 / 10 ms |

Accessibilité automatisée et bonnes pratiques : 100 sur les trois pages après modification. SEO automatisé : 100 pour accueil/guide, 69 pour la boutique, dont le `noindex, follow` reste volontaire. Les variations de temps d'exécution et réseau ne sont pas éliminées par ce protocole court.

## Problème confirmé et corrigé

Lighthouse attribue le CLS 0,558 du guide au pied de page, visible pendant la réponse partielle puis repoussé lorsque le contenu arrive. La zone principale réserve désormais au moins la hauteur disponible du premier écran (`min-height: calc(100svh - 96px)`). Le pied de page reste hors de cette zone lors du remplacement du contenu de chargement. CLS mesuré à 0 après déploiement ; contrôle local supplémentaire sur réseau ralenti : aucun décalage enregistré.

## Autres optimisations

- L'affiche vidéo initialement demandée immédiatement est remplacée par un aperçu responsive `next/image` chargé en différé. Dans la visite initiale de l'accueil après déploiement, le rapport réseau Lighthouse ne contient plus de demande de poster.
- Le lecteur vidéo et ses sources ne sont montés qu'après le clic explicite sur « Play film ». Lecture, pause et contrôles natifs conservés ; démarrage testé dans Chrome. Aucun téléchargement vidéo avant interaction.
- Le conteneur réserve un ratio 16:9 avant et après clic. Hauteur mesurée identique au pixel près lors du passage de l'aperçu au lecteur.
- Attributs `sizes` adaptés aux largeurs réelles des fiches sur les grilles 2/3/4 colonnes, et aux illustrations des articles à côté du sommaire sur tablette. Aucune baisse de qualité, suppression de geste ou retouche de fil.
- Dernière passe : nom accessible du bouton « Play film » aligné sur son texte visible ; numéros des cartes inclus dans le libellé du lien pour lever le diagnostic « label-content-name-mismatch ». Ces diagnostics étaient présents malgré un score global d'accessibilité de 100.

## Vérifications

ESLint complet et compilation de production réussis. Tests Chrome locaux : lecture effective au clic (`readyState >= 2`, `paused === false`), aucune demande de média vidéo lors de l'ouverture, stabilité du lecteur, absence d'erreur JavaScript, absence de débordement à 320/768/1024/1440 px sur les trois pages. Sur le guide en réseau simulé à 150 ms de latence et 200 000 octets/s : aucun décalage enregistré après correction.

Valeurs numériques, dates exactes des passages et versions : `vercel-2026-10-16/metrics.json`. Les rapports Lighthouse complets sont conservés dans `/tmp/crochet-vercel-audit` pendant cette session. Outils installés hors du projet dans `/tmp/crochet-performance-tools` : aucune dépendance d'audit ajoutée au site.
