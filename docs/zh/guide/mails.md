# 处理邮件
与能量塔提名相关的邮件的主题和内容由一些模版产生，一些关键词可用于筛选邮件和提取信息。

## 获取邮件
Potori将利用以下筛选器获取邮件：

- **确认邮件**
  - `from:ingress-support@nianticlabs.com Portal submission confirmation -edit -photo`
  - `from:nominations@portals.ingress.com subject:("能量塔提交確認" OR "Portal申請の受領確認" OR "Portal submission confirmation") -AP`
- **批准邮件**
  - `from:ingress-support@nianticlabs.com Portal review complete now available -edit -photo`
  - `from:nominations@portals.ingress.com Intel Map AP`
- **拒绝邮件**
  - `from:ingress-support@nianticlabs.com Portal review complete reviewed -edit -photo`
  - `from:nominations@portals.ingress.com subject:("能量塔審查完畢" OR "Portal審査の完了" OR "Portal review complete") -AP`

::: tip
您可以使用这些筛选器在您的Gmail中创建规则以自动分类您的邮件。
:::
::: warning
Ingress Prime使用了本地化的模版，这给确定筛选器带来了挑战，我们正在尝试解决这个问题。
:::

## 提取信息
邮件内容将被用于提取提名信息，详情请见[数据使用](../privacy/#数据使用)部分。

对于拒绝邮件，有几种不同的模版分别对应不同的拒绝原因，可以通过以下关键词来识别：

| 原因 | 关键词
| :--- | :---
| 重复 | `duplicate of either an existing Portal`
| 过近 | `too close to an existing Portal` `能量塔過近`
| 未指明 | （不匹配以上任何关键词）

::: warning
Ingress Prime使用了本地化的模版，这给确定关键词带来了挑战，我们正在尝试解决这个问题。
:::


# Process Mails
与能量塔提名相关的邮件的主题和内容由一些模版产生，Potori使用一些查询语句来获取邮件，并使用关键词提取信息。

::: warning
以下查询语句和关键词可能不是最新的。Potori使用的最新版本以及相关资源在[这个仓库中](https://github.com/lucka-me/potori-umi)。
:::

## 获取邮件
Potori将利用以下查询语句获取邮件：

- **确认邮件**
  - `{from:ingress-support@nianticlabs.com from:ingress-support@google.com} {subject:"Portal submission confirmation" subject:"Ingress Portal Submitted"} -edit -photo`
  - `from:nominations@portals.ingress.com subject:("能量塔提交確認" OR "Portal申請の受領確認" OR "Portal submission confirmation") -AP`
- **批准邮件**
  - `{from:ingress-support@nianticlabs.com from:ingress-support@google.com} {subject:"Portal review complete" subject:"Ingress Portal Live"} {"now available" "will be enabled"} -edit -photo`
  - `from:nominations@portals.ingress.com Intel Map AP`
- **拒绝邮件**
  - `{from:ingress-support@nianticlabs.com from:ingress-support@google.com} subject:{"Portal review complete" "Ingress Portal Rejected" "Ingress Portal Duplicate"} {reviewed duplicate} -edit -photo -AP`
  - `from:nominations@portals.ingress.com subject:("能量塔審查完畢" OR "Portal審査の完了" OR "Portal review complete") -AP`

::: tip
您可以使用这些查询语句在您的Gmail中创建规则以自动分类您的邮件。
:::
::: warning
Ingress Prime使用了本地化的模版，这给确定筛选器带来了挑战，我们正在尝试解决这个问题。
:::

## 提取信息
邮件内容会被用于提取信息：

- 邮件标题：提名标题
- 邮件体：图片（和ID）、位置和拒绝理由

## 手动匹配
2018年发出的部分部分邮件缺少了图片链接。Potori要使用图片链接为每个提名生成唯一ID，因此您必须手动匹配确认邮件。如果匹配按钮出现在仪表盘中，轻触它以开始匹配。