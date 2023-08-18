(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{760:function(a,n,s){"use strict";s.r(n);var t=s(5),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("说明")])]),a._v(" "),s("h2",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("p",[a._v("从http://nginx.org/download/上下载相应的版本(或者wget http://nginx.org/download/nginx-1.5.9.tar.gz直接在Linux上用命令下载)")]),a._v(" "),s("h2",{attrs:{id:"解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[a._v("#")]),a._v(" 解压")]),a._v(" "),s("p",[a._v("解压 tar -zxvf nginx-1.5.9.tar.gz")]),a._v(" "),s("p",[a._v("解压好后移至目录")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@instance-3lm099to nginx]# cd nginx-1.5.9/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("设置Nginx安装路径，如果没有指定，默认为/usr/local/nginx")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@instance-3lm099to nginx-1.14.0]# ./configure --prefix=/usr/local/nginx\nchecking for OS\n + Linux 3.10.0-862.3.2.el7.x86_64 x86_64\nchecking for C compiler ... not found\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("如果出现红色字体错误，需要执行下")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@instance-3lm099to nginx-1.14.0]# yum -y install gcc gcc-c++ autoconf automake make\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),s("p",[a._v("make （make的过程是把各种语言写的源码文件，变成可执行文件和各种库文件）")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("make install （make install是把这些编译出来的可执行文件和库文件复制到合适的地方）")]),a._v(" "),s("h1",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),s("p",[a._v("参数 -c 指定了配置文件的路径，如果不加的话就是使用默认的配置文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@instance-3lm099to nginx-1.14.0]# /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h1",{attrs:{id:"停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[a._v("#")]),a._v(" 停止** **")]),a._v(" "),s("p",[a._v("停止操作是通过向nginx进程发送信号（什么是信号请参阅linux文 章）来进行的")]),a._v(" "),s("h3",{attrs:{id:"查询nginx主进程号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询nginx主进程号"}},[a._v("#")]),a._v(" 查询nginx主进程号")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ps -ef | grep nginx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在进程列表里 面找master进程，它的编号就是主进程号了。")]),a._v(" "),s("h3",{attrs:{id:"发送信号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送信号"}},[a._v("#")]),a._v(" 发送信号")]),a._v(" "),s("h4",{attrs:{id:"从容停止nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从容停止nginx"}},[a._v("#")]),a._v(" 从容停止Nginx")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("kill -QUIT 主进程号\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"快速停止nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速停止nginx"}},[a._v("#")]),a._v(" 快速停止Nginx")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("kill -TERM 主进程号\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"强制停止nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制停止nginx"}},[a._v("#")]),a._v(" 强制停止Nginx")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pkill -9 nginx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("另外， 若在nginx.conf配置了pid文件存放路径则该文件存放的就是Nginx主进程号，如果没指定则放在nginx的logs目录下。有了pid文 件，我们就不用先查询Nginx的主进程号，而直接向Nginx发送信号了，命令如下：\nkill -信号类型 '/usr/nginx/logs/nginx.pid'")]),a._v(" "),s("h2",{attrs:{id:"平滑重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平滑重启"}},[a._v("#")]),a._v(" 平滑重启")]),a._v(" "),s("p",[a._v("如果更改了配置就要重启Nginx，要先关闭Nginx再打开？不是的，可以向Nginx 发送信号，平滑重启。\n平滑重启命令：\nkill -HUP 主进程号或进程号文件路径")]),a._v(" "),s("p",[a._v("或者使用")]),a._v(" "),s("p",[a._v("/usr/nginx/sbin/nginx -s reload")]),a._v(" "),s("p",[a._v("注意，修改了配置文件后最好先检查一下修改过的配置文件是否正 确，以免重启后Nginx出现错误影响服务器稳定运行。")]),a._v(" "),s("h2",{attrs:{id:"判断nginx配置是否正确命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断nginx配置是否正确命令"}},[a._v("#")]),a._v(" 判断Nginx配置是否正确命令")]),a._v(" "),s("p",[a._v("nginx -t -c /usr/nginx/conf/nginx.conf")]),a._v(" "),s("p",[a._v("或者")]),a._v(" "),s("p",[a._v("/usr/nginx/sbin/nginx -t")])])}),[],!1,null,null,null);n.default=e.exports}}]);