source "https://rubygems.org"
#你好！这是您管理运行的Jekyll版本的地方。
#如果要使用其他版本，请在下面更改，保存
#文件并运行“bundle install”。使用“bundle exec”运行Jekyll，如下所示：
#
#     bundle exec jekyll serve
#
#这将有助于确保运行正确的Jekyll版本。
#如果您想使用GitHub页面，请删除上面的“gem”jekyll“”，然后
#取消注释下面的行。若要升级，请运行“bundle update github pages”。
gem "github-pages",group: :jekyll_plugins
#如果你有任何插件，把它们放在这里！
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
end

#Windows和JRuby不包括zoneinfo文件，所以要捆绑tzinfo数据gem以及相关联的库。
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

#监视Windows目录的性能提升程序
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

