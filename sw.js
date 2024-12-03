importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"0556896552745a74c35360a7bd1a967e","url":"feedback.html"},{"revision":"30403ad021d8432569020780cf787262","url":"images/loadcell.png"},{"revision":"05adecf4c337cf7afd5f175be393aa4b","url":"images/loadcell2.png"},{"revision":"607ed339fcfd8f7d8061d87f8662e282","url":"images/loadcell3.png"},{"revision":"99e86d6c6d2ad488af00fd6c01bf7166","url":"index.html"},{"revision":"2acdcf870ff40fbef5e1bb801f2a68b7","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"fc70fc66bb995ceefcc5dfddad1b94a3","url":"posttest.html"},{"revision":"3bd1feb078f8571337f90f6659ad6541","url":"posttest.json"},{"revision":"5c2a8a81c686370971de72d8e5c074ab","url":"pretest.html"},{"revision":"fbd0caba278d882c4d24f6e9582414d4","url":"pretest.json"},{"revision":"39930ffb0d8baf11ddfe7eba66910c39","url":"procedure.html"},{"revision":"f2c7983d377c9c8b28d9fbd70d41ad91","url":"references.html"},{"revision":"feb419f8aaceaa24992dbfcc392d3212","url":"simulation.html"},{"revision":"a63b248fa49bc3477eff0d4b633c6edf","url":"simulation/css/analysis.css"},{"revision":"9025762ac9ed78134a0547a2c90e03b4","url":"simulation/css/hall.css"},{"revision":"92cbbe488d825bdd6d6457b493b02f5a","url":"simulation/css/header.css"},{"revision":"f281bc6db116de335893e24043d1f894","url":"simulation/css/loadCellType.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"9af581a201738292c55e8930be645bb0","url":"simulation/css/mainPage.css"},{"revision":"fabcff09b8939f7512fb8c5e03cdc898","url":"simulation/css/style.css"},{"revision":"f42b60646ae70358b240902537d6352d","url":"simulation/images/amplifier.png"},{"revision":"7c43fead4fce5ffa3d20161fdb5a91d7","url":"simulation/images/amplifier1.png"},{"revision":"9f3b565ab46a632859b4cd4a7ead4b2d","url":"simulation/images/basicLoadCell.png"},{"revision":"eeee6422038b32bfc1ac27add57fdc22","url":"simulation/images/cantiBeamW.png"},{"revision":"2bf22a7a286fe95a0f013cd3da071ea5","url":"simulation/images/cantiBeamW1.png"},{"revision":"605a147f076193da3e109050fbde63ed","url":"simulation/images/cantiCal.png"},{"revision":"830e1c87f478b950e76c2653057f84ce","url":"simulation/images/cantiForCalculate.png"},{"revision":"bd39a69716e01dd3901124dcde800220","url":"simulation/images/cantileverFinal.png"},{"revision":"2684a423fe820545da11a435cbf4e1c8","url":"simulation/images/cantileverFinal1.png"},{"revision":"a9ffa02f2be1b1a9702b75717779e6c9","url":"simulation/images/cantileverFinal2.png"},{"revision":"7507ef7138ed540b78ae8a310c73ce1a","url":"simulation/images/COEPlogo.png"},{"revision":"48a3e31f66e6f40627173e5fbf25a4a6","url":"simulation/images/columnDraw.png"},{"revision":"19dc7fc72214a4b9780c226a5f1a085f","url":"simulation/images/columnType.png"},{"revision":"1fb1e1712e7a71ca527fe7488b51a47c","url":"simulation/images/columnType1.png"},{"revision":"8f2f35a7d8fa9744ad4dfadc0ce73108","url":"simulation/images/demoBridge.png"},{"revision":"4e779eb5fbd89ab9a3aeba210809bdea","url":"simulation/images/halleffect.jpg"},{"revision":"918d105121e5ede4ee223ecffbc22fee","url":"simulation/images/loadCellBase.png"},{"revision":"8d589e2c4d356ad719f4e58cfb62e7a7","url":"simulation/images/loadCellExplain.png"},{"revision":"a2b44dd83bd7cab48c856ea209aa37d0","url":"simulation/images/LoadCellExplainUpdate.png"},{"revision":"491e83cade7cc5bea94f3d2a594310e7","url":"simulation/images/loadCellMerge.png"},{"revision":"b16954637426dfe877b33af60b56ccd5","url":"simulation/images/magnaticfield.png"},{"revision":"06b538784f04bb6c3dc7ae7d28e5cf5f","url":"simulation/images/maindig.png"},{"revision":"ae5da1aff2a74873002474ea68a987d4","url":"simulation/images/outputBlock.png"},{"revision":"59d56f6341891d9516ca6c5bd29aee5f","url":"simulation/images/outPutVolt.png"},{"revision":"b2651bb7f0475d75f48dad87abae529b","url":"simulation/images/outVolt.png"},{"revision":"afe4f6bfd5c45d71ab39b6a8c4b6f556","url":"simulation/images/powerSupply.png"},{"revision":"21c112aa74b740dd5d12251430d2c02f","url":"simulation/images/rChangeStatic.png"},{"revision":"06994447a14201e91899cb22d01fc69f","url":"simulation/images/ringExplain.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlablogo.jpg"},{"revision":"38f3f223fc0e303d8eec47a02c4ca13e","url":"simulation/images/wheatStoneBridgeE.png"},{"revision":"b1e4d05072bf19dc071756b78a4680e2","url":"simulation/images/wheatStoneBridgeE1.png"},{"revision":"7f9a88772acb9bd0d401aceceffc58db","url":"simulation/images/wheatStoneBridgeEraseR1.png"},{"revision":"156f93c81a3b3c2cbc7a00b825f78a96","url":"simulation/images/wheatStoneCond1.png"},{"revision":"a43e709ed6257165ee4801838f9b42c8","url":"simulation/images/wheatStoneCond3.png"},{"revision":"1d807323122320e08bbc3d62075024a3","url":"simulation/images/wheatStoneCond4.png"},{"revision":"5b47d6cf5cc6f7c525cb23b6b8e1c491","url":"simulation/images/wheatStoneConnections.png"},{"revision":"afa31245ea1d560d2b4a5ff14f430937","url":"simulation/images/wheatStoneOP.png"},{"revision":"0e8b909f0db3df2b5b1df765e69ca513","url":"simulation/images/wheatStoneOutline.png"},{"revision":"29b5c2a1c22b114fbc289649284311ab","url":"simulation/images/wheatStoneOutline1.png"},{"revision":"9b17f8f8bc5e16015bd342a4ea95b9a5","url":"simulation/images/wheatStoneOutline111.png"},{"revision":"30e1d4e341145bb03b27dad3d2cdbb39","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"4f252523d4af0b478c810c2547a63e19","url":"simulation/lib/jquery.js"},{"revision":"220afd743d9e9643852e31a135a9f3ae","url":"simulation/lib/jquery.min.js"},{"revision":"074952d02fd65490bb6e8eb97ed36bcf","url":"simulation/lib/raphael.js"},{"revision":"28c964ed8001f7e9930dc7c0a6daf2e1","url":"simulation/lib/raphael.min.js"},{"revision":"f20fa8b102f205141295cdefd6ffe449","url":"simulation/src/bootstrap.min.js"},{"revision":"e9173cbf15f5b3920591d331906f682e","url":"simulation/src/calculation.js"},{"revision":"ad634effb7f6d4bb7f03f99d7e6dd80b","url":"simulation/src/canteleverConfig.js"},{"revision":"68ce18a3c0179eb73b268e9e5948df38","url":"simulation/src/columnTypeConfig.js"},{"revision":"e892a78e94b879414a1998d6e48de1e3","url":"simulation/src/configLoadCell.js"},{"revision":"c4d3d55519fcc7d390b3cd8dfd332a87","url":"simulation/src/graphPage.js"},{"revision":"2935b67646f7c96cf9dc7cce8699356c","url":"simulation/src/mainPage.js"},{"revision":"32dfc76d580fc44c097453330780507e","url":"simulation/src/materialJson.js"},{"revision":"87382159b9279d74f80cbd67c761bcfd","url":"simulation/src/mimic.js"},{"revision":"fa688c77bf475b1b9a6c8d07fac0cc42","url":"simulation/src/questionJson.js"},{"revision":"e3fafac298a8df931717c7841f769906","url":"simulation/src/questions.js"},{"revision":"a5133f344fb880423753e7df9d215849","url":"simulation/src/refTable.js"},{"revision":"478b19bd3f5ad973c70298d0da3ce724","url":"simulation/src/result.js"},{"revision":"16ce1a0de966c1a9d9a7e1dab18dd618","url":"simulation/src/table.js"},{"revision":"c4555f85fb3a56646b0438057f600fef","url":"simulation/src/tableAndGraph.js"},{"revision":"86f38329ec4bcdd94ada4be5cc5561a9","url":"simulation/src/wheatStoneBuild.js"},{"revision":"dab1555c74521c28aa6558d02271ff69","url":"simulation/src/wheatStoneCalculation.js"},{"revision":"4df05d84975a2b6b603e4bd4d2da3d5a","url":"theory.html"},{"revision":"4399932a8e00c33757f77df4c94a5885","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );