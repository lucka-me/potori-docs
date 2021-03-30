# Account
Potori doesn't contain its own account system, but it's required to link your Google account to fetch the mails and extract the information.

## Permissions
Potori requires the following permissions:

### Gmail: Read Only
***REQUIRED***

This is the core permission on which Potori is dependent. Potori will fetch mails related to Ingress Portal nominations, then extract information from them.

The mail IDs will be saved alongside the extracted information and used to avoid fetching and processing the mails unnecessarily. The raw content of mails will not be saved.

### Google Drive: File
***RECOMMENDED***

Potori can upload your nomination data to your Google Drive and sync the data between devices with Google Drive.

The data will be stored in a private app folder where only Potori can access.