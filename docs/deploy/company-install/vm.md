# Virtual machines

English | [中文](vm.zh.md)

The desktop application expects a full macOS or Windows guest with a graphical session.

- Snapshot the VM before installing and after [verification](verify.md).
- Use the matching installer for the guest architecture. Do not run the arm64 DMG in an emulated arm64 VM unless the hypervisor provides the required acceleration.
- Windows guests need at least 8 GB RAM and 30 GB free disk. macOS guests need the vendor's supported virtualization stack and 8 GB RAM.
- Grant display, microphone, and accessibility permissions explicitly; Computer Use needs the macOS accessibility grants.
- A Linux VM cannot host the desktop application. Run the Web profile there instead.

Record the hypervisor, guest OS build, allocated CPU/RAM/disk, and the checksum used.
