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
    "revision": "f1aee91a1440aee27aff37c9537cbcf6"
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
    "url": "assets/js/10.a9c2f5cf.js",
    "revision": "4aa9bb5ba53e81ddd0c08e9aa88b24dc"
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
    "url": "assets/js/18.a59eaff4.js",
    "revision": "4bd991e64860842c0a3af1db1812e110"
  },
  {
    "url": "assets/js/19.1e17e00d.js",
    "revision": "ca532f2b7bedbc50976c0f3e27d6bef6"
  },
  {
    "url": "assets/js/20.e5cd8996.js",
    "revision": "15cc60482c9d07c6a6de685854e05063"
  },
  {
    "url": "assets/js/21.e3b10047.js",
    "revision": "1d123bc277e4de8630d44ba11e0a257f"
  },
  {
    "url": "assets/js/22.654bb9fe.js",
    "revision": "8b5c985352b7897f5eded6f9d073ff56"
  },
  {
    "url": "assets/js/23.c6e7159d.js",
    "revision": "c762d7303d124d1e8a96d19dab7176dc"
  },
  {
    "url": "assets/js/24.ac54f567.js",
    "revision": "14cd2dcc267970df4128526f14e3c459"
  },
  {
    "url": "assets/js/25.07666e56.js",
    "revision": "eb53e163753b48f6d175c477497b4ad1"
  },
  {
    "url": "assets/js/26.f2dbfb01.js",
    "revision": "b4540ef2132f7a5b8f9bd625d40ca5fd"
  },
  {
    "url": "assets/js/27.7b90a7b0.js",
    "revision": "555975094544d9ce7b73720350b1df58"
  },
  {
    "url": "assets/js/28.7d3d8481.js",
    "revision": "c90c31fafb8f1062eeb1a0a0988f1c5a"
  },
  {
    "url": "assets/js/29.eaccb789.js",
    "revision": "20157133cfb18b0ddd39acf31edbe578"
  },
  {
    "url": "assets/js/30.b310058d.js",
    "revision": "a2df04e3ad4a155b9ba81589ff00e350"
  },
  {
    "url": "assets/js/31.637f46c3.js",
    "revision": "0c7c057f1f52144cf42dd043cb84ccef"
  },
  {
    "url": "assets/js/32.b7fb915b.js",
    "revision": "76484524182cd995b94313fc8447b7ab"
  },
  {
    "url": "assets/js/33.64821bf4.js",
    "revision": "b75b692cabb37a5ada198df0fdc7be58"
  },
  {
    "url": "assets/js/34.5add8bc5.js",
    "revision": "3348a77affe1f65bdd9472130a139b2e"
  },
  {
    "url": "assets/js/35.2a4d5f85.js",
    "revision": "76db27a468cc47ec49b754a847597fb8"
  },
  {
    "url": "assets/js/36.b89710cb.js",
    "revision": "ffee739d4dbaced5e833df0dd1c91582"
  },
  {
    "url": "assets/js/37.a9e2d25d.js",
    "revision": "412d2252ed407e1f898f30abe7952a86"
  },
  {
    "url": "assets/js/38.ade9305b.js",
    "revision": "79098f6e2853857f3b5a4b869edc729b"
  },
  {
    "url": "assets/js/39.ab55801c.js",
    "revision": "b3a79978c06a71b86c48891726951c11"
  },
  {
    "url": "assets/js/4.7b6b4003.js",
    "revision": "9d2366a0da625a3d1199470e2de80956"
  },
  {
    "url": "assets/js/40.2edddf74.js",
    "revision": "f5ea121616899373edcbdfcb9c92c347"
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
    "url": "assets/js/8.bba5f16f.js",
    "revision": "b47e0e150d1c0695de6d0229fe1d75cc"
  },
  {
    "url": "assets/js/9.b30d6170.js",
    "revision": "7e7526214dae304af1dabb84b58211b0"
  },
  {
    "url": "assets/js/app.298fce50.js",
    "revision": "6ac21a86d1d7d39c2125baa1be91c25f"
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
    "revision": "14a98b1eb94145f32061f5bcd2d0ac18"
  },
  {
    "url": "categories/java/index.html",
    "revision": "03ae9aab4bb25e177481a7b869ee580c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "394625b615725aa63e88d7668ccbb9ec"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "f861c5d11e387630b7c28d779ce78f51"
  },
  {
    "url": "categories/Oracle/index.html",
    "revision": "1fff33dab54da261b605456fae161f42"
  },
  {
    "url": "categories/SpringCloud/index.html",
    "revision": "1ff875123bb6bdf2cd2c5a07941dfe11"
  },
  {
    "url": "categories/web /index.html",
    "revision": "e843abed5b323d45785489450b124045"
  },
  {
    "url": "categories/中间件-框架/index.html",
    "revision": "3a90656d4ea6fb84f82fc9f7c9bf2476"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "997f458fdb2129c411dd875d059ed2d2"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "a0b6268b22ac09a962dc875d2e46a82c"
  },
  {
    "url": "categories/安装/index.html",
    "revision": "f8033d6f10fc2861a38f50ca8383b48e"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "ad26765dbcda162d7025da42efea8c76"
  },
  {
    "url": "categories/框架/index.html",
    "revision": "c3fcffb5b360d81abc7f54bdf0074637"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "26a3170e8233c35ba6c9de8469ac9075"
  },
  {
    "url": "css/style.css",
    "revision": "1d91c8140e17538328a6f04d32c80de7"
  },
  {
    "url": "guide/index.html",
    "revision": "a20e6201fea6df2cfda93f0105db178f"
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
    "revision": "e1ec24f9f0f145df384aa4e005f03e72"
  },
  {
    "url": "js/custom.js",
    "revision": "705bcb3bea757fd9b2e9cadc88baafd4"
  },
  {
    "url": "tag/index.html",
    "revision": "2694baeacf3dc20c47789c3ac1009a41"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5c1c254bc656a1dcf591a9f43e06ec4f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e4db32f79d5b5658834c637c7faefc37"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9bcf392f4a6c19c02f67e956db510e67"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "9e7862175e2ca6933bcfc6c8b2e12e5c"
  },
  {
    "url": "tags/MQ/index.html",
    "revision": "6868c75aa37a9b042ef89577e1391393"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "ab02ded0e22ee32e16229074b529078f"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "8306fd904bb647e4184e22942ecbce66"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "31d8d9d8781ac7795340f02d037a03b0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0ac99a6afacf879284dad5e2071dd0d4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2f474b43f01b5b3cea027b8b2dcf62bf"
  },
  {
    "url": "tags/SpringCloud/index.html",
    "revision": "1877f86ef47ade30ceb7e50d97fb7725"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3f6832ed6b788f36bd8a8b547ed70769"
  },
  {
    "url": "tags/web 容器/index.html",
    "revision": "c350477eabf4a49da148a4acb491bf58"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b8fa3ad3c797621e2f37b18978c18787"
  },
  {
    "url": "tags/安装/index.html",
    "revision": "43f1dfef5771e2230eba3f91eb050de2"
  },
  {
    "url": "tags/实施/index.html",
    "revision": "53374802e18e5c7abacaa6fd7bdf9b74"
  },
  {
    "url": "tags/微服务/index.html",
    "revision": "dcd106fb072c3d0e6f9dc17f3f4733a3"
  },
  {
    "url": "tags/服务调用/index.html",
    "revision": "b41c1d9e3cb1a608ee0f98ab05e60ea3"
  },
  {
    "url": "tags/框架/index.html",
    "revision": "0c4d69a5ecec2a6ce2509a4988b1654c"
  },
  {
    "url": "tags/注册中心/index.html",
    "revision": "e5a90737347e2ec139a8a0ff6c1f8a48"
  },
  {
    "url": "tags/消息中间件/index.html",
    "revision": "9ca8d550e1c60ea8fde4bc8ab3657138"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "08173a90cb206d8f5f77616079c8f544"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "20f54d52fbd7986f27c80db734901ea2"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e2012ac4000b9126761d5f998db62657"
  },
  {
    "url": "timeline/index.html",
    "revision": "bce59d200455da223456c440b53b90cc"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "中间件-框架/apply .html",
    "revision": "324c853575291bf1497c59c1777a2c86"
  },
  {
    "url": "中间件-框架/tomcat/tomcat.html",
    "revision": "2cbd2cc6478ed56436a63188b32c13b9"
  },
  {
    "url": "应用部署/apply .html",
    "revision": "02143e373b9661eb967e5b0a188680ab"
  },
  {
    "url": "应用部署/mysql/mysql.html",
    "revision": "a1a2f9b1452b14bbbccc1d25448a3151"
  },
  {
    "url": "应用部署/mysql/mysql01.html",
    "revision": "802526862f7f5bdfeba9a2336733868e"
  },
  {
    "url": "应用部署/oracle/oracle.html",
    "revision": "68f22456cbe1348c9b68d35b100bb8ff"
  },
  {
    "url": "技术文章/index.html",
    "revision": "29a8d3bd46652bf2bb150aa97339c5e7"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1f7425b8ad89f9ca8b5978107fe8b5f2"
  },
  {
    "url": "技术文章/java/javase2.html",
    "revision": "1b1cd21f10969f1609f6274693e2c2a3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "be4247fb332f97c14cdf95f96cb9a6c1"
  },
  {
    "url": "技术文章/kafka/kafka.html",
    "revision": "460db77745a9d39a7f6fef741a62e964"
  },
  {
    "url": "技术文章/mq/Kafka/kafka.html",
    "revision": "f57d790b6b651830bd42b72942bbef27"
  },
  {
    "url": "技术文章/mq/RabbitMq/RabbitMQ.html",
    "revision": "be277d334f5ed09c7e1418f2494eace2"
  },
  {
    "url": "技术文章/Nginx/kafka.html",
    "revision": "5bc45d74aa2f96962689b9ffede3dbff"
  },
  {
    "url": "技术文章/Nginx/nginx.html",
    "revision": "0252b83385a9d43a79b6a83804b286b4"
  },
  {
    "url": "技术文章/Nginx/nginx2.html",
    "revision": "c35d612ef6b1b11746a92b2d7604afc3"
  },
  {
    "url": "技术文章/Nginx/rabbitMq.html",
    "revision": "a37ca7750d794040b4ded6a0047e967a"
  },
  {
    "url": "技术文章/spring/javaee.html",
    "revision": "860212c9ac8670cf722dfd4aa13764aa"
  },
  {
    "url": "技术文章/spring/javaee2.html",
    "revision": "dbd755cca82541628fb8616db5426206"
  },
  {
    "url": "技术文章/SpringCloud/nacos/Java-8.html",
    "revision": "ba59f4f6fb732689fc2f1db02b29b394"
  },
  {
    "url": "技术文章/SpringCloud/nacos/nacos.html",
    "revision": "68060824f07166e940fd436e5e6cfdbe"
  },
  {
    "url": "技术文章/SpringCloud/nacos/spr.html",
    "revision": "9d4ad9d4544953796da739c8ec4da424"
  },
  {
    "url": "技术文章/SpringCloud/nacos/spring-profiles.html",
    "revision": "c878f71502e9c389b4736d6f5b7cb563"
  },
  {
    "url": "技术文章/SpringCloud/openFegin/openFegin.html",
    "revision": "7c1bc98e585094ec93276592ae4a5991"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e1bda72063d6587c762105aa67d8e654"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "2cf0723406f340b1afebfc9ac74b1d10"
  },
  {
    "url": "生活分享/life.html",
    "revision": "420824d1530b85f3a1cbd468a39dd728"
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
