document.addEventListener('DOMContentLoaded', function() {
  function Tabs() {
    this.actvieTab = document.getElementsByClassName("active-tab")[0];
    this.actvieContent = document.getElementsByClassName("active-content")[0];
    this.contentBox = document.getElementById("content-container")
  }

  Tabs.prototype = {
    bindEvents: function() {
      document.addEventListener('click', function(event) {
        if (event.target.className != 'tab-header') return;
        this.updateActive(event)
      }.bind(this))
    },
    updateActive: function(event, content) {
      var tab = event.target
      var content = document.getElementById(tab.id.replace('header', 'content'))
      tab.className = 'tab-header active-tab'
      content.className = 'active-content'
      this.reset(tab, content)
    },
    reset: function(tab, content) {
      this.actvieTab.className = 'tab-header'
      this.actvieContent.className = ''
      this.actvieTab = tab
      this.actvieContent = content
    }
  }

  var tabs = new Tabs()
  tabs.bindEvents();
})