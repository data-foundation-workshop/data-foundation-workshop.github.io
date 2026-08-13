// Shared sidebar navigation for all workshop pages
// Edit this file to update the menu across every page.

const NAV_ITEMS = [
  { href: "index.html", icon: "fa-home", label: "Introduction" },
  { href: "lab-0.html", icon: "fa-plug", label: "Lab 0", subtitle: "Connect the Systems" },
  { href: "lab-1.html", icon: "fa-book", label: "Lab 1", subtitle: "Define Business Meaning & Governance" },
  { href: "lab-2.html", icon: "fa-search", label: "Lab 2", subtitle: "Discover What Is in the Data" },
  { href: "lab-3.html", icon: "fa-check-square-o", label: "Lab 3", subtitle: "Agree on What Good Data Means" },
  { href: "lab-4a.html", icon: "fa-tachometer", label: "Lab 4A", subtitle: "Build Rules & Measure the Data" },
  { href: "lab-4b.html", icon: "fa-filter", label: "Lab 4B", subtitle: "Clean, Validate & Route the Data" },
  { href: "lab-5.html", icon: "fa-users", label: "Lab 5", subtitle: "Master the Customer in MDM" },
  { href: "lab-6.html", icon: "fa-share-alt", label: "Lab 6", subtitle: "Choose How Consumers Use the Master" },
  { href: "lab-7.html", icon: "fa-bolt", label: "Lab 7", subtitle: "Activate in Salesforce Data 360" },
  { href: "lab-8.html", icon: "fa-sitemap", label: "Lab 8", subtitle: "Catalog, Govern & Trace the Landscape" },
  { href: "lab-9.html", icon: "fa-shield", label: "Lab 9", subtitle: "Security & Architecture Review" }
];

function buildNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const sidebar = document.getElementById("mySidebar");
  if (!sidebar) return;

  let html = '<br><div class="w3-container">';
  html += '<a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu"><i class="fa fa-remove"></i></a>';
  html += '<h4>Trusted Data Foundation with Informatica</h4>';
  html += '<p>Hands-on Workshop</p>';
  html += '</div>';
  html += '<div class="w3-bar-block">';

  NAV_ITEMS.forEach(function(item) {
    const isActive = (currentPage === item.href) ? " w3-light-grey" : "";
    if (item.subtitle) {
      html += '<a href="' + item.href + '" onclick="w3_close()" class="w3-bar-item w3-button' + isActive + '" style="display:flex !important;align-items:flex-start;padding:12px 16px;text-decoration:none;">';
      html += '<i class="fa ' + item.icon + ' fa-fw w3-margin-right" style="margin-top:3px;width:24px;flex-shrink:0;"></i>';
      html += '<span style="flex-grow:1;line-height:1.4;white-space:normal;">';
      html += '<span style="font-weight:bold;display:block;">' + item.label + '</span>';
      html += '<span style="font-size:0.85em;color:#555;display:block;">' + item.subtitle + '</span>';
      html += '</span></a>';
    } else {
      html += '<a href="' + item.href + '" onclick="w3_close()" class="w3-bar-item w3-button w3-padding' + isActive + '">';
      html += '<i class="fa ' + item.icon + ' fa-fw w3-margin-right"></i>' + item.label + '</a>';
    }
  });

  html += '</div>';
  sidebar.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", buildNav);
