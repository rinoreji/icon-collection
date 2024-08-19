#!/bin/bash
# node clean-up.js ../Azure_Public_Service_Icons ../temp_svg
# node clean-up.js ../entra-icons ../temp_svg
# node clean-up.js ../m365-icons ../temp_svg
# node clean-up.js ../power-platform-icons ../temp_svg
# node clean-up.js ../d365-icons ../temp_svg

# node gallery.js ../Azure_Public_Service_Icons "Official Azure Icon Set 2"

node gallery.js ../azure-docs "Azure Docs"
node gallery.js ../azure-patterns "Azure Patterns Collection"
node gallery.js ../azure-icons "Official Azure Icon Set"
node gallery.js ../azure-cds "Cloud Design Studio Set"
node gallery.js ../logos "Logos & Brands"
node gallery.js ../other "Other Icons"
#node gallery.js ../cloud-old "Old MS Cloud Icon Set"

node gallery.js ../entra-icons "Microsoft Entra ID architecture icons"
node gallery.js ../m365-icons "Microsoft 365 architecture icons"
node gallery.js ../power-platform-icons "Microsoft Power Platform icons"
node gallery.js ../d365-icons "Dynamics 365 icons"


node search.js ../
