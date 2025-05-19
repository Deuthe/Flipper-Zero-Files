# Flipper Zero Files

Welcome to my personal collection of Flipper Zero files! This repository contains custom portals I've created, along with an improved version of the **RedRabbit script**. These files are tailored for use with the Flipper Zero device, and this README provides instructions and details to get you started.

---

## Contents
- **Portals**: Custom portals I've designed and gotten from the internet for the Flipper Zero.
- **RedRabbit Script**: An enhanced version of the RedRabbit script, including a PowerShell script (`redrabbit.ps1`) and a JavaScript file (`RedRabbit.js`) for execution on the Flipper Zero.

---

## RedRabbit Script

The RedRabbit script automates tasks on a connected PC via the Flipper Zero. This version includes improvements over the original Discord-provided script:
- Runs as an admin by default.
- Fixes an issue where random IDs were appended to the `.ps1` file (now parsed to a separate file).
- Corrects the keylogger functionality—logs are now saved to the same folder in Flipper's mass storage created by the `.ps1` script.

---

### Prerequisites
- A Flipper Zero device with mass storage enabled.
- The `RedRabbit.img` image file (created within the Flipper Zero).
- The `redrabbit.ps1` PowerShell script (included in this repo).
- The `RedRabbit.js` script (included in this repo).

---

### Instructions
1. **Prepare the Image**:
   - Create the `RedRabbit.img` file in your Flipper in USB -> Mass Storage -> Create Disk -> Name it and save it.

2. **Run the Image**:
   - On your Flipper Zero, navigate to the mass storage section and run `RedRabbit.img`.

3. **Connect to PC**:
   - Plug your Flipper Zero into your PC via USB.

4. **Add the PowerShell Script**:
   - Copy the `redrabbit.ps1` file (from this repo) to the Flipper Zero's mass storage.

5. **Disconnect the Flipper**:
   - Safely unplug the Flipper Zero from your PC.

6. **Run the Script on Flipper**:
   - On the Flipper Zero, go to the `scripts` directory.
   - Locate and run the `RedRabbit.js` file. (From this repo) You can add it to the Scripts folder.

7. **Reconnect to PC**:
   - Plug the Flipper Zero back into your PC to execute the script and start the keylogger.

---

### Output
- The keylogger will save logs to the same folder in the Flipper's mass storage created by `redrabbit.ps1`.

---

### Common Problems
- **Keyboard Language**: The script assumes your keyboard is set to English. If your keyboard uses a different layout, you’ll need to modify the script yourself to match your language settings. This is a common issue that’s rarely mentioned.
- **Source**: I originally got the RedRabbit script from the unofficial Momentum firmware’s official Discord server.

---

## Notes
- This version of RedRabbit is more stable than the original Discord version, with fixes for the random ID issue and improved keylogger functionality.
- Ensure your Flipper Zero firmware is up to date for compatibility.

---

## Credits
- Thanks to **@b0r0xz** for the `RedRabbit.js` file, which made it possible to run `.ps1` scripts on the Flipper Zero.
- Original powershell script created by **@securethelogs**.

---

## License
This project is for personal use and experimentation. Use responsibly and at your own risk.
