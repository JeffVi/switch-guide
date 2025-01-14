import{_ as t,c as a,a1 as o,o as n}from"./chunks/framework.DSsUAKzO.js";const i="/switch-guide/assets/ftpd.ZSoxMwwn.jpg",p=JSON.parse('{"title":"FTPD","description":"","frontmatter":{},"headers":[],"relativePath":"homebrew/ftpd.md","filePath":"homebrew/ftpd.md"}'),r={name:"homebrew/ftpd.md"};function s(c,e,l,d,h,u){return n(),a("div",null,e[0]||(e[0]=[o('<h1 id="ftpd" tabindex="-1">FTPD <a class="header-anchor" href="#ftpd" aria-label="Permalink to &quot;FTPD&quot;">​</a></h1><p>FTPD is simply an FTP server for the Switch, it can be used to transfer files wirelessly to- and from- your microSD card.</p><h2 id="usage-requirements" tabindex="-1">Usage requirements: <a class="header-anchor" href="#usage-requirements" aria-label="Permalink to &quot;Usage requirements:&quot;">​</a></h2><ul><li>An FTP client such as <a href="https://winscp.net/eng/download.php" target="_blank" rel="noreferrer">WinSCP</a> (Windows)</li><li>Any device that can connect to an FTP server with an FTP client</li></ul><h2 id="usage-instructions" tabindex="-1">Usage instructions: <a class="header-anchor" href="#usage-instructions" aria-label="Permalink to &quot;Usage instructions:&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Note</strong></p><p>This section assumes that the device running the FTP client and your Switch are connected to the same network. If it&#39;s not, make sure they are connected to the same network before continuing.</p></div><ol><li>Launch the FTPD Homebrew app from the Homebrew menu.</li><li>Open your FTP client of choice.</li><li>Add a new connection and in the <code>Host</code> field of your FTP client, put in the IP address of your Switch mentioned in the top left of FTPD. <ul><li>If applicable in your FTP client, check the <code>Anonymous</code> box.</li></ul></li><li>Type in port <code>5000</code> for the port and attempt to connect to your Switch.</li><li>You should now be able to access your microSD card wirelessly and transfer files to- and from- the microSD card.</li></ol><h3 id="ftpd-s-main-menu" tabindex="-1">FTPD&#39;s main menu: <a class="header-anchor" href="#ftpd-s-main-menu" aria-label="Permalink to &quot;FTPD&#39;s main menu:&quot;">​</a></h3><p><img src="'+i+'" alt="FTPD"></p><h2 id="additional-information" tabindex="-1">Additional information: <a class="header-anchor" href="#additional-information" aria-label="Permalink to &quot;Additional information:&quot;">​</a></h2><p>FTPD can also run in the form of a background process (sysmodule), called sys-ftpd. It can be found <a href="https://github.com/cathery/sys-ftpd" target="_blank" rel="noreferrer">here</a>, usage and configuration options are mentioned there as well.</p>',11)]))}const f=t(r,[["render",s]]);export{p as __pageData,f as default};
