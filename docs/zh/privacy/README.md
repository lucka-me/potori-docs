---
sidebar: auto
---

# 隐私
简而言之，Potori不会收集您的任何数据。您的所有数据将在本地应用内进行处理。原始邮件数据将不会被保留，解析的数据将保存在本地。您也可以将数据同步至Google Drive中（只有Potori能够访问的位置），它们完全处于您的控制之下。

Potori对于从Google API处获取的信息的使用和传输符合[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes)的相关要求，包括有限使用的要求。

我们尽力设法保护您的隐私，如果您有任何建议，欢迎[提出议题](https://github.com/lucka-me/potori/issues)或[与我们联系](../contribute#贡献者)。

## 数据使用
Potori将会使用您的以下数据：

- 与申请Portal有关的邮件  
  Potori仅会获取和分析确认邮件、通过邮件和拒绝邮件。
- 邮件的内容
  - 邮件ID  
    如果您保存或上传数据文件，邮件ID可用于避免重复获取和处理相同的邮件。
  - 标题  
    获取能量塔名称。
  - 时间戳  
    作为提名的确认/接受/拒绝时间。
  - 照片地址  
    在应用中显示照片。  
    成一个短UID，作为能量塔ID以及在邮件中识别它们。  
    短UID将被用于查询Brainstorming数据库以及生成Brainstorming水表墙的链接。
  - Intel Map地址  
    获取坐标并在地图中显示标记。
  - 邮件体  
    获取拒绝原因。