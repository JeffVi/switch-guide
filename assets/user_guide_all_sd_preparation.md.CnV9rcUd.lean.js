import{_ as o,c as t,a1 as r,o as a}from"./chunks/framework.DSsUAKzO.js";const l="/switch-guide/assets/sdfiles3.CdEVBdlM.png",u=JSON.parse('{"title":"microSD Card preparations","description":"","frontmatter":{},"headers":[],"relativePath":"user_guide/all/sd_preparation.md","filePath":"user_guide/all/sd_preparation.md"}'),i={name:"user_guide/all/sd_preparation.md"};function s(d,e,n,c,h,p){return a(),t("div",null,e[0]||(e[0]=[r('<h1 id="microsd-card-preparations" tabindex="-1">microSD Card preparations <a class="header-anchor" href="#microsd-card-preparations" aria-label="Permalink to &quot;microSD Card preparations&quot;">​</a></h1><p>We will now place the required files for the Atmosphère custom firmware and some additional homebrew files on the microSD card.</p><p>Atmosphere has its own bootloader, called fusee. For the purposes of this guide we will be using Hekate instead, so that we can back up the system&#39;s NAND (internal storage) and take advantage of other advanced features in the future.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>File name extensions</strong></p><p>If you use Windows, you should enable file name extensions before continuing. See <a href="./../../extras/showing_file_extensions.html">this link</a> for a guide on how to do this.</p></div><h2 id="what-you-need" tabindex="-1">What you need: <a class="header-anchor" href="#what-you-need" aria-label="Permalink to &quot;What you need:&quot;">​</a></h2><ul><li>The latest release of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank" rel="noreferrer">Hekate</a> (Download the <code>hekate_ctcaer_(version).zip</code> release of hekate)</li><li>The Hekate config file: <a href="/files/emu/hekate_ipl.ini" download>hekate_ipl.ini</a></li><li>The DNS.MITM DNS redirection config: <a href="/files/emummc.txt" download>emummc.txt</a></li><li>The bootlogo zip folder: <a href="/files/bootlogos.zip" download>bootlogos.zip</a></li><li>The latest release of <a href="https://github.com/Atmosphere-NX/Atmosphere/releases" target="_blank" rel="noreferrer">Atmosphere</a>. Download the <code>atmosphere-(version)-master-(version)+hbl-(version)+hbmenu-(version).zip</code> release of Atmosphere.</li><li>The latest release of <a href="https://github.com/J-D-K/JKSV/releases" target="_blank" rel="noreferrer">JKSV</a> (Download the <code>JKSV.nro</code> release of JKSV)</li><li>The latest release of <a href="https://github.com/mtheall/ftpd/releases" target="_blank" rel="noreferrer">FTPD</a> (Download the <code>ftpd.nro</code> release of FTPD)</li><li>The latest release of <a href="https://github.com/exelix11/SwitchThemeInjector/releases" target="_blank" rel="noreferrer">NXThemesInstaller</a> (Download the <code>NXThemesInstaller.nro</code> release of NXThemesInstaller)</li><li>The latest release of <a href="https://github.com/joel16/NX-Shell/releases" target="_blank" rel="noreferrer">NX-Shell</a> (Download the <code>NX-Shell.nro</code> release of nx-shell)</li><li>The latest release of <a href="https://github.com/XorTroll/Goldleaf/releases" target="_blank" rel="noreferrer">Goldleaf</a> (Download the <code>Goldleaf.nro</code> release of Goldleaf)</li></ul><h2 id="instructions" tabindex="-1">Instructions: <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions:&quot;">​</a></h2><ol><li><p>Navigate to the accessible drive.</p></li><li><p>Copy <em>the contents of</em> the Atmosphère<code>.zip</code> file to the root of your microSD card.</p></li><li><p>Copy the <code>bootloader</code> folder from the Hekate <code>.zip</code> file to the root of your microSD card.</p><ul><li>If you&#39;re asked to replace files or merge folders, do so.</li></ul></li><li><p>Copy the <code>bootloader</code> folder from the <code>bootlogos.zip</code> file to the root of your microSD card.</p><ul><li>If you&#39;re asked to merge the bootloader folders, do so.</li></ul></li><li><p>Copy <code>hekate_ipl.ini</code> to the <code>bootloader</code> folder on your microSD card.</p><ul><li>If you&#39;re asked to replace the file, do so.</li></ul></li><li><p>Create a folder named <code>hosts</code> inside the <code>atmosphere</code> folder on your microSD card, and put <code>emummc.txt</code> inside of the <code>hosts</code> folder.</p></li><li><p>Copy <code>JKSV.nro</code>, <code>ftpd.nro</code>, <code>NxThemesInstaller.nro</code>, <code>NX-Shell.nro</code> and <code>Goldleaf.nro</code> to the <code>switch</code> folder on your microSD card.</p></li><li><p>If you were already using your microSD card as a storage device for your games and backed up the Nintendo folder before partitioning your microSD card, please place it back on the root of your microSD card now.</p><ul><li>If you created an emuMMC on the previous page, don&#39;t forget to copy the Nintendo folder to <code>sd:/emuMMC/RAW1/</code>!</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>About emummc.txt</strong></p><p>Putting the <code>emummc.txt</code> file provided by this guide into <code>/atmosphere/hosts</code> will prevent your emuMMC (emuNAND) from connecting to Nintendo. Not doing this will likely result in a ban.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Your microSD card should look similar to the image below. The <code>Nintendo</code> folder will not be present if your Switch has not already booted with the microSD card inserted and the <code>emuMMC</code> folder will not be present if you&#39;re following the sysCFW path of the guide/you haven&#39;t created an emuMMC! <code>payload.bin</code> will not be present if you&#39;re using an unpatched Switch.</p><p><img src="'+l+'" alt="sdfilesimg"></p></div></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="./making_essential_backups.html">Continue to Making Essential Backups</a></p></div>',9)]))}const m=o(i,[["render",s]]);export{u as __pageData,m as default};
