import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9htg8iyy',
    dataset: 'dev',

  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId:"pykfruo7knhoz2pfnpv6824i"
  },
  app:{
    id:"pykfruo7knhoz2pfnpv6824i",
 organizationId: 'oI3Nv0w6K',
  }
})
