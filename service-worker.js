/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4827cab885a7b3e54df3946ac86c1ec4"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/img_1.11f7c550.png",
    "revision": "11f7c550080c1470742bcdefecde6081"
  },
  {
    "url": "assets/img/img_1.79b43b1a.png",
    "revision": "79b43b1ab426b40130b11a24f8ed4ada"
  },
  {
    "url": "assets/img/img_1.a683b0e6.png",
    "revision": "a683b0e6c5ad3533f94dbae2b0504c59"
  },
  {
    "url": "assets/img/img_10.87d9db87.png",
    "revision": "87d9db877b72ee4f3b5e380a0845c2ef"
  },
  {
    "url": "assets/img/img_11.7bf58d1f.png",
    "revision": "7bf58d1f157072be785ce454a3003211"
  },
  {
    "url": "assets/img/img_12.7bf58d1f.png",
    "revision": "7bf58d1f157072be785ce454a3003211"
  },
  {
    "url": "assets/img/img_2.5eaf0ee0.png",
    "revision": "5eaf0ee03710373143ebb72c603ec3f2"
  },
  {
    "url": "assets/img/img_2.7a5694dc.png",
    "revision": "7a5694dc0cfd3bb1af47de7edab8f4f4"
  },
  {
    "url": "assets/img/img_3.53861e9b.png",
    "revision": "53861e9bfd9f4deefbc095ad66c9bbdb"
  },
  {
    "url": "assets/img/img_3.8c401a7b.png",
    "revision": "8c401a7b7672b5303013d66dad51ca4c"
  },
  {
    "url": "assets/img/img_4.0ad87396.png",
    "revision": "0ad8739680e11cc1a70a670ca6fd8214"
  },
  {
    "url": "assets/img/img_4.810576c7.png",
    "revision": "810576c7e43f0d2f54facd481e416758"
  },
  {
    "url": "assets/img/img_4.d4f644a9.png",
    "revision": "d4f644a98d05977283722c4363deb02a"
  },
  {
    "url": "assets/img/img_5.f57c7dc1.png",
    "revision": "f57c7dc140821b870106a40ce0d740fb"
  },
  {
    "url": "assets/img/img_6.863b1001.png",
    "revision": "863b100155028d031d28f256d8d0436f"
  },
  {
    "url": "assets/img/img_7.926b429e.png",
    "revision": "926b429eb3712de7067dcab766658dab"
  },
  {
    "url": "assets/img/img_7.fc9bf897.png",
    "revision": "fc9bf8974f2a30fd0c371e002ddb1ca0"
  },
  {
    "url": "assets/img/img_8.49f29063.png",
    "revision": "49f29063984bfe68459d060ffdcf3cc5"
  },
  {
    "url": "assets/img/img_9.628484fd.png",
    "revision": "628484fd0fe0fd3fee5d11f0e24a0452"
  },
  {
    "url": "assets/img/img.61353e43.png",
    "revision": "61353e4300455eb08d18b040af38b4d5"
  },
  {
    "url": "assets/img/img.7512d5e0.png",
    "revision": "7512d5e046bd22891e6ecb1fef279a81"
  },
  {
    "url": "assets/img/img.7886843a.png",
    "revision": "7886843aeecd316fa878649aa4c9ae0d"
  },
  {
    "url": "assets/js/1.e3352562.js",
    "revision": "235f14af27f33d405704fecb1267617a"
  },
  {
    "url": "assets/js/10.1848af92.js",
    "revision": "13e1794aeb904551d66a6ebdf5ba3ec8"
  },
  {
    "url": "assets/js/11.2e204191.js",
    "revision": "c771de39330064a6f72849d2b53a71ca"
  },
  {
    "url": "assets/js/12.636fff0f.js",
    "revision": "ac717787bfdd7276b1a349975c168191"
  },
  {
    "url": "assets/js/13.33344611.js",
    "revision": "45c4c8ea15356b1ef8bfe1f77a89d3ff"
  },
  {
    "url": "assets/js/14.9d8ed5a7.js",
    "revision": "c63da52d2593fcc712f126dfcddb934b"
  },
  {
    "url": "assets/js/15.f71ea93c.js",
    "revision": "1894ade1e0927fe5d0e041bb1ee84c42"
  },
  {
    "url": "assets/js/16.94115e94.js",
    "revision": "d5f4232c9e98d3ad958c1cedb0213235"
  },
  {
    "url": "assets/js/17.26561005.js",
    "revision": "4eb10068b584e6a340c44e408795bf6a"
  },
  {
    "url": "assets/js/18.f3d66127.js",
    "revision": "a7b17b616f498e6f732212b7f9d92665"
  },
  {
    "url": "assets/js/19.9db9fe0f.js",
    "revision": "2ec37c18881a4866fe693a568109b677"
  },
  {
    "url": "assets/js/20.e5cd8996.js",
    "revision": "15cc60482c9d07c6a6de685854e05063"
  },
  {
    "url": "assets/js/21.d15c8214.js",
    "revision": "04f1832c9717e83e90e1ed41d093146d"
  },
  {
    "url": "assets/js/22.2eae7bfc.js",
    "revision": "e4cbe1e480cf20ffdaa6b3cae1ec379f"
  },
  {
    "url": "assets/js/23.62881920.js",
    "revision": "c5a14662fab1a16f57303cb81067311b"
  },
  {
    "url": "assets/js/24.35d99be2.js",
    "revision": "3602accf71acc59b2f9b7a7e7d776ed2"
  },
  {
    "url": "assets/js/25.a70359ef.js",
    "revision": "f8e2a50e1d4c5d84e3b803e99dedbdd2"
  },
  {
    "url": "assets/js/26.7a1abe63.js",
    "revision": "4b0d60007d2f4854233a73e386516a1c"
  },
  {
    "url": "assets/js/27.9222cc01.js",
    "revision": "30535df004e9d10bfb965fded3911900"
  },
  {
    "url": "assets/js/28.75ea6cce.js",
    "revision": "29e162ce6a973ea18fde3c5c5ef0e946"
  },
  {
    "url": "assets/js/29.f41133c4.js",
    "revision": "49c0563f69f3f71be6be2d2f189966f2"
  },
  {
    "url": "assets/js/30.f8f2326e.js",
    "revision": "00b99d3f42181bb6f35c85e6f556b668"
  },
  {
    "url": "assets/js/31.cf4e185c.js",
    "revision": "8faa90b3a5ae4bb1522f9d7ce49bddae"
  },
  {
    "url": "assets/js/32.f4e8a5d8.js",
    "revision": "cf222009c22bce9a0592c813c5dcee60"
  },
  {
    "url": "assets/js/33.4e0321ed.js",
    "revision": "2ebe2580b055155e8ae92644f6dc776e"
  },
  {
    "url": "assets/js/34.995f094e.js",
    "revision": "79e0cebb518481b959078b73d7e6522e"
  },
  {
    "url": "assets/js/35.71727b82.js",
    "revision": "2f8ad677a83b9128e6c8dff6750fddf2"
  },
  {
    "url": "assets/js/36.81688a61.js",
    "revision": "50e20cb42bdd41b747fb701e1e313a10"
  },
  {
    "url": "assets/js/37.86823408.js",
    "revision": "674079699d21a4085c4d3a88d9a5e635"
  },
  {
    "url": "assets/js/38.d6aa17c0.js",
    "revision": "bed52a196acef527dd3d691b8ec60834"
  },
  {
    "url": "assets/js/39.87fafdb1.js",
    "revision": "574be4d7b529c28b1b97c4883defcb58"
  },
  {
    "url": "assets/js/4.7b6b4003.js",
    "revision": "9d2366a0da625a3d1199470e2de80956"
  },
  {
    "url": "assets/js/40.54708d66.js",
    "revision": "f422c782017ba2402a7adc9fc85e8608"
  },
  {
    "url": "assets/js/5.35d94b75.js",
    "revision": "79a875ae92dc76fc460e5db25d9b2d36"
  },
  {
    "url": "assets/js/6.49f4ca9d.js",
    "revision": "a63a5b0da87856cae5a1a5c76cea18e9"
  },
  {
    "url": "assets/js/7.6939a280.js",
    "revision": "2e054822be842228af408aba75c4f492"
  },
  {
    "url": "assets/js/8.4adb65bc.js",
    "revision": "9cc53729c6f52243f99675f33bdb5af9"
  },
  {
    "url": "assets/js/9.b30d6170.js",
    "revision": "7e7526214dae304af1dabb84b58211b0"
  },
  {
    "url": "assets/js/app.15fac6e6.js",
    "revision": "e1a0221db237e6091d1de641ca377af3"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.4cb50dcd.js",
    "revision": "427254f59467229fd7d42836662e27fc"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "987e91fdb9117ec6a819674a0be47461"
  },
  {
    "url": "categories/java/index.html",
    "revision": "002220e8377b6d7931048c20bfe2358e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "392bce95e5c42e6410da3e74bac91e1e"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "6af34a6587df0b0485b0bd37d596c7ad"
  },
  {
    "url": "categories/Oracle/index.html",
    "revision": "4d7a2d1a8f11a6d9f11d3c2412139330"
  },
  {
    "url": "categories/SpringCloud/index.html",
    "revision": "95ddb4762ad654410cfc7cffbe932b89"
  },
  {
    "url": "categories/web /index.html",
    "revision": "f2a70613bbb659b850f9edde95d8e91a"
  },
  {
    "url": "categories/中间件-框架/index.html",
    "revision": "97492db9815794cfa6dab2f5afc40286"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "94adf928aa2c774536f9f4e918ffd7d0"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "afc5b48a3d496678e0b399aefe66f09e"
  },
  {
    "url": "categories/安装/index.html",
    "revision": "c9e3576fbcb5b609a486c6633442a9a1"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "36642109db5f7bffa8b4b466edcba2f6"
  },
  {
    "url": "categories/框架/index.html",
    "revision": "9dfc8e5b0a7747341425b9410681a069"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "904c739262f965ba5ecf83bb9f6aaef3"
  },
  {
    "url": "css/style.css",
    "revision": "1d91c8140e17538328a6f04d32c80de7"
  },
  {
    "url": "guide/index.html",
    "revision": "ba3ff2e9111fbbc30a8b33502fe88237"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "f6af1cacd3096ea1cafc387c824bcccb"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "329cbcd8a2b14fc83e48cf16cc87dfb7"
  },
  {
    "url": "js/custom.js",
    "revision": "705bcb3bea757fd9b2e9cadc88baafd4"
  },
  {
    "url": "tag/index.html",
    "revision": "e75e6c7106fffc97c1bd11d1e01c6370"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "271a1011cdfe06d26525a37a415f39e1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b77ebad66e987ac8e03ddc38ff7a81f8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9b653c0d52acb138f6a5423b5db76ad2"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "e41b1f192b230ccd5fc52c9a2c8a578f"
  },
  {
    "url": "tags/MQ/index.html",
    "revision": "a6852e4f3f2180824fa808433b83a16b"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "3fe7b15021ad18d1d66d9002fe306286"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "945e359386cb62721f289fb4fc7fb161"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "96cb97eebbe4e07bb33144341fe1ee85"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e47662322b72c3560a1437ccf2628267"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "d29dbdff2d2ddbf833d062edc83fa7d4"
  },
  {
    "url": "tags/SpringCloud/index.html",
    "revision": "9d29984ffb94c75fc97f8d34f19f2a91"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "67fdf5ea49836568e74ee31db1253098"
  },
  {
    "url": "tags/web 容器/index.html",
    "revision": "62edc7565fa71c8c9bf6ff89f636f2d5"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "dea53452affef997510654e53e58cea1"
  },
  {
    "url": "tags/安装/index.html",
    "revision": "7855566855e2388d37176b9cd9aee51d"
  },
  {
    "url": "tags/实施/index.html",
    "revision": "98e841bd0f05ae1e14ae86637aad4824"
  },
  {
    "url": "tags/微服务/index.html",
    "revision": "b3b3fc479a49d2dc9edd2e242ffe370e"
  },
  {
    "url": "tags/服务调用/index.html",
    "revision": "2529a1f9af2bd80df404dc37c965f4f1"
  },
  {
    "url": "tags/框架/index.html",
    "revision": "264b74d733525dc7cd5caa52aa4801f6"
  },
  {
    "url": "tags/注册中心/index.html",
    "revision": "1b7c5ea83402566f9894dd83d0133667"
  },
  {
    "url": "tags/消息中间件/index.html",
    "revision": "edd7137252cd8967b5883e680d84206f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "55ca29a7823ed53deb15cfb80f4292ba"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "93540d7b2a326dcd409009c452b6f7bd"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7da73b1b9096703a4f0b1eaaaa798ef2"
  },
  {
    "url": "timeline/index.html",
    "revision": "5cc8aaf52be3cc367aeeb11667de83f3"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "中间件-框架/apply .html",
    "revision": "74dcf931d6f353d9667a8fe0eae99146"
  },
  {
    "url": "中间件-框架/tomcat/tomcat.html",
    "revision": "adf79d653032e408f68eba24c779271e"
  },
  {
    "url": "应用部署/apply .html",
    "revision": "58de78b1411fab64aa43cfb7e1177435"
  },
  {
    "url": "应用部署/mysql/mysql.html",
    "revision": "fd93dac1784e95b64d1ceff769a683f7"
  },
  {
    "url": "应用部署/mysql/mysql01.html",
    "revision": "7d2b282ab64789ae956fa58952d58f6c"
  },
  {
    "url": "应用部署/oracle/oracle.html",
    "revision": "72701cf48008819bc5281534bd0566cd"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8d9cf50518739f7d86fb8e6e1e4a9384"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4f38e9e743fcc81aa6900d11766b6b46"
  },
  {
    "url": "技术文章/java/javase2.html",
    "revision": "f72c9b777604b8b7abf6060ae16be024"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3647416fb08258a96cccfe740e58239f"
  },
  {
    "url": "技术文章/kafka/kafka.html",
    "revision": "af7d722af10d64cb97cfa8c3a08568c0"
  },
  {
    "url": "技术文章/mq/Kafka/kafka.html",
    "revision": "7b9126de074f2ea523c28f051079211a"
  },
  {
    "url": "技术文章/mq/RabbitMq/RabbitMQ.html",
    "revision": "36f2c18b2563a457607ed7a86a3522f8"
  },
  {
    "url": "技术文章/Nginx/kafka.html",
    "revision": "ca4df573837c3435d74d13dd269e3527"
  },
  {
    "url": "技术文章/Nginx/nginx.html",
    "revision": "c009d4dcd739870f9f51814e9082ba34"
  },
  {
    "url": "技术文章/Nginx/nginx2.html",
    "revision": "a41291a1bff62ddfee628b39888c5e98"
  },
  {
    "url": "技术文章/Nginx/rabbitMq.html",
    "revision": "1f5e17f9744f2f44195ce372c396fc7b"
  },
  {
    "url": "技术文章/spring/javaee.html",
    "revision": "61f6afc566baefeff45449a0e1e2d346"
  },
  {
    "url": "技术文章/spring/javaee2.html",
    "revision": "7eca75ee726abea8cefd37f096ca2555"
  },
  {
    "url": "技术文章/SpringCloud/nacos/Java-8.html",
    "revision": "5e86367fe847113638437d97b7e73f3d"
  },
  {
    "url": "技术文章/SpringCloud/nacos/nacos.html",
    "revision": "9af2c9d731025ad36e7d110019ca6731"
  },
  {
    "url": "技术文章/SpringCloud/nacos/spr.html",
    "revision": "96b1cc8cf553f1c4e73a43ed230ff878"
  },
  {
    "url": "技术文章/SpringCloud/nacos/spring-profiles.html",
    "revision": "e8576b060f367ba8429267cdfa952764"
  },
  {
    "url": "技术文章/SpringCloud/openFegin/openFegin.html",
    "revision": "5ceb113709922ebe329efebefac3e235"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ca86cb8dc54acbf2b40f4c313bb5890a"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "fa44273f3fad21fc5f461c9d35f75226"
  },
  {
    "url": "生活分享/life.html",
    "revision": "78962892d519ff52db180dae77cda21b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
