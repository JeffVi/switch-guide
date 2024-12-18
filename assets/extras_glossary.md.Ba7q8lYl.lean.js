import{_ as t,c as o,a1 as r,o as i}from"./chunks/framework.DdzuDVQG.js";const u=JSON.parse('{"title":"Glossary of common hacking terms","description":"","frontmatter":{},"headers":[],"relativePath":"extras/glossary.md","filePath":"extras/glossary.md"}'),n={name:"extras/glossary.md"};function a(s,e,l,h,c,d){return i(),o("div",null,e[0]||(e[0]=[r('<h1 id="glossary-of-common-hacking-terms" tabindex="-1">Glossary of common hacking terms <a class="header-anchor" href="#glossary-of-common-hacking-terms" aria-label="Permalink to &quot;Glossary of common hacking terms&quot;">​</a></h1><p>This section is dedicated to explaining a number of common terms that are used when hacking the Nintendo Switch as well as linking a number of resources that can help fledgling developers or curious users.</p><h2 id="hacking-terms" tabindex="-1">Hacking terms <a class="header-anchor" href="#hacking-terms" aria-label="Permalink to &quot;Hacking terms&quot;">​</a></h2><p>The following list is in alphabetical order.</p><ul><li><strong>90DNS</strong>: DNS that blocks system updates on the Nintendo Switch. This can be enabled by following the guide <a href="./blocking_nintendo.html">here</a>.</li><li><strong><a href="https://github.com/Atmosphere-NX/Atmosphere" target="_blank" rel="noreferrer">Atmosphère</a></strong>: The CFW developed by the Atmosphere-NX organization on GitHub and the one used in this guide.</li><li><strong>AutoRCM</strong>: A method that corrupts parts of your boot0 and boot1, causing the Switch to boot into RCM automatically. Using this requires an additional peripheral (such as a computer, phone, dongle, or modchip) to be able to boot your Switch.</li><li><strong>boot0 and boot1</strong>: Two partitions of the Switch NAND.</li><li><strong>bootROM</strong>: An initial system loader whose primary purpose is to initialise a device&#39;s hardware and prepare it for use. It is also typically responsible for authenticating hardware and software necessary to start the device. A bootROM is a ROM, meaning that it is etched into the device and cannot be rewritten or upgraded without replacing the hardware entirely.</li><li><strong>CFW</strong>: Short for custom firmware. CFW is a collection of patches which partially or largely modify the functionality of the underlying OS. It is not used to refer to the usage of brand new operating systems entirely.</li><li><strong>Deja Vu</strong>: An unreleased exploit chain for the Nintendo Switch. The completely unpatched version of this chain will grant access to TrustZone, which effectively means being able to enter CFW. The TrustZone part of this exploit was patched in firmware version 5.0.0 and up, but normal homebrew access can still be gained up to firmware version 6.0.1.</li><li><strong>DNS</strong>: <a href="https://en.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noreferrer">Domain Name System</a>. Basically, the internet&#39;s addressbook. If you visit a website, the DNS lookup is what tells you what server the site is hosted on.</li><li><strong>Dongle</strong>: Device you can plug in the USB-C of your Switch to automatically send a payload if your Switch is in RCM.</li><li><strong>Encryption keys</strong>: Keys used to encrypt data from the Nintendo Switch. <ul><li><strong>BIS keys</strong>: Built-in Storage keys. They are used to encrypt/decrypt the NAND&#39;s contents.</li></ul></li><li><strong><a href="https://github.com/Qyriad/fusee-launcher/blob/master/report/fusee_gelee.md" target="_blank" rel="noreferrer">fusee-gelee</a>/<a href="https://github.com/fail0verflow/shofel2" target="_blank" rel="noreferrer">ShofEL2</a></strong>: Two names for two different implementations of the <a href="https://nvd.nist.gov/vuln/detail/CVE-2018-6242" target="_blank" rel="noreferrer">same exploit</a>. This is an exploit that grants full bootROM access to the Nintendo Switch from the Tegra X1&#39;s RCM, and permitting us to run CFW. This exploit requires an external device or a tiny hardware modification. fusee-gelee is developed by an ex-ReSwitched developer, while ShofEL2 is developed by the failoverfl0w team. This guide uses fusee-gelee.</li><li><strong><a href="https://github.com/SciresM/hactool" target="_blank" rel="noreferrer">hactool</a></strong>: Software used to decrypt Nintendo Switch files like .XCI and .NSP files.</li><li><strong><a href="https://github.com/CTCaer/hekate" target="_blank" rel="noreferrer">Hekate</a></strong>: A bootloader for the Nintendo Switch. The current guide uses this in combination with essential files from Atmosphère to boot CFW.</li><li><strong>Homebrew</strong>: Unsigned code that can be ran on the Nintendo Switch. Examples of homebrew include save editors, emulators and ports of PC games, but can also include completely original games. To run this code, you need to have an exploit.</li><li><strong>Homebrew launcher</strong>: Software developed by the Switchbrew team that lets you run other Homebrew.</li><li><strong>Jig</strong>: Refers to a piece of hardware that you can put in the Joycon rail to enter RCM.</li><li><strong>KIP</strong>: Short for Kernel Initial Process. These files can be loaded in when the Switch boots in CFW and provide additional functionality.</li><li><strong>NAND</strong>: Referred to as &quot;Internal Storage&quot; within Nintendo&#39;s consoles, this is the storage chip that the console saves the system software and internal settings to. The name refers to the type of logic gate employed, known as &quot;not-AND&quot; in this case.</li><li><strong>nx-hbloader</strong>: Intermediary program used to load the Homebrew Launcher from CFW developed by Switchbrew. Comes bundled with Atmosphere.</li><li><strong>PRODINFO</strong>: A partition on the NAND of your Switch. This along with boot0 and boot1 is the only part of your Switch that can render it unbootable if improperly modified. Atmosphère backs up this partition on booting and it is included in your NAND backup.</li><li><strong>qLaunch</strong>: This is similar to the HOME Menu on the Nintendo 3DS. It serves as a launcher for many applets such as System Settings, the main home menu (ResidentMenu), User/Friends Page (myPage), Lock Screen (Entrance), News menu (Notification), and so on.</li><li><strong>ReSwitched</strong>: A hacking team that is one of the main developers for Atmosphère.</li><li><strong>RCM</strong>: A shorthand for &quot;Recovery Mode&quot;. When talking about hacking the Switch, this commonly refers to the Recovery Mode in the Tegra X1 chip that is included in the Nintendo Switch. Can be entered by holding down the Tegra X1 home button. This button is not the same as the home button on the joycons. Ways of pressing this button can be found <a href="./../user_guide/rcm/entering_rcm.html">here</a>.</li><li><strong>ROM</strong>: &quot;Read-only memory&quot;; a section of data that cannot be modified once it is written. <br> Some forms of ROM can be rewritten under very specific scenarios, such as <a href="https://en.wikipedia.org/wiki/EEPROM" target="_blank" rel="noreferrer">EEPROM</a> (electronically-erasable/programmable ROM).</li><li><strong><a href="https://github.com/eliboa/TegraRcmGUI/releases" target="_blank" rel="noreferrer">TegraRCMGUI</a>/<a href="https://github.com/nh-server/fusee-interfacee-tk/releases" target="_blank" rel="noreferrer">fusee-interface-tk</a></strong>: Software used to run the fusee-gelee exploit on the Switch.</li><li><strong>Stock</strong>: &quot;Stock&quot; generally refers to the original factory operation or state of something. <br> For example, stock firmware means the original operation of Horizon, not using CFW.</li><li><strong>Tegra X1</strong>: <a href="https://en.wikipedia.org/wiki/Tegra#Tegra_X1" target="_blank" rel="noreferrer">A chip made by Nvidia that is used in the Nintendo Switch.</a></li><li><strong>Trinket</strong>: A category of modchip that is soldered on the Switch motherboard to automatically send a payload if it is in RCM. They are not necessarily always the Trinket brand, as this refers to the category of modchip.</li><li><strong>TrustZone</strong>: The highest security level on the Switch.</li><li><strong>XCI/NSP</strong>: Format used to dump games to. XCI is used for gamecard dumps, while NSP is for dumping digital titles.</li></ul><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p>The resources below are for users and developers interested in developing Homebrew or for those that want to get a more technical understanding of the various concepts.</p><ul><li>The <a href="https://reswitched.github.io/faq/" target="_blank" rel="noreferrer">ReSwitched FAQ</a> lists a general overview of how the Switch works.</li><li><a href="https://switchbrew.org" target="_blank" rel="noreferrer">Switchbrew</a> is a wiki detailing the inner workings of the Nintendo Switch&#39;s firmware.</li><li><a href="https://switchbrew.github.io/libnx/index.html" target="_blank" rel="noreferrer">libNX documentation</a>. LibNX is the library used to develop Homebrew on the Nintendo Switch.</li></ul>',8)]))}const m=t(n,[["render",a]]);export{u as __pageData,m as default};