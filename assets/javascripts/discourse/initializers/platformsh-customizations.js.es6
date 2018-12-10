import { withPluginApi } from "discourse/lib/plugin-api"; 
import { h } from "virtual-dom";

function initialize_platformsh_customizations(api) {
  api.changeWidgetSetting("user-menu", "maxWidth", "150");
  api.reopenWidget("user-menu", {
      panelContents() {
          let result = h("ul.menu-links", [
            h(
                "li",
                this.attach("link", {
                    className: "support",
                    href: "https://accounts.platform.sh/support",
                    rawLabel: "Support"
                })
            ),
            h(
                "li",
                this.attach("link", {
                    className: "user",
                    href: "https://accounts.platform.sh/user",
                    rawLabel: "User"
                })
            ),
            h(
                "li",
                this.attach("link", {
                    className: "billing",
                    href: "https://accounts.platform.sh/user/orders",
                    rawLabel: "Billing"
                })
            ),
            h(
                "li",
                this.attach("link", {
                    action: "logout",
                    className: "logout",
                    href: "https://accounts.platform.sh/user/logout",
                    rawLabel: "Log Out"
                })
            )
        ]);
        return result;
      }
  });
}

export default {
  name: "platformsh-customizations",

  initialize() {
    withPluginApi("0.8.24", initialize_platformsh_customizations);
  }

  
};