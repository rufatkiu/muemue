/* eslint-disable no-undef */
browser.runtime.setUninstallURL('https://star.metastem.su/uninstall');

browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    browser.tabs.create({
      url: browser.runtime.getURL('index.html')
    });
  }
});
