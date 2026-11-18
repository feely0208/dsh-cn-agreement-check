# 用户协议红线审查（dsh-cn-agreement-check）

**什么时候用**：用户协议/隐私政策/服务条款上线前审查。用户会说：「这个协议有没有合规风险」「帮我查一下条款有没有坑」。

## 怎么用

```bash
<cli 路径> --root <目录>       # 检查协议文本目录
<cli 路径> --demo              # 内置样本
<cli 路径> --list-rules        # 判据与出处
<cli 路径> --html report.html  # HTML 报告
```

## 它查什么（7 条）

| 规则 | 查什么 | 级别 |
|---|---|---|
| AGR-EXPLAIN-RIGHTS | 「最终解释权」单方解释条款 | high |
| AGR-LIABILITY-EXEMPT | 「概不负责」完全免责 | high |
| AGR-PI-BUNDLE | 不同意就无法注册（捆绑授权） | high |
| AGR-AUTO-RENEW-NOTICE | 自动续费无提醒/取消途径 | high |
| AGR-JURISDICTION | 商家所在地法院管辖单方约定 | medium |
| AGR-UNILATERAL-TERMINATE | 单方修改/终止无通知 | medium |
| AGR-TERMINATE-NO-REFUND | 终止服务无余额退还 | medium |

出处：消保法 25/26/53 条、个保法 16 条、民法典 496/497 条、网络交易监督管理办法 18 条、合同违法行为监督处理办法 11 条、民诉法解释 31 条。

## 怎么读结果

命中 = 该条款需要逐字核对（演示样本是故意写满红线的对照品）——改写措辞、加显著提示、拆分授权即可消除。
