## Introduction
During my June holidays in 2021, I managed to complete my goal of installing macOS, Windows, and Linux on the same machine. 

## What's the point of doing so?
Initially, I wanted to install Linux and Windows together just to try it. However after some time,  I preferred to use Linux over windows for normal usage. I'd always notice that my system ran much smoother and without stutters on Arch (i use arch btw) whereas Windows sometimes would keep my laptop hot and noisy even on a fresh install. Furthermore, I was much more comfortable using the terminal on Linux as compared to Powershell/cmd on Windows. Having an easy to use package manager (pacman) to install whatever I wanted using the Arch User Repository (AUR) instead of trawling through Google for install links was the icing on the cake for me.

I couldn't outright just ditch Windows though, as I needed it to play games that aren't compatible with proton/WINE due to anticheat compatibility. Examples of such games were Genshin Impact and VALORANT. 

Well, so that settles why I wanted to use Linux. How about macOS? After all, both Linux and macOS are UNIX(-like), so there shouldn't be any difference in those two operating systems for programming. The main difference for me was the UI. Cheesy, I know, but I recently had the chance to use my dad's 2013 MacBook Pro. After using it for around 2 weeks, I had grown accustomed and even found myself growing fond of it moreso than using Linux at times. A normal person would probably buy an M1 Air, but I was broke. I had no other choice but to create a Hackintosh. 

## Installing Linux
### Selecting a distro
Before I installed Linux, I was a Windows only user which had previously installed WSL to learn basic terminal commands. After some Googling, I managed to shortlist my choices to 3 distros: Fedora, Ubuntu, or Arch Linux. I flashed an ISO of each distro to my thumbdrive and livebooted each of them to try which of them were my favourite. 
// complete later

## Installing macOS
### Smooth sailing?
Researching the internet for information about Hackintosh revealed that there were multiple methods for me to choose from in order to install macOS on my laptop. OpenCore, Clover, "flavors" of macOS which offered prebuilt EFIs... left me spoilt for choice. However, reading more Reddit threads about installing Big Sur on my laptop showed that OpenCore was the way to go. Conveniently, OpenCore also has a [guide](https://dortania.github.io/OpenCore-Install-Guide/) which was easy for me to follow.

Great! I could follow the guide for my laptop, which had a Kaby Lake CPU and UHD620 iGPU graphics, and create an EFI with OpenCore to install macOS on.

### First signs of trouble
* WiFi + Bluetooth incompatibility
	* macOS is a picky operating system. As it only needs to support a limited number of laptops and iMacs, each with specified hardware, I was bound to have _some_ sort of incompatible hardware. As Apple macOS devices all contain Broadcom WiFi cards, macOS only supports WiFi and Bluetooth for those WiFi cards.
	* Unfortunately, my laptop contained a Qualcomm Atheros QC6174a Wireless Network Adapter. Bummer.
	* This meant that I wasn't able to
* NVIDIA optimus being unsupported
	* My laptop contained both an integrated and dedicated GPU to switch between at any given time. This was a cool feature on my other operating systems, as I was able to save some battery life when I wasn't doing anything graphically intensive.
* iGPU not working initially
* Sound codec not working without Codeccommander
### Working around problems
* Trying to use ethernet for installation
* Buying a wifi adapter

## Compatibility issues between OSes
### Bootloader problems
Previously on my dual boot, I used REFInd as a bootloader to select between the Windows and Linux EFI partitions, as they were each on separate drives. I'd heard of horror stories where Windows updates would wipe the Linux bootloader if they were both installed on the same drive.

However, OpenCore is also a bootloader, which meant I had to either get rid of REFInd and use OpenCore to boot each OS directly, or chainload to REFInd when I wanted to boot either Windows or Linux.

## What have I learnt from this?