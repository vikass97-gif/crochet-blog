# État du projet — Loop & Stitch

Mis à jour le 16 octobre 2026. Ce fichier sert de point de départ pour les prochaines séances : vérifier les changements depuis cette date avant de reprendre un chantier.

## Fonctionnel et vérifié

- Site Next.js déployé sur Vercel : accueil, À propos, journal, boutique et pages d'information légale.
- 11 articles avec sommaires, FAQ, métadonnées, illustrations et liens internes.
- 7 fiches de collection : roses, tournesols, bouquet, sac, granny squares, dessous de verre et panier.
- Recherche, filtres, tri et favoris conservés sur le navigateur ; accueil limité à quatre modèles récents par sélection.
- Liens entre les quatre guides de projets dédiés et leurs fiches ; recommandations de lecture choisies pour chacun des 11 articles.
- Vidéo locale à lecture volontaire : aperçu responsive différé, chargement du film au clic.
- Sitemap des pages publiques et articles ; aperçus boutique et pages légales provisoires en noindex.

## Produits et vente

Little Crochet Roses dispose d'un PDF gratuit v0.2 de huit pages, annoncé comme brouillon non testé. Les dimensions et quantités y sont des estimations. Les six autres fiches sont des concepts sans PDF disponible.

Aucun paiement, prix confirmé, compte client, commande ni livraison de PDF payant n'est implémenté. Aucun produit ne doit être présenté comme testé ou prêt à vendre sur la seule base des photos d'inspiration.

## Images : avancement réel

Des photos réelles sous licence sont intégrées pour le nœud coulant, la chaînette, la maille serrée et l'entrée dans la deuxième chaîne. Les nouveaux guides granny squares, dessous de verre et paniers ont des photos réelles de contexte. Les photos des produits sont des références d'inspiration, pas des résultats de nos patrons.

Il reste 90 emplacements d'illustrations SVG pédagogiques dans les articles, principalement des schémas et résumés. Une illustration générée de chaîne de début reste dans le guide de lecture des patrons ; les premières couvertures éditoriales nécessitent aussi une revue selon la préférence pour des photos réelles. Le site ne doit donc pas être décrit comme entièrement photographique. Le retournement entre deux rangs n'a pas encore de séquence photographique complète satisfaisante.

## Contrôle de cohérence du 16 octobre

28 pages parcourues, 1 247 liens internes examinés et 109 destinations de fichiers : aucun lien cassé ni ancre manquante. Les fichiers d'images référencés dans les sections existent. Les dimensions réelles des sept photos produits sont désormais enregistrées dans leurs données et utilisées sur les fiches, notamment le dessous de verre horizontal (1400×934).

Parcours Chrome mobile validé : guide de choix du premier projet → guide des dessous de verre → fiche correspondante → ajout aux favoris → catalogue filtré → rechargement et conservation → retrait du favori et état vide. Aucune erreur JavaScript observée. ESLint, compilation de production et contrôle de diff réussis.

Les mesures de performance sont documentées séparément dans `deliverables/performance/AUDIT-VERCEL-2026-10-16.md`. Elles ont été réalisées avant les derniers ajouts et ne constituent pas des mesures en continu.

## Décisions ou travaux encore nécessaires

1. Poursuivre la revue des illustrations techniques selon la règle « photos réelles et geste vérifiable ».
2. Finaliser et faire réaliser physiquement un premier patron ; confirmer les dimensions, quantités, instructions et photos de son vrai résultat.
3. Définir l'identité juridique de l'activité : nom du vendeur, pays, adresse et informations applicables. Le contact fourni est info@velioratv.com ; les pages légales restent provisoires.
4. Choisir les prix, le paiement et la livraison des PDF, puis tester le parcours de commande et l'assistance.
5. Acheter et connecter le domaine définitif. L'URL configurée est encore https://crochet-blog-26tq.vercel.app ; aucun outil de newsletter ou de statistiques visiteurs n'est configuré dans le code.

Ne pas repartir de zéro, ajouter un paiement fictif, inventer une validation physique ou prétendre garantir un classement Google. Conserver les sauvegardes préparées par l'utilisateur hors des commits de travail.
