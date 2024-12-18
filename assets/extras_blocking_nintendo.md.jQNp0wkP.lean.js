import{_ as t,c as o,a1 as i,o as n}from"./chunks/framework.DdzuDVQG.js";const a="/assets/dnsmitm.B63x1c1o.png",s="/assets/blocking_updates.Cr-9px2R.png",r="/assets/90dns_tester_switch.oOLnop9Q.jpg",f=JSON.parse('{"title":"Blocking Nintendo servers","description":"","frontmatter":{},"headers":[],"relativePath":"extras/blocking_nintendo.md","filePath":"extras/blocking_nintendo.md"}'),l={name:"extras/blocking_nintendo.md"};function c(d,e,h,p,u,m){return n(),o("div",null,e[0]||(e[0]=[i('<h1 id="blocking-nintendo-servers" tabindex="-1">Blocking Nintendo servers <a class="header-anchor" href="#blocking-nintendo-servers" aria-label="Permalink to &quot;Blocking Nintendo servers&quot;">​</a></h1><p>This page will help you set up a method to block all communication with Nintendo. This will stop any updates and reporting to Nintendo, but it will prevent use of the eShop and online games.</p><h2 id="instructions-ams-dns-redirection" tabindex="-1">Instructions (AMS DNS redirection) <a class="header-anchor" href="#instructions-ams-dns-redirection" aria-label="Permalink to &quot;Instructions (AMS DNS redirection)&quot;">​</a></h2><p>You can configure Atmosphère to automatically redirect any requests directed to Nintendo to nothing instead. Documentation about this feature can be <a href="https://github.com/Atmosphere-NX/Atmosphere/blob/master/docs/features/dns_mitm.md" target="_blank" rel="noreferrer">found here</a>. The section below will help you set up DNS redirection on your emummc. Note that this will only apply when you are using cfw.</p><h3 id="what-you-need" tabindex="-1">What you need: <a class="header-anchor" href="#what-you-need" aria-label="Permalink to &quot;What you need:&quot;">​</a></h3><ul><li><a href="/files/emummc.txt" download>emummc.txt</a></li><li>Atmosphère 0.18.0 or higher</li></ul><h3 id="setup" tabindex="-1">Setup: <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup:&quot;">​</a></h3><ol><li>Enter RCM and inject the Hekate payload. <ul><li>If you use a modchipped Switch, you can simply just turn your Switch on with the Hekate payload renamed to <code>payload.bin</code> on the root of your SD.</li></ul></li><li>Navigate to <code>Tools</code> &gt; <code>USB Tools</code> &gt; <code>SD Card</code> and plug your Switch into your PC via USB.</li><li>Enter the <code>atmosphere</code> folder.</li><li>If it doesn&#39;t exist already, create a folder named <code>hosts</code> in the <code>atmosphere</code> folder. <ul><li>You should end up with the <code>sd:/atmosphere/hosts</code> directory.</li></ul></li><li>Copy the <code>emummc.txt</code> file into the hosts folder. <ul><li>If you want to apply the DNS redirection to sysmmc instead of emummc, rename the file to <code>sysmmc.txt</code></li></ul></li><li>Eject the <code>UMS</code> device safely from within your computer&#39;s operating system and boot into CFW.</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Verify functionality</strong></p><p>You can verify the functionality of the DNS redirection by booting into emummc (or sysmmc if you applied the config to sys), and powering off after.</p><p>A report will be generated in <code>sd:/atmosphere/logs</code> called <code>dns_mitm_startup.log</code>. If this starts with the following, the dns redirection is active</p><p><img src="'+a+'" alt="dnsmitmlog"></p></div><h2 id="instructions-90dns" tabindex="-1">Instructions (90DNS) <a class="header-anchor" href="#instructions-90dns" aria-label="Permalink to &quot;Instructions (90DNS)&quot;">​</a></h2><p>You can add a custom DNS to your WiFi connection that will block all communication with Nintendo&#39;s servers. We will be using <a href="https://gitlab.com/a/90dns" target="_blank" rel="noreferrer">90DNS</a>, a community-run custom DNS server. If you prefer, you can run your own DNS server following the instructions on the <a href="https://gitlab.com/a/90dns/blob/master/SELFHOST.md" target="_blank" rel="noreferrer">GitLab repository.</a></p><p>Enter the console&#39;s System Settings, and then proceed to the Internet tab. From here:</p><h3 id="setting-up-a-new-connection-via-wi-fi" tabindex="-1">Setting up a new connection via Wi-Fi <a class="header-anchor" href="#setting-up-a-new-connection-via-wi-fi" aria-label="Permalink to &quot;Setting up a new connection via Wi-Fi&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>Open WiFi networks without a password</strong></p><p>Not all WiFi networks require a password to connect. If your network does not use one, you can use the <code>Manual Setup</code> option, located at the very bottom of the <code>Internet Settings</code> screen below all other WiFi networks.</p></div><ol><li><p>Select your WiFi network from the list of networks.</p></li><li><p>Enter an <strong>incorrect</strong> password that is 8 characters long and press <code>OK</code>.</p></li><li><p>After a few moments of attempting to connect, the console will display a connection error.</p></li><li><p>Press <code>OK</code> to close the error message.</p></li><li><p>Press <code>Close</code> when it offers to display more details about the error.</p></li><li><p>When asked if you want to re-enter the password, pick <code>View Settings</code>.</p></li><li><p>Change <code>DNS Settings</code> to <code>Manual</code>.</p></li><li><p>Pick the server that is the closest to your location out of the below chart and enter its <code>Primary</code> and <code>Secondary</code> DNS into your connection settings.</p></li><li><p>Enter the correct password for your WiFi connection.</p></li><li><p>Save the settings and test the connection.</p><hr></li></ol><h3 id="editing-an-existing-wifi-connection" tabindex="-1">Editing an existing WiFi connection <a class="header-anchor" href="#editing-an-existing-wifi-connection" aria-label="Permalink to &quot;Editing an existing WiFi connection&quot;">​</a></h3><ol><li><p>Select your existing WiFi network from the list of networks.</p></li><li><p>Select <code>Change Settings</code>.</p></li><li><p>Pick the server that is the closest to your location out of the below chart and enter its Primary and Secondary DNS into your connection settings.</p></li><li><p>Save the settings and test the connection.</p><hr></li></ol><h3 id="using-homebrew-to-set-90dns-on-all-existing-wifi-networks" tabindex="-1">Using homebrew to set 90DNS on all existing WiFi networks <a class="header-anchor" href="#using-homebrew-to-set-90dns-on-all-existing-wifi-networks" aria-label="Permalink to &quot;Using homebrew to set 90DNS on all existing WiFi networks&quot;">​</a></h3><ol><li>Download <a href="https://github.com/suchmememanyskill/switch-90dns-setter/releases" target="_blank" rel="noreferrer">switch-90dns-setter</a> and put it in the <code>/switch</code> folder.</li><li>Launch CFW and open the homebrew menu.</li><li>Launch <code>90DNS Setter</code>.</li><li>Press X to apply 90DNS to all WiFi networks.</li><li>Press Y to reboot the Switch.</li><li>Check in system settings if networks have a custom DNS applied.</li></ol><table tabindex="0"><thead><tr><th style="text-align:left;">Location</th><th style="text-align:left;">Primary DNS</th><th style="text-align:left;">Secondary DNS</th></tr></thead><tbody><tr><td style="text-align:left;">Europe (Server located in France)</td><td style="text-align:left;"><code>163.172.141.219</code></td><td style="text-align:left;"><code>207.246.121.77</code></td></tr><tr><td style="text-align:left;">America (Server located in the USA)</td><td style="text-align:left;"><code>207.246.121.77</code></td><td style="text-align:left;"><code>163.172.141.219</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Example for a 90DNS connection with the Europe settings:</p><p><img src="'+s+'" alt="Visual for System Settings serial location"></p></div><h2 id="testing-if-you-can-reach-nintendo" tabindex="-1">Testing if you can reach Nintendo <a class="header-anchor" href="#testing-if-you-can-reach-nintendo" aria-label="Permalink to &quot;Testing if you can reach Nintendo&quot;">​</a></h2><h3 id="testing-via-the-eshop-stock" tabindex="-1">Testing via the eShop (Stock) <a class="header-anchor" href="#testing-via-the-eshop-stock" aria-label="Permalink to &quot;Testing via the eShop (Stock)&quot;">​</a></h3><ol><li>Open the eShop. Wait until it either opens or displays an error.</li><li>If it displays &quot;Unable to display page.&quot;, you seem to have blocked Nintendo&#39;s servers.</li></ol><h3 id="testing-via-a-homebrew-app-cfw" tabindex="-1">Testing via a homebrew app (CFW) <a class="header-anchor" href="#testing-via-a-homebrew-app-cfw" aria-label="Permalink to &quot;Testing via a homebrew app (CFW)&quot;">​</a></h3><ol><li>Download the latest release of the <a href="https://github.com/meganukebmp/Switch_90DNS_tester/releases" target="_blank" rel="noreferrer">90DNS Tester</a></li><li>Place the <code>Switch_90DNS_tester.nro</code> in the <code>switch</code> folder on your SD.</li><li>Enter the homebrew menu and run the 90DNS Tester.</li><li>After the test finished it should look similar to the below picture, with every <code>nintendo</code> domain being blocked.</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><img src="'+r+'" alt="tester example"></p></div>',27)]))}const b=t(l,[["render",c]]);export{f as __pageData,b as default};