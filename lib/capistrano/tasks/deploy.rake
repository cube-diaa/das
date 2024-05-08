namespace :deploy do
  desc 'run pnpm install'
  task :install do
    on roles(:app) do
      within release_path do
        execute :pnpm, :install
      end
    end
  end

  desc 'run pnpm build'
  task :build do
    on roles(:app) do
      within release_path do
        execute :pnpm, :next, :build
      end
    end
  end

  desc 'restart application'
  task :restart do
    on roles(:app) do
      within release_path do
        execute :pnpm, :run, 'pm2-delete-dac'
        execute :pnpm, :run, 'pm2-start-dac'
      end
    end
  end
end

after 'deploy:updated', 'deploy:install'
after 'deploy:publishing', 'deploy:build'
after 'deploy:publishing', 'deploy:restart'