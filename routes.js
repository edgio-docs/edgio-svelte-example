// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'

export default new Router()
  // Send requests to static assets in the build output folder `public`
  .static('public')

  // Send everything else to the App Shell
  .fallback(({ appShell }) => {
    appShell('public/index.html')
  })
