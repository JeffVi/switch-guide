import{_ as d,c,a1 as l,G as a,w as n,B as r,o as h,j as e,a as o}from"./chunks/framework.DSsUAKzO.js";const u="/switch-guide/assets/game_cheating.CDKVD1fJ.jpg",E=JSON.parse('{"title":"Games cheats","description":"","frontmatter":{},"headers":[],"relativePath":"homebrew/edizon.md","filePath":"homebrew/edizon.md"}'),m={name:"homebrew/edizon.md"};function f(p,t,b,g,y,w){const i=r("Tab"),s=r("Tabs");return h(),c("div",null,[t[2]||(t[2]=l('<h1 id="games-cheats" tabindex="-1">Games cheats <a class="header-anchor" href="#games-cheats" aria-label="Permalink to &quot;Games cheats&quot;">​</a></h1><h2 id="edizon" tabindex="-1">EdiZon <a class="header-anchor" href="#edizon" aria-label="Permalink to &quot;EdiZon&quot;">​</a></h2><p>For cheats management, <a href="https://github.com/WerWolv/EdiZon" target="_blank" rel="noreferrer">EdiZon</a> and/or <a href="https://github.com/tomvita/EdiZon-SE" target="_blank" rel="noreferrer">EdiZon-SE</a> (up to date and offers more features) are recommended. They offer support for Atmosphere&#39;s cheat engine, providing an easy way to download new cheats, as well as toggle them on or off.</p><h2 id="installation-requirements" tabindex="-1">Installation requirements: <a class="header-anchor" href="#installation-requirements" aria-label="Permalink to &quot;Installation requirements:&quot;">​</a></h2><ul><li>An archive manager like <a href="https://www.7-zip.org/" target="_blank" rel="noreferrer">7-Zip</a></li><li>The latest release of <a href="https://github.com/WerWolv/EdiZon/releases" target="_blank" rel="noreferrer">EdiZon</a> (the <code>EdiZon.nro</code> file) or <a href="https://github.com/tomvita/EdiZon-SE/releases" target="_blank" rel="noreferrer">EdiZon-SE</a> (the <code>EdiZon.zip</code> file)</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>EdiZon overlay</strong></p><p>EdiZon also offers a Tesla-Menu overlay, however, the official EdiZon overlay is no longer maintained and will result in Atmosphere crashing when trying to use the EdiZon overlay on firmware version 16.0.0+.</p><p>The maintained EdiZon overlay can be found <a href="https://github.com/proferabg/EdiZon-Overlay/releases" target="_blank" rel="noreferrer">here</a>.</p></div>',6)),a(s,{tabs:""},{default:n(()=>[a(i,{name:"Installation instructions (EdiZon):",default:"true"},{default:n(()=>t[0]||(t[0]=[e("ol",null,[e("li",null,[o("Boot into Hekate and go to "),e("code",null,"Tools"),o(" > "),e("code",null,"USB Tools"),o(" > "),e("code",null,"SD Card"),o(", then plug your Switch into your PC via USB.")]),e("li",null,"Your microSD card should now be accessible on your PC, open it."),e("li",null,[o("Put the "),e("code",null,"EdiZon.nro"),o(" in "),e("code",null,"sd:/switch"),o(".")]),e("li",null,"Boot into CFW.")],-1)])),_:1}),a(i,{name:"Installation instructions (EdiZon-SE):"},{default:n(()=>t[1]||(t[1]=[e("ol",null,[e("li",null,[o("Boot into Hekate and go to "),e("code",null,"Tools"),o(" > "),e("code",null,"USB Tools"),o(" > "),e("code",null,"SD Card"),o(", then plug your Switch into your PC via USB.")]),e("li",null,"Your microSD card should now be accessible on your PC, open it."),e("li",null,[o("Extract the "),e("code",null,".zip"),o(" file to a location on your computer. "),e("ul",null,[e("li",null,[o("If your archive manager allows for it, you can also simply open the "),e("code",null,".zip"),o(" file directly.")])])]),e("li",null,[o("Copy the "),e("em",null,"contents"),o(" of the (extracted) "),e("code",null,".zip"),o(" file to the root of your microSD card. "),e("ul",null,[e("li",null,[e("strong",null,"Optional:"),o(" You can verify if you've installed EdiZon-SE correctly, you should have a folder called "),e("code",null,"054e4f4558454000"),o(" (EdiZon-SE) in "),e("code",null,"sd:/atmosphere/contents"),o(" and an "),e("code",null,"EdiZon.nro"),o(" file in "),e("code",null,"sd:/switch/EdiZon"),o(".")])])]),e("li",null,"Boot into CFW.")],-1)])),_:1})]),_:1}),t[3]||(t[3]=l('<h2 id="usage-instructions" tabindex="-1">Usage instructions <a class="header-anchor" href="#usage-instructions" aria-label="Permalink to &quot;Usage instructions&quot;">​</a></h2><p>Atmosphère looks for cheats to load in the <code>contents</code> sub-folder of the <code>atmosphere</code> folder. The template it looks for is <code>sd:/atmosphere/contents/&lt;title_id&gt;/cheats/&lt;build_id&gt;.txt</code>. You need to create the <code>&lt;title_id&gt;</code> folder and sub-folders manually:</p><ul><li><code>title_id</code> being the title or program of a game. This is game specific and can be found on EdiZon&#39;s cheat menu (TID and BID, see the bottom of this page for a sample), <a href="https://switchbrew.org/wiki/Title_list/Games" target="_blank" rel="noreferrer">switchbrew</a> and <a href="https://nswdb.com/" target="_blank" rel="noreferrer">nswdb</a>. <ul><li><strong>Note:</strong> Title ID means the same thing as Program ID.</li></ul></li><li><code>build_id</code> being the version of a game. This is game specific and can be found on EdiZon&#39;s cheat menu (BID, see the bottom of this page for a sample) Cheats can be version specific so make sure the cheats you are using are compatible with your game version.</li></ul><p><strong>Note:</strong> On Atmosphère 0.9.4 and below <code>contents</code> is called <code>titles</code>.</p><p>Once the title is launched while in Atmosphere, your cheats should be applied.</p><h2 id="preventing-cheats-from-being-enabled-by-default" tabindex="-1">Preventing cheats from being enabled by default <a class="header-anchor" href="#preventing-cheats-from-being-enabled-by-default" aria-label="Permalink to &quot;Preventing cheats from being enabled by default&quot;">​</a></h2><p>To prevent cheats from being enabled by default, you can change your Atmosphère configuration by following the steps below.</p><ol><li>Copy <code>system_settings.ini</code> from <code>sd:/atmosphere/config_templates</code> to <code>sd:/atmosphere/config</code> if it&#39;s not already there.</li><li>Open the <code>system_settings.ini</code> file with a text editor and edit the line <code>; dmnt_cheats_enabled_by_default = u8!0x1</code> to <code>dmnt_cheats_enabled_by_default = u8!0x0</code>. <ul><li>Make sure you remove the space and the semicolon &quot;<code>; </code>&quot; in front of <code>dmnt_cheats_enabled_by_default</code>.</li></ul></li></ol><p>By default, holding the L button while launching a game will disable any game modification.</p><p>Here the Title ID of the game (TID) is <code>0100646009FBE000</code> and the Build ID of the game (BID) is <code>0B9A75586BC1A6C6</code>. Cheats are loaded from <code>sd:/atmosphere/contents/0100646009FBE000/cheats/0B9A75586BC1A6C6.txt</code> in this example.</p><p><img src="'+u+'" alt="ExampleGameCheat"></p><h2 id="additional-information" tabindex="-1">Additional information: <a class="header-anchor" href="#additional-information" aria-label="Permalink to &quot;Additional information:&quot;">​</a></h2><p>For more in-depth details about Atmosphere&#39;s cheat engine, you can refer to <a href="https://github.com/Atmosphere-NX/Atmosphere/blob/master/docs/features/cheats.md" target="_blank" rel="noreferrer">this page</a>.</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><h3 id="edizon-isn-t-showing-up-when-i-open-the-homebrew-menu" tabindex="-1">EdiZon isn&#39;t showing up when I open the Homebrew menu!: <a class="header-anchor" href="#edizon-isn-t-showing-up-when-i-open-the-homebrew-menu" aria-label="Permalink to &quot;EdiZon isn&#39;t showing up when I open the Homebrew menu!:&quot;">​</a></h3><p>Assuming you&#39;ve followed the installation instructions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via Hekate for all files.</p><p>This can be done by booting into Hekate and going to <code>Tools</code> &gt; <code>Arch bit • RCM Touch • Pkg1/2</code> &gt; <code>Fix Archive Bit</code>.</p>',17))])}const v=d(m,[["render",f]]);export{E as __pageData,v as default};