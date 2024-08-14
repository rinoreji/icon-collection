{% for item in site.data.navigation %}

#### [{{item.title}}]({{ item.url }})
{{ item.desc | markdownify }}  

{% endfor %}