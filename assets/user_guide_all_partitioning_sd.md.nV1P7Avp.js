import{_ as t,c as o,a1 as i,o as a}from"./chunks/framework.DSsUAKzO.js";const r="/switch-guide/assets/hekate-partitioning-emu.yliWlobH.png",m=JSON.parse('{"title":"Partitioning the microSD Card and creating the emuMMC","description":"","frontmatter":{},"headers":[],"relativePath":"user_guide/all/partitioning_sd.md","filePath":"user_guide/all/partitioning_sd.md"}'),n={name:"user_guide/all/partitioning_sd.md"};function d(c,e,s,l,u,h){return a(),o("div",null,e[0]||(e[0]=[i('<h1 id="partitioning-the-microsd-card-and-creating-the-emummc" tabindex="-1">Partitioning the microSD Card and creating the emuMMC <a class="header-anchor" href="#partitioning-the-microsd-card-and-creating-the-emummc" aria-label="Permalink to &quot;Partitioning the microSD Card and creating the emuMMC&quot;">​</a></h1><h2 id="what-you-need" tabindex="-1">What you need: <a class="header-anchor" href="#what-you-need" aria-label="Permalink to &quot;What you need:&quot;">​</a></h2><ul><li>Your Switch loaded into Hekate</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>Partitioning <em>WILL</em> wipe all data on your microSD card!</strong></p><p>In case you missed the warning earlier, your microSD card will be wiped during this page. Go to <code>Tools</code> &gt; <code>USB Tools</code> &gt; <code>SD Card</code>, plug your switch into your PC via USB and back up the contents of your microSD card to your PC if you haven&#39;t done so yet. If you don&#39;t mind redownloading all the games stored on the microSD card and/or all other (potentially important) files getting deleted, you may skip this.</p></div><h2 id="instructions" tabindex="-1">Instructions: <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions:&quot;">​</a></h2><ol><li>Navigate to <code>Tools</code> &gt; <code>Partition SD card</code></li><li>Set the <code>emuMMC (RAW)</code> slider to <code>29 FULL</code> in the middle of the bar. <ul><li>Set the <code>emuMMC (RAW)</code> slider to <code>58 FULL</code> if you&#39;re on an OLED Switch.</li><li>If you wish to install Android and/or Linux later, partition your microSD card here accordingly by moving the sliders you see during this step. We recommend setting the <code>Android (USER)</code> and <code>Linux (EXT4)</code> sliders to at least 16GB.</li></ul></li><li>Navigate to <code>Next Step</code> at the bottom right, then select <code>Start</code> in the menu that appears. <ul><li>For Android; Select <code>Legacy</code> partitioning for Android 10/11 and <code>Dynamic</code> partitioning for Android 13+. Legacy and Dynamic partitioning are <strong>NOT</strong> intercompatible.</li></ul></li><li>From hekate&#39;s <code>Home</code> menu, navigate to <code>emuMMC</code> &gt; <code>Create emuMMC</code> &gt; <code>SD Partition</code> &gt; <code>Part 1</code> and wait for Hekate to complete creating the emuMMC.</li><li>Close the emuMMC creation menu by navigating to the <code>Close</code> button, then navigate to <code>Change emuMMC</code> &gt; <code>SD RAW 1</code> and press the <code>Close</code> button twice in the top right to return to hekate&#39;s <code>Home</code> menu.</li><li>Once done, go to <code>Tools</code> &gt; <code>USB Tools</code> &gt; <code>SD Card</code> and plug your Switch into your PC via USB.</li><li>Continue with the next step of the guide. <ul><li>Your microSD card should now be accessible on your PC, if not, consult the warning message below.</li></ul></li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>Your microSD card is not showing up or Windows complaining about an unreadable drive</strong></p><p>If you get the issue that Windows says the microSD card is unreadable and wants to format it, do not format! This is likely your emuMMC partition. After partitioning your SD, your microSD will show up as 2 drives on your PC. Use the accessible drive.</p><p>If your microSD card isn&#39;t showing up at all, ensure that you&#39;re using a USB cable capable of data transfer and that, if you use Windows, Windows has assigned a drive letter to the FAT32 partition of your SD. If you still experience errors, join the <a href="https://discord.gg/C29hYvh" target="_blank">NH-Discord server</a> for support.</p></div><p><img src="'+r+'" alt="hekate-partitioning-emu"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="./sd_preparation.html">Continue to SD Preparations</a></p></div>',9)]))}const p=t(n,[["render",d]]);export{m as __pageData,p as default};
