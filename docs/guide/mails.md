# Process Mails
For those mails related to nominations, the subjects and contents are generated from several templates, some keywords are used to filter mails and extract informations.

## Obtain Mails
Potori will obtain mails with the following filters:

- **Confirmation Mails**
  - `from:ingress-support@nianticlabs.com Portal submission confirmation -edit -photo`
  - `from:nominations@portals.ingress.com subject:("能量塔提交確認" OR "Portal申請の受領確認" OR "Portal submission confirmation") -AP`
- **Acceptance Mails**
  - `from:ingress-support@nianticlabs.com Portal review complete now available -edit -photo`
  - `from:nominations@portals.ingress.com Intel Map AP`
- **Rejection Mails**
  - `from:ingress-support@nianticlabs.com Portal review complete reviewed -edit -photo`
  - `from:nominations@portals.ingress.com subject:("能量塔審查完畢" OR "Portal審査の完了" OR "Portal review complete") -AP`

::: tip
You can also create rules with these filter to label your mails automatically in Gmail.
:::
::: warning
Ingress Prime uses localized templates, which makes it difficult to find the corrent filters. We are working on it.
:::

## Extract Informations
The contents of mails will be used to extract information of the nomination, browse [Data Usage](../privacy/#Data_Usage) for more details.

As for the rejection mails, there are several templates for each rejection reason, and each one colud be identified by matching the keywords:

| Reason | Keywords
| :--- | :---
| Duplicated | `duplicate of either an existing Portal`
| Too Close | `too close to an existing Portal` `能量塔過近`
| Undeclared | (Match neither of the keywords above)

::: warning
Ingress Prime uses localized templates, which makes it difficult to find the corrent keywords. We are working on it.
:::