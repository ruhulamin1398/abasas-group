# Eagle-OJ安装指南

## 快速安装指南

* 安装Docker，推荐最新版
* 安装docker-compose，同样推荐安装最新版
* 运行`git clone https://github.com/Eagle-OJ/eagle-oj.git`，并进入eagle-oj文件夹
* 编辑`docker-compose.yml`，修改数据库密码，绑定域名等，如何编辑直接查看文件里面的注释
* 运行`docker-compose up -d`
* 等待片刻，访问域名即可

## 指南

### 如何开启SSL

将`docker-compose.yml`中关于SSL的注释取消掉，然后去申请证书，放在ssl文件夹中。需要提供`crt`和`key`格式的文件。假设你的域名为`www.example.com`，则两个文件分别为`www.example.com.crt`，`www.example.com.key`，之后重启容器即可。

## 讨论

如果你有疑问或者更好的意见，可以直接发布issue或者加入我们的QQ群（715215353）进行讨论。