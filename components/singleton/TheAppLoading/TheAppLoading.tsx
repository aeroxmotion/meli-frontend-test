import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useKeepCallback } from '../../../hooks/useKeepCallback'
import { useOnMount } from '../../../hooks/useOnMount'

NProgress.configure({
  showSpinner: false
})

const TheAppLoading: React.FC = () => {
  const router = useRouter()

  const startLoading = useKeepCallback(() => {
    NProgress.start()
  })

  const endLoading = useKeepCallback(() => {
    NProgress.done()
  })

  useOnMount(() => {
    const routerLoadingEvents: Record<string, () => void> = {
      routeChangeStart: startLoading,
      routeChangeComplete: endLoading,
      routeChangeError: endLoading
    }

    const handleLoadingEvents = (mode: 'on' | 'off') => {
      for (const routerLoadingEvent of Object.keys(routerLoadingEvents)) {
        router.events[mode](
          routerLoadingEvent,
          routerLoadingEvents[routerLoadingEvent]
        )
      }
    }

    handleLoadingEvents('on')

    return () => {
      handleLoadingEvents('off')
    }
  })

  return (
    <Head>
      <link rel="stylesheet" href="/assets/css/nprogress.css" />
    </Head>
  )
}

export default TheAppLoading
