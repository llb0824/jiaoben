
/*******************************

脚本名称: 脚本测试——观看视频无限奖励
下载地址：微信小程序
软件版本：9.9.9
脚本作者：洛洛💞
更新时间：2023-8-23
问题反馈：QQ+3154475202
QQ会员群：779392027💞
TG反馈群：
TG频道群：
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]
^https:\/\/vip\.115\.com\/tb\/vipinfo\/ url script-response-body https://raw.githubusercontent.com/llb0824/jiaoben/main/qiandian02.js

[mitm]
hostname = vip.115.com
*******************************/
var body=$response.body;
body = body.replace(/"product_id\":".*?"/g,'"product_id":"com.115.115personalvip1m"');
$done(body);
