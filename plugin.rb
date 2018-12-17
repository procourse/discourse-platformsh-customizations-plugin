# name: discourse-platformsh-customizations
# about: Customizations for Platform.sh
# version: 0.1
# author: ProCourse procourse.co

enabled_site_setting :platformsh_customizations_enabled

register_asset 'stylesheets/platformsh-customizations.scss'

after_initialize do 
    SiteSetting.logout_redirect = SiteSetting.platformsh_logout_redirect_url
end