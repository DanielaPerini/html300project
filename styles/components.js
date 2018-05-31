Vue.component('app-header', {
  template: '<header><img srcset="img/logo-large.png 90w, img/logo-medium.png 75w, img/logo-small.png 50w" sizes="(max-width: 400px) 50px, (max-width: 736px) 75px, (min-width: 737px) 90px" src="img/logo-large.png" alt="FESC logo"><nav><ul class="topnav"><li><a href="index.html">Home</a></li><li><a href="research.html">FESC Research</a></li><li><a href="education.html">Education</a></li><li><a class="active" href="about.html">About Us</a></li><li><a href="contact.html">Contact</a></li></ul></nav></header>'
})

Vue.component('app-footer', {
  template: '<footer><a class="twitter-share-button" href="Check%20the%20new%20FESC%20website!%20https%3A%2F%2Fdanielaperini.github.io%2Fhtml300project%2Findex.html">Tweet</a><iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdanielaperini.github.io%2Fhtml300project%2Findex.html&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId" width="59" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></footer>'
})