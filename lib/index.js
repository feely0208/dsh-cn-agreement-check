import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'cn-agreement-check',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/cn-agreement-check.md',
  binFile: 'bin/cli.mjs',
  description: "检查用户协议/隐私政策文本的条款级红线：单方最终解释权、不合理管辖约定、单方解除权、自动续费未提示、个人信息捆绑授权——每条带法规出处",
  whenToUse: "需要对「用户协议红线审查」相关项目做自查时使用。",
});
