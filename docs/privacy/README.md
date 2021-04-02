# Privacy
Briefly, Potori would not collect any of your data. All of your data will be handled inside the app locally. The raw data of mails will not be stored and the extracted data will be stored locally. You can also sync your data with your own Google Drive (where only Potori can access), they are totally under your control.

Potori's use and transfer to any other app of information received from Google APIs will adhere to [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes), including the Limited Use requirements.

We are trying to protect your privacy with my knowledge, if you have any suggestion, please feel free to [open an issue](https://github.com/lucka-me/potori/issues) or [contact us](../contribute#Contributors).

## Data Usage
Potori will use following data of yours:

- Mails related to Portal nomination  
  Potori will only obtain and analyze confirmation, acceptance and rejection mails.
- Content of the mails
  - Mail ID  
    Mail id will be used to avoid obtaining and processing the same mail every time.
  - Subject  
    Extract title of Portal.
  - Timestamp  
    Regarded as the confirmation / result time of the nomination.
  - Photo URL  
    Display photo in the app.  
    Generate a short UID as the ID of Portal and identify them in mails.  
    The short UID will be used to query Brainstorming data and generate link to Brainstorming watermeter.
  - Intel Map URL  
    Extract the coordinate and display a marker on the map.
  - Mail Body  
    Extract the rejection reason.