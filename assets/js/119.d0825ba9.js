(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{482:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#linux%E5%AE%89%E8%A3%85"}},[a._v("Linux安装")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%AE%89%E8%A3%85rabbitmq"}},[a._v("安装RabbitMQ")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#web%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2%E5%8F%8A%E6%8E%88%E6%9D%83%E6%93%8D%E4%BD%9C"}},[a._v("Web管理界面及授权操作")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#docker-%E5%AE%89%E8%A3%85"}},[a._v("Docker 安装")])])]),a._v(" "),s("h2",{attrs:{id:"linux安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[a._v("#")]),a._v(" Linux安装")]),a._v(" "),s("h3",{attrs:{id:"安装rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装rabbitmq"}},[a._v("#")]),a._v(" 安装RabbitMQ")]),a._v(" "),s("p",[s("strong",[a._v("1、下载")])]),a._v(" "),s("p",[a._v("官网下载地址："),s("a",{attrs:{href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.rabbitmq.com/download.html"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("这里我们选择的版本号（注意这两版本要求）")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("rabbitmq-server-3.8.8-1.el7.noarch.rpm")]),a._v(" "),s("p",[a._v("GitHub："),s("a",{attrs:{href:"https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.8.8",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.8.8"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("加载下载："),s("a",{attrs:{href:"https://packagecloud.io/rabbitmq/rabbitmq-server/packages/el/7/rabbitmq-server-3.8.8-1.el7.noarch.rpm",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://packagecloud.io/rabbitmq/rabbitmq-server/packages/el/7/rabbitmq-server-3.8.8-1.el7.noarch.rpm"),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[a._v("erlang-21.3.8.21-1.el7.x86_64.rpm")]),a._v(" "),s("p",[a._v("官网：https://www.erlang-solutions.com/downloads/")]),a._v(" "),s("p",[a._v("加速："),s("a",{attrs:{href:"https://packagecloud.io/rabbitmq/erlang/packages/el/7/erlang-21.3.8.21-1.el7.x86_64.rpm",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://packagecloud.io/rabbitmq/erlang/packages/el/7/erlang-21.3.8.21-1.el7.x86_64.rpm"),s("OutboundLink")],1)])])]),a._v(" "),s("p",[a._v("Red Hat 8, CentOS 8 和 modern Fedora 版本，把 “el7” 替换成 “el8”")]),a._v(" "),s("p",[s("strong",[a._v("2、安装")])]),a._v(" "),s("p",[a._v("上传到 "),s("code",[a._v("/usr/local/software")]),a._v(" 目录下(如果没有 software 需要自己创建)")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ivh")]),a._v(" erlang-21.3.8.21-1.el7.x86_64.rpm\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" socat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ivh")]),a._v(" rabbitmq-server-3.8.8-1.el7.noarch.rpm\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("strong",[a._v("3、启动")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动服务")]),a._v("\nsystemctl start rabbitmq-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看服务状态")]),a._v("\nsystemctl status rabbitmq-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开机自启动")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止服务")]),a._v("\nsystemctl stop rabbitmq-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启服务")]),a._v("\nsystemctl restart rabbitmq-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"web管理界面及授权操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web管理界面及授权操作"}},[a._v("#")]),a._v(" Web管理界面及授权操作")]),a._v(" "),s("p",[s("strong",[a._v("1、安装")])]),a._v(" "),s("p",[a._v("默认情况下，是没有安装web端的客户端插件，需要安装才可以生效")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("rabbitmq-plugins "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_management\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("安装完毕以后，重启服务即可")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("systemctl restart rabbitmq-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("访问 http://42.192.149.71:15672 ，用默认账号密码(guest)登录，出现权限问题")]),a._v(" "),s("p",[a._v("默认情况只能在 localhost 本机下访问，所以需要添加一个远程登录的用户")]),a._v(" "),s("p",[s("strong",[a._v("2、添加用户")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建账号和密码")]),a._v("\nrabbitmqctl add_user admin "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置用户角色")]),a._v("\nrabbitmqctl set_user_tags admin administrator\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为用户添加资源权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set_permissions [-p <vhostpath>] <user> <conf> <write> <read>")]),a._v("\nrabbitmqctl set_permissions "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/"')]),a._v(" admin "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加配置、写、读权限")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("用户级别：")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("administrator")]),a._v("：可以登录控制台、查看所有信息、可以对 rabbitmq 进行管理")]),a._v(" "),s("li",[s("strong",[a._v("monitoring")]),a._v("：监控者 登录控制台，查看所有信息")]),a._v(" "),s("li",[s("strong",[a._v("policymaker")]),a._v("：策略制定者 登录控制台，指定策略")]),a._v(" "),s("li",[s("strong",[a._v("managment")]),a._v("：普通管理员 登录控制台")])]),a._v(" "),s("p",[a._v("再次登录，用 admin 用户")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("重置命令")])]),a._v(" "),s("p",[a._v("关闭应用的命令为：rabbitmqctl stop_app")]),a._v(" "),s("p",[a._v("清除的命令为：rabbitmqctl reset")]),a._v(" "),s("p",[a._v("重新启动命令为：rabbitmqctl start_app")]),a._v(" "),s("h2",{attrs:{id:"docker-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[a._v("#")]),a._v(" Docker 安装")]),a._v(" "),s("p",[a._v("官网："),s("a",{attrs:{href:"https://registry.hub.docker.com/_/rabbitmq/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://registry.hub.docker.com/_/rabbitmq/"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-id")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" myrabbit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_PASS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 rabbitmq:3-management\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);