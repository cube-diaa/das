module.exports = {
  apps: [
    {
      name: 'DAC',
      exec_mode: 'cluster',
      instances: '1',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env_prod: {
        APP_ENV: 'prod'
      }
    }
  ]
}