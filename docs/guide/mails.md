# Process Mails
For those mails related to nominations, the subjects and contents are generated from several templates. Potori uses some queries to fetch mails and some keywords to extract informations.

::: warning
The following quries and keywords may be outdated, the latest ones used in Potori are available in [his repository](https://github.com/lucka-me/potori-umi) with related resourced.
:::

## Fetch Mails
Potori will fetch mails with the following queries:

- **Confirmation Mails**
  - `{from:ingress-support@nianticlabs.com from:ingress-support@google.com} {subject:"Portal submission confirmation" subject:"Ingress Portal Submitted"} -edit -photo`
  - `from:nominations@portals.ingress.com subject:("能量塔提交確認" OR "Portal申請の受領確認" OR "Portal submission confirmation") -AP`
- **Acceptance Mails**
  - `{from:ingress-support@nianticlabs.com from:ingress-support@google.com} {subject:"Portal review complete" subject:"Ingress Portal Live"} {"now available" "will be enabled"} -edit -photo`
  - `from:nominations@portals.ingress.com Intel Map AP`
- **Rejection Mails**
  - `{from:ingress-support@nianticlabs.com from:ingress-support@google.com} subject:{"Portal review complete" "Ingress Portal Rejected" "Ingress Portal Duplicate"} {reviewed duplicate} -edit -photo -AP`
  - `from:nominations@portals.ingress.com subject:("能量塔審查完畢" OR "Portal審査の完了" OR "Portal review complete") -AP`

::: tip
You can also create rules with these queries to label your mails automatically in Gmail.
:::
::: warning
Ingress Prime uses localized templates, which makes it difficult to find the corrent filters. We are working on it.
:::

## Extract Informations
The contents of mails will be used to extract information of the nomination:

- Subject: Title of nomination
- Body: Image (and ID), location and reject reasons

## Manually Match
For some result mails sent in late 2018, the image links are missing. Potori uses image link to generate a unique ID for each nomination, so you have to match the conformation mail manually. Tap the match button in Dashboard to match if it appears.