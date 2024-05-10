import { unref } from 'vue'
import { buildProps } from '@element-plus/utils'
import { useTimeout } from '../use-timeout'

import type { ExtractPropTypes, ToRefs } from 'vue'


/**
 * 来源element-plus
 * 下拉菜单：当用户点击按钮或聚焦元素时，下拉菜单延迟显示，给予用户足够的时间移动鼠标，避免菜单立即关闭。同样，当焦点移开时，菜单延迟一段时间后再隐藏，增强可操作性。

模态框/对话框：在用户触发某个操作（如点击按钮）后，延迟显示模态框，可以让用户看到他们触发的动作，增加反馈感。

加载提示：在数据加载开始时，延迟显示加载指示器，避免短暂闪烁，提升视觉流畅性。

表单验证：使用v-model.lazy配合延迟处理，只有在用户停止输入一段时间后才进行表单验证，减少不必要的实时反馈，降低性能开销。

通知和提示：通知消息或提示信息可以延迟出现，允许用户完成当前操作后再提醒他们，避免打断当前流程。

搜索建议：在用户输入时延迟加载搜索建议，减少不必要的网络请求，提高响应速度。

动画过渡：在组件切换或状态变化时，延迟执行动画，使得过渡更加自然。
 */
export const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
} as const)

export type UseDelayedToggleProps = {
  open: (event?: Event) => void
  close: (event?: Event) => void
} & ToRefs<ExtractPropTypes<typeof useDelayedToggleProps>>

export const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close,
}: UseDelayedToggleProps) => {
  const { registerTimeout } = useTimeout()

  const onOpen = (event?: Event) => {
    registerTimeout(() => {
      open(event)
    }, unref(showAfter))
  }

  const onClose = (event?: Event) => {
    registerTimeout(() => {
      close(event)
    }, unref(hideAfter))
  }

  return {
    onOpen,
    onClose,
  }
}
