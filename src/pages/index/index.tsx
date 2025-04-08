import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button } from '@taroify/core'
import { request } from '@/api'
import { useAuthReset, useAuthStore, useUserStore } from '@/models'
import router from '@/router'
import './index.scss'

export default function Index() {
  const setToken = useUserStore.use.setToken()
  const redirect = useAuthStore.use.redirect()
  const authReset = useAuthReset
  debugger
  console.log('🚀 ~ Index ~ authReset:', useAuthReset)
  useLoad(() => {
    console.log('%crequest: ', 'color: MidnightBlue; background: Aquamarine;', request.service)
  })
  const login = async () => {
    try {
      const res = await request('/min/user/login', {
        method: 'POST',
      })
      setToken(res.data.jeecg_token)
      if (redirect?.url) {
        if (redirect.tab) {
          await router.switchTab({
            url: redirect.url,
            success: authReset,
          })
        }
        else {
          await router.redirectTo({
            url: redirect.url,
            success: authReset,
          })
        }
      }
      else {
        await router.switchTab({ url: '/pages/home/index' })
      }
    }
    catch (error) {
      console.error('登录失败:', error)
    }
  }

  return (
    <View className="flex flex-1 flex-col items-center justify-center gap-2 h-full">
      <Button color="primary" onClick={login}>
        Go Home
      </Button>
    </View>
  )
}
