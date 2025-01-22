# Setting Up a PS3 Super Slim as a Dedicated Web Server

Transforming my PS3 Super Slim into a dedicated web server involves three major tasks:  
1. **Jailbreaking the PS3 Super Slim with PS3HEN**  
2. **Installing Linux**  
3. **Configuring the Web Server Software**  

Here’s a detailed guide for each step.

---

## 1. Jailbreak the PS3 Super Slim

### Prerequisites
- **PS3HEN:** Download and install PS3HEN from a trusted source.  
  - Follow specific instructions for your firmware version.  
- **Homebrew Support:** Verify you can run homebrew applications after jailbreaking.  

### Steps
1. **Install PS3HEN:**  
   - Download PS3HEN.  
   - Install following community guides for HFW firmware.  

2. **Verify Jailbreak:**  
   - Confirm homebrew apps run correctly.  

---

## 2. Install Linux on the PS3 Super Slim

### Prerequisites
- **Jailbroken PS3** (with tools like PS3HEN).  
- **Petitboot Bootloader:** Boot Linux on PS3 Super Slim (download from trusted sources).  
- **Linux Distribution:** Use lightweight PowerPC-compatible distros like Debian 10 PPC or PS3-optimized Yellow Dog Linux.  
- **USB Drive:** At least 8 GB for the Linux ISO.  
- **Monitor, Keyboard, and Mouse** (for setup).  

### Steps

#### 1. Install Petitboot
1. Download the Petitboot installer compatible with the PS3 Super Slim.  
2. Use tools like **multiMAN** to transfer the installer to the PS3.  
3. Run the installer and reboot into Petitboot to verify functionality.  

#### 2. Prepare the USB Drive
1. Format the USB drive as FAT32:  
   - **Linux:**  
     ```bash
     sudo mkfs.vfat -F 32 /dev/sdX
     ```
   - **Windows:** Use File Explorer.  
2. Copy the Linux ISO to the USB drive.

#### 3. Boot and Install Linux
1. Insert the USB drive into the PS3.  
2. Boot into Petitboot and select the Linux installer.  
3. Follow the installation wizard:  
   - Create a root (`/`) partition and a swap partition.  
   - Install a basic system (no desktop environment).  
4. Remove the USB and reboot into Linux.  

---

## 3. Configure the Web Server Software

### Install a Web Server Stack

#### Step 1: Update the System
```bash
sudo apt update && sudo apt upgrade -y