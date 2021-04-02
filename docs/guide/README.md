# Introduction

Potori is an Ingress nominations manager based on mails. It's core feature is fetching nomination-related mails from Gmail inbox, then extracting informations from them and finally display the information in the app.

## Compared with Niantic Wayfarer
Niantic Wayfarer also provides a [nomination manager](https://wayfarer.nianticlabs.com/nominations). As the official one, it has the freshest and most accurate information, and can edit title, description and additional description, also upgrade and withdraw nominations. In fact, when the official manager launched, Potori was facing the end of its life because it's lacking for feature and a third party app. Potori has some innate shortcomings like:

- It's totally based on mails, means:
  - We need mail samples of all types of mails to analyze the accurate queries to fetch the correct mails
  - Potori can't fetch the information that does not exist in mails, like location of Prime's nominations
  - There will be delay
  - Potori can't get or update nomination if mails are missing
- Unable to edit, upgrade or withdraw nominations
- Generate ID from image URL, it's still possible to be duplicated in different nominations
- Development is limited by developer's ability and free time

But after continiusly developing, Potori have something better than the official manager:

- Provides charts
- Provides reject reasons
- Provides review-related charts from player-made reviewing plugin called "Brainstorming"
- Provides better Progressive Web App experience, also native iOS / macOS app
- Provides a better UI (maybe)