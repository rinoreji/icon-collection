{% for item in site.data.navigation %}

{{ #### [{{item.title}}]({{ item.url }}) | markdownify }}
{{ item.desc | markdownify }}  

{% endfor %}