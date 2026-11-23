# @deepwhale-cn/dsh-cn-agreement-check

检查用户协议/隐私政策文本的条款级红线：单方最终解释权、不合理管辖约定、单方解除权、自动续费未提示、个人信息捆绑授权——每条带法规出处（深鲸守护系列 · 基于 dsh-guard-core）

## 用法

```bash
npx @deepwhale-cn/dsh-cn-agreement-check --root <项目目录>
npx @deepwhale-cn/dsh-cn-agreement-check --demo        # 内置样本演示
npx @deepwhale-cn/dsh-cn-agreement-check --list-rules  # 判据与法规出处
npx @deepwhale-cn/dsh-cn-agreement-check --html r.html # HTML 报告
```

## 规则（7 条）

| 规则 | 查什么 | 级别 |
|---|---|---|
| AGR-EXPLAIN-RIGHTS | 「最终解释权归本平台」单方解释条款 | high |
| AGR-LIABILITY-EXEMPT | 「概不负责」完全免责表述 | high |
| AGR-PI-BUNDLE | 不同意全部条款就无法注册（捆绑授权） | high |
| AGR-AUTO-RENEW-NOTICE | 自动续费无提前提醒/取消途径 | high |
| AGR-JURISDICTION | 单方约定商家所在地法院管辖 | medium |
| AGR-UNILATERAL-TERMINATE | 单方修改/终止协议且无通知义务 | medium |
| AGR-TERMINATE-NO-REFUND | 终止服务无余额退还安排 | medium |

## 已知边界

- 只扫 .md/.txt/.html 文本（协议在图片里或需要登录才能看的，工具扫不到）
- 命中 ≠ 违规，是提示逐条核对；法条出处见 `--list-rules`

## 安装（DSH）

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-cn-agreement-check
```

也可以 `npm i @deepwhale-cn/dsh-cn-agreement-check`，或从本仓库直接 `dsh plugin install ./`。
