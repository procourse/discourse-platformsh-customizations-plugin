import { withPluginApi } from "discourse/lib/plugin-api"; 
import { h } from "virtual-dom";

function initialize_platformsh_customizations(api) {
  api.createWidget("platformsh-user-menu-links", {
      html() {
        
        return h(
            "ul.platformsh-links",
            [
                h("li", 
                    this.attach("link", {
                        href: Discourse.SiteSettings.platformsh_support_url,
                        label: "platformsh_customizations.support", 
                    }
                )),
                h("li", 
                    this.attach("link", {
                        href: Discourse.SiteSettings.platformsh_user_url,
                        label: "platformsh_customizations.user", 
                    }
                )),
                h("li", 
                    this.attach("link", {
                        href: Discourse.SiteSettings.platformsh_billing_url,
                        label: "platformsh_customizations.billing", 
                    }
                ))
            ]
        );
        
      }
  });
  api.reopenWidget("user-menu", {
    panelContents() {
        const path = this.currentUser.get("path");
    
        let result = [
          this.attach("user-menu-links", { path }),
          this.attach("platformsh-user-menu-links"),
          this.attach("user-notifications", { path })
        ];
    
        if (this.settings.showLogoutButton || this.state.hasUnread) {
          result.push(h("hr.bottom-area"));
        }
    
        if (this.settings.showLogoutButton) {
          result.push(
            h("div.logout-link", [
              h(
                "ul.menu-links",
                h(
                  "li",
                  this.attach("link", {
                    action: "logout",
                    className: "logout",
                    icon: "sign-out",
                    href: "",
                    label: "user.log_out"
                  })
                )
              )
            ])
          );
        }
    
        if (this.state.hasUnread) {
          result.push(this.attach("user-menu-dismiss-link"));
        }
    
        return result;
      },
  });
}

export default {
  name: "platformsh-customizations",

  initialize() {
    withPluginApi("0.8.24", initialize_platformsh_customizations);
  }

  
};