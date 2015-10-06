# File System
* '/' is root directory, where OS is installed
* Drives store in like '/dev/sda1', and mounted to a directory
* Partition e.g. /, /home, /tmp
* Filesystem Table: /etc/fstab
* `df`

# Directory
* /dev: devices
* /bin, /sbin, /usr/bin, /usr/sbin: binary files
* /var: files tends to be change size. like log, db, tmp, lib, ftp, www etc.
* /etc: home or system configuration files
* /boot: essentials to boot system, e.g. grub
* /lib, /lib64: libraries and dlls for essential binaries
* /media: removable media
* /opt: optional application packages
* /usr: multi user applications
* /tmp: tmp files

# Boot
* Power On
* BIOS(Basic Input/Output System), check keyboard, memory, screen
* Master Boot Records (MBR)
* Boot Loader(e.g. GRUB)
* Load Kernel & RAM based file system
* mount and locate device
* /sbin/init, run services
* Login
* X Window System

# Basic cmd
* `shutdown 15:36`
* `pwd`
* `cd <dir>` (-, \.\.)
* `ls` (-lab)
* `ln <src file/dir> <new link file>`
* `cp <src file> <new file>`
* `mv <src file> <new location>`
* `pushd` , `popd` , `dirs`

* `less`
* `cat <file1> <file2>`
* `tac`
* `tail <file> -n 20`
* `head <file> -n 20`
* `touch`
* `mkdir`
* `rmdir`
* `rm -rf`
