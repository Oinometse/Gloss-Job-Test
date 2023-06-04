!function(){"use strict";var e={n:function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,{a:s}),s},d:function(t,s){for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,s=window.wp.i18n,n=window.wp.components,a=window.wp.apiFetch,i=e.n(a),o=window.wp.hooks;class l extends t.Component{constructor(){super(...arguments),this.state={isAPILoaded:!1,isAPISaving:!1,isRegeneratingCSS:!1,settings:generateBlocksSettings.settings},this.getSetting=this.getSetting.bind(this),this.updateSettings=this.updateSettings.bind(this)}componentDidMount(){this.setState({isAPILoaded:!0})}getSetting(e,t){let s=t;return void 0!==this.state.settings[e]&&(s=this.state.settings[e]),s}updateSettings(e){this.setState({isAPISaving:!0});const t=e.target.nextElementSibling;i()({path:"/generateblocks/v1/settings",method:"POST",data:{settings:this.state.settings}}).then((e=>{this.setState({isAPISaving:!1}),t.classList.add("gblocks-action-message--show"),t.textContent=e.response,e.success&&e.response?setTimeout((function(){t.classList.remove("gblocks-action-message--show")}),3e3):t.classList.add("gblocks-action-message--error")}))}render(){return this.state.isAPILoaded?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"generateblocks-settings-main"},(0,o.applyFilters)("generateblocks.dashboard.beforeSettings","",this),(0,t.createElement)(n.PanelBody,{title:(0,s.__)("Settings","generateblocks")},(0,t.createElement)("div",{className:"gblocks-dashboard-panel-row-wrapper"},(0,t.createElement)(n.PanelRow,{className:"gblocks-container-width"},(0,t.createElement)("div",{className:"gblocks-units"},"px"),(0,t.createElement)(n.TextControl,{type:"number",label:(0,s.__)("Global max-width","generateblocks"),help:generateBlocksSettings.gpContainerWidth?(0,s.__)("The global max-width is set by GeneratePress in the Customizer.","generateblocks"):(0,s.__)("The global max-width value you can use in your blocks.","generateblocks"),disabled:!!generateBlocksSettings.gpContainerWidth,value:generateBlocksSettings.gpContainerWidth||this.getSetting("container_width"),onChange:e=>{this.setState({settings:{...this.state.settings,container_width:e}})}}),!!generateBlocksSettings.gpContainerWidthLink&&(0,t.createElement)("a",{href:generateBlocksSettings.gpContainerWidthLink,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"12px"}},(0,s.__)("Go to option →","generateblocks"))),(0,t.createElement)(n.PanelRow,{className:"gblocks-css-print-method"},(0,t.createElement)(n.SelectControl,{label:(0,s.__)("CSS Print Method","generateblocks"),help:(0,s.__)("Generating your CSS in external files is better for overall performance.","generateblocks"),value:this.getSetting("css_print_method"),options:[{label:(0,s.__)("External File","generateblocks"),value:"file"},{label:(0,s.__)("Inline Embedding","generateblocks"),value:"inline"}],onChange:e=>{this.setState({settings:{...this.state.settings,css_print_method:e}})}})),"file"===this.getSetting("css_print_method")&&(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.BaseControl,{id:"gblocks-regenerate-css",className:"gblocks-regenerate-css",help:(0,s.__)("Force your external CSS files to regenerate next time their page is loaded.","generateblocks")},(0,t.createElement)("div",{className:"gblocks-action-button"},(0,t.createElement)(n.Button,{isSecondary:!0,onClick:e=>{this.setState({isRegeneratingCSS:!0});const t=e.target.nextElementSibling;i()({path:"/generateblocks/v1/regenerate_css_files",method:"POST"}).then((e=>{this.setState({isRegeneratingCSS:!1}),t.classList.add("gblocks-action-message--show"),t.textContent=e.response,e.success&&e.response?setTimeout((function(){t.classList.remove("gblocks-action-message--show")}),3e3):t.classList.add("gblocks-action-message--error")}))}},this.state.isRegeneratingCSS&&(0,t.createElement)(n.Spinner,null),!this.state.isRegeneratingCSS&&(0,s.__)("Regenerate CSS Files","generateblocks")),(0,t.createElement)("span",{className:"gblocks-action-message"})))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.ToggleControl,{label:(0,s.__)("Sync Responsive Previews","generateblocks"),help:(0,s.__)("Sync our responsive preview controls with the editor responsive previews.","generateblocks"),checked:this.getSetting("sync_responsive_previews"),onChange:e=>{this.setState({settings:{...this.state.settings,sync_responsive_previews:e}})}})),(0,o.applyFilters)("generateblocks.dashboard.settings","",this),(0,t.createElement)("div",{className:"gblocks-action-button"},(0,t.createElement)(n.Button,{isPrimary:!0,disabled:this.state.isAPISaving,onClick:e=>this.updateSettings(e)},this.state.isAPISaving&&(0,t.createElement)(n.Spinner,null),!this.state.isAPISaving&&(0,s.__)("Save")),(0,t.createElement)("span",{className:"gblocks-action-message"})))),(0,o.applyFilters)("generateblocks.dashboard.afterSettings","",this))):(0,t.createElement)(n.Placeholder,{className:"gblocks-settings-placeholder"},(0,t.createElement)(n.Spinner,null))}}window.addEventListener("DOMContentLoaded",(()=>{(0,t.render)((0,t.createElement)(l,null),document.getElementById("gblocks-block-default-settings"))}))}();