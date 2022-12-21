# One Month Gentoo Challenge
## How did it go?

On the 2nd of February, 2022, I've finally managed to complete the One Month Gentoo Challenge, and so I thought I'd share my thoughts about it here.

### What even is Gentoo Linux?

Gentoo Linux is a distribution of GNU/Linux.
It is minimal, meaning that in its purest form, there is barely anything installed. In some cases, you might not even have a text editor, a graphic user interface (GUI) or anything that gives you the ability to even connect to the internet. You have to install all of this manually during the initial installation process. You can also go back into the installer and do it retrospectively if need be, but generally that's only when you forget something and can't function without it.
It is source-based, meaning that instead of being able to download any app and having the ability to run it right afterwards, you instead download the code, which your computer has to then translate into binary, so that it can actually run the app. This process is called compiling, and can take from mere seconds to possibly even hours, even on high-end hardware. This, however, also has its pros, as it gives the user a lot more control over what is installed on their machine.
That is because Gentoo has a system called USE flags, which are a way for the user to dictate what to compile and what not to compile into an application. So for example, let's say I don't want to give Firefox the ability to print out pages. On most distros, there's no way for me to do this. But on Gentoo, I can simply just remove the *cups* USE flag. (CUPS being the Common UNIX Printing System.) And ta-da! After compiling, you have Firefox without the ability to print. This might sound stupid and anti-features, but in reality if you don't use a feature, why even have it in the first place? It just makes not only the app, but the whole system run smoother and faster, because the system resources that would normally be given to that feature are now free and can be used for something else. It doesn't play too well in some cases though, because some apps force you to use some USE flags because they aren't able to run otherwise due to poor implementation from the app developers. This is something I found out about the hard way during the course of this challenge.

### Why did I do it?

I've been playing around with the idea of using Gentoo for quite a while, and I've installed it multiple times over the course of the past year or so, but I never managed to really commit to it, which is kinda the whole point of this challenge. And so, I started.

### The beginnings

On the 2nd of January, 2022, a day after I came home from a trip to my friends, I started installing Gentoo on my main machine. It wasn't my first time doing it, so it wasn't that hard, although I still needed the manual. (Which isn't even that surprising tbh..) And after not even 24 hours, I had a fully functioning Gentoo Linux install.. No GUI yet though, I'll get to that later. Because first, I gotta talk about

### The Rules

The rules are pretty simple imo, and I probably should've been more strict with them.

- For as long as your Gentoo install is working, and you don't need a Windows-only application, use it.
	- Exception: Moving something from one install to the other. (eg. MultiMC instances)
- If it isn't working, feel free to use any other linux distribution, but only for the sake of fixing the Gentoo install.
- You can use Windows if need be, but generally try to stay away from it.
- Try to use flatpaks, app images, snaps, binary packages, and binary package managers as little as possible.

And that's pretty much it when it comes to the rules. I went pretty easy for myself, because I still wanted it to be fun and didn't want to restrict myself from the things I usually do.

### Infinite possibilities

So after installing Gentoo, I was kinda stuck, because I didn't know what to do next. Do I wanna install dwm for my window manager, or do I wanna go for something completely different? What about audio systems? I've seen people call PulseAudio bloat, and although idk why they do it, why not try something else?

I ended up using RiverWM on Wayland together with PipeWire. Wayland being the replacement for the X display server, which makes it possible to display windows, apps, etc. instead of having a terminal. X.org is quite old and ineffective, so it's only natural for something like Wayland to emerge, so I thought I'd give it a shot. RiverWM is a bspwm and dwm inspired compositor for Wayland. As I said earlier, I use dwm, and I used to use bspwm before switching to dwm, so it sounded pretty natural for me to try it out. And PipeWire being the server for handling audio. Linux has something called ALSA built in, but it's so barebones and so basic that you can't even listen to music playing from a browser while VCing with friends on Discord for example, so there are servers like PulseAudio and PipeWire that are built around ALSA to work with this sort of stuff..

However, my Wayland ventures did not last long. Discord still doesn't have Wayland support, so I was pretty much forced to just give up and go use dwm again. I did use PipeWire for the majority of the challenge, and I will try Wayland again someday though.

### Installing the usual

So after being done with setting up a display server, a window manager, and an audio system, it was time to get ready for what I usually do on a computer. I installed the usual suite of apps I use, such as Firefox, Discord, kitty and vim, and it went pretty well for the most part aside from a couple hiccups with Discord, and... Surprisingly enough, Steam was quite painful to install.. [I found this one video from Mental Outlaw, talking about how to install Steam on Gentoo,](https://youtu.be/ePUIMnIFkww) but for some reason I just couldn't get it working. I think it was because the repositories were dead? Idk.. I ended up having to install it through flatpak, but funny enough I didn't even use it throughout the entirity of the challenge. *Instead I spent most of my time playing Minecraft. :p*

### First signs of pain

So uh.. This is kinda the part when I started realizing USE flags might not be as awesome as I initially thought they would be, because during the process of installing what I usually use, I got into what is essentially just dependency hell.. That turned out to be quite a common theme throughout the challenge, and sometimes it took me even over half an hour to fix, so uh.. I really wouldn't call that fun in any sense of the word. Also, let's talk unstable packages. A lot of nicher packages that I like to use were marked as unstable, but as someone pointed out on reddit, it's marked unstable just because it wasn't properly tested on Gentoo yet, and the app itself is perfectly working. Meaning that I had to give all of those apps the ~amd64 keyword so it's able to install. This tells emerge, the Gentoo package manager, to install the unstable version of that package. And I had to do that way more than I'd find reasonable. I guess I could've just set the ~amd64 keyword in my make.conf, but I don't want an entirely cutting-edge system so I didn't do that. (In retrospect that was probably a mistake, but oh well.. maybe next time if there's gonna be one)

### Getting comfy

After I installed all of the apps I use, I thought I might as well just start getting comfy in the install since I'm gonna be using it for quite some time. I couldn't just bring over my dotfiles, because my dotfiles repository was heavily out of date (unlike now!!) and I didn't rice the install I was using before whatsoever, so I had to start fresh. That, however, turned out surprisingly well! I was really happy with how I riced everything, I love the colors, I love how everything functions, I love how everything looks, and heck, for the first time ever I even riced my shell! I was genuinely really happy with what I did, and I ended up even moving those configs to my main install, and they're all up in my [dotfiles repo](https://github.com/Call-Me-Apro/.dotfiles) now!

### Back to.. normal?

At this point, I was content with what I did with the install. It was a very useable install, and the remaining time I had with the challenge pretty much ran by with not much else to say. I was still constrained by some errors I made during installation that I was too lazy to fix, like not compiling virtualization drivers into the kernel, and not really figuring out unicode support for Firefox, but for the most part it was working, and it was working well. And so, a week or two ran by, and I was done.

### Back to normal!

February 2nd came by in no time, and I ended up sticking around with the install for a bit longer due to not really having the energy to move due to mental health issues and visiting my girlfriend. (3) After I managed to at least get a glimpse of energy though, I started moving all my configs, and that's pretty much where I am now..

### Ending thoughts

I'm really glad that I did this, as it taught me a lot about linux and the things surrounding it. However, in the long term, I don't think Gentoo is a viable option for me personally.

PS: yuka is currently my hat
