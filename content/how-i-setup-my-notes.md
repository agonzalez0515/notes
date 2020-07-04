---
title: How I setup these notes
date: 07-03-2020
---
# How I setup these notes


These notes are built with the [[Gatsby]] theme https://github.com/aravindballa/gatsby-theme-andy and [[Foam]] https://foambubble.github.io/foam/. I followed the readme for gatsby-theme-andy and used a `content` folder to put my notes in. I then put the Foam `.vscode` folder with the workspace settings and extensions inside the `content` folder to make it a Foam workspace. 

My workflow for note taking is going to be to only open the content folder so that I can ignore the rest of the gatsby stuff. The gatsby stuff is to make it a website and make it pretty, but it has no role in the notetaking experience. That's all handled by Foam and the extensions. 

One part that I was stuck in was making the preview popup show up. The andy theme comes with it, but it wasn't working for me in the beginning. Turns out that because I set the `rootPath` to be "/notes", the `AnchorTag` component inside `MdxComponents` could not retrieve the content correctly. I had to shadow the component and add "/notes" to the regex so that it find the right note for the corresponding link.

Another thing that I realized is that Foam does not use frontmatter by default, so my notes were looking weird because there was no `title` attribute. I just need to remember to use frontmatter instead of an `h1` as the title of each note. I wish there was a way to configure the `Markdown Notes: add new note` command to have a template. 