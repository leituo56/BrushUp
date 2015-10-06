# File IO
* do_something < input-file
* do_something > output-file
* do_something 2> error-file

# Pipe
* cmd1 | cmd2 | cmd3

# Find files
* `locate zip | grep bin` (sudo updatedb to update file db)
* `find /usr -name <file>`
* `find /usr -type d -name <file>`
* `find /usr -type f -name <file>`
* `find . -name "a*.md" -exec touch {} ';'`  , touch all the file finded
* `find ~/Documents/ -ctime -2` , find files change less than 2 days ago
* `find ~/Documents/ -size +10M -exec ls -l {} \;`


# Wild Card
* ? single char
* \* multi char
* [a-c] set of char, a or b or c
* [!abc] any char except a,b,c


# Compare Files
* `diff <file1> <file2>`
* `diff3 <MY-FILE> <COMMON-FILE> <YOUR-FILE>`
* `diff -Nur originalfile newfile > patchfile`
* `patch originalfile patchfile`

# File Info
* `file <file1>` , get file info

# Backups and Compress
* `rsync -r project-X archive-machine:archives/project-X`, copy file from remote machine, only copy changed parts.
* `gzip -r projectX` , gzip is common and fast
* `gunzip foo`
* `bzip2 *` , bzip2 gets smaller file, use more time
* `bunzip2 *.bz2`
* `xz *` , xz is most space efficient compression.
* `xz -dk bar.xz`
* `tar zcvf mydir.tar.gz mydir` , tar and zip
* `tar xvf mydir.tar`
