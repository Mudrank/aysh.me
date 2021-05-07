puts "What's the name of the product?"
name = gets
puts "A small tagline pls :)"
tag = gets
puts "Where can I find it?"
link = gets
puts "Enter the description"
desc = gets
puts "What's the CTA?"
cta = gets
puts "Perfect! Choose a slug to publish it!"
slug = gets
File.write("p/" + slug.chomp + '.html', '<html><meta property="og:url" content="https://aysh.me/p/' + slug.chomp + '.html" /><meta property="og:title" content="' + name.chomp + '" /><meta property="og:description" content="' + tag.chomp + '" /><meta property="og:image" content="https://aysh.me/projects" /><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="@ayshptk"><meta name="twitter:title" content="' + name.chomp + '"><meta name="twitter:description" content="' + tag.chomp + '" /><meta name="twitter:image" content="https://aysh.me/p/template.html" /><link href="./style.css" rel="stylesheet"><script src="./page.js"></script><body><div id="body" class="body"><nav><a style="text-decoration: none; color: black;"  class="twitter" href="https://twitter.com/ayshptk">@ayshptk</a><a class="back" style="text-decoration: none; color: black; margin-left:  5%;" onClick="goback()">←back</a> </nav><h1 class="title" style="margin-bottom: 0; margin-top: 5vh;">' + name.chomp + '</h1><br><br><h2 class="sub" style="margin-top: 0%;">&nbsp;' + desc.chomp + '</h2>&nbsp; <a href="' + link.chomp + '" style="text-decoration: underline;">' + cta.chomp + '↗</a></div></body></html>')
p = File.open("projects.html")
pr = p.read
File.write("backup.html", pr)
split = pr.split("!--identifier-for-script-please-ignore :) -->")
File.write("projects.html", split[0] + '!--identifier-for-script-please-ignore :) --><!--gen--><a href="p/' + slug.chomp + '.html"><span class="highlight tag">' + name.chomp + '</span></a><span>(' + tag.chomp + ')</span><br><br>' + split[1])
p.close