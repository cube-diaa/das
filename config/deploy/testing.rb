# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

host = '161.35.33.255'
user = 'deployer'

roles = "#{user}@#{host}"

set :branch, 'develop'
set :stage, :prod

set :deploy_user, user
set :deploy_to, '/var/www/dac-fe'

role :app, roles
role :web, roles

set :linked_files, %w(
  .env .env.production pm2.prod.config.js
)

set :pty,  false

set :keep_releases, 3