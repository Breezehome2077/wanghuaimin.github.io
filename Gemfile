source "https://rubygems.org"
#你好！这是您管理运行的Jekyll版本的地方。
#如果要使用其他版本，请在下面更改，保存
#文件并运行“bundle install”。使用“bundle exec”运行Jekyll，如下所示：
#
#     bundle exec jekyll serve(s)
#
#这将有助于确保运行正确的Jekyll版本。

#关于"pages-gem"的更多介绍：https://github.com/github/pages-gem

# gem “jekyll”
#如果您想使用GitHub页面，请注释掉上面的‘gem”jekyll“’，然后取消注释下面的行。
#若要升级，请运行“bundle update github-pages”（划重点，“github”和“pages”之间有“-”）。
gem "github-pages",group: :jekyll_plugins
#如果你有任何插件，把它们放在这里！
#关于github上各依赖插件的最新版本号，可以查看这里：https://pages.github.com/versions/
group :jekyll_plugins do
  gem "jekyll-feed","~> 0.15.1"
  gem "jekyll-paginate","~> 1.1.0"
  gem "jekyll-sitemap","~> 1.4.0"
end

#Windows和JRuby不包括zoneinfo文件，所以要捆绑tzinfo数据gem以及相关联的库。
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo","~> 1.2"
  gem "tzinfo-data"
end

#监视Windows目录的性能提升程序
gem "wdm","~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

#github依赖机器人提示出现一个漏洞，需要将kramdown升级到2.3.1版本及以上。
#删除gemfile文件，运行升级命令“bundle update github-pages”，然后上传即可。
#参考链接：https://talk.jekyllrb.com/t/how-to-update-jekyll-version-and-kramdown-on-github-pages/4908